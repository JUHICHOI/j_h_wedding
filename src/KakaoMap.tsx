import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./wedding.css";

function KakaoMap() {
  return (
    <Map
      center={{ lat: 35.878169, lng: 128.673931 }}
      className="kakao-map"
      level={4}
    >
      <MapMarker position={{ lat: 35.878169, lng: 128.673931 }}>
        {/* <div style={{ padding: "5px", color: "#000" }}>여기입니다</div> */}
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
