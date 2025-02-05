import { useState } from 'react';

import * as S from './Like.styled';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => setIsLiked(!isLiked);

  return <S.HeartIcon onClick={handleLikeClick} $isLiked={isLiked} />;
};

export default Like;
