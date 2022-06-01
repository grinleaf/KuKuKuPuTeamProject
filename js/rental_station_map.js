var container = document.getElementById('map');
var options = { 
    center : new kakao.maps.LatLng(37.5663, 126.9779), //지도의 중심좌표 - 내위치로 바꾸기
    level: 4 
};
        
var map = new kakao.maps.Map(container, options);

// 마커 표시 - 자전거 보관소
var markerPosition  = new kakao.maps.LatLng(37.5663, 126.9779); 
        
var marker = new kakao.maps.Marker({
    position: markerPosition
});
        
marker.setMap(map); 
