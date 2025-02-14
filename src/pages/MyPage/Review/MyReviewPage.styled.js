import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MyReviewPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(99)} ${pxToRem(268)} ${pxToRem(199)};

  display: flex;
  flex-direction: column;
`;

export const MyPageRouteSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-right: ${pxToRem(8)};
  margin-bottom: ${pxToRem(36)};

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// 내가 남긴 댓글과 정렬 옵션 컨테이너
export const MyReviewHeaderSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-right: ${pxToRem(32)};
  margin-bottom: ${pxToRem(18)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyReviewPageTitle = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header3};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const MainContentDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: ${pxToRem(32)};

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

// 리뷰 목록 컨테이너
export const ReviewListContainer = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(84)};
`;

// 리뷰 목록 아이템
export const ReviewListItem = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 24px;
  border-radius: 10px;
`;

export const Poster = styled.img`
  width: 25%;
  height: fit-content;
  aspect-ratio: 280 / 375;

  border-radius: 2px;

  flex-shrink: 0;
`;

// Main Section
export const ReviewItemContainer = styled.section`
  flex: 1;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(32)};

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)};

  ${({ $isEditing }) =>
    $isEditing &&
    css`
      gap: ${pxToRem(40)};
    `}
`;

export const ReviewItemHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${pxToRem(48)};
`;

// 영화 제목 및 평점 컨테이너
export const RatingMovieTitleContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};

  ${({ $isEditing }) =>
    $isEditing &&
    css`
      gap: ${pxToRem(18)};
    `}
`;

export const ReviewTitle = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const RatingContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const RatingText = styled.span`
  ${({ theme }) => theme.fontStyles.Body2};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  .total-rating {
    color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
    font-weight: 400;
  }
`;

// 리뷰 수정, 삭제 및 작성 날짜 및 스포일러 영역
export const ReviewInfoSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(12)};
`;

export const EditDeleteButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(20)};
`;

const EditDeleteButtonStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  white-space: nowrap;
`;

export const EditButton = styled.button`
  ${EditDeleteButtonStyles}
`;

export const DeleteButton = styled.button`
  ${EditDeleteButtonStyles}
`;

export const SpoilerText = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body4};
  color: ${({ theme }) => theme.colors.MG_Signature.Light1};
`;

export const ReviewDate = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body5};
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const InfoLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;

// 리뷰 내용 컨테이너
export const ReviewContent = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(32)};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Signature.Primary_Light};

  color: #ddd;
`;

export const CommentEditForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(24)};
`;

export const CommentBox = styled.textarea`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(24)} ${pxToRem(32)};

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  resize: vertical;
`;

export const ModifyButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(14)} ${pxToRem(20)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  ${({ theme }) => theme.fontStyles.Body5}
  font-weight: 600;

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
`;
