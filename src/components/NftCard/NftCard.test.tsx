import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NftCard from "./NftCard";

const nftCardMock = {
  _id: "64710077b5f9829cfe43b6d9",
  title: "First NFT",
  description: "best nft",
  price: 1,
  image: "1.png",
  author: "Bob",
};

describe("Given a NFT Card Component", () => {
  describe("When it receives a NFT with title ,image,price and author", () => {
    test("Then it should render correctly with this properties", () => {
      const title = "First NFT";
      const image = "1.png";
      const price = 1;
      const description = "First NFT";

      renderWithProviders(wrapWithRouter(<NftCard nft={nftCardMock} />));

      expect(title).toBeInTheDocument;
      expect(image).toBeInTheDocument;
      expect(price).toBeInTheDocument;
      expect(description).toBeInTheDocument;
    });
  });
});
