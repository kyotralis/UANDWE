import { useState, useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) setVisible(true); 
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  
  return [ref, visible];
}