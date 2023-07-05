import { UserStateStructure, UserTokenPayloadStructure } from "../types";

export const emptyUserStateMock: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const loggedUserStateMock = {
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

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmE5ZGExYjhhMTZiNDVlYWJmNDQiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU0NDE5Nzd9.hwpg_Rtg1F96NevhAB21CkWF5FHs04lQnYec7orlZNo";

export const userTokenPayloadMock: UserTokenPayloadStructure = {
  id: "646f6a9da1b8a16b45eabf44",
  name: "Admin",
};
