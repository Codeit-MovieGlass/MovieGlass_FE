import styled from 'styled-components';

import logoSymbol from '@assets/svgs/Logo_symbol.svg?react';
import logoTypo from '@assets/svgs/Logo_typo.svg?react';
import pxToRem from '@utils/pxToRem';

export const LogoSymbol = styled(logoSymbol)`
  width: ${pxToRem(110)};
`;

export const LogoTypo = styled(logoTypo)`
  width: ${pxToRem(158)};

  @media (max-width: 480px) {
    display: none;
  }
`;
