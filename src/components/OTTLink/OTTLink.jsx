import * as S from './OTTLink.styled';

const OTTLink = () => {
  const ottServices = ['netflix', 'disneyplus', 'watcha', 'tving', 'coupangplay'];

  return (
    <S.OTTLinkContainer>
      <S.OTTLinkTitle>Where to Watch</S.OTTLinkTitle>
      <S.OTTIconContainer>
        {ottServices.slice(0, 3).map((ott, index) => (
          <S.OTTLinkIcon key={index} src={`/OTT/${ott}.png`} alt={ott} />
        ))}
        {ottServices.length > 3 && <S.MoreOTTIcon src="/OTT/moreOtt.svg" alt="moreOtt" />}
      </S.OTTIconContainer>
    </S.OTTLinkContainer>
  );
};

export default OTTLink;
