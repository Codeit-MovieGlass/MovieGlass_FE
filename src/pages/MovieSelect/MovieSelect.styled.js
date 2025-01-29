import styled from "styled-components";
import CheckW from "@assets/svgs/icons/check_white.svg?react";
import CheckB from "@assets/svgs/icons/check_black.svg?react";

export const Frame = styled.div`
  display: inline-flex;
  width:1920px;
  height: 1080px;
  padding: 90px 461px 90px 463px;
  justify-content: center;
  align-items: center;
  background:  ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  `;

export const Modal = styled.div`
   width:998px;
   height:902px;
   border-radius: 16px;
   border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  `
export const P = styled.p`
    width: 592px;
    height:36px;
    margin:84px 202px 23px 202px;
    color: ${({theme})=>theme.colors.MG_Grayscale.Gray_White};
    ${({theme}) => theme.fontStyles.Body1};
    font-style: normal;
  `

export const MovieList = styled.div`
  height: 759px;
  display:flex;
  flex-wrap: wrap;
  gap:44px;
  padding:40px 88px 0px 117px;
  overflow-y: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
  display: none; 
  }
`
export const Movie = styled.div`
 width: 233.921px;
 height: 311.628px;
 flex-shrink: 0;
 margin-Bottom:11px;
`
export const Check =styled.button`
  width: 60px;
  height: 60px;
  position:relative;
  right:30px;
  bottom:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);
`

export const Active =styled(CheckW)`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`

export const DeActive =styled(CheckB)`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`
export const Complete =styled.button`
  position: relative;
  display: flex;
  bottom:112px;
  left:764px;
  width: 200px;
  height: 80px;
  padding: 0px 19.2px;
  justify-content: center;
  align-items: center;
  gap: 9.6px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ Selected, theme }) =>
  Selected ? "var(--Primary, #7E37F9)" : theme.colors.MG_Grayscale.Gray_2};
`
export const C =styled.p`
  ${({theme}) => theme.fontStyles.Body1}
  font-style: normal;
  color: ${({ active, theme }) =>
    active ? theme.colors.MG_Grayscale.White: theme.colors.MG_Grayscale.Gray_3};
  
`