import { rest } from "msw";
import { nftsMock } from "./nftsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}nfts`, (_request, response, context) => {
    return response(context.status(200), context.json(nftsMock));
  }),
];
