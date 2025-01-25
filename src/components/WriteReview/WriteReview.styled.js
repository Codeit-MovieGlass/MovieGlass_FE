import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const WriteReviewForm = styled.form`
  position: relative;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
`;

export const RatingSpoilerContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TextareaContainer = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  display: flex;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 24px;
  /* margin-bottom: 24px; */

  ${({ theme }) => theme.fontStyles.Body2}
  line-height: 120%;
  letter-spacing: 0.24px;

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: transparent;

  border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
  border-radius: 8px;

  resize: vertical;

  transition: border-color 0.15s ease-out;

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
    `}

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const ReviewByteCount = styled.span`
  position: absolute;
  bottom: ${pxToRem(20)};
  right: ${pxToRem(18)};

  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  transition: opacity 0.15s ease-in-out;

  ${({ $isFocused }) =>
    $isFocused
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const SubmitReviewButton = styled.button`
  align-self: flex-end;

  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(16)} ${pxToRem(20)};

  ${({ theme }) => theme.fontStyles.Body4}
  letter-spacing: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};

  border-radius: 10px;
`;
