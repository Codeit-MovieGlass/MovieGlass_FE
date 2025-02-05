import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import Arrow from '@assets/svgs/icons/arrowRightPurple.svg?react';


export const GenreSelectionFrame =styled.div`
  width: 1920px;
  padding: 108px 462px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GenreSelectionContainer = styled.div`
  position:relative;

  width: 998px;
  height: 864px;
  padding: 48px 72px;

  display:flex;
  flex-direction:column;
  align-items: center;

  flex-shrink: 0;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`

export const GenreSelectionText = styled.header`
  margin-Bottom:64px;
  
  text-align:center;

  color:${({ theme }) => theme.colors.MG_Grayscale.White};
  
  ${({ theme }) => theme.fontStyles.Body1};
  font-style: normal;
`
export const GenreList= styled.div`
  width:100%; 
  
  display: flex;
  justify-content:center;

  flex-Direction:row;
  flex-Wrap: wrap;
  
  gap: 36px;
`
export const Genre = styled.button`
  width: 259px;
  height: 64px;
  padding: 16px 0px;
  margin-bottom:6px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-shrink: 0;
  
  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.colors.MG_Signature.Primary_Edit};
  background:${({ theme, selected }) =>selected ? theme.colors.MG_Signature.Primary_Edit : theme.colors.MG_Grayscale.Gray_2 };

  span{
    width: fit-content;
    height: 48px;
  
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme,selected})=>selected ? theme.colors.MG_Grayscale.White : theme.colors.MG_Signature.Primary_Edit};
  
    ${({theme})=>theme.fontStyles.Body2}
    font-style: normal;
    line-height: 120%; 
  }
`

export const ArrowButton = styled.button`
  position: absolute;
  right:72px;
  bottom: 48px;

  line-height:0;
`

export const RightArrow=styled(Arrow)`
  width: 60px;
  height: 60px;
  
  flex-shrink: 0;
`
