import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { n, T as Tribute, t as tippy, f as followCursor, H as HighlightInTextarea } from "./highlight-in-textarea-B3EH7WgD.js";
import { settingsState, brxGlobalProp, brxIframe, brxIframeGlobalProp } from "./constant-DM2svGm2.js";
import { d as debounce } from "../chunks/debounce-CsAwOwoC.min.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../chunks/index-C1eb-OTL.min.js";
import { r as ref, n as nextTick, j as watch } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
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
    <textarea id="windpressbricks-plc-input" class="windpressbricks-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector("#windpressbricks-plc-input");
  const panelElementActions = [];
  const classSortAction = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-sort" class="bricks-svg-wrapper windpressbricks-plc windpressbricks-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="left">
        <svg xmlns="http://www.w3.org/2000/svg" class="bricks-svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector("#windpressbricks-plc-class-sort");
  const classToPlainClassesAction = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-down" class="bricks-svg-wrapper windpressbricks-plc windpressbricks-plc-class-down" data-balloon="Move Classes to Plain Classes" data-balloon-pos="left">
        <svg xmlns="http://www.w3.org/2000/svg" class="bricks-svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 13h6M2 16l4.5-9l4.5 9m7-9v9m-4-4l4 4l4-4"/></svg>    
    </span>
