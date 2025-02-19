import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import leftArrow from '@assets/svgs/icons/left-arrow.svg?react';
import rightArrow from '@assets/svgs/icons/right-arrow.svg?react';
import downArrow from '@assets/svgs/icons/down-arrow.svg?react';

import dropdownArrow from '@assets/svgs/icons/dropdown-arrow.svg?react';
import genreSelectArrow from '@assets/svgs/icons/purple-arrow.svg?react';

import datePickerArrow from '@assets/svgs/icons/arrow-down.svg?react';

const topTenArrowStyles = css`
  position: absolute;
  top: 40%;
  z-index: 10;

  transition: transform 0.2s ease;
  cursor: pointer;

  path {
    fill-opacity: 0.8;
  }
`;

const curationArrowStyles = css`
  width: ${pxToRem(20)};
  height: fit-content;
`;

export const LeftArrow = styled(leftArrow)`
  ${topTenArrowStyles}
  left: 5%;

  &:hover {
    transform: translateX(-3px) scale(1.1);
  }
`;

export const RightArrow = styled(rightArrow)`
  ${topTenArrowStyles}
  right: 5%;

  &:hover {
    transform: translateX(3px) scale(1.1);
  }
`;

export const CurationLeftArrow = styled(leftArrow)`
  ${curationArrowStyles}

  ${({ $startOfList }) =>
    $startOfList &&
    css`
      opacity: 0.2;
    `}
`;

export const CurationRightArrow = styled(rightArrow)`
  ${curationArrowStyles}

  ${({ $endOfList }) =>
    $endOfList &&
    css`
      opacity: 0.2;
    `}
`;

export const ViewCountDropdownArrow = styled(dropdownArrow)`
  width: ${pxToRem(20)};
  height: fit-content;
`;

export const NextArrow = styled(genreSelectArrow)`
  width: ${pxToRem(39)};
  height: fit-content;
`;

// Date Picker
export const DatePickerArrow = styled(datePickerArrow)`
  width: ${pxToRem(12)};
  height: fit-content;
`;

export const ChatBotArrow = styled(downArrow)`
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};

  transition: transform 0.2s ease;
  cursor: pointer;

  path {
    fill-opacity: 0.8;
  }
`;
