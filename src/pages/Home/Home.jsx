import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';
import MovieModal from '@pages/MovieModal/MovieModal';
import ChatBot from '@components/ChatBot/ChatBot';
import { ShuffleIcon } from '@icons/Shuffle';

import { getCurationShuffleData, getEmotionCurationData, getTopTenData } from '@api/home';

import * as S from './Home.styled';

const Home = () => {
  const [username, setUsername] = useState('');
  const [topTenMovieList, setTopTenMovieList] = useState([]);
  const [curationList, setCurationList] = useState([]);

  const [emotionCuration, setEmotionCuration] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleMovieModalOpen = (id) => {
    setSearchParams({ movieId: id });
    console.log('movieId: ', id);
  };

  const [movieModalData, setMovieModalData] = useState({});

  const handleMovieModalData = (movieModalInfo) => setMovieModalData(movieModalInfo);

  // Top 10 영화 불러오기
  useEffect(() => {
    const fetchTopTenMovieList = async () => {
      try {
        const { topTenMovieList, username } = await getTopTenData();
        console.log('Top 10 List: ', topTenMovieList);

        setTopTenMovieList(topTenMovieList);
        setUsername(username);
      } catch (error) {
        console.error('Top 10 List fetch failed: ', error);
      }
    };

    fetchTopTenMovieList();
  }, []);

  // 큐레이션 List fetch
  useEffect(() => {
    const fetchCurationList = async () => {
      try {
        const response = await getCurationShuffleData();
        // console.log('Curation List: ', response.result.shuffled_curations);

        setCurationList(response.result.shuffled_curations);
      } catch (error) {
        console.error('Curation List fetch failed: ', error);
      }
    };

    fetchCurationList();
  }, []);

  // 감정 큐레이션 불러오기
  const fetchEmotionCuration = useCallback(async () => {
    if (selectedEmoji === '') return;

    try {
      const result = await getEmotionCurationData(selectedEmoji);

      setEmotionCuration(result?.result?.curations?.[0] || null);
    } catch (error) {
      console.error('Emoji curation fetch failed: ', error);
    }
  }, [selectedEmoji]);

  useEffect(() => {
    fetchEmotionCuration();
  }, [fetchEmotionCuration]);

  const onClickShuffle = () => {
    const fetchCurationList = async () => {
      try {
        const response = await getCurationShuffleData();
        console.log('Curation List: ', response.result.shuffled_curations);

        setCurationList(response.result.shuffled_curations);
      } catch (error) {
        console.error('Curation List fetch failed: ', error);
      }
    };

    fetchCurationList();
  };

  return (
    <>
      <S.HomeContainer>
        <ChatBot />
        {topTenMovieList.length > 0 && (
          <TopTenList
            movieList={topTenMovieList}
            username={username}
            handleMovieModalOpen={handleMovieModalOpen}
            handleMovieModalData={handleMovieModalData}
          />
        )}

        <S.CurationShuffleContainer onClick={onClickShuffle}>
          <S.CurationShuffleText>큐레이션 셔플하기</S.CurationShuffleText>
          <ShuffleIcon />
        </S.CurationShuffleContainer>
        {emotionCuration.length === 0 ? (
          <BallonSection selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
        ) : (
          <Curation
            curationTitle={emotionCuration.curation_name}
            movieList={emotionCuration.movies}
          />
        )}
        <S.CurationEmojiContainer>
          {emotionCuration.length === 0 ? (
            <BallonSection selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
          ) : (
            <Curation
              curationTitle={emotionCuration.curation_name}
              movieList={emotionCuration.movies}
              handleMovieModalOpen={handleMovieModalOpen}
              handleMovieModalData={handleMovieModalData}
            />
          )}
          {curationList.map((curation, index) => (
            <Curation
              key={curation.curation_id ?? `curation-${index}`}
              curationTitle={curation.curation_name}
              movieList={curation.movies}
            />
          ))}
        </S.CurationEmojiContainer>
      </S.HomeContainer>
      {searchParams.get('movieId') && <MovieModal movieModalData={movieModalData} />}
    </>
  );
};

export default Home;
