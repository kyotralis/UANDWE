import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  // 1. Aggressively save scroll position as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    // Use a slight debounce/throttle if needed, but for simple saving, passive listener is fine
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. Restore or reset scroll position on mount/navigation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      // On first load/refresh, check if we have a saved position and forcefully restore it
      // This protects against the browser losing track during rapid refreshing
      const savedScroll = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedScroll) {
        // Small timeout ensures the DOM has painted enough height before jumping
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScroll, 10));
        }, 50);
      }
      return;
    }

    // On actual route changes (clicking a link), jump to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;