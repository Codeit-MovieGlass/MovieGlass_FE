import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const HomeContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const CurationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(104)} ${pxToRem(96)};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 검색 페이지 레이아웃
export const SearchMovieWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(104)} ${pxToRem(96)};

  display: flex;
  flex-direction: column;
`;
