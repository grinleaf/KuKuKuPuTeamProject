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

        var $name
        var $id
        var $pw1
        var $pw2 
        var $phone_num_data
        var $phone_num

        var $email 
        var $domain
        var $cb_email


        var $flag = 0


        $('#checkId').click( ()=>{
            const reId = /^\w{6,12}/     //영문, 숫자 6~12자리        
            $id = $('#id').val()
            console.log( '값 :  ' + $id)
            if (reId.test(id)){ 
                console.log(' 올바른 아이디임.')
                if( $flag >=1){  $flag -=1}
            }
            else{ 
                console.log(' 올바르지 않은 아이디임.')
                alert('올바른 아이디를 입력해주세요.')
                $flag +=1
            }

        })

        // 핸드폰 번호 자동 - 넣어주기.
        // keydown() : 사용자가 키보드를 누르는 순간 발생하는 이벤트. event : 어떤 키인지 줌.
        // 사용자가 키값을 하나 누를 때 마다 발동. -> 콜백이벤트...
        $('#phoneNum').keydown(function (event) {
            var key = event.charCode || event.keyCode || 0;
            $phone_num  = $(this)
           

            if (key !== 8 && key !== 9) {
                if ($phone_num.val().length === 3) {
                    $phone_num.val($phone_num.val() + '-');
                }
                if ($phone_num.val().length === 8) {
                    $phone_num.val($phone_num.val() + '-');
                }
            }
            return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
            // Key 8번 백스페이스, Key 9번 탭, Key 46번 Delete 부터 0 ~ 9까지, Key 96 ~ 105까지 넘버패트
            // 한마디로 JQuery 0 ~~~ 9 숫자 백스페이스, 탭, Delete 키 넘버패드외에는 입력못함
        })

        // 인증번호 보내기 버튼 누르면 발동하는 콜백. 정규식으로 숫자 확인.
        $('#phoneNumSubmit').click( () =>
        {
            $phone_num_data =  $('#phoneNum').val()
            const rePhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if(rePhone.test($phone_num_data)) {
                console.log( rePhone.test($phone_num_data) )
                if( $flag >=1){  $flag -=1}
            }
            else { 
                console.log( '폰 번호가 아님' )
                $('#phoneNum').val('') 
                $flag +=1
                   } 
        })

        // 비번 입력 칸에서 포커스 나가면 발동하는 콜백
        $('#pw1').blur(()=>{ 
            $pw1 = $('#pw1').val()
            const rePw = /[a-z0-9!@#$%^&*?~]{8,12}/
            
            console.log('포커스 나감, ' +$pw1 + "정규식 결과값은 :"+ rePw.test($pw1))
        })

        // 비번 확인 입력 칸에서 포커스 나가면 발동하는 콜백
        $('#pw2').blur(()=>{ 
            $pw2 = $('#pw2').val()

            if ($pw1 === $pw2){
                console.log('비번이 같음') 
                if( $flag >=1){  $flag -=1}
            } 
            else {
                console.log('비번이 틀림')
                $('#pw2').val('')
                $flag +=1
            }
        })

        // 이메일 검사
        $('#userEmail').blur(()=>{ 

            const reEmailFirst = /[a-z0-9]+/    //  @ 앞
            
            if( reEmailFirst.test($('#userEmail').val())) {
                console.log(" 이멜이 정규식에 맞음" + $('#userEmail').val())
                if( $flag >=1){  $flag -=1}
            }
            else {
                console.log(" 이멜이 정규식에 안 맞음 " + $('#email1').val())
                $flag +=1
            }
        })

        // 이메일 검사
        $('#email2').blur(()=>{ 

            const reEmailSecond =  /\.\w+(\.\w+)?/   // @ 뒤 
            
            if( reEmailSecond.test($('#email2').val())){
                 console.log(" 이멜이 정규식에 맞음" + $('#email2').val())
                 if( $flag >=1){  $flag -=1}
            }
            else {
                console.log(" 이멜이 정규식에 안 맞음 " + $('#email2').val())
                $flag +=1
            }
        })

        $("#userDomain").on('change', function() {
            $domain = this.value
            $('#email2').val($domain)
            console.log('셀렉트로 선택된 값은' +$domain)
        });

        if($("#cbEmail").is(':checked')) $cb_email = true  // 체크O : 리턴 -  true   /  체크X : 리턴 -  false
        else $cb_email = false
        
  
        // 등록 버튼을 누르면 폼 데이터가 검사 되기 전에, 유효성 검사를 위한 핸들러 ( 콜백 메소드)

        $('#btnSignUp').click( function(){
            $name =  $('#userName').val()
            $.post("sign.php",
                {name : $name,
                 phoneNum : $phone_num_data,
                 id : $id, 
                 pw :"ddd555", 
                 email : $email + $domain ,
                 cb_email : $cb_email , 
                 date : "2022년 오늘"},
                 function(data,status){
                    // 요청 성공시 실행되는 콜백 메소드
                    alert( '데이터' + data + ' 상태' + status)
                })
        })

        }) //JSQuery=========================================================================================   
