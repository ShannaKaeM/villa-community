const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-6eDmxEqp.css","../main-ZtE-zJr7.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a, _b;
    while (!((_a = document.getElementById("builderInner")) == null ? void 0 : _a.contentDocument.querySelector("#builderiusBuilder"))) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const { uniIframe } = await __vitePreload(async () => {
      const { uniIframe: uniIframe2 } = await import("../constant-DeVUt7A7.js");
      return {
        uniIframe: uniIframe2
      };
    }, true ? [] : void 0, import.meta.url);
    logger("Loading modules...");
    await __vitePreload(() => import("../main-CrMOAvWx.js"), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
    await __vitePreload(() => import("../main-CFuhjXYQ.js"), true ? [] : void 0, import.meta.url);
    if (Number((_b = uniIframe.contentWindow.windpress) == null ? void 0 : _b._tailwindcss_version) === 4) {
      await __vitePreload(() => import("../main-CjgJz1XI.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../main-B_f_KqKI.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../main-DGS7oeZ8.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
    }
    logger("Modules loaded!");
  })();
})();
