import { settingsState, brxGlobalProp } from "./constant-DM2svGm2.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { c as customAlphabet } from "../chunks/index.browser-BBNxE1As.min.js";
import { b as isArrayLike, i as isPrototype, a as arrayLikeKeys, k as getPrototype, f as isBuffer, j as isTypedArray, g as cloneBuffer, d as cloneTypedArray, l as isArguments, h as initCloneObject, S as Stack } from "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { d as defineProperty, b as baseAssignValue, a as assignValue, i as isIndex } from "../chunks/set-CQpYICWN.min.js";
import { e as eq, i as isArray, d as isFunction } from "../chunks/_toKey-C72hUfwS.min.js";
import { a as isObject, i as isObjectLike, b as baseGetTag } from "../chunks/isObject-8EXUDN8T.min.js";
import { j as watch } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import "./virtualRef-BhPXRjtr.js";
import "../chunks/index-DVDdEdAO.min.js";
import "../chunks/get-C5gQxxub.min.js";
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
const randomId = () => customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6)();
function generateId() {
  let id = randomId();
  while (id.match(/^\d/)) {
    id = randomId();
  }
  return `windpress${id}`;
}
function parse(domData) {
  const elements = [];
  domData.childNodes.forEach((node) => {
    const transformedNode = transformNode(node);
    if (transformedNode) {
      elements.push(transformedNode);
    }
  });
  return flattenElements(elements, 0);
}
function transformElement(el) {
  const tagName = el.tagName.toLowerCase();
  const brxNode = {
    id: generateId(),
    name: "div",
    settings: {
      tag: tagName
    },
    children: []
  };
  const attrs = [];
  const preservedAttrs = ["id", "class", "href", "src"];
  Object.keys(el.attributes).forEach((attrIndex) => {
    const attrName = el.attributes[attrIndex].name;
    if (!preservedAttrs.includes(attrName)) {
      attrs.push({
        id: generateId(),
        name: attrName,
        value: el.attributes[attrIndex].value
      });
    } else {
      if (attrName === "class" && el.attributes[attrIndex].value.trim() !== "") {
        merge(brxNode.settings, {
          _cssClasses: el.attributes[attrIndex].value
        });
      }
      if (attrName === "id" && el.id.trim() !== "") {
        merge(brxNode.settings, {
          _cssId: el.id
        });
      }
      if (attrName === "href" && el.tagName.toLowerCase() === "a") {
        merge(brxNode.settings, {
          link: {
            url: el.getAttribute("href")
          }
        });
      }
    }
  });
  merge(brxNode.settings, {
    _attributes: attrs
  });
  if (tagName === "svg") {
    brxNode.name = "svg";
    merge(brxNode.settings, {
      source: "code",
      code: el.outerHTML
    });
    brxNode.settings._attributes = [];
    return brxNode;
  }
  if (tagName === "img") {
    let src = el.getAttribute("src");
    brxNode.name = "image";
    merge(brxNode.settings, {
      image: {
        external: true,
        url: src || "",
        full: src || "",
        filename: src.split("/").pop() || ""
      },
      altText: el.getAttribute("alt") || ""
    });
    delete brxNode.settings.tag;
    return brxNode;
  }
  if (tagName.match(/h[1-6]/)) {
    brxNode.name = "heading";
    merge(brxNode.settings, {
      text: el.innerText,
      tag: tagName
    });
  }
  if (tagName === "video" || tagName === "iframe" && (el.getAttribute("src").includes("youtube.com") || el.getAttribute("src").includes("vimeo.com"))) {
    brxNode.name = "video";
    merge(brxNode.settings, {
      source: "url",
      url: tagName === "video" ? el.getAttribute("src") : el.getAttribute("src").split("?")[0]
    });
    delete brxNode.settings.tag;
    return brxNode;
  }
  if (tagName === "a") {
    merge(brxNode.settings, {
      link: {
        type: "external",
        url: el.getAttribute("href") || "",
        newTab: el.getAttribute("target") === "_blank",
        ariaLabel: el.getAttribute("aria-label") || "",
        title: el.getAttribute("title") || "",
        rel: el.getAttribute("rel") || ""
      }
    });
    if (el.children.length === 0) {
      brxNode.name = "text-basic";
      merge(brxNode.settings, {
        text: el.innerText
      });
      return brxNode;
    } else {
      merge(brxNode.settings, {
        text: el.innerText
      });
    }
  }
  el.childNodes.forEach((node) => {
    const transformedNode = transformNode(node);
    if (transformedNode) {
      brxNode.children.push(transformedNode);
    }
  });
  return brxNode;
}
function transformNode(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return transformElement(
      /** @type {Element} */
      node
    );
  }
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
    return {
      id: generateId(),
      name: "text-basic",
      settings: {
        tag: "span",
        text: node.nodeValue
      },
      children: []
    };
  }
  return null;
}
function flattenElements(tree, parent) {
  const flattened = [];
  tree.forEach((el) => {
    el.parent = parent;
    el._children = el.children.map((child) => child.id);
    flattened.push(el);
    flattened.push(...flattenElements(el.children, el.id));
    el.children = el._children;
    delete el._children;
  });
  return flattened;
}
async function checkAndRequestClipboardPermission() {
  if (!navigator.permissions) {
    logger("Clipboard permissions not supported", { module: "html2bricks", type: "error" });
    return false;
  }
  let clipboardContent = "";
  const readStatus = await navigator.permissions.query({ name: "clipboard-read", allowWithoutGesture: false });
  if (readStatus.state === "prompt") {
    logger("Requesting clipboard-read permission", { module: "html2bricks" });
    clipboardContent = await navigator.clipboard.readText();
    if (readStatus.state !== "granted") {
      logger("Clipboard-read permission denied", { module: "html2bricks", type: "error" });
      return false;
    }
  }
  clipboardContent = await navigator.clipboard.readText();
  const writeStatus = await navigator.permissions.query({ name: "clipboard-write" });
  if (writeStatus.state === "prompt") {
    logger("Requesting clipboard-write permission", { module: "html2bricks" });
    await navigator.clipboard.writeText(clipboardContent);
    if (writeStatus.state !== "granted") {
      logger("Clipboard-write permission denied", { module: "html2bricks", type: "error" });
      return false;
    }
  }
  return true;
}
async function htmlPasteHandler() {
  if (!await checkAndRequestClipboardPermission()) {
    brxGlobalProp.$_showMessage("[WindPress] Clipboard access not available");
    return;
  }
  const clipboardText = (await navigator.clipboard.readText()).trim();
  if (!clipboardText || clipboardText.charAt(0) !== "<") {
    logger("Pasted content is not HTML", { module: "html2bricks", type: "error" });
    brxGlobalProp.$_showMessage("[WindPress] Pasted content is not HTML");
    return;
  }
  const doc = new DOMParser().parseFromString(clipboardText, "text/html").body;
  const bricksElements = parse(doc);
  const bricksData = {
    content: bricksElements,
    source: "bricksCopiedElements",
    sourceUrl: window.bricksData.siteUrl,
    version: window.bricksData.version,
    globalClasses: [],
    globalElements: []
  };
  await navigator.clipboard.writeText(JSON.stringify(bricksData, null));
  brxGlobalProp.$_pasteElements();
  brxGlobalProp.$_showMessage("[WindPress] HTML pasted");
  await navigator.clipboard.writeText(clipboardText);
}
document.addEventListener("keydown", (event) => {
  if (!settingsState("module.html2bricks.copy-paste", true).value) {
    return;
  }
  if (event.target.id === "bricks-toolbar" || event.target.id === "bricks-panel") {
    return;
  }
  if (!(event.ctrlKey || event.metaKey) || !event.shiftKey || event.key.toLowerCase() !== "v") {
    return;
  }
  htmlPasteHandler();
});
const pasteItemContextMenu = document.querySelector("#bricks-builder-context-menu li:nth-child(2)");
const pasteMenu = document.createElement("li");
pasteMenu.id = "windpressbricks-html2bricks-context-menu";
pasteMenu.classList.add("sep");
pasteMenu.innerHTML = '<span class="label">Paste HTML</span><span class="shortcut">CTRL + SHIFT + V</span>';
pasteMenu.addEventListener("click", htmlPasteHandler);
const pasteItemStructureHeader = document.querySelector('#bricks-panel-header>ul.actions>li[data-balloon="Paste (All)"]');
const pasteHTMLStructureHeader = document.createElement("li");
pasteHTMLStructureHeader.dataset.balloon = "Paste HTML";
pasteHTMLStructureHeader.dataset.balloonPos = "bottom-right";
pasteHTMLStructureHeader.innerHTML = /*html*/
`
    <span class="bricks-svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
    </span>
`;
pasteHTMLStructureHeader.addEventListener("click", htmlPasteHandler);
const addControl = () => {
  pasteItemContextMenu.classList.remove("sep");
  pasteItemContextMenu.insertAdjacentElement("afterend", pasteMenu);
  pasteItemStructureHeader.insertAdjacentElement("afterend", pasteHTMLStructureHeader);
};
const removeControl = () => {
  pasteItemContextMenu.classList.add("sep");
  pasteMenu.remove();
  pasteHTMLStructureHeader.remove();
};
if (settingsState("module.html2bricks.copy-paste", true).value) {
  addControl();
}
watch(() => settingsState("module.html2bricks.copy-paste", true).value, (value) => {
  if (value) {
    addControl();
  } else {
    removeControl();
  }
});
logger("Module loaded!", { module: "html2bricks" });
