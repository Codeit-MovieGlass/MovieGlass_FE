import styled, { css } from 'styled-components';

export const RatingWrapper = styled.div`
  width: max-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 28px;
`;

export const RatingInputContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StarContainer = styled.div`
  position: relative;

  width: 40px;
  height: 40px;

  transition: transform 0.2s ease;
  cursor: pointer;

  ${({ $isFilled }) =>
    $isFilled &&
    css`
      transform: scale(1.1);
    `}
`;

const starCommon = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 40px;
  height: 40px;

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

export const RatingLabel = styled.span`
  width: fit-content;
  align-self: flex-end;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  span {
    display: inline-block;
    width: 38px; // Resolve wobbling issue
  }
`;
