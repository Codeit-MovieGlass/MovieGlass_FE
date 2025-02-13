import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

// 전체 컨테이너
export const MyLikePageContainer = styled.div`
  width: 100%;
  padding: ${pxToRem(99)} ${pxToRem(268)} ${pxToRem(199)};

  display: flex;
  flex-direction: column;
`;

/* ──────────────────────────────────────────
   1) 상단 영역(마이페이지 링크)
   ────────────────────────────────────────── */
export const MyPageRouteSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-right: ${pxToRem(12)};
  margin-bottom: ${pxToRem(36)};

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/* ──────────────────────────────────────────
   2) 상단 헤더(제목 + 검색창)
   ────────────────────────────────────────── */
export const MyLikePageHeader = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: ${pxToRem(32)};
  padding: 0 ${pxToRem(12)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(64)};
`;

export const PageTitle = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header3}
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

// Search Form
export const SearchForm = styled.form`
  width: fit-content;
  height: fit-content;
  padding: ${pxToRem(14)} ${pxToRem(20)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(16)};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  background-color: transparent;
`;

// 검색 인풋
export const SearchInput = styled.input`
  width: ${pxToRem(360)};
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body5}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
  }
`;

// 검색 버튼
export const SearchButton = styled.button`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContentDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: ${pxToRem(24)};

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};
`;

/* ──────────────────────────────────────────
   3) 카드 리스트(그리드)
   ────────────────────────────────────────── */
export const LikedMovieList = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(24)};
`;

export const LikedMovieListItem = styled.li`
  flex: 1;

  width: fit-content;
  height: fit-content;
`;

export const LikedMovieCard = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${pxToRem(12)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};
`;

export const PosterImageContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: fit-content;

  border-radius: 2px;
`;

export const LikeButtonContainer = styled.div`
  position: absolute;
  bottom: 6%;
  right: 6%;

  width: fit-content;
  height: fit-content;
`;

export const LikedMovieInfos = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(8)};
`;

export const LikedMovieTitle = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};

  white-space: nowrap;
`;

export const LikeButtonWrapper = styled.div`
  position: absolute;
  bottom: ${pxToRem(16)};
  right: ${pxToRem(16)};

  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
`;
