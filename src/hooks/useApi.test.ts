import { renderHook } from "@testing-library/react";
import { nftsMock } from "../mocks/nftsMock";
import { NftStructure } from "../types";
import useApi from "./useApi";
import { wrapWithProvider } from "../utils/testUtils";
import { server } from "../mocks/server";
import { errorHandler } from "../mocks/handlers";

describe("Given a useApi function", () => {
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
      expect(result.current.errorMessage).toStrictEqual("Error getting NFTs");
    });
  });
});
