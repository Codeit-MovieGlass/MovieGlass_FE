import styled from 'styled-components';

import pxToRem from '@utils/pxToRem';

import logoSymbol from '@assets/svgs/Logo_symbol.svg?react';
import logoTypo from '@assets/svgs/Logo_typo.svg?react';

export const LogoSymbol = styled(logoSymbol)`
  width: 100px;

  @media (max-width: 480px) {
    width: ${pxToRem(110)};
  }
`;

export const LogoTypo = styled(logoTypo)`
  width: 158px;
  transform: translateY(10%);

  @media (max-width: 768px) {
    width: ${pxToRem(158)};
  }
`;
