import type { LinkProps } from 'react-router';

export interface LogoProps extends Pick<LinkProps, 'to'> {
  src: string;
  alt: string;
  isLink: boolean;
  width?: string;
  height?: string;
}
