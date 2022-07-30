import React from "react";
import MapHeader from "./MapHeader";
import { YMaps, Map as YMap } from "@pbe/react-yandex-maps";
import PlaceMarks from "./Placemarks";
import PlacemarkWithBalloon from "./PlacemarkWithBaloon";

const mapState = { center: [59.95057279645624, 30.317382784985163], zoom: 11 };

const Map = () => {
  return (
    <>
      <MapHeader />
      <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
        <YMap state={mapState} height={655} width={"100%"}>
          {PlaceMarks.map((placemark, index) => (
            <PlacemarkWithBalloon key={index} placemark={placemark} />
          ))}
        </YMap>
      </YMaps>
    </>
  );
};

export default Map;
