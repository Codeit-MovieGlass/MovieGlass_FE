import styled from 'styled-components';

export const OTTLinkContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OTTLinkTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Body1}
  font-weight: 400;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const OTTIconContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 16px;
  flex: 0;
`;

export const OTTLinkIcon = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 4px;
  cursor: pointer;
`;

export const MoreModalWrapper = styled.button`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const MoreOTTIcon = styled.img`
  width: 32px;
  height: 32px;
`;
