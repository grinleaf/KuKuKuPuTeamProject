

function uploadDB(){
    let title= document.getElementById('qna_title').innerHTML
    let content= document.getElementById('qna_content').innerHTML
    let file= 'aaa'
    // document.getElementById('qna_file')
    

    let xhr= new XMLHttpRequest()
    //결과값 출력
    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200) alert('전송 성공')
        else if(xhr.status==400) alert('전송 실패')
    }
    //php 파일 실행 --> 여기서 DB 연동
    xhr.open('POST','../upload_QnA_1to1.php',true)
    res.setHeader('Access-Control-Allow-origin', '*');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')   
    xhr.send('title='+title+'&content='+content+'&file='+file)
}