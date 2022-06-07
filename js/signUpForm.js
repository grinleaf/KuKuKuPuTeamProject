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


        function checkName(){
            $name = $('#userName').val()
            const reName = /^[가-힣a-zA-Z]+$/

            if((reName.test($name) ==false) || ( $('#userName').val() == '') ){
                $('#userName').val('')
                alert(' 이름이 올바르지 않습니다.') 
                return false
            }else{
                return true
            }
        }
            
        function checkId(){
            const reId = /^[A-Za-z0-9]{6,12}$/     //영문, 숫자 6~12자리      
            $id = $('#id').val()
            console.log( '값 :  ' + $id)

            if ((reId.test($id) == false) || $id == '' ){ 
                console.log(' 올바르지 않은 아이디임.')
                $('#id').val('')
                alert('올바른 아이디를 입력해주세요.')
                return false
            }else{
                console.log(' 올바른 아이디임.')
                return true
            }

        }

        //휴대폰 번호 기입시 , 특수문자, 한글 막아주고 자동으로 하이픈 넣는 코드
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

        function checkPhoneNum(){
                // 핸드폰 번호 자동 - 넣어주기.
                // keydown() : 사용자가 키보드를 누르는 순간 발생하는 이벤트. event : 어떤 키인지 줌.
                // 사용자가 키값을 하나 누를 때 마다 발동. -> 콜백이벤트...
                
                // 인증번호 보내기 버튼 누르면 발동하는 콜백. 정규식으로 숫자 확인.

                $phone_num_data =  $('#phoneNum').val()
                const rePhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                if((rePhone.test($phone_num_data) == false) ||( $phone_num_data == '')) {
                    console.log( '폰 번호가 아님' )
                    alert('올바른 핸드폰 번호를 입력해주세요.')
                    $('#phoneNum').val('') 
                    return false
                }else{
                    console.log( rePhone.test($phone_num_data) )
                    return true
                }

        }


        function checkPw(){
            
            $pw1 = $('#pw1').val()
            const rePw = /[a-z0-9!@#$%^&*?~]{8,12}/
            
            console.log('포커스 나감, ' +$pw1 + "정규식 결과값은 :"+ rePw.test($pw1))

            if((rePw.test($pw1) == false) || ($pw1 == '') ){
                alert(" 비밀번호를 양식에 맞춰 작성해주세요")
                $('#pw1').val('')
                return false
            }else{
                return true
            }
        }

        // 비밀번호 확인 용 코드
        function checkPwConfirm(){

                   // 비번 확인 입력 칸에서 포커스 나가면 발동하는 콜백

            $pw2 = $('#pw2').val()

            if( $pw1 == $pw2){
                console.log('비번 같음')
                return true
            }else{
                console.log('비번 틀림')
                alert('동일한 비밀번호를 다시 입력해주세요.')
                return false
            }
        }



        function checkEmailFirst(){
                
            // 이메일 검사
                const reEmailFirst = /^[a-z0-9]+$/    //  @ 앞
                
                var email1 = $('#userEmail').val()
                
                if((reEmailFirst.test(email1) == false) || (email1 == '') ){
                    console.log(" 이멜이 정규식에 안 맞음 " + $('#userEmail').val())
                    $('#userEmail').val('')
                    alert('정확한 이메일을 집력하여 주십시로')
                    return false
                }else{
                   
                        console.log(" 이멜이 정규식에 맞음" + $('#userEmail').val())
                        return true
                }
            }


        function checkEmailSecond(){

            const reEmailSecond =  /\.\w+(\.\w+)?/   // @ 뒤 
            var email2 = $('#email2').val()

            if((reEmailSecond.test(email2) == false) ){
                console.log(" 이멜이 정규식에 안 맞음 " + $('#email2').val() )
                $('#email2').val('')
                alert('정확한 도메일 정보를 입력하거나 선택하세요')
                return false
            }else if(email2 == ""){
                alert('정확한 도메일 정보를 입력하거나 선택하세요')
                return false
            }else{
                    console.log(" 이멜이 정규식에 맞음" + $('#userEmail').val())
                    return true
            }
        }
        

            $("#userDomain").on('change', function() {
                $domain = this.value
                $('#email2').val($domain)
                console.log('셀렉트로 선택된 값은' +$domain) 
            })

        function ckDomain(){
                //이메일 수신 동의는 이따 집가서 해야 함,

            if($('#cbEmail').is(':checked') || ($('#email2').val() != null)) {

                $cb_email = true  // 체크O : 리턴 -  true   /  체크X : 리턴 -  false
            }else {
                alert('선택안됨')
                $cb_email = false
            }
        }

        function test(){

            alert('디비 테스트 ㄱㄱ')

            var xhr = new XMLHttpRequest()

            var params = '디비 연결 테스트 시작';
            
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    alert(저ㅇ상)
                   alert(xhr.responseText)
                }
               
            }
            xhr.open('POST','./sign.php', true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded') // 2번째 파라미터는 www 기술을 썼다라는 건데
            // 멀티 폼 데이터는 헤더와 바디를 나눴다는 약속을 한 형식?암, 
            xhr.send(params) // 이 안의 데이터들

        }


        document.getElementById('testDB').click(
            test()
        )

        document.getElementById('userId').in

        function sendData(){

            console.log('디비 넷웤 작업을 시작합니당')

            var xhr = new XMLHttpRequest()

            var params = 'name=' + $name
                        + '&phoneNum=' + $('#phoneNum').val()
                        + '&id=' + $('#id').val()
                        + '&pw=' + $('#pw2').val()
                        + '&email=' + $('#userEmail').val() + "@"+  $('#email2').val();
            
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                   alert(xhr.responseText)
                }
               
            }
            xhr.open('POST','./sign.php', true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded') // 2번째 파라미터는 www 기술을 썼다라는 건데
            // 멀티 폼 데이터는 헤더와 바디를 나눴다는 약속을 한 형식?암, 
            xhr.send(params) // 이 안의 데이터들

        }

        // 등록 버튼을 누르면 폼 데이터가 검사 되기 전에, 유효성 검사를 위한 핸들러 ( 콜백 메소드) 
        // 이 버튼을 누르면 Ajax으로 비동기 서버작업 수행.

        $('#btnSignUp').click( function(){
            alert(' 버튼 클릭')

            if(!checkId() || !checkName()||!checkPhoneNum()||!checkPw()||!checkPwConfirm()||!checkEmailFirst()|| !checkEmailSecond()){
                alert('올바른 회원가입 양식을 작성해주세요')
            }else{ 
              
                sendData()
               

            }

        })
        }) //JSQuery=========================================================================================   