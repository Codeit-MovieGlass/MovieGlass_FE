import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const BalloonContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// TextBalloon.styled.js
export const BallonText = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
  ${({ theme }) => theme.fontStyles.Body1};
`;

// EmojiBalloon.styled.js
export const BalloonEmojiList = styled.ul`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(40)};
`;

export const Emoji = styled.li`
  width: ${pxToRem(54)};
  height: ${pxToRem(54)};
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
