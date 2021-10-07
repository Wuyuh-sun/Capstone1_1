var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = { 
                center: new kakao.maps.LatLng(35.907035936842696, 128.80112971761335), // 지도의 중심좌표
                level: 2 // 지도의 확대 레벨
            };
        
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            
        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions = [{
                title: '본관', 
                latlng: new kakao.maps.LatLng(35.90655782538247, 128.80167401011386)
            },
            {
                title: '5호관', 
                latlng: new kakao.maps.LatLng(35.90683156254508, 128.8029775635753)
            },
            {
                title: '6호관', 
                latlng: new kakao.maps.LatLng(35.90830451292517, 128.8027468936212)
            },
            {
                title: '8호관',
                latlng: new kakao.maps.LatLng(35.908838939469995, 128.80229628254813)
            },
            {
                title: '대강당',
                latlng: new kakao.maps.LatLng(35.90769187317713, 128.8015023487527)
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
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
        }