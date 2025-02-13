import { useState, useRef, useEffect } from 'react';

import BackToHomeOrMyPage from '@components/BackToHomeOrMyPage/BackToHomeOrMyPage';
import RatingInput from '@components/RatingInput/RatingInput';
import Rating from '@components/Rating/Rating';
import SpoilerToggle from '@components/SpoilerToggle/SpoilerToggle';
import ModalWrapper from '@components/Modal/Wrapper/ModalWrapper';
import QuitOrDeleteModal from '@components/Modal/Quit/QuitOrDeleteModal';
import { PencilIconGray, TrashIconGray } from '@icons/EditDelete';

import * as S from './MyReviewPage.styled';

// API 함수 임포트
import { getUserReviews, createOrUpdateReview, deleteReview } from '../../../api/reviewApi';

const MyReviewPage = () => {
  const [reviews, setReviews] = useState([]); // 초기 데이터를 빈 배열로 변경
  const [sortBy, setSortBy] = useState('별점순');
  const [isEditing, setIsEditing] = useState({});
  const [editedContent, setEditedContent] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const ratingRefs = useRef({});
  const spoilerRefs = useRef({});
  const deleteModalRef = useRef(null);

  // API를 통해 리뷰 데이터를 불러옴
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getUserReviews();
        setReviews(data);
      } catch (error) {
        console.error('리뷰 데이터 로드 실패:', error);
      }
    };
    fetchReviews();
  }, []);

  const sortedReviews = [...reviews].sort((a, b) =>
    sortBy === '별점순' ? b.rating - a.rating : new Date(b.date) - new Date(a.date)
  );

  const handleEdit = (id) => {
    const target = reviews.find((review) => review.id === id);
    if (!target) return;
    setIsEditing((prev) => ({ ...prev, [id]: true }));
    setEditedContent((prev) => ({ ...prev, [id]: target.content }));
  };

  const handleSubmit = async (review) => {
    const { id, movieId } = review;
    let newRating = review.rating;
    const ratingContainer = ratingRefs.current[id];
    if (ratingContainer) {
      const spanElements = ratingContainer.querySelectorAll('span');
      if (spanElements.length > 0) {
        newRating = parseFloat(spanElements[0].textContent) || review.rating;
      }
    }
    let newSpoiler = review.spoiler;
    const spoilerContainer = spoilerRefs.current[id];
    if (spoilerContainer) {
      newSpoiler = spoilerContainer.innerText.includes('ON');
    }
    const updatedData = {
      rating: newRating,
      review_comment: editedContent[id] || review.content,
      // 필요 시 view_count 등 추가 필드 포함
    };
    try {
      await createOrUpdateReview(movieId, updatedData);
      setReviews((prevReviews) =>
        prevReviews.map((r) =>
          r.id !== id ? r : { ...r, ...updatedData }
        )
      );
      setIsEditing((prev) => ({ ...prev, [id]: false }));
    } catch (error) {
      console.error('리뷰 업데이트 실패:', error);
    }
  };

  const handleDeleteModalOpen = (review) => {
    setDeleteTarget(review);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const confirmDelete = async () => {
    try {
      const { id, movieId } = deleteTarget;
      await deleteReview(movieId, id);
      setReviews((prev) => prev.filter((review) => review.id !== id));
    } catch (error) {
      console.error('리뷰 삭제 실패:', error);
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  // 클릭 외부 감지하여 삭제 모달 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deleteModalRef.current && !deleteModalRef.current.contains(e.target)) {
        setIsDeleteModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {isDeleteModalOpen && (
        <ModalWrapper>
          <QuitOrDeleteModal
            type="삭제"
            topRef={deleteModalRef}
            handleModalClose={handleDeleteModalClose}
            onConfirm={confirmDelete}
          />
        </ModalWrapper>
      )}

      <S.MyReviewPageContainer>
        <S.MyPageRouteSection>
          <BackToHomeOrMyPage type="mypage" />
        </S.MyPageRouteSection>

        <S.MyReviewHeaderSection>
          <S.MyReviewPageTitle>내가 남긴 댓글</S.MyReviewPageTitle>
          <S.ReviewSortOptionList>
            <S.ReviewSortOptionItem>
              <S.ReviewSortOptionButton
                $isActive={sortBy === '별점순'}
                onClick={() => setSortBy('별점순')}
              >
                별점순
              </S.ReviewSortOptionButton>
            </S.ReviewSortOptionItem>
            <S.ReviewSortOptionItem>
              <S.ReviewSortOptionButton
                $isActive={sortBy === '최신순'}
                onClick={() => setSortBy('최신순')}
              >
                최신순
              </S.ReviewSortOptionButton>
            </S.ReviewSortOptionItem>
          </S.ReviewSortOptionList>
        </S.MyReviewHeaderSection>
        <S.MainContentDivider />

        <S.ReviewListContainer>
          {sortedReviews.map((review) => {
            const editing = !!isEditing[review.id];
            return (
              <S.ReviewListItem key={review.id}>
                <S.Poster src={review.imageUrl} alt={review.title} />
                <S.ReviewItemContainer $isEditing={editing}>
                  <S.ReviewItemHeader>
                    <S.RatingMovieTitleContainer $isEditing={editing}>
                      <S.ReviewTitle>{review.title}</S.ReviewTitle>
                      {editing ? (
                        <div ref={(el) => (ratingRefs.current[review.id] = el)}>
                          <RatingInput rating={review.rating} />
                        </div>
                      ) : (
                        <S.RatingContainer>
                          <Rating rating={review.rating} />
                          <S.RatingText>
                            {review.rating.toFixed(1)}
                            <span className="total-rating">/5.0</span>
                          </S.RatingText>
                        </S.RatingContainer>
                      )}
                    </S.RatingMovieTitleContainer>

                    <S.ReviewInfoSection>
                      {editing ? (
                        <S.InfoLine>
                          <div ref={(el) => (spoilerRefs.current[review.id] = el)}>
                            <SpoilerToggle />
                          </div>
                        </S.InfoLine>
                      ) : (
                        <>
                          <S.EditDeleteButtonContainer>
                            <S.EditButton onClick={() => handleEdit(review.id)}>
                              수정하기 <PencilIconGray />
                            </S.EditButton>
                            <S.DeleteButton onClick={() => handleDeleteModalOpen(review)}>
                              삭제하기 <TrashIconGray />
                            </S.DeleteButton>
                          </S.EditDeleteButtonContainer>
                          <S.InfoLine>
                            <S.SpoilerText>
                              {review.spoiler ? '스포일러 있음' : '스포일러 없음'}
                            </S.SpoilerText>
                            <S.ReviewDate>{review.date}</S.ReviewDate>
                          </S.InfoLine>
                        </>
                      )}
                    </S.ReviewInfoSection>
                  </S.ReviewItemHeader>
                  {editing ? (
                    <S.CommentEditForm>
                      <S.CommentBox
                        value={editedContent[review.id] || ''}
                        onChange={(e) =>
                          setEditedContent((prev) => ({ ...prev, [review.id]: e.target.value }))
                        }
                      />
                      <S.ModifyButton onClick={() => handleSubmit(review)}>
                        수정하기
                      </S.ModifyButton>
                    </S.CommentEditForm>
                  ) : (
                    <S.ReviewContent>{review.content}</S.ReviewContent>
                  )}
                </S.ReviewItemContainer>
              </S.ReviewListItem>
            );
          })}
        </S.ReviewListContainer>
      </S.MyReviewPageContainer>
    </>
  );
};

export default MyReviewPage;
