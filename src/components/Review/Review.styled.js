import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const ReviewWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(36)};
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(12)} ${pxToRem(18)};

  display: flex;
  flex-direction: column;
`;

export const ReviewInfos = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(28)};

  display: flex;
  justify-content: space-between;
  gap: ${pxToRem(48)}; // 추후 반응형 작업 시 수정
`;

// Rating & Date
export const RatingDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const MyReviewRatingSpoilerContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

export const SpoilerDivider = styled.div`
  align-self: stretch;

  width: 1.5px;
  height: 100%;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

export const MyReviewSpoilerText = styled.span`
  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.MG_Signature.Light1};

  white-space: nowrap;
`;

export const RatingBox = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};

  span {
    ${({ theme }) => theme.fontStyles.Body3};
    color: ${({ theme }) => theme.colors.MG_Grayscale.White};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Date = styled.span`
  ${({ theme }) => theme.fontStyles.Body4} // Body5 → Body4로 수정
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

// 내 리뷰일 경우 수정, 삭제

export const EditDeleteButtonContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const QuitOrDeleteModalContainer = styled.div`
  position: absolute;
  top: 180%;
  right: 0;

  width: fit-content;
  height: fit-content;
`;

// Profile & View
export const ProfileViewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(28)};
`;

export const UsernameViewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const Username = styled.span`
  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;

  .user-id {
    color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  }
`;

export const ViewBox = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ theme }) => theme.colors.MG_Signature.Light};
`;

export const ProfileImageBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};

  @media (max-width: 768px) {
    display: none;
  }
`;

// Comment Content
export const MyReviewBorderHighlight = styled.div`
  width: 100%;
  min-width: 280px;
  padding: ${pxToRem(28)} ${pxToRem(36)};

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.MG_Signature.Light1};

  overflow: scroll;
`;

// 스포일러 댓글 Blur
export const SpoilerBlurContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(32)};
`;

export const SpoilerReviewBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: 100%;

  border-radius: 4px;

  background-color: rgba(229, 221, 255, 0.1);
  backdrop-filter: blur(10px);
`;

export const SpoilerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MG_Signature.Light1};

  .spoiler {
    color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  }
`;

// 리뷰 내용
export const ReviewContent = styled.p`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

// Divider
export const ReviewDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: ${pxToRem(48)};

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
`;
