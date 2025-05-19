import { l as logger } from "./logger-DmkfWO2A.js";
import { iframeScope } from "./constant-DULjF_Zq.js";
const channel = new BroadcastChannel("windpress");
const originalAllSaved = iframeScope.allSaved;
iframeScope.allSaved = function() {
  originalAllSaved.apply(this, arguments);
  channel.postMessage({
    task: "generate-cache",
    source: "windpress/integration",
    target: "windpress/compiler",
    data: {
      kind: "incremental",
      incremental: {
        providers: [
          "oxygen-classic"
        ]
      }
    }
  });
};
logger("Module loaded!", { module: "generate-cache" });
