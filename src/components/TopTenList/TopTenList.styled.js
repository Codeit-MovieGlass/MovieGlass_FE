import styled from 'styled-components';
import { LeftArrow as Arrow } from '@icons/Arrow.js';

//전체 컨테이너 및 베경 이미지------------------------------------------------
export const TopTenContainer = styled.div`
  width: 100%;
  height: 840px;
  display: flex;
  flex-direction: column;
`;

export const BackgroundImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '',
}))`
  width: 100%;
  height: 840px;
  object-fit: cover;
  opacity: 30%;

  position: absolute;
  z-index: -1;
`;

//포스터 보여주는 부분------------------------------------------------
export const MovieListContainer = styled.div`
  top: 0;
  position: relative;
  width: 100%;
  height: 87%;
`;

export const MainMovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '',
}))`
  height: 576px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
`;

export const PrevMovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '',
}))`
  height: 390px;
  position: absolute;
  left: 25%;
  top: 50%;
  transform: perspective(800px) rotateY(-20deg) translate(-50%, -50%);
  filter: blur(5px);
  cursor: pointer;
`;

export const NextMovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '',
}))`
  height: 390px;
  position: absolute;
  right: 25%;
  top: 50%;
  transform: perspective(700px) rotateY(20deg) translate(50%, -50%);
  filter: blur(5px);
  cursor: pointer;
`;

//영화 정보-------------------------------------------------
export const MovieNum = styled.p`
  font: ${({ theme }) => theme.fontStyles.Rank_Main};
  left: 37%;
  position: absolute;
  z-index: 3;
`;

export const PrevMovieNum = styled.p`
  font: ${({ theme }) => theme.fontStyles.Rank_Side};
  position: absolute;
  left: 20%;
  top: 25%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const NextMovieNum = styled.p`
  font: ${({ theme }) => theme.fontStyles.Rank_Side};
  position: absolute;
  right: 32%;
  top: 25%;
  transform: translate(50%, -50%);
  z-index: 1;
`;

export const MovieIntroBoxContainer = styled.div`
  position: absolute;
  left: 47%;
  top: 63%;
  z-index: 3;
`;

//영화 변경 화살표----------------------------------------------------------------
export const LeftArrow = styled(Arrow)`
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  cursor: pointer;
`;

export const RightArrow = styled(Arrow)`
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translate(50%, -50%) rotate(180deg);
  z-index: 3;
  cursor: pointer;
`;

//~~를 위한 TOP 10 부분-----------------------------------------------------------------
export const TopTenTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontStyles.Header1};
  margin: 0 auto;
  opacity: 100%;
`;
