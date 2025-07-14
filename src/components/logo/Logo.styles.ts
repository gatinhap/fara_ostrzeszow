import styled from '@emotion/styled';
import type { LogoProps } from './Logo.types';
import { NavLink } from 'react-router';

export const StyledWrapper = styled.a`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img<Pick<LogoProps, 'width' | 'height'>>`
  width: ${({ width }) => width || '264px'};
  height: ${({ height }) => height || 'auto'};
`;
