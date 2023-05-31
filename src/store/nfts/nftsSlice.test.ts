import { nftsMock } from "../../mocks/nftsMock";
import { NftsState, NftsStructure } from "../../types";
import { loadNftsActionCreator, nftsReducer } from "./nftsSlice";

describe("Given a loadNftsReducer", () => {
  describe("When it receives an empty list of Nfts and a load nfts action with two Nfts", () => {
    test("Then it should return a new state with thats Nfts", () => {
      const currentNfts: NftsStructure[] = [];

      const currentNftsState: NftsState = { nfts: currentNfts };

      const newNfts: NftsStructure[] = nftsMock.nfts;

      const loadNftsAction = loadNftsActionCreator(newNfts);

      const expectedNewNftsState: NftsState = { ...currentNfts, nfts: newNfts };

      const newState = nftsReducer(currentNftsState, loadNftsAction);
      expect(expectedNewNftsState).toStrictEqual(newState);
    });
  });
});
