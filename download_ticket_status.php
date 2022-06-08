<?php

    header('Content-Type:text/html; charset=utf-8');

    $db= mysqli_connect("localhost","kkpk","nell##00","kkpk");
    mysqli_query($db, "set names utf8");

   
    $sql= "SELECT * FROM ticket_info"; 
    $result= mysqli_query($db, $sql);    
    if($result){
        $rowCnt= mysqli_num_rows($result);
        for($i=0; $i<$rowCnt; $i++){

            $row= mysqli_fetch_array($result, MYSQLI_ASSOC);

            $no= $row['no'];
            $title= $row['title'];
            $message= $row['msg'];
            $file= $row['file'];
            $date= $row['date'];

            echo "$no <br>";
            echo "<h4>$title</h4>";
            echo "<p>$message</p>";
            
            if($file!= null) echo "<img src='$file' width='50%'>";
        }
    }else{
        echo "검색 실패";
    }

    mysqli_close($db);
?>