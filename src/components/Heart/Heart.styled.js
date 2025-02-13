import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

import heartIcon from '@assets/svgs/icons//heart.svg?react';

export const HeartButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-2px) scale(1.1);
    transition: transform 0.2s ease-out;
  }

  transition: transform 0.12s ease-in;
`;

export const HeartIcon = styled(heartIcon)`
  width: ${pxToRem(48)};
  height: fit-content;

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
      fill 0.2s ease-out,
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

    transition: clip-path 0.2s ease-out;
  }
`;
