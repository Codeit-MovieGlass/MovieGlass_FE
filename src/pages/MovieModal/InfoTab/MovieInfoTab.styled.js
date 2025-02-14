import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';

// 영화 정보 표시 영역
export const MovieInfoSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(32)} ${pxToRem(64)} ${pxToRem(64)};

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(48)};
`;

// 영화 제목, 러닝타임, 개봉일 정보
export const MovieTitleInfoSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MovieTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Header3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const MovieRunningTimeReleaseDateContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(8)};
`;

export const MovieRunningTime = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

export const MovieReleaseDate = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
`;

// 출연진, 장르, 등급, 키워드
export const CastGenreSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CastContainer = styled.div`
  width: 40%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(28)};
`;

const castSynopsisTitle = css`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};

  white-space: nowrap;
`;

export const CastTitle = styled.span`
  ${castSynopsisTitle}
`;

export const CastActors = styled.span`
  width: 100%;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2}
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

// 관람 등급, 장르, 키워드
export const AgeRatingGenreContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(28)};
`;

export const AgeRatingIcon = styled.img`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
`;

export const GenreKeywordContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(8)};
`;

export const GenreKeywordList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
`;

export const GenreKeywordItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

const genreKeywordStyles = css`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Signature.Light1};

  white-space: nowrap;
`;

export const GenreInfo = styled.span`
  ${genreKeywordStyles}
`;

export const KeywordInfo = styled.span`
  ${genreKeywordStyles}
`;

// 영화 줄거리
export const SynopsisSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(28)};
`;

export const SynopsisTitle = styled.span`
  ${castSynopsisTitle}
`;

export const SynopsisContent = styled.p`
  width: 100%;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;
