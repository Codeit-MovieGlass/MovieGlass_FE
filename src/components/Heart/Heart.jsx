import PropTypes from 'prop-types';
import { useState } from 'react';

import * as S from './Heart.styled';

const Heart = ({ initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const handleLikeClick = () => setIsLiked(!isLiked);

  return (
    <S.HeartButton>
      <S.HeartIcon onClick={handleLikeClick} $isLiked={isLiked} />
    </S.HeartButton>
  );
};

Heart.propTypes = {
  initialLiked: PropTypes.bool.isRequired,
};

export default Heart;
