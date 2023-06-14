import { act, renderHook } from "@testing-library/react";
import { nftsMock } from "../mocks/nftsMock";
import useApi from "./useApi";
import { wrapWithProvider } from "../utils/testUtils";
import { server } from "../mocks/server";
import { errorHandler } from "../mocks/handlers";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useApi function", () => {
  describe("When it is called the function addNfts with nft to add", () => {
    test("Then it should show feedback message ´NTF COULDN'T ADD´ ", async () => {
      server.resetHandlers(...errorHandler);

      const {
        result,
        result: {
          current: { addNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const expectedFeedbackMessage = "NTF COULDN'T ADD";

      const nftToAdd = nftsMock[0];

      await act(() => {
        addNft(nftToAdd);
      });

      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });

  describe("When it is called the function addNfts nft to add", () => {
    test("Then it should return 200 with feedback message ´NTF ADDED CORRECTLY´ ", async () => {
      const {
        result,
        result: {
          current: { addNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const expectedFeedbackMessage = "NTF ADDED CORRECTLY";

      const nftToAdd = nftsMock[0];

      await act(() => {
        addNft(nftToAdd);
      });

      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });

  describe("When it is called the function deleteNfts with id", () => {
    test("Then it should show feedback message ´NTF WAS DELETED´ ", async () => {
      const {
        result,
        result: {
          current: { deleteNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });
      const expectedFeedbackMessage = "NTF WAS DELETED";

      const idOfNftToDelete = nftsMock[0]._id;

      await act(() => {
        deleteNft(idOfNftToDelete as string);
      });

      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });

  describe("When it is called the function deleteNfts with id inexistent", () => {
    test("Then it should show feedback message ´NTF NOT DELETED´ ", async () => {
      server.resetHandlers(...errorHandler);

      const {
        result,
        result: {
          current: { deleteNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const expectedFeedbackMessage = "NTF NOT DELETED";

      await act(() => {
        deleteNft("THIS-ID-NOT-EXIST");
      });

      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });

  describe("When it is called the function getNfts", () => {
    test("Then it should return a list of nfts", async () => {
      const expectedNfts = { length: 3, nfts: nftsMock };

      const {
        result: {
          current: { getNfts },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nfts = await getNfts(0, 10);

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

      const expectedFeedbackMessage = "ERROR GETTING NFTS";

      const nfts = await act(() => {
        getNfts(0, 5);
      });

      expect(nfts).toStrictEqual(undefined);
      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });

  describe("When it is called the function getNftById with existent id", () => {
    test("Then it should return an Nft", async () => {
      const {
        result: {
          current: { getNftById },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nftId = nftsMock[1]._id;

      const nft = await getNftById(nftId as string);

      expect(nft).toStrictEqual(nftsMock[0]);
    });
  });

  describe("When it is called the function getNftById with inexistent id", () => {
    test("Then it should not return an Nft", async () => {
      server.resetHandlers(...errorHandler);

      const {
        result: {
          current: { getNftById },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nftId = nftsMock[1]._id;

      const nft = await act(() => {
        getNftById(nftId as string);
      });

      expect(nft).toStrictEqual(undefined);
    });
  });

  describe("When it is called the function updateNft with an object to update", () => {
    test("Then it should return an Nft updated", async () => {
      const {
        result: {
          current: { updateNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nftToUpdate = nftsMock[1];

      const nft = await updateNft(nftToUpdate);

      expect(nft).toStrictEqual(nftToUpdate);
    });
  });

  describe("When it is called the function getNftById with inexistent id", () => {
    test("Then it should not return an Nft", async () => {
      server.resetHandlers(...errorHandler);

      const expectedFeedbackMessage = "NTF COULDN'T UPLOAD";

      const {
        result,
        result: {
          current: { updateNft },
        },
      } = renderHook(() => useApi(), {
        wrapper: wrapWithProvider,
      });

      const nftToUpdate = nftsMock[1];

      const nft = await act(() => {
        updateNft(nftToUpdate);
      });

      expect(nft).toStrictEqual(undefined);
      expect(result.current.feedbackMessage).toStrictEqual(
        expectedFeedbackMessage
      );
    });
  });
});
