import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { Link } from 'react-router';

// 전체 컨테이너
export const CollectionContainer = styled.div`
  width: 100%;
  padding: ${pxToRem(80)} ${pxToRem(100)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
`;

/* ──────────────────────────────────────────
   1) 상단 영역(마이페이지 링크)
   ────────────────────────────────────────── */
export const TopBar = styled.div`
  /* 동일한 1384px 폭, 가운데 정렬 */
  width: ${pxToRem(1384)};
  margin: 0 auto;

  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-items: center;
`;

export const MypageLink = styled(Link)`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(28.8)};
  letter-spacing: 0%;
  color: #D2D1D2;
  width: 104;
height: 29;

`;

/* ──────────────────────────────────────────
   2) 상단 헤더(제목 + 검색창)
   ────────────────────────────────────────── */
export const CollectionHeader = styled.div`
  /* TopBar와 똑같이 1384px, 가운데 정렬 */
  width: ${pxToRem(1384)};
  height: ${pxToRem(52)};
  margin: 0 auto ${pxToRem(32)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pxToRem(12)};
`;

export const PageTitle = styled.h2`
  width: ${pxToRem(286)};
  height: ${pxToRem(43)};
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(36)};
  line-height: ${pxToRem(43.2)};
  letter-spacing: 2%;
  color: ${({ theme }) => theme.colors.MG_Grayscale.White};
`;

// 검색창 래퍼
export const SearchBox = styled.div`
  width: ${pxToRem(556)};
  height: ${pxToRem(52)};
  padding: ${pxToRem(16)} ${pxToRem(20)};
  gap: ${pxToRem(16)};
  border-radius: ${pxToRem(6)};
  border: ${pxToRem(1)} solid #f5f4f5;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

// 검색 인풋
export const SearchInput = styled.input`
  width: ${pxToRem(480)};
  height: ${pxToRem(19)};
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(19.2)};
  letter-spacing: 3%;
  background: transparent;
  color: #a8a5a8;
  outline: none;
  border: none;
`;

// 검색 버튼
export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

/* ──────────────────────────────────────────
   3) 카드 리스트(그리드)
   ────────────────────────────────────────── */
export const CardGrid = styled.div`
  width: ${pxToRem(1384)};
  margin: 0 auto;
  display: grid;
  gap: ${pxToRem(24)};
  grid-template-columns: repeat(5, ${pxToRem(244)});
`;

export const Card = styled.div`
  width: ${pxToRem(244)};
  height: ${pxToRem(409)};
  padding: ${pxToRem(12)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  align-items: center;
`;

export const PosterContainer = styled.div`
  position: relative;
  width: ${pxToRem(220)};
  height: ${pxToRem(292)};
  border-radius: ${pxToRem(8)};
  margin-bottom: ${pxToRem(12)};
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LikeButtonWrapper = styled.div`
  position: absolute;
  bottom: ${pxToRem(16)};
  right: ${pxToRem(16)};
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  display: flex;
`;

export const MovieInfo = styled.div`
  width: ${pxToRem(196)};
  height: ${pxToRem(73)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  align-items: center;
`;

export const MovieTitle = styled.p`
  width: ${pxToRem(196)};
  height: ${pxToRem(29)};
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(28.8)};
  letter-spacing: 0%;
  text-align: center;
  margin: 0;
`;

export const MovieRating = styled.div`
  width: ${pxToRem(196)};
  height: ${pxToRem(36)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
