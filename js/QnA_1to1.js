function downloadDB(){
    // 로그인 정보 가져오기 (유저 아이디)
    let userId= localStorage.getItem('userId')
    document.getElementById('qna_user_id').innerHTML= userId
}

function uploadDB(){
    let title= document.getElementById('qna_title').value
    let user_id= document.getElementById('qna_user_id').innerHTML
    let content= document.getElementById('qna_content').value
    let file= document.getElementById('qna_file').files[0]
    let formData= new FormData()
    formData.append('title', title)
    formData.append('user_id', user_id)
    formData.append('content', content)

    formData.append('file', file)
    // file= file.substring(12)

    let xhr= new XMLHttpRequest()
    //결과값 출력
    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200) alert('문의가 완료되었습니다.')
        else if(xhr.status==400) alert('전송 실패')
    }
    //php 파일 실행 --> 여기서 DB 연동
    xhr.open('POST','./upload_QnA_1to1.php',true)
    // xhr.setRequestHeader('Content-type', 'multipart/form-data')
    xhr.send(formData)
}