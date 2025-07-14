import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { StyledHeader } from './Header.styles';
import headerLogo from '../../assets/logo-full-white.png';
import { AppPaths } from '../../routes/paths';
import { useViewport } from '../../utils/hooks/useViewport';
import {
  HEADER_LOGO_WIDTH_DESKTOP,
  HEADER_LOGO_WIDTH_MOBILE,
} from './Header.constants';

const Header = () => {
  const viewport = useViewport();
  const isDesktop = viewport === 'desktop';

  return (
    <StyledHeader>
      <Logo
        isLink
        to={AppPaths.Home}
        src={headerLogo}
        alt="logo"
        width={
          isDesktop
            ? `${HEADER_LOGO_WIDTH_DESKTOP}px`
            : `${HEADER_LOGO_WIDTH_MOBILE}px`
        }
      />

      <Navigation />
    </StyledHeader>
  );
};

export default Header;
