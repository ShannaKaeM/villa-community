import { T as Transition, b as vShow, c as createApp } from "../chunks/runtime-dom.esm-bundler-Dg33AbjM.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo, _ as __unplugin_components_0, a as __unplugin_components_0$1, G as Gt, R } from "../chunks/chevron-right-BDtxjLRu.min.js";
import { brx, brxGlobalProp, brxIframe } from "./constant-DM2svGm2.js";
import { _ as _export_sfc } from "../chunks/_plugin-vue_export-helper-pcqpp-6-.min.js";
import { a as inject, m as onMounted, ad as resolveComponent, aC as resolveDirective, U as createElementBlock, E as openBlock, a6 as createBaseVNode, ag as withDirectives, N as createVNode, u as unref, a2 as createTextVNode, r as ref, j as watch, H as renderSlot, R as normalizeStyle, a4 as normalizeClass, G as withCtx, O as createCommentVNode, F as Fragment, V as renderList, a3 as toDisplayString, D as createBlock, ac as Suspense, n as nextTick } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import { d as decodeVFSContainer } from "./vfs-lutpnTRW.js";
import "../chunks/index-DEmRqKf2.min.js";
import { __tla as __tla_0 } from "./cssesc-Du71EH2f.js";
import { __tla as __tla_1 } from "../chunks/index-DBlFvDtH.min.js";
import { d as getVariableList } from "./intellisense-BEc_adN-.js";
import { l as loadDesignSystem } from "./design-system-Ceng1RfT.js";
import { g as useStorage } from "../chunks/index-DVDdEdAO.min.js";
import { s as set } from "../chunks/set-CQpYICWN.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
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
  const _hoisted_1$5 = {
    id: "windpressbricks-variable-app-header",
    class: "header-container"
  };
  const _hoisted_2$3 = {
    class: "header-content"
  };
  const _hoisted_3$2 = {
    class: "header-logo"
  };
  const _hoisted_4$2 = {
    class: "header-title"
  };
  const _sfc_main$5 = {
    __name: "PanelHeader",
    setup(__props) {
      const variableApp2 = inject("variableApp");
      const isOpen2 = inject("isOpen");
      function allowDragPanel() {
        const draggable = variableApp2.querySelector("#windpressbricks-variable-app-header");
        let isDragging = ref(false);
        let offsetX = 0;
        let offsetY = 0;
        watch(isDragging, (value) => {
          if (!value) {
            document.body.style.removeProperty("user-select");
            brx.style.removeProperty("pointer-events");
            draggable.style.cursor = "grab";
          } else {
            document.body.style.userSelect = "none";
            brx.style.pointerEvents = "none";
            draggable.style.cursor = "grabbing";
          }
        });
        const handleDragStart = (e) => {
          isDragging.value = true;
          const rect = draggable.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
        };
        draggable.removeEventListener("mousedown", handleDragStart);
        draggable.addEventListener("mousedown", handleDragStart);
        const handleDrag = (e) => {
          if (!isDragging.value) {
            return;
          }
          const rect = draggable.getBoundingClientRect();
          const clientX = e.clientX;
          const clientY = e.clientY;
          const x = clientX - offsetX;
          const y = clientY - offsetY;
          const posX = x < 0 ? 0 : x > window.innerWidth - rect.width ? window.innerWidth - rect.width : x;
          const posY = y < 0 ? 0 : y > window.innerHeight - rect.height ? window.innerHeight - rect.height : y;
          variableApp2.style.left = `${posX}px`;
          variableApp2.style.top = `${posY}px`;
        };
        document.removeEventListener("mousemove", handleDrag);
        document.addEventListener("mousemove", handleDrag);
        const endDragging = (e) => {
          isDragging.value = false;
        };
        document.removeEventListener("mouseup", endDragging);
        document.addEventListener("mouseup", endDragging);
      }
      onMounted(() => {
        allowDragPanel();
      });
      return (_ctx, _cache) => {
        const _component_inline_svg = resolveComponent("inline-svg");
        const _component_i_fa6_solid_xmark = __unplugin_components_0;
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(_component_inline_svg, {
                src: unref(Logo),
                class: "inline-svg"
              }, null, 8, [
                "src"
              ])
            ]),
            withDirectives((openBlock(), createElementBlock("div", _hoisted_4$2, _cache[1] || (_cache[1] = [
              createTextVNode(" WindPress ")
            ]))), [
              [
                _directive_tooltip,
                {
                  placement: "top",
                  content: `v${_ctx.windpressbricks._version}`
                }
              ]
            ]),
            withDirectives((openBlock(), createElementBlock("button", {
              class: "header-exit",
              onClick: _cache[0] || (_cache[0] = ($event) => isOpen2.value = !unref(isOpen2))
            }, [
              createVNode(_component_i_fa6_solid_xmark, {
                class: "iconify"
              })
            ])), [
              [
                _directive_tooltip,
                {
                  placement: "top",
                  content: "Close"
                }
              ]
            ])
          ])
        ]);
      };
    }
  };
  const PanelHeader = _export_sfc(_sfc_main$5, [
    [
      "__scopeId",
      "data-v-97f7f622"
    ]
  ]);
  const _hoisted_1$4 = {
    class: "header-slot"
  };
  const _hoisted_2$2 = {
    key: 0,
    class: "expansion-panel__body"
  };
  const _sfc_main$4 = {
    __name: "ExpansionPanel",
    props: {
      namespace: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const sectionRef = ref(null);
      const expand = useStorage(`windpressbricks-variable-app.ui.expansion-panels.${props.namespace}`, {
        [`${props.name}`]: false
      }, void 0, {
        mergeDefaults: true
      });
      function togglePanel(val) {
        expand.value[props.name] = val === null ? !expand.value[props.name] : val;
      }
      function scrollIntoView() {
        sectionRef.value.scrollIntoView();
      }
      __expose({
        togglePanel,
        scrollIntoView
      });
      return (_ctx, _cache) => {
        const _component_i_fa6_solid_chevron_right = __unplugin_components_0$1;
        return openBlock(), createElementBlock("div", {
          ref_key: "sectionRef",
          ref: sectionRef,
          class: "expansion-panel"
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              {},
              "expansion-panel__header"
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(expand)[__props.name] = !unref(expand)[__props.name])
          }, [
            createBaseVNode("div", _hoisted_1$4, [
              renderSlot(_ctx.$slots, "header", {}, void 0, true)
            ]),
            createBaseVNode("div", null, [
              createVNode(_component_i_fa6_solid_chevron_right, {
                style: normalizeStyle({
                  transform: unref(expand)[__props.name] ? "rotate(-90deg)" : "rotate(0deg)"
                }),
                class: "iconify"
              }, null, 8, [
                "style"
              ])
            ])
          ]),
          createVNode(Transition, null, {
            default: withCtx(() => [
              unref(expand)[__props.name] ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 512);
      };
    }
  };
  const ExpansionPanel = _export_sfc(_sfc_main$4, [
    [
      "__scopeId",
      "data-v-48d9357f"
    ]
  ]);
  const _hoisted_1$3 = {
    class: "{m:10;pb:15}>div"
  };
  const _hoisted_2$1 = {
    class: "variable-section-title font:14 my:10"
  };
  const _hoisted_3$1 = {
    class: "variable-section-items flex flex:row gap:8 flex-wrap:wrap"
  };
  const _hoisted_4$1 = [
    "onClick",
    "onMouseenter"
  ];
  const _hoisted_5$1 = {
    class: "font:14"
  };
  const HOVER_VARIABLE_PREVIEW_TIMEOUT$1 = 1e3;
  const _sfc_main$3 = {
    __name: "CommonVariableItems",
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      const focusedInput2 = inject("focusedInput");
      const recentVariableSelectionTimestamp2 = inject("recentVariableSelectionTimestamp");
      const tempInputValue2 = inject("tempInputValue");
      function onMouseEnter(e, varKey) {
        const timeElapsedBetweenSelections = performance.now() - recentVariableSelectionTimestamp2.value;
        const isInCoolDown = timeElapsedBetweenSelections < HOVER_VARIABLE_PREVIEW_TIMEOUT$1;
        if (isInCoolDown) return;
        if (!focusedInput2.value) {
          return;
        }
        focusedInput2.value.value = `var(${varKey})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onMouseLeave(e) {
        if (!focusedInput2.value || tempInputValue2.value === null) {
          return;
        }
        focusedInput2.value.value = tempInputValue2.value;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onClick(e, varKey) {
        if (!focusedInput2.value) {
          return;
        }
        focusedInput2.value.value = `var(${varKey})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
        tempInputValue2.value = `var(${varKey})`;
        recentVariableSelectionTimestamp2.value = performance.now();
      }
      return (_ctx, _cache) => {
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.variableItems, (item, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "var-item"
            }, [
              createBaseVNode("div", _hoisted_2$1, toDisplayString(key.replace("_", "-")), 1),
              createBaseVNode("div", _hoisted_3$1, [
                item.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(item, (subItem, subItemKey) => {
                  return withDirectives((openBlock(), createElementBlock("button", {
                    key: subItemKey,
                    class: "px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% text:center {opacity:.5;font:semibold}>span opacity:100:hover>span",
                    onClick: (event) => onClick(event, subItem.key),
                    onMouseenter: (event) => onMouseEnter(event, subItem.key),
                    onMouseleave: onMouseLeave
                  }, [
                    createBaseVNode("span", _hoisted_5$1, toDisplayString(subItem.label), 1)
                  ], 40, _hoisted_4$1)), [
                    [
                      _directive_tooltip,
                      {
                        placement: "top",
                        content: `var(${subItem.key}, ${subItem.value})`
                      }
                    ]
                  ]);
                }), 128)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]);
      };
    }
  };
  const CommonVariableItems = _export_sfc(_sfc_main$3, [
    [
      "__scopeId",
      "data-v-ecbe9380"
    ]
  ]);
  function getActiveElement() {
    var _a;
    if (brxGlobalProp.$_state.activePanel !== "element") {
      return null;
    }
    const activeElementId = (_a = brxGlobalProp.$_state) == null ? void 0 : _a.activeElement.id;
    const iframe = brxGlobalProp.$_getIframeDoc();
    return iframe == null ? void 0 : iframe.getElementById(`brxe-${activeElementId}`);
  }
  function observe({ selector, callback, options }) {
    const observer = new MutationObserver(callback);
    const target = document.querySelector(selector);
    if (!target) {
      logger(`Target not found for selector: ${selector}`, {
        module: "variable-picker",
        type: "error"
      });
      return;
    }
    const DEFAULT_OPTIONS = {
      childList: true,
      subtree: true
    };
    observer.observe(target, Object.assign(Object.assign({}, DEFAULT_OPTIONS), options));
  }
  const _hoisted_1$2 = {
    class: "{m:10;pb:15}>div"
  };
  const _hoisted_2 = {
    class: "variable-section-title"
  };
  const _hoisted_3 = {
    key: 0,
    class: "variable-section-items default-color"
  };
  const _hoisted_4 = [
    "onClick",
    "onMouseenter"
  ];
  const _hoisted_5 = [
    "onClick",
    "onMouseenter"
  ];
  const HOVER_VARIABLE_PREVIEW_TIMEOUT = 1e3;
  const _sfc_main$2 = {
    __name: "ColorVariableItems",
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      const focusedInput2 = inject("focusedInput");
      const recentColorPickerTarget2 = inject("recentColorPickerTarget");
      const recentVariableSelectionTimestamp2 = inject("recentVariableSelectionTimestamp");
      const tempInputValue2 = inject("tempInputValue");
      function onMouseEnter(e, color) {
        var _a;
        const timeElapsedBetweenSelections = performance.now() - recentVariableSelectionTimestamp2.value;
        const isInCoolDown = timeElapsedBetweenSelections < HOVER_VARIABLE_PREVIEW_TIMEOUT;
        if (isInCoolDown) return;
        if (!focusedInput2.value) {
          const activeElement = getActiveElement();
          if (!activeElement) return;
          const stylesArray = [
            {
              property: "color",
              control: "typography"
            },
            {
              property: "backgroundColor",
              control: "background"
            },
            {
              property: "borderColor",
              control: "border"
            }
          ];
          for (const { property, control } of stylesArray) {
            if ((_a = recentColorPickerTarget2.value) == null ? void 0 : _a.closest(`[data-control="${control}"]`)) {
              activeElement.style[property] = `var(${color})`;
            }
          }
          return;
        }
        focusedInput2.value.value = `var(${color})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onMouseLeave(e) {
        var _a;
        if (!focusedInput2.value || tempInputValue2.value === null) {
          const activeElement = getActiveElement();
          if (!activeElement) return;
          const stylesArray = [
            {
              property: "color",
              control: "typography"
            },
            {
              property: "backgroundColor",
              control: "background"
            },
            {
              property: "borderColor",
              control: "border"
            }
          ];
          for (const { property, control } of stylesArray) {
            if ((_a = recentColorPickerTarget2.value) == null ? void 0 : _a.closest(`[data-control="${control}"]`)) {
              activeElement.style[property] = "";
            }
          }
          return;
        }
        focusedInput2.value.value = tempInputValue2.value;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onClick(e, color) {
        e.stopPropagation();
        e.preventDefault();
        if (!focusedInput2.value) {
          const recentColorPickerTargetCopy = recentColorPickerTarget2.value;
          selectColor(color);
          recentVariableSelectionTimestamp2.value = performance.now();
          setTimeout(() => {
            const activeElement = getActiveElement();
            if (!activeElement) {
              return;
            }
            const stylesArray = [
              {
                property: "color",
                control: "typography"
              },
              {
                property: "backgroundColor",
                control: "background"
              },
              {
                property: "borderColor",
                control: "border"
              }
            ];
            for (const { property, control } of stylesArray) {
              if (recentColorPickerTargetCopy == null ? void 0 : recentColorPickerTargetCopy.closest(`[data-control="${control}"]`)) {
                activeElement.style[property] = "";
              }
            }
          }, 5);
          return;
        }
        focusedInput2.value.value = `var(${color})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
        tempInputValue2.value = `var(${color})`;
        recentVariableSelectionTimestamp2.value = performance.now();
      }
      function showBricksColorPopUp() {
        document.querySelectorAll(".windpressbricks-variable-app-colorpopup").forEach((style) => {
          style.remove();
        });
      }
      function hideBricksColorPopUp() {
        if (document.querySelector(".windpressbricks-variable-app-colorpopup")) {
          return;
        }
        const css = `.bricks-control-popup { display: none !important; }`;
        const style = document.createElement("style");
        style.id = "windpressbricks-variable-app-bricks-popup";
        style.appendChild(document.createTextNode(css));
        style.classList.add("windpressbricks-variable-app-colorpopup");
        document.head.appendChild(style);
      }
      async function selectColor(color) {
        var _a, _b, _c, _d;
        hideBricksColorPopUp();
        const isPopupAlreadyOpen = document.querySelector(".bricks-control-popup .color-palette.grid");
        if (!isPopupAlreadyOpen) {
          (_b = (_a = recentColorPickerTarget2.value) == null ? void 0 : _a.closest(".bricks-control-preview")) == null ? void 0 : _b.click();
          await new Promise((resolve) => setTimeout(resolve, 25));
        }
        const colorsGrid = document.querySelector(".bricks-control-popup .color-palette.grid");
        if (colorsGrid) {
          const targetColor = colorsGrid.querySelector(`[data-balloon="var(${color})"]`);
          (_c = targetColor == null ? void 0 : targetColor.parentElement) == null ? void 0 : _c.click();
        } else {
          logger("Failed to select color. Color grid not found.", {
            module: "variable-picker",
            type: "error"
          });
        }
        (_d = document.querySelector("body")) == null ? void 0 : _d.click();
        await new Promise((resolve) => setTimeout(resolve, 2));
        if (document.querySelector(".bricks-control-popup")) {
          setTimeout(() => {
            var _a2;
            (_a2 = document.querySelector("body")) == null ? void 0 : _a2.click();
            setTimeout(() => {
              showBricksColorPopUp();
            }, 5);
          }, 5);
          logger("Failed to close color picker. Delaying close.", {
            module: "variable-picker",
            type: "error"
          });
        } else {
          showBricksColorPopUp();
        }
      }
      return (_ctx, _cache) => {
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.variableItems, (color, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: ""
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(key), 1),
              color.DEFAULT ? (openBlock(), createElementBlock("div", _hoisted_3, [
                withDirectives(createBaseVNode("button", {
                  style: normalizeStyle(`--wp-b-v-item-bg: var(--${color.DEFAULT.key.slice(2)});`),
                  class: "",
                  onClick: (event) => onClick(event, color.DEFAULT.key),
                  onMouseenter: (event) => onMouseEnter(event, color.DEFAULT.key),
                  onMouseleave: onMouseLeave
                }, null, 44, _hoisted_4), [
                  [
                    _directive_tooltip,
                    {
                      placement: "top",
                      content: `var(${color.DEFAULT.key}, ${color.DEFAULT.value})`
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              color.shades && Object.keys(color.shades).length > 0 ? (openBlock(), createElementBlock("div", {
                key: 1,
                style: normalizeStyle(`--wp-b-v-items-grid: ${Object.keys(color.shades).length}`),
                class: "variable-section-items shades-colors"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(color.shades, (shade, shadeKey) => {
                  return openBlock(), createElementBlock("div", {
                    key: shadeKey,
                    class: ""
                  }, [
                    withDirectives(createBaseVNode("button", {
                      style: normalizeStyle(`--wp-b-v-item-bg: var(--${shade.key.slice(2)})`),
                      onClick: (event) => onClick(event, shade.key),
                      onMouseenter: (event) => onMouseEnter(event, shade.key),
                      onMouseleave: onMouseLeave
                    }, null, 44, _hoisted_5), [
                      [
                        _directive_tooltip,
                        {
                          placement: "top",
                          content: `var(${shade.key}, ${shade.value})`
                        }
                      ]
                    ])
                  ]);
                }), 128))
              ], 4)) : createCommentVNode("", true)
            ]);
          }), 128))
        ]);
      };
    }
  };
  const ColorVariableItems = _export_sfc(_sfc_main$2, [
    [
      "__scopeId",
      "data-v-c22ad97c"
    ]
  ]);
  const _hoisted_1$1 = {
    id: "windpressbricks-variable-app-body",
    class: "var-body"
  };
  const _sfc_main$1 = {
    __name: "PanelBody",
    setup(__props) {
      const commonVar = ref({
        colors: {},
        typography: {},
        sizing: {}
      });
      const focusedInput2 = inject("focusedInput");
      const recentColorPickerTarget2 = inject("recentColorPickerTarget");
      async function constructVariableList() {
        const vfsContainer = brxIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
        const volume = decodeVFSContainer(vfsContainer.textContent);
        const variableLists = await getVariableList(await loadDesignSystem({
          volume
        }));
        const palette = {};
        variableLists.filter((variable) => variable.key.startsWith("--color")).forEach((color) => {
          const key = color.key.slice(8);
          const segments = key.split("-");
          let colorPath = "";
          if (segments.length > 1) {
            const key2 = segments[0];
            const shadeKey = segments.slice(1).join("-");
            colorPath = `${key2}.shades.'${shadeKey}'`;
          } else {
            colorPath = `${key}.DEFAULT`;
          }
          set(palette, colorPath, color);
        });
        commonVar.value.colors = Object.keys(palette).sort().reduce((acc, key) => {
          acc[key] = palette[key];
          return acc;
        }, {});
        const typography = {
          font_size: [],
          line_height: [],
          letter_spacing: []
        };
        variableLists.filter((variable) => variable.key.startsWith("--text-") && !variable.key.endsWith("--line-height")).forEach((typo) => {
          const key = typo.key.slice(7);
          typography.font_size.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        variableLists.filter((variable) => variable.key.startsWith("--leading-") || variable.key.endsWith("--leading")).forEach((typo) => {
          const key = typo.key.startsWith("--leading-") ? typo.key.slice(10) : typo.key.slice(2, -9);
          typography.line_height.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        typography.line_height.sort((a, b) => {
          if (a.label.startsWith("font-size-") && !b.label.startsWith("font-size-")) {
            return 1;
          }
          if (!a.label.startsWith("font-size-") && b.label.startsWith("font-size-")) {
            return -1;
          }
          return 0;
        });
        variableLists.filter((variable) => variable.key.startsWith("--tracking-")).forEach((typo) => {
          const key = typo.key.slice(11);
          typography.letter_spacing.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        commonVar.value.typography = typography;
        const sizing = {
          container: [],
          breakpoint: []
        };
        variableLists.filter((variable) => variable.key.startsWith("--container-")).forEach((size) => {
          const key = size.key.slice(12);
          sizing.container.push({
            key: size.key,
            label: key,
            value: size.value
          });
        });
        variableLists.filter((variable) => variable.key.startsWith("--breakpoint-")).forEach((size) => {
          const key = size.key.slice(13);
          sizing.breakpoint.push({
            key: size.key,
            label: key,
            value: size.value
          });
        });
        commonVar.value.sizing = sizing;
      }
      const sectionColor = ref(null);
      const sectionTypography = ref(null);
      const sectionSpacing = ref(null);
      watch(focusedInput2, (value) => {
        var _a, _b, _c;
        if (value) {
          const control = value.closest("[data-controlkey]");
          const dataControlKey = ((_a = control == null ? void 0 : control.dataset.controlkey) == null ? void 0 : _a.toLocaleLowerCase()) ?? "";
          const isFontSize = [
            "typography",
            "font"
          ].some((key) => dataControlKey.includes(key));
          const isSpacing = [
            "padding",
            "margin",
            "gap",
            "width",
            "height"
          ].some((key) => dataControlKey.includes(key));
          const isColorInput = (_c = (_b = value.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.classList.contains("color-input");
          sectionTypography.value.togglePanel(false);
          sectionSpacing.value.togglePanel(false);
          sectionColor.value.togglePanel(false);
          if (isColorInput) {
            sectionColor.value.togglePanel(true);
            sectionColor.value.scrollIntoView();
          } else if (isFontSize) {
            sectionTypography.value.togglePanel(true);
            sectionTypography.value.scrollIntoView();
          } else if (isSpacing) {
            sectionSpacing.value.togglePanel(true);
            sectionSpacing.value.scrollIntoView();
          }
        }
      });
      watch(recentColorPickerTarget2, (value) => {
        if (value) {
          sectionColor.value.togglePanel(true);
          sectionColor.value.scrollIntoView();
        }
      });
      onMounted(() => {
        constructVariableList();
      });
      const channel = new BroadcastChannel("windpress");
      channel.addEventListener("message", async (e) => {
        const data = e.data;
        const source = "windpress/autocomplete";
        const task = "windpress.code-editor.saved.done";
        if (data.source === source && data.task === task) {
          setTimeout(() => {
            constructVariableList();
          }, 1e3);
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(ExpansionPanel, {
            ref_key: "sectionColor",
            ref: sectionColor,
            namespace: "variable",
            name: "color"
          }, {
            header: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Color", -1)
            ])),
            default: withCtx(() => [
              createVNode(ColorVariableItems, {
                "variable-items": commonVar.value.colors
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512),
          createVNode(ExpansionPanel, {
            ref_key: "sectionTypography",
            ref: sectionTypography,
            namespace: "variable",
            name: "typography"
          }, {
            header: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Typography", -1)
            ])),
            default: withCtx(() => [
              createVNode(CommonVariableItems, {
                "variable-items": commonVar.value.typography
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512),
          createVNode(ExpansionPanel, {
            ref_key: "sectionSpacing",
            ref: sectionSpacing,
            namespace: "variable",
            name: "spacing",
            class: ""
          }, {
            header: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Sizing", -1)
            ])),
            default: withCtx(() => [
              createVNode(CommonVariableItems, {
                "variable-items": commonVar.value.sizing
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  const PanelBody = _export_sfc(_sfc_main$1, [
    [
      "__scopeId",
      "data-v-ab0a8908"
    ]
  ]);
  const _hoisted_1 = {
    id: "windpressbricks-variable-app-container",
    class: "wp-b-var-container"
  };
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const isOpen2 = inject("isOpen");
      return (_ctx, _cache) => {
        return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(PanelHeader),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode(PanelBody)
            ]),
            _: 1
          }))
        ], 512)), [
          [
            vShow,
            unref(isOpen2)
          ]
        ]);
      };
    }
  };
  const App = _export_sfc(_sfc_main, [
    [
      "__scopeId",
      "data-v-8a9882a1"
    ]
  ]);
  const variableApp = document.createElement("windpressbricks-variable-app");
  variableApp.id = "windpressbricks-variable-app";
  document.body.appendChild(variableApp);
  const isOpen = ref(false);
  const focusedInput = ref(null);
  const tempInputValue = ref(null);
  const recentColorPickerTarget = ref(null);
  const recentVariableSelectionTimestamp = ref(0);
  const app = createApp(App);
  app.config.globalProperties.windpressbricks = window.windpressbricks;
  app.provide("variableApp", variableApp);
  app.provide("isOpen", isOpen);
  app.provide("focusedInput", focusedInput);
  app.provide("tempInputValue", tempInputValue);
  app.provide("recentColorPickerTarget", recentColorPickerTarget);
  app.provide("recentVariableSelectionTimestamp", recentVariableSelectionTimestamp);
  app.use(Gt, {
    container: "#windpressbricks-variable-app"
  });
  app.component("InlineSvg", R);
  app.mount("#windpressbricks-variable-app");
  function onInputClick(e) {
    var _a;
    if (!e.shiftKey || !e.target) {
      return;
    }
    (_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges();
    e.preventDefault();
    e.stopPropagation();
    focusedInput.value = e.target;
    tempInputValue.value = e.target.value;
    isOpen.value = true;
  }
  function onFocusCallback(e) {
    focusedInput.value = e.target;
  }
  const bricksInputs = [
    'div[data-control="number"]',
    {
      selector: 'div[data-control="text"]',
      hasChild: [
        "#_flexBasis",
        "#_overflow",
        "#_gridTemplateColumns",
        "#_gridTemplateRows",
        "#_gridAutoColumns",
        "#_gridAutoRows",
        "#_objectPosition",
        '[id^="raw-"]'
      ]
    }
  ];
  function addTriggers() {
    setTimeout(() => {
      bricksInputs.forEach((field) => {
        const wrappers = typeof field === "string" ? [
          ...document.querySelectorAll(field)
        ] : [
          ...document.querySelectorAll(field.selector)
        ].filter((n) => field.hasChild.some((c) => n.querySelector(c)));
        wrappers.forEach((wrapper) => {
          const input = wrapper.querySelector("input[type='text']");
          if ((input == null ? void 0 : input.getAttribute("windpressbricks-variable-app")) === "listened") {
            return;
          }
          input == null ? void 0 : input.removeEventListener("click", onInputClick);
          input == null ? void 0 : input.addEventListener("click", onInputClick);
          input == null ? void 0 : input.removeEventListener("focus", onFocusCallback);
          input == null ? void 0 : input.addEventListener("focus", onFocusCallback);
          input == null ? void 0 : input.setAttribute("windpressbricks-variable-app", "listened");
          input == null ? void 0 : input.parentNode.setAttribute("data-balloon", "Shift + click to open the Variable Picker");
          input == null ? void 0 : input.parentNode.setAttribute("data-balloon-pos", "bottom-right");
        });
      });
      const popupTriggers = [
        ...document.querySelectorAll(".bricks-control-preview")
      ].filter((trigger) => {
        var _a, _b;
        return "color" === ((_b = (_a = trigger.closest(".control-inner")) == null ? void 0 : _a.querySelector("label")) == null ? void 0 : _b.getAttribute("for"));
      });
      popupTriggers.forEach((popupTrigger) => {
        popupTrigger.addEventListener("contextmenu", (e) => {
          var _a;
          if (!e.shiftKey || !e.target) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          (_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges();
          focusedInput.value = null;
          isOpen.value = true;
          recentColorPickerTarget.value = null;
          nextTick(() => {
            recentColorPickerTarget.value = e.target;
          });
        });
      });
    }, 100);
  }
  let isObserverRunning = false;
  observe({
    selector: `#bricks-panel-inner`,
    options: {
      subtree: true,
      childList: true
    },
    callback() {
      if (isObserverRunning) {
        return;
      }
      isObserverRunning = true;
      addTriggers();
      setTimeout(() => {
        isObserverRunning = false;
      }, 100);
    }
  });
  addTriggers();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen.value) {
      isOpen.value = false;
    }
  });
  watch(isOpen, (value) => {
    variableApp.style.zIndex = value ? "calc(Infinity)" : "-1";
  });
  logger("Module loaded!", {
    module: "variable-picker"
  });
});
