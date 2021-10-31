// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import "./Map.scss";
import circle from "../../img/circle.png";
import Popup from './Popup';
import ReactDOM from "react-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVsaXNzYTA3OTUiLCJhIjoiY2t2OXprOWVqYTgzeDJ3bnp4dmtzaG42byJ9.qakXOSV44SVXrge9AjoSiw";

function Mapp() {
  const mapContainer = useRef(null);
  //const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  const popUpRef = useRef(
    new mapboxgl.Popup({
      offset: 15,
      closeButton: false,
      closeOnClick: false,
      className: "popup",
      maxWidth: "423px",
      maxHeight: "355px",
      anchor: "right",
    })
  );
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
      map.current.addSource("project-polygon", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                id: "P001",
                location: "Municipio de Tapachula, Chiapas",
                name: "Producción de Bonos de Carbono en Fincas Cafetaleras",
                problem:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                id: "P002",
                location: "Municipio de Calakmul, Campeche y Municipio de Othon P. Blanco, Quintana Roo",
                name: "Producción de bonos de carbono en Campeche y Quintana Roo",
                problem:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                id: "P003",
                location: "Municipio de Marqués de Comillas, Chiapas",
                name: "Producción de bonos de carbono en la Selva Lacandon",
                problem:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                id: "P003",
                location: "CDMX, México",
                name: "Boxel",
                problem:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

      map.current.loadImage(circle, (error, image) => {
        if (error) throw error;
        map.current.addImage("custom-marker", image);
      });
      map.current.addLayer({
        id: "point",
        type: "symbol",
        source: "project-polygon",
        layout: {
          "icon-image": "custom-marker",
        },
        
      });

   
      map.current.on("click", (e) => {
        map.current.getCanvas().style.cursor = "";
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ["point"],
        });
        if (features.length > 0) {
          const feature = features[0];
          // create popup node
          const popupNode = document.createElement("div");
          ReactDOM.render(
            <Popup
              id={feature?.properties?.id}
              location={feature?.properties?.location}
              name={feature?.properties?.name}
              problem={feature?.properties?.problem}
            />,
            popupNode
          );
          popUpRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(popupNode)
            .addTo(map.current);
        }
      });
      map.current.on("mouseleave", "point", () => {
        map.current.getCanvas().style.cursor = "";
        popUpRef.current.remove();
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

  return <div ref={mapContainer} className="map-container"></div>;
}

export default Mapp;
