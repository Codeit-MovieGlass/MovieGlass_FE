import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import Arrow from '@assets/svgs/icons/arrow_right.svg?react';

export const GenreSelectionFrame =styled.div`
  width: 1920px;
  padding: ${pxToRem(94)} ${pxToRem(46)} ${pxToRem(86)} ${pxToRem(462)};
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GenreSelectionContainer = styled.div`
  width: 998px;
  height: 902px;

  display:flex;
  flex-direction:column;
  align-items: center;
  
  flex-shrink: 0;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`
export const GenreSelectionText = styled.header`
  width: 552px;
  margin-Top:84px;
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
  
  gap: 31px;
`
export const Genre = styled.button`
  width: 264px;
  height: 84px;
  padding: 0px 19.2px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-shrink: 0;
  
  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.colors.MG_Signature.Primary};
  background:${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

  span{
    height: 48px;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    ${({theme})=>theme.fontStyles.Body2}
    font-style: normal;
    line-height: 120%; 
  }
`
export const S = styled.span`

`
export const RightArrow=styled(Arrow)`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`
