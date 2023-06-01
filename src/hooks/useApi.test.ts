import { renderHook } from "@testing-library/react";
import { nftsMock } from "../mocks/nftsMock";
import { NftStructure } from "../types";
import useApi from "./useApi";

describe("Given a useApi function", () => {
  describe("When it is called the function getNfts", () => {
    test("Then it should return a list of nfts", async () => {
      const expectedNfts: NftStructure[] = nftsMock.nfts;

      const {
        result: { current: getNfts },
      } = renderHook(() => useApi());

      const nfts = await getNfts();

      expect(nfts.nfts).toStrictEqual(expectedNfts);
    });
  });
});
