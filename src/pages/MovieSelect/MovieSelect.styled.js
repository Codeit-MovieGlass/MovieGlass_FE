import styled from "styled-components";
import pxToRem from "@utils/pxToRem";

import WhiteCheckIcon from "@assets/svgs/icons/check_white.svg?react";
import BlackCheckIcon from "@assets/svgs/icons/check_black.svg?react";

export const MovieSelectFrame = styled.div`
  width:1920px;
  height: 1080px;
  padding: ${pxToRem(90)} ${pxToRem(461)} ${pxToRem(90)} ${pxToRem(463)};
  
  display: inline-flex;
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
export const Explain = styled.p`
    width: 592px;
    height:36px;
    margin:84px 202px 23px 202px;
   
    color: ${({theme})=>theme.colors.MG_Grayscale.Gray_White};
    
    ${({theme}) => theme.fontStyles.Body1};
    font-style: normal;
  `

export const MovieList = styled.div`
  height: 759px;
  padding: ${pxToRem(40)} ${pxToRem(88)} ${pxToRem(0)} ${pxToRem(117)};
  
  display:flex;
  flex-wrap: wrap;
  gap:${pxToRem(44)};
  
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
 margin-Bottom:11px;

 flex-shrink: 0;
`
export const Check =styled.button`
  position:relative;
  right:30px;
  bottom:30px;

  width: 60px;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
  border-radius: 48px;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);

  background: ${({$Checked, theme }) =>
  $Checked ? theme.colors.MG_Signature.Primary : theme.colors.MG_Grayscale.Gray_2};
`

export const CheckedIcon =styled(WhiteCheckIcon)
` width:36px
  height: 36px;
  
  flex-shrink: 0;
`

export const CheckIcon =styled(BlackCheckIcon)
` width:36px
  height: 36px;
  
  flex-shrink: 0;
`

export const CompleteButton =styled.button`
  position: relative;
  left:764px;
  bottom:112px;

  width: 200px;
  height: 80px;
  padding: ${pxToRem(0)} ${pxToRem(19.2)};
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(9.6)};
  flex-shrink: 0;
  
  border-radius: 8px;
  background: ${({ $Selected, theme }) =>
  $Selected ? theme.colors.MG_Signature.Primary : theme.colors.MG_Grayscale.Gray_2};
  
  span{
    color: ${({ $active, theme }) =>
    $active ? theme.colors.MG_Grayscale.White: theme.colors.MG_Grayscale.Gray_3};

    ${({theme}) => theme.fontStyles.Body1}
    font-style: normal; 
  }
`

  