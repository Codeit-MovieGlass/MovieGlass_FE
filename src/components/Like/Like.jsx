import { useState } from 'react';

import * as S from './Like.styled';

const Like = () => {
  const [isLiked, setIsLiked] = useState(true)

  const handleLikeClick = () => setIsLiked(!isLiked);

  return <S.HeartIcon onClick={handleLikeClick} $isLiked={isLiked} />;
};

export default Like;
