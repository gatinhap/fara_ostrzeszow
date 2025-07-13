import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavigationMenu } from 'radix-ui';

const navigationItemCommon = css`
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
  ${navigationItemCommon};

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
`;

export const StyledNavigationTrigger = styled(NavigationMenu.Trigger)`
  ${navigationItemCommon};

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
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 34px;
  background-color: var(--color--cream);
`;
