import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { n, T as Tribute, H as HighlightInTextarea, t as tippy, f as followCursor } from "./highlight-in-textarea-B3EH7WgD.js";
import { bdeV, bdeIframeV, bdeIframeCanvas, bdeIframe } from "./constant-J0FlTYG6.js";
import { d as debounce } from "../chunks/debounce-CsAwOwoC.min.js";
import { s as set } from "../chunks/set-CQpYICWN.min.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../chunks/index-C1eb-OTL.min.js";
import { r as ref, j as watch, n as nextTick } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
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
    <textarea id="windpressbreakdance-plc-input" class="windpressbreakdance-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector("#windpressbreakdance-plc-input");
  const textInputContainer = document.createElement("div");
  textInputContainer.classList.add("windpressbreakdance-plc-input-container");
  textInputContainer.appendChild(textInput);
  const containerAction = document.createRange().createContextualFragment(`
    <div class="windpressbreakdance-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(".windpressbreakdance-plc-action-container");
  const containerActionButtons = containerAction.querySelector(".actions");
  const classSortButton = document.createRange().createContextualFragment(`
    <span id="windpressbreakdance-plc-class-sort" class="bricks-svg-wrapper windpressbreakdance-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector("#windpressbreakdance-plc-class-sort");
  containerActionButtons.appendChild(classSortButton);
  const visibleElementPanel = ref(false);
  const activeElementId = ref(null);
  let hit = null;
  n(textInput);
  let autocompleteItems = [];
  wp.hooks.addAction("windpressbreakdance-autocomplete-items-refresh", "windpressbreakdance", () => {
    autocompleteItems = wp.hooks.applyFilters("windpressbreakdance-autocomplete-items", [], textInput.value);
  });
  wp.hooks.doAction("windpressbreakdance-autocomplete-items-refresh");
  const tribute = new Tribute({
    menuContainer: document.querySelector("#app"),
    containerClass: "windpressbreakdance-tribute-container",
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: "",
    values: async function(text, cb) {
      const filters = await wp.hooks.applyFilters("windpressbreakdance-autocomplete-items-query", autocompleteItems, text);
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
  bdeV.$store.subscribeAction((action, state) => {
    if (action.type === "ui/activateElement") {
      activeElementId.value = action.payload;
    }
    if (action.type === "ui/setLeftSidebarState") {
      visibleElementPanel.value = action.payload === "elementproperties" ? true : false;
    }
  });
  watch([
    activeElementId,
    visibleElementPanel
  ], (newVal, oldVal) => {
    if (newVal[0] !== oldVal[0]) {
      nextTick(() => {
        classDownstream();
        onTextInputChanges();
      });
    }
    if (newVal[0] && newVal[1]) {
      nextTick(() => {
        const panelElementClassesEl = document.querySelector(".breakdance-element-properties-panel .vscroll-scroll .vscroll-scroll");
        if (panelElementClassesEl && panelElementClassesEl.querySelector(".windpressbreakdance-plc-input") === null) {
          panelElementClassesEl.insertBefore(textInputContainer, panelElementClassesEl.firstChild);
        }
      });
    }
  });
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
  async function classDownstream() {
    var _a, _b, _c, _d, _e;
    textInput.value = ((_e = (_d = (_c = (_b = (_a = bdeV.$store.getters["ui/activeElement"].data) == null ? void 0 : _a.properties) == null ? void 0 : _b.settings) == null ? void 0 : _c.advanced) == null ? void 0 : _d.classes) == null ? void 0 : _e.join(" ")) || "";
  }
  async function checkUpstreamPath() {
    var _a, _b, _c, _d;
    if ((_d = (_c = (_b = (_a = bdeV.$store.getters["ui/activeElement"].data) == null ? void 0 : _a.properties) == null ? void 0 : _b.settings) == null ? void 0 : _c.advanced) == null ? void 0 : _d.classes) {
      return true;
    }
    const tab = document.querySelector(".properties-panel-tab.breakdance-tab.breakdance-tab--id-settings");
    tab.click();
    let subtab = document.querySelector("#settings .properties-panel-accordion.conditional-control-display-visible>div");
    while (subtab === null) {
      subtab = document.querySelector("#settings .properties-panel-accordion.conditional-control-display-visible>div");
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (!subtab.parentElement.classList.contains("expanded")) {
      subtab.click();
    }
    let inp = document.querySelector('#breakdance-class-input-search input[placeholder=".my-cool-class"]');
    while (inp === null) {
      inp = document.querySelector('#breakdance-class-input-search input[placeholder=".my-cool-class"]');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    inp.focus();
    const text = "windpressbreakdance";
    inp.value = text;
    inp.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await new Promise((resolve) => setTimeout(resolve, 100));
    const btn = document.querySelector("#breakdance-class-input-search>button");
    btn.click();
    return true;
  }
  const debouncedClassUpstream = debounce(classUpstream, 50);
  async function classUpstream() {
    if (!await checkUpstreamPath()) {
      logger("Upstream path not found!", {
        module: "plain-classes",
        type: "error"
      });
      return;
    }
    textInput.focus();
    set(bdeV.$store.getters["ui/activeElement"].data, "properties.settings.advanced.classes", textInput.value.trim().split(" ").filter((c) => c.trim() !== "") || []);
  }
  textInput.addEventListener("input", function(e) {
    debouncedClassUpstream();
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
            previewAddClass(className);
          });
        });
      }
    });
  });
  let menuAutocompleteItemeEl = null;
  textInput.addEventListener("tribute-active-true", function(e) {
    if (menuAutocompleteItemeEl === null) {
      menuAutocompleteItemeEl = document.querySelector(".windpressbreakdance-tribute-container>ul");
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
  function previewAddClass(className) {
    const activeEl = bdeIframeV.$store.getters["ui/activeElement"].id;
    const elementNode = bdeIframeCanvas.querySelector(`[data-node-id="${activeEl}"]`);
    elementNode.classList.add(className);
    elementNode.dataset.tributeClassName = className;
  }
  function previewResetClass() {
    resetTributeClass();
  }
  function previewTributeEventCallbackUpDown() {
    let li = tribute.menu.querySelector("li.highlight>span.class-name");
    previewResetClass();
    previewAddClass(li.dataset.tributeClassName);
  }
  function resetTributeClass() {
    const activeEl = bdeIframeV.$store.getters["ui/activeElement"].id;
    const elementNode = bdeIframeCanvas.querySelector(`[data-node-id="${activeEl}"]`);
    if (elementNode.dataset.tributeClassName) {
      elementNode.classList.remove(elementNode.dataset.tributeClassName);
      elementNode.dataset.tributeClassName = "";
    }
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
      const generatedCssCode = await bdeIframe.contentWindow.windpress.module.classnameToCss.generate(classname);
      if (generatedCssCode === null || generatedCssCode.trim() === "") {
        return null;
      }
      tippyInstance.setContent(shikiHighlighter.codeToHtml(generatedCssCode, {
        lang: "css",
        theme: document.querySelector("div#app.theme--light") !== null ? "light-plus" : "dark-plus"
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
  logger("Module loaded!", {
    module: "plain-classes"
  });
})();
