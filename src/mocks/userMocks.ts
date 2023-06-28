import { UserStateStructure } from "../types";

export const emptyUserStateMock: UserStateStructure = {
  id: "",
  userName: "",
  token: "",
  isLogged: false,
};

export const loggedUserStateMock: UserStateStructure = {
  id: "1234",
  userName: "Admin",
  token: "this is mock token",
  isLogged: true,
};

export const userActionPayloadMock = {
  id: "1234",
  userName: "Admin",
  token: "this is mock token",
};
