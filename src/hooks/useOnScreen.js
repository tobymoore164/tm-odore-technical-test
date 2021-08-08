/* CREDIT: https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom */

import { useEffect, useState } from "react";

/* Simple little function to help me detect when a component is on screen (when i need to request new images) much easier than trying to detect the scroll */
export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
