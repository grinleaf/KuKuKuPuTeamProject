<?php
    header("Content-Type:text/html; charset=utf-8");

    $id = $_POST['id'];
    $pw = $_POST['pw'];

    $db = mysqli_connect("localhost", "kkpk", "nell##00", "kkpk");
    mysqli_query($db, "set names utf8");
    $query = "SELECT * FROM user_info WHERE id='$id' AND pw='$pw'";
    $result = mysqli_query($db, $query);

    $arr = array();

    if($result){
        $rowCnt = mysqli_num_rows($result);
        if($rowCnt==1){
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            $arr['result'] = "loginSuccess";
            $arr['id'] = $row['id'];
            $arr['phone'] = $row['phoneNum'];
            $arr['time'] = 419;
            $arr['distance'] = 62.23;
            $arr['calorie'] = 1823.58;
            $arr['carbonReduced'] = 14.45;
        }else{
            $arr['result'] = "loginFailure";
        }
    } else {
        $arr['result'] = "databaseError";
    }

    echo json_encode($arr);
    // echo '{"name":"Sam", "age": 16}'
?>