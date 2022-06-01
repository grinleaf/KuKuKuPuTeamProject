// --------------------------------------------------------------------------------------------------------
    // 로그인 관련 JS 입니다.

    // 문서가 준비돨 때 자동으로 온로드 콜백--------------------------------------------

    jQuery(document).ready(
        function(){ 
      alert('제이쿼리로 온로드 콜백 구현 성공') 

        // 로그인 종류에 대한 const 값,
        const MEMBER = 0    //일반회원
        const NONMEMBER = 0 //일반회원 아닐때? 
        const KAKAO = 1     //카카오 로그인
        const GOOGLE = 2    //구글 로그인

        // 나이 종류에 대한 const 값 ( 새싹 따릉이 일 경우 , isAdult = false)
        const isAdult = false  // 디폴트 성인

        // 폼에서 넘어오는 값들
        var $name = $('userName').val()
        var $userNum = $('#userNum').val()

        var $id = $('#id').val()

        var $pw1 = $('#pw1').val()
        var $pw2 = $('#pw2').val()
        var $email = $('#userEmail').val()
        var $domain = $('#userDomain').val()


        $('#checkId').click( ()=>{
            const reId = /^\w{6,12}/     //영문, 숫자 6~12자리        
            var id = $('#id').val()
            console.log( '값 :  ' + id)
            if (reId.test(id)) console.log(' 올바른 아이디임.')
            else console.log(' 올바르지 않은 아이디임.')

        })






        // 핸드폰 번호 자동 - 넣어주기.
        // keydown() : 사용자가 키보드를 누르는 순간 발생하는 이벤트. event : 어떤 키인지 줌.
        // 사용자가 키값을 하나 누를 때 마다 발동. -> 콜백이벤트...
        $('#phoneNum').keydown(function (event) {
            var key = event.charCode || event.keyCode || 0;
            $text = $(this); 
            if (key !== 8 && key !== 9) {
                if ($text.val().length === 3) {
                    $text.val($text.val() + '-');
                }
                if ($text.val().length === 8) {
                    $text.val($text.val() + '-');
                }
            }
            return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
            // Key 8번 백스페이스, Key 9번 탭, Key 46번 Delete 부터 0 ~ 9까지, Key 96 ~ 105까지 넘버패트
            // 한마디로 JQuery 0 ~~~ 9 숫자 백스페이스, 탭, Delete 키 넘버패드외에는 입력못함
        })

        // 인증번호 보내기 버튼 누르면 발동하는 콜백. 정규식으로 숫자 확인.
        $('#phoneNumSubmit').click( () =>
        {
            var num = $('#phoneNum').val()
            const rePhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if(rePhone.test(num)) console.log( rePhone.test(num) )
            else console.log( '폰 번호가 아님' )

        })

        $('checkId').click( ()=>{ //중복검사 버튼 -> 1. 정규식에 맞는지 확인 2. 서버에 있는 아이와 겹치는지 확인
        
            var text = $('checkId').val() // 사용자의 입력값
            const reId = /^\w{6,12}/     //영문, 숫자 6~12자리
                
            return reId.test(id)
            

        })



        //----------------------------------------------
        // 정규식 판단 메소드들

        let vaildateEmail = (email , domain )=>{ //email :  사용자의 email값

            const reEmailFirst = /\w+/    //  @ 앞
            const reEmailSecond = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/    // @ 뒤 

            return ((reEmailFirst.test(email)) && (reEmailSecond.test(domain))) ? true : false

        }


        let vaildatePw = pw =>{ //id :  사용자의 id
            const rePw = /[a-z!@#$%^&*?~]{8,12}/      //영문, 숫자, 특수문자(!@#$%^&*?~)조합 8~12자리 
            return rePw.test(pw)
        }
        //----------------------------------------------

        // 등록 버튼을 누르면 폼 데이터가 검사 되기 전에, 유효성 검사를 위한 핸들러 ( 콜백 메소드)
         $('#form-register').submit(function(e) {
            e.preventDefault(); // 버튼을 눌러 넘어온 이벤트 객체임. 이 객체의 기본 동작을 막기. (안넘으면 넘어감)
            var  $name = $('#userName').val()
            // 여기서 사용자 정보를 가지고 전체적인 폼 검사흫 해야 함.
           alert('제출')
    
        });



            
        }) //JSQuery=========================================================================================   



        // 생성자 함수로 사용자 객체 만들기 - 더 생각해보기.
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
// function sub(name, phoneNum, id, pw, email, cbEmail){
    
//     var userInfo = {
//     name : name,
//     phoneNum: phoneNum,
//     id : id, 
//     pw : pw, 
//     email : email,
//     cbEmail : cbEmail
//     }

//     var json = JSON.stringify(userInfo) 

//         console.log(json); // 유저 폼 데이터를 객체로 만듬.

// }

// var a = document.getElementById('aa')
// a.
