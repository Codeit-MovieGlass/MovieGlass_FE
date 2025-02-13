import styled from 'styled-components';

import magnifier from '@assets/svgs/Header/Magnifier.svg?react';
import magnifierSolo from '@assets/svgs/Header/Magnifier_solo.svg?react';
import pxToRem from '@utils/pxToRem';

export const Magnifier = styled(magnifier)`
  transform: translateY(10%); // 중앙 정렬 위해서 추가
`;

// 마이페이지 내 좋아요 페이지에서 사용되는 검색 아이콘
export const MagnifierBright = styled(magnifier)`
  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  }
`;

export const MagnifierSolo = styled(magnifierSolo)`
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
