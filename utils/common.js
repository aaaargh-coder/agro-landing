export const getDeviceByUserAgent = (uaResults) => {
  const devices = {
    mobile: uaResults.mobile,
    tablet: uaResults.tablet,
    computer: uaResults.computer,
  };

  for (let key in devices) {
    if (devices[key]) return key;
  }
};
