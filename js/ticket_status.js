//DB에서 데이터를 내려받아 저장할 배열객체들
var ticketStatusArray= [
    {ticket:"정기권 7일 2시간", registDate:"2022.06.03", used:"미사용"},
    {ticket:"asdf", registDate:"2022.06.03", used:"미사용"},
    {ticket:"asdfwefs", registDate:"2022.06.03", used:"미사용"},
    {ticket:"정기권 7일 2시간", registDate:"2022.06.03", used:"미사용"}
];
var receiveTicektArray= [
    {ticket:"정기권 30일 2시간", registDate:"2022.06.03", used:"미사용", sender:"abcd"}
];
var sendTicketArray= [
    {ticket:"정기권 180일 1시간", sendDate:"2022.06.03", receiver:"efgh"}
];

function ticket_status_add(){
    let table= document.getElementById('ticket_status_table')
    if(ticketStatusArray.length==0) document.createTextNode('해당 데이터가 없습니다.')
    else{
        for(var i=0; i<ticketStatusArray.length; i++){
            let tr= document.createElement('tr')
            let ticket= document.createElement('td')
            ticket.appendChild(document.createTextNode(ticketStatusArray[i].ticket))
            // ticket.onclick= move_detail_page
            let registDate= document.createElement('td')
            registDate.appendChild(document.createTextNode(ticketStatusArray[i].registDate))
            let used= document.createElement('td')
            used.appendChild(document.createTextNode(ticketStatusArray[i].used))
            tr.appendChild(ticket)
            tr.appendChild(registDate)
            tr.appendChild(used)
            table.appendChild(tr)
        }
    }
}


function receiveticket_add(){
    let table= document.getElementById('receive_ticket_table')
    if(receiveTicektArray.length==0) document.createTextNode('해당 데이터가 없습니다.')
    else{
        for(var i=0; i<receiveTicektArray.length; i++){
            let tr= document.createElement('tr')
            let ticket= document.createElement('td')
            ticket.appendChild(document.createTextNode(receiveTicektArray[i].ticket))
            // ticket.onclick= move_detail_page
            let registDate= document.createElement('td')
            registDate.appendChild(document.createTextNode(receiveTicektArray[i].registDate))
            let used= document.createElement('td')
            used.appendChild(document.createTextNode(receiveTicektArray[i].used))
            let sender= document.createElement('td')
            sender.appendChild(document.createTextNode(receiveTicektArray[i].sender))
            tr.appendChild(ticket)
            tr.appendChild(registDate)
            tr.appendChild(used)
            tr.appendChild(sender)
            table.appendChild(tr)
        }
    }
}

function send_ticket_add(){
    let table= document.getElementById('send_ticket_table')
    if(sendTicketArray.length==0) document.createTextNode('해당 데이터가 없습니다.')
    else{
        for(var i=0; i<sendTicketArray.length; i++){
            let tr= document.createElement('tr')
            let ticket= document.createElement('td')
            ticket.appendChild(document.createTextNode(sendTicketArray[i].ticket))
            // ticket.onclick= move_detail_page
            let sendDate= document.createElement('td')
            sendDate.appendChild(document.createTextNode(sendTicketArray[i].sendDate))
            let receiver= document.createElement('td')
            receiver.appendChild(document.createTextNode(sendTicketArray[i].receiver))
            tr.appendChild(ticket)
            tr.appendChild(sendDate)
            tr.appendChild(receiver)
            table.appendChild(tr)
        }
    }
}

// switch(document.getElementsByClassName('ticket_tables')){
//     case
// }