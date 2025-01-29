import styled from 'styled-components';
import { LeftArrow as Arrow } from '@icons/Arrow';

export const CurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 425px;
  width: 100%;
  justify-content: space-between;
`;

export const LeftArrow = styled(Arrow)`
  margin-top: 190px;
  margin-left: 3%;
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(180deg);
  margin-top: 190px;
  margin-right: 3%;
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 425px;
  width: 100%;
  justify-content: space-between;
  border: 1px solid;
`;

export const CurationTitle = styled.h3`
  font: ${({ theme }) => theme.fontStyles.Header3};
  margin-bottom: 15px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 360px;
`;

export const MovieImg = styled.img.attrs((props) => ({
  src: props.Url || '',
  alt: '포스터',
}))`
  height: 360px;
  margin: 0 auto;

  ${({ isFirst }) =>
    isFirst &&
    `
    margin-left: 0;
  `}
  /* 마지막 이미지의 right 고정 */
  ${({ isLast }) =>
    isLast &&
    `
    margin-right: 0;
  `}
`;
