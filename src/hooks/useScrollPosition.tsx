import { useEffect, useState } from "react";

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

/**
 * Hook to get the scroll position.
 * @returns The scroll position.
 */
function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
