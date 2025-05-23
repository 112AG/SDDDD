import { useLocation } from "react-router";
import { useEffect, useRef } from "react";

export default function PageTransition({ children }) {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove("animate-fadeIn");
      // Force reflow to restart animation
      void ref.current.offsetWidth;
      ref.current.classList.add("animate-fadeIn");
    }
  }, [location.pathname]);

  return (
    <div ref={ref} className="animate-fadeIn">
      {children}
    </div>
  );
}