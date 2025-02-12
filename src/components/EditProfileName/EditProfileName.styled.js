import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const EditProfileNameContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(28)};
`;

export const ProfileNameInput = styled.input`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(16)} ${pxToRem(24)};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Signature.Primary};

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_6};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

export const EditCancelButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

const editCancelButtonStyles = css`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(16)} ${pxToRem(24)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const EditButton = styled.button`
  ${editCancelButtonStyles};

  background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
`;

export const CancelButton = styled.button`
  ${editCancelButtonStyles}

  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;
