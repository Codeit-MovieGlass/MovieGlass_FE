import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import eyeIcon from '@assets/svgs/icons/eyelnvisible.svg?react';

export const LoginContainer = styled.div`
  width: ${pxToRem(380)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(28)};
`;

export const LoginForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(20)};
`;

const sharedFormStyle = css`
  width: 100%;
  padding: ${pxToRem(18)} ${pxToRem(24)};

  border-radius: 8px;
  border: 1.75px solid ${({ theme }) => theme.colors.MG_Signature.Primary};

  background-color: transparent;
`;

export const LoginInput = styled.input`
  ${sharedFormStyle}

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`;

export const EmailInput = styled(LoginInput)``;

export const PasswordContainer = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
`;

export const PasswordInput = styled(LoginInput)`
  padding-right: ${pxToRem(60)};
`;

export const EyeIcon = styled(eyeIcon)`
  position: absolute;
  top: 50%;
  right: ${pxToRem(16)};
  z-index: 10;

  width: ${pxToRem(28)};
  height: ${pxToRem(28)};

  transform: translateY(-50%);

  cursor: pointer;

  pointer-events: ${({ $disabled }) => $disabled && 'none'};
`;

export const LoginButton = styled.button`
  ${sharedFormStyle}

  margin-top: ${pxToRem(8)};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.MG_Signature.Primary};
`;

export const SocialDivider = styled.div`
  width: 100%;
  height: 2px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

export const SignUpSection = styled.section`
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
