import PropTypes from 'prop-types';

import * as S from './ReviewSortOption.styled';

const ReviewSortOption = ({ sortOption, handleSortOption }) => {
  return (
    <S.ReviewSortOptionList>
      <S.ReviewSortOptionItem>
        <S.ReviewSortOptionButton
          $isActive={sortOption === '별점순'}
          onClick={() => handleSortOption('별점순')}
        >
          별점순
        </S.ReviewSortOptionButton>
      </S.ReviewSortOptionItem>

      <S.ReviewSortOptionItem>
        <S.ReviewSortOptionButton
          $isActive={sortOption === '최신순'}
          onClick={() => handleSortOption('최신순')}
        >
          최신순
        </S.ReviewSortOptionButton>
      </S.ReviewSortOptionItem>
    </S.ReviewSortOptionList>
  );
};

ReviewSortOption.propTypes = {
  sortOption: PropTypes.string.isRequired,
  handleSortOption: PropTypes.func.isRequired,
};

export default ReviewSortOption;
