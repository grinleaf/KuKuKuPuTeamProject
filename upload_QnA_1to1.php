<?php

    header('Content-Type:text/plain; charset=utf-8');

    $user_id= $_POST['user_id'];
    $title= $_POST['title'];
    $content= $_POST['content'];

    $file= $_FILES['file'];

    $srcName= $file['name'];
    $tmpName= $file['tmp_name'];


    if(!file_exists("./uploadImages/$user_id")){
        mkdir("./uploadImages/$user_id",0777);
    }

    $dstName= "./uploadImages/$user_id/".date('YmdHis')."_$srcName";
    move_uploaded_file($tmpName,$dstName);

    $db= mysqli_connect("localhost","kkpk","nell##00","kkpk");
    mysqli_query($db, "set names utf8");

    $sql= "INSERT INTO qna_1to1(user_id, title, content, file) VALUES('$user_id','$title', '$content', '$dstName')";
    $result= mysqli_query($db, $sql);

    if($result) echo "DB insert 완료 - ID: $user_id, 제목 : $title, 내용 : $content, 첨부파일 : $dstName";
    else echo "DB insert 실패 : ".mysqli_error($db);

    mysqli_close($db);

?>