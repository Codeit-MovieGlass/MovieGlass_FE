import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { motion } from 'framer-motion';

//전체 컨테이너 및 베경 이미지
export const TopTenContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: ${pxToRem(1714)};
  height: ${pxToRem(840)};
  padding: ${pxToRem(56)} 0 ${pxToRem(48)};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: ${pxToRem(840)};

  object-fit: cover;

  opacity: 0.3;
`;

// Movie Carousel Section
export const MovieCarouselContainer = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;

  flex-shrink: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(180)};
`;

// Current Movie Section
export const CurrentMovieContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const CurrentMoviePoster = styled(motion.img)`
  width: ${pxToRem(432)};
  height: ${pxToRem(576)};

  cursor: pointer;

  user-select: none;
  -webkit-user-select: none;
`;

export const CurrentMovieNumber = styled.span`
  position: absolute;
  top: -10%;
  left: -5%;

  transform: translateX(-25%);

  ${({ theme }) => theme.fontStyles.Rank_Main};
  letter-spacing: -18px;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  opacity: 0.8;

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;

// Side Movie Section
export const SideMoviePosterContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

const sideMoviePosterStyles = css`
  width: ${pxToRem(250)};
  height: ${pxToRem(400)};

  /* transform: perspective(700px); */
  filter: blur(5px);

  cursor: pointer;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const PreviousMoviePoster = styled(motion.img)`
  ${sideMoviePosterStyles}/* transform: rotateY(-20deg) translate(-50%, -50%); */
`;

export const NextMoviePoster = styled(motion.img)`
  ${sideMoviePosterStyles}/* transform:rotateY(20deg) translate(50%, -50%); */
`;

const sideMovieNumberStyles = css`
  position: absolute;
  top: -7%;
  left: -0.5%;
  z-index: 10;

  transform: translateX(-50%);

  ${({ theme }) => theme.fontStyles.Rank_Side};
  letter-spacing: -8px;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  opacity: 0.7;

  user-select: none;
  -webkit-user-select: none;
`;

export const PreviousMovieNumber = styled.span`
  ${sideMovieNumberStyles}
`;

export const NextMovieNumber = styled.span`
  ${sideMovieNumberStyles}
`;

export const TopTenTitle = styled.h1`
  margin-top: ${pxToRem(56)};

  ${({ theme }) => theme.fontStyles.Header1};
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;
