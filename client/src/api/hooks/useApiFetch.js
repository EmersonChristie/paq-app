import { useEffect, useState, useMemo } from "react";
import request from "../request";

const useApiFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (slug, options = {}) => {
    try {
      setIsLoading(true);
      const result = await request(slug, options);
      console.log(
        "🚀 ~ file: useApiFetch.js ~ line 13 ~ execute ~ result",
        result
      );

      // const result = await useMemo(
      //   (data, options) => request(data, options),
      //   []
      // );
      if (!result.success) {
        setError(result.data);
        setIsLoading(false);
        return result;
      }
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
