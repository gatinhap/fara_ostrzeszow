import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DropdownMenu } from 'radix-ui';
import { NAVIGATION_MOBILE_WIDTH } from './Navigation.mobile.constants';

const navigationMobileItemCommon = css`
  transition: font-variation-settings var(--transition--duration-default) ease;
  font-size: 13px;
  line-height: normal;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  color: var(--color--cream);
  background-color: var(--color--burgundy);
  font-variation-settings: var(--font-grade-bold);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  &:hover {
    cursor: pointer;
    font-variation-settings: var(--font-grade-thin);
  }
`;

export const StyledNavigationMobileContent = styled(DropdownMenu.Content)`
  overflow: hidden;
  animation-duration: var(--transition--duration-default);
  animation-timing-function: ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 20px 0px 0px 20px;
  width: ${NAVIGATION_MOBILE_WIDTH}px;
  background-color: var(--color--burgundy);

  &[data-state='open'] {
    animation-name: enterFromRight;
  }

  &[data-state='closed'] {
    animation-name: exitToRight;
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(${NAVIGATION_MOBILE_WIDTH}px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(${NAVIGATION_MOBILE_WIDTH}px);
    }
  }
`;

export const StyledNavigationMobileCollapsibleContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-block: 20px;

  &[data-state='open'] {
    animation: slideDown var(--transition--duration-default) linear;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  &[data-state='closed'] {
    animation: slideUp var(--transition--duration-default) linear;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
`;

export const StyledNavigationMobileItemLink = styled(DropdownMenu.Item)`
  ${navigationMobileItemCommon};
  padding: 12px 34px;

  &.active {
    color: var(--color--white);
  }
`;

export const StyledNavigationMobileItemLinkSecondLevel = styled(
  StyledNavigationMobileItemLink,
)`
  position: relative;
  transition: all var(--transition--duration-default) ease;
  padding: 4px 34px;
  font-size: 11px;

  &:not(:last-child) {
    border-bottom: unset;
  }

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 16px;
    transition: all var(--transition--duration-default) ease;
    border-radius: 10px;
    height: 3px;
    width: 0;
    background-color: currentcolor;
  }

  &:hover {
    transform: translateX(20px);
    font-variation-settings: var(--font-grade-bold);

    &::before {
      left: 0;
      width: 16px;
    }
  }
`;

export const StyledNavigationMobileSubTrigger = styled(DropdownMenu.SubTrigger)`
  ${navigationMobileItemCommon};

  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 12px 34px;

  > svg {
    position: relative;
    top: 2px;
    transition: transform var(--transition--duration-default) ease;
  }

  &[data-state='open'] {
    > svg {
      transform: rotate(-180deg);
    }
  }
`;
