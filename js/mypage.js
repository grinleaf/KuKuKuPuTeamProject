let noticeArray= [
    {titleTr:"KT서버 점검작업 안내(22.05.28)",dateTr:"2022.05.27"}
];

// export default noticeArray

function notice_add(){
    let table= document.getElementById('notice_table')
    for(var i=0; i<noticeArray.length; i++){
        let tr= document.createElement('tr')
        let noticeTitle= document.createElement('td')
        noticeTitle.appendChild(document.createTextNode(noticeArray[i].titleTr))
        noticeTitle.onclick= move_detail_page
        let noticeDate= document.createElement('td')
        noticeDate.appendChild(document.createTextNode(noticeArray[i].dateTr))
        tr.appendChild(noticeTitle)
        tr.appendChild(noticeDate)
        table.appendChild(tr)
    }
}

function move_detail_page(){
    window.open('./noticeDetail_01.html', '_self')
}


notice_add()