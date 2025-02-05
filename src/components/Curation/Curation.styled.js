import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const CurationContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(42)};
`;

export const MovieListContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(48)};
`;

export const CurationTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Header3};
  letter-spacing: 0.28px;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

const arrowButtonStyles = css`
  position: absolute;
  top: 50%;

  width: ${pxToRem(48)};
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftArrowButton = styled.button`
  ${arrowButtonStyles}
  transform: translateY(-50%) translateX(-50%);
  left: -5%;

  ${({ $startOfList }) =>
    $startOfList &&
    css`
      pointer-events: none;
    `}
`;

export const RightArrowButton = styled.button`
  ${arrowButtonStyles}
  transform: translateY(-50%) translateX(50%);
  right: -5%;

  ${({ $endOfList }) =>
    $endOfList &&
    css`
      pointer-events: none;
    `}
`;

export const MovieContainer = styled.section`
  position: relative;

  width: 100%;
  min-width: max-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(36)};
`;

export const MovieImg = styled.img`
  width: ${pxToRem(230)};

  user-select: none;
  -webkit-user-select: none;
`;
