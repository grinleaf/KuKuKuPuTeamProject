// 사용자가 아이디와 비밀번호 입력 시, 디비에서 값을 가져오는 js

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

function loadMyLocalStorage(){

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

}