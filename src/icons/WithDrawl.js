import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import withdrawlIcon from '@assets/svgs/icons/withdrawl.svg?react';

export const WithdrawlIcon = styled(withdrawlIcon)`
  width: ${pxToRem(36)};
  height: fit-content;
`;
