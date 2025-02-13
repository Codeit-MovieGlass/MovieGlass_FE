import Rating from '@components/Rating/Rating';
import Heart from '@components/Heart/Heart';
import ViewCount from '@components/ViewCount/ViewCount';

import * as S from './MovieModal.styled';
import OTTLink from '@components/OTTLink/OTTLink';

const MovieModal = () => {
  const movieInfos = {
    title: '탑건: 매버릭',
    rating: 4.5,
    like: true,
    viewCount: 1000,
  };

  return (
    <S.MovieModalContainer>
      <S.MovieTrailerSection>
        <S.MovieTrailerImage
          src="https://i.pinimg.com/736x/b3/10/43/b31043d69ad59d096d17a3b6652a387f.jpg"
          alt="Movie Trailer"
        />
      </S.MovieTrailerSection>
      <S.MetaDataSection>
        {/* 평점, 좋아요, 조회수 */}
        <S.RatingLikeViewCountContainer>
          <S.RatingContainer>
            <Rating rating={movieInfos.rating} />
            <S.RatingText>
              {movieInfos.rating}
              <span className="total-rating"> / 5.0</span>
            </S.RatingText>
          </S.RatingContainer>

          <S.LikeViewCountContainer>
            <Heart initialLiked={movieInfos.like} />
            <ViewCount />
          </S.LikeViewCountContainer>
        </S.RatingLikeViewCountContainer>

        {/* OTT Link */}
        <OTTLink />
      </S.MetaDataSection>
    </S.MovieModalContainer>
  );
};

export default MovieModal;
