import React, {useState} from  "react";
import *as C from "./Auth.styled"
/* 해야할 부분
로그인 데이터 서버로 보내는 로직 구현
소셜 로그인 구현 및 연동
반응형 css 추가하기 및 css 수정 */

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
    //폼 데이터 변경 핸들러
    const handleChange =(e)=>{
        const {name, value} =e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    //폼 제출 핸들러
    const handleSubmit = async(e)=>{
        e.preventDefault();
    }

    //소셜 로그인 로직
  return (
        <C.FormField onSubmit={handleSubmit}>
            <C.InputField type="email" name="email" placeholder="Email"
             value={formData.email} onChange={handleChange} required/>
            
            <C.InputField type="password" name="password" placeholder="PW" value={formData.password}
             onChange={handleChange} required style={{ marginBottom: '72px' }}/>

            <C.Login type="submit">로그인 하기</C.Login>
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
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

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
