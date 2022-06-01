importScripts 
// 회원가입에 관련된 js 파일입니다.

//---------------------------------------------
    // 로그인 종류에 대한 const 값,
    const MEMBER = 0    //일반회원
    const NONMEMBER = 0 //일반회원
    const KAKAO = 1     //카카오 로그인
    const GOOGLE = 2    //구글 로그인

    // 나이 종류에 대한 const 값 ( 새싹 따릉이 일 경우 , isAdult = false)
    const isAdult = false 




//----------------------------------------------

var $userNum = $('#userNum')

// 등록 버튼을 누르면 폼 데이터가 검사 되기 전에, 유효성 검사를 위한 핸들러
$('#form-register').submit(function(e) {
    e.preventDefault(); // 버튼을 눌러 넘어온 이벤트 객체임. 이 객체의 기본 동작을 막기. (안넘으면 넘어감)
    $(this).find('.txt-warning').empty().hide();
})





    // 생성자 함수로 사용자 객체 만들기
    class SignUpUserInfo{

        constructor(name, phoneNum, id, pw, email, cbEmail){
            this.name = name,
            this.phoneNum = phoneNum,
            this.id = id, 
            this.pw = pw, 
            this.email = email,
            this.cbEmail = cbEmail
        }

        toServer(){
             // 포스트 방식으로 보내기 ㄱㄱ
        }
        fromServer(){

        }

    }


    // 다음 버튼을 누르면 제이슨 객체로 만듬. 포스트로 보내야 하는데 ㅠ 나중에 ㄱ ㅜㅜ
    function sub(name, phoneNum, id, pw, email, cbEmail){
        
        var userInfo = {
        name : name,
        phoneNum: phoneNum,
        id : id, 
        pw : pw, 
        email : email,
        cbEmail : cbEmail
        }

        var json = JSON.stringify(userInfo) 

            console.log(json); // 유저 폼 데이터를 객체로 만듬.

    }