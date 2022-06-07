jQuery(document).ready(
    function(){
    // 코딩으 ㄹ시작하지

    //1. 서버에서 회원 정보 불러오기 
    //2. 화면에 뿌리기
    //3. 화면에서 사용자의 변경작업 컨트로로롤
    //4. 최종 수정하기 버튼 클릭시, 서버데이터 업데이트.


    // 1. 서버에서 회원 정보 불러오기 <-- 이것은... php... 웹 워커 한 번 해보쟝
    // ->  loadUserInfoDB.php  에서 성공.

    
    // let userName = localStorage.getItem('userName')
    // let userPhoneNum = localStorage.getItem('userPhoneNum')
    // let userPw = localStorage.getItem('userPw')
    // let userEmail = localStorage.getItem('userEmail')
    // let userCbEmail = localStorage.getItem('userCbEmail')
    // let userSignUpDate = localStorage.getItem('userSignUpDate')
    // let userKakaoEmail = localStorage.getItem('userKakaoEmail')
    // let userKakaoDate = localStorage.getItem('userKakaoDate')
    // let userGoogleEmail = localStorage.getItem('userGoogleEmail')
    // let userGoogleDate = localStorage.getItem('userGoogleDate')


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
        localStorage.setItem('userId',userInfoObject[0].id) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userPw',userInfoObject[0].pw) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userEmail',userInfoObject[0].email) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userCbEmail',userInfoObject[0].cbEmail) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userSignUpDate',userInfoObject[0].date) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userKakaoEmail',userInfoObject[0].kakao_email) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userKakaoDate',userInfoObject[0].kakao_date) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userGoogleEmail',userInfoObject[0].google_email) // 로컬 히스토리에 id 식별자로 저장했음
        localStorage.setItem('userGoogleDate',userInfoObject[0].google_date) // 로컬 히스토리에 id 식별자로 저장했음

    }







})