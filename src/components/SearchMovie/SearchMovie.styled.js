import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const SearchMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: ${pxToRem(28)};
  padding: ${pxToRem(48)} ${pxToRem(64)} ${pxToRem(48)} ${pxToRem(64)};
`;

//영화 검색 헤더부분
export const SearchMovieHeaderContainer = styled.div`
  justify-content: space-between;
`;

export const SearchMoiveTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchMovieKeyword = styled.h3`
  font: ${({ theme }) => theme.fontStyles.Header3};
  display: inline;
`;

export const SearchMovieTitle = styled.p`
  font: ${({ theme }) => theme.fontStyles.H_Regular};
`;

//영화 검색 이미지 부분
export const SearchMoviePosterContainer = styled.div`
  margin-top: ${pxToRem(40)};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid;
  gap: ${pxToRem(46)};
  justify-content: flex-start;
  padding-bottom: ${pxToRem(100)};
`;

export const SearchMoviePoster = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '포스터',
}))`
  width: 22%;
  object-fit: cover;
`;
