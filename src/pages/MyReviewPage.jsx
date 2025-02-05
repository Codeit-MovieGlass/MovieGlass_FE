import { PencilIcon, TrashIcon } from "@icons/EditDelete";
import { useState, useEffect } from "react";
import styled from "styled-components";

const MyReviewPage = () => {
  // 임시 데이터 하나를 초기 상태에 추가 (확인용)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "테스트 영화 제목",
      rating: 5.0,
      content: "이것은 임시 데이터입니다. 확인용으로 작성된 리뷰입니다.",
      imageUrl: "https://via.placeholder.com/200",
    },
  ]);

  // ✅ 리뷰 데이터를 백엔드에서 불러오기
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews", {
          credentials: "include", // 쿠키 기반 인증 사용 시
        });
        if (response.ok) {
          const data = await response.json();
          // 백엔드에서 가져온 데이터가 있으면 임시 데이터를 대체합니다.
          setReviews(data);
        } else {
          console.error("리뷰 데이터를 불러오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("리뷰 데이터를 불러오는 중 오류 발생:", error);
      }
    }
    fetchReviews();
  }, []);

  // ✅ 리뷰 삭제 기능 (백엔드 연동)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        // 삭제 성공 시 state 업데이트
        setReviews((prev) => prev.filter((review) => review.id !== id));
      } else {
        console.error("리뷰 삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("리뷰 삭제 중 오류 발생:", error);
    }
  };

  // ✅ 리뷰 수정 기능 (추후 수정 폼이나 페이지 연동)
  const handleEdit = (id) => {
    alert(`리뷰 수정 기능: ID ${id}`);
    // 추후: 수정 폼을 띄우거나 수정 페이지로 이동하는 로직 추가
  };

  return (
    <Container>
      <Title>내가 남긴 리뷰</Title>

      <ReviewListContainer>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            {/* 영화 포스터 */}
            <Poster src={review.imageUrl} alt={review.title} />

            {/* 리뷰 정보 */}
            <ReviewContent>
              <ReviewTitle>{review.title}</ReviewTitle>
              <RatingBox>
                <RatingStars>⭐ {review.rating}/5.0</RatingStars>
              </RatingBox>
              <ReviewText>{review.content}</ReviewText>
            </ReviewContent>

            {/* 수정 & 삭제 버튼 */}
            <ActionButtons>
              <EditButton onClick={() => handleEdit(review.id)}>
                <PencilIcon />
              </EditButton>
              <DeleteButton onClick={() => handleDelete(review.id)}>
                <TrashIcon />
              </DeleteButton>
            </ActionButtons>
          </ReviewItem>
        ))}
      </ReviewListContainer>
    </Container>
  );
};

export default MyReviewPage;

/* ✅ 반응형 & 박스 초과 방지 */
const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

/* ✅ 리뷰 컨테이너 박스 */
const ReviewItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1118px;
  max-width: 95%; /* ✅ 화면이 줄어들 때 자동으로 조절 */
  height: auto; /* ✅ 높이를 자동 조절 */
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-sizing: border-box;
  flex-wrap: wrap; /* ✅ 줄 바꿈 허용 */

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 20px;
  }
`;

/* ✅ 포스터 */
const Poster = styled.img`
  width: 198.23px;
  height: 276.35px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 150px;
    height: auto;
  }
`;

/* ✅ 리뷰 정보 */
const ReviewContent = styled.div`
  flex: 1;
  margin-left: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-wrap: break-word; /* ✅ 줄 바꿈 적용 */
`;

const ReviewTitle = styled.p`
  width: 100%;
  max-width: 158px;
  font-size: 18px;
  font-weight: bold;
`;

/* ✅ 별점 */
const RatingBox = styled.div`
  width: 100%;
  max-width: 413.67px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #ffd700;
`;

const RatingStars = styled.p`
  font-size: 20px;
  color: #ffd700;
`;

/* ✅ 리뷰 텍스트 */
const ReviewText = styled.p`
  width: 100%;
  max-width: 798.81px; /* ✅ 최대 너비 설정 */
  height: auto; /* ✅ 자동 높이 조정 */
  max-height: 135.24px; /* ✅ 최대 높이 설정 */
  font-size: 14px;
  color: #444;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 1.68px;
  
  word-wrap: break-word; /* ✅ 긴 텍스트 줄바꿈 */
  overflow-wrap: break-word;
  overflow-y: auto; /* ✅ 내용이 많으면 스크롤 추가 */

  @media (max-width: 1200px) {
    max-width: 95%;
  }

  @media (max-width: 800px) {
    max-width: 90%;
    font-size: 12px;
  }
`;

/* ✅ 수정/삭제 버튼 */
const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const EditButton = styled.button`
  width: 47.04px;
  height: 47.04px;
  background: none;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 40.32px;
  height: 40.32px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;
