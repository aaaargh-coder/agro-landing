import React from 'react';

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

export default function Home() {
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
