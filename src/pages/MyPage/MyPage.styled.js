import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { Link } from 'react-router';

export const MyPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(209)} ${pxToRem(348)} ${pxToRem(226)};
`;

export const MyPageHeader = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(120)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(64)};
`;

export const ProfileImageContainer = styled.div`
  width: ${pxToRem(240)};
  height: ${pxToRem(240)};

  border-radius: 100%;
  overflow: hidden;

  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileInfoSection = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export const ProfileNameContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(12)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

export const ProfileName = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const ProfileEmail = styled.span`
  width: fit-content;
  height: fit-content;
  margin-bottom: ${pxToRem(24)};

  ${({ theme }) => theme.fontStyles.Body1}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;

export const ReviewLikeButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

const ReviewLikeButtonStyles = css`
  width: ${pxToRem(64)};
  height: ${pxToRem(64)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_6};

  &:hover {
    transform: translateY(-2px) scale(1.02);
    transition: transform 0.2s ease-out;
  }

  transition: transform 0.2s ease-out;
`;

export const MyReviewLink = styled(Link)`
  ${ReviewLikeButtonStyles}
`;

export const MyLikeLink = styled(Link)`
  ${ReviewLikeButtonStyles}
`;
