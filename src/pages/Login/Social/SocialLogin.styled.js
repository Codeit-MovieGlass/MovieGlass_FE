import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const SocialLoginContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`;

const socialLoginBtnStyle = css`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(16)} ${pxToRem(24)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(24)};

  border-radius: 8px;
`;

export const KakaoLoginBtn = styled.button`
  ${socialLoginBtnStyle}
  background-color: #fee500;
`;

export const GoogleLoginBtn = styled.button`
  ${socialLoginBtnStyle}
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const SocialLoginText = styled.span`
  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  user-select: none;
  -webkit-user-select: none;
`;
