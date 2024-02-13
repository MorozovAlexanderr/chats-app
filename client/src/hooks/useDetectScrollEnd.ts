import { useEffect, useRef, useState } from 'react';

export const useDetectScrollEnd = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAtBottom(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  useEffect(() => {
    if (isAtBottom) {
      callback();
    }
  }, [isAtBottom, callback]);

  return { ref };
};
