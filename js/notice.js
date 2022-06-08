let noticeArray= [
    {titleTr:"KT서버 점검작업 안내(22.05.28)",dateTr:"2022.05.27"},
    {titleTr:"「교통사망사고 줄이기」따릉이 안전수칙 안내",dateTr:"2021.08.11"},
    {titleTr:"따릉이 이용자의 보행자 보호의무(알림)",dateTr:"2022.05.25"},
    {titleTr:"[안내]서울자전거 '따릉이' 이용약관 및 방침개정안내",dateTr:"2022.05.23"},
    {titleTr:"[안내] 단체권 사용시 주의사항 안내",dateTr:"2022.04.08"},
    {titleTr:"자전거 보험 안내",dateTr:"2022.01.07"},
    {titleTr:"[안내] 임시잠금 해제가 안 될 경우",dateTr:"2022.04.15"},
    {titleTr:"[안내] 따릉이를 이용한 배달 대행 등 영리행위 금지",dateTr:"2022.03.25"},
    {titleTr:"[안내] 반납 시 미잠금은 추가요금 부과",dateTr:"2021.09.06"},
    {titleTr:"[안내] 새싹따릉이 안전이용 동영상 안내",dateTr:"2021.01.22"}
];

function notice_add(){
    let table= document.getElementById('notice_table')
    for(var i=0; i<noticeArray.length; i++){
        let tr= document.createElement('tr')
        tr.setAttribute('id', 'notice_table_tr'+(i+1))
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

function search_title(){
    let input_search= document.getElementById('search_box').innerHTML
    for(var i=0; i<noticeArray.length; i++){
        if(noticeArray[i].titleTr.includes(input_search)){
            document.getElementById('notice_table_tr'+(i+1)).style.display= ''
        }else{
            document.getElementById('notice_table_tr'+(i+1)).style.display= 'none'
        }
    }
}