`).querySelector("#windpressbricks-plc-class-down");
  panelElementActions.push(classSortAction);
  panelElementActions.push(classToPlainClassesAction);
  const visibleElementPanel = ref(false);
  const activeElementId = ref(null);
  const historyIndex = ref(0);
  let hit = null;
  n(textInput);
  let autocompleteItems = [];
  wp.hooks.addAction("windpressbricks-autocomplete-items-refresh", "windpressbricks", () => {
    autocompleteItems = wp.hooks.applyFilters("windpressbricks-autocomplete-items", [], textInput.value);
  });
  wp.hooks.doAction("windpressbricks-autocomplete-items-refresh");
  const tribute = new Tribute({
    containerClass: "windpressbricks-tribute-container",
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: "",
    values: async function(text, cb) {
      if (!settingsState("module.plain-classes.autocomplete", true).value) {
        cb([]);
        return;
      }
      const filters = await wp.hooks.applyFilters("windpressbricks-autocomplete-items-query", autocompleteItems, text);
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
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes") {
        if (mutation.target.id === "bricks-panel-element" && mutation.attributeName === "style") {
          if (mutation.target.style.display !== "none") {
            visibleElementPanel.value = true;
          } else {
            visibleElementPanel.value = false;
          }
        } else if ("placeholder" === mutation.attributeName && "INPUT" === mutation.target.tagName && mutation.target.classList.contains("placeholder")) {
          activeElementId.value = brxGlobalProp.$_activeElement.value.id;
        }
      } else if (mutation.type === "childList") {
        if (mutation.addedNodes.length > 0) {
          if (mutation.target.id === "bricks-panel-sticky" && mutation.addedNodes[0].id === "bricks-panel-element-classes") {
            activeElementId.value = brxGlobalProp.$_activeElement.value.id;
          } else if (mutation.target.dataset && mutation.target.dataset.controlkey === "_cssClasses" && mutation.addedNodes[0].childNodes.length > 0) {
            document.querySelector("#_cssClasses").addEventListener("input", function(e) {
              nextTick(() => {
                textInput.value = e.target.value;
                onTextInputChanges();
              });
            });
          }
        }
      }
    });
  });
  observer.observe(document.getElementById("bricks-panel-element"), {
    subtree: true,
    attributes: true,
    childList: true
  });
  const historyIndexObserver = new MutationObserver(function(mutations) {
    nextTick(() => {
      if (historyIndex.value === brxGlobalProp.$_state.historyIndex) {
        historyIndex.value = 0;
      }
      historyIndex.value = brxGlobalProp.$_state.historyIndex;
    });
  });
  historyIndexObserver.observe(document.querySelector("#bricks-toolbar > ul.group-wrapper.end > li.undo"), {
    subtree: false,
    attributeFilter: [
      "class"
    ]
  });
  watch([
    activeElementId,
    visibleElementPanel,
    historyIndex
  ], (newVal, oldVal) => {
    if (newVal[0] !== oldVal[0] || newVal[2] !== oldVal[2]) {
      nextTick(() => {
        var _a, _b;
        textInput.value = ((_b = (_a = brxGlobalProp.$_activeElement.value) == null ? void 0 : _a.settings) == null ? void 0 : _b._cssClasses) || "";
        onTextInputChanges();
      });
    }
    if (newVal[0] && newVal[1]) {
      nextTick(() => {
        const panelElementEl = document.querySelector("#bricks-panel-sticky");
        if (settingsState("module.plain-classes.input-field", true).value) {
          if (panelElementEl.querySelector(".windpressbricks-plc-input") === null) {
            const containerEl = document.createElement("div");
            containerEl.style.padding = "0 var(--builder-spacing)";
            containerEl.appendChild(textInput);
            panelElementEl.appendChild(containerEl);
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
          const actionsContainer = document.querySelector("#bricks-panel-element-classes > div > div.actions-wrapper > div > div.dropdown-wrapper > div");
          const existingActions = actionsContainer.querySelectorAll(".windpressbricks-plc");
          if (existingActions.length === 0) {
            panelElementActions.forEach((action) => {
              actionsContainer.appendChild(action);
            });
          }
        }
      });
    }
  });
  textInput.addEventListener("input", function(e) {
    brxGlobalProp.$_activeElement.value.settings._cssClasses = e.target.value;
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
      const generatedCssCode = await brxIframe.contentWindow.windpress.module.classnameToCss.generate(classname);
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
      if (!settingsState("module.plain-classes.hover-preview-classes", true).value) {
        return;
      }
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
          const className = node.querySelector(".class-name").dataset.tributeClassName;
          node.addEventListener("mouseenter", (e) => {
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
      menuAutocompleteItemeEl = document.querySelector(".windpressbricks-tribute-container>ul");
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
  classSortAction.addEventListener("click", async function(e) {
    textInput.value = await brxIframe.contentWindow.windpress.module.classSorter.sort(textInput.value);
    brxGlobalProp.$_activeElement.value.settings._cssClasses = textInput.value;
    onTextInputChanges();
  });
  classToPlainClassesAction.addEventListener("click", async function(e) {
    var _a;
    const activeEl = brxGlobalProp.$_activeElement.value;
    const currPlainClasses = textInput.value.split(" ");
    const bricksGlobalClasses = ((_a = activeEl.settings) == null ? void 0 : _a._cssGlobalClasses) ? [
      ...activeEl.settings._cssGlobalClasses
    ] : [];
    bricksGlobalClasses.forEach((globalClass) => {
      let getGlobalClassName = brxGlobalProp.$_getGlobalClassName(globalClass);
      if (currPlainClasses.includes(getGlobalClassName)) {
        return;
      }
      currPlainClasses.push(getGlobalClassName);
    });
    textInput.value = currPlainClasses.join(" ");
    brxGlobalProp.$_activeElement.value.settings._cssClasses = textInput.value;
    brxGlobalProp.$_activeElement.value.settings._cssGlobalClasses = [];
    onTextInputChanges();
  });
  function previewAddClass(className) {
    const elementNode = brxIframeGlobalProp.$_getElementNode(brxIframeGlobalProp.$_activeElement.value);
    elementNode.classList.add(className);
  }
  function previewResetClass() {
    const activeEl = brxIframeGlobalProp.$_activeElement.value;
    const elementNode = brxIframeGlobalProp.$_getElementNode(activeEl);
    const elementClasses = brxIframeGlobalProp.$_getElementClasses(activeEl);
    elementNode.classList.value = elementClasses.join(" ");
  }
  function previewTributeEventCallbackUpDown() {
    let li = tribute.menu.querySelector("li.highlight>span.class-name");
    const activeEl = brxIframeGlobalProp.$_activeElement.value;
    const elementNode = brxIframeGlobalProp.$_getElementNode(activeEl);
    const elementClasses = brxIframeGlobalProp.$_getElementClasses(activeEl);
    elementNode.classList.value = elementClasses.join(" ") + " " + li.dataset.tributeClassName;
  }
  logger("Module loaded!", {
    module: "plain-classes"
  });
})();
