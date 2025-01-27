import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MyReviewContainer = styled.div`
  width: 100%;
  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
`;

export const MyReviewHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(48)};
`;

export const MyReviewTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const MyReviewTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body2}
  font-weight: 700;

  color: ${({ theme }) => theme.colors.MG_Signature.Primary};

  white-space: nowrap;
`;

export const EditDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

const editDeleteButtonStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  ${({ theme }) => theme.fontStyles.Body3}
  font-weight: 700;

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

export const EditButton = styled.button`
  ${editDeleteButtonStyles}
`;

export const DeleteButton = styled.button`
  ${editDeleteButtonStyles}
`;
