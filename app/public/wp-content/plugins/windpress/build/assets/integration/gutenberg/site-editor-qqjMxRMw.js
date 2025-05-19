import { l as logger } from "../../logger-DmkfWO2A.js";
import { d as debounce } from "../../../chunks/debounce-CsAwOwoC.min.js";
import "../../../chunks/isObject-8EXUDN8T.min.js";
logger("Loading...");
(async () => {
  let rootContainer;
  let scriptElements;
  logger("waiting for the rootContainer...");
  while (!rootContainer) {
    rootContainer = document.querySelector("div#site-editor");
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  logger("finding WindPress script...");
  let timeoutOccurred = false;
  let timeout = setTimeout(() => {
    timeoutOccurred = true;
  }, 45e3);
  while (!timeoutOccurred) {
    scriptElements = document.querySelectorAll("script");
    scriptElements = Array.from(scriptElements).filter((scriptElement) => {
      let id = scriptElement.getAttribute("id");
      return id && (id.startsWith("windpress:") || id.startsWith("vite-client")) && !id.startsWith("windpress:integration-");
    });
    if (scriptElements.length > 0) {
      clearTimeout(timeout);
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (timeoutOccurred) {
    logger("time out! failed to find WindPress script");
    return;
  }
  logger("found WindPress script");
  async function injectIntoEditorCanvas() {
    let patternIframes = [];
    let timeoutOccurred2 = false;
    let timeout2 = setTimeout(() => {
      timeoutOccurred2 = true;
    }, 45e3);
    while (!timeoutOccurred2) {
      let editorCanvas = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
      patternIframes = [
        ...document.querySelectorAll("div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe")
      ];
      if (editorCanvas) {
        patternIframes.push(editorCanvas);
      }
      if (patternIframes.length > 0) {
        clearTimeout(timeout2);
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (timeoutOccurred2) {
      logger("time out! failed to find editor canvas");
      return;
    }
    logger("found editor canvas");
    logger("waiting for the canvas loader to be removed...");
    while (document.querySelector("div.edit-site-canvas-loader") !== null) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    logger("canvas loader removed");
    patternIframes.forEach(async (patternIframe) => {
      let contentWindow = patternIframe.contentWindow || patternIframe;
      let contentDocument = patternIframe.contentDocument || contentWindow.document;
      while (!contentDocument.head) {
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      logger("injecting WindPress script into the root container");
      let injectedScript = contentDocument.querySelectorAll("script");
      let isScriptInjected = Array.from(injectedScript).some((script) => {
        let id = script.getAttribute("id");
        return id && id.startsWith("windpress:");
      });
      if (!isScriptInjected) {
        logger("starting the root injection process...");
        scriptElements.forEach((scriptElement) => {
          contentDocument.head.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
        });
      } else {
        logger("WindPress script is already injected, skipping the injection process...");
      }
    });
  }
  const injectIntoEditorCanvasDebounced = debounce(injectIntoEditorCanvas, 1e3);
  new MutationObserver(() => {
    injectIntoEditorCanvasDebounced();
  }).observe(rootContainer, {
    subtree: true,
    childList: true
  });
})();
