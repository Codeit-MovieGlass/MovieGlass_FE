import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

//전체 컨테이너 및 베경 이미지
export const TopTenContainer = styled.div`
  position: relative;

  width: 100%;
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

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentMovieContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const CurrentMoviePoster = styled.img`
  width: ${pxToRem(432)};
  height: ${pxToRem(576)};

  cursor: pointer;

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;

export const CurrentMovieNumber = styled.span`
  position: absolute;
  top: -10%;
  left: -10%;

  ${({ theme }) => theme.fontStyles.Rank_Main};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  opacity: 0.8;

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;

export const PreviousMoviePoster = styled.img`
  height: 390px;
  position: absolute;
  left: 25%;
  top: 50%;
  transform: perspective(800px) rotateY(-20deg) translate(-50%, -50%);
  filter: blur(5px);
  cursor: pointer;
`;

export const PreviousMovieNumber = styled.p`
  ${({ theme }) => theme.fontStyles.Rank_Side};

  position: absolute;
  left: 20%;
  top: 25%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const NextMoviePoster = styled.img`
  height: 390px;
  position: absolute;
  right: 25%;
  top: 50%;
  transform: perspective(700px) rotateY(20deg) translate(50%, -50%);
  filter: blur(5px);
  cursor: pointer;
`;

export const NextMovieNumber = styled.p`
  ${({ theme }) => theme.fontStyles.Rank_Side};

  position: absolute;
  right: 32%;
  top: 25%;
  transform: translate(50%, -50%);
  z-index: 1;
`;

export const TopTenTitle = styled.h1`
  margin-top: ${pxToRem(56)};

  ${({ theme }) => theme.fontStyles.Header1};
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;
