 var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(37.5663, 126.9779), //지도의 중심좌표 - 내위치로 바꾸기
                level: 4
            };

            var map = new kakao.maps.Map(container, options);

            // 지도에 마커와 인포윈도우를 표시하는 함수입니다
            function displayMarker(locPosition, message) {

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: locPosition
                });

                var iwContent = message, // 인포윈도우에 표시할 내용
                    iwRemoveable = true;

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable
                });

                // 인포윈도우를 마커위에 표시합니다 
                infowindow.open(map, marker);

                // 지도 중심좌표를 접속위치로 변경합니다
                map.setCenter(locPosition);
            }

            // 마커 표시 - 자전거 보관소
            var positions = [
                {
                    title: "102. 망원역 1번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55564880, 126.91062927)
                },
                {
                    title: "103. 망원역 2번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55495071, 126.91083527)
                },
                {
                    title: "104. 합정역 1번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55062866, 126.91083527)
                },
                {
                    title: "105. 합정역 5번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55000687, 126.91482544)
                },
                {
                    title: "106. 합정역 7번출구 앞",
                    latlng: new kakao.maps.LatLng(37.54864502, 126.91282654)
                },
                {
                    title: "107. 신한은행 서교동지점",
                    latlng: new kakao.maps.LatLng(37.55751038, 126.91850281)
                },
                {
                    title: "108. 서교동 사거리",
                    latlng: new kakao.maps.LatLng(37.55274582, 126.91861725)
                },
                {
                    title: "109. 제일빌딩 앞",
                    latlng: new kakao.maps.LatLng(37.54769135, 126.91998291)
                },
                {
                    title: "111. 상수역 2번출구 앞",
                    latlng: new kakao.maps.LatLng(37.54787064, 126.92353058)
                },
                {
                    title: "112. 극동방송국 앞",
                    latlng: new kakao.maps.LatLng(37.54920197, 126.92320251)
                },
                {
                    title: "113. 홍대입구역 2번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55743790, 126.92382050)
                },
                {
                    title: "114. 홍대입구역 8번출구 앞",
                    latlng: new kakao.maps.LatLng(37.55706024, 126.92442322)
                },
                {
                    title: "115. 마스타 빌딩 앞",
                    latlng: new kakao.maps.LatLng(37.55893326, 126.92711639)
                },
                {
                    title: "116. 일진아이윌아파트 옆",
                    latlng: new kakao.maps.LatLng(37.56454086, 126.92707062)
                },
                {
                    title: "117. 홍은사거리",
                    latlng: new kakao.maps.LatLng(37.59115982, 126.94132996)
                },
                {
                    title: "118. 광흥창역 2번출구 앞",
                    latlng: new kakao.maps.LatLng(37.54773331, 126.93176270)
                },
                {
                    title: "119. 서강나루 공원",
                    latlng: new kakao.maps.LatLng(37.54528427, 126.93105316)
                },
                {
                    title: "120. 신수동 사거리",
                    latlng: new kakao.maps.LatLng(37.54524231, 126.93411255)
                },
                {
                    title: "121. 마포소방서 앞",
                    latlng: new kakao.maps.LatLng(37.54976654, 126.93317413)
                },
                {
                    title: "122. 신성기사식당 앞",
                    latlng: new kakao.maps.LatLng(37.54745865, 126.93837738)
                }
            ];

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            for (var i = 0; i < positions.length; i++) {

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage // 마커 이미지 
                });
            }

            var mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



            ////////////////////////////////////////////////////////////////////////////////////////////////내위치 마커



            marker.setMap(map);