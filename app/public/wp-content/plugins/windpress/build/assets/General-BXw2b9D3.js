import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$a, __tla as __tla_0 } from "../chunks/PageCard-CeumbBaK.min.js";
import { _ as _sfc_main$9, __tla as __tla_1 } from "../chunks/Separator-mcFaqfIZ.min.js";
import { p as useBusyStore, q as cloneDeep, E as useToast, y as useSettingsStore, V as useAppConfig, z as _sfc_main$3, A as _sfc_main$5, C as _sfc_main$6, W as version$1, X as _sfc_main$8, __tla as __tla_2 } from "./dashboard-130IcpZV.js";
import { _ as _sfc_main$4, __tla as __tla_3 } from "../chunks/FormField-CwhCmELr.min.js";
import { _ as _sfc_main$7, __tla as __tla_4 } from "../chunks/Tooltip-ClTQu9aT.min.js";
import { v as vModelRadio } from "../chunks/runtime-dom.esm-bundler-Dg33AbjM.min.js";
import { d as defineStore, a as useApi, __tla as __tla_5 } from "./worker-6X2s87Ux.js";
import { g as get } from "../chunks/get-C5gQxxub.min.js";
import { r as ref, f as computed, d as defineComponent, l as reactive, j as watch, a0 as onBeforeMount, U as createElementBlock, D as createBlock, N as createVNode, G as withCtx, a4 as normalizeClass, u as unref, F as Fragment, a2 as createTextVNode, a3 as toDisplayString, aa as createSlots, a6 as createBaseVNode, ag as withDirectives, E as openBlock } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import { v as version, __tla as __tla_6 } from "./build-vGvnmmb4.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/index-DEmRqKf2.min.js";
import { __tla as __tla_7 } from "./cssesc-Du71EH2f.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_8 } from "../chunks/index-DBlFvDtH.min.js";
import "./build-BCr7Zs-w.js";
import { __tla as __tla_9 } from "../chunks/index-C8ehqlLx.min.js";
import "./pre-process-C0QLwsRC.js";
import "../chunks/index-18UIQydn.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "../chunks/index-DUqEMfa4.min.js";
import "./resolve-config-CV0cW2mm.js";
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
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })()
]).then(async () => {
  const useLicenseStore = defineStore("license", () => {
    const busyStore = useBusyStore();
    const api = useApi();
    const license = ref({
      key: ""
    });
    const isActivated = computed(() => {
      return get(license.value, "is_activated", false);
    });
    async function doPull() {
      busyStore.add("settings.license.doPull");
      return await api.request("/admin/settings/license/index", {
        method: "GET"
      }).then((response) => {
        license.value = cloneDeep(response.data.license);
      }).catch((error) => {
      }).finally(() => {
        busyStore.remove("settings.license.doPull");
      });
    }
    async function doActivate(licenseKey) {
      busyStore.add("settings.license.activate");
      return api.request("/admin/settings/license/activate", {
        method: "POST",
        data: {
          license: licenseKey
        }
      }).then((response) => {
        license.value = cloneDeep(response.data.license);
        return {
          message: response.data.message,
          success: true
        };
      }).catch((error) => {
        throw new Error(error.data ? error.data.message : error.message);
      }).finally(() => {
        busyStore.remove("settings.license.activate");
      });
    }
    async function doDeactivate() {
      busyStore.add("settings.license.deactivate");
      return api.request("/admin/settings/license/deactivate", {
        method: "POST",
        data: {
          license: license.value
        }
      }).then((response) => {
        license.value = cloneDeep(response.data.license);
        return {
          message: response.data.message,
          success: true
        };
      }).catch((error) => {
        throw new Error(error.response ? error.response.data.message : error.message);
      }).finally(() => {
        busyStore.remove("settings.license.deactivate");
      });
    }
    return {
      license,
      isActivated,
      doPull,
      doActivate,
      doDeactivate
    };
  });
  const _hoisted_1 = {
    class: "flex flex-row gap-4 my-2"
  };
  const _hoisted_2 = {
    class: "flex items-center gap-2"
  };
  const _hoisted_3 = {
    class: "text-(--ui-text-muted)"
  };
  const _hoisted_4 = {
    class: "grid grid-cols-2 gap-3"
  };
  const _hoisted_5 = {
    class: "flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white"
  };
  const _hoisted_6 = {
    class: "flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white"
  };
  _sfc_main = defineComponent({
    __name: "General",
    setup(__props) {
      const appConfig = useAppConfig();
      const toast = useToast();
      const licenseStore = useLicenseStore();
      const settingsStore = useSettingsStore();
      const busyStore = useBusyStore();
      const licenseKeyError = ref(false);
      const license = reactive({
        key: ""
      });
      watch(() => license.key, () => {
        licenseKeyError.value = false;
      });
      function doLicenseChange() {
        licenseKeyError.value = false;
        toast.add({
          id: "license.change",
          title: licenseStore.license.key && licenseStore.isActivated ? wp.i18n.__("Deactivating license...", "windprees") : wp.i18n.__("Activating license...", "windpress"),
          description: licenseStore.license.key && licenseStore.isActivated ? wp.i18n.__("Please wait while we deactivate your license key.", "windpress") : wp.i18n.__("Please wait while we activate your license key.", "windpress"),
          icon: "lucide:loader-circle",
          close: false,
          duration: 0,
          color: "neutral",
          ui: {
            icon: "animate-spin"
          }
        });
        const promise = licenseStore.license.key && licenseStore.isActivated ? licenseStore.doDeactivate() : licenseStore.doActivate(license.key);
        promise.then(() => {
          license.key = licenseStore.license.key;
          toast.update("license.change", {
            title: wp.i18n.__("License updated", "windpress"),
            description: licenseStore.isActivated ? wp.i18n.__("Your license key has been activated.", "windpress") : wp.i18n.__("Your license key has been deactivated.", "windpress"),
            icon: "lucide:key-round",
            color: "success",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
        }).catch((error) => {
          toast.update("license.change", {
            title: wp.i18n.__("License update failed", "windpress"),
            description: error instanceof Error ? error.message : wp.i18n.__("An unknown error occurred", "windpress"),
            icon: "lucide:key-round",
            color: "error",
            close: true,
            duration: void 0,
            ui: {
              icon: void 0
            }
          });
          licenseKeyError.value = wp.i18n.__("Invalid license key", "windpress");
        });
      }
      onBeforeMount(() => {
        licenseStore.doPull().then(() => {
          license.key = licenseStore.license.key;
        });
      });
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$3;
        const _component_UPageCard = _sfc_main$2;
        const _component_UInput = _sfc_main$6;
        const _component_UTooltip = _sfc_main$7;
        const _component_UBadge = _sfc_main$5;
        const _component_UFormField = _sfc_main$4;
        const _component_UForm = _sfc_main$1;
        const _component_ULink = _sfc_main$8;
        const _component_USeparator = _sfc_main$9;
        const _component_USwitch = _sfc_main$a;
        return openBlock(), createElementBlock(Fragment, null, [
          _ctx.window.windpress._via_wp_org ? (openBlock(), createBlock(_component_UPageCard, {
            key: 0,
            title: _ctx.i18n.__("License", "windpress"),
            class: "bg-gradient-to-tl from-(--ui-primary)/10 from-5% to-(--ui-bg)"
          }, {
            description: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.i18n.__("You are using the WordPress.org edition.", "windpress")), 1)
            ]),
            footer: withCtx(() => [
              createVNode(_component_UButton, {
                label: _ctx.i18n.__("Upgrade to Pro", "windpress"),
                color: "primary",
                "trailing-icon": unref(appConfig).ui.icons.external,
                ui: {
                  trailingIcon: "inline-block size-3 align-top",
                  base: "gap-[normal] items-start"
                },
                to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${_ctx.window.windpress._version}#pricing`,
                target: "_blank"
              }, null, 8, [
                "label",
                "trailing-icon",
                "to"
              ])
            ]),
            _: 1
          }, 8, [
            "title"
          ])) : (openBlock(), createBlock(_component_UPageCard, {
            key: 1,
            title: "License",
            description: "",
            class: normalizeClass([
              unref(licenseStore).isActivated ? "from-(--ui-primary)/10" : "from-(--ui-warning)/10",
              "bg-gradient-to-tl from-5% to-(--ui-bg)"
            ])
          }, {
            default: withCtx(() => [
              createVNode(_component_UForm, {
                state: license,
                onSubmit: doLicenseChange
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: _ctx.i18n.__("License key", "windpress"),
                    required: "",
                    error: licenseKeyError.value,
                    help: _ctx.i18n.__("To access updates when they are available, please provide your license key.", "windpress")
                  }, createSlots({
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        createVNode(_component_UInput, {
                          modelValue: license.key,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => license.key = $event),
                          type: "password",
                          placeholder: "WIND-12345-67890-PRESS",
                          class: "w-full",
                          "data-1p-ignore": ""
                        }, null, 8, [
                          "modelValue"
                        ]),
                        createVNode(_component_UTooltip, {
                          "delay-duration": 0,
                          text: unref(licenseStore).isActivated ? _ctx.i18n.__("Unregister your WindPress setup", "windpress") : _ctx.i18n.__("Register your WindPress setup", "windpress")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              type: "submit",
                              color: "primary",
                              variant: "subtle",
                              "leading-icon": unref(busyStore).isBusy && unref(busyStore).tasks.some((t) => t.task === "settings.license.activate" || t.task === "settings.license.deactivate") ? "lucide:loader-circle" : void 0,
                              disabled: !license.key || unref(busyStore).isBusy,
                              ui: {
                                leadingIcon: "animate-spin"
                              }
                            }, {
                              default: withCtx(() => [
                                unref(licenseStore).isActivated ? (openBlock(), createElementBlock(Fragment, {
                                  key: 0
                                }, [
                                  createTextVNode(toDisplayString(unref(busyStore).isBusy && unref(busyStore).tasks.some((t) => t.task === "settings.license.deactivate") ? _ctx.i18n.__("Deactivating", "windpress") : _ctx.i18n.__("Deactivate", "windpress")), 1)
                                ], 64)) : (openBlock(), createElementBlock(Fragment, {
                                  key: 1
                                }, [
                                  createTextVNode(toDisplayString(unref(busyStore).isBusy && unref(busyStore).tasks.some((t) => t.task === "settings.license.activate") ? _ctx.i18n.__("Activating", "windpress") : _ctx.i18n.__("Activate", "windpress")), 1)
                                ], 64))
                              ]),
                              _: 1
                            }, 8, [
                              "leading-icon",
                              "disabled"
                            ])
                          ]),
                          _: 1
                        }, 8, [
                          "text"
                        ])
                      ])
                    ]),
                    _: 2
                  }, [
                    unref(licenseStore).license.key ? {
                      name: "hint",
                      fn: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, [
                          createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.i18n.__("Status", "windpress")) + " :", 1),
                          createVNode(_component_UBadge, {
                            color: unref(licenseStore).isActivated ? "success" : "error",
                            variant: "subtle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(licenseStore).isActivated ? _ctx.i18n.__("Active", "windpress") : _ctx.i18n.__("Inactive", "windpress")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "color"
                          ])
                        ])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, [
                    "label",
                    "error",
                    "help"
                  ])
                ]),
                _: 1
              }, 8, [
                "state"
              ])
            ]),
            _: 1
          }, 8, [
            "class"
          ])),
          createVNode(_component_UForm, {
            id: "general",
            state: {}
          }, {
            default: withCtx(() => [
              createVNode(_component_UPageCard, {
                title: _ctx.i18n.__("General", "windpress"),
                description: _ctx.i18n.__("General settings for WindPress.", "windpress"),
                variant: "naked",
                orientation: "horizontal",
                class: "mb-4"
              }, null, 8, [
                "title",
                "description"
              ]),
              createVNode(_component_UPageCard, {
                variant: "subtle"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: _ctx.i18n.__("Tailwind CSS version", "windpress"),
                    description: _ctx.i18n.__("You must update the `main.css` file accordingly.", "windpress"),
                    class: "flex max-sm:flex-col justify-between items-start gap-4",
                    ui: {
                      container: "flex-1"
                    }
                  }, {
                    hint: withCtx(() => [
                      createVNode(_component_ULink, {
                        to: "https://github.com/tailwindlabs/tailwindcss/releases",
                        target: "_blank",
                        class: "underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.i18n.__("See release notes", "windpress")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("label", _hoisted_5, [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value = $event),
                            type: "radio",
                            name: "tailwindcss_version",
                            value: 3,
                            class: "sr-only"
                          }, null, 512), [
                            [
                              vModelRadio,
                              unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value
                            ]
                          ]),
                          createBaseVNode("span", null, toDisplayString(unref(version)), 1)
                        ]),
                        createBaseVNode("label", _hoisted_6, [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value = $event),
                            type: "radio",
                            name: "tailwindcss_version",
                            value: 4,
                            class: "sr-only"
                          }, null, 512), [
                            [
                              vModelRadio,
                              unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value
                            ]
                          ]),
                          createBaseVNode("span", null, toDisplayString(unref(version$1)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "description"
                  ]),
                  createVNode(_component_USeparator),
                  createVNode(_component_UFormField, {
                    label: _ctx.i18n.__("Ubiquitous panel", "windpress"),
                    description: _ctx.i18n.__("Access the WindPress dashboard panel right from the front page and made adjustment as it is on the wp-admin page.", "windpress"),
                    class: "flex items-center justify-between not-last:pb-4 gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USwitch, {
                        modelValue: unref(settingsStore).virtualOptions("general.ubiquitous-panel.enabled", false).value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settingsStore).virtualOptions("general.ubiquitous-panel.enabled", false).value = $event),
                        disabled: ""
                      }, null, 8, [
                        "modelValue"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label",
                    "description"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 64);
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
