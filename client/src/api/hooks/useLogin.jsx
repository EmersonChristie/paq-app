import { useMemo } from "react";
import useApiFetch from "./useApiFetch";
import login from "../routes/auth.routes";

const useLogin = async () => {
  //   const request = useMemo((payload) => login(payload), []);
  const { isLoading, error, data, execute } = await useApiFetch();
  return { login, isLoading, error, data, execute };
};

export default useLogin;
