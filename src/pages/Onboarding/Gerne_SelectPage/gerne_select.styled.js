import styled from 'styled-components';
import A from '@assets/svgs/icons/arrow_right.svg?react';

export const Frame =styled.div`
  width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 94px 462px 86px 462px;
`

export const GenreContainer = styled.div`
  width: 998px;
  height: 902px;
  display:flex;
  flex-direction:column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`
export const P = styled.p`
  width: 552px;
  margin-Top:84px;
  margin-Bottom:64px;
  text-align:center;
  color:${({ theme }) => theme.colors.MG_Grayscale.White};
  ${({ theme }) => theme.fontStyles.Body1};
  font-style: normal;
`
export const D = styled.div`
  width:854px; 
  display: flex;
  flex-Direction:row;
  gap: 31px;
  flex-Wrap: wrap;
`
export const Genre = styled.button`
  display: flex;
  width: 264px;
  height: 84px;
  padding: 0px 19.2px;
  justify-content: center;
  align-items: center;
  gap: 9.6px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid var(--Primary, #7E37F9);
  background:${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`
export const S = styled.span`
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 9.6px;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /
  letter-spacing: 0.72px;
`
export const Arrow=styled(A)`
  width: 60px;
  height: 60px;
`
