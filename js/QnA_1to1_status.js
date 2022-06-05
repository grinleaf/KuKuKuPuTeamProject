let qnaArray= [
    {question:"1:1 문의 드립니다.", answer:"답변완료", date:"2022.06.03"},
];

// export default noticeArray

function qna_status_add(){
    let table= document.getElementById('qna_status_table')
    if(qnaArray.length==0) document.createTextNode('해당 데이터가 없습니다.')
    else{
        for(var i=0; i<qnaArray.length; i++){
            let tr= document.createElement('tr')
            let qnaQuestion= document.createElement('td')
            qnaQuestion.appendChild(document.createTextNode(qnaArray[i].question))
            qnaQuestion.onclick= move_detail_page
            let qnaAnswer= document.createElement('td')
            qnaAnswer.appendChild(document.createTextNode(qnaArray[i].answer))
            let qnaDate= document.createElement('td')
            qnaDate.appendChild(document.createTextNode(qnaArray[i].date))
            tr.appendChild(qnaQuestion)
            tr.appendChild(qnaAnswer)
            tr.appendChild(qnaDate)
            table.appendChild(tr)
        }
    }
}

function move_detail_page(){
    window.open('#', '_self')
}


qna_status_add()