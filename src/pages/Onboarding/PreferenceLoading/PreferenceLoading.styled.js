import styled from "styled-components";
import pxToRem from "@utils/pxToRem";

export const LoadingFrame=styled.div`
  height: 1080px;
  padding: ${pxToRem(90)} ${pxToRem(461)} ${pxToRem(90)} ${pxToRem(463)};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: ${({theme})=>{theme.colors.MG_Grayscale.Gray_1}}
`

export const LoadingContainer=styled.div`
  width: 996px;
  height: 902px;
  padding: ${pxToRem(0)} ${pxToRem(185)};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(72)};

  border-radius: 16px;
  border: 1px solid ${({theme})=>theme.colors.MG_Grayscale.Gray_4} ;
`

export const Explain = styled.p`
  color: ${({theme})=>{theme.colors.MG_Grayscale.White}};
  
  ${({theme})=>theme.fontStyles.Body1};
  font-style: normal;
`

