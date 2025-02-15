import { useCallback, useEffect, useState } from 'react';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';

import { getCurationShuffleData, getEmotionCurationData, getTopTenData } from '@api/home';

import * as S from './Home.styled';
import ChatBot from '@components/ChatBot/ChatBot';

const Home = () => {
  const [username, setUsername] = useState('');
  const [topTenMovieList, setTopTenMovieList] = useState([]);
  const [curationList, setCurationList] = useState([]);

  const [emotioncuration, setEmotionCuration] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');

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
        console.log('Curation List: ', response.result.shuffled_curations);

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

  return (
    <S.HomeContainer>
      <ChatBot />
      {topTenMovieList.length > 0 && <TopTenList movieList={topTenMovieList} username={username} />}
      <S.CurationEmojiContainer>
        {emotioncuration.length === 0 ? (
          <BallonSection selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
        ) : (
          <Curation
            curationTitle={emotioncuration.curation_name}
            movieList={emotioncuration.movies}
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
  );
};

export default Home;
