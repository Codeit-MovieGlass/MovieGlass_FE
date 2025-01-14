import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 25px 50px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
`;

export const Logos = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
`;
