import styled from '@emotion/styled';
import { MOBILE_BREAKPOINT } from '../../theme/theme.constants';
import { HEADER_PADDING_BLOCK } from './Header.constants';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 80px;
  background-color: var(--color--navy);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: ${HEADER_PADDING_BLOCK}px 24px;
  }
`;
