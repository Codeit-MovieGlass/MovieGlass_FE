import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const CurationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(64)} ${pxToRem(64)};
`;

export const EmojiCurationContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(84)};
`;
