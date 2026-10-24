import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll To Top.
 * Reusable components isolate presentation from data fetching so design updates do not touch API code.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

