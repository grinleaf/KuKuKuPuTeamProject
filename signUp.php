<?php

    header('Content-Type:text/plain; Charset=utf-8');


    // 회원가입 폼에서 넘어온 유저 데이터.
    $name =$_POST['name'];
    $phoneNum = $_POST['phoneNum'];
    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $email = $_POST['email'];
    $cb_email = $_POST['cb_email'];

    // 에코 성공.


    // 이걸 시간으로 보내기
    $now = date('Y-m-d H:i:s');

        echo " 아이디 :   $id  ,  이름  :   $name  , 이메일 : $email   시각 : $now" ;

    $db = mysqli_connect('localhost','kkpk','nell##00','kkpk'); // 네번째는 db명

    if(mysqli_connect_errno()){
        echo " 아예 접속 에러. ";
    }

    mysqli_query($db, 'set names utf8'); //한글깨짐 방지

    
    $sql = "INSERT INTO user_info( name, phoneNum, id, pw, email, cbEmail, date) VALUES ( '$name', '$phoneNum','$id','$pw','$email','$cb_email','$now')";
    //$sql = "SELECT * FROM `userInfo`";

    // $sql = "INSERT INTO please( name ,id) VALUES ('$name','$id')";


    $result = mysqli_query($db,$sql); // 결과 확인용 확인용 result

    if($result) echo "  $result   게시글 업로드 되따";
    else echo " $result  또 안돼";


    mysqli_close($db);

?>