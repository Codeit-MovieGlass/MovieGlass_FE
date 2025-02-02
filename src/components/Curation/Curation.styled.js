import styled from 'styled-components';
import { LeftArrow as LArrow, RightArrow as RArrow } from '@icons/Arrow';
import pxToRem from '@utils/pxToRem';

export const CurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${pxToRem(425)};
  width: 100%;
  justify-content: space-between;
  margin-top: ${pxToRem(120)};
`;

export const LeftArrow = styled(LArrow)`
  position: relative;
  margin: ${pxToRem(30)};
  left: ${pxToRem(10)};
`;

export const RightArrow = styled(RArrow)`
  margin: ${pxToRem(30)};
  position: relative;
  right: ${pxToRem(10)};
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const CurationTitle = styled.h3`
  font: ${({ theme }) => theme.fontStyles.Header3};
  margin-bottom: ${pxToRem(15)};
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${pxToRem(360)};
`;

export const MovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '포스터',
}))`
  height: 100%;
  margin: 0 auto;

  ${({ isFirst }) =>
    isFirst &&
    `
    margin-left: 0;
  `}
  ${({ isLast }) =>
    isLast &&
    `
    margin-right: 0;
  `}
`;
