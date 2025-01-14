import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const SearchBarForm = styled.form`
  width: ${pxToRem(600)};
  height: 50px;
  padding: 0 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: ${pxToRem(350)};
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  background-color: inherit;

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.48px;

  &::placeholder {
    font-size: ${pxToRem(16)};
  }
`;

export const SearchButton = styled.button`
  width: fit-content;
  height: fit-content;
`;
