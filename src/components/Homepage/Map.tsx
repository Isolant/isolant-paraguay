"use client";

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''
  });

  const [map, setMap] = React.useState(null);

  const containerStyle = {
    width: '100%',
    height: '540px'
  };

  const center = {
    lat: -25.5582077,
    lng: -57.5009216
  };

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <section className="bg-gray-100 relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onUnmount={onUnmount}
      >
        <Marker
          label={{
            text: "Ruta Nueva Italia-Carapegua Km 6. Tacuruty, Villeta.",
            className: "shadow-lg bg-white p-2 rounded-lg text-gray-800 text-sm tracking-wider font-poppins-regularbg- hidden md:block md:absolute md:-top-2",
          }}
          position={center}
        />
      </GoogleMap>
    </section>
  ) : <></>
}

export default React.memo(Map);