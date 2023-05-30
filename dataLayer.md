# NFTIFY

## Data layer

### Data

- Collection of NFTs
  - NFT:
    -image:string,
    -title: string,
    -description: string,
    -price: number,
    -author: string,

### Modifications

- createNft(character)
- deleteNft(id)
- loadNft(api)
- editNft(id)

## Components

### Store

#### State

- Collection of NFT

#### nftReducer

-loadAllNft
-loadOneNft

- createNft(character)
- deleteNft(id)
- loadNft(api)
- editNft()

### Layout

- Receives a collection of Nfts
- Receives dispatch()
- Shows the header with a logo
- Shows the navbar
- Renders a loginForm
- Renders a NftsForm
- Renders a NftsList component
- Renders a notFound page

### nftForm

- State:
  - nfts
- handleSubmit()
- Receives dispatch()
- Receives a nft to update
- Shows an input text for the title of the nft
- Shows an input text for the image of the nft
- Shows an input text for the description of the nft
- Shows an input text for the price of the nft

- Renders a Button component
  - text: "create" / "edit"
  - actionOnClick: handleSubmit

-create a new Nft:

- Shows an input text for the title of the nft
- Shows an input text for the image of the nft
- Shows an input text for the description of the nft
- Shows an input text for the price of the nft
- Renders a Button component
  - text: "create" / "edit"
  - actionOnClick: handleSubmit

### nftsList

- Receives a collection of nfts
- Renders all nfts as are in the collection

### nftCard

- Receives a Nft
- Receives dispatch()
- handleClick()
- Shows the nft details
- Shows editButton
- Shows deleteButton

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### Modals

- Shows a text message
- Receives an action on click

### Loader
