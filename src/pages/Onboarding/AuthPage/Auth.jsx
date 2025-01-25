import React, {useState,useEffect} from  "react";
import *as C from "./Auth.styled"
import { getGoogleLoginUrl, fetchAccessToken, fetchGoogleUserInfo } from "./SocialLogin";
/*나중에 해야 할 일
 로그인, 소셜 로그인, 회원가입 백엔드와 연동 로직
 이메일, 닉네임 중복검사? 
*/ 

/* 로그인 페이지, 회원가입 페이지 공통 부분*/
function Lay({children}){
    return(    
    <C.Container>
        {/* 로고와 브랜드 설명 */}
        <C.LogoSection>
          <C.Logo/>
          <C.LogoTypo/>
          <C.Explain>
            '무비글라스'는 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
          </C.Explain>
        </C.LogoSection>
        {children}
    </C.Container>
    )
}
/* 로그인 부분 */
function LoginPage() {
    // 사이트 자체 로그인 데이터 
    const [formData, setFormData] = useState({
        email:"", password:""
    });
    const [erroMessage, setErrorMessage] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    //폼 데이터 변경 핸들러
    const handleChange =(e)=>{
        const {name, value} =e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    //임시 로그인 로직 추후에 구현
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("폼 데이터", formData)
    }

    //구글 로그인 로직(프론트에서 자체적으로 가능 추후에 백엔드와 연동)
    const handleGoogleLogin = async() =>{
        window.location.href=getGoogleLoginUrl();
    }
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if(code){
            (async()=>{
                try{
                    const tokenResponse=await fetchAccessToken(code);
                    const userInfo =await fetchGoogleUserInfo(tokenResponse.access_token)
                }catch(error){
                    console.error("Google Login Failed:", error);

                }
            })();
        }
    },[])
    /*카카오 로그인 로직(추후에 구현)*/

    //비밀번호 토글
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };
    
  return (
        <C.FormField style={{}} onSubmit={handleSubmit}>
            <C.InputField type="email" name="email" placeholder="Email"
             value={formData.email} onChange={handleChange} required/>
            <C.InputField type={isPasswordVisible ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password}
             onChange={handleChange} required style={{ marginBottom: '72px', paddingRight:'63px'}}/>
            <C.EyeLogo onClick={togglePasswordVisibility} style={{position: 'absolute' ,top: '381px' ,left:'1431px'}} ></C.EyeLogo>
            <C.Login type="submit">로그인 하기</C.Login>
            <C.Google onClick={handleGoogleLogin}><C.GoogleLogo/><C.S>구글로 로그인하기</C.S></C.Google>
            <C.Kakao><C.KakaoLogo/><C.S style={{color: "var(--kakao-text, rgba(0, 0, 0, 0.85));"}}>카카오로 로그인하기</C.S></C.Kakao>
            <C.P>
              무비글라스가 처음이세요? <C.A href="/signup">회원가입하기</C.A>
            </C.P>
         </C.FormField>
  );
}
// 회원가입 페이지
function Sign_Up_Page(){
    const [formData, setFormData]= useState({nickname :"", email: "",password : ""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
        /* 이메일 닉네임 입력 시 중복 검사 로직 */
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        /*이메일 입력 받을 시에 @앞에 부분만 저장에서 서버 전달*/ 
    }
    
    return(
            <C.FormField style={{padding:"64px 78px 63px 78px"}} onSubmit={handleSubmit}>
               <C.L>닉네임
                <C.InputField type="text" name="nickname"
                 placeholder="닉네임을 입력해주세요"
                 value={formData.nickname} onChange={handleChange}
                 required/>
                </C.L>

                <C.L>이메일
                 <C.InputField type="email" name="email"
                 placeholder="이메일을 입력해주세요"
                 value={formData.email} onChange={handleChange}
                 required/>
                </C.L>

                <C.L>비밀번호
                 <C.InputField type="password" name="password"
                 placeholder="비밀번호를를 입력해주세요"
                 value={formData.password} onChange={handleChange}
                 required/>
                </C.L >
                <C.Login type="submit" style={{color:" var(--Grayscale-White, #FFF)",background:" var(--Primary, #7E37F9)",marginTop:"60px"}}>회원가입하기</C.Login>
                
                 <C.P>이미 계정이 있으신가요? <C.A href="/login">로그인하기</C.A></C.P>
            </C.FormField>
    )
}
export {Lay,LoginPage, Sign_Up_Page};
