import { _ as _sfc_main$2, b as _sfc_main$5, a as _sfc_main$6, __tla as __tla_0 } from "../chunks/DashboardSidebarCollapse-4NrF8ofm.min.js";
import { r as useForwardPropsEmits, G as usePortal, H as defu, t as tv, s as useAppConfig, I as HoverCard, J as Popover, z as _sfc_main$4, A as _sfc_main$7, __tla as __tla_1 } from "./dashboard-130IcpZV.js";
import { a5 as useSlots, q as toRef, f as computed, D as createBlock, E as openBlock, G as withCtx, O as createCommentVNode, N as createVNode, u as unref, a4 as normalizeClass, H as renderSlot, _ as normalizeProps, $ as guardReactiveProps, A as mergeProps, a7 as toHandlers, d as defineComponent, r as ref, j as watch, a6 as createBaseVNode, U as createElementBlock, F as Fragment, V as renderList, a3 as toDisplayString, a2 as createTextVNode, n as nextTick } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import { r as reactivePick } from "../chunks/index-DVDdEdAO.min.js";
import { _ as _sfc_main$3, __tla as __tla_2 } from "../chunks/Tooltip-ClTQu9aT.min.js";
import { u as useLogStore, __tla as __tla_3 } from "./worker-6X2s87Ux.js";
import { d as dayjs } from "../chunks/dayjs.min-ka9vUWus.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/runtime-dom.esm-bundler-Dg33AbjM.min.js";
import "../chunks/index-DEmRqKf2.min.js";
import { __tla as __tla_4 } from "./cssesc-Du71EH2f.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { __tla as __tla_5 } from "./build-vGvnmmb4.js";
import { __tla as __tla_6 } from "../chunks/index-C8ehqlLx.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./resolve-config-CV0cW2mm.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_7 } from "../chunks/index-DBlFvDtH.min.js";
import "./build-BCr7Zs-w.js";
import "./pre-process-C0QLwsRC.js";
import "../chunks/index-18UIQydn.min.js";
import "../chunks/index-DUqEMfa4.min.js";
let _sfc_main;
let __tla = Promise.all([
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  const theme = {
    "slots": {
      "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
      "arrow": "fill-default"
    }
  };
  const _sfc_main$1 = {
    __name: "Popover",
    props: {
      mode: {
        type: String,
        required: false,
        default: "click"
      },
      content: {
        type: Object,
        required: false
      },
      arrow: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      dismissible: {
        type: Boolean,
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      open: {
        type: Boolean,
        required: false
      },
      modal: {
        type: Boolean,
        required: false
      },
      openDelay: {
        type: Number,
        required: false,
        default: 0
      },
      closeDelay: {
        type: Number,
        required: false,
        default: 0
      }
    },
    emits: [
      "close:prevent",
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const appConfig = useAppConfig();
      const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
      const rootProps = useForwardPropsEmits(pick, emits);
      const portalProps = usePortal(toRef(() => props.portal));
      const contentProps = toRef(() => defu(props.content, {
        side: "bottom",
        sideOffset: 8,
        collisionPadding: 8
      }));
      const contentEvents = computed(() => {
        if (!props.dismissible) {
          const events = [
            "pointerDownOutside",
            "interactOutside",
            "escapeKeyDown"
          ];
          return events.reduce((acc, curr) => {
            acc[curr] = (e) => {
              e.preventDefault();
              emits("close:prevent");
            };
            return acc;
          }, {});
        }
        return {};
      });
      const arrowProps = toRef(() => props.arrow);
      const ui = computed(() => {
        var _a;
        return tv({
          extend: tv(theme),
          ...((_a = appConfig.ui) == null ? void 0 : _a.popover) || {}
        })({
          side: contentProps.value.side
        });
      });
      const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Component).Root, normalizeProps(guardReactiveProps(unref(rootProps))), {
          default: withCtx(({ open }) => [
            !!slots.default ? (openBlock(), createBlock(unref(Component).Trigger, {
              key: 0,
              "as-child": "",
              class: normalizeClass(props.class)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  open
                })
              ]),
              _: 2
            }, 1032, [
              "class"
            ])) : createCommentVNode("", true),
            createVNode(unref(Component).Portal, normalizeProps(guardReactiveProps(unref(portalProps))), {
              default: withCtx(() => {
                var _a;
                return [
                  createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                    class: ui.value.content({
                      class: [
                        !slots.default && props.class,
                        (_a = props.ui) == null ? void 0 : _a.content
                      ]
                    })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        renderSlot(_ctx.$slots, "content"),
                        !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({
                          key: 0
                        }, arrowProps.value, {
                          class: ui.value.arrow({
                            class: (_a2 = props.ui) == null ? void 0 : _a2.arrow
                          })
                        }), null, 16, [
                          "class"
                        ])) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 16, [
                    "class"
                  ])
                ];
              }),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 16);
      };
    }
  };
  const _hoisted_1 = {
    class: "whitespace-nowrap logs-container"
  };
  const _hoisted_2 = {
    class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 mx-auto"
  };
  const _hoisted_3 = {
    key: 0,
    role: "group",
    class: "flex flex-col"
  };
  const _hoisted_4 = [
    "title"
  ];
  const _hoisted_5 = {
    class: "mr-4"
  };
  const _hoisted_6 = {
    key: 0,
    class: "text-(--ui-error)"
  };
  const _hoisted_7 = {
    key: 1,
    class: "text-(--ui-warning)"
  };
  const _hoisted_8 = {
    key: 2,
    class: "text-(--ui-info)"
  };
  const _hoisted_9 = {
    key: 3,
    class: "text-(--ui-success)"
  };
  const _hoisted_10 = {
    key: 4,
    class: ""
  };
  const _hoisted_11 = [
    "innerHTML"
  ];
  const _hoisted_12 = {
    class: "p-6 max-w-[800px] max-h-[400px] overflow-auto"
  };
  const _hoisted_13 = {
    class: "gap-2 flex flex-wrap"
  };
  const _hoisted_14 = {
    class: ""
  };
  const _hoisted_15 = [
    "innerHTML"
  ];
  _sfc_main = defineComponent({
    __name: "Log",
    setup(__props) {
      const log = useLogStore();
      const logHistoryPanel = ref(null);
      watch(log.logs, () => {
        if (!logHistoryPanel.value) {
          const logsContainer = document.querySelector(".logs-container");
          if (logsContainer) {
            logHistoryPanel.value = logsContainer.parentElement;
          } else {
            return;
          }
        }
        let isScrolledToBottom = logHistoryPanel.value && logHistoryPanel.value.scrollHeight - logHistoryPanel.value.clientHeight <= logHistoryPanel.value.scrollTop + 1;
        nextTick(() => {
          if (isScrolledToBottom) {
            if (logHistoryPanel.value) {
              logHistoryPanel.value.scrollTop = logHistoryPanel.value.scrollHeight - logHistoryPanel.value.clientHeight;
            }
          }
        });
      });
      return (_ctx, _cache) => {
        const _component_UDashboardSidebarCollapse = _sfc_main$5;
        const _component_UButton = _sfc_main$4;
        const _component_UTooltip = _sfc_main$3;
        const _component_UDashboardNavbar = _sfc_main$6;
        const _component_UBadge = _sfc_main$7;
        const _component_UPopover = _sfc_main$1;
        const _component_UDashboardPanel = _sfc_main$2;
        return openBlock(), createBlock(_component_UDashboardPanel, {
          id: "logs",
          ui: {
            root: "min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]",
            body: "bg-(--ui-text) text-(--ui-bg) dark:text-(--ui-text) dark:bg-(--ui-bg)"
          }
        }, {
          header: withCtx(() => [
            createVNode(_component_UDashboardNavbar, {
              title: _ctx.i18n.__("Logs", "windpress")
            }, {
              leading: withCtx(() => [
                createVNode(_component_UDashboardSidebarCollapse)
              ]),
              right: withCtx(() => [
                createVNode(_component_UTooltip, {
                  text: _ctx.i18n.__("Clear logs", "windpress")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      icon: "lucide:paintbrush",
                      color: "neutral",
                      variant: "ghost",
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(log).clear())
                    })
                  ]),
                  _: 1
                }, 8, [
                  "text"
                ])
              ]),
              _: 1
            }, 8, [
              "title"
            ])
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                unref(log).logs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(log).logs, (history) => {
                    var _a, _b;
                    return openBlock(), createElementBlock("div", {
                      key: history.id,
                      class: "font-mono"
                    }, [
                      createBaseVNode("span", {
                        title: history.id,
                        class: "text-(--ui-bg)/50 dark:text-(--ui-text)/50"
                      }, "[" + toDisplayString(unref(dayjs)(history.timestamp).format("HH:mm:ss.SSS")) + "]", 9, _hoisted_4),
                      createBaseVNode("span", _hoisted_5, [
                        history.type === "error" ? (openBlock(), createElementBlock("span", _hoisted_6, "[ERROR]")) : history.type === "warning" ? (openBlock(), createElementBlock("span", _hoisted_7, "[WARNING]")) : history.type === "info" ? (openBlock(), createElementBlock("span", _hoisted_8, "[INFO]")) : history.type === "success" ? (openBlock(), createElementBlock("span", _hoisted_9, "[SUCCESS]")) : history.type === "debug" ? (openBlock(), createElementBlock("span", _hoisted_10, "[DEBUG]")) : createCommentVNode("", true)
                      ]),
                      ((_a = history.options) == null ? void 0 : _a.raw) ? (openBlock(), createElementBlock(Fragment, {
                        key: 0
                      }, [
                        ((_b = history.options) == null ? void 0 : _b.candidates) ? (openBlock(), createBlock(_component_UPopover, {
                          key: 0,
                          mode: "hover"
                        }, {
                          content: withCtx(() => {
                            var _a2;
                            return [
                              createBaseVNode("div", _hoisted_12, [
                                createBaseVNode("div", _hoisted_13, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList((_a2 = history.options) == null ? void 0 : _a2.candidates, (candidate) => {
                                    return openBlock(), createElementBlock("div", _hoisted_14, [
                                      createVNode(_component_UBadge, {
                                        color: "neutral",
                                        variant: "outline"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(candidate), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 256))
                                ])
                              ])
                            ];
                          }),
                          default: withCtx(() => [
                            createBaseVNode("span", {
                              innerHTML: history.message
                            }, null, 8, _hoisted_11)
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createElementBlock("span", {
                          key: 1,
                          innerHTML: history.message
                        }, null, 8, _hoisted_15))
                      ], 64)) : (openBlock(), createElementBlock(Fragment, {
                        key: 1
                      }, [
                        createTextVNode(toDisplayString(history.message), 1)
                      ], 64))
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
