import { e as encodeBase64, __tla as __tla_0 } from "./cssesc-Du71EH2f.js";
import { K as effectScope, r as ref, S as markRaw, l as reactive, i as isRef, ae as isReactive, af as toRaw, y as getCurrentScope, v as onScopeDispose, j as watch, n as nextTick, L as toRefs, f as computed, a as inject, h as hasInjectionContext } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
import { n as nanoid } from "../chunks/index.browser-BBNxE1As.min.js";
import { g as useStorage } from "../chunks/index-DVDdEdAO.min.js";
import { a as axios, f as find_tw_candidates, m as minimatch, __tla as __tla_1 } from "../chunks/index-DBlFvDtH.min.js";
import { c as compile, o as optimize } from "./build-BCr7Zs-w.js";
import "../chunks/index-18UIQydn.min.js";
import "../chunks/index-DEmRqKf2.min.js";
import { b as build, o as optimize$1, __tla as __tla_2 } from "./build-vGvnmmb4.js";
import { l as libExports } from "../chunks/index-DUqEMfa4.min.js";
import { g as get$1 } from "../chunks/get-C5gQxxub.min.js";
let useApi, createPinia, defineStore, setupWorker, useLogStore, w;
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
  })()
]).then(async () => {
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol();
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  createPinia = function() {
    const scope = effectScope(true);
    const state = scope.run(() => ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = markRaw({
      install(app) {
        setActivePinia(pinia);
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      },
      use(plugin) {
        if (!this._a) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia;
  };
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && getCurrentScope()) {
      onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  const ACTION_MARKER = Symbol();
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    } else if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key)) continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol();
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && true) {
        pinia.state.value[id] = state ? state() : {};
      }
      const localState = toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = markRaw(computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({
      actions: {}
    }, options);
    const $subscribeOptions = {
      deep: true
    };
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      pinia.state.value[$id] = {};
    }
    ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : noop;
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    const action = (fn, name = "") => {
      if (ACTION_MARKER in fn) {
        fn[ACTION_NAME] = name;
        return fn;
      }
      const wrappedAction = function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: wrappedAction[ACTION_NAME],
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = fn.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
      wrappedAction[ACTION_MARKER] = true;
      wrappedAction[ACTION_NAME] = name;
      return wrappedAction;
    };
    const partialStore = {
      _p: pinia,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = reactive(partialStore);
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({
      action
    }))));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          pinia.state.value[$id][key] = prop;
        }
      } else if (typeof prop === "function") {
        const actionValue = action(prop, key);
        setupStore[key] = actionValue;
        optionsForPlugin.actions[key] = prop;
      } else ;
    }
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
    Object.defineProperty(store, "$state", {
      get: () => pinia.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    pinia._p.forEach((extender) => {
      {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  defineStore = function(id, setup, setupOptions) {
    let options;
    const isSetupStore = typeof setup === "function";
    options = isSetupStore ? setupOptions : setup;
    function useStore(pinia, hot) {
      const hasContext = hasInjectionContext();
      pinia = pinia || (hasContext ? inject(piniaSymbol, null) : null);
      if (pinia) setActivePinia(pinia);
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
      }
      const store = pinia._s.get(id);
      return store;
    }
    useStore.$id = id;
    return useStore;
  };
  let apiInstance;
  useApi = function(config = {}) {
    if (!apiInstance) {
      apiInstance = axios.create(Object.assign({
        baseURL: window.windpress.rest_api.url || "",
        headers: {
          "content-type": "application/json",
          "accept": "application/json",
          "X-WP-Nonce": window.windpress.rest_api.nonce || ""
        }
      }, config));
    }
    return apiInstance;
  };
  function createLogComposable() {
    const welcomeLog = {
      "id": "JqhEkI6VK0",
      "timestamp": 1742407548572,
      "type": "debug",
      "message": 'Thank you for using WindPress! Join us on the Facebook Group: <a href="https://wind.press/go/facebook" target="_blank" class="underline">https://wind.press/go/facebook</a>',
      "options": {
        "raw": true
      }
    };
    const logs = useStorage("windpress.dashboard.store.logs", [
      welcomeLog
    ]);
    function add(log) {
      const id = nanoid(10);
      logs.value.push({
        id,
        timestamp: Date.now(),
        ...log
      });
      return id;
    }
    function update(id, log) {
      const curr = logs.value.find((l2) => l2.id === id);
      if (curr) {
        Object.assign(curr, log);
      }
    }
    function remove(toSearch, by = "id") {
      switch (by) {
        case "message":
          logs.value = logs.value.filter((log) => !log.message.includes(toSearch));
          break;
        case "type":
          logs.value = logs.value.filter((log) => log.type !== toSearch);
          break;
        case "group":
          logs.value = logs.value.filter((log) => log.group !== toSearch);
          break;
        case "id":
        default:
          logs.value = logs.value.filter((log) => log.id !== toSearch);
          break;
      }
    }
    function clear() {
      logs.value = [];
      logs.value.push(welcomeLog);
    }
    return {
      logs,
      add,
      update,
      remove,
      clear
    };
  }
  useLogStore = defineStore("log", () => {
    const composable = createLogComposable();
    return {
      ...composable
    };
  });
  const rawToEntityEntries = [
    [
      "&",
      "&amp;"
    ],
    [
      "<",
      "&lt;"
    ],
    [
      ">",
      "&gt;"
    ],
    [
      '"',
      "&quot;"
    ],
    [
      "'",
      "&#39;"
    ]
  ];
  const defaultEntityList = Object.fromEntries([
    ...rawToEntityEntries.map(([raw, entity]) => [
      entity,
      raw
    ]),
    [
      "&apos;",
      "'"
    ],
    [
      "&nbsp;",
      "\xA0"
    ]
  ]);
  const rawToEntity = new Map(rawToEntityEntries);
  new RegExp(`[${[
    ...rawToEntity.keys()
  ].join("")}]`, "g");
  const defaultUnescapeOptions = {
    entityList: defaultEntityList
  };
  const MAX_CODE_POINT = 1114111;
  const RX_DEC_ENTITY = /&#([0-9]+);/g;
  const RX_HEX_ENTITY = new RegExp("&#x(\\p{AHex}+);", "gu");
  const entityListRegexCache = /* @__PURE__ */ new WeakMap();
  function unescape(str, options = {}) {
    const { entityList } = {
      ...defaultUnescapeOptions,
      ...options
    };
    let entityRe = entityListRegexCache.get(entityList);
    if (!entityRe) {
      entityRe = new RegExp(`(${Object.keys(entityList).sort((a2, b) => b.length - a2.length).join("|")})`, "g");
      entityListRegexCache.set(entityList, entityRe);
    }
    return str.replaceAll(entityRe, (m2) => entityList[m2]).replaceAll(RX_DEC_ENTITY, (_, dec) => codePointStrToChar(dec, 10)).replaceAll(RX_HEX_ENTITY, (_, hex) => codePointStrToChar(hex, 16));
  }
  function codePointStrToChar(codePointStr, radix) {
    const codePoint = parseInt(codePointStr, radix);
    return codePoint > MAX_CODE_POINT ? "\uFFFD" : String.fromCodePoint(codePoint);
  }
  const ALIAS = Symbol.for("yaml.alias");
  const DOC = Symbol.for("yaml.document");
  const MAP = Symbol.for("yaml.map");
  const PAIR = Symbol.for("yaml.pair");
  const SCALAR = Symbol.for("yaml.scalar");
  const SEQ = Symbol.for("yaml.seq");
  const NODE_TYPE = Symbol.for("yaml.node.type");
  const isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
  const isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
  const isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
  const isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
  const isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
  const isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
  function isCollection(node) {
    if (node && typeof node === "object") switch (node[NODE_TYPE]) {
      case MAP:
      case SEQ:
        return true;
    }
    return false;
  }
  function isNode(node) {
    if (node && typeof node === "object") switch (node[NODE_TYPE]) {
      case ALIAS:
      case MAP:
      case SCALAR:
      case SEQ:
        return true;
    }
    return false;
  }
  const hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
  const BREAK = Symbol("break visit");
  const SKIP = Symbol("skip children");
  const REMOVE = Symbol("remove node");
  function visit(node, visitor) {
    const visitor_ = initVisitor(visitor);
    if (isDocument(node)) {
      const cd = visit_(null, node.contents, visitor_, Object.freeze([
        node
      ]));
      if (cd === REMOVE) node.contents = null;
    } else visit_(null, node, visitor_, Object.freeze([]));
  }
  visit.BREAK = BREAK;
  visit.SKIP = SKIP;
  visit.REMOVE = REMOVE;
  function visit_(key, node, visitor, path) {
    const ctrl = callVisitor(key, node, visitor, path);
    if (isNode(ctrl) || isPair(ctrl)) {
      replaceNode(key, path, ctrl);
      return visit_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== "symbol") {
      if (isCollection(node)) {
        path = Object.freeze(path.concat(node));
        for (let i2 = 0; i2 < node.items.length; ++i2) {
          const ci = visit_(i2, node.items[i2], visitor, path);
          if (typeof ci === "number") i2 = ci - 1;
          else if (ci === BREAK) return BREAK;
          else if (ci === REMOVE) {
            node.items.splice(i2, 1);
            i2 -= 1;
          }
        }
      } else if (isPair(node)) {
        path = Object.freeze(path.concat(node));
        const ck = visit_("key", node.key, visitor, path);
        if (ck === BREAK) return BREAK;
        else if (ck === REMOVE) node.key = null;
        const cv = visit_("value", node.value, visitor, path);
        if (cv === BREAK) return BREAK;
        else if (cv === REMOVE) node.value = null;
      }
    }
    return ctrl;
  }
  function initVisitor(visitor) {
    if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
      return Object.assign({
        Alias: visitor.Node,
        Map: visitor.Node,
        Scalar: visitor.Node,
        Seq: visitor.Node
      }, visitor.Value && {
        Map: visitor.Value,
        Scalar: visitor.Value,
        Seq: visitor.Value
      }, visitor.Collection && {
        Map: visitor.Collection,
        Seq: visitor.Collection
      }, visitor);
    }
    return visitor;
  }
  function callVisitor(key, node, visitor, path) {
    var _a, _b, _c, _d, _e;
    if (typeof visitor === "function") return visitor(key, node, path);
    if (isMap(node)) return (_a = visitor.Map) == null ? void 0 : _a.call(visitor, key, node, path);
    if (isSeq(node)) return (_b = visitor.Seq) == null ? void 0 : _b.call(visitor, key, node, path);
    if (isPair(node)) return (_c = visitor.Pair) == null ? void 0 : _c.call(visitor, key, node, path);
    if (isScalar(node)) return (_d = visitor.Scalar) == null ? void 0 : _d.call(visitor, key, node, path);
    if (isAlias(node)) return (_e = visitor.Alias) == null ? void 0 : _e.call(visitor, key, node, path);
    return void 0;
  }
  function replaceNode(key, path, node) {
    const parent = path[path.length - 1];
    if (isCollection(parent)) {
      parent.items[key] = node;
    } else if (isPair(parent)) {
      if (key === "key") parent.key = node;
      else parent.value = node;
    } else if (isDocument(parent)) {
      parent.contents = node;
    } else {
      const pt = isAlias(parent) ? "alias" : "scalar";
      throw new Error(`Cannot replace node with ${pt} parent`);
    }
  }
  const escapeChars = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
  };
  const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
  class Directives {
    constructor(yaml, tags) {
      this.docStart = null;
      this.docEnd = false;
      this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
      this.tags = Object.assign({}, Directives.defaultTags, tags);
    }
    clone() {
      const copy = new Directives(this.yaml, this.tags);
      copy.docStart = this.docStart;
      return copy;
    }
    atDocument() {
      const res = new Directives(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = true;
          break;
        case "1.2":
          this.atNextDocument = false;
          this.yaml = {
            explicit: Directives.defaultYaml.explicit,
            version: "1.2"
          };
          this.tags = Object.assign({}, Directives.defaultTags);
          break;
      }
      return res;
    }
    add(line, onError) {
      if (this.atNextDocument) {
        this.yaml = {
          explicit: Directives.defaultYaml.explicit,
          version: "1.1"
        };
        this.tags = Object.assign({}, Directives.defaultTags);
        this.atNextDocument = false;
      }
      const parts = line.trim().split(/[ \t]+/);
      const name = parts.shift();
      switch (name) {
        case "%TAG": {
          if (parts.length !== 2) {
            onError(0, "%TAG directive should contain exactly two parts");
            if (parts.length < 2) return false;
          }
          const [handle, prefix] = parts;
          this.tags[handle] = prefix;
          return true;
        }
        case "%YAML": {
          this.yaml.explicit = true;
          if (parts.length !== 1) {
            onError(0, "%YAML directive should contain exactly one part");
            return false;
          }
          const [version] = parts;
          if (version === "1.1" || version === "1.2") {
            this.yaml.version = version;
            return true;
          } else {
            const isValid = /^\d+\.\d+$/.test(version);
            onError(6, `Unsupported YAML version ${version}`, isValid);
            return false;
          }
        }
        default:
          onError(0, `Unknown directive ${name}`, true);
          return false;
      }
    }
    tagName(source, onError) {
      if (source === "!") return "!";
      if (source[0] !== "!") {
        onError(`Not a valid tag: ${source}`);
        return null;
      }
      if (source[1] === "<") {
        const verbatim = source.slice(2, -1);
        if (verbatim === "!" || verbatim === "!!") {
          onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
          return null;
        }
        if (source[source.length - 1] !== ">") onError("Verbatim tags must end with a >");
        return verbatim;
      }
      const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
      if (!suffix) onError(`The ${source} tag has no suffix`);
      const prefix = this.tags[handle];
      if (prefix) {
        try {
          return prefix + decodeURIComponent(suffix);
        } catch (error) {
          onError(String(error));
          return null;
        }
      }
      if (handle === "!") return source;
      onError(`Could not resolve tag: ${source}`);
      return null;
    }
    tagString(tag) {
      for (const [handle, prefix] of Object.entries(this.tags)) {
        if (tag.startsWith(prefix)) return handle + escapeTagName(tag.substring(prefix.length));
      }
      return tag[0] === "!" ? tag : `!<${tag}>`;
    }
    toString(doc) {
      const lines = this.yaml.explicit ? [
        `%YAML ${this.yaml.version || "1.2"}`
      ] : [];
      const tagEntries = Object.entries(this.tags);
      let tagNames;
      if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
        const tags = {};
        visit(doc.contents, (_key, node) => {
          if (isNode(node) && node.tag) tags[node.tag] = true;
        });
        tagNames = Object.keys(tags);
      } else tagNames = [];
      for (const [handle, prefix] of tagEntries) {
        if (handle === "!!" && prefix === "tag:yaml.org,2002:") continue;
        if (!doc || tagNames.some((tn) => tn.startsWith(prefix))) lines.push(`%TAG ${handle} ${prefix}`);
      }
      return lines.join("\n");
    }
  }
  Directives.defaultYaml = {
    explicit: false,
    version: "1.2"
  };
  Directives.defaultTags = {
    "!!": "tag:yaml.org,2002:"
  };
  function anchorIsValid(anchor) {
    if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
      const sa = JSON.stringify(anchor);
      const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
      throw new Error(msg);
    }
    return true;
  }
  function anchorNames(root) {
    const anchors = /* @__PURE__ */ new Set();
    visit(root, {
      Value(_key, node) {
        if (node.anchor) anchors.add(node.anchor);
      }
    });
    return anchors;
  }
  function findNewAnchor(prefix, exclude) {
    for (let i2 = 1; true; ++i2) {
      const name = `${prefix}${i2}`;
      if (!exclude.has(name)) return name;
    }
  }
  function createNodeAnchors(doc, prefix) {
    const aliasObjects = [];
    const sourceObjects = /* @__PURE__ */ new Map();
    let prevAnchors = null;
    return {
      onAnchor: (source) => {
        aliasObjects.push(source);
        if (!prevAnchors) prevAnchors = anchorNames(doc);
        const anchor = findNewAnchor(prefix, prevAnchors);
        prevAnchors.add(anchor);
        return anchor;
      },
      setAnchors: () => {
        for (const source of aliasObjects) {
          const ref2 = sourceObjects.get(source);
          if (typeof ref2 === "object" && ref2.anchor && (isScalar(ref2.node) || isCollection(ref2.node))) {
            ref2.node.anchor = ref2.anchor;
          } else {
            const error = new Error("Failed to resolve repeated object (this should not happen)");
            error.source = source;
            throw error;
          }
        }
      },
      sourceObjects
    };
  }
  function applyReviver(reviver, obj, key, val) {
    if (val && typeof val === "object") {
      if (Array.isArray(val)) {
        for (let i2 = 0, len = val.length; i2 < len; ++i2) {
          const v0 = val[i2];
          const v1 = applyReviver(reviver, val, String(i2), v0);
          if (v1 === void 0) delete val[i2];
          else if (v1 !== v0) val[i2] = v1;
        }
      } else if (val instanceof Map) {
        for (const k of Array.from(val.keys())) {
          const v0 = val.get(k);
          const v1 = applyReviver(reviver, val, k, v0);
          if (v1 === void 0) val.delete(k);
          else if (v1 !== v0) val.set(k, v1);
        }
      } else if (val instanceof Set) {
        for (const v0 of Array.from(val)) {
          const v1 = applyReviver(reviver, val, v0, v0);
          if (v1 === void 0) val.delete(v0);
          else if (v1 !== v0) {
            val.delete(v0);
            val.add(v1);
          }
        }
      } else {
        for (const [k, v0] of Object.entries(val)) {
          const v1 = applyReviver(reviver, val, k, v0);
          if (v1 === void 0) delete val[k];
          else if (v1 !== v0) val[k] = v1;
        }
      }
    }
    return reviver.call(obj, key, val);
  }
  function toJS(value, arg, ctx) {
    if (Array.isArray(value)) return value.map((v, i2) => toJS(v, String(i2), ctx));
    if (value && typeof value.toJSON === "function") {
      if (!ctx || !hasAnchor(value)) return value.toJSON(arg, ctx);
      const data = {
        aliasCount: 0,
        count: 1,
        res: void 0
      };
      ctx.anchors.set(value, data);
      ctx.onCreate = (res2) => {
        data.res = res2;
        delete ctx.onCreate;
      };
      const res = value.toJSON(arg, ctx);
      if (ctx.onCreate) ctx.onCreate(res);
      return res;
    }
    if (typeof value === "bigint" && !(ctx == null ? void 0 : ctx.keep)) return Number(value);
    return value;
  }
  class NodeBase {
    constructor(type) {
      Object.defineProperty(this, NODE_TYPE, {
        value: type
      });
    }
    clone() {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (this.range) copy.range = this.range.slice();
      return copy;
    }
    toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      if (!isDocument(doc)) throw new TypeError("A document argument is required");
      const ctx = {
        anchors: /* @__PURE__ */ new Map(),
        doc,
        keep: true,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS(this, "", ctx);
      if (typeof onAnchor === "function") for (const { count, res: res2 } of ctx.anchors.values()) onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver(reviver, {
        "": res
      }, "", res) : res;
    }
  }
  class Alias extends NodeBase {
    constructor(source) {
      super(ALIAS);
      this.source = source;
      Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags");
        }
      });
    }
    resolve(doc) {
      let found = void 0;
      visit(doc, {
        Node: (_key, node) => {
          if (node === this) return visit.BREAK;
          if (node.anchor === this.source) found = node;
        }
      });
      return found;
    }
    toJSON(_arg, ctx) {
      if (!ctx) return {
        source: this.source
      };
      const { anchors, doc, maxAliasCount } = ctx;
      const source = this.resolve(doc);
      if (!source) {
        const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(msg);
      }
      let data = anchors.get(source);
      if (!data) {
        toJS(source, null, ctx);
        data = anchors.get(source);
      }
      if (!data || data.res === void 0) {
        const msg = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(msg);
      }
      if (maxAliasCount >= 0) {
        data.count += 1;
        if (data.aliasCount === 0) data.aliasCount = getAliasCount(doc, source, anchors);
        if (data.count * data.aliasCount > maxAliasCount) {
          const msg = "Excessive alias count indicates a resource exhaustion attack";
          throw new ReferenceError(msg);
        }
      }
      return data.res;
    }
    toString(ctx, _onComment, _onChompKeep) {
      const src = `*${this.source}`;
      if (ctx) {
        anchorIsValid(this.source);
        if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
          const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(msg);
        }
        if (ctx.implicitKey) return `${src} `;
      }
      return src;
    }
  }
  function getAliasCount(doc, node, anchors) {
    if (isAlias(node)) {
      const source = node.resolve(doc);
      const anchor = anchors && source && anchors.get(source);
      return anchor ? anchor.count * anchor.aliasCount : 0;
    } else if (isCollection(node)) {
      let count = 0;
      for (const item of node.items) {
        const c2 = getAliasCount(doc, item, anchors);
        if (c2 > count) count = c2;
      }
      return count;
    } else if (isPair(node)) {
      const kc = getAliasCount(doc, node.key, anchors);
      const vc = getAliasCount(doc, node.value, anchors);
      return Math.max(kc, vc);
    }
    return 1;
  }
  const isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
  class Scalar extends NodeBase {
    constructor(value) {
      super(SCALAR);
      this.value = value;
    }
    toJSON(arg, ctx) {
      return (ctx == null ? void 0 : ctx.keep) ? this.value : toJS(this.value, arg, ctx);
    }
    toString() {
      return String(this.value);
    }
  }
  Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
  Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
  Scalar.PLAIN = "PLAIN";
  Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
  Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
  const defaultTagPrefix = "tag:yaml.org,2002:";
  function findTagObject(value, tagName, tags) {
    if (tagName) {
      const match = tags.filter((t) => t.tag === tagName);
      const tagObj = match.find((t) => !t.format) ?? match[0];
      if (!tagObj) throw new Error(`Tag ${tagName} not found`);
      return tagObj;
    }
    return tags.find((t) => {
      var _a;
      return ((_a = t.identify) == null ? void 0 : _a.call(t, value)) && !t.format;
    });
  }
  function createNode(value, tagName, ctx) {
    var _a, _b, _c;
    if (isDocument(value)) value = value.contents;
    if (isNode(value)) return value;
    if (isPair(value)) {
      const map2 = (_b = (_a = ctx.schema[MAP]).createNode) == null ? void 0 : _b.call(_a, ctx.schema, null, ctx);
      map2.items.push(value);
      return map2;
    }
    if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
      value = value.valueOf();
    }
    const { aliasDuplicateObjects, onAnchor, onTagObj, schema: schema2, sourceObjects } = ctx;
    let ref2 = void 0;
    if (aliasDuplicateObjects && value && typeof value === "object") {
      ref2 = sourceObjects.get(value);
      if (ref2) {
        if (!ref2.anchor) ref2.anchor = onAnchor(value);
        return new Alias(ref2.anchor);
      } else {
        ref2 = {
          anchor: null,
          node: null
        };
        sourceObjects.set(value, ref2);
      }
    }
    if (tagName == null ? void 0 : tagName.startsWith("!!")) tagName = defaultTagPrefix + tagName.slice(2);
    let tagObj = findTagObject(value, tagName, schema2.tags);
    if (!tagObj) {
      if (value && typeof value.toJSON === "function") {
        value = value.toJSON();
      }
      if (!value || typeof value !== "object") {
        const node2 = new Scalar(value);
        if (ref2) ref2.node = node2;
        return node2;
      }
      tagObj = value instanceof Map ? schema2[MAP] : Symbol.iterator in Object(value) ? schema2[SEQ] : schema2[MAP];
    }
    if (onTagObj) {
      onTagObj(tagObj);
      delete ctx.onTagObj;
    }
    const node = (tagObj == null ? void 0 : tagObj.createNode) ? tagObj.createNode(ctx.schema, value, ctx) : typeof ((_c = tagObj == null ? void 0 : tagObj.nodeClass) == null ? void 0 : _c.from) === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
    if (tagName) node.tag = tagName;
    else if (!tagObj.default) node.tag = tagObj.tag;
    if (ref2) ref2.node = node;
    return node;
  }
  function collectionFromPath(schema2, path, value) {
    let v = value;
    for (let i2 = path.length - 1; i2 >= 0; --i2) {
      const k = path[i2];
      if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
        const a2 = [];
        a2[k] = v;
        v = a2;
      } else {
        v = /* @__PURE__ */ new Map([
          [
            k,
            v
          ]
        ]);
      }
    }
    return createNode(v, void 0, {
      aliasDuplicateObjects: false,
      keepUndefined: false,
      onAnchor: () => {
        throw new Error("This should not happen, please report a bug.");
      },
      schema: schema2,
      sourceObjects: /* @__PURE__ */ new Map()
    });
  }
  const isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
  class Collection extends NodeBase {
    constructor(type, schema2) {
      super(type);
      Object.defineProperty(this, "schema", {
        value: schema2,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    clone(schema2) {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (schema2) copy.schema = schema2;
      copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema2) : it);
      if (this.range) copy.range = this.range.slice();
      return copy;
    }
    addIn(path, value) {
      if (isEmptyPath(path)) this.add(value);
      else {
        const [key, ...rest] = path;
        const node = this.get(key, true);
        if (isCollection(node)) node.addIn(rest, value);
        else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
        else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
    deleteIn(path) {
      const [key, ...rest] = path;
      if (rest.length === 0) return this.delete(key);
      const node = this.get(key, true);
      if (isCollection(node)) return node.deleteIn(rest);
      else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
    getIn(path, keepScalar) {
      const [key, ...rest] = path;
      const node = this.get(key, true);
      if (rest.length === 0) return !keepScalar && isScalar(node) ? node.value : node;
      else return isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
    }
    hasAllNullValues(allowScalar) {
      return this.items.every((node) => {
        if (!isPair(node)) return false;
        const n2 = node.value;
        return n2 == null || allowScalar && isScalar(n2) && n2.value == null && !n2.commentBefore && !n2.comment && !n2.tag;
      });
    }
    hasIn(path) {
      const [key, ...rest] = path;
      if (rest.length === 0) return this.has(key);
      const node = this.get(key, true);
      return isCollection(node) ? node.hasIn(rest) : false;
    }
    setIn(path, value) {
      const [key, ...rest] = path;
      if (rest.length === 0) {
        this.set(key, value);
      } else {
        const node = this.get(key, true);
        if (isCollection(node)) node.setIn(rest, value);
        else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
        else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
  }
  const stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
  function indentComment(comment, indent) {
    if (/^\n+$/.test(comment)) return comment.substring(1);
    return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
  }
  const lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
  const FOLD_FLOW = "flow";
  const FOLD_BLOCK = "block";
  const FOLD_QUOTED = "quoted";
  function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
    if (!lineWidth || lineWidth < 0) return text;
    if (lineWidth < minContentWidth) minContentWidth = 0;
    const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
    if (text.length <= endStep) return text;
    const folds = [];
    const escapedFolds = {};
    let end = lineWidth - indent.length;
    if (typeof indentAtStart === "number") {
      if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
      else end = lineWidth - indentAtStart;
    }
    let split = void 0;
    let prev = void 0;
    let overflow = false;
    let i2 = -1;
    let escStart = -1;
    let escEnd = -1;
    if (mode === FOLD_BLOCK) {
      i2 = consumeMoreIndentedLines(text, i2, indent.length);
      if (i2 !== -1) end = i2 + endStep;
    }
    for (let ch; ch = text[i2 += 1]; ) {
      if (mode === FOLD_QUOTED && ch === "\\") {
        escStart = i2;
        switch (text[i2 + 1]) {
          case "x":
            i2 += 3;
            break;
          case "u":
            i2 += 5;
            break;
          case "U":
            i2 += 9;
            break;
          default:
            i2 += 1;
        }
        escEnd = i2;
      }
      if (ch === "\n") {
        if (mode === FOLD_BLOCK) i2 = consumeMoreIndentedLines(text, i2, indent.length);
        end = i2 + indent.length + endStep;
        split = void 0;
      } else {
        if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
          const next = text[i2 + 1];
          if (next && next !== " " && next !== "\n" && next !== "	") split = i2;
        }
        if (i2 >= end) {
          if (split) {
            folds.push(split);
            end = split + endStep;
            split = void 0;
          } else if (mode === FOLD_QUOTED) {
            while (prev === " " || prev === "	") {
              prev = ch;
              ch = text[i2 += 1];
              overflow = true;
            }
            const j = i2 > escEnd + 1 ? i2 - 2 : escStart - 1;
            if (escapedFolds[j]) return text;
            folds.push(j);
            escapedFolds[j] = true;
            end = j + endStep;
            split = void 0;
          } else {
            overflow = true;
          }
        }
      }
      prev = ch;
    }
    if (overflow && onOverflow) onOverflow();
    if (folds.length === 0) return text;
    if (onFold) onFold();
    let res = text.slice(0, folds[0]);
    for (let i3 = 0; i3 < folds.length; ++i3) {
      const fold = folds[i3];
      const end2 = folds[i3 + 1] || text.length;
      if (fold === 0) res = `
${indent}${text.slice(0, end2)}`;
      else {
        if (mode === FOLD_QUOTED && escapedFolds[fold]) res += `${text[fold]}\\`;
        res += `
${indent}${text.slice(fold + 1, end2)}`;
      }
    }
    return res;
  }
  function consumeMoreIndentedLines(text, i2, indent) {
    let end = i2;
    let start = i2 + 1;
    let ch = text[start];
    while (ch === " " || ch === "	") {
      if (i2 < start + indent) {
        ch = text[++i2];
      } else {
        do {
          ch = text[++i2];
        } while (ch && ch !== "\n");
        end = i2;
        start = i2 + 1;
        ch = text[start];
      }
    }
    return end;
  }
  const getFoldOptions = (ctx, isBlock) => ({
    indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
    lineWidth: ctx.options.lineWidth,
    minContentWidth: ctx.options.minContentWidth
  });
  const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
  function lineLengthOverLimit(str, lineWidth, indentLength) {
    if (!lineWidth || lineWidth < 0) return false;
    const limit = lineWidth - indentLength;
    const strLen = str.length;
    if (strLen <= limit) return false;
    for (let i2 = 0, start = 0; i2 < strLen; ++i2) {
      if (str[i2] === "\n") {
        if (i2 - start > limit) return true;
        start = i2 + 1;
        if (strLen - start <= limit) return false;
      }
    }
    return true;
  }
  function doubleQuotedString(value, ctx) {
    const json = JSON.stringify(value);
    if (ctx.options.doubleQuotedAsJSON) return json;
    const { implicitKey } = ctx;
    const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    let str = "";
    let start = 0;
    for (let i2 = 0, ch = json[i2]; ch; ch = json[++i2]) {
      if (ch === " " && json[i2 + 1] === "\\" && json[i2 + 2] === "n") {
        str += json.slice(start, i2) + "\\ ";
        i2 += 1;
        start = i2;
        ch = "\\";
      }
      if (ch === "\\") switch (json[i2 + 1]) {
        case "u":
          {
            str += json.slice(start, i2);
            const code = json.substr(i2 + 2, 4);
            switch (code) {
              case "0000":
                str += "\\0";
                break;
              case "0007":
                str += "\\a";
                break;
              case "000b":
                str += "\\v";
                break;
              case "001b":
                str += "\\e";
                break;
              case "0085":
                str += "\\N";
                break;
              case "00a0":
                str += "\\_";
                break;
              case "2028":
                str += "\\L";
                break;
              case "2029":
                str += "\\P";
                break;
              default:
                if (code.substr(0, 2) === "00") str += "\\x" + code.substr(2);
                else str += json.substr(i2, 6);
            }
            i2 += 5;
            start = i2 + 1;
          }
          break;
        case "n":
          if (implicitKey || json[i2 + 2] === '"' || json.length < minMultiLineLength) {
            i2 += 1;
          } else {
            str += json.slice(start, i2) + "\n\n";
            while (json[i2 + 2] === "\\" && json[i2 + 3] === "n" && json[i2 + 4] !== '"') {
              str += "\n";
              i2 += 2;
            }
            str += indent;
            if (json[i2 + 2] === " ") str += "\\";
            i2 += 1;
            start = i2 + 1;
          }
          break;
        default:
          i2 += 1;
      }
    }
    str = start ? str + json.slice(start) : json;
    return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
  }
  function singleQuotedString(value, ctx) {
    if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
    return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function quotedString(value, ctx) {
    const { singleQuote } = ctx.options;
    let qs;
    if (singleQuote === false) qs = doubleQuotedString;
    else {
      const hasDouble = value.includes('"');
      const hasSingle = value.includes("'");
      if (hasDouble && !hasSingle) qs = singleQuotedString;
      else if (hasSingle && !hasDouble) qs = doubleQuotedString;
      else qs = singleQuote ? singleQuotedString : doubleQuotedString;
    }
    return qs(value, ctx);
  }
  let blockEndNewlines;
  try {
    blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
  } catch {
    blockEndNewlines = /\n+(?!\n|$)/g;
  }
  function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
    const { blockQuote, commentString, lineWidth } = ctx.options;
    if (!blockQuote || /\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
      return quotedString(value, ctx);
    }
    const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
    const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
    if (!value) return literal ? "|\n" : ">\n";
    let chomp;
    let endStart;
    for (endStart = value.length; endStart > 0; --endStart) {
      const ch = value[endStart - 1];
      if (ch !== "\n" && ch !== "	" && ch !== " ") break;
    }
    let end = value.substring(endStart);
    const endNlPos = end.indexOf("\n");
    if (endNlPos === -1) {
      chomp = "-";
    } else if (value === end || endNlPos !== end.length - 1) {
      chomp = "+";
      if (onChompKeep) onChompKeep();
    } else {
      chomp = "";
    }
    if (end) {
      value = value.slice(0, -end.length);
      if (end[end.length - 1] === "\n") end = end.slice(0, -1);
      end = end.replace(blockEndNewlines, `$&${indent}`);
    }
    let startWithSpace = false;
    let startEnd;
    let startNlPos = -1;
    for (startEnd = 0; startEnd < value.length; ++startEnd) {
      const ch = value[startEnd];
      if (ch === " ") startWithSpace = true;
      else if (ch === "\n") startNlPos = startEnd;
      else break;
    }
    let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
    if (start) {
      value = value.substring(start.length);
      start = start.replace(/\n+/g, `$&${indent}`);
    }
    const indentSize = indent ? "2" : "1";
    let header = (startWithSpace ? indentSize : "") + chomp;
    if (comment) {
      header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
      if (onComment) onComment();
    }
    if (!literal) {
      const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
      let literalFallback = false;
      const foldOptions = getFoldOptions(ctx, true);
      if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) {
        foldOptions.onOverflow = () => {
          literalFallback = true;
        };
      }
      const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
      if (!literalFallback) return `>${header}
${indent}${body}`;
    }
    value = value.replace(/\n+/g, `$&${indent}`);
    return `|${header}
${indent}${start}${value}${end}`;
  }
  function plainString(item, ctx, onComment, onChompKeep) {
    const { type, value } = item;
    const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
    if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
      return quotedString(value, ctx);
    }
    if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
      return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
    }
    if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes("\n")) {
      return blockString(item, ctx, onComment, onChompKeep);
    }
    if (containsDocumentMarker(value)) {
      if (indent === "") {
        ctx.forceBlockIndent = true;
        return blockString(item, ctx, onComment, onChompKeep);
      } else if (implicitKey && indent === indentStep) {
        return quotedString(value, ctx);
      }
    }
    const str = value.replace(/\n+/g, `$&
${indent}`);
    if (actualString) {
      const test = (tag) => {
        var _a;
        return tag.default && tag.tag !== "tag:yaml.org,2002:str" && ((_a = tag.test) == null ? void 0 : _a.test(str));
      };
      const { compat, tags } = ctx.doc.schema;
      if (tags.some(test) || (compat == null ? void 0 : compat.some(test))) return quotedString(value, ctx);
    }
    return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function stringifyString(item, ctx, onComment, onChompKeep) {
    const { implicitKey, inFlow } = ctx;
    const ss = typeof item.value === "string" ? item : Object.assign({}, item, {
      value: String(item.value)
    });
    let { type } = item;
    if (type !== Scalar.QUOTE_DOUBLE) {
      if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value)) type = Scalar.QUOTE_DOUBLE;
    }
    const _stringify = (_type) => {
      switch (_type) {
        case Scalar.BLOCK_FOLDED:
        case Scalar.BLOCK_LITERAL:
          return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
        case Scalar.QUOTE_DOUBLE:
          return doubleQuotedString(ss.value, ctx);
        case Scalar.QUOTE_SINGLE:
          return singleQuotedString(ss.value, ctx);
        case Scalar.PLAIN:
          return plainString(ss, ctx, onComment, onChompKeep);
        default:
          return null;
      }
    };
    let res = _stringify(type);
    if (res === null) {
      const { defaultKeyType, defaultStringType } = ctx.options;
      const t = implicitKey && defaultKeyType || defaultStringType;
      res = _stringify(t);
      if (res === null) throw new Error(`Unsupported default string type ${t}`);
    }
    return res;
  }
  function createStringifyContext(doc, options) {
    const opt = Object.assign({
      blockQuote: true,
      commentString: stringifyComment,
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: false,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      flowCollectionPadding: true,
      indentSeq: true,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: false,
      singleQuote: null,
      trueStr: "true",
      verifyAliasOrder: true
    }, doc.schema.toStringOptions, options);
    let inFlow;
    switch (opt.collectionStyle) {
      case "block":
        inFlow = false;
        break;
      case "flow":
        inFlow = true;
        break;
      default:
        inFlow = null;
    }
    return {
      anchors: /* @__PURE__ */ new Set(),
      doc,
      flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
      indent: "",
      indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
      inFlow,
      options: opt
    };
  }
  function getTagObject(tags, item) {
    var _a;
    if (item.tag) {
      const match = tags.filter((t) => t.tag === item.tag);
      if (match.length > 0) return match.find((t) => t.format === item.format) ?? match[0];
    }
    let tagObj = void 0;
    let obj;
    if (isScalar(item)) {
      obj = item.value;
      let match = tags.filter((t) => {
        var _a2;
        return (_a2 = t.identify) == null ? void 0 : _a2.call(t, obj);
      });
      if (match.length > 1) {
        const testMatch = match.filter((t) => t.test);
        if (testMatch.length > 0) match = testMatch;
      }
      tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
    } else {
      obj = item;
      tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
    }
    if (!tagObj) {
      const name = ((_a = obj == null ? void 0 : obj.constructor) == null ? void 0 : _a.name) ?? typeof obj;
      throw new Error(`Tag not resolved for ${name} value`);
    }
    return tagObj;
  }
  function stringifyProps(node, tagObj, { anchors, doc }) {
    if (!doc.directives) return "";
    const props = [];
    const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
    if (anchor && anchorIsValid(anchor)) {
      anchors.add(anchor);
      props.push(`&${anchor}`);
    }
    const tag = node.tag ? node.tag : tagObj.default ? null : tagObj.tag;
    if (tag) props.push(doc.directives.tagString(tag));
    return props.join(" ");
  }
  function stringify$1(item, ctx, onComment, onChompKeep) {
    var _a;
    if (isPair(item)) return item.toString(ctx, onComment, onChompKeep);
    if (isAlias(item)) {
      if (ctx.doc.directives) return item.toString(ctx);
      if ((_a = ctx.resolvedAliases) == null ? void 0 : _a.has(item)) {
        throw new TypeError(`Cannot stringify circular structure without alias nodes`);
      } else {
        if (ctx.resolvedAliases) ctx.resolvedAliases.add(item);
        else ctx.resolvedAliases = /* @__PURE__ */ new Set([
          item
        ]);
        item = item.resolve(ctx.doc);
      }
    }
    let tagObj = void 0;
    const node = isNode(item) ? item : ctx.doc.createNode(item, {
      onTagObj: (o) => tagObj = o
    });
    if (!tagObj) tagObj = getTagObject(ctx.doc.schema.tags, node);
    const props = stringifyProps(node, tagObj, ctx);
    if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
    const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
    if (!props) return str;
    return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
  }
  function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
    const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
    let keyComment = isNode(key) && key.comment || null;
    if (simpleKeys) {
      if (keyComment) {
        throw new Error("With simple keys, key nodes cannot have comments");
      }
      if (isCollection(key) || !isNode(key) && typeof key === "object") {
        const msg = "With simple keys, collection cannot be used as a key value";
        throw new Error(msg);
      }
    }
    let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
    ctx = Object.assign({}, ctx, {
      allNullValues: false,
      implicitKey: !explicitKey && (simpleKeys || !allNullValues),
      indent: indent + indentStep
    });
    let keyCommentDone = false;
    let chompKeep = false;
    let str = stringify$1(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
    if (!explicitKey && !ctx.inFlow && str.length > 1024) {
      if (simpleKeys) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
      explicitKey = true;
    }
    if (ctx.inFlow) {
      if (allNullValues || value == null) {
        if (keyCommentDone && onComment) onComment();
        return str === "" ? "?" : explicitKey ? `? ${str}` : str;
      }
    } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
      str = `? ${str}`;
      if (keyComment && !keyCommentDone) {
        str += lineComment(str, ctx.indent, commentString(keyComment));
      } else if (chompKeep && onChompKeep) onChompKeep();
      return str;
    }
    if (keyCommentDone) keyComment = null;
    if (explicitKey) {
      if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
      str = `? ${str}
${indent}:`;
    } else {
      str = `${str}:`;
      if (keyComment) str += lineComment(str, ctx.indent, commentString(keyComment));
    }
    let vsb, vcb, valueComment;
    if (isNode(value)) {
      vsb = !!value.spaceBefore;
      vcb = value.commentBefore;
      valueComment = value.comment;
    } else {
      vsb = false;
      vcb = null;
      valueComment = null;
      if (value && typeof value === "object") value = doc.createNode(value);
    }
    ctx.implicitKey = false;
    if (!explicitKey && !keyComment && isScalar(value)) ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) {
      ctx.indent = ctx.indent.substring(2);
    }
    let valueCommentDone = false;
    const valueStr = stringify$1(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
    let ws = " ";
    if (keyComment || vsb || vcb) {
      ws = vsb ? "\n" : "";
      if (vcb) {
        const cs = commentString(vcb);
        ws += `
${indentComment(cs, ctx.indent)}`;
      }
      if (valueStr === "" && !ctx.inFlow) {
        if (ws === "\n") ws = "\n\n";
      } else {
        ws += `
${ctx.indent}`;
      }
    } else if (!explicitKey && isCollection(value)) {
      const vs0 = valueStr[0];
      const nl0 = valueStr.indexOf("\n");
      const hasNewline = nl0 !== -1;
      const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
      if (hasNewline || !flow) {
        let hasPropsLine = false;
        if (hasNewline && (vs0 === "&" || vs0 === "!")) {
          let sp0 = valueStr.indexOf(" ");
          if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
            sp0 = valueStr.indexOf(" ", sp0 + 1);
          }
          if (sp0 === -1 || nl0 < sp0) hasPropsLine = true;
        }
        if (!hasPropsLine) ws = `
${ctx.indent}`;
      }
    } else if (valueStr === "" || valueStr[0] === "\n") {
      ws = "";
    }
    str += ws + valueStr;
    if (ctx.inFlow) {
      if (valueCommentDone && onComment) onComment();
    } else if (valueComment && !valueCommentDone) {
      str += lineComment(str, ctx.indent, commentString(valueComment));
    } else if (chompKeep && onChompKeep) {
      onChompKeep();
    }
    return str;
  }
  function warn(logLevel, warning) {
    if (logLevel === "debug" || logLevel === "warn") {
      console.warn(warning);
    }
  }
  const MERGE_KEY = "<<";
  const merge = {
    identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), {
      addToJSMap: addMergeToJSMap
    }),
    stringify: () => MERGE_KEY
  };
  const isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && (ctx == null ? void 0 : ctx.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default));
  function addMergeToJSMap(ctx, map2, value) {
    value = ctx && isAlias(value) ? value.resolve(ctx.doc) : value;
    if (isSeq(value)) for (const it of value.items) mergeValue(ctx, map2, it);
    else if (Array.isArray(value)) for (const it of value) mergeValue(ctx, map2, it);
    else mergeValue(ctx, map2, value);
  }
  function mergeValue(ctx, map2, value) {
    const source = ctx && isAlias(value) ? value.resolve(ctx.doc) : value;
    if (!isMap(source)) throw new Error("Merge sources must be maps or map aliases");
    const srcMap = source.toJSON(null, ctx, Map);
    for (const [key, value2] of srcMap) {
      if (map2 instanceof Map) {
        if (!map2.has(key)) map2.set(key, value2);
      } else if (map2 instanceof Set) {
        map2.add(key);
      } else if (!Object.prototype.hasOwnProperty.call(map2, key)) {
        Object.defineProperty(map2, key, {
          value: value2,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
    return map2;
  }
  function addPairToJSMap(ctx, map2, { key, value }) {
    if (isNode(key) && key.addToJSMap) key.addToJSMap(ctx, map2, value);
    else if (isMergeKey(ctx, key)) addMergeToJSMap(ctx, map2, value);
    else {
      const jsKey = toJS(key, "", ctx);
      if (map2 instanceof Map) {
        map2.set(jsKey, toJS(value, jsKey, ctx));
      } else if (map2 instanceof Set) {
        map2.add(jsKey);
      } else {
        const stringKey = stringifyKey(key, jsKey, ctx);
        const jsValue = toJS(value, stringKey, ctx);
        if (stringKey in map2) Object.defineProperty(map2, stringKey, {
          value: jsValue,
          writable: true,
          enumerable: true,
          configurable: true
        });
        else map2[stringKey] = jsValue;
      }
    }
    return map2;
  }
  function stringifyKey(key, jsKey, ctx) {
    if (jsKey === null) return "";
    if (typeof jsKey !== "object") return String(jsKey);
    if (isNode(key) && (ctx == null ? void 0 : ctx.doc)) {
      const strCtx = createStringifyContext(ctx.doc, {});
      strCtx.anchors = /* @__PURE__ */ new Set();
      for (const node of ctx.anchors.keys()) strCtx.anchors.add(node.anchor);
      strCtx.inFlow = true;
      strCtx.inStringifyKey = true;
      const strKey = key.toString(strCtx);
      if (!ctx.mapKeyWarned) {
        let jsonStr = JSON.stringify(strKey);
        if (jsonStr.length > 40) jsonStr = jsonStr.substring(0, 36) + '..."';
        warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
        ctx.mapKeyWarned = true;
      }
      return strKey;
    }
    return JSON.stringify(jsKey);
  }
  function createPair(key, value, ctx) {
    const k = createNode(key, void 0, ctx);
    const v = createNode(value, void 0, ctx);
    return new Pair(k, v);
  }
  class Pair {
    constructor(key, value = null) {
      Object.defineProperty(this, NODE_TYPE, {
        value: PAIR
      });
      this.key = key;
      this.value = value;
    }
    clone(schema2) {
      let { key, value } = this;
      if (isNode(key)) key = key.clone(schema2);
      if (isNode(value)) value = value.clone(schema2);
      return new Pair(key, value);
    }
    toJSON(_, ctx) {
      const pair = (ctx == null ? void 0 : ctx.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      return addPairToJSMap(ctx, pair, this);
    }
    toString(ctx, onComment, onChompKeep) {
      return (ctx == null ? void 0 : ctx.doc) ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
    }
  }
  function stringifyCollection(collection, ctx, options) {
    const flow = ctx.inFlow ?? collection.flow;
    const stringify2 = flow ? stringifyFlowCollection : stringifyBlockCollection;
    return stringify2(collection, ctx, options);
  }
  function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
    const { indent, options: { commentString } } = ctx;
    const itemCtx = Object.assign({}, ctx, {
      indent: itemIndent,
      type: null
    });
    let chompKeep = false;
    const lines = [];
    for (let i2 = 0; i2 < items.length; ++i2) {
      const item = items[i2];
      let comment2 = null;
      if (isNode(item)) {
        if (!chompKeep && item.spaceBefore) lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
        if (item.comment) comment2 = item.comment;
      } else if (isPair(item)) {
        const ik = isNode(item.key) ? item.key : null;
        if (ik) {
          if (!chompKeep && ik.spaceBefore) lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
        }
      }
      chompKeep = false;
      let str2 = stringify$1(item, itemCtx, () => comment2 = null, () => chompKeep = true);
      if (comment2) str2 += lineComment(str2, itemIndent, commentString(comment2));
      if (chompKeep && comment2) chompKeep = false;
      lines.push(blockItemPrefix + str2);
    }
    let str;
    if (lines.length === 0) {
      str = flowChars.start + flowChars.end;
    } else {
      str = lines[0];
      for (let i2 = 1; i2 < lines.length; ++i2) {
        const line = lines[i2];
        str += line ? `
${indent}${line}` : "\n";
      }
    }
    if (comment) {
      str += "\n" + indentComment(commentString(comment), indent);
      if (onComment) onComment();
    } else if (chompKeep && onChompKeep) onChompKeep();
    return str;
  }
  function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
    const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
    itemIndent += indentStep;
    const itemCtx = Object.assign({}, ctx, {
      indent: itemIndent,
      inFlow: true,
      type: null
    });
    let reqNewline = false;
    let linesAtValue = 0;
    const lines = [];
    for (let i2 = 0; i2 < items.length; ++i2) {
      const item = items[i2];
      let comment = null;
      if (isNode(item)) {
        if (item.spaceBefore) lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, false);
        if (item.comment) comment = item.comment;
      } else if (isPair(item)) {
        const ik = isNode(item.key) ? item.key : null;
        if (ik) {
          if (ik.spaceBefore) lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, false);
          if (ik.comment) reqNewline = true;
        }
        const iv = isNode(item.value) ? item.value : null;
        if (iv) {
          if (iv.comment) comment = iv.comment;
          if (iv.commentBefore) reqNewline = true;
        } else if (item.value == null && (ik == null ? void 0 : ik.comment)) {
          comment = ik.comment;
        }
      }
      if (comment) reqNewline = true;
      let str = stringify$1(item, itemCtx, () => comment = null);
      if (i2 < items.length - 1) str += ",";
      if (comment) str += lineComment(str, itemIndent, commentString(comment));
      if (!reqNewline && (lines.length > linesAtValue || str.includes("\n"))) reqNewline = true;
      lines.push(str);
      linesAtValue = lines.length;
    }
    const { start, end } = flowChars;
    if (lines.length === 0) {
      return start + end;
    } else {
      if (!reqNewline) {
        const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
        reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
      }
      if (reqNewline) {
        let str = start;
        for (const line of lines) str += line ? `
${indentStep}${indent}${line}` : "\n";
        return `${str}
${indent}${end}`;
      } else {
        return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
      }
    }
  }
  function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
    if (comment && chompKeep) comment = comment.replace(/^\n+/, "");
    if (comment) {
      const ic = indentComment(commentString(comment), indent);
      lines.push(ic.trimStart());
    }
  }
  function findPair(items, key) {
    const k = isScalar(key) ? key.value : key;
    for (const it of items) {
      if (isPair(it)) {
        if (it.key === key || it.key === k) return it;
        if (isScalar(it.key) && it.key.value === k) return it;
      }
    }
    return void 0;
  }
  class YAMLMap extends Collection {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(schema2) {
      super(MAP, schema2);
      this.items = [];
    }
    static from(schema2, obj, ctx) {
      const { keepUndefined, replacer } = ctx;
      const map2 = new this(schema2);
      const add = (key, value) => {
        if (typeof replacer === "function") value = replacer.call(obj, key, value);
        else if (Array.isArray(replacer) && !replacer.includes(key)) return;
        if (value !== void 0 || keepUndefined) map2.items.push(createPair(key, value, ctx));
      };
      if (obj instanceof Map) {
        for (const [key, value] of obj) add(key, value);
      } else if (obj && typeof obj === "object") {
        for (const key of Object.keys(obj)) add(key, obj[key]);
      }
      if (typeof schema2.sortMapEntries === "function") {
        map2.items.sort(schema2.sortMapEntries);
      }
      return map2;
    }
    add(pair, overwrite) {
      var _a;
      let _pair;
      if (isPair(pair)) _pair = pair;
      else if (!pair || typeof pair !== "object" || !("key" in pair)) {
        _pair = new Pair(pair, pair == null ? void 0 : pair.value);
      } else _pair = new Pair(pair.key, pair.value);
      const prev = findPair(this.items, _pair.key);
      const sortEntries = (_a = this.schema) == null ? void 0 : _a.sortMapEntries;
      if (prev) {
        if (!overwrite) throw new Error(`Key ${_pair.key} already set`);
        if (isScalar(prev.value) && isScalarValue(_pair.value)) prev.value.value = _pair.value;
        else prev.value = _pair.value;
      } else if (sortEntries) {
        const i2 = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
        if (i2 === -1) this.items.push(_pair);
        else this.items.splice(i2, 0, _pair);
      } else {
        this.items.push(_pair);
      }
    }
    delete(key) {
      const it = findPair(this.items, key);
      if (!it) return false;
      const del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      const it = findPair(this.items, key);
      const node = it == null ? void 0 : it.value;
      return (!keepScalar && isScalar(node) ? node.value : node) ?? void 0;
    }
    has(key) {
      return !!findPair(this.items, key);
    }
    set(key, value) {
      this.add(new Pair(key, value), true);
    }
    toJSON(_, ctx, Type) {
      const map2 = Type ? new Type() : (ctx == null ? void 0 : ctx.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      if (ctx == null ? void 0 : ctx.onCreate) ctx.onCreate(map2);
      for (const item of this.items) addPairToJSMap(ctx, map2, item);
      return map2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      for (const item of this.items) {
        if (!isPair(item)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
      }
      if (!ctx.allNullValues && this.hasAllNullValues(false)) ctx = Object.assign({}, ctx, {
        allNullValues: true
      });
      return stringifyCollection(this, ctx, {
        blockItemPrefix: "",
        flowChars: {
          start: "{",
          end: "}"
        },
        itemIndent: ctx.indent || "",
        onChompKeep,
        onComment
      });
    }
  }
  const map = {
    collection: "map",
    default: true,
    nodeClass: YAMLMap,
    tag: "tag:yaml.org,2002:map",
    resolve(map2, onError) {
      if (!isMap(map2)) onError("Expected a mapping for this tag");
      return map2;
    },
    createNode: (schema2, obj, ctx) => YAMLMap.from(schema2, obj, ctx)
  };
  class YAMLSeq extends Collection {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(schema2) {
      super(SEQ, schema2);
      this.items = [];
    }
    add(value) {
      this.items.push(value);
    }
    delete(key) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number") return false;
      const del = this.items.splice(idx, 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number") return void 0;
      const it = this.items[idx];
      return !keepScalar && isScalar(it) ? it.value : it;
    }
    has(key) {
      const idx = asItemIndex(key);
      return typeof idx === "number" && idx < this.items.length;
    }
    set(key, value) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number") throw new Error(`Expected a valid index, not ${key}.`);
      const prev = this.items[idx];
      if (isScalar(prev) && isScalarValue(value)) prev.value = value;
      else this.items[idx] = value;
    }
    toJSON(_, ctx) {
      const seq2 = [];
      if (ctx == null ? void 0 : ctx.onCreate) ctx.onCreate(seq2);
      let i2 = 0;
      for (const item of this.items) seq2.push(toJS(item, String(i2++), ctx));
      return seq2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      return stringifyCollection(this, ctx, {
        blockItemPrefix: "- ",
        flowChars: {
          start: "[",
          end: "]"
        },
        itemIndent: (ctx.indent || "") + "  ",
        onChompKeep,
        onComment
      });
    }
    static from(schema2, obj, ctx) {
      const { replacer } = ctx;
      const seq2 = new this(schema2);
      if (obj && Symbol.iterator in Object(obj)) {
        let i2 = 0;
        for (let it of obj) {
          if (typeof replacer === "function") {
            const key = obj instanceof Set ? it : String(i2++);
            it = replacer.call(obj, key, it);
          }
          seq2.items.push(createNode(it, void 0, ctx));
        }
      }
      return seq2;
    }
  }
  function asItemIndex(key) {
    let idx = isScalar(key) ? key.value : key;
    if (idx && typeof idx === "string") idx = Number(idx);
    return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
  }
  const seq = {
    collection: "seq",
    default: true,
    nodeClass: YAMLSeq,
    tag: "tag:yaml.org,2002:seq",
    resolve(seq2, onError) {
      if (!isSeq(seq2)) onError("Expected a sequence for this tag");
      return seq2;
    },
    createNode: (schema2, obj, ctx) => YAMLSeq.from(schema2, obj, ctx)
  };
  const string = {
    identify: (value) => typeof value === "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (str) => str,
    stringify(item, ctx, onComment, onChompKeep) {
      ctx = Object.assign({
        actualString: true
      }, ctx);
      return stringifyString(item, ctx, onComment, onChompKeep);
    }
  };
  const nullTag = {
    identify: (value) => value == null,
    createNode: () => new Scalar(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new Scalar(null),
    stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
  };
  const boolTag = {
    identify: (value) => typeof value === "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (str) => new Scalar(str[0] === "t" || str[0] === "T"),
    stringify({ source, value }, ctx) {
      if (source && boolTag.test.test(source)) {
        const sv = source[0] === "t" || source[0] === "T";
        if (value === sv) return source;
      }
      return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
  };
  function stringifyNumber({ format, minFractionDigits, tag, value }) {
    if (typeof value === "bigint") return String(value);
    const num = typeof value === "number" ? value : Number(value);
    if (!isFinite(num)) return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
    let n2 = JSON.stringify(value);
    if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^\d/.test(n2)) {
      let i2 = n2.indexOf(".");
      if (i2 < 0) {
        i2 = n2.length;
        n2 += ".";
      }
      let d = minFractionDigits - (n2.length - i2 - 1);
      while (d-- > 0) n2 += "0";
    }
    return n2;
  }
  const floatNaN$1 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
  };
  const floatExp$1 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
  };
  const float$1 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(str) {
      const node = new Scalar(parseFloat(str));
      const dot = str.indexOf(".");
      if (dot !== -1 && str[str.length - 1] === "0") node.minFractionDigits = str.length - dot - 1;
      return node;
    },
    stringify: stringifyNumber
  };
  const intIdentify$2 = (value) => typeof value === "bigint" || Number.isInteger(value);
  const intResolve$1 = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
  function intStringify$1(node, radix, prefix) {
    const { value } = node;
    if (intIdentify$2(value) && value >= 0) return prefix + value.toString(radix);
    return stringifyNumber(node);
  }
  const intOct$1 = {
    identify: (value) => intIdentify$2(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 2, 8, opt),
    stringify: (node) => intStringify$1(node, 8, "0o")
  };
  const int$1 = {
    identify: intIdentify$2,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 0, 10, opt),
    stringify: stringifyNumber
  };
  const intHex$1 = {
    identify: (value) => intIdentify$2(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 2, 16, opt),
    stringify: (node) => intStringify$1(node, 16, "0x")
  };
  const schema$2 = [
    map,
    seq,
    string,
    nullTag,
    boolTag,
    intOct$1,
    int$1,
    intHex$1,
    floatNaN$1,
    floatExp$1,
    float$1
  ];
  function intIdentify$1(value) {
    return typeof value === "bigint" || Number.isInteger(value);
  }
  const stringifyJSON = ({ value }) => JSON.stringify(value);
  const jsonScalars = [
    {
      identify: (value) => typeof value === "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (str) => str,
      stringify: stringifyJSON
    },
    {
      identify: (value) => value == null,
      createNode: () => new Scalar(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: stringifyJSON
    },
    {
      identify: (value) => typeof value === "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^true$|^false$/,
      resolve: (str) => str === "true",
      stringify: stringifyJSON
    },
    {
      identify: intIdentify$1,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
      stringify: ({ value }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
    },
    {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (str) => parseFloat(str),
      stringify: stringifyJSON
    }
  ];
  const jsonError = {
    default: true,
    tag: "",
    test: /^/,
    resolve(str, onError) {
      onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
      return str;
    }
  };
  const schema$1 = [
    map,
    seq
  ].concat(jsonScalars, jsonError);
  const binary = {
    identify: (value) => value instanceof Uint8Array,
    default: false,
    tag: "tag:yaml.org,2002:binary",
    resolve(src, onError) {
      if (typeof atob === "function") {
        const str = atob(src.replace(/[\n\r]/g, ""));
        const buffer = new Uint8Array(str.length);
        for (let i2 = 0; i2 < str.length; ++i2) buffer[i2] = str.charCodeAt(i2);
        return buffer;
      } else {
        onError("This environment does not support reading binary tags; either Buffer or atob is required");
        return src;
      }
    },
    stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
      if (!value) return "";
      const buf = value;
      let str;
      if (typeof btoa === "function") {
        let s = "";
        for (let i2 = 0; i2 < buf.length; ++i2) s += String.fromCharCode(buf[i2]);
        str = btoa(s);
      } else {
        throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
      }
      if (!type) type = Scalar.BLOCK_LITERAL;
      if (type !== Scalar.QUOTE_DOUBLE) {
        const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
        const n2 = Math.ceil(str.length / lineWidth);
        const lines = new Array(n2);
        for (let i2 = 0, o = 0; i2 < n2; ++i2, o += lineWidth) {
          lines[i2] = str.substr(o, lineWidth);
        }
        str = lines.join(type === Scalar.BLOCK_LITERAL ? "\n" : " ");
      }
      return stringifyString({
        comment,
        type,
        value: str
      }, ctx, onComment, onChompKeep);
    }
  };
  function resolvePairs(seq2, onError) {
    if (isSeq(seq2)) {
      for (let i2 = 0; i2 < seq2.items.length; ++i2) {
        let item = seq2.items[i2];
        if (isPair(item)) continue;
        else if (isMap(item)) {
          if (item.items.length > 1) onError("Each pair must have its own sequence indicator");
          const pair = item.items[0] || new Pair(new Scalar(null));
          if (item.commentBefore) pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
          if (item.comment) {
            const cn = pair.value ?? pair.key;
            cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
          }
          item = pair;
        }
        seq2.items[i2] = isPair(item) ? item : new Pair(item);
      }
    } else onError("Expected a sequence for this tag");
    return seq2;
  }
  function createPairs(schema2, iterable, ctx) {
    const { replacer } = ctx;
    const pairs2 = new YAMLSeq(schema2);
    pairs2.tag = "tag:yaml.org,2002:pairs";
    let i2 = 0;
    if (iterable && Symbol.iterator in Object(iterable)) for (let it of iterable) {
      if (typeof replacer === "function") it = replacer.call(iterable, String(i2++), it);
      let key, value;
      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else throw new TypeError(`Expected [key, value] tuple: ${it}`);
      } else if (it && it instanceof Object) {
        const keys = Object.keys(it);
        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else {
          throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
        }
      } else {
        key = it;
      }
      pairs2.items.push(createPair(key, value, ctx));
    }
    return pairs2;
  }
  const pairs = {
    collection: "seq",
    default: false,
    tag: "tag:yaml.org,2002:pairs",
    resolve: resolvePairs,
    createNode: createPairs
  };
  class YAMLOMap extends YAMLSeq {
    constructor() {
      super();
      this.add = YAMLMap.prototype.add.bind(this);
      this.delete = YAMLMap.prototype.delete.bind(this);
      this.get = YAMLMap.prototype.get.bind(this);
      this.has = YAMLMap.prototype.has.bind(this);
      this.set = YAMLMap.prototype.set.bind(this);
      this.tag = YAMLOMap.tag;
    }
    toJSON(_, ctx) {
      if (!ctx) return super.toJSON(_);
      const map2 = /* @__PURE__ */ new Map();
      if (ctx == null ? void 0 : ctx.onCreate) ctx.onCreate(map2);
      for (const pair of this.items) {
        let key, value;
        if (isPair(pair)) {
          key = toJS(pair.key, "", ctx);
          value = toJS(pair.value, key, ctx);
        } else {
          key = toJS(pair, "", ctx);
        }
        if (map2.has(key)) throw new Error("Ordered maps must not include duplicate keys");
        map2.set(key, value);
      }
      return map2;
    }
    static from(schema2, iterable, ctx) {
      const pairs2 = createPairs(schema2, iterable, ctx);
      const omap2 = new this();
      omap2.items = pairs2.items;
      return omap2;
    }
  }
  YAMLOMap.tag = "tag:yaml.org,2002:omap";
  const omap = {
    collection: "seq",
    identify: (value) => value instanceof Map,
    nodeClass: YAMLOMap,
    default: false,
    tag: "tag:yaml.org,2002:omap",
    resolve(seq2, onError) {
      const pairs2 = resolvePairs(seq2, onError);
      const seenKeys = [];
      for (const { key } of pairs2.items) {
        if (isScalar(key)) {
          if (seenKeys.includes(key.value)) {
            onError(`Ordered maps must not include duplicate keys: ${key.value}`);
          } else {
            seenKeys.push(key.value);
          }
        }
      }
      return Object.assign(new YAMLOMap(), pairs2);
    },
    createNode: (schema2, iterable, ctx) => YAMLOMap.from(schema2, iterable, ctx)
  };
  function boolStringify({ value, source }, ctx) {
    const boolObj = value ? trueTag : falseTag;
    if (source && boolObj.test.test(source)) return source;
    return value ? ctx.options.trueStr : ctx.options.falseStr;
  }
  const trueTag = {
    identify: (value) => value === true,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new Scalar(true),
    stringify: boolStringify
  };
  const falseTag = {
    identify: (value) => value === false,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new Scalar(false),
    stringify: boolStringify
  };
  const floatNaN = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
  };
  const floatExp = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str.replace(/_/g, "")),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
  };
  const float = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(str) {
      const node = new Scalar(parseFloat(str.replace(/_/g, "")));
      const dot = str.indexOf(".");
      if (dot !== -1) {
        const f2 = str.substring(dot + 1).replace(/_/g, "");
        if (f2[f2.length - 1] === "0") node.minFractionDigits = f2.length;
      }
      return node;
    },
    stringify: stringifyNumber
  };
  const intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
  function intResolve(str, offset, radix, { intAsBigInt }) {
    const sign = str[0];
    if (sign === "-" || sign === "+") offset += 1;
    str = str.substring(offset).replace(/_/g, "");
    if (intAsBigInt) {
      switch (radix) {
        case 2:
          str = `0b${str}`;
          break;
        case 8:
          str = `0o${str}`;
          break;
        case 16:
          str = `0x${str}`;
          break;
      }
      const n3 = BigInt(str);
      return sign === "-" ? BigInt(-1) * n3 : n3;
    }
    const n2 = parseInt(str, radix);
    return sign === "-" ? -1 * n2 : n2;
  }
  function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value)) {
      const str = value.toString(radix);
      return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
    }
    return stringifyNumber(node);
  }
  const intBin = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
    stringify: (node) => intStringify(node, 2, "0b")
  };
  const intOct = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
    stringify: (node) => intStringify(node, 8, "0")
  };
  const int = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber
  };
  const intHex = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: (node) => intStringify(node, 16, "0x")
  };
  class YAMLSet extends YAMLMap {
    constructor(schema2) {
      super(schema2);
      this.tag = YAMLSet.tag;
    }
    add(key) {
      let pair;
      if (isPair(key)) pair = key;
      else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null) pair = new Pair(key.key, null);
      else pair = new Pair(key, null);
      const prev = findPair(this.items, pair.key);
      if (!prev) this.items.push(pair);
    }
    get(key, keepPair) {
      const pair = findPair(this.items, key);
      return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
    }
    set(key, value) {
      if (typeof value !== "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
      const prev = findPair(this.items, key);
      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new Pair(key));
      }
    }
    toJSON(_, ctx) {
      return super.toJSON(_, ctx, Set);
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, ctx, {
        allNullValues: true
      }), onComment, onChompKeep);
      else throw new Error("Set items must all have null values");
    }
    static from(schema2, iterable, ctx) {
      const { replacer } = ctx;
      const set2 = new this(schema2);
      if (iterable && Symbol.iterator in Object(iterable)) for (let value of iterable) {
        if (typeof replacer === "function") value = replacer.call(iterable, value, value);
        set2.items.push(createPair(value, null, ctx));
      }
      return set2;
    }
  }
  YAMLSet.tag = "tag:yaml.org,2002:set";
  const set$1 = {
    collection: "map",
    identify: (value) => value instanceof Set,
    nodeClass: YAMLSet,
    default: false,
    tag: "tag:yaml.org,2002:set",
    createNode: (schema2, iterable, ctx) => YAMLSet.from(schema2, iterable, ctx),
    resolve(map2, onError) {
      if (isMap(map2)) {
        if (map2.hasAllNullValues(true)) return Object.assign(new YAMLSet(), map2);
        else onError("Set items must all have null values");
      } else onError("Expected a mapping for this tag");
      return map2;
    }
  };
  function parseSexagesimal(str, asBigInt) {
    const sign = str[0];
    const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
    const num = (n2) => asBigInt ? BigInt(n2) : Number(n2);
    const res = parts.replace(/_/g, "").split(":").reduce((res2, p2) => res2 * num(60) + num(p2), num(0));
    return sign === "-" ? num(-1) * res : res;
  }
  function stringifySexagesimal(node) {
    let { value } = node;
    let num = (n2) => n2;
    if (typeof value === "bigint") num = (n2) => BigInt(n2);
    else if (isNaN(value) || !isFinite(value)) return stringifyNumber(node);
    let sign = "";
    if (value < 0) {
      sign = "-";
      value *= num(-1);
    }
    const _60 = num(60);
    const parts = [
      value % _60
    ];
    if (value < 60) {
      parts.unshift(0);
    } else {
      value = (value - parts[0]) / _60;
      parts.unshift(value % _60);
      if (value >= 60) {
        value = (value - parts[0]) / _60;
        parts.unshift(value);
      }
    }
    return sign + parts.map((n2) => String(n2).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
  }
  const intTime = {
    identify: (value) => typeof value === "bigint" || Number.isInteger(value),
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
    stringify: stringifySexagesimal
  };
  const floatTime = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (str) => parseSexagesimal(str, false),
    stringify: stringifySexagesimal
  };
  const timestamp = {
    identify: (value) => value instanceof Date,
    default: true,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve(str) {
      const match = str.match(timestamp.test);
      if (!match) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
      const [, year, month, day, hour, minute, second] = match.map(Number);
      const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
      let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
      const tz = match[8];
      if (tz && tz !== "Z") {
        let d = parseSexagesimal(tz, false);
        if (Math.abs(d) < 30) d *= 60;
        date -= 6e4 * d;
      }
      return new Date(date);
    },
    stringify: ({ value }) => (value == null ? void 0 : value.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? ""
  };
  const schema = [
    map,
    seq,
    string,
    nullTag,
    trueTag,
    falseTag,
    intBin,
    intOct,
    int,
    intHex,
    floatNaN,
    floatExp,
    float,
    binary,
    merge,
    omap,
    pairs,
    set$1,
    intTime,
    floatTime,
    timestamp
  ];
  const schemas = /* @__PURE__ */ new Map([
    [
      "core",
      schema$2
    ],
    [
      "failsafe",
      [
        map,
        seq,
        string
      ]
    ],
    [
      "json",
      schema$1
    ],
    [
      "yaml11",
      schema
    ],
    [
      "yaml-1.1",
      schema
    ]
  ]);
  const tagsByName = {
    binary,
    bool: boolTag,
    float: float$1,
    floatExp: floatExp$1,
    floatNaN: floatNaN$1,
    floatTime,
    int: int$1,
    intHex: intHex$1,
    intOct: intOct$1,
    intTime,
    map,
    merge,
    null: nullTag,
    omap,
    pairs,
    seq,
    set: set$1,
    timestamp
  };
  const coreKnownTags = {
    "tag:yaml.org,2002:binary": binary,
    "tag:yaml.org,2002:merge": merge,
    "tag:yaml.org,2002:omap": omap,
    "tag:yaml.org,2002:pairs": pairs,
    "tag:yaml.org,2002:set": set$1,
    "tag:yaml.org,2002:timestamp": timestamp
  };
  function getTags(customTags, schemaName, addMergeTag) {
    const schemaTags = schemas.get(schemaName);
    if (schemaTags && !customTags) {
      return addMergeTag && !schemaTags.includes(merge) ? schemaTags.concat(merge) : schemaTags.slice();
    }
    let tags = schemaTags;
    if (!tags) {
      if (Array.isArray(customTags)) tags = [];
      else {
        const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
      }
    }
    if (Array.isArray(customTags)) {
      for (const tag of customTags) tags = tags.concat(tag);
    } else if (typeof customTags === "function") {
      tags = customTags(tags.slice());
    }
    if (addMergeTag) tags = tags.concat(merge);
    return tags.reduce((tags2, tag) => {
      const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
      if (!tagObj) {
        const tagName = JSON.stringify(tag);
        const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
      }
      if (!tags2.includes(tagObj)) tags2.push(tagObj);
      return tags2;
    }, []);
  }
  const sortMapEntriesByKey = (a2, b) => a2.key < b.key ? -1 : a2.key > b.key ? 1 : 0;
  class Schema {
    constructor({ compat, customTags, merge: merge2, resolveKnownTags, schema: schema2, sortMapEntries, toStringDefaults }) {
      this.compat = Array.isArray(compat) ? getTags(compat, "compat") : compat ? getTags(null, compat) : null;
      this.name = typeof schema2 === "string" && schema2 || "core";
      this.knownTags = resolveKnownTags ? coreKnownTags : {};
      this.tags = getTags(customTags, this.name, merge2);
      this.toStringOptions = toStringDefaults ?? null;
      Object.defineProperty(this, MAP, {
        value: map
      });
      Object.defineProperty(this, SCALAR, {
        value: string
      });
      Object.defineProperty(this, SEQ, {
        value: seq
      });
      this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
    }
    clone() {
      const copy = Object.create(Schema.prototype, Object.getOwnPropertyDescriptors(this));
      copy.tags = this.tags.slice();
      return copy;
    }
  }
  function stringifyDocument(doc, options) {
    var _a;
    const lines = [];
    let hasDirectives = options.directives === true;
    if (options.directives !== false && doc.directives) {
      const dir = doc.directives.toString(doc);
      if (dir) {
        lines.push(dir);
        hasDirectives = true;
      } else if (doc.directives.docStart) hasDirectives = true;
    }
    if (hasDirectives) lines.push("---");
    const ctx = createStringifyContext(doc, options);
    const { commentString } = ctx.options;
    if (doc.commentBefore) {
      if (lines.length !== 1) lines.unshift("");
      const cs = commentString(doc.commentBefore);
      lines.unshift(indentComment(cs, ""));
    }
    let chompKeep = false;
    let contentComment = null;
    if (doc.contents) {
      if (isNode(doc.contents)) {
        if (doc.contents.spaceBefore && hasDirectives) lines.push("");
        if (doc.contents.commentBefore) {
          const cs = commentString(doc.contents.commentBefore);
          lines.push(indentComment(cs, ""));
        }
        ctx.forceBlockIndent = !!doc.comment;
        contentComment = doc.contents.comment;
      }
      const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
      let body = stringify$1(doc.contents, ctx, () => contentComment = null, onChompKeep);
      if (contentComment) body += lineComment(body, "", commentString(contentComment));
      if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
        lines[lines.length - 1] = `--- ${body}`;
      } else lines.push(body);
    } else {
      lines.push(stringify$1(doc.contents, ctx));
    }
    if ((_a = doc.directives) == null ? void 0 : _a.docEnd) {
      if (doc.comment) {
        const cs = commentString(doc.comment);
        if (cs.includes("\n")) {
          lines.push("...");
          lines.push(indentComment(cs, ""));
        } else {
          lines.push(`... ${cs}`);
        }
      } else {
        lines.push("...");
      }
    } else {
      let dc = doc.comment;
      if (dc && chompKeep) dc = dc.replace(/^\n+/, "");
      if (dc) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "") lines.push("");
        lines.push(indentComment(commentString(dc), ""));
      }
    }
    return lines.join("\n") + "\n";
  }
  class Document {
    constructor(value, replacer, options) {
      this.commentBefore = null;
      this.comment = null;
      this.errors = [];
      this.warnings = [];
      Object.defineProperty(this, NODE_TYPE, {
        value: DOC
      });
      let _replacer = null;
      if (typeof replacer === "function" || Array.isArray(replacer)) {
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
        replacer = void 0;
      }
      const opt = Object.assign({
        intAsBigInt: false,
        keepSourceTokens: false,
        logLevel: "warn",
        prettyErrors: true,
        strict: true,
        stringKeys: false,
        uniqueKeys: true,
        version: "1.2"
      }, options);
      this.options = opt;
      let { version } = opt;
      if (options == null ? void 0 : options._directives) {
        this.directives = options._directives.atDocument();
        if (this.directives.yaml.explicit) version = this.directives.yaml.version;
      } else this.directives = new Directives({
        version
      });
      this.setSchema(version, options);
      this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
    }
    clone() {
      const copy = Object.create(Document.prototype, {
        [NODE_TYPE]: {
          value: DOC
        }
      });
      copy.commentBefore = this.commentBefore;
      copy.comment = this.comment;
      copy.errors = this.errors.slice();
      copy.warnings = this.warnings.slice();
      copy.options = Object.assign({}, this.options);
      if (this.directives) copy.directives = this.directives.clone();
      copy.schema = this.schema.clone();
      copy.contents = isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
      if (this.range) copy.range = this.range.slice();
      return copy;
    }
    add(value) {
      if (assertCollection(this.contents)) this.contents.add(value);
    }
    addIn(path, value) {
      if (assertCollection(this.contents)) this.contents.addIn(path, value);
    }
    createAlias(node, name) {
      if (!node.anchor) {
        const prev = anchorNames(this);
        node.anchor = !name || prev.has(name) ? findNewAnchor(name || "a", prev) : name;
      }
      return new Alias(node.anchor);
    }
    createNode(value, replacer, options) {
      let _replacer = void 0;
      if (typeof replacer === "function") {
        value = replacer.call({
          "": value
        }, "", value);
        _replacer = replacer;
      } else if (Array.isArray(replacer)) {
        const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
        const asStr = replacer.filter(keyToStr).map(String);
        if (asStr.length > 0) replacer = replacer.concat(asStr);
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
        replacer = void 0;
      }
      const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
      const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(this, anchorPrefix || "a");
      const ctx = {
        aliasDuplicateObjects: aliasDuplicateObjects ?? true,
        keepUndefined: keepUndefined ?? false,
        onAnchor,
        onTagObj,
        replacer: _replacer,
        schema: this.schema,
        sourceObjects
      };
      const node = createNode(value, tag, ctx);
      if (flow && isCollection(node)) node.flow = true;
      setAnchors();
      return node;
    }
    createPair(key, value, options = {}) {
      const k = this.createNode(key, null, options);
      const v = this.createNode(value, null, options);
      return new Pair(k, v);
    }
    delete(key) {
      return assertCollection(this.contents) ? this.contents.delete(key) : false;
    }
    deleteIn(path) {
      if (isEmptyPath(path)) {
        if (this.contents == null) return false;
        this.contents = null;
        return true;
      }
      return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
    }
    get(key, keepScalar) {
      return isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
    }
    getIn(path, keepScalar) {
      if (isEmptyPath(path)) return !keepScalar && isScalar(this.contents) ? this.contents.value : this.contents;
      return isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
    }
    has(key) {
      return isCollection(this.contents) ? this.contents.has(key) : false;
    }
    hasIn(path) {
      if (isEmptyPath(path)) return this.contents !== void 0;
      return isCollection(this.contents) ? this.contents.hasIn(path) : false;
    }
    set(key, value) {
      if (this.contents == null) {
        this.contents = collectionFromPath(this.schema, [
          key
        ], value);
      } else if (assertCollection(this.contents)) {
        this.contents.set(key, value);
      }
    }
    setIn(path, value) {
      if (isEmptyPath(path)) {
        this.contents = value;
      } else if (this.contents == null) {
        this.contents = collectionFromPath(this.schema, Array.from(path), value);
      } else if (assertCollection(this.contents)) {
        this.contents.setIn(path, value);
      }
    }
    setSchema(version, options = {}) {
      if (typeof version === "number") version = String(version);
      let opt;
      switch (version) {
        case "1.1":
          if (this.directives) this.directives.yaml.version = "1.1";
          else this.directives = new Directives({
            version: "1.1"
          });
          opt = {
            resolveKnownTags: false,
            schema: "yaml-1.1"
          };
          break;
        case "1.2":
        case "next":
          if (this.directives) this.directives.yaml.version = version;
          else this.directives = new Directives({
            version
          });
          opt = {
            resolveKnownTags: true,
            schema: "core"
          };
          break;
        case null:
          if (this.directives) delete this.directives;
          opt = null;
          break;
        default: {
          const sv = JSON.stringify(version);
          throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
        }
      }
      if (options.schema instanceof Object) this.schema = options.schema;
      else if (opt) this.schema = new Schema(Object.assign(opt, options));
      else throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      const ctx = {
        anchors: /* @__PURE__ */ new Map(),
        doc: this,
        keep: !json,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS(this.contents, jsonArg ?? "", ctx);
      if (typeof onAnchor === "function") for (const { count, res: res2 } of ctx.anchors.values()) onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver(reviver, {
        "": res
      }, "", res) : res;
    }
    toJSON(jsonArg, onAnchor) {
      return this.toJS({
        json: true,
        jsonArg,
        mapAsMap: false,
        onAnchor
      });
    }
    toString(options = {}) {
      if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
      if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
        const s = JSON.stringify(options.indent);
        throw new Error(`"indent" option must be a positive integer, not ${s}`);
      }
      return stringifyDocument(this, options);
    }
  }
  function assertCollection(contents) {
    if (isCollection(contents)) return true;
    throw new Error("Expected a YAML collection as document contents");
  }
  new Set("0123456789ABCDEFabcdef");
  new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
  new Set(",[]{}");
  new Set(" ,[]{}\n\r	");
  function stringify(value, replacer, options) {
    let _replacer = null;
    if (Array.isArray(replacer)) {
      _replacer = replacer;
    }
    if (value === void 0) {
      const { keepUndefined } = {};
      if (!keepUndefined) return void 0;
    }
    if (isDocument(value) && !_replacer) return value.toString(options);
    return new Document(value, _replacer, options).toString(options);
  }
  var RE_SCOPED = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  var RE_NON_SCOPED = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  function parse(input) {
    const m2 = RE_SCOPED.exec(input) || RE_NON_SCOPED.exec(input);
    if (!m2) {
      throw new Error(`[parse-package-name] invalid package name: ${input}`);
    }
    return {
      name: m2[1] || "",
      version: m2[2] || "latest",
      path: m2[3] || ""
    };
  }
  async function loadSource(sources) {
    const logStore = createLogComposable();
    let contents = [];
    const promises = sources.map(async (source) => {
      if (source.negated) {
        return;
      }
      let logId2;
      if (source.pattern.startsWith("jsdelivr:")) {
        logId2 = logStore.add({
          message: `Loading source: jsDelivr (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await jsDelivrProvider(source));
      } else if (source.pattern.startsWith("http")) {
        logId2 = logStore.add({
          message: `Loading source: Network (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await httpFileProvider(source));
      } else if (source.pattern.startsWith("wp-content:")) {
        logId2 = logStore.add({
          message: `Loading source: WP Content (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await wpContentProvider(source));
      }
      if (logId2) {
        let currentLog2 = logStore.logs.value.find((log) => log.id === logId2);
        if (currentLog2) {
          currentLog2.message += " - done";
        }
      }
    });
    await Promise.all(promises);
    const candidates_pool = [];
    let logId = logStore.add({
      message: "Scanning sources...",
      type: "info",
      group: "source"
    });
    contents.forEach((content) => {
      const candidates = find_tw_candidates(content);
      candidates_pool.push(...candidates);
    });
    let currentLog = logStore.logs.value.find((log) => log.id === logId);
    if (currentLog) {
      currentLog.message += " - done";
    }
    return Array.from(new Set(candidates_pool));
  }
  async function jsDelivrProvider(source) {
    const contents_pool = [];
    let sourcePath = source.pattern.slice(String("jsdelivr:").length);
    let { name: packageName, version: packageVersion, path: pathPattern } = parse(sourcePath);
    let files = await fetch(`https://data.jsdelivr.com/v1/packages/npm/${packageName}@${packageVersion}?structure=flat`).then((response) => response.json()).then((data) => data.files).then((files2) => files2.map((file) => file.name)).then((files2) => files2.filter((file) => minimatch(file, pathPattern)));
    const promises = files.map(async (file) => {
      let content = await fetch(`https://cdn.jsdelivr.net/npm/${packageName}@${packageVersion}${file}`).then((response) => response.text());
      contents_pool.push(content);
    });
    await Promise.all(promises);
    return contents_pool;
  }
  async function httpFileProvider(source) {
    let content = await fetch(source.pattern).then((response) => response.text());
    return [
      content
    ];
  }
  async function wpContentProvider(source) {
    let sourcePath = source.pattern.slice(String("wp-content:").length);
    const scan = await useApi().post("admin/local-file-provider/scan", {
      path: sourcePath
    }).then((resp) => resp.data);
    return scan.contents.map((c2) => c2.content);
  }
  function h(a2, s, n2) {
    if (a2 == null) return "";
    let l2;
    const _ = {}, x = {};
    let d = "", w2 = "", i2 = "", u = 2, y = 3, f2 = 2;
    const p2 = [];
    let e2 = 0, t = 0;
    for (let o = 0; o < a2.length; o += 1) if (d = a2.charAt(o), Object.prototype.hasOwnProperty.call(_, d) || (_[d] = y++, x[d] = true), w2 = i2 + d, Object.prototype.hasOwnProperty.call(_, w2)) i2 = w2;
    else {
      if (Object.prototype.hasOwnProperty.call(x, i2)) {
        if (i2.charCodeAt(0) < 256) {
          for (let c2 = 0; c2 < f2; c2++) e2 = e2 << 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++;
          l2 = i2.charCodeAt(0);
          for (let c2 = 0; c2 < 8; c2++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
        } else {
          l2 = 1;
          for (let c2 = 0; c2 < f2; c2++) e2 = e2 << 1 | l2, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = 0;
          l2 = i2.charCodeAt(0);
          for (let c2 = 0; c2 < 16; c2++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
        }
        u--, u == 0 && (u = Math.pow(2, f2), f2++), delete x[i2];
      } else {
        l2 = _[i2];
        for (let c2 = 0; c2 < f2; c2++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
      }
      u--, u == 0 && (u = Math.pow(2, f2), f2++), _[w2] = y++, i2 = String(d);
    }
    if (i2 !== "") {
      if (Object.prototype.hasOwnProperty.call(x, i2)) {
        if (i2.charCodeAt(0) < 256) {
          for (let o = 0; o < f2; o++) e2 = e2 << 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++;
          l2 = i2.charCodeAt(0);
          for (let o = 0; o < 8; o++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
        } else {
          l2 = 1;
          for (let o = 0; o < f2; o++) e2 = e2 << 1 | l2, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = 0;
          l2 = i2.charCodeAt(0);
          for (let o = 0; o < 16; o++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
        }
        u--, u == 0 && (u = Math.pow(2, f2), f2++), delete x[i2];
      } else {
        l2 = _[i2];
        for (let o = 0; o < f2; o++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
      }
      u--, u == 0 && (u = Math.pow(2, f2), f2++);
    }
    l2 = 2;
    for (let o = 0; o < f2; o++) e2 = e2 << 1 | l2 & 1, t == s - 1 ? (t = 0, p2.push(n2(e2)), e2 = 0) : t++, l2 = l2 >> 1;
    let O = true;
    do
      e2 = e2 << 1, t == s - 1 ? (p2.push(n2(e2)), O = false) : t++;
    while (O);
    return p2.join("");
  }
  function S(v, p2, a2) {
    const e2 = [], d = [], i2 = {
      val: a2(0),
      position: p2,
      index: 1
    };
    let c2 = 4, h2 = 4, l2 = 3, w2 = "", s, n2 = 0, r = Math.pow(2, 2), o = 1;
    for (let t = 0; t < 3; t += 1) e2[t] = String(t);
    for (; o != r; ) {
      const t = i2.val & i2.position;
      i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
    }
    switch (n2) {
      case 0:
        for (n2 = 0, r = Math.pow(2, 8), o = 1; o != r; ) {
          const t = i2.val & i2.position;
          i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
        }
        s = String.fromCharCode(n2);
        break;
      case 1:
        for (n2 = 0, r = Math.pow(2, 16), o = 1; o != r; ) {
          const t = i2.val & i2.position;
          i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
        }
        s = String.fromCharCode(n2);
        break;
      case 2:
        return "";
    }
    if (s === void 0) throw new Error("No character found");
    e2[3] = String(s);
    let f2 = String(s);
    d.push(String(s));
    const b = true;
    for (; b; ) {
      if (i2.index > v) return "";
      for (n2 = 0, r = Math.pow(2, l2), o = 1; o != r; ) {
        const t = i2.val & i2.position;
        i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
      }
      switch (s = n2) {
        case 0:
          for (n2 = 0, r = Math.pow(2, 8), o = 1; o != r; ) {
            const t = i2.val & i2.position;
            i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
          }
          e2[h2++] = String.fromCharCode(n2), s = h2 - 1, c2--;
          break;
        case 1:
          for (n2 = 0, r = Math.pow(2, 16), o = 1; o != r; ) {
            const t = i2.val & i2.position;
            i2.position >>= 1, i2.position == 0 && (i2.position = p2, i2.val = a2(i2.index++)), n2 |= (t > 0 ? 1 : 0) * o, o <<= 1;
          }
          e2[h2++] = String.fromCharCode(n2), s = h2 - 1, c2--;
          break;
        case 2:
          return d.join("");
      }
      if (c2 == 0 && (c2 = Math.pow(2, l2), l2++), e2[s]) w2 = String(e2[s]);
      else if (s === h2) w2 = f2 + f2.charAt(0);
      else return null;
      d.push(w2), e2[h2++] = f2 + w2.charAt(0), c2--, f2 = w2, c2 == 0 && (c2 = Math.pow(2, l2), l2++);
    }
  }
  const e$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function a$1(e2) {
    if (e2 == null) return "";
    const r = h(e2, 6, (t) => e$1.charAt(t));
    switch (r.length % 4) {
      default:
      case 0:
        return r;
      case 1:
        return r + "===";
      case 2:
        return r + "==";
      case 3:
        return r + "=";
    }
  }
  const n$3 = {};
  function i$2(e2, c2) {
    if (!n$3[e2]) {
      n$3[e2] = {};
      for (let r = 0; r < e2.length; r++) n$3[e2][e2.charAt(r)] = r;
    }
    return n$3[e2][c2];
  }
  function a(r) {
    return r == null ? "" : r == "" ? null : S(r.length, 32, (e2) => i$2(e$1, r.charAt(e2)));
  }
  function n$2(r) {
    return r == null ? "" : h(r, 16, (o) => String.fromCharCode(o));
  }
  function p(l2, t) {
    if (l2 == null) return "";
    const h2 = n$2(l2), a2 = Math.ceil(Math.log(65536) / Math.log(t.length));
    let n2 = "";
    for (let o = 0, s = h2.length; o < s; o++) {
      let r = h2.charCodeAt(o);
      for (let e2 = a2 - 1; e2 >= 0; e2--) {
        const c2 = Math.floor(r / Math.pow(t.length, e2));
        r = r % Math.pow(t.length, e2), n2 += t.charAt(c2);
      }
    }
    return n2;
  }
  function l$1(r) {
    return r == null ? "" : r == "" ? null : S(r.length, 32768, (n2) => r.charCodeAt(n2));
  }
  function g(t, l2) {
    if (t == null) return "";
    if (t == "" || l2.length < 2) return null;
    const n2 = Math.ceil(Math.log(65536) / Math.log(l2.length));
    if (t.length % n2 != 0) return null;
    let u = "", r, h2;
    for (let e2 = 0, f2 = t.length; e2 < f2; e2 = e2 + n2) {
      r = 0;
      for (let o = 0; o < n2; o++) h2 = l2.indexOf(t[e2 + o]), r = r + h2 * Math.pow(l2.length, n2 - 1 - o);
      u = u + String.fromCharCode(r);
    }
    return l$1(u);
  }
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  function c$2(r) {
    return r == null ? "" : h(r, 6, (o) => e.charAt(o));
  }
  function n$1(r) {
    return r == null ? "" : r == "" ? null : (r = r.replace(/ /g, "+"), S(r.length, 32, (e$12) => i$2(e, r.charAt(e$12))));
  }
  function i$1(r, o) {
    if (typeof r == "string") {
      const e2 = !o && r.charCodeAt(r.length - 1) % 256 === 0, n2 = new Uint8Array(r.length * 2 - (e2 ? 1 : 0));
      for (let t = 0; t < r.length; t++) {
        const h2 = r.charCodeAt(t);
        n2[t * 2] = h2 >>> 8, (!e2 || t < r.length - 1) && (n2[t * 2 + 1] = h2 % 256);
      }
      return n2;
    }
    return r;
  }
  function c$1(r) {
    const o = Math.floor(r.byteLength / 2), e2 = [];
    for (let n2 = 0; n2 < o; n2++) e2.push(String.fromCharCode(r[n2 * 2] * 256 + r[n2 * 2 + 1]));
    return r.byteLength & 1 && e2.push(String.fromCharCode(r[r.byteLength - 1] * 256)), e2.join("");
  }
  function c(r, n2) {
    libExports.writeFileSync(r, typeof n2 == "string" ? i$1(n2) : n2, null);
  }
  function f(r) {
    return c$1(libExports.readFileSync(r, null));
  }
  function i(n2) {
    const t = n$2(n2), e2 = new Uint8Array(t.length * 2);
    for (let r = 0, c2 = t.length; r < c2; r++) {
      const o = t.charCodeAt(r);
      e2[r * 2] = o >>> 8, e2[r * 2 + 1] = o % 256;
    }
    return e2;
  }
  function m(r) {
    return r == null ? l$1(r) : l$1(c$1(r));
  }
  function n(r) {
    return r == null ? "" : h(r, 15, (o) => String.fromCharCode(o + 32)) + " ";
  }
  function l(r) {
    return r == null ? "" : r == "" ? null : S(r.length, 16384, (n2) => r.charCodeAt(n2) - 32);
  }
  w = {
    _compress: h,
    _decompress: S,
    compress: n$2,
    compressToBase64: a$1,
    compressToCustom: p,
    compressToEncodedURIComponent: c$2,
    compressToUint8Array: i,
    compressToUTF16: n,
    convertFromUint8Array: c$1,
    convertToUint8Array: i$1,
    decompress: l$1,
    decompressFromBase64: a,
    decompressFromCustom: g,
    decompressFromEncodedURIComponent: n$1,
    decompressFromUint8Array: m,
    decompressFromUTF16: l,
    loadBinaryFile: f,
    saveBinaryFile: c
  };
  function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.oncomplete = request.onsuccess = () => resolve(request.result);
      request.onabort = request.onerror = () => reject(request.error);
    });
  }
  function createStore(dbName, storeName) {
    let dbp;
    const getDB = () => {
      if (dbp) return dbp;
      const request = indexedDB.open(dbName);
      request.onupgradeneeded = () => request.result.createObjectStore(storeName);
      dbp = promisifyRequest(request);
      dbp.then((db) => {
        db.onclose = () => dbp = void 0;
      }, () => {
      });
      return dbp;
    };
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
  }
  let defaultGetStoreFunc;
  function defaultGetStore() {
    if (!defaultGetStoreFunc) {
      defaultGetStoreFunc = createStore("keyval-store", "keyval");
    }
    return defaultGetStoreFunc;
  }
  function get(key, customStore = defaultGetStore()) {
    return customStore("readonly", (store) => promisifyRequest(store.get(key)));
  }
  function set(key, value, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.put(value, key);
      return promisifyRequest(store.transaction);
    });
  }
  async function buildCache(opts = {}) {
    const api = useApi();
    const log = createLogComposable();
    log.add({
      message: "Starting cache build...",
      type: "info"
    });
    const options = Object.assign({
      store: true,
      kind: "full"
    }, opts);
    let providers = [];
    let volume = {};
    let css_cache = {
      last_generated: null,
      last_full_build: null,
      file_url: null,
      file_size: 0
    };
    log.add({
      message: "Getting the latest Simple File System data...",
      type: "info"
    });
    await api.get("admin/settings/cache/providers").then((resp) => {
      providers = resp.data.providers;
    });
    await api.get("admin/settings/cache/index").then((resp) => {
      css_cache = resp.data.cache;
    });
    await api.request("/admin/volume/index", {
      method: "GET"
    }).then((response) => response.data).then((res) => {
      volume = res.entries.reduce((acc, entry) => {
        acc[`/${entry.relative_path}`] = entry.content;
        return acc;
      }, {});
    });
    if (!options.tailwindcss_version) {
      await api.request("/admin/settings/options/index", {
        method: "GET"
      }).then((response) => {
        const version = Number(get$1(response.data.options, "general.tailwindcss.version", 4));
        if (version === 3 || version === 4) {
          options.tailwindcss_version = version;
        } else {
          options.tailwindcss_version = 4;
        }
      });
    }
    if (providers.length === 0 || providers.filter((provider) => provider.enabled).length === 0) {
      log.add({
        message: "No cache provider found",
        type: "error"
      });
      throw new Error("No cache provider found");
    }
    let content_pool = [];
    async function fetchProviderContents(provider) {
      var _a, _b;
      let batch = false;
      let batch_pool = [];
      if (options.kind === "incremental") {
        if (((_a = options.incremental) == null ? void 0 : _a.providers) && !options.incremental.providers.includes(provider.id)) {
          let lsCache = await get(`windpress.cache.provider.${provider.id}`);
          if (lsCache) {
            let decompressedCache = w.decompressFromUTF16(lsCache);
            let cache = decompressedCache ? JSON.parse(decompressedCache) : null;
            if (cache && !(css_cache.last_full_build !== null && Number(cache.timestamp) < Number(css_cache.last_full_build))) {
              content_pool.push(...cache.contents);
              log.add({
                message: `Using cached sources for provider: ${provider.name}`,
                type: "info"
              });
              return Promise.resolve();
            }
          }
        }
      }
      try {
        do {
          let logId = nanoid(10);
          let logMessage = `Scanning provider: ${provider.name}... (${batch !== false ? batch : "initial"})`;
          log.add({
            message: logMessage,
            type: "info",
            id: logId
          });
          const scan = await api.post("admin/settings/cache/providers/scan", {
            provider_id: provider.id,
            metadata: {
              next_batch: batch
            }
          }).then((resp) => resp.data).catch((error) => {
            log.update(logId, {
              type: "error",
              message: `${logMessage} - failed: ${error.statusText} -> ${error.data.message}`
            });
            throw error;
          });
          batch_pool.push(...scan.contents);
          batch = ((_b = scan.metadata) == null ? void 0 : _b.next_batch) || false;
          log.update(logId, {
            type: "info",
            message: `${logMessage} - done`
          });
        } while (batch !== false);
      } catch (error) {
        log.add({
          message: "Canceling cache build...",
          type: "info"
        });
        throw error;
      }
      content_pool.push(...batch_pool);
      set(`windpress.cache.provider.${provider.id}`, w.compressToUTF16(JSON.stringify({
        contents: batch_pool,
        timestamp: Date.now()
      })));
      return Promise.resolve();
    }
    const promises = providers.filter((provider) => provider.enabled).map((provider) => fetchProviderContents(provider));
    await Promise.all(promises);
    const contents = content_pool.map((c2) => {
      let content = atob(c2.content);
      if (c2.type === "json") {
        content = stringify(JSON.parse(content));
      }
      return unescape(content);
    });
    let normal = null;
    let minified = null;
    if (options.tailwindcss_version === 4) {
      const candidates_pool = [];
      contents.forEach((content) => {
        const candidates2 = find_tw_candidates(content);
        candidates_pool.push(...candidates2);
      });
      const compiled = await compile({
        entrypoint: "/main.css",
        volume
      });
      let candidates = [
        .../* @__PURE__ */ new Set([
          ...candidates_pool,
          ...await loadSource(compiled.sources)
        ])
      ];
      log.add({
        message: "Scanning complete",
        type: "success"
      });
      log.add({
        message: `Found ${candidates.length} candidates`,
        type: "info",
        options: {
          raw: true,
          candidates: candidates.sort()
        }
      });
      log.add({
        message: "Building cache...",
        type: "info"
      });
      const result = compiled.build(candidates);
      normal = (await optimize({
        css: result
      })).css;
      minified = (await optimize({
        css: result,
        minify: true
      })).css;
    } else if (options.tailwindcss_version === 3) {
      log.add({
        message: "Scanning complete",
        type: "success"
      });
      log.add({
        message: "Building cache...",
        type: "info"
      });
      const result = await build({
        entrypoint: {
          css: "/main.css",
          config: "/tailwind.config.js"
        },
        contents,
        volume
      });
      normal = (await optimize$1(result)).css;
      minified = (await optimize$1(result, true)).css;
    }
    log.add({
      message: "Cache built",
      type: "success"
    });
    css_cache.last_generated = Date.now();
    css_cache.last_full_build = options.kind === "full" ? Date.now() : css_cache.last_full_build;
    if (options.store === true) {
      await api.post("admin/settings/cache/store", {
        content: encodeBase64(minified || ""),
        full_build: options.kind === "full" ? css_cache.last_full_build : null
      }).then((resp) => {
        css_cache = resp.data.cache;
        log.add({
          message: "Cache stored",
          type: "success"
        });
      });
    }
    return {
      normal,
      minified,
      css_cache
    };
  }
  function cacheWorker() {
    const channel = new BroadcastChannel("windpress");
    let buildQueue = Promise.resolve();
    channel.addEventListener("message", async (e2) => {
      const data = e2.data;
      const source = [
        "windpress/dashboard",
        "windpress/integration"
      ];
      const target = "windpress/compiler";
      if (source.includes(data.source) && data.target === target && data.task === "generate-cache") {
        buildQueue = buildQueue.then(async () => {
          await buildCache(data.data).then(() => {
            channel.postMessage({
              source: "windpress/compiler",
              target: "windpress/dashboard",
              task: "generate-cache.response",
              data: {
                status: "success"
              }
            });
          }).catch((e22) => {
            channel.postMessage({
              source: "windpress/compiler",
              target: "windpress/dashboard",
              task: "generate-cache.response",
              data: {
                status: "error"
              }
            });
            console.error(e22);
          });
        }).catch((e22) => {
          console.error(e22);
        });
      }
    });
  }
  setupWorker = async function() {
    if ("locks" in navigator) {
      navigator.locks.request("task_lock", {
        mode: "exclusive"
      }, (lock) => {
        console.log("Lock acquired. Starting worker.");
        cacheWorker();
        return new Promise(() => {
        });
      }).catch(() => {
        console.log("Failed to acquire lock. Worker already running in another tab.");
      });
    } else {
      console.log("Locks API not supported in this browser. Starting worker without lock.");
      cacheWorker();
    }
  };
});
export {
  __tla,
  useApi as a,
  createPinia as c,
  defineStore as d,
  setupWorker as s,
  useLogStore as u,
  w
};
