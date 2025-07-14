import { useState, useEffect } from 'react';
import { DESKTOP_BREAKPOINT } from '../../theme/theme.constants';

export type Viewport = 'mobile' | 'desktop';

export const useViewport = (): Viewport => {
  const getViewport = (): Viewport => {
    if (typeof window === 'undefined') {
      return 'desktop';
    }
    return window.innerWidth < DESKTOP_BREAKPOINT ? 'mobile' : 'desktop';
  };

  const [viewport, setViewport] = useState<Viewport>(getViewport);

  useEffect(() => {
    const handleResize = () => {
      const newViewport = getViewport();
      setViewport((prev) => (prev === newViewport ? prev : newViewport));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};
