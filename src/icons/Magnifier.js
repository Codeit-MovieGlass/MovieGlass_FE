import styled from 'styled-components';

import magnifier from '@assets/svgs/Magnifier.svg?react';
import magnifierSolo from '@assets/svgs/Magnifier_solo.svg?react';
import pxToRem from '@utils/pxToRem';

export const Magnifier = styled(magnifier)`
  transform: translateY(10%); // 중앙 정렬 위해서 추가
`;

export const MagnifierSolo = styled(magnifierSolo)`
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
