import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

export const OTTLinkContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(16)};
`;

export const OTTLinkTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const OTTIconList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(16)};
`;

export const OTTIconListItem = styled.li`
  width: fit-content;
  height: fit-content;

  flex-shrink: 0;
`;

export const OTTLink = styled.a`
  width: fit-content;
  height: fit-content;
`;

export const OTTLinkIcon = styled.img`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  border-radius: 4px;
`;
