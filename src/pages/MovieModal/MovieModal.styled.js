import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieModalContainer = styled.div`
  width: 35%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;
`;

export const MovieTrailerSection = styled.section`
  width: 100%;
  height: fit-content;

  border-radius: 16px;
`;

// Youtube Embed 영상으로 추후 대체
export const MovieTrailerImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1200 / 675;
`;

// 영화 메타데이터 정보 표시 영역
export const MetaDataSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(36)} ${pxToRem(64)};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// 영화 평점, 좋아요, 조회수 정보 표시 영역
export const RatingLikeViewCountContainer = styled.section`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(36)};
`;

export const RatingContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const RatingText = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  .total-rating {
    ${({ theme }) => theme.fontStyles.Body2}
  }

  white-space: nowrap;
`;

// 좋아요, 조회수 정보 표시 영역
export const LikeViewCountContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(36)};
`;
