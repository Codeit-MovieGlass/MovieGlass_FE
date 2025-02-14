import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieReviewTabContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(32)} ${pxToRem(64)} ${pxToRem(64)};

  display: flex;
  flex-direction: column;
`;

export const ReviewWriteSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(48)};
`;

export const ReviewSortOptionSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(18)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(48)};
`;

export const ReviewListSection = styled.section`
  width: 100%;
  height: fit-content;
`;

export const ReviewList = styled.ul`
  width: 100%;
  height: fit-content;
  padding: 0 ${pxToRem(24)};
`;

export const ReviewListItem = styled.li`
  width: 100%;
  height: fit-content;
  margin: ${pxToRem(18)} 0;
`;
