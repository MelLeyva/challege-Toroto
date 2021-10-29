// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import "./map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVsaXNzYTA3OTUiLCJhIjoiY2t2OXprOWVqYTgzeDJ3bnp4dmtzaG42byJ9.qakXOSV44SVXrge9AjoSiw";

function Mapp() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-106.408);
  const [lat, setLat] = useState(23.2267);
  const [zoom, setZoom] = useState(4.6);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.scrollZoom.disable();
    map.current.on("load", () => {
      map.current.addSource("maine", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Producción de Bonos de Carbono en Fincas Cafetaleras</strong><p>Municipio de Tapachula, Chiapas</p><p>Municipio de Tapachula, Chiapas</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-92.31740713119507, 15.188183227403146]
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Producción de Bonos de Carbono en Fincas Cafetaleras</strong><p>Municipio de Tapachula, Chiapas</p><p>Municipio de Tapachula, Chiapas</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-90, 17.81930071664984]
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Producción de Bonos de Carbono en Fincas Cafetaleras</strong><p>Municipio de Tapachula, Chiapas</p><p>Municipio de Tapachula, Chiapas</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-91.44401550292969,17.258203517630033
                  ] 
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Producción de Bonos de Carbono en Fincas Cafetaleras</strong><p>Municipio de Tapachula, Chiapas</p><p>Municipio de Tapachula, Chiapas</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-99.17017221450806, 19.422340858428164],
              },
            }, 
          ]
        },
      });

      // Add a new layer to visualize the polygon.
      map.current.addLayer({
        id: "maine",
        type: "circle",
        source: "maine", // reference the data source
        layout: {},
        paint: {
          "circle-radius": 17,
          "circle-color": "#373737",
        },
        // filter: ["==", "$type", "Point"],
      });
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });
    
      map.current.on("mouseenter", "maine", (e) => {
        // Change the cursor style as a UI indicator.
        map.current.getCanvas().style.cursor = "pointer";
    
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
    
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
    
        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
      });
    
      map.current.on("mouseleave", "maine", () => {
        map.current.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  });
 
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }); 

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}

export default Mapp;
