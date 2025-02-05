import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import logoSymbol from '@assets/svgs/Header/Logo_symbol.svg?react';
import logoTypo from '@assets/svgs/Header/Logo_typo.svg?react';
import logoTypoSerif from '@assets/svgs/Header/Logo_typo_serif.svg?react';

export const OnBoardingLogoSymbol = styled(logoSymbol)`
  width: ${pxToRem(280)};
  height: fit-content;
`;

export const OnBoardingLogoTypo = styled(logoTypo)`
  width: ${pxToRem(320)};
  height: fit-content;
`;

export const LogoSymbol = styled(logoSymbol)`
  width: 100px;
  height: fit-content;

  @media (max-width: 480px) {
    width: ${pxToRem(80)};
  }
`;

export const LogoTypo = styled(logoTypo)`
  width: 158px;
  height: fit-content;
  transform: translateY(10%);

  @media (max-width: 768px) {
    width: ${pxToRem(158)};
  }

  @media (max-width: 480px) {
    width: ${pxToRem(100)};
    align-self: flex-start;
  }
`;

export const LogoTypoSerif = styled(logoTypoSerif)`
  width: 158px;
  transform: translateY(10%);

  @media (max-width: 768px) {
    width: ${pxToRem(158)};
  }
`;

export const CommentLogo = styled(logoSymbol)`
  width: 40px;
`;
