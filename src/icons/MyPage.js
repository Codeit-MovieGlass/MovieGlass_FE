import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import likeIcon from '@assets/svgs/icons/like.svg?react';
import reviewIcon from '@assets/svgs/icons/review.svg?react';
import settingsIcon from '@assets/svgs/icons/settings.svg?react';
import withdrawlIcon from '@assets/svgs/icons/withdrawl.svg?react';
import cameraIcon from '@assets/svgs/icons/camera.svg?react';

export const LikeIcon = styled(likeIcon)`
  width: ${pxToRem(28)};
  height: fit-content;
`;

export const ReviewIcon = styled(reviewIcon)`
  width: ${pxToRem(28)};
  height: fit-content;
`;

export const SettingsIcon = styled(settingsIcon)`
  width: ${pxToRem(28)};
  height: fit-content;
`;

export const WithdrawlIcon = styled(withdrawlIcon)`
  width: ${pxToRem(36)};
  height: fit-content;
`;

export const CameraIcon = styled(cameraIcon)`
  width: ${pxToRem(60)};
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  }
`;
