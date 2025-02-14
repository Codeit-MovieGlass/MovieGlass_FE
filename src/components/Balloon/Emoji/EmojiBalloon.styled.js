import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

import { BalloonContainerStyles } from '../BalloonSection.styled';

export const EmojiBalloonContainer = styled.div`
  ${BalloonContainerStyles}
  align-self: flex-end;
`;

export const BalloonEmojiList = styled.ul`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(36)};

  justify-self: flex-end;
`;

export const BalloonEmojiListItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

// Emojis
export const EmojiButton = styled.button`
  width: fit-content;
  height: fit-content;

  &:hover {
    transform: translateY(-3px) scale(1.4);
    transition: transform 0.18s ease;
  }

  transition: transform 0.2s ease;
`;

export const Emoji = styled.img`
  width: ${pxToRem(54)};
  height: ${pxToRem(54)};
`;

export const LoveEmoji = styled(Emoji)``;

export const SosoEmoji = styled(Emoji)``;

export const SadEmoji = styled(Emoji)``;

export const HappyEmoji = styled(Emoji)``;

export const ToughEmoji = styled(Emoji)``;
