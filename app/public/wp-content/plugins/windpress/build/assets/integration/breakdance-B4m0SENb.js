const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-VD-g3_zn.css","../main-aEUqWhZI.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a, _b, _c;
    while (!((_a = document.querySelector("#app")) == null ? void 0 : _a.__vue__)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    while (!((_b = document.querySelector("#app #iframe")) == null ? void 0 : _b.contentDocument.querySelector("#breakdance_canvas"))) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const { bdeIframe } = await __vitePreload(async () => {
      const { bdeIframe: bdeIframe2 } = await import("../constant-J0FlTYG6.js");
      return {
        bdeIframe: bdeIframe2
      };
    }, true ? [] : void 0, import.meta.url);
    logger("Loading modules...");
    await __vitePreload(() => import("../main-BMtcFQvi.js").then(async (m) => {
      await m.__tla;
      return m;
    }), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
    await __vitePreload(() => import("../main-D822kQEw.js"), true ? [] : void 0, import.meta.url);
    if (Number((_c = bdeIframe.contentWindow.windpress) == null ? void 0 : _c._tailwindcss_version) === 4) {
      await __vitePreload(() => import("../main-PAJDBp25.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../main-Cd-UtGKh.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
    }
    logger("Modules loaded!");
  })();
})();
