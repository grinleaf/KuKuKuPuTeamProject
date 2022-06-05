function btn_mypage_click(page_url){
    $.ajax({
        url : page_url,
        type : 'post',
        success : function(data){
            retain_clicked_effect()
            $('#show_mypage_html').html(data);
            
        },
        error : function(){
            retain_clicked_effect()
            $('#show_mypage_html').text(' ※ 네트워크 오류 : 서버 연결상태를 확인해주십시오. ※');
            
        }
    });
    // $('.nav_btn_userInfo').on('click', function(){
        // var button= document.getElementsByClassName('nav_btn_userInfo')
        // $(document).ready(function(){
        //     for(var i=0; i<button.length; i++){ button[i].removeClass('active'); }
        // })

        // var btns= document.querySelector('button');
        // var classes= btns.classList;

        // classes.toggle('active');
        // if(classes.contains('nav_btn_userInfo active')){
           
        //     for(var i=0; i<button.length; i++){ 
        //         button[i].removeClass('active');
        //         alert(jQuery(button[i]).attr('class'));
        // }}
        
        // else 
        // $(this).addClass('active');
        // alert(jQuery(this).attr('class'));   //가진 클래스명 확인
    // }

    
    // });  

    function retain_clicked_effect(){
        var div2 = document.getElementsByClassName("nav_btn_userInfo");
        function handleClick(event) {
            if (event.target.classList[1] === "clicked") event.target.classList.remove("clicked");
            else {
                for (var i = 0; i < div2.length; i++) div2[i].classList.remove("clicked");
                event.target.classList.add("clicked");
            }
        }
        function init() {
            for (var i = 0; i < div2.length; i++) div2[i].addEventListener("click", handleClick);
        }
        init();  
    }
          
}