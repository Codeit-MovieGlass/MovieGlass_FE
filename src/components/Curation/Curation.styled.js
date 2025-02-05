import styled from 'styled-components';
import { LeftArrow as LArrow, RightArrow as RArrow } from '@icons/Arrow';
import pxToRem from '@utils/pxToRem';

export const CurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${pxToRem(425)};
  width: 100%;
  justify-content: space-between;
  margin-top: ${pxToRem(90)};
  min-width: max-content;
  padding-left: ${pxToRem(25)};
  padding-right: ${pxToRem(25)};
`;

export const LeftArrow = styled(LArrow)`
  display: flex;
  position: relative;
  margin: 0 auto;
  left: ${pxToRem(10)};
`;

export const RightArrow = styled(RArrow)`
  display: flex;
  position: relative;
  margin: 0 auto;
  right: ${pxToRem(10)};
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  min-width: max-content;
  justify-content: space-between;
`;

export const CurationTitle = styled.h3`
  font: ${({ theme }) => theme.fontStyles.Header3};
  margin-bottom: ${pxToRem(15)};
`;

export const MovieContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  min-width: max-content;
  flex-direction: row;
  height: ${pxToRem(360)};
`;

export const MovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '포스터',
}))`
  height: ${pxToRem(360)};
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
