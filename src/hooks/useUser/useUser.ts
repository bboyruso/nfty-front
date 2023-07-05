import { RegisterUserCredentials, UserCredentials } from "../../types";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "../../store";
import { hideLoading, showLoading } from "../../store/ui/loadingSlice";
import { setFeedback } from "../../store/ui/feedbackSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const usersApi = axios.create({
  baseURL: apiUrl,
});

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoading());
      const { data } = await usersApi.post<{ token: string }>(
        `user/login`,
        userCredentials
      );

      dispatch(hideLoading());
      return data.token;
    } catch {
      dispatch(hideLoading());

      dispatch(
        setFeedback(
          "The username or password entered is incorrect. Please check and try again"
        )
      );
    }
  };

  const registerUser = async (
    userCredentials: RegisterUserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoading());
      const { data } = await usersApi.post<{ message: string }>(
        `user/register`,
        userCredentials
      );

      dispatch(hideLoading());
      dispatch(setFeedback(data.message));

      return data.message;
    } catch (error) {
      const {
        request: { status },
      } = error as AxiosError;

      dispatch(hideLoading());

      const message =
        status === 409
          ? "An account with this email or username already exists."
          : "Check register data. Please check and try again";
      dispatch(setFeedback(message));
    }
  };

  return {
    getUserToken,
    registerUser,
  };
};

export default useUser;
