import { useLocation } from "react-router-dom";

interface Location {
  mainLocation: string;
  fullLocation: string;
}

/**
 * Hook to get the main location and the full location of the current page.
 * @returns The main location and the full location of the current page.
 */
function useDynamicLocation(): Location {
  const fullLocation = useLocation().pathname;

  return {
    mainLocation: `/${fullLocation.split("/").length > 1 ? fullLocation.split("/")[1] : fullLocation.split("/")[0]}`,
    fullLocation: fullLocation
  };
}

export default useDynamicLocation;
