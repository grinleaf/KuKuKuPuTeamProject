


function notice_detail(){
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

function move_prev_page(){
    window.open('#', '_self')
}
function move_next_page(){
    window.open('#', '_self')
}

notice_add()