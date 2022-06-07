# KuKuKuPuTeamProject




서버 DB에 저장된 회원정보를 쓰고 싶으면,

1. http://kkpk.dothome.co.kr/KuKuKuPuTeamProject/editUserInfo.html 에 접속해서 아무것도 하지말고 수정 버튼을 누르세요.  &nbsp;
    그럼 회원 정보가 local Storage에 저장될 것 입니다.  &nbsp;

2. 저장된 local Storage 의 식별자들을 소개하겠습니다.  &nbsp;
  &nbsp;
 회원 이름  : userName  &nbsp;
 회원 핸드폰 번호 : userPhoneNum  &nbsp;
 회원 아이디 : userId  &nbsp;
 회원 비밀번호 : userPw  &nbsp;
 회원 이메일 : userEmail  &nbsp;
 회원 이메일 광고 수신 여부 : userCbEmail  &nbsp;
 회원가입 시각 : userSignUpDate  &nbsp;
 카카오 로그인시 이메일: userKakaoEmail  &nbsp;
 카카오 로그인시 최초가입(로그인) 시각 : userKakaoDate  &nbsp;
 구글 로그인시 이메일: userGoogleEmail  &nbsp;
 구글 로그인시 최초가입(로그인) 시각: userGoogleDate  &nbsp;
   &nbsp;
 3. 사용법 ( ex. 사용자의 이름을 쓰고 싶다면?  )  &nbsp;
      &nbsp;
   localStorage.getItem('userName')
  
  
 
