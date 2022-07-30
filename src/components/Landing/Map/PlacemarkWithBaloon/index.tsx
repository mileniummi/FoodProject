import React from "react";
import * as ReactDOMServer from "react-dom/server";
import Balloon from "../Balloon";
import { Placemark } from "@pbe/react-yandex-maps";
import { IPlacemark } from "../../../../types/placemark";

const PlacemarkWithBalloon: React.FC<{ placemark: IPlacemark }> = ({
  placemark,
}) => {
  return (
    <Placemark
      geometry={[placemark.coords.x, placemark.coords.y]}
      properties={{
        balloonContentBody: ReactDOMServer.renderToString(
          <Balloon
            title={placemark.title}
            subtitle={placemark.subtitle}
            img={placemark.img}
          />
        ),
      }}
    />
  );
};

export default PlacemarkWithBalloon;
