import PropTypes from 'prop-types';

import Star from './Star';

import * as S from './Rating.styled';

const Rating = ({ rating }) => {
  const ratingSize = 5;

  return (
    <S.RatingContainer>
      {Array.from({ length: ratingSize }).map((_, index) => {
        let fillPercentage = 0;
        const fillCriteria = rating - (index + 1);

        if (fillCriteria >= 0) {
          fillPercentage = 100;
        } else if (Math.abs(fillCriteria) < 1) {
          fillPercentage = (1 - Math.abs(fillCriteria)) * 100;
        } else {
          fillPercentage = 0;
        }

        return <Star key={index} fillPercentage={fillPercentage} />;
      })}
    </S.RatingContainer>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
