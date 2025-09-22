import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  return (
    <Map
      center={{ lat: 35.878169, lng: 128.673931 }}
      style={{ maxWidth: "1024px", width: "100%", height: "600px" }}
      level={3}
    >
      <MapMarker position={{ lat: 35.878169, lng: 128.673931 }}>
        {/* <div style={{ padding: "5px", color: "#000" }}>여기입니다 🚩</div> */}
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
