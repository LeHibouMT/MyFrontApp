import { useEffect, useState } from "react";

/**
 * Hook to make media queries.
 * @param query The query.
 */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e: { matches: boolean | ((prevState: boolean) => boolean) }) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
