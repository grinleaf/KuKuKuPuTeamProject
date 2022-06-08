<?php
    header("Content-Type:text/html; charset=utf-8");

    $id = $_POST['id'];
    $pw = $_POST['pw'];
    

    $arr = array();
    $arr['name'] = "Kim";
    echo json_encode($arr);
    // echo '{"name":"Sam", "age": 16}'
?>