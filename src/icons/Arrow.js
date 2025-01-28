import styled, { css } from 'styled-components';

import baseArrow from '@assets/svgs/icons/arrow.svg?react';
import dropdownArrow from '@assets/svgs/icons/dropdown-arrow.svg?react';

const topTenArrowStyles = css`
  position: absolute;
  top: 50%;
  z-index: 10;

  cursor: pointer;

  path {
    fill-opacity: 0.8;
  }
`;

export const LeftArrow = styled(baseArrow)`
  ${topTenArrowStyles}
  transform: translateY(-50%);
  left: 10%;
`;

export const RightArrow = styled(baseArrow)`
  ${topTenArrowStyles}
  transform: rotate(180deg) translateY(50%);
  right: 10%;
`;

export const ViewCountDropdownArrow = styled(dropdownArrow)``;
