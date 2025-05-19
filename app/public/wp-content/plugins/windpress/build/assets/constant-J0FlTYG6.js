const bde = document.querySelector("#app");
const bdeV = bde.__vue__;
const bdeIframe = document.querySelector("#app #iframe");
const bdeIframeCanvas = bdeIframe == null ? void 0 : bdeIframe.contentDocument.querySelector("#breakdance_canvas");
const bdeIframeV = bdeIframeCanvas.__vue__;
export {
  bde,
  bdeIframe,
  bdeIframeCanvas,
  bdeIframeV,
  bdeV
};
