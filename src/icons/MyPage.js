import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import likeIcon from '@assets/svgs/icons/like.svg?react';
import reviewIcon from '@assets/svgs/icons/review.svg?react';

export const LikeIcon = styled(likeIcon)`
  width: ${pxToRem(30)};
  height: fit-content;
`;

export const ReviewIcon = styled(reviewIcon)`
  width: ${pxToRem(30)};
  height: fit-content;
`;
