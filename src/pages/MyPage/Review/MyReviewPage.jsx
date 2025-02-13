import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

import RatingInput from '@components/RatingInput/RatingInput';
import Rating from '@components/Rating/Rating';
import SpoilerToggle from '@components/SpoilerToggle/SpoilerToggle';
import { PencilIcon, TrashIcon } from '@icons/EditDelete';
import { HomeIcon } from '@icons/HomeIcon';

import * as S from './MyReviewPage.styled';
import QuitOrDeleteModal from '@components/Modal/Quit/QuitOrDeleteModal';
import ModalWrapper from '@components/Modal/Wrapper/ModalWrapper';

const MyReviewPage = () => {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: '영화 제목',
      rating: 4.5,
      content: '이 영화는 정말 감동적이었습니다!',
      imageUrl: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
      date: '2025.01.16',
      spoiler: false,
    },
    {
      id: 2,
      title: '영화 제목',
      rating: 3.0,
      content: '나쁘진 않았지만 아쉬운 부분도 있었어요.',
      imageUrl: 'https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg',
      date: '2025.01.20',
      spoiler: true,
    },
  ]);

  const [sortBy, setSortBy] = useState('별점순');
  const [isEditing, setIsEditing] = useState({});
  const [editedContent, setEditedContent] = useState({});

  // const [deleteTarget, setDeleteTarget] = useState(null);
  const ratingRefs = useRef({});
  const spoilerRefs = useRef({});

  const sortedReviews = [...reviews].sort((a, b) =>
    sortBy === '별점순' ? b.rating - a.rating : new Date(b.date) - new Date(a.date)
  );

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

      <S.ReviewPageContainer>
        <S.HeaderContainer>
          <S.HeaderTopRow>
            <S.ReviewPageButton onClick={() => navigate('/mypage')}>
              <HomeIcon />
              마이페이지
            </S.ReviewPageButton>
          </S.HeaderTopRow>
          <S.HeaderBottomRow>
            <S.ReviewPageTitle>내가 남긴 댓글</S.ReviewPageTitle>
            <S.ReviewSortOptions>
              <S.ReviewSortButton $active={sortBy === '별점순'} onClick={() => setSortBy('별점순')}>
                별점순
              </S.ReviewSortButton>
              <S.ReviewSortButton $active={sortBy === '최신순'} onClick={() => setSortBy('최신순')}>
                최신순
              </S.ReviewSortButton>
            </S.ReviewSortOptions>
          </S.HeaderBottomRow>
        </S.HeaderContainer>

        <S.ReviewListContainer>
          {sortedReviews.map((review) => {
            const editing = !!isEditing[review.id];
            return (
              <S.ReviewItem key={review.id}>
                <S.Poster src={review.imageUrl} alt={review.title} />
                <S.ReviewInfo>
                  <S.ReviewItemHeader>
                    <S.ReviewLeft>
                      <S.ReviewTitle>{review.title}</S.ReviewTitle>
                      {!editing && (
                        <S.StarRating>
                          <Rating rating={review.rating} />
                          <S.RatingText>{review.rating.toFixed(1)}/5.0</S.RatingText>
                        </S.StarRating>
                      )}
                      {editing && (
                        <div ref={(el) => (ratingRefs.current[review.id] = el)}>
                          <RatingInput rating={review.rating} />
                        </div>
                      )}
                    </S.ReviewLeft>
                    <S.ReviewRight>
                      {!editing && (
                        <>
                          <S.ButtonGroup>
                            <S.EditButton onClick={() => handleEdit(review.id)}>
                              수정하기 <PencilIcon />
                            </S.EditButton>
                            <S.DeleteButton onClick={handleDeleteModalOpen}>
                              삭제하기 <TrashIcon />
                            </S.DeleteButton>
                          </S.ButtonGroup>
                          <S.InfoLine>
                            <S.SpoilerBadge>
                              {review.spoiler ? '스포일러 있음' : '스포일러 없음'}
                            </S.SpoilerBadge>
                            <S.ReviewDate>{review.date}</S.ReviewDate>
                          </S.InfoLine>
                        </>
                      )}
                      {editing && (
                        <S.InfoLine>
                          <div ref={(el) => (spoilerRefs.current[review.id] = el)}>
                            <SpoilerToggle />
                          </div>
                        </S.InfoLine>
                      )}
                    </S.ReviewRight>
                  </S.ReviewItemHeader>
                  {!editing && <S.ReviewContent>{review.content}</S.ReviewContent>}
                  {editing && (
                    <>
                      <S.EditContainer>
                        <S.CommentBox
                          value={editedContent[review.id] || ''}
                          onChange={(e) =>
                            setEditedContent((prev) => ({ ...prev, [review.id]: e.target.value }))
                          }
                        />
                        <S.SubmitButton onClick={() => handleSubmit(review.id)}>
                          수정하기
                        </S.SubmitButton>
                      </S.EditContainer>
                    </>
                  )}
                </S.ReviewInfo>
              </S.ReviewItem>
            );
          })}
        </S.ReviewListContainer>
      </S.ReviewPageContainer>
    </>
  );
};

export default MyReviewPage;
