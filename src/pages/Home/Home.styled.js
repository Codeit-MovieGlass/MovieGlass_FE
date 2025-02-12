import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const HomeContatiner = styled.div`
  width: 100%;
  min-width: 1440px;
  margin: 0 auto;
`;

export const CurationWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  height: fit-content;
  padding: ${pxToRem(64)} ${pxToRem(64)};
`;

export const SearchMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: ${pxToRem(48)} ${pxToRem(104)} ${pxToRem(96)} ${pxToRem(104)};
  margin: 0 auto;
`;
