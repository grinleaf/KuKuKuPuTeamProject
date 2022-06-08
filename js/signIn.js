// 로그인 관련 함수 죄다 때려박음.
// 이메일 로그인 , 카카오 로그인, 구글은 자꾸 에러나서 구현 예정.
// 사용자가 아이디와 비밀번호 입력 시, 디비에서 값을 가져오는 js

let userName = localStorage.getItem('userName')
let userPhoneNum = localStorage.getItem('userPhoneNum')
let userPw = localStorage.getItem('userPw')
let userEmail = localStorage.getItem('userEmail')
let userCbEmail = localStorage.getItem('userCbEmail')
let userSignUpDate = localStorage.getItem('userSignUpDate')
let userKakaoEmail = localStorage.getItem('userKakaoEmail')
let userKakaoDate = localStorage.getItem('userKakaoDate')
let userGoogleEmail = localStorage.getItem('userGoogleEmail')
let userGoogleDate = localStorage.getItem('userGoogleDate')

    // 카카오 관련 스크립트
    Kakao.init('2d9fcbbf7cb1fda303e953ed5af4e1c4'); // 내 어플리케이션의 앱 키
    Kakao.isInitialized();// SDK 초기화 여부를 판단여부. 딱 한 번만 실행해야 함.

    function kakao(){ // 카카오 로그인 하는 팝업창만 뜸. 정보가져오기 X
    alert("카카오")

    console.log(Kakao.isInitialized())
    alert( Kakao.isInitialized() ) 

    // 팝업 방식으로 로그인 ㄱㄱ :  https://developers.kakao.com/tool/demo/login/login?method=dynamic
    Kakao.Auth.login({
        success: function(authObj) {
            alert(JSON.stringify(authObj))
            kakaoUserInfo()
        },
        fail: function(err) {
            alert(JSON.stringify(err))
        }
    })
    }

    function kakaoUserInfo(){
        Kakao.API.request({
            url: '/v2/user/me', // 고정값임.
            success: function(res) {
                // 정보 가져오기 성공
                // 나는 동의항목에서 일단 이메일만 가져오기로 했음.
                var email = res.kakao_account.email
                console.log(email)
                alert(JSON.stringify(res))
            },
            fail: function(error) {
                //정보 가져오기 실패
                alert(
                    'login success, but failed to request user information: ' +
                    JSON.stringify(error)
                )
            }
        })
    }

    function kakaoLogout() { // 나중에 로그아웃에 넣기.
    if (!Kakao.Auth.getAccessToken()) {
        alert('Not logged in.')
        return
    }
    Kakao.Auth.logout(function() {
        alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken())
    })
    }

    function loadUserInfoDB(){                         
        

        $.ajax({
        url:"loadUserInfoDB.php",                
        method:"POST",               
        dataType: "json"  ,      
        success:function(result){ //dhktq  
                                    
            saveMyLocalStorage(result)
            var j = JSON.stringify(result)

        console.log(j)
        alert(result[0].name) // 이름

        }           
        })    
    }

    // $('#upDateDB').click(()=>{
    // // php 값 가져오기
    // loadUserInfoDB();
    // })

function saveMyLocalStorage(userInfoObject){

    localStorage.setItem('userName',userInfoObject[0].name) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userPhoneNum',userInfoObject[0].phoneNum) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userPw',userInfoObject[0].pw) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userEmail',userInfoObject[0].email) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userCbEmail',userInfoObject[0].cbEmail) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userSignUpDate',userInfoObject[0].date) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userKakaoEmail',userInfoObject[0].kakao_email) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userKakaoDate',userInfoObject[0].kakao_date) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userGoogleEmail',userInfoObject[0].google_email) // 로컬 히스토리에 id 식별자로 저장했음
    localStorage.setItem('userGoogleDate',userInfoObject[0].google_date) // 로컬 히스토리에 id 식별자로 저장했음

}




// -------------------Google Login---------------------------------------------------------------------------------
//    // 아예 시도도 안됨.. 일단. ㅠ 다음꺼 ㄱ
//    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//    // TODO: Add SDKs for Firebase products that you want to use
//    // https://firebase.google.com/docs/web/setup#available-libraries



//    // Initialize Firebase
//    const app = initializeApp(firebaseConfig);

//    import { 
//    getAuth,// authentication 설정
//    signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
//    GoogleAuthProvider, //google login 기능
//    signInWithEmailAndPassword,// email 로그인
//    createUserWithEmailAndPassword, //email 회원가입
//    } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

//    // auth 설정 필수!!
//    const auth = getAuth();

//    // Your web app's Firebase configuration
//    const firebaseConfig = {
//    apiKey: "AIzaSyBD60ZB0Now9FajCq2KsevPfNhFrEvukNM",
//    authDomain: "kkpk-2e2b6.firebaseapp.com",
//    projectId: "kkpk-2e2b6",
//    storageBucket: "kkpk-2e2b6.appspot.com",
//    messagingSenderId: "376460784690",
//    appId: "1:376460784690:web:e2dd1241d1d3a05c8ff82b"
//    };

//    //Google 로그인
   
//    const provider = new GoogleAuthProvider();
//    export const loginGoogle = () => {
//    return signInWithPopup(auth, provider);
//    };

//    function googleSignIn(){
//                    loginGoogle().then((result) => {
//        console.log(result);
//        const user = result.user;
//        loginSuccess(user.email, user.uid);
//        alert("구글 로그인 성공 " + user.email)
//    });
//    }
   

// 이건 HTML 마지막에 넣어야 함. 나중에 !하기...
// <!-- Firebase 사용하기 위한거임.
// <script type="module">
//    // 해당 스크립트는 구글 로그인에 관한 코드를 담고 있습니다.
    
// // Import the functions you need from the SDKs you need

// </script>
//       <!-- Insert this script at the bottom of the HTML, but before you use any Firebase services -->
// <script type="module">
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'

// import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";


// </script> -->