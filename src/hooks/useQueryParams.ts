import { useState, useEffect } from "react";
import { useLocation, navigate } from "@reach/router";
import { parse, stringify, ParsedQuery } from "query-string";

const useQueryParams = () => {
  const location = useLocation();
  const [queryParamsState, setQueryParamsState] = useState<ParsedQuery>(parse(location.search));

  useEffect(() => {
    setQueryParamsState(parse(location.search));
  }, [location.search]);

  const setQueryParams = async (newQueryParams: ParsedQuery) => {
    const paramsString = stringify(newQueryParams);
    const params = new URLSearchParams(paramsString);
    await navigate(`${location.pathname}?${params.toString()}`);
  };

  return { queryParams: queryParamsState, setQueryParams };
};

export default useQueryParams;
