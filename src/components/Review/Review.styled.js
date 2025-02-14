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
