import { useState, useRef, useEffect } from 'react';

import BackToHomeOrMyPage from '@components/BackToHomeOrMyPage/BackToHomeOrMyPage';
import ReviewSortOption from '@components/ReviewSortOption/ReviewSortOption';
import RatingInput from '@components/RatingInput/RatingInput';
import Rating from '@components/Rating/Rating';
import SpoilerToggle from '@components/SpoilerToggle/SpoilerToggle';
import ModalWrapper from '@components/Modal/Wrapper/ModalWrapper';
import QuitOrDeleteModal from '@components/Modal/Quit/QuitOrDeleteModal';
import { PencilIcon, TrashIcon } from '@icons/EditDelete';

import * as S from './MyReviewPage.styled';
import { getUserReviews } from '@api/mypage';

const MyReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  const [sortOption, setSortOption] = useState('별점순');
  const [isEditing, setIsEditing] = useState({});
  const [editedContent, setEditedContent] = useState({});

  // const [deleteTarget, setDeleteTarget] = useState(null);
  const ratingRefs = useRef({});
  const spoilerRefs = useRef({});

  const sortedReviews = [...reviews].sort((a, b) =>
    sortOption === '별점순' ? b.rating - a.rating : new Date(b.date) - new Date(a.date)
  );

  const handleSortOption = (option) => {
    setSortOption(option);
  };

  // const handleDelete = (id) => {
  //   setDeleteTarget(id);
  //   setIsDeleteModalOpen(true);
  // };

  // const confirmDelete = () => {
  //   setReviews((prev) => prev.filter((review) => review.id !== deleteTarget));
  //   setIsDeleteModalOpen(false);
  // };

  const handleEdit = (id) => {
    const target = reviews.find((review) => review.id === id);
    if (!target) return;
    setIsEditing((prev) => ({ ...prev, [id]: true }));
    setEditedContent((prev) => ({ ...prev, [id]: target.content }));
  };

  const handleSubmit = (id) => {
    let newRating = 0;
    const ratingContainer = ratingRefs.current[id];
    if (ratingContainer) {
      const spanElements = ratingContainer.querySelectorAll('span');
      if (spanElements.length > 0) {
        newRating = parseFloat(spanElements[0].textContent) || 0;
      }
    }
    let newSpoiler = false;
    const spoilerContainer = spoilerRefs.current[id];
    if (spoilerContainer) {
      newSpoiler = spoilerContainer.innerText.includes('ON');
    }

    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id !== id
          ? review
          : { ...review, content: editedContent[id] || '', rating: newRating, spoiler: newSpoiler }
      )
    );
    setIsEditing((prev) => ({ ...prev, [id]: false }));
  };

  const deleteModalRef = useRef(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);
  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deleteModalRef.current && !deleteModalRef.current.contains(e.target)) {
        setIsDeleteModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 내 리뷰 리스트 조회
  useEffect(() => {
    const getReviews = async () => {
      const reviewList = await getUserReviews();
      console.log(reviewList);

      if (reviewList.length > 0) {
        setReviews(reviewList);
      } else {
        setReviews([]);
      }
    };

    getReviews();
  }, []);

  return (
    <>
      {isDeleteModalOpen && (
        <ModalWrapper>
          <QuitOrDeleteModal
            type="삭제"
            topRef={deleteModalRef}
            handleModalClose={handleDeleteModalClose}
          />
        </ModalWrapper>
      )}

      <S.MyReviewPageContainer>
        <S.MyPageRouteSection>
          <BackToHomeOrMyPage type="mypage" />
        </S.MyPageRouteSection>

        <S.MyReviewHeaderSection>
          <S.MyReviewPageTitle>내가 남긴 댓글</S.MyReviewPageTitle>
          <ReviewSortOption sortOption={sortOption} handleSortOption={handleSortOption} />
        </S.MyReviewHeaderSection>
        <S.MainContentDivider />

        {/* Main Section */}
        <S.ReviewListContainer>
          {sortedReviews.map((review) => {
            const editing = !!isEditing[review.id];

            return (
              <S.ReviewListItem key={review.id}>
                <S.Poster src={review.imageUrl} alt={review.title} />

                {/* 리뷰 아이템  */}
                <S.ReviewItemContainer $isEditing={editing}>
                  <S.ReviewItemHeader>
                    {/* 영화 제목 및 평점 */}
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

                    {/* 리뷰 관련 정보 */}
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
                              수정하기 <PencilIcon />
                            </S.EditButton>
                            <S.DeleteButton onClick={handleDeleteModalOpen}>
                              삭제하기 <TrashIcon />
                            </S.DeleteButton>
                          </S.EditDeleteButtonContainer>

                          <S.SpoilerText>
                            {review.spoiler ? '스포일러 있음' : '스포일러 없음'}
                          </S.SpoilerText>
                          <S.ReviewDate>{review.date}</S.ReviewDate>
                        </>
                      )}
                    </S.ReviewInfoSection>
                  </S.ReviewItemHeader>

                  {/* 리뷰 내용 */}
                  {editing ? (
                    <S.CommentEditForm>
                      <S.CommentBox
                        value={editedContent[review.id] || ''}
                        onChange={(e) =>
                          setEditedContent((prev) => ({ ...prev, [review.id]: e.target.value }))
                        }
                      />
                      <S.ModifyButton onClick={() => handleSubmit(review.id)}>
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
