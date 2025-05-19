import { l as logger } from "../../logger-DmkfWO2A.js";
logger("Loading...");
(async () => {
  let rootContainer;
  let scriptElements;
  logger("waiting for the rootContainer...");
  while (!rootContainer) {
    rootContainer = document.querySelector('iframe[name="editor-canvas"]');
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
  let contentWindow = rootContainer.contentWindow || rootContainer;
  let contentDocument = rootContainer.contentDocument || contentWindow.document;
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
  let modalPatterPreviewOverlay = null;
  const patterPreviewOverlayObserver = new MutationObserver(async (mutationsList) => {
    console.log("patterPreviewOverlayObserver started");
    let needInject = false;
    let patternIframes = [];
    let waitingTry = 2e3;
    for (const mutation of mutationsList) {
      if (needInject) {
        break;
      }
      if (mutation.type === "childList") {
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches("div.components-modal__screen-overlay")) {
            modalPatterPreviewOverlay = null;
          }
        });
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches("body > div.components-modal__screen-overlay")) {
            modalPatterPreviewOverlay = node;
            needInject = true;
          }
        });
      }
    }
    if (needInject) {
      logger("waiting for the patternIframes...");
      while (patternIframes.length === 0 && waitingTry > 0) {
        patternIframes = modalPatterPreviewOverlay.querySelectorAll("div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe");
        waitingTry -= 100;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (waitingTry <= 0 && patternIframes.length === 0) {
        logger("time out! failed to find the patternIframes");
        return;
      }
      patternIframes.forEach((patternIframe) => {
        let patternIframeDocument = patternIframe.contentDocument || patternIframe.contentWindow.document;
        let patternIframeHead = patternIframeDocument.head;
        let isPatternIframeScriptInjected = Array.from(patternIframeHead.querySelectorAll("script")).some((script) => {
          let id = script.getAttribute("id");
          return id && id.startsWith("windpress:");
        });
        if (!isPatternIframeScriptInjected) {
          logger("injecting WindPress script into the pattern iframe");
          scriptElements.forEach((scriptElement) => {
            patternIframeHead.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
          });
        } else {
          logger("WindPress script is already injected into the pattern iframe, skipping the injection process...");
        }
      });
      patternIframes = [];
    }
  });
  patterPreviewOverlayObserver.observe(document.body, {
    childList: true,
    subtree: false
  });
  let sidebarPatterPreviewPanel = null;
  const patternPreviewSidebarObserver = new MutationObserver(async (mutationsList) => {
    console.log("patternPreviewSidebarObserver started");
    let needInject = false;
    let patternIframes = [];
    let waitingTry = 2e4;
    for (const mutation of mutationsList) {
      if (needInject) {
        break;
      }
      if (mutation.type === "childList") {
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches("div.block-editor-inserter__category-panel")) {
            sidebarPatterPreviewPanel = null;
          }
        });
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.matches("div.block-editor-inserter__category-panel")) {
            sidebarPatterPreviewPanel = node;
            needInject = true;
          }
        });
      }
    }
    if (needInject) {
      logger("waiting for the patternIframes...");
      while (patternIframes.length === 0 && waitingTry > 0) {
        patternIframes = sidebarPatterPreviewPanel.querySelectorAll("div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe");
        waitingTry -= 100;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (waitingTry <= 0 && patternIframes.length === 0) {
        logger("time out! failed to find the patternIframes");
        return;
      }
      patternIframes.forEach((patternIframe) => {
        let patternIframeDocument = patternIframe.contentDocument || patternIframe.contentWindow.document;
        let patternIframeHead = patternIframeDocument.head;
        let isPatternIframeScriptInjected = Array.from(patternIframeHead.querySelectorAll("script")).some((script) => {
          let id = script.getAttribute("id");
          return id && id.startsWith("windpress:");
        });
        if (!isPatternIframeScriptInjected) {
          logger("injecting WindPress script into the pattern iframe");
          scriptElements.forEach((scriptElement) => {
            patternIframeHead.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
          });
        } else {
          logger("WindPress script is already injected into the pattern iframe, skipping the injection process...");
        }
      });
      patternIframes = [];
    }
  });
  patternPreviewSidebarObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
