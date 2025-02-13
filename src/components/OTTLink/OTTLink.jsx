import * as S from './OTTLink.styled';

const OTTLink = () => {
  // 추후 API Response로 받아서 사용
  const ottServices = ['netflix', 'disneyplus', 'watcha', 'wavve', 'tving', 'coupangplay'];

  // // 더보기 모달 내 OTT 리스트 이름 변환
  // const transformedOTTList = {
  //   netflix: 'Netflix',
  //   disneyplus: 'Disney+',
  //   watcha: 'Watcha',
  //   tving: 'TVING',
  //   coupangplay: '쿠팡플레이',
  // };

  return (
    <S.OTTLinkContainer>
      <S.OTTLinkTitle>OTT Link</S.OTTLinkTitle>
      <S.OTTIconList>
        {ottServices.map((ott, index) => (
          <S.OTTIconListItem key={index}>
            <S.OTTLink href="#" target="_blank" rel="noreferrer">
              <S.OTTLinkIcon src={`/OTT/${ott}.png`} alt={ott} />
            </S.OTTLink>
          </S.OTTIconListItem>
        ))}
      </S.OTTIconList>
    </S.OTTLinkContainer>
  );
};

export default OTTLink;
