const CLIENT_ID = "309716271515-jnv3n265sorbup15bhksj4nndritagon.apps.googleusercontent.com";//클라이언트 ID
const REDIRECT_URI = "http://localhost:3000"; // 리디렉션 URI

// 구글 로그인 
// URL 생성
export const getGoogleLoginUrl = () => {
  return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=openid%20profile%20email`;
};

// Authorization Code로 Access Token 요청
export const fetchAccessToken = async (code) => {
  const TOKEN_URL = "https://oauth2.googleapis.com/token";

  const params = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: "YOUR_GOOGLE_CLIENT_SECRET",
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Access Token");
  }

  return response.json(); // Access Token과 ID Token 반환
};

// Access Token으로 사용자 정보 요청
export const fetchGoogleUserInfo = async (accessToken) => {
  const USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

  const response = await fetch(USERINFO_URL, {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Google User Info");
  }

  return response.json(); // 사용자 정보 반환
};

//카카오 로그인
