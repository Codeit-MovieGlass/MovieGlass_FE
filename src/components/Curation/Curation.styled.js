import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { motion } from 'framer-motion';

export const CurationContainer = styled.section`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(42)};
  padding-left: ${pxToRem(120)};
  padding-right: ${pxToRem(120)};
  margin-bottom: ${pxToRem(96)};
`;

export const MovieListContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
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
  height: ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftArrowButton = styled.button`
  ${arrowButtonStyles}
  transform: translate(-50%, -50%);
  left: -5%;
  z-index: 2;

  ${({ $startOfList }) =>
    $startOfList &&
    css`
      pointer-events: none;
    `}
`;

export const RightArrowButton = styled.button`
  ${arrowButtonStyles}
  transform: translate(50%, -50%);
  right: -5%;
  z-index: 2;

  ${({ $endOfList }) =>
    $endOfList &&
    css`
      pointer-events: none;
    `}
`;

export const MovieList = styled.section`
  position: relative;

  width: 100%;
  min-width: max-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(36)};
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 150%;

  width: fit-content;

  text-align: center;
  padding: ${pxToRem(8)};

  opacity: 0;
  z-index: 10;

  transition:
    opacity 200ms,
    transform 200ms;
`;

export const MoviePoster = styled.img`
  width: ${pxToRem(240)};
  height: ${pxToRem(360)};

  user-select: none;
  -webkit-user-select: none;

  transition: 100ms;
`;

export const MovieInfoLink = styled(motion.a)`
  width: ${pxToRem(240)};
  height: ${pxToRem(360)};

  position: relative;
  display: inline-block;

  &:hover {
    z-index: 1;
  }

  &:hover ${MovieInfo} {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover ${MoviePoster} {
    transform: scale(1.5);
    cursor: pointer;
  }
`;
