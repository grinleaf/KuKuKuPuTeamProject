<?php
    header('Content-Type:application/json;charset=utf-8');

    // 서버 DB에 저장된 사용자 데이터를 가져오는 php 입니다,

    $db = mysqli_connect('localhost','kkpk','nell##00','kkpk'); // 네번째는 db명

    if(mysqli_connect_errno()){
        echo " 아예 접속 에러. ";
    }

    mysqli_query($db, "set names utf8");


    // 일단 사용자가 아이디 : inah0521 , 비밀번호 : nell!!00 일 때!!!
    $id = "inah0521";
    $pw = "nell!!00";

    $sql = "SELECT * FROM user_info WHERE id='$id' AND pw='$pw'";

    $result = mysqli_query($db,$sql); 

    // 이제 이 결과표로부터 총 레코드(rows) 수를 
    //데이터는 기본적으로 한 줄씩 가져 옴.
    $rows_num = mysqli_num_rows($result);
    // 근데 위에껀 한 줄 읽어오니, 여러 줄 읽어와야 하니께
    //각 줄을 요소로 가질 빈 인덱스 배열을 준비해야 함 -> 결국 2차원 배열 만들기
    //MYSQLI_ASSOC : 연관배열로 받겠다!
    $rows = array();
    for($i = 0 ; $i <$rows_num ;$i++){ 
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);//MYSQLI_ASSOC : 연관배열로 한 줄 받기.
        $rows[$i]=$row;

    }

        // $rows는 2차원 배열이므로, -->json array로 변환해야 함.
        //$row 는 한 레코드닊[]ㅇ지드렂ㄷ루
        echo json_encode($rows);


        mysqli_close($db);

        

?>
