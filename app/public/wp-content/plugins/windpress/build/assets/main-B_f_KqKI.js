import { l as logger } from "./logger-DmkfWO2A.js";
import { uniIframe } from "./constant-DeVUt7A7.js";
import { d as decodeVFSContainer } from "./vfs-lutpnTRW.js";
import "../chunks/index-DEmRqKf2.min.js";
import { __tla as __tla_0 } from "./cssesc-Du71EH2f.js";
import { __tla as __tla_1 } from "../chunks/index-DBlFvDtH.min.js";
import { d as getVariableList } from "./intellisense-BEc_adN-.js";
import { l as loadDesignSystem } from "./design-system-Ceng1RfT.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-18UIQydn.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-C0QLwsRC.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  function naturalExpand(value, total = null) {
    const length = typeof total === "number" ? total.toString().length : 8;
    return ("0".repeat(length) + value).slice(-length);
  }
  (async function() {
    const vfsContainer = uniIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
    const volume = decodeVFSContainer(vfsContainer.textContent);
    window.Builderius.API.monaco.languages.registerCompletionItemProvider("builderius-css", {
      async provideCompletionItems(model, position) {
        const wordInfo = model.getWordUntilPosition(position);
        const variables = getVariableList(await loadDesignSystem({
          volume
        })).map((entry) => {
          return {
            kind: entry.key.includes("--color") ? window.Builderius.API.monaco.languages.CompletionItemKind.Color : window.Builderius.API.monaco.languages.CompletionItemKind.Variable,
            label: entry.key,
            insertText: entry.key,
            detail: entry.value,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: wordInfo.startColumn,
              endLineNumber: position.lineNumber,
              endColumn: wordInfo.endColumn
            },
            sortText: naturalExpand(entry.index)
          };
        });
        return {
          suggestions: variables
        };
      }
    });
  })();
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/autocomplete";
    const task = "windpress.code-editor.saved.done";
    if (data.source === source && data.task === task) {
      setTimeout(() => {
      }, 1e3);
    }
  });
  logger("Module loaded!", {
    module: "generate-cache"
  });
});
