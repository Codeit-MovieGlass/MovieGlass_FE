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
  gap: ${pxToRem(40)};

  justify-self: flex-end;
`;

// Emojis
export const Emoji = styled.li`
  width: ${pxToRem(54)};
  height: ${pxToRem(54)};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    width: ${pxToRem(70)};
    height: ${pxToRem(70)};
  }
`;

export const LoveEmoji = styled(Emoji)`
  background: url('/emoji/love.svg') no-repeat center/cover;
`;

export const SosoEmoji = styled(Emoji)`
  background: url('/emoji/soso.svg') no-repeat center/cover;
`;

export const SadEmoji = styled(Emoji)`
  background: url('/emoji/sad.svg') no-repeat center/cover;
`;

export const HappyEmoji = styled(Emoji)`
  background: url('/emoji/happy.svg') no-repeat center/cover;
`;

export const ToughEmoji = styled(Emoji)`
  background: url('/emoji/tough.svg') no-repeat center/cover;
`;
