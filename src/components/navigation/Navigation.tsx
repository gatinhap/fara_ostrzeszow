import { useViewport } from '../../utils/hooks/useViewport';
import NavigationMobile from '../navigationMobile/Navigation.mobile';
import NavigationDesktop from './Navigation.desktop';

const Navigation = () => {
  const viewport = useViewport();
  const isDesktop = viewport === 'desktop';

  if (isDesktop) {
    return <NavigationDesktop />;
  }

  return <NavigationMobile />;
};

export default Navigation;
