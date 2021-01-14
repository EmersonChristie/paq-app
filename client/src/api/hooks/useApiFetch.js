import { useState, useMemo } from "react";
import login from "../routes/auth.routes";

const useApiFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (request, data, options = {}) => {
    try {
      setIsLoading(true);
      const result = await request(data, options); // request is the function holding the request
      // const result = await useMemo(
      //   (data, options) => request(data, options),
      //   []
      // );
      setData(result);
      return result;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute,
  };
};

export default useApiFetch;
