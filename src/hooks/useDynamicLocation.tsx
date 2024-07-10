import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to get the main location and the full location of the current page.
 */
function useDynamicLocation() {
  const fullLocation = useLocation().pathname;
  const [mainLocation, setMainLocation] = useState<string>(getMainLocation());

  function getMainLocation() {
    const splitedLocation = fullLocation.split("/");
    return splitedLocation.length > 0 ? splitedLocation[1] : splitedLocation[0];
  }

  useEffect(() => {
    setMainLocation(getMainLocation());
  }, [fullLocation]);

  return { mainLocation, fullLocation };
}

export default useDynamicLocation;
