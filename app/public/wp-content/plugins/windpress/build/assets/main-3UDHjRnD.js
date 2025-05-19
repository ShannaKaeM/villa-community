import { l as logger } from "./logger-DmkfWO2A.js";
const channel = new BroadcastChannel("windpress");
(function() {
  const __xhr = window.XMLHttpRequest;
  function XMLHttpRequest() {
    const xhr = new __xhr();
    const open = xhr.open;
    xhr.open = function(method, url) {
      if (method === "POST" && url.includes("admin-ajax.php")) {
        const onreadystatechange = xhr.onreadystatechange;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === "Save") {
              channel.postMessage({
                task: "generate-cache",
                source: "windpress/integration",
                target: "windpress/compiler",
                data: {
                  kind: "incremental",
                  incremental: {
                    providers: [
                      "livecanvas"
                    ]
                  }
                }
              });
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
