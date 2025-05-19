import { _ as __vitePreload } from "../../../chunks/preload-helper-BVFHbGtQ.min.js";
import { T as Tribute, t as tippy, n, f as followCursor, H as HighlightInTextarea } from "../../highlight-in-textarea-B3EH7WgD.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../../../chunks/index-C1eb-OTL.min.js";
import { d as debounce } from "../../../chunks/debounce-CsAwOwoC.min.js";
import { r as ref, j as watch, n as nextTick } from "../../../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "../../../chunks/index-Dfa4cJMK.min.js";
import "../../../chunks/isObject-8EXUDN8T.min.js";
(async () => {
  const SvgWindpress = (props) => React.createElement("svg", {
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    style: {
      enableBackground: "new 0 0 512 512"
    },
    xmlSpace: "preserve",
    ...props
  }, React.createElement("g", null, React.createElement("path", {
    fill: "currentColor",
    d: "M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16 c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z"
  })), React.createElement("g", null, React.createElement("path", {
    d: "M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16 c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z"
  })), React.createElement("g", null, React.createElement("path", {
    d: "M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16 c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432 c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z"
  })));
  let shikiHighlighter = null;
  const WindPressIcon = (props) => {
    return React.createElement(SvgWindpress, {
      ...props,
      width: 20,
      height: 20,
      "aria-hidden": "true",
      focusable: "false"
    });
  };
  (async () => {
    shikiHighlighter = await createHighlighterCore({
      themes: [
        __vitePreload(() => import("../../../chunks/dark-plus-DP7-e98C.min.js"), true ? [] : void 0, import.meta.url),
        __vitePreload(() => import("../../../chunks/light-plus-D6etIKYp.min.js"), true ? [] : void 0, import.meta.url)
      ],
      langs: [
        __vitePreload(() => import("../../../chunks/css-NxIBojpu.min.js"), true ? [] : void 0, import.meta.url)
      ],
      engine: createOnigurumaEngine(__vitePreload(() => import("../../../chunks/wasm-CmTHlobv.min.js"), true ? [] : void 0, import.meta.url))
    });
  })();
  const textInputRef = ref(null);
  let hit = null;
  let autocompleteItems = [];
  wp.hooks.addAction("windpressgutenberg-autocomplete-items-refresh", "windpressgutenberg", () => {
    autocompleteItems = wp.hooks.applyFilters("windpressgutenberg-autocomplete-items", [], "");
  });
  wp.hooks.doAction("windpressgutenberg-autocomplete-items-refresh");
  const tribute = new Tribute({
    containerClass: "windpressgutenberg-tribute-container",
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: "",
    values: async function(text, cb) {
      const filters = await wp.hooks.applyFilters("windpressgutenberg-autocomplete-items-query", autocompleteItems, text);
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
      const generatedCssCode = await window.windpress.module.classnameToCss.generate(classname);
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
  const currentBlockId = ref(null);
  const latestClasses = ref(null);
  const latestTributeClassName = ref(null);
  function previewTributeEventCallbackUpDown() {
    let li = tribute.menu.querySelector("li.highlight>span.class-name");
    if (latestTributeClassName.value) {
      previewResetClass(latestTributeClassName.value);
    }
    latestTributeClassName.value = li.dataset.tributeClassName;
    previewAddClass(li.dataset.tributeClassName);
  }
  let menuAutocompleteItemeEl = null;
  const observerAutocomplete = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          const className = node.querySelector(".class-name").dataset.tributeClassName;
          node.addEventListener("mouseenter", (e) => {
            previewAddClass(className);
          });
          node.addEventListener("mouseleave", (e) => {
            previewResetClass(className);
          });
          node.addEventListener("click", (e) => {
          }, {
            capture: true
          });
        });
      }
    });
  });
  function previewAddClass(className) {
    const rootContainer = document.querySelector('iframe[name="editor-canvas"]');
    const contentWindow = rootContainer.contentWindow || rootContainer;
    const contentDocument = rootContainer.contentDocument || contentWindow.document;
    const block = contentDocument.getElementById(`block-${currentBlockId.value}`);
    if (block) {
      block.classList.add(className);
    }
  }
  function previewResetClass(className) {
    const rootContainer = document.querySelector('iframe[name="editor-canvas"]');
    const contentWindow = rootContainer.contentWindow || rootContainer;
    const contentDocument = rootContainer.contentDocument || contentWindow.document;
    const block = contentDocument.getElementById(`block-${currentBlockId.value}`);
    if (block && latestClasses.value && !latestClasses.value.includes(className)) {
      block.classList.remove(className);
    }
  }
  watch(textInputRef, (newVal, oldVal) => {
    if (newVal) {
      n(textInputRef.value);
      tribute.attach(textInputRef.value);
      setTimeout(() => {
        hit = new HighlightInTextarea(textInputRef.value, {
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
        hoverPreviewProvider();
        textInputRef.value.addEventListener("highlights-updated", function(e) {
          hoverPreviewProvider();
        });
        textInputRef.value.addEventListener("tribute-active-true", function(e) {
          if (menuAutocompleteItemeEl === null) {
            menuAutocompleteItemeEl = document.querySelector(".windpressgutenberg-tribute-container>ul");
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
        textInputRef.value.addEventListener("tribute-active-false", function(e) {
          if (latestTributeClassName.value) {
            previewResetClass(latestTributeClassName.value);
          }
        });
        nextTick(() => {
          onTextInputChanges();
        });
      }, 10);
    }
  });
  function onTextInputChanges() {
    nextTick(() => {
      try {
        hit.handleInput();
      } catch (error) {
      }
      n.update(textInputRef.value);
      tribute.hideMenu();
    });
  }
  function addClassInspectorControls(BlockEdit) {
    return (props) => {
      const { name, clientId, attributes, setAttributes } = props;
      React.useEffect(() => {
        currentBlockId.value = clientId;
        latestClasses.value = attributes.className;
      });
      function handleValueChange(value) {
        setAttributes({
          className: value
        });
        latestClasses.value = value;
      }
      async function handleAutomaticClassSorting() {
        const sortedClasses = await windpress.module.classSorter.sort(attributes.className);
        setAttributes({
          className: sortedClasses
        });
        latestClasses.value = sortedClasses;
        onTextInputChanges();
      }
      return React.createElement(React.Fragment, null, React.createElement(BlockEdit, {
        ...props
      }), React.createElement(wp.blockEditor.InspectorControls, null, React.createElement(wp.components.PanelBody, {
        title: wp.i18n.__("WindPress", "windpress"),
        icon: WindPressIcon,
        initialOpen: true
      }, React.createElement(wp.components.PanelRow, {
        className: "windpressgutenberg-actions"
      }, React.createElement(wp.components.ButtonGroup, null, React.createElement(wp.components.Button, {
        showTooltip: true,
        label: wp.i18n.__("Automatic Class Sorting", "windpress"),
        onClick: handleAutomaticClassSorting
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "tabler-icon tabler-icon-reorder icon icon-tabler icons-tabler-outline icon-tabler-reorder"
      }, React.createElement("path", {
        d: "M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
      }), React.createElement("path", {
        d: "M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
      }), React.createElement("path", {
        d: "M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
      }), React.createElement("path", {
        d: "M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3"
      }), React.createElement("path", {
        d: "M16.5 8.5l2.5 2.5l2.5 -2.5"
      }))))), React.createElement(wp.components.TextareaControl, {
        value: attributes.className,
        onChange: (value) => handleValueChange(value),
        onInput: (e) => handleValueChange(e.target.value),
        ref: (el) => textInputRef.value = el
      }))));
    };
  }
  (() => {
    wp.hooks.addFilter("editor.BlockEdit", "windpress/add-class-inspector-controls", addClassInspectorControls);
  })();
})();
