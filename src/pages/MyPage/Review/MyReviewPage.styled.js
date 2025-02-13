import styled from 'styled-components';

/* 전체 페이지 Wrapper */
export const ReviewPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
`;

/* 내부 Container – ReviewPageContainer는 전체 페이지 폭(예: 1384px)으로 유지 */
export const ReviewPageContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 20px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    width: 95%;
    gap: 20px;
    padding: 10px 0 30px;
  }
`;

/* 공통 컨테이너: 헤더와 리뷰 리스트 모두 1016px로 맞춤 */
export const ContentWrapper = styled.div`
  width: 1016px;
  margin: 0 auto;
`;

/* 헤더 영역 컨테이너: 두 행으로 구성 */
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 첫 번째 행: (예: 필요하다면 여기에 여백 추가) */
export const HeaderTopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

/* 두 번째 행: 왼쪽에 제목, 오른쪽에 정렬 옵션 */
export const HeaderBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

/* 제목 */
export const ReviewPageTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

/* 정렬 옵션 영역 */
export const ReviewSortOptions = styled.div`
  display: flex;
  gap: 20px;
`;

/* 정렬 버튼 */
export const ReviewSortButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  border-bottom: 2px solid transparent;
  ${({ $active }) =>
    $active &&
    `
    color: #965AFF;
    font-weight: bold;
    border-bottom: 2px solid #965AFF;
  `}
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/* 마이페이지 버튼 */
export const ReviewPageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 29px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #d2d1d2;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #fff;
  }
`;

/* 이하 기존 리뷰 아이템 관련 스타일은 그대로 유지합니다. */

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewItem = styled.div`
  width: 1340px;
  height: 372px;
  display: flex;
  gap: 24px;
  border-radius: 10px;
`;

export const Poster = styled.img`
  width: 280px;
  height: 372px;
  border-radius: 5px;
`;

export const ReviewInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewItemHeader = styled.div`
  width: 1016px;
  height: 127px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    height: auto;
  }
`;

export const ReviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #ffd700;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const RatingText = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: #bbb;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ReviewRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 14px;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: #a8a5a8;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #a8a5a8;
  cursor: pointer;
  font-size: 14px;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: #f33;
  }
`;

export const Divider = styled.span`
  color: #555;
`;

export const InfoLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;

export const SpoilerBadge = styled.span`
  font-size: 14px;
  color: #a85aff;
  cursor: default;
`;

export const ReviewDate = styled.span`
  font-size: 14px;
  color: #aaa;
`;

export const ReviewContent = styled.div`
  width: 1016px;
  height: 77px;
  border-radius: 8px;
  padding: 24px;
  border: 2px solid #965aff;
  font-size: 15px;
  color: #ddd;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CommentBox = styled.textarea`
  width: 1016px;
  height: 156px;
  border-radius: 8px;
  padding: 24px;
  border: 2px solid #a8a5a8;
  background: #000;
  color: #fff;
  resize: vertical;
  font-size: 14px;
  &::placeholder {
    color: #666;
  }
`;

export const SubmitButton = styled.button`
  width: 103px;
  height: 50px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #965aff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-end;
  &:hover {
    background-color: #7b68ee;
  }
`;
export const EditContainer = styled.div`
  width: 1016px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
