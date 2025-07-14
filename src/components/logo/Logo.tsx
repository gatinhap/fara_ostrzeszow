import { StyledWrapper, StyledLink, LogoImage } from './Logo.styles';
import type { LogoProps } from './Logo.types';

const Logo = ({ src, alt, width, height, isLink = false, to }: LogoProps) => {
  const Image = <LogoImage src={src} alt={alt} width={width} height={height} />;

  return isLink ? (
    <StyledLink to={to}>{Image}</StyledLink>
  ) : (
    <StyledWrapper>{Image}</StyledWrapper>
  );
};

export default Logo;
