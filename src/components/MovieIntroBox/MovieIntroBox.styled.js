import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const MovieIntroBoxContainer = styled.div`
  position: absolute;
  bottom: 8%;
  right: -20%;

  width: ${pxToRem(320)};
  height: ${pxToRem(160)};
  padding: ${pxToRem(20)};

  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  user-select: none; /* 텍스트 선택 비활성화 */
  -webkit-user-select: none; /* Safari */
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};

  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fontStyles.Body2};
  font-weight: 700;
  letter-spacing: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GenreKeywordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};

  white-space: nowrap;
  overflow: hidden;
`;

export const GenresBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${pxToRem(4)};

  ${({ theme }) => theme.fontStyles.Body4};
  font-weight: 700;
  letter-spacing: 0;
`;

export const KeywordBox = styled(GenresBox)``;
