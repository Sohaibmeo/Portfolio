import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

type LenisInstance = Lenis | null;

const useLenis = (): React.MutableRefObject<LenisInstance> => {
  const lenisRef = useRef<LenisInstance>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.1,
      });

      const animate = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return lenisRef;
};

export default useLenis;
