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
    echo " 아이디 :   $id  ,  비밀번호  :   $pw  , 이메일 : $email";

    // 이걸 시간으로 보내기
    $now = date('Y-m-d H:i:s');

    $db = mysqli_connect("kkpk.dothome.co.kr","kkpk","commit!!11","kkpk"); // 네번째는 db명

    mysqli_query($db, "set names utf8"); //한글깨짐 방지

    $sql = "INSERT INTO `userInfo`( `name`, `phoneNum`, `id`, `pw`, `email`, `cbEmail`, `date`) VALUES ('$name','$phoneNum','$id','$pw','$email','$cb_email','$now')";


    $result = mysqli_query($db,$sql); // 결과 확인용 확인용 result

    if($result) echo " 게시글 업로드 되따";
    else echo "망;


    mysqli_close($db);









?>