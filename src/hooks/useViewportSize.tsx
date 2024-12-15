import { useState, useEffect } from "react";

interface ViewportSize {
  height: number;
  width: number;
}
/**
 * Hook to get the size of the viewport.
 * @returns The size of the viewport.
 */
function useViewportHeight(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export default useViewportHeight;
