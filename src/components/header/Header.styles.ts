import styled from '@emotion/styled';
import { MOBILE_BREAKPOINT } from '../../theme/theme.constants';
import { HEADER_PADDING_BLOCK } from './Header.constants';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${HEADER_PADDING_BLOCK}px 4vw;
  background-color: var(--color--navy);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-inline: 24px;
  }
`;
