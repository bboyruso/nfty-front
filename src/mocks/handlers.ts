import { rest } from "msw";
import { nftsMock } from "./nftsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ nfts: nftsMock, length: nftsMock.length })
    );
  }),

  rest.get(`${apiUrl}nfts/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nftsMock[0]));
  }),

  rest.delete(`${apiUrl}nfts/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Nft was deleted" }));
  }),

  rest.post(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Nft was added" }));
  }),
];

export const errorHandler = [
  rest.get(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),

  rest.get(`${apiUrl}nfts/:id`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Internal Server Error" }));
  }),

  rest.delete(`${apiUrl}nfts/:id`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Nft NOT deleted" }));
  }),

  rest.post(`${apiUrl}nfts`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Nft couldn't add" }));
  }),
];
