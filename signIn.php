<?php

    header('Content-Type:text/plain; Charset=utf-8');

    // DB에서 사용자의 아이디와 비밀번호를 가져오는 php 문 입니다.

    $db = mysqli_connect('localhost','kkpk','nell##00','kkpk'); // 네번째는 db명

    if(mysqli_connect_errno()){
        echo " 아예 접속 에러. ";
    }

    mysqli_query($db, 'set names utf8'); //한글깨짐 방지

    
    $sql = ;


    $result = mysqli_query($db,$sql); // 결과 확인용 확인용 result

    if($result) echo "  $result  아이디 비번 잘 부름";
    else echo " $result  또 안돼";


    mysqli_close($db);

?>