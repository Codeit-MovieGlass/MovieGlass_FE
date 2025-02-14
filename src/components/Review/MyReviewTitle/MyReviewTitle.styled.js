import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MyReviewTitleContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-bottom: ${pxToRem(28)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const MyReviewTitleText = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  font-weight: 600;

  color: ${({ theme }) => theme.colors.MG_Signature.Primary};

  white-space: nowrap;
`;
