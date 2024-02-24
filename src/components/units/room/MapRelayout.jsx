import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useRef, useState } from "react"

export default function MapRelayout() {
  useKakaoLoader()
  const mapRef = useRef < kakao.maps.Map | null > (null)

  const [mapSize, setMapSize] = useState({
    width: "100%",
    height: "350px",
  })

  const resizeMap = () => {
    setMapSize({
      width: "650px",
      height: "650px",
    })
  }
  const relayout = () => {
    mapRef.current?.relayout()
  }

  return (
    <>
      <Map
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={mapSize}
        level={3}
        ref={mapRef}
      />
      <p>
        <button onClick={resizeMap}>지도 크기 바꾸기</button>{" "}
        <button onClick={relayout}>relayout 호출하기</button>
      </p>
    </>
  )
}
