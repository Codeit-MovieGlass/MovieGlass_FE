import { useState } from 'react';

import * as S from './Heart.styled';

const Heart = () => {
  const [isLiked, setIsLiked] = useState(true);
  const handleLikeClick = () => setIsLiked(!isLiked);

  return (
    <S.HeartButton>
      <S.HeartIcon onClick={handleLikeClick} $isLiked={isLiked} />
    </S.HeartButton>
  );
};

export default Heart;
