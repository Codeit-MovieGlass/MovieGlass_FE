import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import TopTenList from '@components/TopTenList/TopTenList';
import BallonSection from '@components/Balloon/BallonSection';
import Curation from '@components/Curation/Curation';

import { getCurationShuffleData, getEmotionCurationData, getTopTenData } from '@api/home';

import * as S from './Home.styled';

const Home = () => {
  // const [TopTenMovieList, setTopTenMovieList] = useState(null);
  const [curationList, setCurationList] = useState([]);
  const [emotioncuration, setEmotionCuration] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [topTenData, setTopTenData] = useState([]);

  // Top 10 영화 불러오기
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTopTenData();
        console.log(response.result.top10Data.top10Movies);

        setTopTenData(response.result.top10Data.top10Movies);
      } catch (error) {
        console.error('Top 10 List fetch failed: ', error);
      }
    };
    getData();
  }, []);

  // 큐레이션 셔플
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCurationShuffleData();
        setCurationList(response.result.shuffled_curations);
      } catch (error) {
        console.error('Curation shuffle fetch failed: ', error);
      }
    };
    getData();
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
      <>
        {topTenData.length > 0 && <TopTenList movieList={topTenData} />}
        <S.CurationWrapper>
          {selectedEmoji === '' ? (
            <BallonSection selectedEmoji={selectedEmoji} setSelectedEmoji={setSelectedEmoji} />
          ) : (
            <Curation
              curationTitle={emotioncuration.curation_name}
              movieList={emotioncuration.movies}
            />
          )}
          {curationList.map((curation) => (
            <Curation
              key={curation.curation_id}
              curationTitle={curation.curation_name}
              movieList={curation.movies}
            />
          ))}
        </S.CurationWrapper>
      </>
    </S.HomeContainer>
  );
};

Home.propTypes = { keyword: PropTypes.string.isRequired };

export default Home;
