import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { n, T as Tribute, t as tippy, f as followCursor, H as HighlightInTextarea } from "./highlight-in-textarea-B3EH7WgD.js";
import { iframeScope, oxyIframe, oxygenScope } from "./constant-DULjF_Zq.js";
import { d as debounce } from "../chunks/debounce-CsAwOwoC.min.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../chunks/index-C1eb-OTL.min.js";
import { r as ref, j as watch, n as nextTick } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
(async () => {
  let shikiHighlighter = null;
  (async () => {
    shikiHighlighter = await createHighlighterCore({
      themes: [
        __vitePreload(() => import("../chunks/dark-plus-DP7-e98C.min.js"), true ? [] : void 0, import.meta.url),
        __vitePreload(() => import("../chunks/light-plus-D6etIKYp.min.js"), true ? [] : void 0, import.meta.url)
      ],
      langs: [
        __vitePreload(() => import("../chunks/css-NxIBojpu.min.js"), true ? [] : void 0, import.meta.url)
      ],
      engine: createOnigurumaEngine(__vitePreload(() => import("../chunks/wasm-CmTHlobv.min.js"), true ? [] : void 0, import.meta.url))
    });
  })();
  const textInput = document.createRange().createContextualFragment(`
    <textarea id="windpressoxygen-plc-input" class="windpressoxygen-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector("#windpressoxygen-plc-input");
  const containerAction = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(".windpressoxygen-plc-action-container");
  const containerActionButtons = containerAction.querySelector(".actions");
  const classSortButton = document.createRange().createContextualFragment(`
        <span id="windpressoxygen-plc-class-sort" class="oxygen-svg-wrapper windpressoxygen-plc-class-sort">
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="oxygen-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
        </span>
`).querySelector("#windpressoxygen-plc-class-sort");
  containerActionButtons.appendChild(classSortButton);
  const visibleElementPanel = ref(false);
  const activeElementId = ref(null);
  let hit = null;
  n(textInput);
  let autocompleteItems = [];
  wp.hooks.addAction("windpressoxygen-autocomplete-items-refresh", "windpressoxygen", () => {
    autocompleteItems = wp.hooks.applyFilters("windpressoxygen-autocomplete-items", [], textInput.value);
  });
  wp.hooks.doAction("windpressoxygen-autocomplete-items-refresh");
  const tribute = new Tribute({
    containerClass: "windpressoxygen-tribute-container",
    autocompleteMode: true,
    menuItemLimit: 40,
    noMatchTemplate: "",
    values: async function(text, cb) {
      const filters = await wp.hooks.applyFilters("windpressoxygen-autocomplete-items-query", autocompleteItems, text);
      cb(filters);
    },
    lookup: "value",
    itemClass: "class-item",
    menuItemTemplate: function(item) {
      let customStyle = "";
      if (item.original.color !== void 0) {
        customStyle += `background-color: ${item.original.color};`;
      }
      if (item.original.fontWeight !== void 0) {
        customStyle += `font-weight: ${item.original.fontWeight};`;
      }
      return `
            <span class="class-name" data-tribute-class-name="${item.original.value}">${item.string}</span>
            <span class="class-hint" style="${customStyle}"></span>
        `;
    }
  });
  tribute.setMenuContainer = function(el) {
    this.menuContainer = el;
  };
  const tributeEventCallbackOrigFn = tribute.events.callbacks;
  tribute.events.callbacks = function() {
    return {
      ...tributeEventCallbackOrigFn.call(this),
      up: (e, el) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e.preventDefault();
          e.stopPropagation();
          let count = this.tribute.current.filteredItems.length, selected = this.tribute.menuSelected;
          if (count > selected && selected > 0) {
            this.tribute.menuSelected--;
            this.setActiveLi();
          } else if (selected === 0) {
            this.tribute.menuSelected = count - 1;
            this.setActiveLi();
            this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight;
          }
          previewTributeEventCallbackUpDown();
        }
      },
      down: (e, el) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e.preventDefault();
          e.stopPropagation();
          let count = this.tribute.current.filteredItems.length - 1, selected = this.tribute.menuSelected;
          if (count > selected) {
            this.tribute.menuSelected++;
            this.setActiveLi();
          } else if (count === selected) {
            this.tribute.menuSelected = 0;
            this.setActiveLi();
            this.tribute.menu.scrollTop = 0;
          }
          previewTributeEventCallbackUpDown();
        }
      }
    };
  };
  tribute.attach(textInput);
  const observerPanel = new MutationObserver(function(mutations) {
    visibleElementPanel.value = !mutations[0].target.classList.contains("ng-hide");
  });
  observerPanel.observe(document.querySelector(".oxygen-sidebar-currently-editing"), {
    attributes: true,
    attributeFilter: [
      "class"
    ]
  });
  const originalActivateComponent = iframeScope.activateComponent;
  iframeScope.activateComponent = function(id, componentName, $event) {
    originalActivateComponent(id, componentName, $event);
    activeElementId.value = iframeScope.component.active.id;
  };
  function setPlainClassAttribute(newVal) {
    const componentId = iframeScope.component.active.id;
    const componentName = iframeScope.component.active.name;
    if (componentId === 0) {
      return;
    }
    const activeComponent = iframeScope.component.options[componentId];
    if (activeComponent.model === void 0) {
      return;
    }
    if (activeComponent.model["custom-attributes"] === void 0) {
      oxygenScope.addCustomAttribute("plainclass", newVal);
    }
    const custAttrs = activeComponent.model["custom-attributes"];
    const plainclassAttr = custAttrs.find((attr) => attr.name === "plainclass");
    if (plainclassAttr) {
      plainclassAttr.value = newVal;
    } else {
      custAttrs.push({
        name: "plainclass",
        value: newVal
      });
    }
    iframeScope.component.options[componentId].model["custom-attributes"] = custAttrs;
    iframeScope.setOption(componentId, componentName, "custom-attributes");
    iframeScope.applyCustomAttributes(componentId);
  }
  watch([
    activeElementId,
    visibleElementPanel
  ], (newVal, oldVal) => {
    if (newVal[0] !== oldVal[0]) {
      nextTick(() => {
        var _a;
        const componentId = iframeScope.component.active.id;
        if (componentId === 0) {
          return;
        }
        const activeComponent = iframeScope.component.options[componentId];
        if (activeComponent.model === void 0) {
          return;
        }
        if (activeComponent.model["custom-attributes"] === void 0) {
          oxygenScope.addCustomAttribute("plainclass", "");
        }
        const custAttrs = activeComponent.model["custom-attributes"];
        textInput.value = ((_a = custAttrs == null ? void 0 : custAttrs.find((attr) => attr.name === "plainclass")) == null ? void 0 : _a.value) || "";
        onTextInputChanges();
      });
    }
    if (newVal[0] && newVal[1]) {
      nextTick(() => {
        const panelElementClassesEl = document.querySelector(".oxygen-sidebar-currently-editing");
        if (panelElementClassesEl.querySelector(".windpressoxygen-plc-input") === null) {
          panelElementClassesEl.appendChild(containerAction);
          window.tippy(".windpressoxygen-plc-class-sort", {
            content: "Automatic Class Sorting",
            animation: "shift-toward",
            placement: "right"
          });
          panelElementClassesEl.appendChild(textInput);
          hit = new HighlightInTextarea(textInput, {
            highlight: [
              {
                highlight: new RegExp("(?<=\\s|^)(?:(?!\\s).)+(?=\\s|$)", "g"),
                className: "word"
              },
              {
                highlight: new RegExp("(?<=\\s)\\s", "g"),
                className: "multispace",
                blank: true
              }
            ]
          });
          n.update(textInput);
        }
      });
    }
  });
  textInput.addEventListener("input", function(e) {
    setPlainClassAttribute(e.target.value);
  });
  function onTextInputChanges() {
    nextTick(() => {
      try {
        hit.handleInput();
      } catch (error) {
      }
      n.update(textInput);
      tribute.hideMenu();
    });
  }
  textInput.addEventListener("highlights-updated", function(e) {
    hoverPreviewProvider();
  });
  let tippyInstance = tippy(document.createElement("div"), {
    plugins: [
      followCursor
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: "manual"
  });
  function hoverPreviewProvider() {
    const hitContainerEl = document.querySelector(".hit-container");
    if (hitContainerEl === null) {
      return;
    }
    tippyInstance.reference = hitContainerEl;
    async function showTippy(markWordElement) {
      const classname = markWordElement.textContent;
      const generatedCssCode = await oxyIframe.contentWindow.windpress.module.classnameToCss.generate(classname);
      if (generatedCssCode === null || generatedCssCode.trim() === "") {
        return null;
      }
      tippyInstance.setContent(shikiHighlighter.codeToHtml(generatedCssCode, {
        lang: "css",
        theme: "dark-plus"
      }));
      tippyInstance.show();
    }
    const currentMarkWordElement = ref(null);
    const debouncedMousemoveHandler = debounce(function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const elements = document.elementsFromPoint(x, y);
      const firstMarkWordElement = elements.find((element) => {
        return element.matches('mark[class="word"]');
      });
      currentMarkWordElement.value = firstMarkWordElement || null;
    }, 10);
    hitContainerEl.addEventListener("mousemove", debouncedMousemoveHandler);
    hitContainerEl.addEventListener("mouseleave", function(event) {
      debouncedMousemoveHandler.cancel();
      currentMarkWordElement.value = null;
    });
    watch(currentMarkWordElement, (newVal, oldVal) => {
      if (newVal && newVal !== oldVal) {
        showTippy(newVal);
      } else {
        tippyInstance.hide();
      }
    });
  }
  const observerAutocomplete = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          node.addEventListener("mouseenter", (e) => {
            const className = node.querySelector(".class-name").dataset.tributeClassName;
            previewAddClass(className);
          });
          node.addEventListener("mouseleave", (e) => {
            previewResetClass();
          });
          node.addEventListener("click", (e) => {
            previewResetClass();
          });
        });
      }
    });
  });
  let menuAutocompleteItemeEl = null;
  textInput.addEventListener("tribute-active-true", function(e) {
    if (menuAutocompleteItemeEl === null) {
      menuAutocompleteItemeEl = document.querySelector(".windpressoxygen-tribute-container>ul");
    }
    nextTick(() => {
      if (menuAutocompleteItemeEl) {
        observerAutocomplete.observe(menuAutocompleteItemeEl, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: [
            "class"
          ]
        });
      }
    });
  });
  classSortButton.addEventListener("click", async function(e) {
    textInput.value = await oxyIframe.contentWindow.windpress.module.classSorter.sort(textInput.value);
    setPlainClassAttribute(textInput.value);
    onTextInputChanges();
  });
  function previewAddClass(className) {
    postMessageToIframe({
      action: "windpressoxygen-preview-class",
      do: "add",
      elementId: activeElementId.value,
      className
    });
  }
  function previewResetClass() {
    postMessageToIframe({
      action: "windpressoxygen-preview-class",
      do: "remove"
    });
  }
  function previewTributeEventCallbackUpDown() {
    nextTick(() => {
      let li = tribute.menu.querySelector("li.highlight>span.class-name");
      previewAddClass(li.dataset.tributeClassName);
    });
  }
  function postMessageToIframe(data) {
    oxyIframe.contentWindow.postMessage(data, "*");
  }
  logger("Module loaded!", {
    module: "plain-classes"
  });
})();
