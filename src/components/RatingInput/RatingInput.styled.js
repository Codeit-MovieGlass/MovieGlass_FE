import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const RatingWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(20)};
`;

export const RatingInputContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
`;

export const StarContainer = styled.div`
  position: relative;

  width: ${pxToRem(40)};
  height: ${pxToRem(40)};

  /* transition: transform 0.2s ease; */
  cursor: pointer;

  /* ${({ $isFilled }) =>
    $isFilled &&
    css`
      transform: scale(1.1);
    `} */
`;

const starCommon = css`
  position: absolute;
  top: 0;
  left: 0;

  width: ${pxToRem(40)};
  height: ${pxToRem(40)};

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  transition: clip-path 0.2s ease;
`;

export const FilledStar = styled.div`
  ${starCommon}
  background-image: url('/star/star-input_filled.svg');
  clip-path: inset(0 100% 0 0);
`;

export const EmptyStar = styled.div`
  ${starCommon}
  background-image: url('/star/star-input_empty.svg');
`;

export const RatingLabel = styled.label`
  width: fit-content;
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: ${pxToRem(2)};

  ${({ theme }) => theme.fontStyles.Body2}
  letter-spacing: 0.24px;

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;

  span {
    display: inline-block;
    width: ${pxToRem(38)}; // Resolve wobbling issue

    white-space: nowrap;
  }
`;
