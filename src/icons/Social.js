import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import googleLogo from '@assets/svgs/icons/google_logo.svg?react';
import kakaoLogo from '@assets/svgs/icons/kakao_logo.svg?react';

export const GoogleLogo = styled(googleLogo)`
  width: ${pxToRem(28)};
  height: ${pxToRem(28)};
`;

export const KakaoLogo = styled(kakaoLogo)`
  width: ${pxToRem(28)};
  height: ${pxToRem(28)};
`;
