"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "600px",
};
const center = {
  lat: 38.7783,
  lng: -90.4179,
};

export default function MyGoogleMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError)
    return <div className="py-28 flex justify-center">Error loading maps</div>;
  if (!isLoaded)
    return <div className="py-28 flex justify-center">Loading Maps</div>;

  return (
    <section className="container mx-auto mt-12">
      <div className="flex justify-center items-center px-5">
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={4}
          center={center}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
}
