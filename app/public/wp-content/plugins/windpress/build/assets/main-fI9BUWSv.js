import { l as logger } from "./logger-DmkfWO2A.js";
import { settingsState } from "./constant-DM2svGm2.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
const channel = new BroadcastChannel("windpress");
(function() {
  const __xhr = window.XMLHttpRequest;
  function XMLHttpRequest() {
    const xhr = new __xhr();
    if (!settingsState("module.generate-cache.on-save", true).value) {
      return xhr;
    }
    const open = xhr.open;
    xhr.open = function(method, url) {
      if (method === "POST" && url.includes("admin-ajax.php")) {
        const onreadystatechange = xhr.onreadystatechange;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.data && response.data.action) {
              if (response.data.action === "bricks_save_post") {
                channel.postMessage({
                  task: "generate-cache",
                  source: "windpress/integration",
                  target: "windpress/compiler",
                  data: {
                    kind: "incremental",
                    incremental: {
                      providers: [
                        "bricks"
                      ]
                    }
                  }
                });
              }
            }
          }
          if (onreadystatechange) {
            onreadystatechange.apply(this, arguments);
          }
        };
      }
      open.apply(this, arguments);
    };
    return xhr;
  }
  window.XMLHttpRequest = XMLHttpRequest;
})();
logger("Module loaded!", { module: "generate-cache" });
