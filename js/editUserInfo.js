jQuery(document).ready(()=>{
// 코딩으 ㄹ시작하지

//1. 서버에서 회원 정보 불러오기 
//2. 화면에 뿌리기
//3. 화면에서 사용자의 변경작업 컨트로로롤
//4. 최종 수정하기 버튼 클릭시, 서버데이터 업데이트.


// 1. 서버에서 회원 정보 불러오기 <-- 이것은... php... 웹 워커 한 번 해보쟝
 // ->  loadUserInfoDB.php  에서 성공.

 // php 값 가져오기
 loadUserInfoDB();

     function loadUserInfoDB()
        {                         
            var action = "select";  
  $.ajax({   
                  
    url:"loadUserInfoDB.php",                
    method:"POST",               
     data:{action:"select"},                
     success:function(data){                        
         $('#userId').text($id)   
         
         // 학원가서 마저 하기.
         }           
         })    
        }






// 2. 서버에서 받아온 정보를 화면에 뿌리자.
















})