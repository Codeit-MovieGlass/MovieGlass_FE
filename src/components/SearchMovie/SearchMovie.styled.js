import fontStyles from '@styles/theme/typography';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const SearchMovieContainer = styled.div`
  display: flex;
  width: ${pxToRem(1469)};
  flex-direction: column;
  padding: ${pxToRem(48)} ${pxToRem(64)} ${pxToRem(0)} ${pxToRem(64)};
  margin: 0 auto;
  margin-bottom: ${pxToRem(72)};
`;

//영화 검색 헤더부분
export const SearchMovieHeaderDiv = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const SearchMoiveTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchMovieKeyword = styled.h3`
  ${({ theme }) => theme.fontStyles.Header3};
  display: inline;
`;

export const SearchMovieTitle = styled.p`
  ${({ theme }) => theme.fontStyles.H_Regular};
`;

export const BackToHomeDiv = styled.div`
  display: flex;
  width: ${pxToRem(140)};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const BackToHome = styled.p`
  ${({ theme }) => theme.fontStyles.Body2};
  margin-top: 2px;
`;

//영화 검색 이미지 부분
export const SearchMoviePosterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2.6666666666%; //ㅎㅎ..
  justify-content: flex-start;
  padding-bottom: ${pxToRem(72 + 48)};
  border-bottom: 1px solid;
`;

export const SearchMoviePoster = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '포스터',
}))`
  object-fit: cover;
  width: 23%;
  margin-top: ${pxToRem(48)};
`;
