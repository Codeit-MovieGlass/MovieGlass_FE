import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const QuitModalContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(36)} ${pxToRem(48)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const QuitIconTextSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

export const QuitIconBox = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const QuitText = styled.span`
  ${({ theme }) => theme.fontStyles.Body3}
  font-weight: 600;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.85);

  white-space: nowrap;
`;

export const QuitModalButtonSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${pxToRem(16)};
`;

const optionButtonStyles = css`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(12)} ${pxToRem(20)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  ${({ theme }) => theme.fontStyles.Body5}
`;

export const QuitButton = styled.button`
  ${optionButtonStyles}

  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
`;

export const CancelButton = styled.button`
  ${optionButtonStyles}

  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;
