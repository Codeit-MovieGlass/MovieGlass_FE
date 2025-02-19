import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { Link } from 'react-router';

export const MyPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const MyPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(150)} ${pxToRem(348)} ${pxToRem(226)};

  @media (max-width: 1440px) {
    padding: ${pxToRem(209)} ${pxToRem(240)} ${pxToRem(226)};
  }
`;

// Header
export const MyPageHeader = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(120)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(64)};
`;

// Profile Image
export const ProfileImageContainer = styled.div`
  position: relative;

  width: ${pxToRem(240)};
  height: ${pxToRem(240)};

  border-radius: 100%;
  overflow: hidden;

  flex-shrink: 0;
`;

export const ProfileImageFileInput = styled.input`
  display: none;
`;

export const ProfileImageEditButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
`;

export const ProfileImageEditContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  background-color: rgba(16, 14, 16, 0.6);
`;

export const CameraIconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  height: fit-content;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

// Profile Info
export const ProfileInfoSection = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export const ProfileNameContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: ${pxToRem(64)};
  margin-bottom: ${pxToRem(12)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(32)};
`;

export const ProfileEditSettingsContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};
`;

const EditSettingsButtonStyles = css`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.button`
  ${EditSettingsButtonStyles}
`;

export const AccountDropdownContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const SettingsButton = styled.button`
  ${EditSettingsButtonStyles}
`;

export const ProfileName = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const ProfileEmail = styled.span`
  width: fit-content;
  height: fit-content;
  margin-bottom: ${pxToRem(24)};

  ${({ theme }) => theme.fontStyles.Body2}
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
`;

// Review & Like Button
export const ReviewLikeButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(24)};
`;

const ReviewLikeButtonStyles = css`
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
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

// Calendar
export const CalenaderContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const CalendarTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Header4}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
  text-align: center;

  white-space: nowrap;
`;

// Date Pick
export const DatePickContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(12)} 0;
  margin-bottom: ${pxToRem(18)};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${pxToRem(12)};
`;

const DatePickButtonStyles = css`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(4)} ${pxToRem(12)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  ${({ theme }) => theme.fontStyles.Header7}
  color: ${({ theme }) => theme.colors.MG_Signature.Primary_Light};
`;

export const YearPickerContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const YearPickerButton = styled.button`
  ${DatePickButtonStyles}
`;

export const MonthPickerContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const MonthPickerButton = styled.button`
  ${DatePickButtonStyles}

  min-width: ${pxToRem(94)};
`;

export const DatePickerArrowBox = styled.div`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};

  display: flex;
  justify-content: center;
  align-items: center;
`;
