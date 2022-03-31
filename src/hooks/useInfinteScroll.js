import { useState, useCallback, useRef } from "react";

const useInfiniteScroll = () => {
  const [count, setCount] = useState(50);
  const observer = useRef();

  const lastElementRef = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCount((prevCount) => prevCount + 20);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  return {
    lastElementRef,
    currentCount: count,
  };
};

export default useInfiniteScroll;
