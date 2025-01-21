import styled from 'styled-components';

export const MovieIntroBoxContainer = styled.div`
  width: 320px;
  height: 160px;
  padding: 20px;

  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

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
  gap: 8px;

  white-space: nowrap;
  overflow: hidden;
`;

export const GenresBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.fontStyles.Body4};
  font-weight: 700;
  letter-spacing: 0;
`;

export const KeywordBox = styled(GenresBox)``;
