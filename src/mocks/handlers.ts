import { rest } from "msw";
import { nftsMock } from "./nftsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nftsMock));
  }),
  rest.delete(`${apiUrl}nfts/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Nft was deleted" }));
  }),
];

export const errorHandler = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),

  rest.delete(`${apiUrl}nfts/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Nft NOT deleted" }));
  }),
];
