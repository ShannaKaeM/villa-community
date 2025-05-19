import { _ as __vitePreload } from "../../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a;
    while (!((_a = document.getElementById("previewiframe")) == null ? void 0 : _a.contentDocument.querySelector("#theme-main"))) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    logger("Loading modules...");
    await __vitePreload(() => import("../main-3UDHjRnD.js"), true ? [] : void 0, import.meta.url);
    logger("Modules loaded!");
  })();
})();
