import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  z-index: 1000;

  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const MovieTrailerSection = styled.section`
  width: 100%;
  height: fit-content;
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

// 정보, 관람평 선택 탭
export const InfoTabSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(48)};
`;

export const InfoTabList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const InfoTabItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const InfoTabButton = styled.button`
  position: relative;

  width: ${pxToRem(128)};
  height: fit-content;
  padding: ${pxToRem(12)} ${pxToRem(32)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Body2}

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          color: ${({ theme }) => theme.colors.MG_Signature.Primary};
          transition: color 0.15s ease-out;
        `
      : css`
          color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
          transition: color 0.15s ease-out;
        `}


  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

    ${({ $isSelected }) =>
      $isSelected
        ? css`
            background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
            transition: background-color 0.15s ease-out;
          `
        : css`
            background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
            transition: background-color 0.15s ease-out;
          `}
  }
`;
