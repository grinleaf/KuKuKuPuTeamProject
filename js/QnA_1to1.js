function downloadDB(){
    // 로그인 정보 가져오기 (유저 아이디)
    let 
}

function uploadDB(){
    // $('#qna_save_btn').click(function(){
    //     var formData= new FormData()
    //     formData.append('title',$('input[name=title').value)
    //     formData.append('user_id',$('input[name=user_id').value)
    //     formData.append('content',$('input[name=content').value)
    //     formData.append('file',$('input[name=file')[0].files[0])

    //     $.ajax({
    //         url:'./upload_QnA_1to1.php',
    //         processData: false,
    //         contentType: false,
    //         data: formData,
    //         type: 'POST',
    //         success: function(data){
    //             alert("성공!")
    //         }
    //     })
    // })


    let title= document.getElementById('qna_title').value
    let user_id= document.getElementById('qna_user_id').innerHTML
    let content= document.getElementById('qna_content').value
    let file= document.getElementById('qna_file').files[0]
    let formData= new FormData()
    formData.append('title', title)
    formData.append('user_id', user_id)
    formData.append('content', content)

    formData.append('file', file)

    let xhr= new XMLHttpRequest()
    //결과값 출력
    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200) alert('전송 성공')
        else if(xhr.status==400) alert('전송 실패')
    }
    //php 파일 실행 --> 여기서 DB 연동
    xhr.open('POST','./upload_QnA_1to1.php',true)
    // xhr.setRequestHeader('Content-type', 'multipart/form-data')
    xhr.send(formData)
}