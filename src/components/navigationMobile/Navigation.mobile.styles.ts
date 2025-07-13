import styled from '@emotion/styled';
import { DropdownMenu } from 'radix-ui';

export const StyledNavigationMobileContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 20px 0px 0px 20px;
  width: 230px;
  background-color: var(--color--burgundy);
`;

export const StyledNavigationMobileItem = styled(DropdownMenu.Item)`
  position: relative;
  padding: 12px 34px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
