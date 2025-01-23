import styled, {css} from "styled-components";
import logoSymbol from '@assets/svgs/Header/Logo_symbol.svg?react';
import logoTypo from '@assets/svgs/Header/Logo_typo.svg?react';

export const LoginContainer = styled.div`
display: inline-flex;
height: 1080px;
padding: 206px 360px 206px 438px;
justify-content: flex-end;
align-items: center;
gap: 51px;
background: var(--Grayscale-Gray1, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #100E10);

`;

export const LogoSection = styled.div`
   width:483px;
   height:668px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap:42px;
`;

export const Logo=styled(logoSymbol)`
  width:362px;
  height:158px;
  
`;

export const LogoTypo=styled(logoTypo)`
  width:483px;
  height:86.4px;

`;

export const Explain=styled.p`
  width: 480px;
  color: var(--Grayscale-White, #FFF);
  text-align: center;
  font-family: "NEXON Lv2 Gothic";
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  letter-spacing: 0.42px;
`

export const LoginForm=styled.form`
   width:588px;
   height:668px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 14px;
`;

const SharedStyle = css`
  width:390px;
  height:70px;
  padding:0px 21px;
  border-radius: 8px;
  border: 1.75px solid var(--Primary, #7E37F9);
  background: var(--Grayscale-Gray1, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #100E10);
`;


export const InputField=styled.input` 
  ${SharedStyle};
  overflow: hidden;
  color: var(--Grayscale-Gray4, #A8A5A8);
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


export const P=styled.p`
  color: var(--Grayscale-White, #FFF);
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


/*
로그인 컨테이너 박스
로고 세션
로그인 세션


*/