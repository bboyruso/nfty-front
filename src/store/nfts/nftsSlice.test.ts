import { nftsMock } from "../../mocks/nftsMock";
import { NftsState, NftStructure } from "../../types";
import {
  addNftsActionCreator,
  deleteNftsActionCreator,
  loadNftsActionCreator,
  nftsReducer,
} from "./nftsSlice";

describe("Given a NftsReducer", () => {
  describe("When it receives an empty list of Nfts and a load nfts action with two Nfts", () => {
    test("Then it should return a new state with thats Nfts", () => {
      const currentNfts: NftStructure[] = [];

      const currentNftsState: NftsState = { nfts: currentNfts };

      const newNfts: NftStructure[] = nftsMock;

      const loadNftsAction = loadNftsActionCreator(newNfts);

      const expectedNewNftsState: NftsState = { ...currentNfts, nfts: newNfts };

      const newState = nftsReducer(currentNftsState, loadNftsAction);
      expect(expectedNewNftsState).toStrictEqual(newState);
    });
  });

  describe("When it receives a current state and a deleteNft action with first nft id to delete", () => {
    test("Then it should return a new state without deleted Nft", () => {
      const id = nftsMock[0]._id;

      const currentNfts: NftStructure[] = nftsMock;

      const currentNftsState: NftsState = { nfts: currentNfts };

      const expectedNftsState = {
        nfts: nftsMock.filter((contact) => contact._id !== id),
      };

      const newState = nftsReducer(
        currentNftsState,
        deleteNftsActionCreator(id)
      );

      expect(newState).toStrictEqual(expectedNftsState);
    });
  });

  describe("When current state is 3 Nfts and receives an addNft action with 1 nft  to add", () => {
    test.only("Then it should return a new state with 4 Nfts", () => {
      const currentNftsState: NftsState = { nfts: nftsMock };

      const newState = nftsReducer(
        currentNftsState,
        addNftsActionCreator(nftsMock[0])
      );

      expect(newState.nfts.length).toBe(currentNftsState.nfts.length + 1);
    });
  });
});
