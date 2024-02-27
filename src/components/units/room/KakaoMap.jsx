import useKakaoLoader from '@/hooks/useKakaoLoader';
import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import KakaoMapCircle from './KakaoMapCircle';
import Halfway from './Halfway';
import MapWithSearch from './MapWithSearch';
import styles from './KakaoMap.module.css';

const MARKERS = [
  { lat: 33.450705, lng: 126.570677 },
  { lat: 33.450936, lng: 126.569477 },
  { lat: 33.451979, lng: 126.56994 },
  { lat: 33.451393, lng: 126.570738 },
  { lat: 33.451493, lng: 126.571018 }
];

function KakaoMap({ viewPoint }) {
  const [loading, error] = useKakaoLoader();
  const [zoomLevel, setZoomLevel] = useState(3);
  // const [viewPoint, setViewPoint] = useState({ lat: 33.450701, lng: 126.570667 });

  if (loading) return <div>Loading</div>;

  return (
    <>
      {/* <MapWithSearch setViewPoint={setViewPoint} /> */}
      <Map
        center={viewPoint}
        className={styles.map}
        onZoomChanged={(map) => {
          const level = map.getLevel();
          setZoomLevel(level);
        }}
      >
        <Halfway markers={MARKERS} />
        <KakaoMapCircle center={viewPoint} zoomLevel={zoomLevel} />
      </Map>
    </>
  );
}

export default KakaoMap;
