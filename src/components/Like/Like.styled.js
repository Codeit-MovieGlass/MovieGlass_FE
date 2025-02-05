import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import heartIcon from '@assets/svgs/icons//heart.svg?react';

export const HeartIcon = styled(heartIcon)`
  position: relative;

  width: ${pxToRem(50)};
  height: ${pxToRem(47)};

  cursor: pointer;

  #heart-outline {
    position: absolute;
    top: 0;
    left: 0;

    ${({ $isLiked }) =>
      $isLiked
        ? css`
            fill: ${({ theme }) => theme.colors.MG_Alert.Error};
          `
        : css``}

    transition:
      fill 0.2s ease-in-out,
      transform 0.18s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }

  #heart-fill {
    position: absolute;
    top: 0;
    left: 0;

    clip-path: inset(100% 0 0 0);

    ${({ $isLiked }) =>
      $isLiked
        ? css`
            clip-path: inset(0 0 0 0);
          `
        : css``}

    transition: clip-path 0.2s ease-in-out;
  }
`;
