// @ts-ignore
const mbConfig = window.mbConfig || {};

export const hostname =
  window.location.hostname !== mbConfig.externalHostName &&
  window.location.hostname !== mbConfig.internalHostName
    ? mbConfig.externalHostName
    : window.location.hostname;

export const isExternal =
  window.location.hostname === mbConfig.externalHostName;
export const apiBasename = `https://${hostname || 'mb.design'}`;
