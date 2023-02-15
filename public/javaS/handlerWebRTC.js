import * as wss from './wss.js';

export const sendPreOffer = (callType, calleePersonCode) => {
  const data = {
    callType,
    calleePersonCode,
  };
  wss.sendPreOffer(data);
};
