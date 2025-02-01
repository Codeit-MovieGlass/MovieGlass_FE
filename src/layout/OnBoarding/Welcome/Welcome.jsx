import * as L from '@icons/Logo';

import * as S from './Welcome.styled';

const Welcome = () => {
  return (
    <S.WelcomeSection>
      <L.OnBoardingLogoSymbol />
      <L.OnBoardingLogoTypo />
      <S.WelcomeText>
        <span>기분에 따라, 날씨에 따라.</span>
        <span>나만을 위한 영화 추천 사이트, 무비글라스.</span>
        <span>영화, 더 이상 고민하지 말고 무비글라스에서 마주하세요.</span>
      </S.WelcomeText>
    </S.WelcomeSection>
  );
};

export default Welcome;
