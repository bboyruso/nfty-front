import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NftCard from "./NftCard";
import { screen } from "@testing-library/react";

const nftCardMock = {
  _id: "64710077b5f9829cfe43b6d9",
  title: "First NFT",
  description: "best nft",
  price: 1,
  image: "1.png",
  author: "Bob",
};

describe("Given a NFT Card Component", () => {
  describe("When it receives a NFT with title ,image,price and author and button", () => {
    test("Then it should render correctly with this properties", () => {
      const expectedButtonText = "Delete";
      const expectedTitle = "First NFT";

      renderWithProviders(
        wrapWithRouter(
          <NftCard
            onDeleteClick={() => {
              333;
            }}
            nft={nftCardMock}
          />
        )
      );

      const title = screen.getByRole("img", {
        name: expectedTitle,
      });

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
