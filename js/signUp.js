// --------------------------------------------------------------------------------------------------------
    // 로그인 관련 JS 입니다.

    // 문서가 준비돨 때 자동으로 온로드 콜백--------------------------------------------

    jQuery(document).ready(function(){ 
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
        var $phone = $('#userNum').val() // 이건 세개 조합해야 함
        var $id = $('#id').val()
        var $pw1 = $('#pw1').val()
        var $pw2 = $('#pw2').val()
        var $email = $('#userEmail').val()
        var $domain = $('#userDomain').val()

        $('#aa').click(
            ()=>{ alert('눌리나 Test  1  ')}
        )

        //----------------------------------------------
        // 정규식 판단 메소드들

        let vaildateEmail = (email , domain )=>{ //email :  사용자의 email값

            const reEmailFirst = /\w+/    //  @ 앞
            const reEmailSecond = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/    // @ 뒤 

            return ((reEmailFirst.test(email)) && (reEmailSecond.test(domain))) ? true : false

        }

        let vaildateId = id =>{ //id :  사용자의 id
            const reId = /^\w{6,12}/     //영문, 숫자 6~12자리
            
            return reId.test(id)
        }

        let vaildateName = name =>{ //id :  사용자의 id

            // const reName = /^\w\w\w/    //17자 까지 허용 -> 정규식 다시.

            
            return alert(reName.test(name)) 

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
            alert($name)
            vaildateName($name)
    
            
        });


            
        }) //JSQuery

        $('#aa').click(
            ()=>{ alert('눌리나 Test  2  ')}
        )
  


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

