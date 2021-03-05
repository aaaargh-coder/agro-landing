import { useContext } from "react";
import styled from "styled-components";
import { UAContext } from "@quentin-sommer/react-useragent";

import {
  Header,
  Footer,
  Description,
  WhoInterested,
  Schedule,
  Registration,
  Map,
  AboutСonference,
  Hackathon,
  Participate,
  Partners,
} from "components";

import { getDeviceByUserAgent } from "utils/common";

export default function Home() {
  //const { uaResults } = useContext(UAContext);
  //const device = getDeviceByUserAgent(uaResults);

  return (
    <>
      <Header />
      <Description />
      <WhoInterested />
      <AboutСonference />
      <Hackathon />
      <Schedule />
      <Participate />
      <Partners />
      <Registration />
      <Map />
      <Footer />
    </>
  );
}
