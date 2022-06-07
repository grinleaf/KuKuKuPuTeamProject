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
    var action = "select";  
    $.ajax({
            
    url:"loadUserInfoDB.php",                
    method:"POST",               
    dataType: "json"  ,      
    success:function(result){ //dhktq  
                                
        //saveMyLocalStorage(result)
        var j = JSON.stringify(result)

    console.log(j)
    alert(result[0].name) // 이름
    
    }           
    })    
}

$('#upDateDB').click(()=>{
// php 값 가져오기
loadUserInfoDB();
})

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
