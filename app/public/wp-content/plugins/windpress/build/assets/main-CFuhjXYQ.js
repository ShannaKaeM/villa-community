import { l as logger } from "./logger-DmkfWO2A.js";
const channel = new BroadcastChannel("windpress");
(function() {
  const __xhr = window.XMLHttpRequest;
  function XMLHttpRequest() {
    const xhr = new __xhr();
    const open = xhr.open;
    xhr.open = function(method, url) {
      if (method === "POST" && url.includes("v2/builderius")) {
        const onreadystatechange = xhr.onreadystatechange;
        xhr.onreadystatechange = function() {
          var _a, _b, _c, _d;
          if (xhr.readyState === 4 && xhr.status === 200) {
            try {
              const response = JSON.parse(xhr.responseText);
              if (((_b = (_a = response.commit_entity) == null ? void 0 : _a.errors) == null ? void 0 : _b.length) === 0 || ((_d = (_c = response.commit_global) == null ? void 0 : _c.errors) == null ? void 0 : _d.length) === 0) {
                channel.postMessage({
                  task: "generate-cache",
                  source: "windpress/integration",
                  target: "windpress/compiler",
                  data: {
                    kind: "incremental",
                    incremental: {
                      providers: [
                        "builderius"
                      ]
                    }
                  }
                });
              }
            } catch (err) {
              logger("Failed to intercept the response.", err, { module: "generate-cache" });
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
