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
  const [zoom, setZoom] = useState(4.7);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    //map.current.scrollZoom.disable();
    map.current.on("load", () => {
      map.current.addSource("project-polygon", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  "<span></span><h6>Municipio de Tapachula, Chiapas</h6><h1>Producción de Bonos de Carbono en Fincas Cafetaleras</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-92.31740713119507, 15.188183227403146],
                    [-92.31337308883667, 15.188183227403146],
                    [-92.31337308883667, 15.194540539032962],
                    [-92.31740713119507, 15.194540539032962],
                    [-92.31740713119507, 15.188183227403146],
                  ],
                ],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<span></span><h6>Municipio de Calakmul, Campeche y Municipio de Othon P. Blanco, Quintana Roo</h6><h1>Producción de bonos de carbono en Campeche y Quintana Roo</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-90, 17.81930071664984],
                    [-89.48776245117188, 17.81930071664984],
                    [-89.48776245117188, 18.41056376717653],
                    [-90, 18.41056376717653],
                    [-90, 17.81930071664984],
                  ],
                ],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<span></span><h6>Municipio de Marqués de Comillas, Chiapas</h6><h1>Producción de bonos de carbono en la Selva Lacandona</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-91.44401550292969, 17.258203517630033],
                    [-91.1260986328125, 17.258203517630033],
                    [-91.1260986328125, 17.395855498833168],
                    [-91.44401550292969, 17.395855498833168],
                    [-91.44401550292969, 17.258203517630033],
                  ],
                ],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<span></span><h6>CDMX, México</h6><h1>Broxel</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-99.17017221450806, 19.422340858428164],
                    [-99.16957139968872, 19.422340858428164],
                    [-99.16957139968872, 19.422583697229072],
                    [-99.17017221450806, 19.422583697229072],
                    [-99.17017221450806, 19.422340858428164],
                  ],
                ],
              },
            },
          ],
        },
      });

      // Add a new layer to visualize the polygon.
      map.current.addLayer({
        id: "project-polygon",
        type: "circle",
        source: "project-polygon", // reference the data source
        layout: {},
        paint: {
          "circle-radius": 17,
          "circle-color": "#373737",
        },
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        //closeOnMove: true,
        className: "popup",
        maxWidth: "423px",
        anchor: "center",
        maxZoom: 15,
        minZoom: 4,
        offset: 7,
        //focusAfterOpen: false,
      });

      // Change the cursor to a pointer when
      // the mouse is over the states layer.
      //map.current.scrollZoom.disable();
      map.current.on("mouseenter", "project-polygon", (e) => {
        map.current.getCanvas().style.cursor = "pointer";
        //e.preventDefault()
        popup
          .setLngLat(e.lngLat)
          .setHTML(e.features[0].properties.description)
          .addTo(map.current);
      });

      // Change the cursor back to a pointer
      // when it leaves the states layer.
      map.current.on("mouseleave", "project-polygon", (e) => {
        map.current.getCanvas().style.cursor = "";
        popup.remove();
      });
      /* const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        className: "popup",
        maxWidth: "423px",
        anchor: "center",
        focusAfterOpen: false,
      });

      map.current.on("mouseenter", "project-polygon", (e) => {
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

      map.current.on("mouseleave", "project-polygon", () => {
        map.current.getCanvas().style.cursor = "";
        //popup.remove();
      }); */
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
