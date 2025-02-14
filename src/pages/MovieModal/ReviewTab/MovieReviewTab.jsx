import { useState } from 'react';

import WriteReview from '@components/Review/WriteReview/WriteReview';
import ReviewSortOption from '@components/ReviewSortOption/ReviewSortOption';
import SpoilerToggle from '@components/SpoilerToggle/SpoilerToggle';
import Review from '@components/Review/Review';

import * as S from './MovieReviewTab.styled';

const reviewDummyData = [
  {
    username: '칠가이',
    userId: 'ChillGuy_01',
    date: '2025.01.16',
    rating: 3.5,
    view: 5,
    spoiler: false,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    username: '김철흥',
    userId: 'ChillGuy_01',
    date: '2025.01.16',
    rating: 5.0,
    view: 2,
    spoiler: true,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    username: '음바페',
    userId: 'ChillGuy_01',
    date: '2025.01.16',
    rating: 4.0,
    view: 3,
    spoiler: false,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    username: '발베르데',
    userId: 'ChillGuy_01',
    date: '2025.01.16',
    rating: 2.5,
    view: 1,
    spoiler: true,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const MovieReviewTab = () => {
  const myUserName = '칠가이';

  const [sortOption, setSortOption] = useState('별점순');

  const handleSortOption = (option) => {
    setSortOption(option);
  };

  // 현재 로그인된 유저가 작성한 리뷰 찾기
  const myReview = reviewDummyData.find((review) => review.username === myUserName) ?? null;

  return (
    <S.MovieReviewTabContainer>
      <S.ReviewWriteSection>
        {myReview ? <Review myReview={true} reviewInfos={myReview} /> : <WriteReview />}
      </S.ReviewWriteSection>
      <S.ReviewSortOptionSection>
        <ReviewSortOption sortOption={sortOption} handleSortOption={handleSortOption} />
        <SpoilerToggle forRead={true} />
      </S.ReviewSortOptionSection>

      <S.ReviewListSection>
        <S.ReviewList>
          <S.ReviewListItem>
            {reviewDummyData.map((review, index) => (
              <Review key={index} reviewInfos={review} />
            ))}
          </S.ReviewListItem>
        </S.ReviewList>
      </S.ReviewListSection>
    </S.MovieReviewTabContainer>
  );
};

export default MovieReviewTab;
