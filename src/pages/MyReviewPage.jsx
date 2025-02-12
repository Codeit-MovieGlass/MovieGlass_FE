import { PencilIcon, TrashIcon } from "@icons/EditDelete";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

// 수정 불가능한 컴포넌트들 (내부 상태를 사용)
import HalfStarRating from "../components/RatingInput/RatingInput";
import SpoilerToggle from "../components/SpoilerToggle/SpoilerToggle";

const MyReviewPage = () => {
  const navigate = useNavigate();

  // 예시 데이터 (content, spoiler, rating만 사용)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "영화 제목",
      rating: 4.5,
      content: "이 영화는 정말 감동적이었습니다!",
      imageUrl:
        "https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg",
      date: "2025.01.16",
      spoiler: false,
    },
    {
      id: 2,
      title: "영화 제목",
      rating: 3.0,
      content: "나쁘진 않았지만 아쉬운 부분도 있었어요.",
      imageUrl: "https://via.placeholder.com/280x372",
      date: "2025.01.20",
      spoiler: true,
    },
  ]);

  const [sortBy, setSortBy] = useState("별점순");

  // 편집 모드는 댓글 내용만 제어 (별점, 스포일러는 자식 내부 상태로 처리)
  const [isEditing, setIsEditing] = useState({});
  const [editedContent, setEditedContent] = useState({});

  // 편집 중인 별점, 스포일러 컴포넌트의 값을 가져오기 위한 ref 객체
  const ratingRefs = useRef({});
  const spoilerRefs = useRef({});

  const sortedReviews = [...reviews].sort((a, b) =>
    sortBy === "별점순"
      ? b.rating - a.rating
      : new Date(b.date) - new Date(a.date)
  );

  // 리뷰 삭제
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      setReviews((prev) => prev.filter((review) => review.id !== id));
    }
  };

  // 편집 모드 전환 (내용만 임시 저장)
  const handleEdit = (id) => {
    const target = reviews.find((rev) => rev.id === id);
    if (!target) return;
    setIsEditing((prev) => ({ ...prev, [id]: true }));
    setEditedContent((prev) => ({ ...prev, [id]: target.content }));
  };

  // 수정 완료 시, ref로부터 별점과 스포일러 값을 읽어 업데이트
  const handleSubmit = (id) => {
    // 별점 컴포넌트에서 첫 번째 <span>의 텍스트(예:"3.5")를 파싱
    let newRating = 0;
    const ratingContainer = ratingRefs.current[id];
    if (ratingContainer) {
      const spanElements = ratingContainer.querySelectorAll("span");
      if (spanElements.length > 0) {
        newRating = parseFloat(spanElements[0].textContent) || 0;
      }
    }
    // 스포일러 컴포넌트의 전체 텍스트에 "ON"이 포함되어 있으면 true로 판단
    let newSpoiler = false;
    const spoilerContainer = spoilerRefs.current[id];
    if (spoilerContainer) {
      const text = spoilerContainer.innerText;
      newSpoiler = text.includes("ON");
    }

    setReviews((prevReviews) =>
      prevReviews.map((review) => {
        if (review.id !== id) return review;
        return {
          ...review,
          content: editedContent[id] || "",
          rating: newRating,
          spoiler: newSpoiler,
        };
      })
    );
    setIsEditing((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <Container>
      <Wrapper>
        {/* 상단 TopBar */}
        <TopBar>
          <MyPageButton onClick={() => navigate("/mypage")}>
            마이페이지
          </MyPageButton>
        </TopBar>

        {/* 헤더 영역 */}
        <Header>
          <LeftSection>
            <Title>내가 남긴 댓글</Title>
          </LeftSection>
          <RightSection>
            <SortOptions>
              <SortButton
                $active={sortBy === "별점순"}
                onClick={() => setSortBy("별점순")}
              >
                별점순
              </SortButton>
              <SortButton
                $active={sortBy === "최신순"}
                onClick={() => setSortBy("최신순")}
              >
                최신순
              </SortButton>
            </SortOptions>
          </RightSection>
        </Header>

        {/* 리뷰 목록 */}
        <ReviewListContainer>
          {sortedReviews.map((review) => {
            const editing = !!isEditing[review.id];
            return (
              <ReviewItem key={review.id}>
                <Poster src={review.imageUrl} alt={review.title} />
                <ReviewInfo>
                  <ReviewHeader>
                    <ReviewLeft>
                      <ReviewTitle>{review.title}</ReviewTitle>
                      {!editing && (
                        <StarRating>
                          {renderStars(review.rating)}
                          <RatingText>
                            {review.rating.toFixed(1)}/5.0
                          </RatingText>
                        </StarRating>
                      )}
                      {editing && (
                        // HalfStarRating는 내부에서 자체 상태를 관리하므로 prop 전달 없이 감싸고 ref 할당
                        <div ref={(el) => (ratingRefs.current[review.id] = el)}>
                          <HalfStarRating />
                        </div>
                      )}
                    </ReviewLeft>
                    <ReviewRight>
                      {!editing && (
                        <>
                          <ButtonGroup>
                            <EditButton onClick={() => handleEdit(review.id)}>
                              <PencilIcon />
                              수정하기
                            </EditButton>
                            <Divider>|</Divider>
                            <DeleteButton
                              onClick={() => handleDelete(review.id)}
                            >
                              <TrashIcon />
                              삭제하기
                            </DeleteButton>
                          </ButtonGroup>
                          <InfoLine>
                            <SpoilerBadge>
                              {review.spoiler
                                ? "스포일러 있음"
                                : "스포일러 없음"}
                            </SpoilerBadge>
                            <ReviewDate>{review.date}</ReviewDate>
                          </InfoLine>
                        </>
                      )}
                      {editing && (
                        // SpoilerToggle도 감싸서 ref로 값 읽기
                        <InfoLine>
                          <div ref={(el) => (spoilerRefs.current[review.id] = el)}>
                            <SpoilerToggle />
                          </div>
                        </InfoLine>
                      )}
                    </ReviewRight>
                  </ReviewHeader>
                  {!editing && <ReviewContent>{review.content}</ReviewContent>}
                  {editing && (
                    <>
                      <CommentBox
                        value={editedContent[review.id] || ""}
                        onChange={(e) =>
                          setEditedContent((prev) => ({
                            ...prev,
                            [review.id]: e.target.value,
                          }))
                        }
                      />
                      <SubmitButton onClick={() => handleSubmit(review.id)}>
                        수정하기
                      </SubmitButton>
                    </>
                  )}
                </ReviewInfo>
              </ReviewItem>
            );
          })}
        </ReviewListContainer>
      </Wrapper>
    </Container>
  );
};

export default MyReviewPage;

/* 별점 읽기 전용 함수 (텍스트용) */
function renderStars(rating) {
  const filled = Math.floor(rating);
  const half = rating - filled >= 0.5 ? 1 : 0;
  let starString = "";
  for (let i = 1; i <= filled; i++) {
    starString += "★";
  }
  if (half === 1) {
    starString += "☆";
  }
  let remaining = 5 - filled - half;
  for (let i = 1; i <= remaining; i++) {
    starString += "☆";
  }
  return starString;
}

/* ========== 스타일 컴포넌트 ========== */
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1384px;
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

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 1372px;
  height: 29px;
  padding: 0 12px;
  gap: 16px;
`;

const MyPageButton = styled.button`
  width: 104px;
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

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SortOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const SortButton = styled.button`
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

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewItem = styled.div`
  width: 1384px;
  height: 372px;
  display: flex;
  gap: 24px;
  background-color: #1c1c1c;
  border-radius: 10px;


`;

/* 포스터는 고정 크기: width 280px, height 372px */
const Poster = styled.img`
  width: 280px;
  height: 372px;
  border-radius: 5px;
  object-fit: cover;
`;

const ReviewInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ReviewHeader = styled.div`
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

const ReviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ReviewTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #ffd700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const RatingText = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: #bbb;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReviewRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
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

const DeleteButton = styled.button`
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

const Divider = styled.span`
  color: #555;
`;

const InfoLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SpoilerBadge = styled.span`
  font-size: 14px;
  color: #a85aff;
  cursor: default;
`;

const ReviewDate = styled.span`
  font-size: 14px;
  color: #aaa;
`;

const ReviewContent = styled.div`
  width: 1016px;
  height: 77px;
  border-radius: 8px;
  padding: 24px;
  border: 2px solid #965AFF;
  font-size: 15px;
  color: #ddd;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CommentBox = styled.textarea`
  width: 1016px;
  height: 156px;
  border-radius: 8px;
  padding: 24px;
  border: 2px solid #A8A5A8;
  background: #000;
  color: #fff;
  resize: vertical;
  font-size: 14px;

  &::placeholder {
    color: #666;
  }
`;

const SubmitButton = styled.button`
  width: 103px;
  height: 50px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #965AFF;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-end;

  &:hover {
    background-color: #7b68ee;
  }
`;
