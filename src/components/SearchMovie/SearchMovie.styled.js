import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const SearchMovieContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(64)};

  display: flex;
  flex-direction: column;
`;

// 영화 검색 헤더부분
export const SearchMovieHeader = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(48)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchMovieText = styled.span`
  ${({ theme }) => theme.fontStyles.H_Regular};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  text-align: center;

  .keyword {
    ${({ theme }) => theme.fontStyles.Header3};
  }
`;

// 영화 검색 이미지 부분
export const SearchMoviePosterSection = styled.section`
  width: 100%;
  height: fit-content;
`;

export const SearchMoviePosterList = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(48)};
`;

export const SearchMoviePosterItem = styled.li`
  flex: 1;
`;

export const SearchMoviePoster = styled.img`
  width: 100%;
  height: fit-content;

  border-radius: 2px;
`;

// 검색 결과 구분선
export const SearchResultDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: ${pxToRem(72)} 0;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;
