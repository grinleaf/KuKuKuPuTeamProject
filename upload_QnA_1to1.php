<?php

    header('Content-Type:text/plain; charset=utf-8');

    $user_id= 'abcd';
    $title= $_POST['title'];
    $content= $_POST['content'];
    $file= $_POST['file'];

    $db= mysqli_connect("localhost","grinleaf","jk165319**","grinleaf");
    mysqli_query($db, "set names utf8");

    $sql= "INSERT INTO qna_1to1(user_id, title, content, file) VALUES('$user_id','$title', '$content', '$file')";
    $result= mysqli_query($db, $sql);

    if($result) echo "DB insert 완료 - 제목 : $title, 내용 : $content, 첨부파일 : $file";
    else echo "DB insert 실패 : ".mysqli_error($db);

    mysqli_close($db);

?>