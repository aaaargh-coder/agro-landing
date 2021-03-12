import React from "react";
import styled from "styled-components";
import { YMaps, Map as YMap } from 'react-yandex-maps';

const Map = () => (
  <YMaps>
    <StyledMap
      defaultState={{
        center: [54.516325, 36.241275],
        zoom: 17,
        options: {
          suppressMapOpenBlock: true,
          yandexMapDisablePoiInteractivity: true,
        }
      }} />
  </YMaps>
);

export default Map;

const StyledMap = styled(YMap)`
  width: 100%;
  height: 410px;
  filter: grayscale(0.9) opacity(0.8);
`;
