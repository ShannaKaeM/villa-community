import { b as vShow, d as vModelCheckbox, c as createApp } from "../chunks/runtime-dom.esm-bundler-Dg33AbjM.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo } from "../chunks/windpress-DnIzWi0E.min.js";
import { settingsState } from "./constant-DM2svGm2.js";
import { _ as _export_sfc } from "../chunks/_plugin-vue_export-helper-pcqpp-6-.min.js";
import { a as inject, r as ref, j as watch, ag as withDirectives, u as unref, U as createElementBlock, E as openBlock, a6 as createBaseVNode } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
const _hoisted_1 = { class: "w:full" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = {
  "data-control": "checkbox",
  type: "checkbox"
};
const _hoisted_4 = { class: "buttons" };
const _hoisted_5 = {
  "data-control": "checkbox",
  type: "checkbox"
};
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = {
  "data-control": "checkbox",
  type: "checkbox"
};
const _hoisted_8 = { class: "buttons" };
const _hoisted_9 = {
  "data-control": "checkbox",
  type: "checkbox"
};
const _hoisted_10 = { class: "buttons" };
const _hoisted_11 = {
  "data-control": "checkbox",
  type: "checkbox"
};
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const isOpen2 = inject("isOpen");
    const mousePosition2 = inject("mousePosition");
    const containerEl = ref(null);
    watch(isOpen2, (value) => {
      if (value) {
        containerEl.value.style.top = `${mousePosition2.value.y}px`;
        containerEl.value.style.left = `${mousePosition2.value.x}px`;
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        id: "windpressbricks-settings-app-container",
        ref_key: "containerEl",
        ref: containerEl,
        class: "flex flex:column"
      }, [
        createBaseVNode("ul", _hoisted_1, [
          _cache[10] || (_cache[10] = createBaseVNode("li", {
            class: "disabled",
            style: { "color": "var(--bricks-text-dark)" }
          }, " Module: Plain Classes ", -1)),
          createBaseVNode("li", null, [
            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "label" }, [
              createBaseVNode("label", { for: "cb-settings-plain-classes-input-field" }, "Input Field")
            ], -1)),
            createBaseVNode("span", _hoisted_2, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_3, [
                  withDirectives(createBaseVNode("input", {
                    id: "cb-settings-plain-classes-input-field",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settingsState)("module.plain-classes.input-field", true).value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(settingsState)("module.plain-classes.input-field", true).value]
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            _cache[6] || (_cache[6] = createBaseVNode("span", { class: "label" }, [
              createBaseVNode("label", { for: "cb-settings-plain-classes-autocomplete" }, "Autocomplete")
            ], -1)),
            createBaseVNode("span", _hoisted_4, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_5, [
                  withDirectives(createBaseVNode("input", {
                    id: "cb-settings-plain-classes-autocomplete",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingsState)("module.plain-classes.autocomplete", true).value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(settingsState)("module.plain-classes.autocomplete", true).value]
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            _cache[7] || (_cache[7] = createBaseVNode("span", { class: "label" }, [
              createBaseVNode("label", { for: "cb-settings-plain-classes-hover-preview-classes" }, "Hover Preview")
            ], -1)),
            createBaseVNode("span", _hoisted_6, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_7, [
                  withDirectives(createBaseVNode("input", {
                    id: "cb-settings-plain-classes-hover-preview-classes",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settingsState)("module.plain-classes.hover-preview-classes", true).value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(settingsState)("module.plain-classes.hover-preview-classes", true).value]
                  ])
                ])
              ])
            ])
          ]),
          _cache[11] || (_cache[11] = createBaseVNode("li", {
            class: "disabled sep-t",
            style: { "color": "var(--bricks-text-dark)" }
          }, " Module: Generate Cache ", -1)),
          createBaseVNode("li", null, [
            _cache[8] || (_cache[8] = createBaseVNode("span", { class: "label" }, [
              createBaseVNode("label", { for: "cb-settings-generate-cache-on-save" }, "On Save")
            ], -1)),
            createBaseVNode("span", _hoisted_8, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_9, [
                  withDirectives(createBaseVNode("input", {
                    id: "cb-settings-generate-cache-on-save",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settingsState)("module.generate-cache.on-save", true).value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(settingsState)("module.generate-cache.on-save", true).value]
                  ])
                ])
              ])
            ])
          ]),
          _cache[12] || (_cache[12] = createBaseVNode("li", {
            class: "disabled sep-t",
            style: { "color": "var(--bricks-text-dark)" }
          }, " Module: HTML2Bricks ", -1)),
          createBaseVNode("li", null, [
            _cache[9] || (_cache[9] = createBaseVNode("span", { class: "label" }, [
              createBaseVNode("label", { for: "cb-settings-html2bricks-copy-paste" }, "Copy-Paste")
            ], -1)),
            createBaseVNode("span", _hoisted_10, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_11, [
                  withDirectives(createBaseVNode("input", {
                    id: "cb-settings-html2bricks-copy-paste",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(settingsState)("module.html2bricks.copy-paste", true).value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(settingsState)("module.html2bricks.copy-paste", true).value]
                  ])
                ])
              ])
            ])
          ])
        ])
      ], 512)), [
        [vShow, unref(isOpen2)]
      ]);
    };
  }
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c14557f"]]);
const bricksToolbarSelector = "#bricks-toolbar ul.group-wrapper.end, #bricks-toolbar ul.group-wrapper.right";
const settingButtonHtml = document.createRange().createContextualFragment(
  /*html*/
  `
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${Logo}
        </span>
    </li>
`
);
const bricksToolbar = document.querySelector(bricksToolbarSelector);
bricksToolbar.insertBefore(settingButtonHtml, bricksToolbar.firstChild);
const settingsButton = document.querySelector("#windpressbricks-settings-navbar");
const isOpen = ref(false);
const mousePosition = ref({ x: null, y: null });
const settingsApp = document.createElement("windpressbricks-settings-app");
settingsApp.id = "windpressbricks-settings-app";
settingsApp.classList.add("master-css");
document.querySelector("div.brx-body.main").appendChild(settingsApp);
settingsButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  isOpen.value = !isOpen.value;
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  };
});
function clickOutside(event) {
  if (event.target.closest("#windpressbricks-settings-app")) {
    return;
  }
  isOpen.value = false;
}
watch(isOpen, (state) => {
  if (!state) {
    document.removeEventListener("click", clickOutside);
  } else {
    document.addEventListener("click", clickOutside, { once: true });
  }
});
const app = createApp(App);
app.provide("isOpen", isOpen);
app.provide("mousePosition", mousePosition);
app.mount("#windpressbricks-settings-app");
logger("Module loaded!", { module: "settings" });
