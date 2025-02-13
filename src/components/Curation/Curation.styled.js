import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { motion } from 'framer-motion';

export const MovieListSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 ${pxToRem(120)};
  margin-bottom: ${pxToRem(96)};

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(48)};
`;

export const CurationTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Header3};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const MovieList = styled.ul`
  position: relative;

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(36)};
`;

export const MovieListItem = styled.li`
  flex: 1;

  position: relative;

  width: 100%;
  height: fit-content;
`;

export const MoviePoster = styled(motion.img)`
  width: 100%;
  height: fit-content;

  border-radius: 2px;

  user-select: none;
  -webkit-user-select: none;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-out;
  }

  transition: transform 0.2s ease-out;
`;

export const MovieInfoLink = styled(motion.a)`
  position: relative;

  width: 100%;
  height: fit-content;

  display: flex;
`;

export const MovieInfoBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: fit-content;

  text-align: center;
  padding: ${pxToRem(8)};

  opacity: 1;
  z-index: 10;

  transition:
    opacity 200ms,
    transform 200ms;
`;

const arrowButtonStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftArrowButton = styled.button`
  ${arrowButtonStyles}

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

  right: -5%;
  z-index: 2;

  ${({ $endOfList }) =>
    $endOfList &&
    css`
      pointer-events: none;
    `}
`;
