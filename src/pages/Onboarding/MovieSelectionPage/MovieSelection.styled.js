import styled, {css} from "styled-components";
import pxToRem from "@utils/pxToRem";

import WhiteCheckIcon from "@assets/svgs/icons/check_white.svg";
import BlackCheckIcon from "@assets/svgs/icons/check_black.svg";

export const MovieSelectionFrame = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const MovieSelectionModal = styled.div`
  
   width:fit-content;
   height:fit-content;
   padding: ${pxToRem(48)} ${pxToRem(72)};

   display: flex;
   flex-direction: column;
   align-items: center;

   gap:${pxToRem(48)};

   border-radius: 16px;
   border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  `;

export const MovieSelectionText = styled.h2`
    color: ${({theme})=>theme.colors.MG_Grayscale.Gray_White};
    
    ${({theme}) => theme.fontStyles.Body1};
    font-style: normal;
  `;

export const MovieList = styled.ul`
  width: 100%;
  height: ${pxToRem(580)}; 
  padding: ${pxToRem(30)} ${pxToRem(30)} 0 ${pxToRem(30)};
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap:${pxToRem(78)};
  
  overflow-y: auto; 
  &::-webkit-scrollbar:horizontal {
    display: none; 
  }
  &::-webkit-scrollbar {
    width: ${pxToRem(4)}; 
  }
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9; 
    border-radius: 2px; 
  }
`;

export const Movie = styled.li`
  position: relative;

  width: ${pxToRem(208)};
  height: ${pxToRem(312)};

  flex-shrink: 0;
`;

export const CheckButton =styled.button`
  position: absolute;
  transform: translate(-50%, -50%);

  width: ${pxToRem(60)};
  height: ${pxToRem(60)};;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.25);

  background: ${({theme})=>theme.colors.MG_Grayscale.Gray_2} url("${BlackCheckIcon}") no-repeat center center;
  background-size:${pxToRem(36)} ${pxToRem(36)};

  ${({ $Checked,theme }) =>
    $Checked &&
    css`
      background: ${theme.colors.MG_Signature.Primary} url("${WhiteCheckIcon}") no-repeat center center;
    `}  
`


export const CompleteButtonContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CompleteButton =styled.button`

  width: ${pxToRem(200)};
  padding: ${pxToRem(16)} ${pxToRem(68)};
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
  
  background: ${({theme}) => theme.colors.MG_Grayscale.Gray_2};
  pointer-events: none;

  ${({ $Selected,theme }) =>
    $Selected &&
    css`
      background: ${theme.colors.MG_Signature.Primary};
      pointer-events: all;
    `}
    
  &:hover {
    transform: translateX(3px) scale(1.05);
   }

  span{
    color:${({theme}) => theme.colors.MG_Grayscale.Gray_3};

    ${({theme}) => theme.fontStyles.Body1}
    font-style: normal;
    line-height: 120%;

    ${({ $active,theme }) =>
      $active &&
      css`
        color: ${theme.colors.MG_Grayscale.White};
      `}
  }
`

  