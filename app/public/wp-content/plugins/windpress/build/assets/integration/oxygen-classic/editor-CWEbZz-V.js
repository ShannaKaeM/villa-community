const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../../main-IxheNOsV.css","../../main-BBLZkpfq.css","../../main-Bm2Y7407.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../../../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "../../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a;
    while (angular.element(window.top.document.body).scope() === void 0 || angular.element(window.top.document.body).scope().iframeScope === false) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const { oxyIframe } = await __vitePreload(async () => {
      const { oxyIframe: oxyIframe2 } = await import("../../constant-DULjF_Zq.js");
      return {
        oxyIframe: oxyIframe2
      };
    }, true ? [] : void 0, import.meta.url);
    logger("Loading modules...");
    await __vitePreload(() => import("../../main-CHAgCgw9.js"), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
    await __vitePreload(() => import("../../main-B7u_MXrp.js").then(async (m) => {
      await m.__tla;
      return m;
    }), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
    await __vitePreload(() => import("../../main-BZuEWZPi.js"), true ? [] : void 0, import.meta.url);
    if (Number((_a = oxyIframe.contentWindow.windpress) == null ? void 0 : _a._tailwindcss_version) === 4) {
      await __vitePreload(() => import("../../main-CMXiRcwt.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../../main-CsCg325N.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? __vite__mapDeps([2]) : void 0, import.meta.url);
    }
    logger("Modules loaded!");
  })();
})();
