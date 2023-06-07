import { renderHook } from "@testing-library/react";
import { nftsMock } from "../mocks/nftsMock";
import { NftStructure } from "../types";
import useApi from "./useApi";
import { wrapWithProvider } from "../utils/testUtils";
import { server } from "../mocks/server";
import { errorHandler } from "../mocks/handlers";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useApi function", () => {
  describe("When it is called the function deleteNfts with id", () => {
    test("Then it should return return  status code 200", async () => {
      const {
        result,
        result: {
          current: { deleteNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });
      const expectedStatusCode = 200;

      const idOfNftToDelete = nftsMock[0]._id;

      const nftsResponse = await deleteNft(idOfNftToDelete);

      expect(nftsResponse).toStrictEqual(expectedStatusCode);
      expect(result.current.feedbackMessage).toStrictEqual("NTF WAS DELETED");
    });
  });

  describe("When it is called the function deleteNfts with id inexistent", () => {
    test("Then it should return status code 500", async () => {
      server.resetHandlers(...errorHandler);

      const {
        result,
        result: {
          current: { deleteNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });
      const expectedStatusCode = 500;

      const nftsResponse = await deleteNft("THIS-ID-NOT-EXIST");

      expect(nftsResponse).toStrictEqual(expectedStatusCode);
      expect(result.current.feedbackMessage).toStrictEqual("NTF NOT DELETED");
    });
  });

  describe("When it is called the function getNfts", () => {
    test("Then it should return a list of nfts", async () => {
      const expectedNfts: NftStructure[] = nftsMock;

      const {
        result: {
          current: { getNfts },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nfts = await getNfts();

      expect(nfts).toStrictEqual(expectedNfts);
    });
  });

  describe("When it is called the function getNfts and reserves an error", () => {
    test("Then it should return undefined nfts and message `Error getting NFTs`", async () => {
      server.resetHandlers(...errorHandler);

      const {
        result,
        result: {
          current: { getNfts },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nfts = await getNfts();

      expect(nfts).toStrictEqual(undefined);
      expect(result.current.feedbackMessage).toStrictEqual(
        "Error getting NFTs"
      );
    });
  });
});
