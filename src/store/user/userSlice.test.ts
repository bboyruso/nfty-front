import {
  emptyUserStateMock,
  loggedUserStateMock,
  userActionPayloadMock,
} from "../../mocks/userMocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an empty current state and a loginUser action with an user as payload", () => {
    test("Then it should return a new state with the logged user", () => {
      const currentUserState = emptyUserStateMock;
      const expectedUserState = loggedUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userActionPayloadMock)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives an current state with a logged user and a logoutUser action", () => {
    test("Then it should return a new empty state", () => {
      const currentUserState = loggedUserStateMock;
      const expectedUserState = emptyUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
