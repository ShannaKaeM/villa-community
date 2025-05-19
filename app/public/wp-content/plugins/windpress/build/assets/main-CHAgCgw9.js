import { c as createVirtualRef } from "./virtualRef-BhPXRjtr.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo } from "../chunks/windpress-DnIzWi0E.min.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
const oxygenToolbarSelector = "#oxygen-topbar .oxygen-toolbar-menus:has(.oxygen-dom-tree-button)";
const settingButtonHtml = document.createRange().createContextualFragment(
  /*html*/
  `
    <div class="windpressoxygen-settings-button">
        ${Logo}
    </div>
`
);
createVirtualRef({}, {
  persist: "windpress.ui.state"
});
const oxygenToolbar = document.querySelector(oxygenToolbarSelector);
oxygenToolbar.insertBefore(settingButtonHtml, oxygenToolbar.firstChild);
window.tippy(".windpressoxygen-settings-button", {
  // content: 'WindPress — Oxygen settings',
  content: "WindPress is detected",
  animation: "shift-toward",
  placement: "bottom"
});
document.querySelector(".windpressoxygen-settings-button");
logger("Module loaded!", { module: "settings" });
