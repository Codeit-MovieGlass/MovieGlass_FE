import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const SignUpContainer = styled.div`
  width: ${pxToRem(380)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(28)};
`;

export const SignUpForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(32)};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
`;

export const InputLabel = styled.label`
  ${({ theme }) => theme.fontStyles.Body4};
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;

const sharedFormStyle = css`
  width: 100%;
  padding: ${pxToRem(18)} ${pxToRem(24)};

  border-radius: 8px;
  border: 1.75px solid ${({ theme }) => theme.colors.MG_Signature.Primary};

  background-color: transparent;
`;

export const SignUpInput = styled.input`
  ${sharedFormStyle}

  ${({ theme }) => theme.fontStyles.Body4};
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`;

export const NicknameInput = styled(SignUpInput)``;

export const EmailInput = styled(SignUpInput)``;

export const PasswordInput = styled(SignUpInput)``;

export const SignUpButton = styled.button`
  ${sharedFormStyle}

  margin-top: ${pxToRem(8)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  background-color: ${({ theme }) => theme.colors.MG_Signature.Primary};
`;

export const LoginSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  ${({ theme }) => theme.fontStyles.Body4}
  letter-spacing: 0;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.MG_Signature.Primary};

    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }
`;
