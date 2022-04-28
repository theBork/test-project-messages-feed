import { useState } from "react";

interface State<T = unknown> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

function useDataLoader<A extends (...args: any[]) => Promise<unknown>>(asyncFunction: A) {
  const [state, setState] = useState<State<Awaited<ReturnType<A>>>>({ data: null, isLoading: true, error: null });

  const makeRequest = (...args: Parameters<A>) => {
    setState({ data: null, isLoading: true, error: null });
    return new Promise<Awaited<ReturnType<A>>>((resolve, reject) => {
      asyncFunction(...args)
        .then((data) => {
          setState({ data: data as Awaited<ReturnType<A>>, isLoading: false, error: null });
          resolve(data as Awaited<ReturnType<A>>);
        })
        .catch((error) => {
          setState({ data: null, isLoading: false, error: "произошла ошибка" });
          reject(error);
        });
    });
  };

  return { state, makeRequest };
}

export default useDataLoader;
