import styled, {css} from "styled-components";
import logoSymbol from '@assets/svgs/Header/Logo_symbol.svg?react';
import logoTypo from '@assets/svgs/Header/Logo_typo.svg?react';
import E from '@assets/svgs/icons/eyelnvisible.svg?react';
import G from '@assets/svgs/icons/google_logo.svg?react';
import K from '@assets/svgs/icons/kakao_logo.svg?react';

export const Container = styled.div`
  height: 1080px; 
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  padding: 206px 360px 206px 438px;
  gap: 51px;
  background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;

export const LogoSection = styled.div`
   width:483px;
   height:668px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top:121px;
   gap:42px;
`;

export const Logo=styled(logoSymbol)`
  width:362px;
  height:158px;
`;

export const LogoTypo=styled(logoTypo)`
  width:483px;
  height:86px;
`;

export const EyeLogo=styled(E)`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

export const GoogleLogo=styled(G)`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

export const KakaoLogo=styled(K)`
  width: 36px;
  height: 36px;
`

export const Explain=styled.p`
  width: 480px;
  text-align: center;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White}
  font-family: "NEXON Lv2 Gothic";
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  letter-spacing: 0.42px;
`
export const FormField=styled.form`
   width:588px;
   height:668px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 72px 68px;
   gap: 12px;
`;

const SharedStyle = css`
  width: 432px;
  height:70px;
  padding:0px 21px;
  border-radius: 8px;
  border: 1.75px solid var(--Primary, #7E37F9);
  background: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;

export const InputField=styled.input` 
  ${SharedStyle};
  overflow: hidden;
  color:${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 21px */
  letter-spacing: 0.63px 
`;

export const Login=styled.button`
  ${SharedStyle}
  justify-content: center;
  align-items: center;
  color: var(--Primary, #7E37F9);
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 21px */
`
export const Google=styled.button`
  width:430px;
  height:70px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #FFF;
  border-radius: 8px;
  gap:17px;
`
export const Kakao =styled.button`
  display: flex;
  width: 430px;
  height: 70px;
  padding: 0px 21px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--kakao-bg, #FEE500);
  gap:12px;
`
export const S=styled.span`
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
`
export const P=styled.p`
  color:${({ theme }) => theme.colors.MG_Grayscale.Gray_White};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */ 
`
export const A=styled.a`
  color: var(--Primary, #7E37F9);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`

export const L=styled.label`
  display:flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 21px */
  gap:12px;
`