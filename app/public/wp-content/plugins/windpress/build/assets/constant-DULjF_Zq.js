const oxygenScope = angular.element(document.body).scope();
const iframeScope = oxygenScope.iframeScope;
const oxyIframe = document.querySelector("#ct-artificial-viewport");
window.oxygenScope = oxygenScope;
export {
  iframeScope,
  oxyIframe,
  oxygenScope
};
