import { useState, useRef, useEffect } from 'react'

const useSize = () => {
  const elementRef = useRef<HTMLInputElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
    }
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSize;