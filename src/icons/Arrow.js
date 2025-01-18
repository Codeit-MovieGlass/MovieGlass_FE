import styled from 'styled-components';

import baseArrow from '@assets/svgs/icons/arrow.svg?react';

export const HomeArrow = styled(baseArrow)`
  path {
    fill-opacity: 0.8;
  }
`;

export const LeftArrow = styled(HomeArrow)``;

export const RightArrow = styled(HomeArrow)`
  transform: rotate(180deg);
`;
