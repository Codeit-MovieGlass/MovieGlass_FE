import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import defaultProfile from '@assets/svgs/Header/DefaultProfile.svg?react';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  padding: 25px 50px;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  @media (max-width: 480px) {
    height: 80px;
    padding: 10px ${pxToRem(40)};
  }

  @media (min-width: 480px) and (max-width: 768px) {
    gap: 48px;
    padding: 25px ${pxToRem(50)};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 32px;
  }
`;

export const Logos = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const SearchProfile = styled.section`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    gap: ${pxToRem(36)};
  }
`;

export const ProfileButton = styled.button`
  position: relative;

  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};
`;

export const DefaultProfile = styled(defaultProfile)`
  width: ${pxToRem(28)};
  height: ${pxToRem(28)};
`;
