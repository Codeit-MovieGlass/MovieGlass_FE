import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const EmojiCurationContainer = styled.div`
  margin-top: ${pxToRem(30)};
  margin-left: ${pxToRem(200)};
  margin-right: ${pxToRem(200)};

  display: flex;
  flex-direction: column;
`;
