import { rest } from "msw";
import { nftsMock } from "./nftsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nftsMock));
  }),
];

export const errorHandler = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),
];
