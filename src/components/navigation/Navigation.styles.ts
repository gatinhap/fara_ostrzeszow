import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavigationMenu } from 'radix-ui';
import {
  DESKTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../../theme/theme.constants';
import { HEADER_HEIGHT } from '../header/Header.constants';

const navigationLinkCommon = css`
  transition: font-variation-settings var(--transition--duration-default) ease;
  font-size: 17px;
  line-height: normal;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  color: var(--color--white);
  font-variation-settings: var(--font-grade-bold);

  &:hover {
    cursor: pointer;
    font-variation-settings: var(--font-grade-thin);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 13px;
    color: var(--color--cream);
  }
`;

export const StyledNavigationList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 34px;
`;

export const StyledNavigationItemExpandable = styled(NavigationMenu.Item)`
  position: relative;
`;

export const StyledNavigationLink = styled(NavigationMenu.Link)`
  ${navigationLinkCommon};

  &.active {
    color: var(--color--cream);
  }
`;

export const StyledNavigationLinkSecondLevel = styled(StyledNavigationLink)`
  position: relative;
  transition: all var(--transition--duration-default) ease;
  font-size: 14px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-variation-settings: var(--font-grade-semi-bold);
  white-space: nowrap;
  color: var(--color--burgundy);

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 0;
    transition: all var(--transition--duration-default) ease;
    border-radius: 10px;
    height: 3px;
    width: 0;
    background-color: var(--color--burgundy);
  }

  &:hover {
    transform: translateX(20px);
    font-variation-settings: var(--font-grade-bold);

    &::before {
      left: -20px;
      width: 16px;
    }
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 11px;
  }
`;

export const StyledNavigationTrigger = styled(NavigationMenu.Trigger)`
  ${navigationLinkCommon};

  border: none;
  padding: 0;
  background-color: transparent;
  font-family: 'Roboto Flex', Arial, sans-serif;

  > svg {
    position: relative;
    top: 1px;
    transition: transform var(--transition--duration-default) ease;
  }

  &[data-state='open'] {
    > svg {
      transform: rotate(-180deg);
    }
  }
`;

export const StyledNavigationContent = styled(NavigationMenu.Content)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 20px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    position: absolute;
    left: 0;
    border-radius: 20px;
    padding: 34px;
    background-color: var(--color--cream);
  }
`;

export const StyledNavigationContentMobile = styled(NavigationMenu.Content)`
  animation-duration: var(--transition--duration-default);
  animation-timing-function: ease;
  position: absolute;
  right: 0;

  &[data-motion='from-start'] {
    animation-name: enterFromLeft;
  }

  &[data-motion='to-start'] {
    animation-name: exitToLeft;
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
`;

export const StyledNavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  width: var(--radix-navigation-menu-viewport-width);
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, var(--transition--duration-default) ease;
`;
