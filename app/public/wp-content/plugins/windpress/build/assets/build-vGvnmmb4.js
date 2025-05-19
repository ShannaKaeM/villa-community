import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { i as init, l as lightningcssWasmFile, t as transform, __tla as __tla_0 } from "../chunks/index-C8ehqlLx.min.js";
import { r as requireLib, a as requirePathBrowserify, b as requireHasown, g as getDefaultExportFromCjs, p as postcss, i as isValidUrl, c as path$2, __tla as __tla_1 } from "./cssesc-Du71EH2f.js";
import { B as Buffer, p as process$1$1 } from "../chunks/index-Dfa4cJMK.min.js";
import { r as requireLib$1 } from "../chunks/index-CvyxREt8.min.js";
import { x as xs, P as Pu, F, n as ne$1, s as st$1, _ as _$2, a as x$1, V, w, N as N$1, p as postcssNested, r as resolveConfig } from "./resolve-config-CV0cW2mm.js";
let build, optimize, version;
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
  })()
]).then(async () => {
  version = "3.4.17";
  const BROWSER_MAPPING = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    and_qq: null,
    and_uc: null,
    baidu: null,
    bb: null,
    kaios: null,
    op_mini: null
  };
  function browserslistToTargets(browserslist) {
    let targets = {};
    for (let browser2 of browserslist) {
      let [name, v2] = browser2.split(" ");
      if (BROWSER_MAPPING[name] === null) {
        continue;
      }
      let version2 = parseVersion(v2);
      if (version2 == null) {
        continue;
      }
      if (targets[name] == null || version2 < targets[name]) {
        targets[name] = version2;
      }
    }
    return targets;
  }
  function parseVersion(version2) {
    let [major, minor = 0, patch = 0] = version2.split("-")[0].split(".").map((v2) => parseInt(v2, 10));
    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
      return null;
    }
    return major << 16 | minor << 8 | patch;
  }
  var formatImportPrelude;
  var hasRequiredFormatImportPrelude;
  function requireFormatImportPrelude() {
    if (hasRequiredFormatImportPrelude) return formatImportPrelude;
    hasRequiredFormatImportPrelude = 1;
    formatImportPrelude = function formatImportPrelude2(layer, media, supports) {
      const parts = [];
      if (typeof layer !== "undefined") {
        let layerParams = "layer";
        if (layer) {
          layerParams = `layer(${layer})`;
        }
        parts.push(layerParams);
      }
      if (typeof supports !== "undefined") {
        parts.push(`supports(${supports})`);
      }
      if (typeof media !== "undefined") {
        parts.push(media);
      }
      return parts.join(" ");
    };
    return formatImportPrelude;
  }
  var base64EncodedImport;
  var hasRequiredBase64EncodedImport;
  function requireBase64EncodedImport() {
    if (hasRequiredBase64EncodedImport) return base64EncodedImport;
    hasRequiredBase64EncodedImport = 1;
    const formatImportPrelude2 = requireFormatImportPrelude();
    base64EncodedImport = function base64EncodedConditionalImport(prelude, conditions) {
      conditions.reverse();
      const first = conditions.pop();
      let params = `${prelude} ${formatImportPrelude2(first.layer, first.media, first.supports)}`;
      for (const condition of conditions) {
        params = `'data:text/css;base64,${Buffer.from(`@import ${params}`).toString("base64")}' ${formatImportPrelude2(condition.layer, condition.media, condition.supports)}`;
      }
      return params;
    };
    return base64EncodedImport;
  }
  var applyConditions;
  var hasRequiredApplyConditions;
  function requireApplyConditions() {
    if (hasRequiredApplyConditions) return applyConditions;
    hasRequiredApplyConditions = 1;
    const base64EncodedConditionalImport = requireBase64EncodedImport();
    applyConditions = function applyConditions2(bundle, atRule) {
      bundle.forEach((stmt) => {
        var _a2;
        if (stmt.type === "charset" || stmt.type === "warning" || !((_a2 = stmt.conditions) == null ? void 0 : _a2.length)) {
          return;
        }
        if (stmt.type === "import") {
          stmt.node.params = base64EncodedConditionalImport(stmt.fullUri, stmt.conditions);
          return;
        }
        const { nodes } = stmt;
        const { parent } = nodes[0];
        const atRules = [];
        for (const condition of stmt.conditions) {
          if (typeof condition.media !== "undefined") {
            const mediaNode = atRule({
              name: "media",
              params: condition.media,
              source: parent.source
            });
            atRules.push(mediaNode);
          }
          if (typeof condition.supports !== "undefined") {
            const supportsNode = atRule({
              name: "supports",
              params: `(${condition.supports})`,
              source: parent.source
            });
            atRules.push(supportsNode);
          }
          if (typeof condition.layer !== "undefined") {
            const layerNode = atRule({
              name: "layer",
              params: condition.layer,
              source: parent.source
            });
            atRules.push(layerNode);
          }
        }
        const outerAtRule = atRules.shift();
        const innerAtRule = atRules.reduce((previous, next) => {
          previous.append(next);
          return next;
        }, outerAtRule);
        parent.insertBefore(nodes[0], outerAtRule);
        nodes.forEach((node) => {
          node.parent = void 0;
        });
        nodes[0].raws.before = nodes[0].raws.before || "\n";
        innerAtRule.append(nodes);
        stmt.type = "nodes";
        stmt.nodes = [
          outerAtRule
        ];
        delete stmt.node;
      });
    };
    return applyConditions;
  }
  var applyRaws;
  var hasRequiredApplyRaws;
  function requireApplyRaws() {
    if (hasRequiredApplyRaws) return applyRaws;
    hasRequiredApplyRaws = 1;
    applyRaws = function applyRaws2(bundle) {
      bundle.forEach((stmt, index) => {
        if (index === 0) return;
        if (stmt.parent) {
          const { before } = stmt.parent.node.raws;
          if (stmt.type === "nodes") stmt.nodes[0].raws.before = before;
          else stmt.node.raws.before = before;
        } else if (stmt.type === "nodes") {
          stmt.nodes[0].raws.before = stmt.nodes[0].raws.before || "\n";
        }
      });
    };
    return applyRaws;
  }
  var applyStyles;
  var hasRequiredApplyStyles;
  function requireApplyStyles() {
    if (hasRequiredApplyStyles) return applyStyles;
    hasRequiredApplyStyles = 1;
    applyStyles = function applyStyles2(bundle, styles) {
      styles.nodes = [];
      bundle.forEach((stmt) => {
        if ([
          "charset",
          "import"
        ].includes(stmt.type)) {
          stmt.node.parent = void 0;
          styles.append(stmt.node);
        } else if (stmt.type === "nodes") {
          stmt.nodes.forEach((node) => {
            node.parent = void 0;
            styles.append(node);
          });
        }
      });
    };
    return applyStyles;
  }
  var readCache = {
    exports: {}
  };
  var pify = {
    exports: {}
  };
  var hasRequiredPify;
  function requirePify() {
    if (hasRequiredPify) return pify.exports;
    hasRequiredPify = 1;
    var processFn = function(fn, P2, opts) {
      return function() {
        var that = this;
        var args = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        return new P2(function(resolve2, reject) {
          args.push(function(err, result) {
            if (err) {
              reject(err);
            } else if (opts.multiArgs) {
              var results = new Array(arguments.length - 1);
              for (var i2 = 1; i2 < arguments.length; i2++) {
                results[i2 - 1] = arguments[i2];
              }
              resolve2(results);
            } else {
              resolve2(result);
            }
          });
          fn.apply(that, args);
        });
      };
    };
    var pify$1 = pify.exports = function(obj, P2, opts) {
      if (typeof P2 !== "function") {
        opts = P2;
        P2 = Promise;
      }
      opts = opts || {};
      opts.exclude = opts.exclude || [
        /.+Sync$/
      ];
      var filter = function(key) {
        var match = function(pattern) {
          return typeof pattern === "string" ? key === pattern : pattern.test(key);
        };
        return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
      };
      var ret = typeof obj === "function" ? function() {
        if (opts.excludeMain) {
          return obj.apply(this, arguments);
        }
        return processFn(obj, P2, opts).apply(this, arguments);
      } : {};
      return Object.keys(obj).reduce(function(ret2, key) {
        var x2 = obj[key];
        ret2[key] = typeof x2 === "function" && filter(key) ? processFn(x2, P2, opts) : x2;
        return ret2;
      }, ret);
    };
    pify$1.all = pify$1;
    return pify.exports;
  }
  var hasRequiredReadCache;
  function requireReadCache() {
    if (hasRequiredReadCache) return readCache.exports;
    hasRequiredReadCache = 1;
    var fs2 = requireLib();
    var path2 = requirePathBrowserify();
    var pify2 = requirePify();
    var stat = pify2(fs2.stat);
    var readFile = pify2(fs2.readFile);
    var resolve2 = path2.resolve;
    var cache = /* @__PURE__ */ Object.create(null);
    function convert(content, encoding) {
      if (Buffer.isEncoding(encoding)) {
        return content.toString(encoding);
      }
      return content;
    }
    readCache.exports = function(path3, encoding) {
      path3 = resolve2(path3);
      return stat(path3).then(function(stats) {
        var item = cache[path3];
        if (item && item.mtime.getTime() === stats.mtime.getTime()) {
          return convert(item.content, encoding);
        }
        return readFile(path3).then(function(data) {
          cache[path3] = {
            mtime: stats.mtime,
            content: data
          };
          return convert(data, encoding);
        });
      }).catch(function(err) {
        cache[path3] = null;
        return Promise.reject(err);
      });
    };
    readCache.exports.sync = function(path3, encoding) {
      path3 = resolve2(path3);
      try {
        var stats = fs2.statSync(path3);
        var item = cache[path3];
        if (item && item.mtime.getTime() === stats.mtime.getTime()) {
          return convert(item.content, encoding);
        }
        var data = fs2.readFileSync(path3);
        cache[path3] = {
          mtime: stats.mtime,
          content: data
        };
        return convert(data, encoding);
      } catch (err) {
        cache[path3] = null;
        throw err;
      }
    };
    readCache.exports.get = function(path3, encoding) {
      path3 = resolve2(path3);
      if (cache[path3]) {
        return convert(cache[path3].content, encoding);
      }
      return null;
    };
    readCache.exports.clear = function() {
      cache = /* @__PURE__ */ Object.create(null);
    };
    return readCache.exports;
  }
  var dataUrl;
  var hasRequiredDataUrl;
  function requireDataUrl() {
    if (hasRequiredDataUrl) return dataUrl;
    hasRequiredDataUrl = 1;
    const anyDataURLRegexp = /^data:text\/css(?:;(base64|plain))?,/i;
    const base64DataURLRegexp = /^data:text\/css;base64,/i;
    const plainDataURLRegexp = /^data:text\/css;plain,/i;
    function isValid(url2) {
      return anyDataURLRegexp.test(url2);
    }
    function contents(url2) {
      if (base64DataURLRegexp.test(url2)) {
        return Buffer.from(url2.slice(21), "base64").toString();
      }
      if (plainDataURLRegexp.test(url2)) {
        return decodeURIComponent(url2.slice(20));
      }
      return decodeURIComponent(url2.slice(14));
    }
    dataUrl = {
      isValid,
      contents
    };
    return dataUrl;
  }
  var loadContent;
  var hasRequiredLoadContent;
  function requireLoadContent() {
    if (hasRequiredLoadContent) return loadContent;
    hasRequiredLoadContent = 1;
    const readCache2 = requireReadCache();
    const dataURL = requireDataUrl();
    loadContent = function loadContent2(filename) {
      if (dataURL.isValid(filename)) {
        return dataURL.contents(filename);
      }
      return readCache2(filename, "utf-8");
    };
    return loadContent;
  }
  var parseStatements;
  var hasRequiredParseStatements;
  function requireParseStatements() {
    if (hasRequiredParseStatements) return parseStatements;
    hasRequiredParseStatements = 1;
    const valueParser = requireLib$1();
    const { stringify } = valueParser;
    parseStatements = function parseStatements2(result, styles, conditions, from) {
      const statements = [];
      let nodes = [];
      styles.each((node) => {
        let stmt;
        if (node.type === "atrule") {
          if (node.name === "import") stmt = parseImport(result, node, conditions, from);
          else if (node.name === "charset") stmt = parseCharset(result, node, conditions, from);
        }
        if (stmt) {
          if (nodes.length) {
            statements.push({
              type: "nodes",
              nodes,
              conditions: [
                ...conditions
              ],
              from
            });
            nodes = [];
          }
          statements.push(stmt);
        } else nodes.push(node);
      });
      if (nodes.length) {
        statements.push({
          type: "nodes",
          nodes,
          conditions: [
            ...conditions
          ],
          from
        });
      }
      return statements;
    };
    function parseCharset(result, atRule, conditions, from) {
      if (atRule.prev()) {
        return result.warn("@charset must precede all other statements", {
          node: atRule
        });
      }
      return {
        type: "charset",
        node: atRule,
        conditions: [
          ...conditions
        ],
        from
      };
    }
    function parseImport(result, atRule, conditions, from) {
      var _a2, _b;
      let prev = atRule.prev();
      if (prev) {
        do {
          if (prev.type === "comment" || prev.type === "atrule" && prev.name === "import") {
            prev = prev.prev();
            continue;
          }
          break;
        } while (prev);
      }
      if (prev) {
        do {
          if (prev.type === "comment" || prev.type === "atrule" && (prev.name === "charset" || prev.name === "layer" && !prev.nodes)) {
            prev = prev.prev();
            continue;
          }
          return result.warn("@import must precede all other statements (besides @charset or empty @layer)", {
            node: atRule
          });
        } while (prev);
      }
      if (atRule.nodes) {
        return result.warn("It looks like you didn't end your @import statement correctly. Child nodes are attached to it.", {
          node: atRule
        });
      }
      const params = valueParser(atRule.params).nodes;
      const stmt = {
        type: "import",
        uri: "",
        fullUri: "",
        node: atRule,
        conditions: [
          ...conditions
        ],
        from
      };
      let layer;
      let media;
      let supports;
      for (let i = 0; i < params.length; i++) {
        const node = params[i];
        if (node.type === "space" || node.type === "comment") continue;
        if (node.type === "string") {
          if (stmt.uri) {
            return result.warn(`Multiple url's in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          if (!node.value) {
            return result.warn(`Unable to find uri in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          stmt.uri = node.value;
          stmt.fullUri = stringify(node);
          continue;
        }
        if (node.type === "function" && /^url$/i.test(node.value)) {
          if (stmt.uri) {
            return result.warn(`Multiple url's in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          if (!((_b = (_a2 = node.nodes) == null ? void 0 : _a2[0]) == null ? void 0 : _b.value)) {
            return result.warn(`Unable to find uri in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          stmt.uri = node.nodes[0].value;
          stmt.fullUri = stringify(node);
          continue;
        }
        if (!stmt.uri) {
          return result.warn(`Unable to find uri in '${atRule.toString()}'`, {
            node: atRule
          });
        }
        if ((node.type === "word" || node.type === "function") && /^layer$/i.test(node.value)) {
          if (typeof layer !== "undefined") {
            return result.warn(`Multiple layers in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          if (typeof supports !== "undefined") {
            return result.warn(`layers must be defined before support conditions in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          if (node.nodes) {
            layer = stringify(node.nodes);
          } else {
            layer = "";
          }
          continue;
        }
        if (node.type === "function" && /^supports$/i.test(node.value)) {
          if (typeof supports !== "undefined") {
            return result.warn(`Multiple support conditions in '${atRule.toString()}'`, {
              node: atRule
            });
          }
          supports = stringify(node.nodes);
          continue;
        }
        media = stringify(params.slice(i));
        break;
      }
      if (!stmt.uri) {
        return result.warn(`Unable to find uri in '${atRule.toString()}'`, {
          node: atRule
        });
      }
      if (typeof media !== "undefined" || typeof layer !== "undefined" || typeof supports !== "undefined") {
        stmt.conditions.push({
          layer,
          media,
          supports
        });
      }
      return stmt;
    }
    return parseStatements;
  }
  var processContent;
  var hasRequiredProcessContent;
  function requireProcessContent() {
    if (hasRequiredProcessContent) return processContent;
    hasRequiredProcessContent = 1;
    const path2 = requirePathBrowserify();
    let sugarss;
    processContent = function processContent2(result, content, filename, options, postcss2) {
      var _a2;
      const { plugins } = options;
      const ext = path2.extname(filename);
      const parserList = [];
      if (ext === ".sss") {
        if (!sugarss) {
          try {
            sugarss = require("sugarss");
          } catch {
          }
        }
        if (sugarss) return runPostcss(postcss2, content, filename, plugins, [
          sugarss
        ]);
      }
      if ((_a2 = result.opts.syntax) == null ? void 0 : _a2.parse) {
        parserList.push(result.opts.syntax.parse);
      }
      if (result.opts.parser) parserList.push(result.opts.parser);
      parserList.push(null);
      return runPostcss(postcss2, content, filename, plugins, parserList);
    };
    function runPostcss(postcss2, content, filename, plugins, parsers, index) {
      if (!index) index = 0;
      return postcss2(plugins).process(content, {
        from: filename,
        parser: parsers[index]
      }).catch((err) => {
        index++;
        if (index === parsers.length) throw err;
        return runPostcss(postcss2, content, filename, plugins, parsers, index);
      });
    }
    return processContent;
  }
  var browser = {};
  var hasRequiredBrowser;
  function requireBrowser() {
    if (hasRequiredBrowser) return browser;
    hasRequiredBrowser = 1;
    browser.endianness = function() {
      return "LE";
    };
    browser.hostname = function() {
      if (typeof location !== "undefined") {
        return location.hostname;
      } else return "";
    };
    browser.loadavg = function() {
      return [];
    };
    browser.uptime = function() {
      return 0;
    };
    browser.freemem = function() {
      return Number.MAX_VALUE;
    };
    browser.totalmem = function() {
      return Number.MAX_VALUE;
    };
    browser.cpus = function() {
      return [];
    };
    browser.type = function() {
      return "Browser";
    };
    browser.release = function() {
      if (typeof navigator !== "undefined") {
        return navigator.appVersion;
      }
      return "";
    };
    browser.networkInterfaces = browser.getNetworkInterfaces = function() {
      return {};
    };
    browser.arch = function() {
      return "javascript";
    };
    browser.platform = function() {
      return "browser";
    };
    browser.tmpdir = browser.tmpDir = function() {
      return "/tmp";
    };
    browser.EOL = "\n";
    browser.homedir = function() {
      return "/";
    };
    return browser;
  }
  var homedir;
  var hasRequiredHomedir;
  function requireHomedir() {
    if (hasRequiredHomedir) return homedir;
    hasRequiredHomedir = 1;
    var define_process_env_default = {};
    var os2 = requireBrowser();
    homedir = os2.homedir || function homedir2() {
      var home = define_process_env_default.HOME;
      var user = define_process_env_default.LOGNAME || define_process_env_default.USER || define_process_env_default.LNAME || define_process_env_default.USERNAME;
      if (process$1$1.platform === "win32") {
        return define_process_env_default.USERPROFILE || define_process_env_default.HOMEDRIVE + define_process_env_default.HOMEPATH || home || null;
      }
      if (process$1$1.platform === "darwin") {
        return home || (user ? "/Users/" + user : null);
      }
      if (process$1$1.platform === "linux") {
        return home || (process$1$1.getuid() === 0 ? "/root" : user ? "/home/" + user : null);
      }
      return home || null;
    };
    return homedir;
  }
  var caller;
  var hasRequiredCaller;
  function requireCaller() {
    if (hasRequiredCaller) return caller;
    hasRequiredCaller = 1;
    caller = function() {
      var origPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_2, stack2) {
        return stack2;
      };
      var stack = new Error().stack;
      Error.prepareStackTrace = origPrepareStackTrace;
      return stack[2].getFileName();
    };
    return caller;
  }
  var pathParse = {
    exports: {}
  };
  var hasRequiredPathParse;
  function requirePathParse() {
    if (hasRequiredPathParse) return pathParse.exports;
    hasRequiredPathParse = 1;
    var isWindows = process$1$1.platform === "win32";
    var splitWindowsRe = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/;
    var win32 = {};
    function win32SplitPath(filename) {
      return splitWindowsRe.exec(filename).slice(1);
    }
    win32.parse = function(pathString) {
      if (typeof pathString !== "string") {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
      }
      var allParts = win32SplitPath(pathString);
      if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[1],
        dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
      };
    };
    var splitPathRe = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/;
    var posix = {};
    function posixSplitPath(filename) {
      return splitPathRe.exec(filename).slice(1);
    }
    posix.parse = function(pathString) {
      if (typeof pathString !== "string") {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
      }
      var allParts = posixSplitPath(pathString);
      if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[1],
        dir: allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
      };
    };
    if (isWindows) pathParse.exports = win32.parse;
    else pathParse.exports = posix.parse;
    pathParse.exports.posix = posix.parse;
    pathParse.exports.win32 = win32.parse;
    return pathParse.exports;
  }
  var nodeModulesPaths;
  var hasRequiredNodeModulesPaths;
  function requireNodeModulesPaths() {
    if (hasRequiredNodeModulesPaths) return nodeModulesPaths;
    hasRequiredNodeModulesPaths = 1;
    var path2 = requirePathBrowserify();
    var parse = path2.parse || requirePathParse();
    var getNodeModulesDirs = function getNodeModulesDirs2(absoluteStart, modules) {
      var prefix = "/";
      if (/^([A-Za-z]:)/.test(absoluteStart)) {
        prefix = "";
      } else if (/^\\\\/.test(absoluteStart)) {
        prefix = "\\\\";
      }
      var paths = [
        absoluteStart
      ];
      var parsed = parse(absoluteStart);
      while (parsed.dir !== paths[paths.length - 1]) {
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
      }
      return paths.reduce(function(dirs, aPath) {
        return dirs.concat(modules.map(function(moduleDir) {
          return path2.resolve(prefix, aPath, moduleDir);
        }));
      }, []);
    };
    nodeModulesPaths = function nodeModulesPaths2(start, opts, request) {
      var modules = opts && opts.moduleDirectory ? [].concat(opts.moduleDirectory) : [
        "node_modules"
      ];
      if (opts && typeof opts.paths === "function") {
        return opts.paths(request, start, function() {
          return getNodeModulesDirs(start, modules);
        }, opts);
      }
      var dirs = getNodeModulesDirs(start, modules);
      return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
    };
    return nodeModulesPaths;
  }
  var normalizeOptions;
  var hasRequiredNormalizeOptions;
  function requireNormalizeOptions() {
    if (hasRequiredNormalizeOptions) return normalizeOptions;
    hasRequiredNormalizeOptions = 1;
    normalizeOptions = function(x2, opts) {
      return opts || {};
    };
    return normalizeOptions;
  }
  const assert$1 = true;
  const async_hooks$1 = ">= 8";
  const buffer_ieee754$1 = ">= 0.5 && < 0.9.7";
  const buffer$1 = true;
  const child_process$1 = true;
  const cluster$1 = ">= 0.5";
  const console$2 = true;
  const constants$1 = true;
  const crypto$1 = true;
  const _debug_agent$1 = ">= 1 && < 8";
  const _debugger$1 = "< 8";
  const dgram$1 = true;
  const diagnostics_channel$1 = [
    ">= 14.17 && < 15",
    ">= 15.1"
  ];
  const dns$1 = true;
  const domain$1 = ">= 0.7.12";
  const events$1 = true;
  const freelist$1 = "< 6";
  const fs$1 = true;
  const _http_agent$1 = ">= 0.11.1";
  const _http_client$1 = ">= 0.11.1";
  const _http_common$1 = ">= 0.11.1";
  const _http_incoming$1 = ">= 0.11.1";
  const _http_outgoing$1 = ">= 0.11.1";
  const _http_server$1 = ">= 0.11.1";
  const http$1 = true;
  const http2$1 = ">= 8.8";
  const https$1 = true;
  const inspector$1 = ">= 8";
  const _linklist$1 = "< 8";
  const module$1 = true;
  const net$1 = true;
  const os$1 = true;
  const path$1 = true;
  const perf_hooks$1 = ">= 8.5";
  const process$1 = ">= 1";
  const punycode$1 = ">= 0.5";
  const querystring$1 = true;
  const readline$1 = true;
  const repl$1 = true;
  const smalloc$1 = ">= 0.11.5 && < 3";
  const _stream_duplex$1 = ">= 0.9.4";
  const _stream_transform$1 = ">= 0.9.4";
  const _stream_wrap$1 = ">= 1.4.1";
  const _stream_passthrough$1 = ">= 0.9.4";
  const _stream_readable$1 = ">= 0.9.4";
  const _stream_writable$1 = ">= 0.9.4";
  const stream$1 = true;
  const string_decoder$1 = true;
  const sys$1 = [
    ">= 0.4 && < 0.7",
    ">= 0.8"
  ];
  const timers$1 = true;
  const _tls_common$1 = ">= 0.11.13";
  const _tls_legacy$1 = ">= 0.11.3 && < 10";
  const _tls_wrap$1 = ">= 0.11.3";
  const tls$1 = true;
  const trace_events$1 = ">= 10";
  const tty$1 = true;
  const url$1 = true;
  const util$1 = true;
  const v8$1 = ">= 1";
  const vm$1 = true;
  const wasi$1 = [
    ">= 13.4 && < 13.5",
    ">= 18.17 && < 19",
    ">= 20"
  ];
  const worker_threads$1 = ">= 11.7";
  const zlib$1 = ">= 0.5";
  const require$$1$1 = {
    assert: assert$1,
    "node:assert": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "assert/strict": ">= 15",
    "node:assert/strict": ">= 16",
    async_hooks: async_hooks$1,
    "node:async_hooks": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    buffer_ieee754: buffer_ieee754$1,
    buffer: buffer$1,
    "node:buffer": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    child_process: child_process$1,
    "node:child_process": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    cluster: cluster$1,
    "node:cluster": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    console: console$2,
    "node:console": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    constants: constants$1,
    "node:constants": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    crypto: crypto$1,
    "node:crypto": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _debug_agent: _debug_agent$1,
    _debugger: _debugger$1,
    dgram: dgram$1,
    "node:dgram": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    diagnostics_channel: diagnostics_channel$1,
    "node:diagnostics_channel": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    dns: dns$1,
    "node:dns": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "dns/promises": ">= 15",
    "node:dns/promises": ">= 16",
    domain: domain$1,
    "node:domain": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    events: events$1,
    "node:events": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    freelist: freelist$1,
    fs: fs$1,
    "node:fs": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "fs/promises": [
      ">= 10 && < 10.1",
      ">= 14"
    ],
    "node:fs/promises": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_agent: _http_agent$1,
    "node:_http_agent": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_client: _http_client$1,
    "node:_http_client": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_common: _http_common$1,
    "node:_http_common": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_incoming: _http_incoming$1,
    "node:_http_incoming": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_outgoing: _http_outgoing$1,
    "node:_http_outgoing": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_server: _http_server$1,
    "node:_http_server": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    http: http$1,
    "node:http": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    http2: http2$1,
    "node:http2": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    https: https$1,
    "node:https": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    inspector: inspector$1,
    "node:inspector": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "inspector/promises": [
      ">= 19"
    ],
    "node:inspector/promises": [
      ">= 19"
    ],
    _linklist: _linklist$1,
    module: module$1,
    "node:module": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    net: net$1,
    "node:net": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "node-inspect/lib/_inspect": ">= 7.6 && < 12",
    "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
    "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
    os: os$1,
    "node:os": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    path: path$1,
    "node:path": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "path/posix": ">= 15.3",
    "node:path/posix": ">= 16",
    "path/win32": ">= 15.3",
    "node:path/win32": ">= 16",
    perf_hooks: perf_hooks$1,
    "node:perf_hooks": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    process: process$1,
    "node:process": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    punycode: punycode$1,
    "node:punycode": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    querystring: querystring$1,
    "node:querystring": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    readline: readline$1,
    "node:readline": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "readline/promises": ">= 17",
    "node:readline/promises": ">= 17",
    repl: repl$1,
    "node:repl": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "node:sea": [
      ">= 20.12 && < 21",
      ">= 21.7"
    ],
    smalloc: smalloc$1,
    "node:sqlite": [
      ">= 22.13 && < 23",
      ">= 23.4"
    ],
    _stream_duplex: _stream_duplex$1,
    "node:_stream_duplex": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_transform: _stream_transform$1,
    "node:_stream_transform": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_wrap: _stream_wrap$1,
    "node:_stream_wrap": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_passthrough: _stream_passthrough$1,
    "node:_stream_passthrough": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_readable: _stream_readable$1,
    "node:_stream_readable": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_writable: _stream_writable$1,
    "node:_stream_writable": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    stream: stream$1,
    "node:stream": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "stream/consumers": ">= 16.7",
    "node:stream/consumers": ">= 16.7",
    "stream/promises": ">= 15",
    "node:stream/promises": ">= 16",
    "stream/web": ">= 16.5",
    "node:stream/web": ">= 16.5",
    string_decoder: string_decoder$1,
    "node:string_decoder": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    sys: sys$1,
    "node:sys": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "test/reporters": ">= 19.9 && < 20.2",
    "node:test/reporters": [
      ">= 18.17 && < 19",
      ">= 19.9",
      ">= 20"
    ],
    "test/mock_loader": ">= 22.3 && < 22.7",
    "node:test/mock_loader": ">= 22.3 && < 22.7",
    "node:test": [
      ">= 16.17 && < 17",
      ">= 18"
    ],
    timers: timers$1,
    "node:timers": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "timers/promises": ">= 15",
    "node:timers/promises": ">= 16",
    _tls_common: _tls_common$1,
    "node:_tls_common": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _tls_legacy: _tls_legacy$1,
    _tls_wrap: _tls_wrap$1,
    "node:_tls_wrap": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    tls: tls$1,
    "node:tls": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    trace_events: trace_events$1,
    "node:trace_events": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    tty: tty$1,
    "node:tty": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    url: url$1,
    "node:url": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    util: util$1,
    "node:util": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "util/types": ">= 15.3",
    "node:util/types": ">= 16",
    "v8/tools/arguments": ">= 10 && < 12",
    "v8/tools/codemap": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/consarray": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/csvparser": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/logreader": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/profile_view": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/splaytree": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    v8: v8$1,
    "node:v8": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    vm: vm$1,
    "node:vm": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    wasi: wasi$1,
    "node:wasi": [
      ">= 18.17 && < 19",
      ">= 20"
    ],
    worker_threads: worker_threads$1,
    "node:worker_threads": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    zlib: zlib$1,
    "node:zlib": [
      ">= 14.18 && < 15",
      ">= 16"
    ]
  };
  var isCoreModule;
  var hasRequiredIsCoreModule;
  function requireIsCoreModule() {
    if (hasRequiredIsCoreModule) return isCoreModule;
    hasRequiredIsCoreModule = 1;
    var hasOwn = requireHasown();
    function specifierIncluded(current, specifier) {
      var nodeParts = current.split(".");
      var parts = specifier.split(" ");
      var op = parts.length > 1 ? parts[0] : "=";
      var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split(".");
      for (var i = 0; i < 3; ++i) {
        var cur = parseInt(nodeParts[i] || 0, 10);
        var ver = parseInt(versionParts[i] || 0, 10);
        if (cur === ver) {
          continue;
        }
        if (op === "<") {
          return cur < ver;
        }
        if (op === ">=") {
          return cur >= ver;
        }
        return false;
      }
      return op === ">=";
    }
    function matchesRange(current, range) {
      var specifiers = range.split(/ ?&& ?/);
      if (specifiers.length === 0) {
        return false;
      }
      for (var i = 0; i < specifiers.length; ++i) {
        if (!specifierIncluded(current, specifiers[i])) {
          return false;
        }
      }
      return true;
    }
    function versionIncluded(nodeVersion, specifierValue) {
      if (typeof specifierValue === "boolean") {
        return specifierValue;
      }
      var current = typeof nodeVersion === "undefined" ? process$1$1.versions && process$1$1.versions.node : nodeVersion;
      if (typeof current !== "string") {
        return true;
      }
      if (specifierValue && typeof specifierValue === "object") {
        for (var i = 0; i < specifierValue.length; ++i) {
          if (matchesRange(current, specifierValue[i])) {
            return true;
          }
        }
        return false;
      }
      return matchesRange(current, specifierValue);
    }
    var data = require$$1$1;
    isCoreModule = function isCore2(x2, nodeVersion) {
      return hasOwn(data, x2) && versionIncluded(nodeVersion, data[x2]);
    };
    return isCoreModule;
  }
  var async;
  var hasRequiredAsync;
  function requireAsync() {
    if (hasRequiredAsync) return async;
    hasRequiredAsync = 1;
    var fs2 = requireLib();
    var getHomedir = requireHomedir();
    var path2 = requirePathBrowserify();
    var caller2 = requireCaller();
    var nodeModulesPaths2 = requireNodeModulesPaths();
    var normalizeOptions2 = requireNormalizeOptions();
    var isCore2 = requireIsCoreModule();
    var realpathFS = process$1$1.platform !== "win32" && fs2.realpath && typeof fs2.realpath.native === "function" ? fs2.realpath.native : fs2.realpath;
    var homedir2 = getHomedir();
    var defaultPaths = function() {
      return [
        path2.join(homedir2, ".node_modules"),
        path2.join(homedir2, ".node_libraries")
      ];
    };
    var defaultIsFile = function isFile(file, cb) {
      fs2.stat(file, function(err, stat) {
        if (!err) {
          return cb(null, stat.isFile() || stat.isFIFO());
        }
        if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
        return cb(err);
      });
    };
    var defaultIsDir = function isDirectory(dir, cb) {
      fs2.stat(dir, function(err, stat) {
        if (!err) {
          return cb(null, stat.isDirectory());
        }
        if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
        return cb(err);
      });
    };
    var defaultRealpath = function realpath(x2, cb) {
      realpathFS(x2, function(realpathErr, realPath) {
        if (realpathErr && realpathErr.code !== "ENOENT") cb(realpathErr);
        else cb(null, realpathErr ? x2 : realPath);
      });
    };
    var maybeRealpath = function maybeRealpath2(realpath, x2, opts, cb) {
      if (opts && opts.preserveSymlinks === false) {
        realpath(x2, cb);
      } else {
        cb(null, x2);
      }
    };
    var defaultReadPackage = function defaultReadPackage2(readFile, pkgfile, cb) {
      readFile(pkgfile, function(readFileErr, body) {
        if (readFileErr) cb(readFileErr);
        else {
          try {
            var pkg = JSON.parse(body);
            cb(null, pkg);
          } catch (jsonErr) {
            cb(null);
          }
        }
      });
    };
    var getPackageCandidates = function getPackageCandidates2(x2, start, opts) {
      var dirs = nodeModulesPaths2(start, opts, x2);
      for (var i = 0; i < dirs.length; i++) {
        dirs[i] = path2.join(dirs[i], x2);
      }
      return dirs;
    };
    async = function resolve2(x2, options, callback) {
      var cb = callback;
      var opts = options;
      if (typeof options === "function") {
        cb = opts;
        opts = {};
      }
      if (typeof x2 !== "string") {
        var err = new TypeError("Path must be a string.");
        return process$1$1.nextTick(function() {
          cb(err);
        });
      }
      opts = normalizeOptions2(x2, opts);
      var isFile = opts.isFile || defaultIsFile;
      var isDirectory = opts.isDirectory || defaultIsDir;
      var readFile = opts.readFile || fs2.readFile;
      var realpath = opts.realpath || defaultRealpath;
      var readPackage = opts.readPackage || defaultReadPackage;
      if (opts.readFile && opts.readPackage) {
        var conflictErr = new TypeError("`readFile` and `readPackage` are mutually exclusive.");
        return process$1$1.nextTick(function() {
          cb(conflictErr);
        });
      }
      var packageIterator = opts.packageIterator;
      var extensions = opts.extensions || [
        ".js"
      ];
      var includeCoreModules = opts.includeCoreModules !== false;
      var basedir = opts.basedir || path2.dirname(caller2());
      var parent = opts.filename || basedir;
      opts.paths = opts.paths || defaultPaths();
      var absoluteStart = path2.resolve(basedir);
      maybeRealpath(realpath, absoluteStart, opts, function(err2, realStart) {
        if (err2) cb(err2);
        else init2(realStart);
      });
      var res;
      function init2(basedir2) {
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x2)) {
          res = path2.resolve(basedir2, x2);
          if (x2 === "." || x2 === ".." || x2.slice(-1) === "/") res += "/";
          if (/\/$/.test(x2) && res === basedir2) {
            loadAsDirectory(res, opts.package, onfile);
          } else loadAsFile(res, opts.package, onfile);
        } else if (includeCoreModules && isCore2(x2)) {
          return cb(null, x2);
        } else loadNodeModules(x2, basedir2, function(err2, n2, pkg) {
          if (err2) cb(err2);
          else if (n2) {
            return maybeRealpath(realpath, n2, opts, function(err3, realN) {
              if (err3) {
                cb(err3);
              } else {
                cb(null, realN, pkg);
              }
            });
          } else {
            var moduleError = new Error("Cannot find module '" + x2 + "' from '" + parent + "'");
            moduleError.code = "MODULE_NOT_FOUND";
            cb(moduleError);
          }
        });
      }
      function onfile(err2, m2, pkg) {
        if (err2) cb(err2);
        else if (m2) cb(null, m2, pkg);
        else loadAsDirectory(res, function(err3, d, pkg2) {
          if (err3) cb(err3);
          else if (d) {
            maybeRealpath(realpath, d, opts, function(err4, realD) {
              if (err4) {
                cb(err4);
              } else {
                cb(null, realD, pkg2);
              }
            });
          } else {
            var moduleError = new Error("Cannot find module '" + x2 + "' from '" + parent + "'");
            moduleError.code = "MODULE_NOT_FOUND";
            cb(moduleError);
          }
        });
      }
      function loadAsFile(x3, thePackage, callback2) {
        var loadAsFilePackage = thePackage;
        var cb2 = callback2;
        if (typeof loadAsFilePackage === "function") {
          cb2 = loadAsFilePackage;
          loadAsFilePackage = void 0;
        }
        var exts = [
          ""
        ].concat(extensions);
        load(exts, x3, loadAsFilePackage);
        function load(exts2, x4, loadPackage) {
          if (exts2.length === 0) return cb2(null, void 0, loadPackage);
          var file = x4 + exts2[0];
          var pkg = loadPackage;
          if (pkg) onpkg(null, pkg);
          else loadpkg(path2.dirname(file), onpkg);
          function onpkg(err2, pkg_, dir) {
            pkg = pkg_;
            if (err2) return cb2(err2);
            if (dir && pkg && opts.pathFilter) {
              var rfile = path2.relative(dir, file);
              var rel = rfile.slice(0, rfile.length - exts2[0].length);
              var r = opts.pathFilter(pkg, x4, rel);
              if (r) return load([
                ""
              ].concat(extensions.slice()), path2.resolve(dir, r), pkg);
            }
            isFile(file, onex);
          }
          function onex(err2, ex) {
            if (err2) return cb2(err2);
            if (ex) return cb2(null, file, pkg);
            load(exts2.slice(1), x4, pkg);
          }
        }
      }
      function loadpkg(dir, cb2) {
        if (dir === "" || dir === "/") return cb2(null);
        if (process$1$1.platform === "win32" && /^\w:[/\\]*$/.test(dir)) {
          return cb2(null);
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return cb2(null);
        maybeRealpath(realpath, dir, opts, function(unwrapErr, pkgdir) {
          if (unwrapErr) return loadpkg(path2.dirname(dir), cb2);
          var pkgfile = path2.join(pkgdir, "package.json");
          isFile(pkgfile, function(err2, ex) {
            if (!ex) return loadpkg(path2.dirname(dir), cb2);
            readPackage(readFile, pkgfile, function(err3, pkgParam) {
              if (err3) cb2(err3);
              var pkg = pkgParam;
              if (pkg && opts.packageFilter) {
                pkg = opts.packageFilter(pkg, pkgfile);
              }
              cb2(null, pkg, dir);
            });
          });
        });
      }
      function loadAsDirectory(x3, loadAsDirectoryPackage, callback2) {
        var cb2 = callback2;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === "function") {
          cb2 = fpkg;
          fpkg = opts.package;
        }
        maybeRealpath(realpath, x3, opts, function(unwrapErr, pkgdir) {
          if (unwrapErr) return cb2(unwrapErr);
          var pkgfile = path2.join(pkgdir, "package.json");
          isFile(pkgfile, function(err2, ex) {
            if (err2) return cb2(err2);
            if (!ex) return loadAsFile(path2.join(x3, "index"), fpkg, cb2);
            readPackage(readFile, pkgfile, function(err3, pkgParam) {
              if (err3) return cb2(err3);
              var pkg = pkgParam;
              if (pkg && opts.packageFilter) {
                pkg = opts.packageFilter(pkg, pkgfile);
              }
              if (pkg && pkg.main) {
                if (typeof pkg.main !== "string") {
                  var mainError = new TypeError("package \u201C" + pkg.name + "\u201D `main` must be a string");
                  mainError.code = "INVALID_PACKAGE_MAIN";
                  return cb2(mainError);
                }
                if (pkg.main === "." || pkg.main === "./") {
                  pkg.main = "index";
                }
                loadAsFile(path2.resolve(x3, pkg.main), pkg, function(err4, m2, pkg2) {
                  if (err4) return cb2(err4);
                  if (m2) return cb2(null, m2, pkg2);
                  if (!pkg2) return loadAsFile(path2.join(x3, "index"), pkg2, cb2);
                  var dir = path2.resolve(x3, pkg2.main);
                  loadAsDirectory(dir, pkg2, function(err5, n2, pkg3) {
                    if (err5) return cb2(err5);
                    if (n2) return cb2(null, n2, pkg3);
                    loadAsFile(path2.join(x3, "index"), pkg3, cb2);
                  });
                });
                return;
              }
              loadAsFile(path2.join(x3, "/index"), pkg, cb2);
            });
          });
        });
      }
      function processDirs(cb2, dirs) {
        if (dirs.length === 0) return cb2(null, void 0);
        var dir = dirs[0];
        isDirectory(path2.dirname(dir), isdir);
        function isdir(err2, isdir2) {
          if (err2) return cb2(err2);
          if (!isdir2) return processDirs(cb2, dirs.slice(1));
          loadAsFile(dir, opts.package, onfile2);
        }
        function onfile2(err2, m2, pkg) {
          if (err2) return cb2(err2);
          if (m2) return cb2(null, m2, pkg);
          loadAsDirectory(dir, opts.package, ondir);
        }
        function ondir(err2, n2, pkg) {
          if (err2) return cb2(err2);
          if (n2) return cb2(null, n2, pkg);
          processDirs(cb2, dirs.slice(1));
        }
      }
      function loadNodeModules(x3, start, cb2) {
        var thunk = function() {
          return getPackageCandidates(x3, start, opts);
        };
        processDirs(cb2, packageIterator ? packageIterator(x3, start, thunk, opts) : thunk());
      }
    };
    return async;
  }
  const assert = true;
  const async_hooks = ">= 8";
  const buffer_ieee754 = ">= 0.5 && < 0.9.7";
  const buffer = true;
  const child_process = true;
  const cluster = ">= 0.5";
  const console$1 = true;
  const constants = true;
  const crypto = true;
  const _debug_agent = ">= 1 && < 8";
  const _debugger = "< 8";
  const dgram = true;
  const diagnostics_channel = [
    ">= 14.17 && < 15",
    ">= 15.1"
  ];
  const dns = true;
  const domain = ">= 0.7.12";
  const events = true;
  const freelist = "< 6";
  const fs = true;
  const _http_agent = ">= 0.11.1";
  const _http_client = ">= 0.11.1";
  const _http_common = ">= 0.11.1";
  const _http_incoming = ">= 0.11.1";
  const _http_outgoing = ">= 0.11.1";
  const _http_server = ">= 0.11.1";
  const http = true;
  const http2 = ">= 8.8";
  const https = true;
  const inspector = ">= 8";
  const _linklist = "< 8";
  const module = true;
  const net = true;
  const os = true;
  const path = true;
  const perf_hooks = ">= 8.5";
  const process = ">= 1";
  const punycode = ">= 0.5";
  const querystring = true;
  const readline = true;
  const repl = true;
  const smalloc = ">= 0.11.5 && < 3";
  const _stream_duplex = ">= 0.9.4";
  const _stream_transform = ">= 0.9.4";
  const _stream_wrap = ">= 1.4.1";
  const _stream_passthrough = ">= 0.9.4";
  const _stream_readable = ">= 0.9.4";
  const _stream_writable = ">= 0.9.4";
  const stream = true;
  const string_decoder = true;
  const sys = [
    ">= 0.4 && < 0.7",
    ">= 0.8"
  ];
  const timers = true;
  const _tls_common = ">= 0.11.13";
  const _tls_legacy = ">= 0.11.3 && < 10";
  const _tls_wrap = ">= 0.11.3";
  const tls = true;
  const trace_events = ">= 10";
  const tty = true;
  const url = true;
  const util = true;
  const v8 = ">= 1";
  const vm = true;
  const wasi = [
    ">= 13.4 && < 13.5",
    ">= 18.17 && < 19",
    ">= 20"
  ];
  const worker_threads = ">= 11.7";
  const zlib = ">= 0.5";
  const require$$1 = {
    assert,
    "node:assert": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "assert/strict": ">= 15",
    "node:assert/strict": ">= 16",
    async_hooks,
    "node:async_hooks": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    buffer_ieee754,
    buffer,
    "node:buffer": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    child_process,
    "node:child_process": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    cluster,
    "node:cluster": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    console: console$1,
    "node:console": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    constants,
    "node:constants": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    crypto,
    "node:crypto": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _debug_agent,
    _debugger,
    dgram,
    "node:dgram": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    diagnostics_channel,
    "node:diagnostics_channel": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    dns,
    "node:dns": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "dns/promises": ">= 15",
    "node:dns/promises": ">= 16",
    domain,
    "node:domain": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    events,
    "node:events": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    freelist,
    fs,
    "node:fs": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "fs/promises": [
      ">= 10 && < 10.1",
      ">= 14"
    ],
    "node:fs/promises": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_agent,
    "node:_http_agent": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_client,
    "node:_http_client": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_common,
    "node:_http_common": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_incoming,
    "node:_http_incoming": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_outgoing,
    "node:_http_outgoing": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _http_server,
    "node:_http_server": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    http,
    "node:http": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    http2,
    "node:http2": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    https,
    "node:https": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    inspector,
    "node:inspector": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "inspector/promises": [
      ">= 19"
    ],
    "node:inspector/promises": [
      ">= 19"
    ],
    _linklist,
    module,
    "node:module": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    net,
    "node:net": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "node-inspect/lib/_inspect": ">= 7.6 && < 12",
    "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
    "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
    os,
    "node:os": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    path,
    "node:path": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "path/posix": ">= 15.3",
    "node:path/posix": ">= 16",
    "path/win32": ">= 15.3",
    "node:path/win32": ">= 16",
    perf_hooks,
    "node:perf_hooks": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    process,
    "node:process": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    punycode,
    "node:punycode": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    querystring,
    "node:querystring": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    readline,
    "node:readline": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "readline/promises": ">= 17",
    "node:readline/promises": ">= 17",
    repl,
    "node:repl": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "node:sea": [
      ">= 20.12 && < 21",
      ">= 21.7"
    ],
    smalloc,
    "node:sqlite": ">= 23.4",
    _stream_duplex,
    "node:_stream_duplex": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_transform,
    "node:_stream_transform": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_wrap,
    "node:_stream_wrap": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_passthrough,
    "node:_stream_passthrough": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_readable,
    "node:_stream_readable": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _stream_writable,
    "node:_stream_writable": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    stream,
    "node:stream": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "stream/consumers": ">= 16.7",
    "node:stream/consumers": ">= 16.7",
    "stream/promises": ">= 15",
    "node:stream/promises": ">= 16",
    "stream/web": ">= 16.5",
    "node:stream/web": ">= 16.5",
    string_decoder,
    "node:string_decoder": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    sys,
    "node:sys": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "test/reporters": ">= 19.9 && < 20.2",
    "node:test/reporters": [
      ">= 18.17 && < 19",
      ">= 19.9",
      ">= 20"
    ],
    "test/mock_loader": ">= 22.3 && < 22.7",
    "node:test/mock_loader": ">= 22.3 && < 22.7",
    "node:test": [
      ">= 16.17 && < 17",
      ">= 18"
    ],
    timers,
    "node:timers": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "timers/promises": ">= 15",
    "node:timers/promises": ">= 16",
    _tls_common,
    "node:_tls_common": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    _tls_legacy,
    _tls_wrap,
    "node:_tls_wrap": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    tls,
    "node:tls": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    trace_events,
    "node:trace_events": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    tty,
    "node:tty": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    url,
    "node:url": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    util,
    "node:util": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    "util/types": ">= 15.3",
    "node:util/types": ">= 16",
    "v8/tools/arguments": ">= 10 && < 12",
    "v8/tools/codemap": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/consarray": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/csvparser": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/logreader": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/profile_view": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    "v8/tools/splaytree": [
      ">= 4.4 && < 5",
      ">= 5.2 && < 12"
    ],
    v8,
    "node:v8": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    vm,
    "node:vm": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    wasi,
    "node:wasi": [
      ">= 18.17 && < 19",
      ">= 20"
    ],
    worker_threads,
    "node:worker_threads": [
      ">= 14.18 && < 15",
      ">= 16"
    ],
    zlib,
    "node:zlib": [
      ">= 14.18 && < 15",
      ">= 16"
    ]
  };
  var core_1;
  var hasRequiredCore;
  function requireCore() {
    if (hasRequiredCore) return core_1;
    hasRequiredCore = 1;
    var isCoreModule2 = requireIsCoreModule();
    var data = require$$1;
    var core = {};
    for (var mod in data) {
      if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = isCoreModule2(mod);
      }
    }
    core_1 = core;
    return core_1;
  }
  var isCore;
  var hasRequiredIsCore;
  function requireIsCore() {
    if (hasRequiredIsCore) return isCore;
    hasRequiredIsCore = 1;
    var isCoreModule2 = requireIsCoreModule();
    isCore = function isCore2(x2) {
      return isCoreModule2(x2);
    };
    return isCore;
  }
  var sync;
  var hasRequiredSync;
  function requireSync() {
    if (hasRequiredSync) return sync;
    hasRequiredSync = 1;
    var isCore2 = requireIsCoreModule();
    var fs2 = requireLib();
    var path2 = requirePathBrowserify();
    var getHomedir = requireHomedir();
    var caller2 = requireCaller();
    var nodeModulesPaths2 = requireNodeModulesPaths();
    var normalizeOptions2 = requireNormalizeOptions();
    var realpathFS = process$1$1.platform !== "win32" && fs2.realpathSync && typeof fs2.realpathSync.native === "function" ? fs2.realpathSync.native : fs2.realpathSync;
    var homedir2 = getHomedir();
    var defaultPaths = function() {
      return [
        path2.join(homedir2, ".node_modules"),
        path2.join(homedir2, ".node_libraries")
      ];
    };
    var defaultIsFile = function isFile(file) {
      try {
        var stat = fs2.statSync(file, {
          throwIfNoEntry: false
        });
      } catch (e) {
        if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
        throw e;
      }
      return !!stat && (stat.isFile() || stat.isFIFO());
    };
    var defaultIsDir = function isDirectory(dir) {
      try {
        var stat = fs2.statSync(dir, {
          throwIfNoEntry: false
        });
      } catch (e) {
        if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
        throw e;
      }
      return !!stat && stat.isDirectory();
    };
    var defaultRealpathSync = function realpathSync(x2) {
      try {
        return realpathFS(x2);
      } catch (realpathErr) {
        if (realpathErr.code !== "ENOENT") {
          throw realpathErr;
        }
      }
      return x2;
    };
    var maybeRealpathSync = function maybeRealpathSync2(realpathSync, x2, opts) {
      if (opts && opts.preserveSymlinks === false) {
        return realpathSync(x2);
      }
      return x2;
    };
    var defaultReadPackageSync = function defaultReadPackageSync2(readFileSync, pkgfile) {
      var body = readFileSync(pkgfile);
      try {
        var pkg = JSON.parse(body);
        return pkg;
      } catch (jsonErr) {
      }
    };
    var getPackageCandidates = function getPackageCandidates2(x2, start, opts) {
      var dirs = nodeModulesPaths2(start, opts, x2);
      for (var i = 0; i < dirs.length; i++) {
        dirs[i] = path2.join(dirs[i], x2);
      }
      return dirs;
    };
    sync = function resolveSync(x2, options) {
      if (typeof x2 !== "string") {
        throw new TypeError("Path must be a string.");
      }
      var opts = normalizeOptions2(x2, options);
      var isFile = opts.isFile || defaultIsFile;
      var readFileSync = opts.readFileSync || fs2.readFileSync;
      var isDirectory = opts.isDirectory || defaultIsDir;
      var realpathSync = opts.realpathSync || defaultRealpathSync;
      var readPackageSync = opts.readPackageSync || defaultReadPackageSync;
      if (opts.readFileSync && opts.readPackageSync) {
        throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
      }
      var packageIterator = opts.packageIterator;
      var extensions = opts.extensions || [
        ".js"
      ];
      var includeCoreModules = opts.includeCoreModules !== false;
      var basedir = opts.basedir || path2.dirname(caller2());
      var parent = opts.filename || basedir;
      opts.paths = opts.paths || defaultPaths();
      var absoluteStart = maybeRealpathSync(realpathSync, path2.resolve(basedir), opts);
      if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x2)) {
        var res = path2.resolve(absoluteStart, x2);
        if (x2 === "." || x2 === ".." || x2.slice(-1) === "/") res += "/";
        var m2 = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m2) return maybeRealpathSync(realpathSync, m2, opts);
      } else if (includeCoreModules && isCore2(x2)) {
        return x2;
      } else {
        var n2 = loadNodeModulesSync(x2, absoluteStart);
        if (n2) return maybeRealpathSync(realpathSync, n2, opts);
      }
      var err = new Error("Cannot find module '" + x2 + "' from '" + parent + "'");
      err.code = "MODULE_NOT_FOUND";
      throw err;
      function loadAsFileSync(x3) {
        var pkg = loadpkg(path2.dirname(x3));
        if (pkg && pkg.dir && pkg.pkg && opts.pathFilter) {
          var rfile = path2.relative(pkg.dir, x3);
          var r = opts.pathFilter(pkg.pkg, x3, rfile);
          if (r) {
            x3 = path2.resolve(pkg.dir, r);
          }
        }
        if (isFile(x3)) {
          return x3;
        }
        for (var i = 0; i < extensions.length; i++) {
          var file = x3 + extensions[i];
          if (isFile(file)) {
            return file;
          }
        }
      }
      function loadpkg(dir) {
        if (dir === "" || dir === "/") return;
        if (process$1$1.platform === "win32" && /^\w:[/\\]*$/.test(dir)) {
          return;
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return;
        var pkgfile = path2.join(maybeRealpathSync(realpathSync, dir, opts), "package.json");
        if (!isFile(pkgfile)) {
          return loadpkg(path2.dirname(dir));
        }
        var pkg = readPackageSync(readFileSync, pkgfile);
        if (pkg && opts.packageFilter) {
          pkg = opts.packageFilter(pkg, dir);
        }
        return {
          pkg,
          dir
        };
      }
      function loadAsDirectorySync(x3) {
        var pkgfile = path2.join(maybeRealpathSync(realpathSync, x3, opts), "/package.json");
        if (isFile(pkgfile)) {
          try {
            var pkg = readPackageSync(readFileSync, pkgfile);
          } catch (e) {
          }
          if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(pkg, x3);
          }
          if (pkg && pkg.main) {
            if (typeof pkg.main !== "string") {
              var mainError = new TypeError("package \u201C" + pkg.name + "\u201D `main` must be a string");
              mainError.code = "INVALID_PACKAGE_MAIN";
              throw mainError;
            }
            if (pkg.main === "." || pkg.main === "./") {
              pkg.main = "index";
            }
            try {
              var m3 = loadAsFileSync(path2.resolve(x3, pkg.main));
              if (m3) return m3;
              var n3 = loadAsDirectorySync(path2.resolve(x3, pkg.main));
              if (n3) return n3;
            } catch (e) {
            }
          }
        }
        return loadAsFileSync(path2.join(x3, "/index"));
      }
      function loadNodeModulesSync(x3, start) {
        var thunk = function() {
          return getPackageCandidates(x3, start, opts);
        };
        var dirs = packageIterator ? packageIterator(x3, start, thunk, opts) : thunk();
        for (var i = 0; i < dirs.length; i++) {
          var dir = dirs[i];
          if (isDirectory(path2.dirname(dir))) {
            var m3 = loadAsFileSync(dir);
            if (m3) return m3;
            var n3 = loadAsDirectorySync(dir);
            if (n3) return n3;
          }
        }
      }
    };
    return sync;
  }
  var resolve;
  var hasRequiredResolve;
  function requireResolve() {
    if (hasRequiredResolve) return resolve;
    hasRequiredResolve = 1;
    var async2 = requireAsync();
    async2.core = requireCore();
    async2.isCore = requireIsCore();
    async2.sync = requireSync();
    resolve = async2;
    return resolve;
  }
  var resolveId;
  var hasRequiredResolveId;
  function requireResolveId() {
    if (hasRequiredResolveId) return resolveId;
    hasRequiredResolveId = 1;
    const resolve2 = requireResolve();
    const moduleDirectories = [
      "web_modules",
      "node_modules"
    ];
    function resolveModule(id, opts) {
      return new Promise((res, rej) => {
        resolve2(id, opts, (err, path2) => err ? rej(err) : res(path2));
      });
    }
    resolveId = function resolveId2(id, base, options, node) {
      const paths = options.path;
      const resolveOpts = {
        basedir: base,
        moduleDirectory: moduleDirectories.concat(options.addModulesDirectories),
        paths,
        extensions: [
          ".css"
        ],
        packageFilter: function processPackage(pkg) {
          if (pkg.style) pkg.main = pkg.style;
          else if (!pkg.main || !/\.css$/.test(pkg.main)) pkg.main = "index.css";
          return pkg;
        },
        preserveSymlinks: false
      };
      return resolveModule(`./${id}`, resolveOpts).catch(() => resolveModule(id, resolveOpts)).catch(() => {
        if (paths.indexOf(base) === -1) paths.unshift(base);
        throw node.error(`Failed to find '${id}'
  in [
    ${paths.join(",\n    ")}
  ]`);
      });
    };
    return resolveId;
  }
  var parseStyles_1;
  var hasRequiredParseStyles;
  function requireParseStyles() {
    if (hasRequiredParseStyles) return parseStyles_1;
    hasRequiredParseStyles = 1;
    const path2 = requirePathBrowserify();
    const dataURL = requireDataUrl();
    const parseStatements2 = requireParseStatements();
    const processContent2 = requireProcessContent();
    const resolveId2 = requireResolveId();
    const formatImportPrelude2 = requireFormatImportPrelude();
    async function parseStyles(result, styles, options, state, conditions, from, postcss2) {
      const statements = parseStatements2(result, styles, conditions, from);
      for (const stmt of statements) {
        if (stmt.type !== "import" || !isProcessableURL(stmt.uri)) {
          continue;
        }
        if (options.filter && !options.filter(stmt.uri)) {
          continue;
        }
        await resolveImportId(result, stmt, options, state, postcss2);
      }
      let charset;
      const imports = [];
      const bundle = [];
      function handleCharset(stmt) {
        if (!charset) charset = stmt;
        else if (stmt.node.params.toLowerCase() !== charset.node.params.toLowerCase()) {
          throw stmt.node.error(`Incompatible @charset statements:
  ${stmt.node.params} specified in ${stmt.node.source.input.file}
  ${charset.node.params} specified in ${charset.node.source.input.file}`);
        }
      }
      statements.forEach((stmt) => {
        if (stmt.type === "charset") handleCharset(stmt);
        else if (stmt.type === "import") {
          if (stmt.children) {
            stmt.children.forEach((child, index) => {
              if (child.type === "import") imports.push(child);
              else if (child.type === "charset") handleCharset(child);
              else bundle.push(child);
              if (index === 0) child.parent = stmt;
            });
          } else imports.push(stmt);
        } else if (stmt.type === "nodes") {
          bundle.push(stmt);
        }
      });
      return charset ? [
        charset,
        ...imports.concat(bundle)
      ] : imports.concat(bundle);
    }
    async function resolveImportId(result, stmt, options, state, postcss2) {
      var _a2, _b;
      if (dataURL.isValid(stmt.uri)) {
        stmt.children = await loadImportContent(result, stmt, stmt.uri, options, state, postcss2);
        return;
      } else if (dataURL.isValid(stmt.from.slice(-1))) {
        throw stmt.node.error(`Unable to import '${stmt.uri}' from a stylesheet that is embedded in a data url`);
      }
      const atRule = stmt.node;
      let sourceFile;
      if ((_b = (_a2 = atRule.source) == null ? void 0 : _a2.input) == null ? void 0 : _b.file) {
        sourceFile = atRule.source.input.file;
      }
      const base = sourceFile ? path2.dirname(atRule.source.input.file) : options.root;
      const paths = [
        await options.resolve(stmt.uri, base, options, atRule)
      ].flat();
      const resolved = await Promise.all(paths.map((file) => {
        return !path2.isAbsolute(file) ? resolveId2(file, base, options, atRule) : file;
      }));
      resolved.forEach((file) => {
        result.messages.push({
          type: "dependency",
          plugin: "postcss-import",
          file,
          parent: sourceFile
        });
      });
      const importedContent = await Promise.all(resolved.map((file) => {
        return loadImportContent(result, stmt, file, options, state, postcss2);
      }));
      stmt.children = importedContent.flat().filter((x2) => !!x2);
    }
    async function loadImportContent(result, stmt, filename, options, state, postcss2) {
      var _a2, _b;
      const atRule = stmt.node;
      const { conditions, from } = stmt;
      const stmtDuplicateCheckKey = conditions.map((condition) => formatImportPrelude2(condition.layer, condition.media, condition.supports)).join(":");
      if (options.skipDuplicates) {
        if ((_a2 = state.importedFiles[filename]) == null ? void 0 : _a2[stmtDuplicateCheckKey]) {
          return;
        }
        if (!state.importedFiles[filename]) {
          state.importedFiles[filename] = {};
        }
        state.importedFiles[filename][stmtDuplicateCheckKey] = true;
      }
      if (from.includes(filename)) {
        return;
      }
      const content = await options.load(filename, options);
      if (content.trim() === "" && options.warnOnEmpty) {
        result.warn(`${filename} is empty`, {
          node: atRule
        });
        return;
      }
      if (options.skipDuplicates && ((_b = state.hashFiles[content]) == null ? void 0 : _b[stmtDuplicateCheckKey])) {
        return;
      }
      const importedResult = await processContent2(result, content, filename, options, postcss2);
      const styles = importedResult.root;
      result.messages = result.messages.concat(importedResult.messages);
      if (options.skipDuplicates) {
        const hasImport = styles.some((child) => {
          return child.type === "atrule" && child.name === "import";
        });
        if (!hasImport) {
          if (!state.hashFiles[content]) {
            state.hashFiles[content] = {};
          }
          state.hashFiles[content][stmtDuplicateCheckKey] = true;
        }
      }
      return parseStyles(result, styles, options, state, conditions, [
        ...from,
        filename
      ], postcss2);
    }
    function isProcessableURL(uri) {
      if (/^(?:[a-z]+:)?\/\//i.test(uri)) {
        return false;
      }
      try {
        const url2 = new URL(uri, "https://example.com");
        if (url2.search) {
          return false;
        }
      } catch {
      }
      return true;
    }
    parseStyles_1 = parseStyles;
    return parseStyles_1;
  }
  var postcssImport$1;
  var hasRequiredPostcssImport;
  function requirePostcssImport() {
    if (hasRequiredPostcssImport) return postcssImport$1;
    hasRequiredPostcssImport = 1;
    const path2 = requirePathBrowserify();
    const applyConditions2 = requireApplyConditions();
    const applyRaws2 = requireApplyRaws();
    const applyStyles2 = requireApplyStyles();
    const loadContent2 = requireLoadContent();
    const parseStyles = requireParseStyles();
    const resolveId2 = requireResolveId();
    function AtImport(options) {
      options = {
        root: process$1$1.cwd(),
        path: [],
        skipDuplicates: true,
        resolve: resolveId2,
        load: loadContent2,
        plugins: [],
        addModulesDirectories: [],
        warnOnEmpty: true,
        ...options
      };
      options.root = path2.resolve(options.root);
      if (typeof options.path === "string") options.path = [
        options.path
      ];
      if (!Array.isArray(options.path)) options.path = [];
      options.path = options.path.map((p2) => path2.resolve(options.root, p2));
      return {
        postcssPlugin: "postcss-import",
        async Once(styles, { result, atRule, postcss: postcss2 }) {
          var _a2, _b;
          const state = {
            importedFiles: {},
            hashFiles: {}
          };
          if ((_b = (_a2 = styles.source) == null ? void 0 : _a2.input) == null ? void 0 : _b.file) {
            state.importedFiles[styles.source.input.file] = {};
          }
          if (options.plugins && !Array.isArray(options.plugins)) {
            throw new Error("plugins option must be an array");
          }
          const bundle = await parseStyles(result, styles, options, state, [], [], postcss2);
          applyRaws2(bundle);
          applyConditions2(bundle, atRule);
          applyStyles2(bundle, styles);
        }
      };
    }
    AtImport.postcss = true;
    postcssImport$1 = AtImport;
    return postcssImport$1;
  }
  var postcssImportExports = requirePostcssImport();
  const postcssImport = getDefaultExportFromCjs(postcssImportExports);
  var f = Object.create;
  var n = Object.defineProperty;
  var u = Object.getOwnPropertyDescriptor;
  var m = Object.getOwnPropertyNames;
  var _$1 = Object.getPrototypeOf, x = Object.prototype.hasOwnProperty;
  var p = (h, e) => () => (e || h((e = {
    exports: {}
  }).exports, e), e.exports);
  var g = (h, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let s of m(e)) !x.call(h, s) && s !== t && n(h, s, {
      get: () => e[s],
      enumerable: !(i = u(e, s)) || i.enumerable
    });
    return h;
  };
  var v$1 = (h, e, t) => (t = h != null ? f(_$1(h)) : {}, g(!h || !h.__esModule ? n(t, "default", {
    value: h,
    enumerable: true
  }) : t, h));
  var o = p((C, r) => {
    var c = class {
      constructor(e = {}) {
        if (!(e.maxSize && e.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
        if (typeof e.maxAge == "number" && e.maxAge === 0) throw new TypeError("`maxAge` must be a number greater than 0");
        this.maxSize = e.maxSize, this.maxAge = e.maxAge || 1 / 0, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
      }
      _emitEvictions(e) {
        if (typeof this.onEviction == "function") for (let [t, i] of e) this.onEviction(t, i.value);
      }
      _deleteIfExpired(e, t) {
        return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : false;
      }
      _getOrDeleteIfExpired(e, t) {
        if (this._deleteIfExpired(e, t) === false) return t.value;
      }
      _getItemValue(e, t) {
        return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
      }
      _peek(e, t) {
        let i = t.get(e);
        return this._getItemValue(e, i);
      }
      _set(e, t) {
        this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
      }
      _moveToRecent(e, t) {
        this.oldCache.delete(e), this._set(e, t);
      }
      *_entriesAscending() {
        for (let e of this.oldCache) {
          let [t, i] = e;
          this.cache.has(t) || this._deleteIfExpired(t, i) === false && (yield e);
        }
        for (let e of this.cache) {
          let [t, i] = e;
          this._deleteIfExpired(t, i) === false && (yield e);
        }
      }
      get(e) {
        if (this.cache.has(e)) {
          let t = this.cache.get(e);
          return this._getItemValue(e, t);
        }
        if (this.oldCache.has(e)) {
          let t = this.oldCache.get(e);
          if (this._deleteIfExpired(e, t) === false) return this._moveToRecent(e, t), t.value;
        }
      }
      set(e, t, { maxAge: i = this.maxAge === 1 / 0 ? void 0 : Date.now() + this.maxAge } = {}) {
        this.cache.has(e) ? this.cache.set(e, {
          value: t,
          maxAge: i
        }) : this._set(e, {
          value: t,
          expiry: i
        });
      }
      has(e) {
        return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : false;
      }
      peek(e) {
        if (this.cache.has(e)) return this._peek(e, this.cache);
        if (this.oldCache.has(e)) return this._peek(e, this.oldCache);
      }
      delete(e) {
        let t = this.cache.delete(e);
        return t && this._size--, this.oldCache.delete(e) || t;
      }
      clear() {
        this.cache.clear(), this.oldCache.clear(), this._size = 0;
      }
      resize(e) {
        if (!(e && e > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
        let t = [
          ...this._entriesAscending()
        ], i = t.length - e;
        i < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (i > 0 && this._emitEvictions(t.slice(0, i)), this.oldCache = new Map(t.slice(i)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
      }
      *keys() {
        for (let [e] of this) yield e;
      }
      *values() {
        for (let [, e] of this) yield e;
      }
      *[Symbol.iterator]() {
        for (let e of this.cache) {
          let [t, i] = e;
          this._deleteIfExpired(t, i) === false && (yield [
            t,
            i.value
          ]);
        }
        for (let e of this.oldCache) {
          let [t, i] = e;
          this.cache.has(t) || this._deleteIfExpired(t, i) === false && (yield [
            t,
            i.value
          ]);
        }
      }
      *entriesDescending() {
        let e = [
          ...this.cache
        ];
        for (let t = e.length - 1; t >= 0; --t) {
          let i = e[t], [s, a] = i;
          this._deleteIfExpired(s, a) === false && (yield [
            s,
            a.value
          ]);
        }
        e = [
          ...this.oldCache
        ];
        for (let t = e.length - 1; t >= 0; --t) {
          let i = e[t], [s, a] = i;
          this.cache.has(s) || this._deleteIfExpired(s, a) === false && (yield [
            s,
            a.value
          ]);
        }
      }
      *entriesAscending() {
        for (let [e, t] of this._entriesAscending()) yield [
          e,
          t.value
        ];
      }
      get size() {
        if (!this._size) return this.oldCache.size;
        let e = 0;
        for (let t of this.oldCache.keys()) this.cache.has(t) || e++;
        return Math.min(this._size + e, this.maxSize);
      }
    };
    r.exports = c;
  });
  var l = v$1(o()), z = l.default ?? l;
  var On = Object.create;
  var er = Object.defineProperty;
  var En = Object.getOwnPropertyDescriptor;
  var Mn = Object.getOwnPropertyNames;
  var jn = Object.getPrototypeOf, Tn = Object.prototype.hasOwnProperty;
  var xe = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var In = (e, t, r, n2) => {
    if (t && typeof t == "object" || typeof t == "function") for (let a of Mn(t)) !Tn.call(e, a) && a !== r && er(e, a, {
      get: () => t[a],
      enumerable: !(n2 = En(t, a)) || n2.enumerable
    });
    return e;
  };
  var Vn = (e, t, r) => (r = e != null ? On(jn(e)) : {}, In(!e || !e.__esModule ? er(r, "default", {
    value: e,
    enumerable: true
  }) : r, e));
  var on = xe((Ll, an) => {
    var Ft = 40, zt = 41, Ze = 39, _t = 34, Lt = 92, we = 47, Ut = 44, Wt = 58, et = 42, yi = 117, wi = 85, vi = 43, xi = /^[a-f0-9?-]+$/i;
    an.exports = function(e) {
      for (var t = [], r = e, n2, a, i, o2, s, l2, p2, g2, f2 = 0, u2 = r.charCodeAt(f2), m2 = r.length, h = [
        {
          nodes: t
        }
      ], b = 0, c, d = "", y = "", w2 = ""; f2 < m2; ) if (u2 <= 32) {
        n2 = f2;
        do
          n2 += 1, u2 = r.charCodeAt(n2);
        while (u2 <= 32);
        o2 = r.slice(f2, n2), i = t[t.length - 1], u2 === zt && b ? w2 = o2 : i && i.type === "div" ? (i.after = o2, i.sourceEndIndex += o2.length) : u2 === Ut || u2 === Wt || u2 === we && r.charCodeAt(n2 + 1) !== et && (!c || c && c.type === "function" && false) ? y = o2 : t.push({
          type: "space",
          sourceIndex: f2,
          sourceEndIndex: n2,
          value: o2
        }), f2 = n2;
      } else if (u2 === Ze || u2 === _t) {
        n2 = f2, a = u2 === Ze ? "'" : '"', o2 = {
          type: "string",
          sourceIndex: f2,
          quote: a
        };
        do
          if (s = false, n2 = r.indexOf(a, n2 + 1), ~n2) for (l2 = n2; r.charCodeAt(l2 - 1) === Lt; ) l2 -= 1, s = !s;
          else r += a, n2 = r.length - 1, o2.unclosed = true;
        while (s);
        o2.value = r.slice(f2 + 1, n2), o2.sourceEndIndex = o2.unclosed ? n2 : n2 + 1, t.push(o2), f2 = n2 + 1, u2 = r.charCodeAt(f2);
      } else if (u2 === we && r.charCodeAt(f2 + 1) === et) n2 = r.indexOf("*/", f2), o2 = {
        type: "comment",
        sourceIndex: f2,
        sourceEndIndex: n2 + 2
      }, n2 === -1 && (o2.unclosed = true, n2 = r.length, o2.sourceEndIndex = n2), o2.value = r.slice(f2 + 2, n2), t.push(o2), f2 = n2 + 2, u2 = r.charCodeAt(f2);
      else if ((u2 === we || u2 === et) && c && c.type === "function") o2 = r[f2], t.push({
        type: "word",
        sourceIndex: f2 - y.length,
        sourceEndIndex: f2 + o2.length,
        value: o2
      }), f2 += 1, u2 = r.charCodeAt(f2);
      else if (u2 === we || u2 === Ut || u2 === Wt) o2 = r[f2], t.push({
        type: "div",
        sourceIndex: f2 - y.length,
        sourceEndIndex: f2 + o2.length,
        value: o2,
        before: y,
        after: ""
      }), y = "", f2 += 1, u2 = r.charCodeAt(f2);
      else if (Ft === u2) {
        n2 = f2;
        do
          n2 += 1, u2 = r.charCodeAt(n2);
        while (u2 <= 32);
        if (g2 = f2, o2 = {
          type: "function",
          sourceIndex: f2 - d.length,
          value: d,
          before: r.slice(g2 + 1, n2)
        }, f2 = n2, d === "url" && u2 !== Ze && u2 !== _t) {
          n2 -= 1;
          do
            if (s = false, n2 = r.indexOf(")", n2 + 1), ~n2) for (l2 = n2; r.charCodeAt(l2 - 1) === Lt; ) l2 -= 1, s = !s;
            else r += ")", n2 = r.length - 1, o2.unclosed = true;
          while (s);
          p2 = n2;
          do
            p2 -= 1, u2 = r.charCodeAt(p2);
          while (u2 <= 32);
          g2 < p2 ? (f2 !== p2 + 1 ? o2.nodes = [
            {
              type: "word",
              sourceIndex: f2,
              sourceEndIndex: p2 + 1,
              value: r.slice(f2, p2 + 1)
            }
          ] : o2.nodes = [], o2.unclosed && p2 + 1 !== n2 ? (o2.after = "", o2.nodes.push({
            type: "space",
            sourceIndex: p2 + 1,
            sourceEndIndex: n2,
            value: r.slice(p2 + 1, n2)
          })) : (o2.after = r.slice(p2 + 1, n2), o2.sourceEndIndex = n2)) : (o2.after = "", o2.nodes = []), f2 = n2 + 1, o2.sourceEndIndex = o2.unclosed ? n2 : f2, u2 = r.charCodeAt(f2), t.push(o2);
        } else b += 1, o2.after = "", o2.sourceEndIndex = f2 + 1, t.push(o2), h.push(o2), t = o2.nodes = [], c = o2;
        d = "";
      } else if (zt === u2 && b) f2 += 1, u2 = r.charCodeAt(f2), c.after = w2, c.sourceEndIndex += w2.length, w2 = "", b -= 1, h[h.length - 1].sourceEndIndex = f2, h.pop(), c = h[b], t = c.nodes;
      else {
        n2 = f2;
        do
          u2 === Lt && (n2 += 1), n2 += 1, u2 = r.charCodeAt(n2);
        while (n2 < m2 && !(u2 <= 32 || u2 === Ze || u2 === _t || u2 === Ut || u2 === Wt || u2 === we || u2 === Ft || u2 === et && c && c.type === "function" || u2 === we && c.type === "function" || u2 === zt && b));
        o2 = r.slice(f2, n2), Ft === u2 ? d = o2 : (yi === o2.charCodeAt(0) || wi === o2.charCodeAt(0)) && vi === o2.charCodeAt(1) && xi.test(o2.slice(2)) ? t.push({
          type: "unicode-range",
          sourceIndex: f2,
          sourceEndIndex: n2,
          value: o2
        }) : t.push({
          type: "word",
          sourceIndex: f2,
          sourceEndIndex: n2,
          value: o2
        }), f2 = n2;
      }
      for (f2 = h.length - 1; f2; f2 -= 1) h[f2].unclosed = true, h[f2].sourceEndIndex = r.length;
      return h[0].nodes;
    };
  });
  var ln = xe((Ul, sn) => {
    sn.exports = function e(t, r, n2) {
      var a, i, o2, s;
      for (a = 0, i = t.length; a < i; a += 1) o2 = t[a], n2 || (s = r(o2, a, t)), s !== false && o2.type === "function" && Array.isArray(o2.nodes) && e(o2.nodes, r, n2), n2 && r(o2, a, t);
    };
  });
  var cn = xe((Wl, fn) => {
    function un(e, t) {
      var r = e.type, n2 = e.value, a, i;
      return t && (i = t(e)) !== void 0 ? i : r === "word" || r === "space" ? n2 : r === "string" ? (a = e.quote || "", a + n2 + (e.unclosed ? "" : a)) : r === "comment" ? "/*" + n2 + (e.unclosed ? "" : "*/") : r === "div" ? (e.before || "") + n2 + (e.after || "") : Array.isArray(e.nodes) ? (a = dn(e.nodes, t), r !== "function" ? a : n2 + "(" + (e.before || "") + a + (e.after || "") + (e.unclosed ? "" : ")")) : n2;
    }
    function dn(e, t) {
      var r, n2;
      if (Array.isArray(e)) {
        for (r = "", n2 = e.length - 1; ~n2; n2 -= 1) r = un(e[n2], t) + r;
        return r;
      }
      return un(e, t);
    }
    fn.exports = dn;
  });
  var mn = xe((Bl, pn) => {
    var tt = 45, rt = 43, Bt = 46, ki = 101, Si = 69;
    function Ci(e) {
      var t = e.charCodeAt(0), r;
      if (t === rt || t === tt) {
        if (r = e.charCodeAt(1), r >= 48 && r <= 57) return true;
        var n2 = e.charCodeAt(2);
        return r === Bt && n2 >= 48 && n2 <= 57;
      }
      return t === Bt ? (r = e.charCodeAt(1), r >= 48 && r <= 57) : t >= 48 && t <= 57;
    }
    pn.exports = function(e) {
      var t = 0, r = e.length, n2, a, i;
      if (r === 0 || !Ci(e)) return false;
      for (n2 = e.charCodeAt(t), (n2 === rt || n2 === tt) && t++; t < r && (n2 = e.charCodeAt(t), !(n2 < 48 || n2 > 57)); ) t += 1;
      if (n2 = e.charCodeAt(t), a = e.charCodeAt(t + 1), n2 === Bt && a >= 48 && a <= 57) for (t += 2; t < r && (n2 = e.charCodeAt(t), !(n2 < 48 || n2 > 57)); ) t += 1;
      if (n2 = e.charCodeAt(t), a = e.charCodeAt(t + 1), i = e.charCodeAt(t + 2), (n2 === ki || n2 === Si) && (a >= 48 && a <= 57 || (a === rt || a === tt) && i >= 48 && i <= 57)) for (t += a === rt || a === tt ? 3 : 2; t < r && (n2 = e.charCodeAt(t), !(n2 < 48 || n2 > 57)); ) t += 1;
      return {
        number: e.slice(0, t),
        unit: e.slice(t)
      };
    };
  });
  var yn = xe((Gl, bn) => {
    var Ai = on(), gn = ln(), hn = cn();
    function le(e) {
      return this instanceof le ? (this.nodes = Ai(e), this) : new le(e);
    }
    le.prototype.toString = function() {
      return Array.isArray(this.nodes) ? hn(this.nodes) : "";
    };
    le.prototype.walk = function(e, t) {
      return gn(this.nodes, e, t), this;
    };
    le.unit = mn();
    le.walk = gn;
    le.stringify = hn;
    bn.exports = le;
  });
  var tr = /* @__PURE__ */ new Set();
  function ot(e, t, r) {
    typeof xs < "u" && xs.env.JEST_WORKER_ID || r && tr.has(r) || (r && tr.add(r), console.warn(""), t.forEach((n2) => console.warn(e, "-", n2)));
  }
  var M = {
    info(e, t) {
      ot(ne$1.bold(ne$1.cyan("info")), ...Array.isArray(e) ? [
        e
      ] : [
        t,
        e
      ]);
    },
    warn(e, t) {
      ot(ne$1.bold(ne$1.yellow("warn")), ...Array.isArray(e) ? [
        e
      ] : [
        t,
        e
      ]);
    },
    risk(e, t) {
      ot(ne$1.bold(ne$1.magenta("risk")), ...Array.isArray(e) ? [
        e
      ] : [
        t,
        e
      ]);
    }
  };
  function st(e) {
    let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set();
    if (e.walkAtRules((a) => {
      a.name === "apply" && n2.add(a), a.name === "import" && (a.params === '"tailwindcss/base"' || a.params === "'tailwindcss/base'" ? (a.name = "tailwind", a.params = "base") : a.params === '"tailwindcss/components"' || a.params === "'tailwindcss/components'" ? (a.name = "tailwind", a.params = "components") : a.params === '"tailwindcss/utilities"' || a.params === "'tailwindcss/utilities'" ? (a.name = "tailwind", a.params = "utilities") : (a.params === '"tailwindcss/screens"' || a.params === "'tailwindcss/screens'" || a.params === '"tailwindcss/variants"' || a.params === "'tailwindcss/variants'") && (a.name = "tailwind", a.params = "variants")), a.name === "tailwind" && (a.params === "screens" && (a.params = "variants"), t.add(a.params)), [
        "layer",
        "responsive",
        "variants"
      ].includes(a.name) && ([
        "responsive",
        "variants"
      ].includes(a.name) && M.warn(`${a.name}-at-rule-deprecated`, [
        `The \`@${a.name}\` directive has been deprecated in Tailwind CSS v3.0.`,
        "Use `@layer utilities` or `@layer components` instead.",
        "https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer"
      ]), r.add(a));
    }), !t.has("base") || !t.has("components") || !t.has("utilities")) {
      for (let a of r) if (a.name === "layer" && [
        "base",
        "components",
        "utilities"
      ].includes(a.params)) {
        if (!t.has(a.params)) throw a.error(`\`@layer ${a.params}\` is used but no matching \`@tailwind ${a.params}\` directive is present.`);
      } else if (a.name === "responsive") {
        if (!t.has("utilities")) throw a.error("`@responsive` is used but `@tailwind utilities` is missing.");
      } else if (a.name === "variants" && !t.has("utilities")) throw a.error("`@variants` is used but `@tailwind utilities` is missing.");
    }
    return {
      tailwindDirectives: t,
      applyDirectives: n2
    };
  }
  var lt = typeof xs < "u" ? {
    DEBUG: Nn(xs.env.DEBUG)
  } : {
    DEBUG: false
  };
  var ut = /* @__PURE__ */ new Map();
  var X = new String("*"), ke = Symbol("__NONE__");
  function Nn(e) {
    if (e === void 0) return false;
    if (e === "true" || e === "1") return true;
    if (e === "false" || e === "0") return false;
    if (e === "*") return true;
    let t = e.split(",").map((r) => r.split(":")[0]);
    return t.includes("-tailwindcss") ? false : !!t.includes("tailwindcss");
  }
  function ce(e) {
    return Array.isArray(e) ? e.flatMap((t) => F([
      V({
        bubble: [
          "screen"
        ]
      })
    ]).process(t, {
      parser: w
    }).root.nodes) : ce([
      e
    ]);
  }
  function H(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return false;
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
  }
  function pe(e, t, r = false) {
    if (e === "") return t;
    let n2 = typeof t == "string" ? Pu().astSync(t) : t;
    return n2.walkClasses((a) => {
      let i = a.value, o2 = r && i.startsWith("-");
      a.value = o2 ? `-${e}${i.slice(1)}` : `${e}${i}`;
    }), typeof t == "string" ? n2.toString() : n2;
  }
  function ue(e) {
    return e.replace(/\\,/g, "\\2c ");
  }
  var dt = {
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    grey: [
      128,
      128,
      128
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    rebeccapurple: [
      102,
      51,
      153
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  };
  var zn = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, _n = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, ee = /(?:\d+|\d*\.\d+)%?/, Ne = /(?:\s*,\s*|\s+)/, rr = /\s*[,/]\s*/, te = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, Ln = new RegExp(`^(rgba?)\\(\\s*(${ee.source}|${te.source})(?:${Ne.source}(${ee.source}|${te.source}))?(?:${Ne.source}(${ee.source}|${te.source}))?(?:${rr.source}(${ee.source}|${te.source}))?\\s*\\)$`), Un = new RegExp(`^(hsla?)\\(\\s*((?:${ee.source})(?:deg|rad|grad|turn)?|${te.source})(?:${Ne.source}(${ee.source}|${te.source}))?(?:${Ne.source}(${ee.source}|${te.source}))?(?:${rr.source}(${ee.source}|${te.source}))?\\s*\\)$`);
  function Se(e, { loose: t = false } = {}) {
    var _a2, _b;
    if (typeof e != "string") return null;
    if (e = e.trim(), e === "transparent") return {
      mode: "rgb",
      color: [
        "0",
        "0",
        "0"
      ],
      alpha: "0"
    };
    if (e in dt) return {
      mode: "rgb",
      color: dt[e].map((i) => i.toString())
    };
    let r = e.replace(_n, (i, o2, s, l2, p2) => [
      "#",
      o2,
      o2,
      s,
      s,
      l2,
      l2,
      p2 ? p2 + p2 : ""
    ].join("")).match(zn);
    if (r !== null) return {
      mode: "rgb",
      color: [
        parseInt(r[1], 16),
        parseInt(r[2], 16),
        parseInt(r[3], 16)
      ].map((i) => i.toString()),
      alpha: r[4] ? (parseInt(r[4], 16) / 255).toString() : void 0
    };
    let n2 = e.match(Ln) ?? e.match(Un);
    if (n2 === null) return null;
    let a = [
      n2[2],
      n2[3],
      n2[4]
    ].filter(Boolean).map((i) => i.toString());
    return a.length === 2 && a[0].startsWith("var(") ? {
      mode: n2[1],
      color: [
        a[0]
      ],
      alpha: a[1]
    } : !t && a.length !== 3 || a.length < 3 && !a.some((i) => /^var\(.*?\)$/.test(i)) ? null : {
      mode: n2[1],
      color: a,
      alpha: (_b = (_a2 = n2[5]) == null ? void 0 : _a2.toString) == null ? void 0 : _b.call(_a2)
    };
  }
  function ft({ mode: e, color: t, alpha: r }) {
    let n2 = r !== void 0;
    return e === "rgba" || e === "hsla" ? `${e}(${t.join(", ")}${n2 ? `, ${r}` : ""})` : `${e}(${t.join(" ")}${n2 ? ` / ${r}` : ""})`;
  }
  function re(e, t, r) {
    if (typeof e == "function") return e({
      opacityValue: t
    });
    let n2 = Se(e, {
      loose: true
    });
    return n2 === null ? r : ft({
      ...n2,
      alpha: t
    });
  }
  function N({ color: e, property: t, variable: r }) {
    let n2 = [].concat(t);
    if (typeof e == "function") return {
      [r]: "1",
      ...Object.fromEntries(n2.map((i) => [
        i,
        e({
          opacityVariable: r,
          opacityValue: `var(${r}, 1)`
        })
      ]))
    };
    let a = Se(e);
    return a === null ? Object.fromEntries(n2.map((i) => [
      i,
      e
    ])) : a.alpha !== void 0 ? Object.fromEntries(n2.map((i) => [
      i,
      e
    ])) : {
      [r]: "1",
      ...Object.fromEntries(n2.map((i) => [
        i,
        ft({
          ...a,
          alpha: `var(${r}, 1)`
        })
      ]))
    };
  }
  function T(e, t) {
    let r = [], n2 = [], a = 0, i = false;
    for (let o2 = 0; o2 < e.length; o2++) {
      let s = e[o2];
      r.length === 0 && s === t[0] && !i && (t.length === 1 || e.slice(o2, o2 + t.length) === t) && (n2.push(e.slice(a, o2)), a = o2 + t.length), i = i ? false : s === "\\", s === "(" || s === "[" || s === "{" ? r.push(s) : (s === ")" && r[r.length - 1] === "(" || s === "]" && r[r.length - 1] === "[" || s === "}" && r[r.length - 1] === "{") && r.pop();
    }
    return n2.push(e.slice(a)), n2;
  }
  var Wn = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), Bn = /\ +(?![^(]*\))/g, nr = /^-?(\d+|\.\d+)(.*?)$/g;
  function De(e) {
    return T(e, ",").map((r) => {
      let n2 = r.trim(), a = {
        raw: n2
      }, i = n2.split(Bn), o2 = /* @__PURE__ */ new Set();
      for (let s of i) nr.lastIndex = 0, !o2.has("KEYWORD") && Wn.has(s) ? (a.keyword = s, o2.add("KEYWORD")) : nr.test(s) ? o2.has("X") ? o2.has("Y") ? o2.has("BLUR") ? o2.has("SPREAD") || (a.spread = s, o2.add("SPREAD")) : (a.blur = s, o2.add("BLUR")) : (a.y = s, o2.add("Y")) : (a.x = s, o2.add("X")) : a.color ? (a.unknown || (a.unknown = []), a.unknown.push(s)) : a.color = s;
      return a.valid = a.x !== void 0 && a.y !== void 0, a;
    });
  }
  function ar(e) {
    return e.map((t) => t.valid ? [
      t.keyword,
      t.x,
      t.y,
      t.blur,
      t.spread,
      t.color
    ].filter(Boolean).join(" ") : t.raw).join(", ");
  }
  var Gn = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function ct(e) {
    return Gn.some((t) => new RegExp(`^${t}\\(.*\\)`).test(e));
  }
  var Hn = /* @__PURE__ */ new Set([
    "scroll-timeline-name",
    "timeline-scope",
    "view-timeline-name",
    "font-palette",
    "anchor-name",
    "anchor-scope",
    "position-anchor",
    "position-try-options",
    "scroll-timeline",
    "animation-timeline",
    "view-timeline",
    "position-try"
  ]);
  function $(e, t = null, r = true) {
    let n2 = t && Hn.has(t.property);
    return e.startsWith("--") && !n2 ? `var(${e})` : e.includes("url(") ? e.split(/(url\(.*?\))/g).filter(Boolean).map((a) => /^url\(.*?\)$/.test(a) ? a : $(a, t, false)).join("") : (e = e.replace(/([^\\])_+/g, (a, i) => i + " ".repeat(a.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), r && (e = e.trim()), e = qn(e), e);
  }
  function B(e) {
    return e.includes("=") && (e = e.replace(/(=.*)/g, (t, r) => {
      if (r[1] === "'" || r[1] === '"') return r;
      if (r.length > 2) {
        let n2 = r[r.length - 1];
        if (r[r.length - 2] === " " && (n2 === "i" || n2 === "I" || n2 === "s" || n2 === "S")) return `="${r.slice(1, -2)}" ${r[r.length - 1]}`;
      }
      return `="${r.slice(1)}"`;
    })), e;
  }
  function qn(e) {
    let t = [
      "theme"
    ], r = [
      "min-content",
      "max-content",
      "fit-content",
      "safe-area-inset-top",
      "safe-area-inset-right",
      "safe-area-inset-bottom",
      "safe-area-inset-left",
      "titlebar-area-x",
      "titlebar-area-y",
      "titlebar-area-width",
      "titlebar-area-height",
      "keyboard-inset-top",
      "keyboard-inset-right",
      "keyboard-inset-bottom",
      "keyboard-inset-left",
      "keyboard-inset-width",
      "keyboard-inset-height",
      "radial-gradient",
      "linear-gradient",
      "conic-gradient",
      "repeating-radial-gradient",
      "repeating-linear-gradient",
      "repeating-conic-gradient",
      "anchor-size"
    ];
    return e.replace(/(calc|min|max|clamp)\(.+\)/g, (n2) => {
      let a = "";
      function i() {
        let o2 = a.trimEnd();
        return o2[o2.length - 1];
      }
      for (let o2 = 0; o2 < n2.length; o2++) {
        let s = function(g2) {
          return g2.split("").every((f2, u2) => n2[o2 + u2] === f2);
        }, l2 = function(g2) {
          let f2 = 1 / 0;
          for (let m2 of g2) {
            let h = n2.indexOf(m2, o2);
            h !== -1 && h < f2 && (f2 = h);
          }
          let u2 = n2.slice(o2, f2);
          return o2 += u2.length - 1, u2;
        }, p2 = n2[o2];
        if (s("var")) a += l2([
          ")",
          ","
        ]);
        else if (r.some((g2) => s(g2))) {
          let g2 = r.find((f2) => s(f2));
          a += g2, o2 += g2.length - 1;
        } else t.some((g2) => s(g2)) ? a += l2([
          ")"
        ]) : s("[") ? a += l2([
          "]"
        ]) : [
          "+",
          "-",
          "*",
          "/"
        ].includes(p2) && ![
          "(",
          "+",
          "-",
          "*",
          "/",
          ","
        ].includes(i()) ? a += ` ${p2} ` : a += p2;
      }
      return a.replace(/\s+/g, " ");
    });
  }
  function pt(e) {
    return e.startsWith("url(");
  }
  function mt(e) {
    return !isNaN(Number(e)) || ct(e);
  }
  function Ce(e) {
    return e.endsWith("%") && mt(e.slice(0, -1)) || ct(e);
  }
  var Yn = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ], Xn = `(?:${Yn.join("|")})`;
  function Ae(e) {
    return e === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${Xn}$`).test(e) || ct(e);
  }
  var Qn = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function ir(e) {
    return Qn.has(e);
  }
  function or(e) {
    let t = De($(e));
    for (let r of t) if (!r.valid) return false;
    return true;
  }
  function sr(e) {
    let t = 0;
    return T(e, "_").every((n2) => (n2 = $(n2), n2.startsWith("var(") ? true : Se(n2, {
      loose: true
    }) !== null ? (t++, true) : false)) ? t > 0 : false;
  }
  function lr(e) {
    let t = 0;
    return T(e, ",").every((n2) => (n2 = $(n2), n2.startsWith("var(") ? true : pt(n2) || Jn(n2) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((a) => n2.startsWith(a)) ? (t++, true) : false)) ? t > 0 : false;
  }
  var Kn = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function Jn(e) {
    e = $(e);
    for (let t of Kn) if (e.startsWith(`${t}(`)) return true;
    return false;
  }
  var Zn = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function ur(e) {
    let t = 0;
    return T(e, "_").every((n2) => (n2 = $(n2), n2.startsWith("var(") ? true : Zn.has(n2) || Ae(n2) || Ce(n2) ? (t++, true) : false)) ? t > 0 : false;
  }
  function dr(e) {
    let t = 0;
    return T(e, ",").every((n2) => (n2 = $(n2), n2.startsWith("var(") ? true : n2.includes(" ") && !/(['"])([^"']+)\1/g.test(n2) || /^\d/g.test(n2) ? false : (t++, true))) ? t > 0 : false;
  }
  var ea = /* @__PURE__ */ new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
  ]);
  function fr(e) {
    return ea.has(e);
  }
  var ta = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
  ]);
  function cr(e) {
    return ta.has(e);
  }
  var ra = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function pr(e) {
    return ra.has(e);
  }
  function me(e) {
    if (e = `${e}`, e === "0") return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e)) return e.replace(/^[+-]?/, (r) => r === "-" ? "" : "-");
    let t = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (let r of t) if (e.includes(`${r}(`)) return `calc(${e} * -1)`;
  }
  function mr(e) {
    let t = [
      "cover",
      "contain"
    ];
    return T(e, ",").every((r) => {
      let n2 = T(r, "_").filter(Boolean);
      return n2.length === 1 && t.includes(n2[0]) ? true : n2.length !== 1 && n2.length !== 2 ? false : n2.every((a) => Ae(a) || Ce(a) || a === "auto");
    });
  }
  var gr = {
    optimizeUniversalDefaults: false,
    generalizedModifiers: true,
    disableColorOpacityUtilitiesByDefault: false,
    relativeContentPathsByDefault: false
  }, Pe = {
    future: [
      "hoverOnlyWhenSupported",
      "respectDefaultRingColorOpacity",
      "disableColorOpacityUtilitiesByDefault",
      "relativeContentPathsByDefault"
    ],
    experimental: [
      "optimizeUniversalDefaults",
      "generalizedModifiers"
    ]
  };
  function P(e, t) {
    var _a2, _b;
    return Pe.future.includes(t) ? e.future === "all" || (((_a2 = e == null ? void 0 : e.future) == null ? void 0 : _a2[t]) ?? gr[t] ?? false) : Pe.experimental.includes(t) ? e.experimental === "all" || (((_b = e == null ? void 0 : e.experimental) == null ? void 0 : _b[t]) ?? gr[t] ?? false) : false;
  }
  function hr(e) {
    return e.experimental === "all" ? Pe.experimental : Object.keys((e == null ? void 0 : e.experimental) ?? {}).filter((t) => Pe.experimental.includes(t) && e.experimental[t]);
  }
  function br(e) {
    if (xs.env.JEST_WORKER_ID === void 0 && hr(e).length > 0) {
      let t = hr(e).map((r) => ne$1.yellow(r)).join(", ");
      M.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${t}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  function wr(e, t) {
    e.walkClasses((r) => {
      r.value = t(r.value), r.raws && r.raws.value && (r.raws.value = ue(r.raws.value));
    });
  }
  function vr(e, t) {
    if (!ne(e)) return;
    let r = e.slice(1, -1);
    if (t(r)) return $(r);
  }
  function aa(e, t = {}, r) {
    let n2 = t[e];
    if (n2 !== void 0) return me(n2);
    if (ne(e)) {
      let a = vr(e, r);
      return a === void 0 ? void 0 : me(a);
    }
  }
  function Fe(e, t = {}, { validate: r = () => true } = {}) {
    var _a2;
    let n2 = (_a2 = t.values) == null ? void 0 : _a2[e];
    return n2 !== void 0 ? n2 : t.supportsNegativeValues && e.startsWith("-") ? aa(e.slice(1), t.values, r) : vr(e, r);
  }
  function ne(e) {
    return e.startsWith("[") && e.endsWith("]");
  }
  function xr(e) {
    let t = e.lastIndexOf("/"), r = e.lastIndexOf("[", t), n2 = e.indexOf("]", t);
    return e[t - 1] === "]" || e[t + 1] === "[" || r !== -1 && n2 !== -1 && r < t && t < n2 && (t = e.lastIndexOf("/", r)), t === -1 || t === e.length - 1 ? [
      e,
      void 0
    ] : ne(e) && !e.includes("]/[") ? [
      e,
      void 0
    ] : [
      e.slice(0, t),
      e.slice(t + 1)
    ];
  }
  function Re(e) {
    if (typeof e == "string" && e.includes("<alpha-value>")) {
      let t = e;
      return ({ opacityValue: r = 1 }) => t.replace(/<alpha-value>/g, r);
    }
    return e;
  }
  function kr(e) {
    return $(e.slice(1, -1));
  }
  function ia(e, t = {}, { tailwindConfig: r = {} } = {}) {
    var _a2, _b, _c, _d, _e2;
    if (((_a2 = t.values) == null ? void 0 : _a2[e]) !== void 0) return Re((_b = t.values) == null ? void 0 : _b[e]);
    let [n2, a] = xr(e);
    if (a !== void 0) {
      let i = ((_c = t.values) == null ? void 0 : _c[n2]) ?? (ne(n2) ? n2.slice(1, -1) : void 0);
      return i === void 0 ? void 0 : (i = Re(i), ne(a) ? re(i, kr(a)) : ((_e2 = (_d = r.theme) == null ? void 0 : _d.opacity) == null ? void 0 : _e2[a]) === void 0 ? void 0 : re(i, r.theme.opacity[a]));
    }
    return Fe(e, t, {
      validate: sr
    });
  }
  function oa(e, t = {}) {
    var _a2;
    return (_a2 = t.values) == null ? void 0 : _a2[e];
  }
  function _(e) {
    return (t, r) => Fe(t, r, {
      validate: e
    });
  }
  var gt = {
    any: Fe,
    color: ia,
    url: _(pt),
    image: _(lr),
    length: _(Ae),
    percentage: _(Ce),
    position: _(ur),
    lookup: oa,
    "generic-name": _(fr),
    "family-name": _(dr),
    number: _(mt),
    "line-width": _(ir),
    "absolute-size": _(cr),
    "relative-size": _(pr),
    shadow: _(or),
    size: _(mr)
  }, yr = Object.keys(gt);
  function sa(e, t) {
    let r = e.indexOf(t);
    return r === -1 ? [
      void 0,
      e
    ] : [
      e.slice(0, r),
      e.slice(r + 1)
    ];
  }
  function ht(e, t, r, n2) {
    if (r.values && t in r.values) for (let { type: i } of e ?? []) {
      let o2 = gt[i](t, r, {
        tailwindConfig: n2
      });
      if (o2 !== void 0) return [
        o2,
        i,
        null
      ];
    }
    if (ne(t)) {
      let i = t.slice(1, -1), [o2, s] = sa(i, ":");
      if (!/^[\w-_]+$/g.test(o2)) s = i;
      else if (o2 !== void 0 && !yr.includes(o2)) return [];
      if (s.length > 0 && yr.includes(o2)) return [
        Fe(`[${s}]`, r),
        o2,
        null
      ];
    }
    let a = bt(e, t, r, n2);
    for (let i of a) return i;
    return [];
  }
  function* bt(e, t, r, n2) {
    var _a2;
    let a = P(n2, "generalizedModifiers"), [i, o2] = xr(t);
    if (a && r.modifiers != null && (r.modifiers === "any" || typeof r.modifiers == "object" && (o2 && ne(o2) || o2 in r.modifiers)) || (i = t, o2 = void 0), o2 !== void 0 && i === "" && (i = "DEFAULT"), o2 !== void 0 && typeof r.modifiers == "object") {
      let l2 = ((_a2 = r.modifiers) == null ? void 0 : _a2[o2]) ?? null;
      l2 !== null ? o2 = l2 : ne(o2) && (o2 = kr(o2));
    }
    for (let { type: l2 } of e ?? []) {
      let p2 = gt[l2](i, r, {
        tailwindConfig: n2
      });
      p2 !== void 0 && (yield [
        p2,
        l2,
        o2 ?? null
      ]);
    }
  }
  function R(e) {
    var _a2;
    let t = Pu.className();
    return t.value = e, ue(((_a2 = t == null ? void 0 : t.raws) == null ? void 0 : _a2.value) ?? t.value);
  }
  var yt = {
    "::after": [
      "terminal",
      "jumpable"
    ],
    "::backdrop": [
      "terminal",
      "jumpable"
    ],
    "::before": [
      "terminal",
      "jumpable"
    ],
    "::cue": [
      "terminal"
    ],
    "::cue-region": [
      "terminal"
    ],
    "::first-letter": [
      "terminal",
      "jumpable"
    ],
    "::first-line": [
      "terminal",
      "jumpable"
    ],
    "::grammar-error": [
      "terminal"
    ],
    "::marker": [
      "terminal",
      "jumpable"
    ],
    "::part": [
      "terminal",
      "actionable"
    ],
    "::placeholder": [
      "terminal",
      "jumpable"
    ],
    "::selection": [
      "terminal",
      "jumpable"
    ],
    "::slotted": [
      "terminal"
    ],
    "::spelling-error": [
      "terminal"
    ],
    "::target-text": [
      "terminal"
    ],
    "::file-selector-button": [
      "terminal",
      "actionable"
    ],
    "::deep": [
      "actionable"
    ],
    "::v-deep": [
      "actionable"
    ],
    "::ng-deep": [
      "actionable"
    ],
    ":after": [
      "terminal",
      "jumpable"
    ],
    ":before": [
      "terminal",
      "jumpable"
    ],
    ":first-letter": [
      "terminal",
      "jumpable"
    ],
    ":first-line": [
      "terminal",
      "jumpable"
    ],
    ":where": [],
    ":is": [],
    ":has": [],
    __default__: [
      "terminal",
      "actionable"
    ]
  };
  function ge(e) {
    let [t] = Sr(e);
    return t.forEach(([r, n2]) => r.removeChild(n2)), e.nodes.push(...t.map(([, r]) => r)), e;
  }
  function Sr(e) {
    let t = [], r = null;
    for (let n2 of e.nodes) if (n2.type === "combinator") t = t.filter(([, a]) => wt(a).includes("jumpable")), r = null;
    else if (n2.type === "pseudo") {
      ua(n2) ? (r = n2, t.push([
        e,
        n2,
        null
      ])) : r && da(n2, r) ? t.push([
        e,
        n2,
        r
      ]) : r = null;
      for (let a of n2.nodes ?? []) {
        let [i, o2] = Sr(a);
        r = o2 || r, t.push(...i);
      }
    }
    return [
      t,
      r
    ];
  }
  function Cr(e) {
    return e.value.startsWith("::") || yt[e.value] !== void 0;
  }
  function ua(e) {
    return Cr(e) && wt(e).includes("terminal");
  }
  function da(e, t) {
    return e.type !== "pseudo" || Cr(e) ? false : wt(t).includes("actionable");
  }
  function wt(e) {
    return yt[e.value] ?? yt.__default__;
  }
  var vt = ":merge";
  function he(e, { context: t, candidate: r }) {
    let n2 = (t == null ? void 0 : t.tailwindConfig.prefix) ?? "", a = e.map((o2) => {
      let s = Pu().astSync(o2.format);
      return {
        ...o2,
        ast: o2.respectPrefix ? pe(n2, s) : s
      };
    }), i = Pu.root({
      nodes: [
        Pu.selector({
          nodes: [
            Pu.className({
              value: R(r)
            })
          ]
        })
      ]
    });
    for (let { ast: o2 } of a) [i, o2] = pa(i, o2), o2.walkNesting((s) => s.replaceWith(...i.nodes[0].nodes)), i = o2;
    return i;
  }
  function Ar(e) {
    let t = [];
    for (; e.prev() && e.prev().type !== "combinator"; ) e = e.prev();
    for (; e && e.type !== "combinator"; ) t.push(e), e = e.next();
    return t;
  }
  function ca(e) {
    return e.sort((t, r) => t.type === "tag" && r.type === "class" ? -1 : t.type === "class" && r.type === "tag" ? 1 : t.type === "class" && r.type === "pseudo" && r.value.startsWith("::") ? -1 : t.type === "pseudo" && t.value.startsWith("::") && r.type === "class" ? 1 : e.index(t) - e.index(r)), e;
  }
  function xt(e, t) {
    let r = false;
    e.walk((n2) => {
      if (n2.type === "class" && n2.value === t) return r = true, false;
    }), r || e.remove();
  }
  function ze(e, t, { context: r, candidate: n2, base: a }) {
    var _a2;
    let i = ((_a2 = r == null ? void 0 : r.tailwindConfig) == null ? void 0 : _a2.separator) ?? ":";
    a = a ?? T(n2, i).pop();
    let o2 = Pu().astSync(e);
    if (o2.walkClasses((g2) => {
      g2.raws && g2.value.includes(a) && (g2.raws.value = R(_$2(g2.raws.value)));
    }), o2.each((g2) => xt(g2, a)), o2.length === 0) return null;
    let s = Array.isArray(t) ? he(t, {
      context: r,
      candidate: n2
    }) : t;
    if (s === null) return o2.toString();
    let l2 = Pu.comment({
      value: "/*__simple__*/"
    }), p2 = Pu.comment({
      value: "/*__simple__*/"
    });
    return o2.walkClasses((g2) => {
      if (g2.value !== a) return;
      let f2 = g2.parent, u2 = s.nodes[0].nodes;
      if (f2.nodes.length === 1) {
        g2.replaceWith(...u2);
        return;
      }
      let m2 = Ar(g2);
      f2.insertBefore(m2[0], l2), f2.insertAfter(m2[m2.length - 1], p2);
      for (let b of u2) f2.insertBefore(m2[0], b.clone());
      g2.remove(), m2 = Ar(l2);
      let h = f2.index(l2);
      f2.nodes.splice(h, m2.length, ...ca(Pu.selector({
        nodes: m2
      })).nodes), l2.remove(), p2.remove();
    }), o2.walkPseudos((g2) => {
      g2.value === vt && g2.replaceWith(g2.nodes);
    }), o2.each((g2) => ge(g2)), o2.toString();
  }
  function pa(e, t) {
    let r = [];
    return e.walkPseudos((n2) => {
      n2.value === vt && r.push({
        pseudo: n2,
        value: n2.nodes[0].toString()
      });
    }), t.walkPseudos((n2) => {
      if (n2.value !== vt) return;
      let a = n2.nodes[0].toString(), i = r.find((p2) => p2.value === a);
      if (!i) return;
      let o2 = [], s = n2.next();
      for (; s && s.type !== "combinator"; ) o2.push(s), s = s.next();
      let l2 = s;
      i.pseudo.parent.insertAfter(i.pseudo, Pu.selector({
        nodes: o2.map((p2) => p2.clone())
      })), n2.remove(), o2.forEach((p2) => p2.remove()), l2 && l2.type === "combinator" && l2.remove();
    }), [
      e,
      t
    ];
  }
  function kt(e) {
    return ue(`.${R(e)}`);
  }
  function _e(e, t) {
    return kt($e(e, t));
  }
  function $e(e, t) {
    return t === "DEFAULT" ? e : t === "-" || t === "-DEFAULT" ? `-${e}` : t.startsWith("-") ? `-${e}${t}` : t.startsWith("/") ? `${e}${t}` : `${e}-${t}`;
  }
  function K(e) {
    return [
      "fontSize",
      "outline"
    ].includes(e) ? (t) => (typeof t == "function" && (t = t({})), Array.isArray(t) && (t = t[0]), t) : e === "fontFamily" ? (t) => {
      typeof t == "function" && (t = t({}));
      let r = Array.isArray(t) && H(t[1]) ? t[0] : t;
      return Array.isArray(r) ? r.join(", ") : r;
    } : [
      "boxShadow",
      "transitionProperty",
      "transitionDuration",
      "transitionDelay",
      "transitionTimingFunction",
      "backgroundImage",
      "backgroundSize",
      "backgroundColor",
      "cursor",
      "animation"
    ].includes(e) ? (t) => (typeof t == "function" && (t = t({})), Array.isArray(t) && (t = t.join(", ")), t) : [
      "gridTemplateColumns",
      "gridTemplateRows",
      "objectPosition"
    ].includes(e) ? (t) => (typeof t == "function" && (t = t({})), typeof t == "string" && (t = F.list.comma(t).join(" ")), t) : (t, r = {}) => (typeof t == "function" && (t = t(r)), t);
  }
  function v(e, t = [
    [
      e,
      [
        e
      ]
    ]
  ], { filterDefault: r = false, ...n2 } = {}) {
    let a = K(e);
    return function({ matchUtilities: i, theme: o2 }) {
      for (let s of t) {
        let l2 = Array.isArray(s[0]) ? s : [
          s
        ];
        i(l2.reduce((p2, [g2, f2]) => Object.assign(p2, {
          [g2]: (u2) => f2.reduce((m2, h) => Array.isArray(h) ? Object.assign(m2, {
            [h[0]]: h[1]
          }) : Object.assign(m2, {
            [h]: a(u2)
          }), {})
        }), {}), {
          ...n2,
          values: r ? Object.fromEntries(Object.entries(o2(e) ?? {}).filter(([p2]) => p2 !== "DEFAULT")) : o2(e)
        });
      }
    };
  }
  function ae(e) {
    return e = Array.isArray(e) ? e : [
      e
    ], e.map((t) => {
      let r = t.values.map((n2) => n2.raw !== void 0 ? n2.raw : [
        n2.min && `(min-width: ${n2.min})`,
        n2.max && `(max-width: ${n2.max})`
      ].filter(Boolean).join(" and "));
      return t.not ? `not all and ${r}` : r;
    }).join(", ");
  }
  var ga = /* @__PURE__ */ new Set([
    "normal",
    "reverse",
    "alternate",
    "alternate-reverse"
  ]), ha = /* @__PURE__ */ new Set([
    "running",
    "paused"
  ]), ba = /* @__PURE__ */ new Set([
    "none",
    "forwards",
    "backwards",
    "both"
  ]), ya = /* @__PURE__ */ new Set([
    "infinite"
  ]), wa = /* @__PURE__ */ new Set([
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "step-start",
    "step-end"
  ]), va = [
    "cubic-bezier",
    "steps"
  ], xa = /\,(?![^(]*\))/g, ka = /\ +(?![^(]*\))/g, $r = /^(-?[\d.]+m?s)$/, Sa = /^(\d+)$/;
  function St(e) {
    return e.split(xa).map((r) => {
      let n2 = r.trim(), a = {
        value: n2
      }, i = n2.split(ka), o2 = /* @__PURE__ */ new Set();
      for (let s of i) !o2.has("DIRECTIONS") && ga.has(s) ? (a.direction = s, o2.add("DIRECTIONS")) : !o2.has("PLAY_STATES") && ha.has(s) ? (a.playState = s, o2.add("PLAY_STATES")) : !o2.has("FILL_MODES") && ba.has(s) ? (a.fillMode = s, o2.add("FILL_MODES")) : !o2.has("ITERATION_COUNTS") && (ya.has(s) || Sa.test(s)) ? (a.iterationCount = s, o2.add("ITERATION_COUNTS")) : !o2.has("TIMING_FUNCTION") && wa.has(s) || !o2.has("TIMING_FUNCTION") && va.some((l2) => s.startsWith(`${l2}(`)) ? (a.timingFunction = s, o2.add("TIMING_FUNCTION")) : !o2.has("DURATION") && $r.test(s) ? (a.duration = s, o2.add("DURATION")) : !o2.has("DELAY") && $r.test(s) ? (a.delay = s, o2.add("DELAY")) : o2.has("NAME") ? (a.unknown || (a.unknown = []), a.unknown.push(s)) : (a.name = s, o2.add("NAME"));
      return a;
    });
  }
  var Or = (e) => Object.assign({}, ...Object.entries(e ?? {}).flatMap(([t, r]) => typeof r == "object" ? Object.entries(Or(r)).map(([n2, a]) => ({
    [t + (n2 === "DEFAULT" ? "" : `-${n2}`)]: a
  })) : [
    {
      [`${t}`]: r
    }
  ])), I = Or;
  function O(e) {
    return typeof e == "function" ? e({}) : e;
  }
  var Er = "3.4.17";
  function ie(e, t = true) {
    return Array.isArray(e) ? e.map((r) => {
      if (t && Array.isArray(r)) throw new Error("The tuple syntax is not supported for `screens`.");
      if (typeof r == "string") return {
        name: r.toString(),
        not: false,
        values: [
          {
            min: r,
            max: void 0
          }
        ]
      };
      let [n2, a] = r;
      return n2 = n2.toString(), typeof a == "string" ? {
        name: n2,
        not: false,
        values: [
          {
            min: a,
            max: void 0
          }
        ]
      } : Array.isArray(a) ? {
        name: n2,
        not: false,
        values: a.map((i) => Mr(i))
      } : {
        name: n2,
        not: false,
        values: [
          Mr(a)
        ]
      };
    }) : ie(Object.entries(e ?? {}), false);
  }
  function Le(e) {
    return e.values.length !== 1 ? {
      result: false,
      reason: "multiple-values"
    } : e.values[0].raw !== void 0 ? {
      result: false,
      reason: "raw-values"
    } : e.values[0].min !== void 0 && e.values[0].max !== void 0 ? {
      result: false,
      reason: "min-and-max"
    } : {
      result: true,
      reason: null
    };
  }
  function jr(e, t, r) {
    let n2 = Ue(t, e), a = Ue(r, e), i = Le(n2), o2 = Le(a);
    if (i.reason === "multiple-values" || o2.reason === "multiple-values") throw new Error("Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.");
    if (i.reason === "raw-values" || o2.reason === "raw-values") throw new Error("Attempted to sort a screen with raw values. This should never happen. Please open a bug report.");
    if (i.reason === "min-and-max" || o2.reason === "min-and-max") throw new Error("Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.");
    let { min: s, max: l2 } = n2.values[0], { min: p2, max: g2 } = a.values[0];
    t.not && ([s, l2] = [
      l2,
      s
    ]), r.not && ([p2, g2] = [
      g2,
      p2
    ]), s = s === void 0 ? s : parseFloat(s), l2 = l2 === void 0 ? l2 : parseFloat(l2), p2 = p2 === void 0 ? p2 : parseFloat(p2), g2 = g2 === void 0 ? g2 : parseFloat(g2);
    let [f2, u2] = e === "min" ? [
      s,
      p2
    ] : [
      g2,
      l2
    ];
    return f2 - u2;
  }
  function Ue(e, t) {
    return typeof e == "object" ? e : {
      name: "arbitrary-screen",
      values: [
        {
          [t]: e
        }
      ]
    };
  }
  function Mr({ "min-width": e, min: t = e, max: r, raw: n2 } = {}) {
    return {
      min: t,
      max: r,
      raw: n2
    };
  }
  function We(e, t) {
    e.walkDecls((r) => {
      if (t.includes(r.prop)) {
        r.remove();
        return;
      }
      for (let n2 of t) r.value.includes(`/ var(${n2})`) ? r.value = r.value.replace(`/ var(${n2})`, "") : r.value.includes(`/ var(${n2}, 1)`) && (r.value = r.value.replace(`/ var(${n2}, 1)`, ""));
    });
  }
  var E = {
    childVariant: ({ addVariant: e }) => {
      e("*", "& > *");
    },
    pseudoElementVariants: ({ addVariant: e }) => {
      e("first-letter", "&::first-letter"), e("first-line", "&::first-line"), e("marker", [
        ({ container: t }) => (We(t, [
          "--tw-text-opacity"
        ]), "& *::marker"),
        ({ container: t }) => (We(t, [
          "--tw-text-opacity"
        ]), "&::marker")
      ]), e("selection", [
        "& *::selection",
        "&::selection"
      ]), e("file", "&::file-selector-button"), e("placeholder", "&::placeholder"), e("backdrop", "&::backdrop"), e("before", ({ container: t }) => (t.walkRules((r) => {
        let n2 = false;
        r.walkDecls("content", () => {
          n2 = true;
        }), n2 || r.prepend(F.decl({
          prop: "content",
          value: "var(--tw-content)"
        }));
      }), "&::before")), e("after", ({ container: t }) => (t.walkRules((r) => {
        let n2 = false;
        r.walkDecls("content", () => {
          n2 = true;
        }), n2 || r.prepend(F.decl({
          prop: "content",
          value: "var(--tw-content)"
        }));
      }), "&::after"));
    },
    pseudoClassVariants: ({ addVariant: e, matchVariant: t, config: r, prefix: n2 }) => {
      let a = [
        [
          "first",
          "&:first-child"
        ],
        [
          "last",
          "&:last-child"
        ],
        [
          "only",
          "&:only-child"
        ],
        [
          "odd",
          "&:nth-child(odd)"
        ],
        [
          "even",
          "&:nth-child(even)"
        ],
        "first-of-type",
        "last-of-type",
        "only-of-type",
        [
          "visited",
          ({ container: o2 }) => (We(o2, [
            "--tw-text-opacity",
            "--tw-border-opacity",
            "--tw-bg-opacity"
          ]), "&:visited")
        ],
        "target",
        [
          "open",
          "&[open]"
        ],
        "default",
        "checked",
        "indeterminate",
        "placeholder-shown",
        "autofill",
        "optional",
        "required",
        "valid",
        "invalid",
        "in-range",
        "out-of-range",
        "read-only",
        "empty",
        "focus-within",
        [
          "hover",
          P(r(), "hoverOnlyWhenSupported") ? "@media (hover: hover) and (pointer: fine) { &:hover }" : "&:hover"
        ],
        "focus",
        "focus-visible",
        "active",
        "enabled",
        "disabled"
      ].map((o2) => Array.isArray(o2) ? o2 : [
        o2,
        `&:${o2}`
      ]);
      for (let [o2, s] of a) e(o2, (l2) => typeof s == "function" ? s(l2) : s);
      let i = {
        group: (o2, { modifier: s }) => s ? [
          `:merge(${n2(".group")}\\/${R(s)})`,
          " &"
        ] : [
          `:merge(${n2(".group")})`,
          " &"
        ],
        peer: (o2, { modifier: s }) => s ? [
          `:merge(${n2(".peer")}\\/${R(s)})`,
          " ~ &"
        ] : [
          `:merge(${n2(".peer")})`,
          " ~ &"
        ]
      };
      for (let [o2, s] of Object.entries(i)) t(o2, (l2 = "", p2) => {
        let g2 = $(typeof l2 == "function" ? l2(p2) : l2);
        g2.includes("&") || (g2 = "&" + g2);
        let [f2, u2] = s("", p2), m2 = null, h = null, b = 0;
        for (let c = 0; c < g2.length; ++c) {
          let d = g2[c];
          d === "&" ? m2 = c : d === "'" || d === '"' ? b += 1 : m2 !== null && d === " " && !b && (h = c);
        }
        return m2 !== null && h === null && (h = g2.length), g2.slice(0, m2) + f2 + g2.slice(m2 + 1, h) + u2 + g2.slice(h);
      }, {
        values: Object.fromEntries(a),
        [oe]: {
          respectPrefix: false
        }
      });
    },
    directionVariants: ({ addVariant: e }) => {
      e("ltr", '&:where([dir="ltr"], [dir="ltr"] *)'), e("rtl", '&:where([dir="rtl"], [dir="rtl"] *)');
    },
    reducedMotionVariants: ({ addVariant: e }) => {
      e("motion-safe", "@media (prefers-reduced-motion: no-preference)"), e("motion-reduce", "@media (prefers-reduced-motion: reduce)");
    },
    darkVariants: ({ config: e, addVariant: t }) => {
      let [r, n2 = ".dark"] = [].concat(e("darkMode", "media"));
      if (r === false && (r = "media", M.warn("darkmode-false", [
        "The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.",
        "Change `darkMode` to `media` or remove it entirely.",
        "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration"
      ])), r === "variant") {
        let a;
        if (Array.isArray(n2) || typeof n2 == "function" ? a = n2 : typeof n2 == "string" && (a = [
          n2
        ]), Array.isArray(a)) for (let i of a) i === ".dark" ? (r = false, M.warn("darkmode-variant-without-selector", [
          "When using `variant` for `darkMode`, you must provide a selector.",
          'Example: `darkMode: ["variant", ".your-selector &"]`'
        ])) : i.includes("&") || (r = false, M.warn("darkmode-variant-without-ampersand", [
          "When using `variant` for `darkMode`, your selector must contain `&`.",
          'Example `darkMode: ["variant", ".your-selector &"]`'
        ]));
        n2 = a;
      }
      r === "selector" ? t("dark", `&:where(${n2}, ${n2} *)`) : r === "media" ? t("dark", "@media (prefers-color-scheme: dark)") : r === "variant" ? t("dark", n2) : r === "class" && t("dark", `&:is(${n2} *)`);
    },
    printVariant: ({ addVariant: e }) => {
      e("print", "@media print");
    },
    screenVariants: ({ theme: e, addVariant: t, matchVariant: r }) => {
      let n2 = e("screens") ?? {}, a = Object.values(n2).every((d) => typeof d == "string"), i = ie(e("screens")), o2 = /* @__PURE__ */ new Set([]);
      function s(d) {
        var _a2;
        return ((_a2 = d.match(/(\D+)$/)) == null ? void 0 : _a2[1]) ?? "(none)";
      }
      function l2(d) {
        d !== void 0 && o2.add(s(d));
      }
      function p2(d) {
        return l2(d), o2.size === 1;
      }
      for (let d of i) for (let y of d.values) l2(y.min), l2(y.max);
      let g2 = o2.size <= 1;
      function f2(d) {
        return Object.fromEntries(i.filter((y) => Le(y).result).map((y) => {
          let { min: w2, max: x2 } = y.values[0];
          if (x2 !== void 0) return y;
          if (w2 !== void 0) return {
            ...y,
            not: !y.not
          };
        }).map((y) => [
          y.name,
          y
        ]));
      }
      function u2(d) {
        return (y, w2) => jr(d, y.value, w2.value);
      }
      let m2 = u2("max"), h = u2("min");
      function b(d) {
        return (y) => {
          if (a) if (g2) {
            if (typeof y == "string" && !p2(y)) return M.warn("minmax-have-mixed-units", [
              "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
            ]), [];
          } else return M.warn("mixed-screen-units", [
            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
          ]), [];
          else return M.warn("complex-screen-config", [
            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."
          ]), [];
          return [
            `@media ${ae(Ue(y, d))}`
          ];
        };
      }
      r("max", b("max"), {
        sort: m2,
        values: a ? f2() : {}
      });
      let c = "min-screens";
      for (let d of i) t(d.name, `@media ${ae(d)}`, {
        id: c,
        sort: a && g2 ? h : void 0,
        value: d
      });
      r("min", b("min"), {
        id: c,
        sort: h
      });
    },
    supportsVariants: ({ matchVariant: e, theme: t }) => {
      e("supports", (r = "") => {
        let n2 = $(r), a = /^\w*\s*\(/.test(n2);
        return n2 = a ? n2.replace(/\b(and|or|not)\b/g, " $1 ") : n2, a ? `@supports ${n2}` : (n2.includes(":") || (n2 = `${n2}: var(--tw)`), n2.startsWith("(") && n2.endsWith(")") || (n2 = `(${n2})`), `@supports ${n2}`);
      }, {
        values: t("supports") ?? {}
      });
    },
    hasVariants: ({ matchVariant: e, prefix: t }) => {
      e("has", (r) => `&:has(${$(r)})`, {
        values: {},
        [oe]: {
          respectPrefix: false
        }
      }), e("group-has", (r, { modifier: n2 }) => n2 ? `:merge(${t(".group")}\\/${n2}):has(${$(r)}) &` : `:merge(${t(".group")}):has(${$(r)}) &`, {
        values: {},
        [oe]: {
          respectPrefix: false
        }
      }), e("peer-has", (r, { modifier: n2 }) => n2 ? `:merge(${t(".peer")}\\/${n2}):has(${$(r)}) ~ &` : `:merge(${t(".peer")}):has(${$(r)}) ~ &`, {
        values: {},
        [oe]: {
          respectPrefix: false
        }
      });
    },
    ariaVariants: ({ matchVariant: e, theme: t }) => {
      e("aria", (r) => `&[aria-${B($(r))}]`, {
        values: t("aria") ?? {}
      }), e("group-aria", (r, { modifier: n2 }) => n2 ? `:merge(.group\\/${n2})[aria-${B($(r))}] &` : `:merge(.group)[aria-${B($(r))}] &`, {
        values: t("aria") ?? {}
      }), e("peer-aria", (r, { modifier: n2 }) => n2 ? `:merge(.peer\\/${n2})[aria-${B($(r))}] ~ &` : `:merge(.peer)[aria-${B($(r))}] ~ &`, {
        values: t("aria") ?? {}
      });
    },
    dataVariants: ({ matchVariant: e, theme: t }) => {
      e("data", (r) => `&[data-${B($(r))}]`, {
        values: t("data") ?? {}
      }), e("group-data", (r, { modifier: n2 }) => n2 ? `:merge(.group\\/${n2})[data-${B($(r))}] &` : `:merge(.group)[data-${B($(r))}] &`, {
        values: t("data") ?? {}
      }), e("peer-data", (r, { modifier: n2 }) => n2 ? `:merge(.peer\\/${n2})[data-${B($(r))}] ~ &` : `:merge(.peer)[data-${B($(r))}] ~ &`, {
        values: t("data") ?? {}
      });
    },
    orientationVariants: ({ addVariant: e }) => {
      e("portrait", "@media (orientation: portrait)"), e("landscape", "@media (orientation: landscape)");
    },
    prefersContrastVariants: ({ addVariant: e }) => {
      e("contrast-more", "@media (prefers-contrast: more)"), e("contrast-less", "@media (prefers-contrast: less)");
    },
    forcedColorsVariants: ({ addVariant: e }) => {
      e("forced-colors", "@media (forced-colors: active)");
    }
  }, G = [
    "translate(var(--tw-translate-x), var(--tw-translate-y))",
    "rotate(var(--tw-rotate))",
    "skewX(var(--tw-skew-x))",
    "skewY(var(--tw-skew-y))",
    "scaleX(var(--tw-scale-x))",
    "scaleY(var(--tw-scale-y))"
  ].join(" "), q = [
    "var(--tw-blur)",
    "var(--tw-brightness)",
    "var(--tw-contrast)",
    "var(--tw-grayscale)",
    "var(--tw-hue-rotate)",
    "var(--tw-invert)",
    "var(--tw-saturate)",
    "var(--tw-sepia)",
    "var(--tw-drop-shadow)"
  ].join(" "), j = [
    "var(--tw-backdrop-blur)",
    "var(--tw-backdrop-brightness)",
    "var(--tw-backdrop-contrast)",
    "var(--tw-backdrop-grayscale)",
    "var(--tw-backdrop-hue-rotate)",
    "var(--tw-backdrop-invert)",
    "var(--tw-backdrop-opacity)",
    "var(--tw-backdrop-saturate)",
    "var(--tw-backdrop-sepia)"
  ].join(" "), Ir = {
    preflight: ({ addBase: e }) => {
      let t = F.parse("/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n  font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings', normal); /* 5 */\n  font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings', normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-feature-settings: theme('fontFamily.mono[1].fontFeatureSettings', normal); /* 2 */\n  font-variation-settings: theme('fontFamily.mono[1].fontVariationSettings', normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n");
      e([
        F.comment({
          text: `! tailwindcss v${Er} | MIT License | https://tailwindcss.com`
        }),
        ...t.nodes
      ]);
    },
    container: /* @__PURE__ */ (() => {
      function e(r = []) {
        return r.flatMap((n2) => n2.values.map((a) => a.min)).filter((n2) => n2 !== void 0);
      }
      function t(r, n2, a) {
        if (typeof a > "u") return [];
        if (!(typeof a == "object" && a !== null)) return [
          {
            screen: "DEFAULT",
            minWidth: 0,
            padding: a
          }
        ];
        let i = [];
        a.DEFAULT && i.push({
          screen: "DEFAULT",
          minWidth: 0,
          padding: a.DEFAULT
        });
        for (let o2 of r) for (let s of n2) for (let { min: l2 } of s.values) l2 === o2 && i.push({
          minWidth: o2,
          padding: a[s.name]
        });
        return i;
      }
      return function({ addComponents: r, theme: n2 }) {
        let a = ie(n2("container.screens", n2("screens"))), i = e(a), o2 = t(i, a, n2("container.padding")), s = (p2) => {
          let g2 = o2.find((f2) => f2.minWidth === p2);
          return g2 ? {
            paddingRight: g2.padding,
            paddingLeft: g2.padding
          } : {};
        }, l2 = Array.from(new Set(i.slice().sort((p2, g2) => parseInt(p2) - parseInt(g2)))).map((p2) => ({
          [`@media (min-width: ${p2})`]: {
            ".container": {
              "max-width": p2,
              ...s(p2)
            }
          }
        }));
        r([
          {
            ".container": Object.assign({
              width: "100%"
            }, n2("container.center", false) ? {
              marginRight: "auto",
              marginLeft: "auto"
            } : {}, s(0))
          },
          ...l2
        ]);
      };
    })(),
    accessibility: ({ addUtilities: e }) => {
      e({
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0"
        },
        ".not-sr-only": {
          position: "static",
          width: "auto",
          height: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          clip: "auto",
          whiteSpace: "normal"
        }
      });
    },
    pointerEvents: ({ addUtilities: e }) => {
      e({
        ".pointer-events-none": {
          "pointer-events": "none"
        },
        ".pointer-events-auto": {
          "pointer-events": "auto"
        }
      });
    },
    visibility: ({ addUtilities: e }) => {
      e({
        ".visible": {
          visibility: "visible"
        },
        ".invisible": {
          visibility: "hidden"
        },
        ".collapse": {
          visibility: "collapse"
        }
      });
    },
    position: ({ addUtilities: e }) => {
      e({
        ".static": {
          position: "static"
        },
        ".fixed": {
          position: "fixed"
        },
        ".absolute": {
          position: "absolute"
        },
        ".relative": {
          position: "relative"
        },
        ".sticky": {
          position: "sticky"
        }
      });
    },
    inset: v("inset", [
      [
        "inset",
        [
          "inset"
        ]
      ],
      [
        [
          "inset-x",
          [
            "left",
            "right"
          ]
        ],
        [
          "inset-y",
          [
            "top",
            "bottom"
          ]
        ]
      ],
      [
        [
          "start",
          [
            "inset-inline-start"
          ]
        ],
        [
          "end",
          [
            "inset-inline-end"
          ]
        ],
        [
          "top",
          [
            "top"
          ]
        ],
        [
          "right",
          [
            "right"
          ]
        ],
        [
          "bottom",
          [
            "bottom"
          ]
        ],
        [
          "left",
          [
            "left"
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    isolation: ({ addUtilities: e }) => {
      e({
        ".isolate": {
          isolation: "isolate"
        },
        ".isolation-auto": {
          isolation: "auto"
        }
      });
    },
    zIndex: v("zIndex", [
      [
        "z",
        [
          "zIndex"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    order: v("order", void 0, {
      supportsNegativeValues: true
    }),
    gridColumn: v("gridColumn", [
      [
        "col",
        [
          "gridColumn"
        ]
      ]
    ]),
    gridColumnStart: v("gridColumnStart", [
      [
        "col-start",
        [
          "gridColumnStart"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridColumnEnd: v("gridColumnEnd", [
      [
        "col-end",
        [
          "gridColumnEnd"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridRow: v("gridRow", [
      [
        "row",
        [
          "gridRow"
        ]
      ]
    ]),
    gridRowStart: v("gridRowStart", [
      [
        "row-start",
        [
          "gridRowStart"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    gridRowEnd: v("gridRowEnd", [
      [
        "row-end",
        [
          "gridRowEnd"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    float: ({ addUtilities: e }) => {
      e({
        ".float-start": {
          float: "inline-start"
        },
        ".float-end": {
          float: "inline-end"
        },
        ".float-right": {
          float: "right"
        },
        ".float-left": {
          float: "left"
        },
        ".float-none": {
          float: "none"
        }
      });
    },
    clear: ({ addUtilities: e }) => {
      e({
        ".clear-start": {
          clear: "inline-start"
        },
        ".clear-end": {
          clear: "inline-end"
        },
        ".clear-left": {
          clear: "left"
        },
        ".clear-right": {
          clear: "right"
        },
        ".clear-both": {
          clear: "both"
        },
        ".clear-none": {
          clear: "none"
        }
      });
    },
    margin: v("margin", [
      [
        "m",
        [
          "margin"
        ]
      ],
      [
        [
          "mx",
          [
            "margin-left",
            "margin-right"
          ]
        ],
        [
          "my",
          [
            "margin-top",
            "margin-bottom"
          ]
        ]
      ],
      [
        [
          "ms",
          [
            "margin-inline-start"
          ]
        ],
        [
          "me",
          [
            "margin-inline-end"
          ]
        ],
        [
          "mt",
          [
            "margin-top"
          ]
        ],
        [
          "mr",
          [
            "margin-right"
          ]
        ],
        [
          "mb",
          [
            "margin-bottom"
          ]
        ],
        [
          "ml",
          [
            "margin-left"
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    boxSizing: ({ addUtilities: e }) => {
      e({
        ".box-border": {
          "box-sizing": "border-box"
        },
        ".box-content": {
          "box-sizing": "content-box"
        }
      });
    },
    lineClamp: ({ matchUtilities: e, addUtilities: t, theme: r }) => {
      e({
        "line-clamp": (n2) => ({
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": `${n2}`
        })
      }, {
        values: r("lineClamp")
      }), t({
        ".line-clamp-none": {
          overflow: "visible",
          display: "block",
          "-webkit-box-orient": "horizontal",
          "-webkit-line-clamp": "none"
        }
      });
    },
    display: ({ addUtilities: e }) => {
      e({
        ".block": {
          display: "block"
        },
        ".inline-block": {
          display: "inline-block"
        },
        ".inline": {
          display: "inline"
        },
        ".flex": {
          display: "flex"
        },
        ".inline-flex": {
          display: "inline-flex"
        },
        ".table": {
          display: "table"
        },
        ".inline-table": {
          display: "inline-table"
        },
        ".table-caption": {
          display: "table-caption"
        },
        ".table-cell": {
          display: "table-cell"
        },
        ".table-column": {
          display: "table-column"
        },
        ".table-column-group": {
          display: "table-column-group"
        },
        ".table-footer-group": {
          display: "table-footer-group"
        },
        ".table-header-group": {
          display: "table-header-group"
        },
        ".table-row-group": {
          display: "table-row-group"
        },
        ".table-row": {
          display: "table-row"
        },
        ".flow-root": {
          display: "flow-root"
        },
        ".grid": {
          display: "grid"
        },
        ".inline-grid": {
          display: "inline-grid"
        },
        ".contents": {
          display: "contents"
        },
        ".list-item": {
          display: "list-item"
        },
        ".hidden": {
          display: "none"
        }
      });
    },
    aspectRatio: v("aspectRatio", [
      [
        "aspect",
        [
          "aspect-ratio"
        ]
      ]
    ]),
    size: v("size", [
      [
        "size",
        [
          "width",
          "height"
        ]
      ]
    ]),
    height: v("height", [
      [
        "h",
        [
          "height"
        ]
      ]
    ]),
    maxHeight: v("maxHeight", [
      [
        "max-h",
        [
          "maxHeight"
        ]
      ]
    ]),
    minHeight: v("minHeight", [
      [
        "min-h",
        [
          "minHeight"
        ]
      ]
    ]),
    width: v("width", [
      [
        "w",
        [
          "width"
        ]
      ]
    ]),
    minWidth: v("minWidth", [
      [
        "min-w",
        [
          "minWidth"
        ]
      ]
    ]),
    maxWidth: v("maxWidth", [
      [
        "max-w",
        [
          "maxWidth"
        ]
      ]
    ]),
    flex: v("flex"),
    flexShrink: v("flexShrink", [
      [
        "flex-shrink",
        [
          "flex-shrink"
        ]
      ],
      [
        "shrink",
        [
          "flex-shrink"
        ]
      ]
    ]),
    flexGrow: v("flexGrow", [
      [
        "flex-grow",
        [
          "flex-grow"
        ]
      ],
      [
        "grow",
        [
          "flex-grow"
        ]
      ]
    ]),
    flexBasis: v("flexBasis", [
      [
        "basis",
        [
          "flex-basis"
        ]
      ]
    ]),
    tableLayout: ({ addUtilities: e }) => {
      e({
        ".table-auto": {
          "table-layout": "auto"
        },
        ".table-fixed": {
          "table-layout": "fixed"
        }
      });
    },
    captionSide: ({ addUtilities: e }) => {
      e({
        ".caption-top": {
          "caption-side": "top"
        },
        ".caption-bottom": {
          "caption-side": "bottom"
        }
      });
    },
    borderCollapse: ({ addUtilities: e }) => {
      e({
        ".border-collapse": {
          "border-collapse": "collapse"
        },
        ".border-separate": {
          "border-collapse": "separate"
        }
      });
    },
    borderSpacing: ({ addDefaults: e, matchUtilities: t, theme: r }) => {
      e("border-spacing", {
        "--tw-border-spacing-x": 0,
        "--tw-border-spacing-y": 0
      }), t({
        "border-spacing": (n2) => ({
          "--tw-border-spacing-x": n2,
          "--tw-border-spacing-y": n2,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
        }),
        "border-spacing-x": (n2) => ({
          "--tw-border-spacing-x": n2,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
        }),
        "border-spacing-y": (n2) => ({
          "--tw-border-spacing-y": n2,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
        })
      }, {
        values: r("borderSpacing")
      });
    },
    transformOrigin: v("transformOrigin", [
      [
        "origin",
        [
          "transformOrigin"
        ]
      ]
    ]),
    translate: v("translate", [
      [
        [
          "translate-x",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-translate-x",
            [
              "transform",
              G
            ]
          ]
        ],
        [
          "translate-y",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-translate-y",
            [
              "transform",
              G
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    rotate: v("rotate", [
      [
        "rotate",
        [
          [
            "@defaults transform",
            {}
          ],
          "--tw-rotate",
          [
            "transform",
            G
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    skew: v("skew", [
      [
        [
          "skew-x",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-skew-x",
            [
              "transform",
              G
            ]
          ]
        ],
        [
          "skew-y",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-skew-y",
            [
              "transform",
              G
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    scale: v("scale", [
      [
        "scale",
        [
          [
            "@defaults transform",
            {}
          ],
          "--tw-scale-x",
          "--tw-scale-y",
          [
            "transform",
            G
          ]
        ]
      ],
      [
        [
          "scale-x",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-scale-x",
            [
              "transform",
              G
            ]
          ]
        ],
        [
          "scale-y",
          [
            [
              "@defaults transform",
              {}
            ],
            "--tw-scale-y",
            [
              "transform",
              G
            ]
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    transform: ({ addDefaults: e, addUtilities: t }) => {
      e("transform", {
        "--tw-translate-x": "0",
        "--tw-translate-y": "0",
        "--tw-rotate": "0",
        "--tw-skew-x": "0",
        "--tw-skew-y": "0",
        "--tw-scale-x": "1",
        "--tw-scale-y": "1"
      }), t({
        ".transform": {
          "@defaults transform": {},
          transform: G
        },
        ".transform-cpu": {
          transform: G
        },
        ".transform-gpu": {
          transform: G.replace("translate(var(--tw-translate-x), var(--tw-translate-y))", "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)")
        },
        ".transform-none": {
          transform: "none"
        }
      });
    },
    animation: ({ matchUtilities: e, theme: t, config: r }) => {
      let n2 = (i) => R(r("prefix") + i), a = Object.fromEntries(Object.entries(t("keyframes") ?? {}).map(([i, o2]) => [
        i,
        {
          [`@keyframes ${n2(i)}`]: o2
        }
      ]));
      e({
        animate: (i) => {
          let o2 = St(i);
          return [
            ...o2.flatMap((s) => a[s.name]),
            {
              animation: o2.map(({ name: s, value: l2 }) => s === void 0 || a[s] === void 0 ? l2 : l2.replace(s, n2(s))).join(", ")
            }
          ];
        }
      }, {
        values: t("animation")
      });
    },
    cursor: v("cursor"),
    touchAction: ({ addDefaults: e, addUtilities: t }) => {
      e("touch-action", {
        "--tw-pan-x": " ",
        "--tw-pan-y": " ",
        "--tw-pinch-zoom": " "
      });
      let r = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
      t({
        ".touch-auto": {
          "touch-action": "auto"
        },
        ".touch-none": {
          "touch-action": "none"
        },
        ".touch-pan-x": {
          "@defaults touch-action": {},
          "--tw-pan-x": "pan-x",
          "touch-action": r
        },
        ".touch-pan-left": {
          "@defaults touch-action": {},
          "--tw-pan-x": "pan-left",
          "touch-action": r
        },
        ".touch-pan-right": {
          "@defaults touch-action": {},
          "--tw-pan-x": "pan-right",
          "touch-action": r
        },
        ".touch-pan-y": {
          "@defaults touch-action": {},
          "--tw-pan-y": "pan-y",
          "touch-action": r
        },
        ".touch-pan-up": {
          "@defaults touch-action": {},
          "--tw-pan-y": "pan-up",
          "touch-action": r
        },
        ".touch-pan-down": {
          "@defaults touch-action": {},
          "--tw-pan-y": "pan-down",
          "touch-action": r
        },
        ".touch-pinch-zoom": {
          "@defaults touch-action": {},
          "--tw-pinch-zoom": "pinch-zoom",
          "touch-action": r
        },
        ".touch-manipulation": {
          "touch-action": "manipulation"
        }
      });
    },
    userSelect: ({ addUtilities: e }) => {
      e({
        ".select-none": {
          "user-select": "none"
        },
        ".select-text": {
          "user-select": "text"
        },
        ".select-all": {
          "user-select": "all"
        },
        ".select-auto": {
          "user-select": "auto"
        }
      });
    },
    resize: ({ addUtilities: e }) => {
      e({
        ".resize-none": {
          resize: "none"
        },
        ".resize-y": {
          resize: "vertical"
        },
        ".resize-x": {
          resize: "horizontal"
        },
        ".resize": {
          resize: "both"
        }
      });
    },
    scrollSnapType: ({ addDefaults: e, addUtilities: t }) => {
      e("scroll-snap-type", {
        "--tw-scroll-snap-strictness": "proximity"
      }), t({
        ".snap-none": {
          "scroll-snap-type": "none"
        },
        ".snap-x": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": "x var(--tw-scroll-snap-strictness)"
        },
        ".snap-y": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": "y var(--tw-scroll-snap-strictness)"
        },
        ".snap-both": {
          "@defaults scroll-snap-type": {},
          "scroll-snap-type": "both var(--tw-scroll-snap-strictness)"
        },
        ".snap-mandatory": {
          "--tw-scroll-snap-strictness": "mandatory"
        },
        ".snap-proximity": {
          "--tw-scroll-snap-strictness": "proximity"
        }
      });
    },
    scrollSnapAlign: ({ addUtilities: e }) => {
      e({
        ".snap-start": {
          "scroll-snap-align": "start"
        },
        ".snap-end": {
          "scroll-snap-align": "end"
        },
        ".snap-center": {
          "scroll-snap-align": "center"
        },
        ".snap-align-none": {
          "scroll-snap-align": "none"
        }
      });
    },
    scrollSnapStop: ({ addUtilities: e }) => {
      e({
        ".snap-normal": {
          "scroll-snap-stop": "normal"
        },
        ".snap-always": {
          "scroll-snap-stop": "always"
        }
      });
    },
    scrollMargin: v("scrollMargin", [
      [
        "scroll-m",
        [
          "scroll-margin"
        ]
      ],
      [
        [
          "scroll-mx",
          [
            "scroll-margin-left",
            "scroll-margin-right"
          ]
        ],
        [
          "scroll-my",
          [
            "scroll-margin-top",
            "scroll-margin-bottom"
          ]
        ]
      ],
      [
        [
          "scroll-ms",
          [
            "scroll-margin-inline-start"
          ]
        ],
        [
          "scroll-me",
          [
            "scroll-margin-inline-end"
          ]
        ],
        [
          "scroll-mt",
          [
            "scroll-margin-top"
          ]
        ],
        [
          "scroll-mr",
          [
            "scroll-margin-right"
          ]
        ],
        [
          "scroll-mb",
          [
            "scroll-margin-bottom"
          ]
        ],
        [
          "scroll-ml",
          [
            "scroll-margin-left"
          ]
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    scrollPadding: v("scrollPadding", [
      [
        "scroll-p",
        [
          "scroll-padding"
        ]
      ],
      [
        [
          "scroll-px",
          [
            "scroll-padding-left",
            "scroll-padding-right"
          ]
        ],
        [
          "scroll-py",
          [
            "scroll-padding-top",
            "scroll-padding-bottom"
          ]
        ]
      ],
      [
        [
          "scroll-ps",
          [
            "scroll-padding-inline-start"
          ]
        ],
        [
          "scroll-pe",
          [
            "scroll-padding-inline-end"
          ]
        ],
        [
          "scroll-pt",
          [
            "scroll-padding-top"
          ]
        ],
        [
          "scroll-pr",
          [
            "scroll-padding-right"
          ]
        ],
        [
          "scroll-pb",
          [
            "scroll-padding-bottom"
          ]
        ],
        [
          "scroll-pl",
          [
            "scroll-padding-left"
          ]
        ]
      ]
    ]),
    listStylePosition: ({ addUtilities: e }) => {
      e({
        ".list-inside": {
          "list-style-position": "inside"
        },
        ".list-outside": {
          "list-style-position": "outside"
        }
      });
    },
    listStyleType: v("listStyleType", [
      [
        "list",
        [
          "listStyleType"
        ]
      ]
    ]),
    listStyleImage: v("listStyleImage", [
      [
        "list-image",
        [
          "listStyleImage"
        ]
      ]
    ]),
    appearance: ({ addUtilities: e }) => {
      e({
        ".appearance-none": {
          appearance: "none"
        },
        ".appearance-auto": {
          appearance: "auto"
        }
      });
    },
    columns: v("columns", [
      [
        "columns",
        [
          "columns"
        ]
      ]
    ]),
    breakBefore: ({ addUtilities: e }) => {
      e({
        ".break-before-auto": {
          "break-before": "auto"
        },
        ".break-before-avoid": {
          "break-before": "avoid"
        },
        ".break-before-all": {
          "break-before": "all"
        },
        ".break-before-avoid-page": {
          "break-before": "avoid-page"
        },
        ".break-before-page": {
          "break-before": "page"
        },
        ".break-before-left": {
          "break-before": "left"
        },
        ".break-before-right": {
          "break-before": "right"
        },
        ".break-before-column": {
          "break-before": "column"
        }
      });
    },
    breakInside: ({ addUtilities: e }) => {
      e({
        ".break-inside-auto": {
          "break-inside": "auto"
        },
        ".break-inside-avoid": {
          "break-inside": "avoid"
        },
        ".break-inside-avoid-page": {
          "break-inside": "avoid-page"
        },
        ".break-inside-avoid-column": {
          "break-inside": "avoid-column"
        }
      });
    },
    breakAfter: ({ addUtilities: e }) => {
      e({
        ".break-after-auto": {
          "break-after": "auto"
        },
        ".break-after-avoid": {
          "break-after": "avoid"
        },
        ".break-after-all": {
          "break-after": "all"
        },
        ".break-after-avoid-page": {
          "break-after": "avoid-page"
        },
        ".break-after-page": {
          "break-after": "page"
        },
        ".break-after-left": {
          "break-after": "left"
        },
        ".break-after-right": {
          "break-after": "right"
        },
        ".break-after-column": {
          "break-after": "column"
        }
      });
    },
    gridAutoColumns: v("gridAutoColumns", [
      [
        "auto-cols",
        [
          "gridAutoColumns"
        ]
      ]
    ]),
    gridAutoFlow: ({ addUtilities: e }) => {
      e({
        ".grid-flow-row": {
          gridAutoFlow: "row"
        },
        ".grid-flow-col": {
          gridAutoFlow: "column"
        },
        ".grid-flow-dense": {
          gridAutoFlow: "dense"
        },
        ".grid-flow-row-dense": {
          gridAutoFlow: "row dense"
        },
        ".grid-flow-col-dense": {
          gridAutoFlow: "column dense"
        }
      });
    },
    gridAutoRows: v("gridAutoRows", [
      [
        "auto-rows",
        [
          "gridAutoRows"
        ]
      ]
    ]),
    gridTemplateColumns: v("gridTemplateColumns", [
      [
        "grid-cols",
        [
          "gridTemplateColumns"
        ]
      ]
    ]),
    gridTemplateRows: v("gridTemplateRows", [
      [
        "grid-rows",
        [
          "gridTemplateRows"
        ]
      ]
    ]),
    flexDirection: ({ addUtilities: e }) => {
      e({
        ".flex-row": {
          "flex-direction": "row"
        },
        ".flex-row-reverse": {
          "flex-direction": "row-reverse"
        },
        ".flex-col": {
          "flex-direction": "column"
        },
        ".flex-col-reverse": {
          "flex-direction": "column-reverse"
        }
      });
    },
    flexWrap: ({ addUtilities: e }) => {
      e({
        ".flex-wrap": {
          "flex-wrap": "wrap"
        },
        ".flex-wrap-reverse": {
          "flex-wrap": "wrap-reverse"
        },
        ".flex-nowrap": {
          "flex-wrap": "nowrap"
        }
      });
    },
    placeContent: ({ addUtilities: e }) => {
      e({
        ".place-content-center": {
          "place-content": "center"
        },
        ".place-content-start": {
          "place-content": "start"
        },
        ".place-content-end": {
          "place-content": "end"
        },
        ".place-content-between": {
          "place-content": "space-between"
        },
        ".place-content-around": {
          "place-content": "space-around"
        },
        ".place-content-evenly": {
          "place-content": "space-evenly"
        },
        ".place-content-baseline": {
          "place-content": "baseline"
        },
        ".place-content-stretch": {
          "place-content": "stretch"
        }
      });
    },
    placeItems: ({ addUtilities: e }) => {
      e({
        ".place-items-start": {
          "place-items": "start"
        },
        ".place-items-end": {
          "place-items": "end"
        },
        ".place-items-center": {
          "place-items": "center"
        },
        ".place-items-baseline": {
          "place-items": "baseline"
        },
        ".place-items-stretch": {
          "place-items": "stretch"
        }
      });
    },
    alignContent: ({ addUtilities: e }) => {
      e({
        ".content-normal": {
          "align-content": "normal"
        },
        ".content-center": {
          "align-content": "center"
        },
        ".content-start": {
          "align-content": "flex-start"
        },
        ".content-end": {
          "align-content": "flex-end"
        },
        ".content-between": {
          "align-content": "space-between"
        },
        ".content-around": {
          "align-content": "space-around"
        },
        ".content-evenly": {
          "align-content": "space-evenly"
        },
        ".content-baseline": {
          "align-content": "baseline"
        },
        ".content-stretch": {
          "align-content": "stretch"
        }
      });
    },
    alignItems: ({ addUtilities: e }) => {
      e({
        ".items-start": {
          "align-items": "flex-start"
        },
        ".items-end": {
          "align-items": "flex-end"
        },
        ".items-center": {
          "align-items": "center"
        },
        ".items-baseline": {
          "align-items": "baseline"
        },
        ".items-stretch": {
          "align-items": "stretch"
        }
      });
    },
    justifyContent: ({ addUtilities: e }) => {
      e({
        ".justify-normal": {
          "justify-content": "normal"
        },
        ".justify-start": {
          "justify-content": "flex-start"
        },
        ".justify-end": {
          "justify-content": "flex-end"
        },
        ".justify-center": {
          "justify-content": "center"
        },
        ".justify-between": {
          "justify-content": "space-between"
        },
        ".justify-around": {
          "justify-content": "space-around"
        },
        ".justify-evenly": {
          "justify-content": "space-evenly"
        },
        ".justify-stretch": {
          "justify-content": "stretch"
        }
      });
    },
    justifyItems: ({ addUtilities: e }) => {
      e({
        ".justify-items-start": {
          "justify-items": "start"
        },
        ".justify-items-end": {
          "justify-items": "end"
        },
        ".justify-items-center": {
          "justify-items": "center"
        },
        ".justify-items-stretch": {
          "justify-items": "stretch"
        }
      });
    },
    gap: v("gap", [
      [
        "gap",
        [
          "gap"
        ]
      ],
      [
        [
          "gap-x",
          [
            "columnGap"
          ]
        ],
        [
          "gap-y",
          [
            "rowGap"
          ]
        ]
      ]
    ]),
    space: ({ matchUtilities: e, addUtilities: t, theme: r }) => {
      e({
        "space-x": (n2) => (n2 = n2 === "0" ? "0px" : n2, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-space-x-reverse": "0",
            "margin-right": `calc(${n2} * var(--tw-space-x-reverse))`,
            "margin-left": `calc(${n2} * calc(1 - var(--tw-space-x-reverse)))`
          }
        }),
        "space-y": (n2) => (n2 = n2 === "0" ? "0px" : n2, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-space-y-reverse": "0",
            "margin-top": `calc(${n2} * calc(1 - var(--tw-space-y-reverse)))`,
            "margin-bottom": `calc(${n2} * var(--tw-space-y-reverse))`
          }
        })
      }, {
        values: r("space"),
        supportsNegativeValues: true
      }), t({
        ".space-y-reverse > :not([hidden]) ~ :not([hidden])": {
          "--tw-space-y-reverse": "1"
        },
        ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
          "--tw-space-x-reverse": "1"
        }
      });
    },
    divideWidth: ({ matchUtilities: e, addUtilities: t, theme: r }) => {
      e({
        "divide-x": (n2) => (n2 = n2 === "0" ? "0px" : n2, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "@defaults border-width": {},
            "--tw-divide-x-reverse": "0",
            "border-right-width": `calc(${n2} * var(--tw-divide-x-reverse))`,
            "border-left-width": `calc(${n2} * calc(1 - var(--tw-divide-x-reverse)))`
          }
        }),
        "divide-y": (n2) => (n2 = n2 === "0" ? "0px" : n2, {
          "& > :not([hidden]) ~ :not([hidden])": {
            "@defaults border-width": {},
            "--tw-divide-y-reverse": "0",
            "border-top-width": `calc(${n2} * calc(1 - var(--tw-divide-y-reverse)))`,
            "border-bottom-width": `calc(${n2} * var(--tw-divide-y-reverse))`
          }
        })
      }, {
        values: r("divideWidth"),
        type: [
          "line-width",
          "length",
          "any"
        ]
      }), t({
        ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": {
          "@defaults border-width": {},
          "--tw-divide-y-reverse": "1"
        },
        ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": {
          "@defaults border-width": {},
          "--tw-divide-x-reverse": "1"
        }
      });
    },
    divideStyle: ({ addUtilities: e }) => {
      e({
        ".divide-solid > :not([hidden]) ~ :not([hidden])": {
          "border-style": "solid"
        },
        ".divide-dashed > :not([hidden]) ~ :not([hidden])": {
          "border-style": "dashed"
        },
        ".divide-dotted > :not([hidden]) ~ :not([hidden])": {
          "border-style": "dotted"
        },
        ".divide-double > :not([hidden]) ~ :not([hidden])": {
          "border-style": "double"
        },
        ".divide-none > :not([hidden]) ~ :not([hidden])": {
          "border-style": "none"
        }
      });
    },
    divideColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        divide: (n2) => r("divideOpacity") ? {
          "& > :not([hidden]) ~ :not([hidden])": N({
            color: n2,
            property: "border-color",
            variable: "--tw-divide-opacity"
          })
        } : {
          "& > :not([hidden]) ~ :not([hidden])": {
            "border-color": O(n2)
          }
        }
      }, {
        values: (({ DEFAULT: n2, ...a }) => a)(I(t("divideColor"))),
        type: [
          "color",
          "any"
        ]
      });
    },
    divideOpacity: ({ matchUtilities: e, theme: t }) => {
      e({
        "divide-opacity": (r) => ({
          "& > :not([hidden]) ~ :not([hidden])": {
            "--tw-divide-opacity": r
          }
        })
      }, {
        values: t("divideOpacity")
      });
    },
    placeSelf: ({ addUtilities: e }) => {
      e({
        ".place-self-auto": {
          "place-self": "auto"
        },
        ".place-self-start": {
          "place-self": "start"
        },
        ".place-self-end": {
          "place-self": "end"
        },
        ".place-self-center": {
          "place-self": "center"
        },
        ".place-self-stretch": {
          "place-self": "stretch"
        }
      });
    },
    alignSelf: ({ addUtilities: e }) => {
      e({
        ".self-auto": {
          "align-self": "auto"
        },
        ".self-start": {
          "align-self": "flex-start"
        },
        ".self-end": {
          "align-self": "flex-end"
        },
        ".self-center": {
          "align-self": "center"
        },
        ".self-stretch": {
          "align-self": "stretch"
        },
        ".self-baseline": {
          "align-self": "baseline"
        }
      });
    },
    justifySelf: ({ addUtilities: e }) => {
      e({
        ".justify-self-auto": {
          "justify-self": "auto"
        },
        ".justify-self-start": {
          "justify-self": "start"
        },
        ".justify-self-end": {
          "justify-self": "end"
        },
        ".justify-self-center": {
          "justify-self": "center"
        },
        ".justify-self-stretch": {
          "justify-self": "stretch"
        }
      });
    },
    overflow: ({ addUtilities: e }) => {
      e({
        ".overflow-auto": {
          overflow: "auto"
        },
        ".overflow-hidden": {
          overflow: "hidden"
        },
        ".overflow-clip": {
          overflow: "clip"
        },
        ".overflow-visible": {
          overflow: "visible"
        },
        ".overflow-scroll": {
          overflow: "scroll"
        },
        ".overflow-x-auto": {
          "overflow-x": "auto"
        },
        ".overflow-y-auto": {
          "overflow-y": "auto"
        },
        ".overflow-x-hidden": {
          "overflow-x": "hidden"
        },
        ".overflow-y-hidden": {
          "overflow-y": "hidden"
        },
        ".overflow-x-clip": {
          "overflow-x": "clip"
        },
        ".overflow-y-clip": {
          "overflow-y": "clip"
        },
        ".overflow-x-visible": {
          "overflow-x": "visible"
        },
        ".overflow-y-visible": {
          "overflow-y": "visible"
        },
        ".overflow-x-scroll": {
          "overflow-x": "scroll"
        },
        ".overflow-y-scroll": {
          "overflow-y": "scroll"
        }
      });
    },
    overscrollBehavior: ({ addUtilities: e }) => {
      e({
        ".overscroll-auto": {
          "overscroll-behavior": "auto"
        },
        ".overscroll-contain": {
          "overscroll-behavior": "contain"
        },
        ".overscroll-none": {
          "overscroll-behavior": "none"
        },
        ".overscroll-y-auto": {
          "overscroll-behavior-y": "auto"
        },
        ".overscroll-y-contain": {
          "overscroll-behavior-y": "contain"
        },
        ".overscroll-y-none": {
          "overscroll-behavior-y": "none"
        },
        ".overscroll-x-auto": {
          "overscroll-behavior-x": "auto"
        },
        ".overscroll-x-contain": {
          "overscroll-behavior-x": "contain"
        },
        ".overscroll-x-none": {
          "overscroll-behavior-x": "none"
        }
      });
    },
    scrollBehavior: ({ addUtilities: e }) => {
      e({
        ".scroll-auto": {
          "scroll-behavior": "auto"
        },
        ".scroll-smooth": {
          "scroll-behavior": "smooth"
        }
      });
    },
    textOverflow: ({ addUtilities: e }) => {
      e({
        ".truncate": {
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "nowrap"
        },
        ".overflow-ellipsis": {
          "text-overflow": "ellipsis"
        },
        ".text-ellipsis": {
          "text-overflow": "ellipsis"
        },
        ".text-clip": {
          "text-overflow": "clip"
        }
      });
    },
    hyphens: ({ addUtilities: e }) => {
      e({
        ".hyphens-none": {
          hyphens: "none"
        },
        ".hyphens-manual": {
          hyphens: "manual"
        },
        ".hyphens-auto": {
          hyphens: "auto"
        }
      });
    },
    whitespace: ({ addUtilities: e }) => {
      e({
        ".whitespace-normal": {
          "white-space": "normal"
        },
        ".whitespace-nowrap": {
          "white-space": "nowrap"
        },
        ".whitespace-pre": {
          "white-space": "pre"
        },
        ".whitespace-pre-line": {
          "white-space": "pre-line"
        },
        ".whitespace-pre-wrap": {
          "white-space": "pre-wrap"
        },
        ".whitespace-break-spaces": {
          "white-space": "break-spaces"
        }
      });
    },
    textWrap: ({ addUtilities: e }) => {
      e({
        ".text-wrap": {
          "text-wrap": "wrap"
        },
        ".text-nowrap": {
          "text-wrap": "nowrap"
        },
        ".text-balance": {
          "text-wrap": "balance"
        },
        ".text-pretty": {
          "text-wrap": "pretty"
        }
      });
    },
    wordBreak: ({ addUtilities: e }) => {
      e({
        ".break-normal": {
          "overflow-wrap": "normal",
          "word-break": "normal"
        },
        ".break-words": {
          "overflow-wrap": "break-word"
        },
        ".break-all": {
          "word-break": "break-all"
        },
        ".break-keep": {
          "word-break": "keep-all"
        }
      });
    },
    borderRadius: v("borderRadius", [
      [
        "rounded",
        [
          "border-radius"
        ]
      ],
      [
        [
          "rounded-s",
          [
            "border-start-start-radius",
            "border-end-start-radius"
          ]
        ],
        [
          "rounded-e",
          [
            "border-start-end-radius",
            "border-end-end-radius"
          ]
        ],
        [
          "rounded-t",
          [
            "border-top-left-radius",
            "border-top-right-radius"
          ]
        ],
        [
          "rounded-r",
          [
            "border-top-right-radius",
            "border-bottom-right-radius"
          ]
        ],
        [
          "rounded-b",
          [
            "border-bottom-right-radius",
            "border-bottom-left-radius"
          ]
        ],
        [
          "rounded-l",
          [
            "border-top-left-radius",
            "border-bottom-left-radius"
          ]
        ]
      ],
      [
        [
          "rounded-ss",
          [
            "border-start-start-radius"
          ]
        ],
        [
          "rounded-se",
          [
            "border-start-end-radius"
          ]
        ],
        [
          "rounded-ee",
          [
            "border-end-end-radius"
          ]
        ],
        [
          "rounded-es",
          [
            "border-end-start-radius"
          ]
        ],
        [
          "rounded-tl",
          [
            "border-top-left-radius"
          ]
        ],
        [
          "rounded-tr",
          [
            "border-top-right-radius"
          ]
        ],
        [
          "rounded-br",
          [
            "border-bottom-right-radius"
          ]
        ],
        [
          "rounded-bl",
          [
            "border-bottom-left-radius"
          ]
        ]
      ]
    ]),
    borderWidth: v("borderWidth", [
      [
        "border",
        [
          [
            "@defaults border-width",
            {}
          ],
          "border-width"
        ]
      ],
      [
        [
          "border-x",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-left-width",
            "border-right-width"
          ]
        ],
        [
          "border-y",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-top-width",
            "border-bottom-width"
          ]
        ]
      ],
      [
        [
          "border-s",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-inline-start-width"
          ]
        ],
        [
          "border-e",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-inline-end-width"
          ]
        ],
        [
          "border-t",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-top-width"
          ]
        ],
        [
          "border-r",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-right-width"
          ]
        ],
        [
          "border-b",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-bottom-width"
          ]
        ],
        [
          "border-l",
          [
            [
              "@defaults border-width",
              {}
            ],
            "border-left-width"
          ]
        ]
      ]
    ], {
      type: [
        "line-width",
        "length"
      ]
    }),
    borderStyle: ({ addUtilities: e }) => {
      e({
        ".border-solid": {
          "border-style": "solid"
        },
        ".border-dashed": {
          "border-style": "dashed"
        },
        ".border-dotted": {
          "border-style": "dotted"
        },
        ".border-double": {
          "border-style": "double"
        },
        ".border-hidden": {
          "border-style": "hidden"
        },
        ".border-none": {
          "border-style": "none"
        }
      });
    },
    borderColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        border: (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-color": O(n2)
        }
      }, {
        values: (({ DEFAULT: n2, ...a }) => a)(I(t("borderColor"))),
        type: [
          "color",
          "any"
        ]
      }), e({
        "border-x": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: [
            "border-left-color",
            "border-right-color"
          ],
          variable: "--tw-border-opacity"
        }) : {
          "border-left-color": O(n2),
          "border-right-color": O(n2)
        },
        "border-y": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: [
            "border-top-color",
            "border-bottom-color"
          ],
          variable: "--tw-border-opacity"
        }) : {
          "border-top-color": O(n2),
          "border-bottom-color": O(n2)
        }
      }, {
        values: (({ DEFAULT: n2, ...a }) => a)(I(t("borderColor"))),
        type: [
          "color",
          "any"
        ]
      }), e({
        "border-s": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-inline-start-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-inline-start-color": O(n2)
        },
        "border-e": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-inline-end-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-inline-end-color": O(n2)
        },
        "border-t": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-top-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-top-color": O(n2)
        },
        "border-r": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-right-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-right-color": O(n2)
        },
        "border-b": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-bottom-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-bottom-color": O(n2)
        },
        "border-l": (n2) => r("borderOpacity") ? N({
          color: n2,
          property: "border-left-color",
          variable: "--tw-border-opacity"
        }) : {
          "border-left-color": O(n2)
        }
      }, {
        values: (({ DEFAULT: n2, ...a }) => a)(I(t("borderColor"))),
        type: [
          "color",
          "any"
        ]
      });
    },
    borderOpacity: v("borderOpacity", [
      [
        "border-opacity",
        [
          "--tw-border-opacity"
        ]
      ]
    ]),
    backgroundColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        bg: (n2) => r("backgroundOpacity") ? N({
          color: n2,
          property: "background-color",
          variable: "--tw-bg-opacity"
        }) : {
          "background-color": O(n2)
        }
      }, {
        values: I(t("backgroundColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    backgroundOpacity: v("backgroundOpacity", [
      [
        "bg-opacity",
        [
          "--tw-bg-opacity"
        ]
      ]
    ]),
    backgroundImage: v("backgroundImage", [
      [
        "bg",
        [
          "background-image"
        ]
      ]
    ], {
      type: [
        "lookup",
        "image",
        "url"
      ]
    }),
    gradientColorStops: /* @__PURE__ */ (() => {
      function e(t) {
        return re(t, 0, "rgb(255 255 255 / 0)");
      }
      return function({ matchUtilities: t, theme: r, addDefaults: n2 }) {
        n2("gradient-color-stops", {
          "--tw-gradient-from-position": " ",
          "--tw-gradient-via-position": " ",
          "--tw-gradient-to-position": " "
        });
        let a = {
          values: I(r("gradientColorStops")),
          type: [
            "color",
            "any"
          ]
        }, i = {
          values: r("gradientColorStopPositions"),
          type: [
            "length",
            "percentage"
          ]
        };
        t({
          from: (o2) => {
            let s = e(o2);
            return {
              "@defaults gradient-color-stops": {},
              "--tw-gradient-from": `${O(o2)} var(--tw-gradient-from-position)`,
              "--tw-gradient-to": `${s} var(--tw-gradient-to-position)`,
              "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
            };
          }
        }, a), t({
          from: (o2) => ({
            "--tw-gradient-from-position": o2
          })
        }, i), t({
          via: (o2) => {
            let s = e(o2);
            return {
              "@defaults gradient-color-stops": {},
              "--tw-gradient-to": `${s}  var(--tw-gradient-to-position)`,
              "--tw-gradient-stops": `var(--tw-gradient-from), ${O(o2)} var(--tw-gradient-via-position), var(--tw-gradient-to)`
            };
          }
        }, a), t({
          via: (o2) => ({
            "--tw-gradient-via-position": o2
          })
        }, i), t({
          to: (o2) => ({
            "@defaults gradient-color-stops": {},
            "--tw-gradient-to": `${O(o2)} var(--tw-gradient-to-position)`
          })
        }, a), t({
          to: (o2) => ({
            "--tw-gradient-to-position": o2
          })
        }, i);
      };
    })(),
    boxDecorationBreak: ({ addUtilities: e }) => {
      e({
        ".decoration-slice": {
          "box-decoration-break": "slice"
        },
        ".decoration-clone": {
          "box-decoration-break": "clone"
        },
        ".box-decoration-slice": {
          "box-decoration-break": "slice"
        },
        ".box-decoration-clone": {
          "box-decoration-break": "clone"
        }
      });
    },
    backgroundSize: v("backgroundSize", [
      [
        "bg",
        [
          "background-size"
        ]
      ]
    ], {
      type: [
        "lookup",
        "length",
        "percentage",
        "size"
      ]
    }),
    backgroundAttachment: ({ addUtilities: e }) => {
      e({
        ".bg-fixed": {
          "background-attachment": "fixed"
        },
        ".bg-local": {
          "background-attachment": "local"
        },
        ".bg-scroll": {
          "background-attachment": "scroll"
        }
      });
    },
    backgroundClip: ({ addUtilities: e }) => {
      e({
        ".bg-clip-border": {
          "background-clip": "border-box"
        },
        ".bg-clip-padding": {
          "background-clip": "padding-box"
        },
        ".bg-clip-content": {
          "background-clip": "content-box"
        },
        ".bg-clip-text": {
          "background-clip": "text"
        }
      });
    },
    backgroundPosition: v("backgroundPosition", [
      [
        "bg",
        [
          "background-position"
        ]
      ]
    ], {
      type: [
        "lookup",
        [
          "position",
          {
            preferOnConflict: true
          }
        ]
      ]
    }),
    backgroundRepeat: ({ addUtilities: e }) => {
      e({
        ".bg-repeat": {
          "background-repeat": "repeat"
        },
        ".bg-no-repeat": {
          "background-repeat": "no-repeat"
        },
        ".bg-repeat-x": {
          "background-repeat": "repeat-x"
        },
        ".bg-repeat-y": {
          "background-repeat": "repeat-y"
        },
        ".bg-repeat-round": {
          "background-repeat": "round"
        },
        ".bg-repeat-space": {
          "background-repeat": "space"
        }
      });
    },
    backgroundOrigin: ({ addUtilities: e }) => {
      e({
        ".bg-origin-border": {
          "background-origin": "border-box"
        },
        ".bg-origin-padding": {
          "background-origin": "padding-box"
        },
        ".bg-origin-content": {
          "background-origin": "content-box"
        }
      });
    },
    fill: ({ matchUtilities: e, theme: t }) => {
      e({
        fill: (r) => ({
          fill: O(r)
        })
      }, {
        values: I(t("fill")),
        type: [
          "color",
          "any"
        ]
      });
    },
    stroke: ({ matchUtilities: e, theme: t }) => {
      e({
        stroke: (r) => ({
          stroke: O(r)
        })
      }, {
        values: I(t("stroke")),
        type: [
          "color",
          "url",
          "any"
        ]
      });
    },
    strokeWidth: v("strokeWidth", [
      [
        "stroke",
        [
          "stroke-width"
        ]
      ]
    ], {
      type: [
        "length",
        "number",
        "percentage"
      ]
    }),
    objectFit: ({ addUtilities: e }) => {
      e({
        ".object-contain": {
          "object-fit": "contain"
        },
        ".object-cover": {
          "object-fit": "cover"
        },
        ".object-fill": {
          "object-fit": "fill"
        },
        ".object-none": {
          "object-fit": "none"
        },
        ".object-scale-down": {
          "object-fit": "scale-down"
        }
      });
    },
    objectPosition: v("objectPosition", [
      [
        "object",
        [
          "object-position"
        ]
      ]
    ]),
    padding: v("padding", [
      [
        "p",
        [
          "padding"
        ]
      ],
      [
        [
          "px",
          [
            "padding-left",
            "padding-right"
          ]
        ],
        [
          "py",
          [
            "padding-top",
            "padding-bottom"
          ]
        ]
      ],
      [
        [
          "ps",
          [
            "padding-inline-start"
          ]
        ],
        [
          "pe",
          [
            "padding-inline-end"
          ]
        ],
        [
          "pt",
          [
            "padding-top"
          ]
        ],
        [
          "pr",
          [
            "padding-right"
          ]
        ],
        [
          "pb",
          [
            "padding-bottom"
          ]
        ],
        [
          "pl",
          [
            "padding-left"
          ]
        ]
      ]
    ]),
    textAlign: ({ addUtilities: e }) => {
      e({
        ".text-left": {
          "text-align": "left"
        },
        ".text-center": {
          "text-align": "center"
        },
        ".text-right": {
          "text-align": "right"
        },
        ".text-justify": {
          "text-align": "justify"
        },
        ".text-start": {
          "text-align": "start"
        },
        ".text-end": {
          "text-align": "end"
        }
      });
    },
    textIndent: v("textIndent", [
      [
        "indent",
        [
          "text-indent"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    verticalAlign: ({ addUtilities: e, matchUtilities: t }) => {
      e({
        ".align-baseline": {
          "vertical-align": "baseline"
        },
        ".align-top": {
          "vertical-align": "top"
        },
        ".align-middle": {
          "vertical-align": "middle"
        },
        ".align-bottom": {
          "vertical-align": "bottom"
        },
        ".align-text-top": {
          "vertical-align": "text-top"
        },
        ".align-text-bottom": {
          "vertical-align": "text-bottom"
        },
        ".align-sub": {
          "vertical-align": "sub"
        },
        ".align-super": {
          "vertical-align": "super"
        }
      }), t({
        align: (r) => ({
          "vertical-align": r
        })
      });
    },
    fontFamily: ({ matchUtilities: e, theme: t }) => {
      e({
        font: (r) => {
          let [n2, a = {}] = Array.isArray(r) && H(r[1]) ? r : [
            r
          ], { fontFeatureSettings: i, fontVariationSettings: o2 } = a;
          return {
            "font-family": Array.isArray(n2) ? n2.join(", ") : n2,
            ...i === void 0 ? {} : {
              "font-feature-settings": i
            },
            ...o2 === void 0 ? {} : {
              "font-variation-settings": o2
            }
          };
        }
      }, {
        values: t("fontFamily"),
        type: [
          "lookup",
          "generic-name",
          "family-name"
        ]
      });
    },
    fontSize: ({ matchUtilities: e, theme: t }) => {
      e({
        text: (r, { modifier: n2 }) => {
          let [a, i] = Array.isArray(r) ? r : [
            r
          ];
          if (n2) return {
            "font-size": a,
            "line-height": n2
          };
          let { lineHeight: o2, letterSpacing: s, fontWeight: l2 } = H(i) ? i : {
            lineHeight: i
          };
          return {
            "font-size": a,
            ...o2 === void 0 ? {} : {
              "line-height": o2
            },
            ...s === void 0 ? {} : {
              "letter-spacing": s
            },
            ...l2 === void 0 ? {} : {
              "font-weight": l2
            }
          };
        }
      }, {
        values: t("fontSize"),
        modifiers: t("lineHeight"),
        type: [
          "absolute-size",
          "relative-size",
          "length",
          "percentage"
        ]
      });
    },
    fontWeight: v("fontWeight", [
      [
        "font",
        [
          "fontWeight"
        ]
      ]
    ], {
      type: [
        "lookup",
        "number",
        "any"
      ]
    }),
    textTransform: ({ addUtilities: e }) => {
      e({
        ".uppercase": {
          "text-transform": "uppercase"
        },
        ".lowercase": {
          "text-transform": "lowercase"
        },
        ".capitalize": {
          "text-transform": "capitalize"
        },
        ".normal-case": {
          "text-transform": "none"
        }
      });
    },
    fontStyle: ({ addUtilities: e }) => {
      e({
        ".italic": {
          "font-style": "italic"
        },
        ".not-italic": {
          "font-style": "normal"
        }
      });
    },
    fontVariantNumeric: ({ addDefaults: e, addUtilities: t }) => {
      let r = "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
      e("font-variant-numeric", {
        "--tw-ordinal": " ",
        "--tw-slashed-zero": " ",
        "--tw-numeric-figure": " ",
        "--tw-numeric-spacing": " ",
        "--tw-numeric-fraction": " "
      }), t({
        ".normal-nums": {
          "font-variant-numeric": "normal"
        },
        ".ordinal": {
          "@defaults font-variant-numeric": {},
          "--tw-ordinal": "ordinal",
          "font-variant-numeric": r
        },
        ".slashed-zero": {
          "@defaults font-variant-numeric": {},
          "--tw-slashed-zero": "slashed-zero",
          "font-variant-numeric": r
        },
        ".lining-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-figure": "lining-nums",
          "font-variant-numeric": r
        },
        ".oldstyle-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-figure": "oldstyle-nums",
          "font-variant-numeric": r
        },
        ".proportional-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-spacing": "proportional-nums",
          "font-variant-numeric": r
        },
        ".tabular-nums": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-spacing": "tabular-nums",
          "font-variant-numeric": r
        },
        ".diagonal-fractions": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-fraction": "diagonal-fractions",
          "font-variant-numeric": r
        },
        ".stacked-fractions": {
          "@defaults font-variant-numeric": {},
          "--tw-numeric-fraction": "stacked-fractions",
          "font-variant-numeric": r
        }
      });
    },
    lineHeight: v("lineHeight", [
      [
        "leading",
        [
          "lineHeight"
        ]
      ]
    ]),
    letterSpacing: v("letterSpacing", [
      [
        "tracking",
        [
          "letterSpacing"
        ]
      ]
    ], {
      supportsNegativeValues: true
    }),
    textColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        text: (n2) => r("textOpacity") ? N({
          color: n2,
          property: "color",
          variable: "--tw-text-opacity"
        }) : {
          color: O(n2)
        }
      }, {
        values: I(t("textColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    textOpacity: v("textOpacity", [
      [
        "text-opacity",
        [
          "--tw-text-opacity"
        ]
      ]
    ]),
    textDecoration: ({ addUtilities: e }) => {
      e({
        ".underline": {
          "text-decoration-line": "underline"
        },
        ".overline": {
          "text-decoration-line": "overline"
        },
        ".line-through": {
          "text-decoration-line": "line-through"
        },
        ".no-underline": {
          "text-decoration-line": "none"
        }
      });
    },
    textDecorationColor: ({ matchUtilities: e, theme: t }) => {
      e({
        decoration: (r) => ({
          "text-decoration-color": O(r)
        })
      }, {
        values: I(t("textDecorationColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    textDecorationStyle: ({ addUtilities: e }) => {
      e({
        ".decoration-solid": {
          "text-decoration-style": "solid"
        },
        ".decoration-double": {
          "text-decoration-style": "double"
        },
        ".decoration-dotted": {
          "text-decoration-style": "dotted"
        },
        ".decoration-dashed": {
          "text-decoration-style": "dashed"
        },
        ".decoration-wavy": {
          "text-decoration-style": "wavy"
        }
      });
    },
    textDecorationThickness: v("textDecorationThickness", [
      [
        "decoration",
        [
          "text-decoration-thickness"
        ]
      ]
    ], {
      type: [
        "length",
        "percentage"
      ]
    }),
    textUnderlineOffset: v("textUnderlineOffset", [
      [
        "underline-offset",
        [
          "text-underline-offset"
        ]
      ]
    ], {
      type: [
        "length",
        "percentage",
        "any"
      ]
    }),
    fontSmoothing: ({ addUtilities: e }) => {
      e({
        ".antialiased": {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale"
        },
        ".subpixel-antialiased": {
          "-webkit-font-smoothing": "auto",
          "-moz-osx-font-smoothing": "auto"
        }
      });
    },
    placeholderColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        placeholder: (n2) => r("placeholderOpacity") ? {
          "&::placeholder": N({
            color: n2,
            property: "color",
            variable: "--tw-placeholder-opacity"
          })
        } : {
          "&::placeholder": {
            color: O(n2)
          }
        }
      }, {
        values: I(t("placeholderColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    placeholderOpacity: ({ matchUtilities: e, theme: t }) => {
      e({
        "placeholder-opacity": (r) => ({
          "&::placeholder": {
            "--tw-placeholder-opacity": r
          }
        })
      }, {
        values: t("placeholderOpacity")
      });
    },
    caretColor: ({ matchUtilities: e, theme: t }) => {
      e({
        caret: (r) => ({
          "caret-color": O(r)
        })
      }, {
        values: I(t("caretColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    accentColor: ({ matchUtilities: e, theme: t }) => {
      e({
        accent: (r) => ({
          "accent-color": O(r)
        })
      }, {
        values: I(t("accentColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    opacity: v("opacity", [
      [
        "opacity",
        [
          "opacity"
        ]
      ]
    ]),
    backgroundBlendMode: ({ addUtilities: e }) => {
      e({
        ".bg-blend-normal": {
          "background-blend-mode": "normal"
        },
        ".bg-blend-multiply": {
          "background-blend-mode": "multiply"
        },
        ".bg-blend-screen": {
          "background-blend-mode": "screen"
        },
        ".bg-blend-overlay": {
          "background-blend-mode": "overlay"
        },
        ".bg-blend-darken": {
          "background-blend-mode": "darken"
        },
        ".bg-blend-lighten": {
          "background-blend-mode": "lighten"
        },
        ".bg-blend-color-dodge": {
          "background-blend-mode": "color-dodge"
        },
        ".bg-blend-color-burn": {
          "background-blend-mode": "color-burn"
        },
        ".bg-blend-hard-light": {
          "background-blend-mode": "hard-light"
        },
        ".bg-blend-soft-light": {
          "background-blend-mode": "soft-light"
        },
        ".bg-blend-difference": {
          "background-blend-mode": "difference"
        },
        ".bg-blend-exclusion": {
          "background-blend-mode": "exclusion"
        },
        ".bg-blend-hue": {
          "background-blend-mode": "hue"
        },
        ".bg-blend-saturation": {
          "background-blend-mode": "saturation"
        },
        ".bg-blend-color": {
          "background-blend-mode": "color"
        },
        ".bg-blend-luminosity": {
          "background-blend-mode": "luminosity"
        }
      });
    },
    mixBlendMode: ({ addUtilities: e }) => {
      e({
        ".mix-blend-normal": {
          "mix-blend-mode": "normal"
        },
        ".mix-blend-multiply": {
          "mix-blend-mode": "multiply"
        },
        ".mix-blend-screen": {
          "mix-blend-mode": "screen"
        },
        ".mix-blend-overlay": {
          "mix-blend-mode": "overlay"
        },
        ".mix-blend-darken": {
          "mix-blend-mode": "darken"
        },
        ".mix-blend-lighten": {
          "mix-blend-mode": "lighten"
        },
        ".mix-blend-color-dodge": {
          "mix-blend-mode": "color-dodge"
        },
        ".mix-blend-color-burn": {
          "mix-blend-mode": "color-burn"
        },
        ".mix-blend-hard-light": {
          "mix-blend-mode": "hard-light"
        },
        ".mix-blend-soft-light": {
          "mix-blend-mode": "soft-light"
        },
        ".mix-blend-difference": {
          "mix-blend-mode": "difference"
        },
        ".mix-blend-exclusion": {
          "mix-blend-mode": "exclusion"
        },
        ".mix-blend-hue": {
          "mix-blend-mode": "hue"
        },
        ".mix-blend-saturation": {
          "mix-blend-mode": "saturation"
        },
        ".mix-blend-color": {
          "mix-blend-mode": "color"
        },
        ".mix-blend-luminosity": {
          "mix-blend-mode": "luminosity"
        },
        ".mix-blend-plus-darker": {
          "mix-blend-mode": "plus-darker"
        },
        ".mix-blend-plus-lighter": {
          "mix-blend-mode": "plus-lighter"
        }
      });
    },
    boxShadow: (() => {
      let e = K("boxShadow"), t = [
        "var(--tw-ring-offset-shadow, 0 0 #0000)",
        "var(--tw-ring-shadow, 0 0 #0000)",
        "var(--tw-shadow)"
      ].join(", ");
      return function({ matchUtilities: r, addDefaults: n2, theme: a }) {
        n2("box-shadow", {
          "--tw-ring-offset-shadow": "0 0 #0000",
          "--tw-ring-shadow": "0 0 #0000",
          "--tw-shadow": "0 0 #0000",
          "--tw-shadow-colored": "0 0 #0000"
        }), r({
          shadow: (i) => {
            i = e(i);
            let o2 = De(i);
            for (let s of o2) s.valid && (s.color = "var(--tw-shadow-color)");
            return {
              "@defaults box-shadow": {},
              "--tw-shadow": i === "none" ? "0 0 #0000" : i,
              "--tw-shadow-colored": i === "none" ? "0 0 #0000" : ar(o2),
              "box-shadow": t
            };
          }
        }, {
          values: a("boxShadow"),
          type: [
            "shadow"
          ]
        });
      };
    })(),
    boxShadowColor: ({ matchUtilities: e, theme: t }) => {
      e({
        shadow: (r) => ({
          "--tw-shadow-color": O(r),
          "--tw-shadow": "var(--tw-shadow-colored)"
        })
      }, {
        values: I(t("boxShadowColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    outlineStyle: ({ addUtilities: e }) => {
      e({
        ".outline-none": {
          outline: "2px solid transparent",
          "outline-offset": "2px"
        },
        ".outline": {
          "outline-style": "solid"
        },
        ".outline-dashed": {
          "outline-style": "dashed"
        },
        ".outline-dotted": {
          "outline-style": "dotted"
        },
        ".outline-double": {
          "outline-style": "double"
        }
      });
    },
    outlineWidth: v("outlineWidth", [
      [
        "outline",
        [
          "outline-width"
        ]
      ]
    ], {
      type: [
        "length",
        "number",
        "percentage"
      ]
    }),
    outlineOffset: v("outlineOffset", [
      [
        "outline-offset",
        [
          "outline-offset"
        ]
      ]
    ], {
      type: [
        "length",
        "number",
        "percentage",
        "any"
      ],
      supportsNegativeValues: true
    }),
    outlineColor: ({ matchUtilities: e, theme: t }) => {
      e({
        outline: (r) => ({
          "outline-color": O(r)
        })
      }, {
        values: I(t("outlineColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    ringWidth: ({ matchUtilities: e, addDefaults: t, addUtilities: r, theme: n2, config: a }) => {
      let i = (() => {
        var _a2, _b;
        if (P(a(), "respectDefaultRingColorOpacity")) return n2("ringColor.DEFAULT");
        let o2 = n2("ringOpacity.DEFAULT", "0.5");
        return ((_a2 = n2("ringColor")) == null ? void 0 : _a2.DEFAULT) ? re((_b = n2("ringColor")) == null ? void 0 : _b.DEFAULT, o2, `rgb(147 197 253 / ${o2})`) : `rgb(147 197 253 / ${o2})`;
      })();
      t("ring-width", {
        "--tw-ring-inset": " ",
        "--tw-ring-offset-width": n2("ringOffsetWidth.DEFAULT", "0px"),
        "--tw-ring-offset-color": n2("ringOffsetColor.DEFAULT", "#fff"),
        "--tw-ring-color": i,
        "--tw-ring-offset-shadow": "0 0 #0000",
        "--tw-ring-shadow": "0 0 #0000",
        "--tw-shadow": "0 0 #0000",
        "--tw-shadow-colored": "0 0 #0000"
      }), e({
        ring: (o2) => ({
          "@defaults ring-width": {},
          "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
          "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${o2} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
          "box-shadow": [
            "var(--tw-ring-offset-shadow)",
            "var(--tw-ring-shadow)",
            "var(--tw-shadow, 0 0 #0000)"
          ].join(", ")
        })
      }, {
        values: n2("ringWidth"),
        type: "length"
      }), r({
        ".ring-inset": {
          "@defaults ring-width": {},
          "--tw-ring-inset": "inset"
        }
      });
    },
    ringColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
      e({
        ring: (n2) => r("ringOpacity") ? N({
          color: n2,
          property: "--tw-ring-color",
          variable: "--tw-ring-opacity"
        }) : {
          "--tw-ring-color": O(n2)
        }
      }, {
        values: Object.fromEntries(Object.entries(I(t("ringColor"))).filter(([n2]) => n2 !== "DEFAULT")),
        type: [
          "color",
          "any"
        ]
      });
    },
    ringOpacity: (e) => {
      let { config: t } = e;
      return v("ringOpacity", [
        [
          "ring-opacity",
          [
            "--tw-ring-opacity"
          ]
        ]
      ], {
        filterDefault: !P(t(), "respectDefaultRingColorOpacity")
      })(e);
    },
    ringOffsetWidth: v("ringOffsetWidth", [
      [
        "ring-offset",
        [
          "--tw-ring-offset-width"
        ]
      ]
    ], {
      type: "length"
    }),
    ringOffsetColor: ({ matchUtilities: e, theme: t }) => {
      e({
        "ring-offset": (r) => ({
          "--tw-ring-offset-color": O(r)
        })
      }, {
        values: I(t("ringOffsetColor")),
        type: [
          "color",
          "any"
        ]
      });
    },
    blur: ({ matchUtilities: e, theme: t }) => {
      e({
        blur: (r) => ({
          "--tw-blur": r.trim() === "" ? " " : `blur(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("blur")
      });
    },
    brightness: ({ matchUtilities: e, theme: t }) => {
      e({
        brightness: (r) => ({
          "--tw-brightness": `brightness(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("brightness")
      });
    },
    contrast: ({ matchUtilities: e, theme: t }) => {
      e({
        contrast: (r) => ({
          "--tw-contrast": `contrast(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("contrast")
      });
    },
    dropShadow: ({ matchUtilities: e, theme: t }) => {
      e({
        "drop-shadow": (r) => ({
          "--tw-drop-shadow": Array.isArray(r) ? r.map((n2) => `drop-shadow(${n2})`).join(" ") : `drop-shadow(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("dropShadow")
      });
    },
    grayscale: ({ matchUtilities: e, theme: t }) => {
      e({
        grayscale: (r) => ({
          "--tw-grayscale": `grayscale(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("grayscale")
      });
    },
    hueRotate: ({ matchUtilities: e, theme: t }) => {
      e({
        "hue-rotate": (r) => ({
          "--tw-hue-rotate": `hue-rotate(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("hueRotate"),
        supportsNegativeValues: true
      });
    },
    invert: ({ matchUtilities: e, theme: t }) => {
      e({
        invert: (r) => ({
          "--tw-invert": `invert(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("invert")
      });
    },
    saturate: ({ matchUtilities: e, theme: t }) => {
      e({
        saturate: (r) => ({
          "--tw-saturate": `saturate(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("saturate")
      });
    },
    sepia: ({ matchUtilities: e, theme: t }) => {
      e({
        sepia: (r) => ({
          "--tw-sepia": `sepia(${r})`,
          "@defaults filter": {},
          filter: q
        })
      }, {
        values: t("sepia")
      });
    },
    filter: ({ addDefaults: e, addUtilities: t }) => {
      e("filter", {
        "--tw-blur": " ",
        "--tw-brightness": " ",
        "--tw-contrast": " ",
        "--tw-grayscale": " ",
        "--tw-hue-rotate": " ",
        "--tw-invert": " ",
        "--tw-saturate": " ",
        "--tw-sepia": " ",
        "--tw-drop-shadow": " "
      }), t({
        ".filter": {
          "@defaults filter": {},
          filter: q
        },
        ".filter-none": {
          filter: "none"
        }
      });
    },
    backdropBlur: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-blur": (r) => ({
          "--tw-backdrop-blur": r.trim() === "" ? " " : `blur(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropBlur")
      });
    },
    backdropBrightness: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-brightness": (r) => ({
          "--tw-backdrop-brightness": `brightness(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropBrightness")
      });
    },
    backdropContrast: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-contrast": (r) => ({
          "--tw-backdrop-contrast": `contrast(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropContrast")
      });
    },
    backdropGrayscale: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-grayscale": (r) => ({
          "--tw-backdrop-grayscale": `grayscale(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropGrayscale")
      });
    },
    backdropHueRotate: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-hue-rotate": (r) => ({
          "--tw-backdrop-hue-rotate": `hue-rotate(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropHueRotate"),
        supportsNegativeValues: true
      });
    },
    backdropInvert: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-invert": (r) => ({
          "--tw-backdrop-invert": `invert(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropInvert")
      });
    },
    backdropOpacity: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-opacity": (r) => ({
          "--tw-backdrop-opacity": `opacity(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropOpacity")
      });
    },
    backdropSaturate: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-saturate": (r) => ({
          "--tw-backdrop-saturate": `saturate(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropSaturate")
      });
    },
    backdropSepia: ({ matchUtilities: e, theme: t }) => {
      e({
        "backdrop-sepia": (r) => ({
          "--tw-backdrop-sepia": `sepia(${r})`,
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        })
      }, {
        values: t("backdropSepia")
      });
    },
    backdropFilter: ({ addDefaults: e, addUtilities: t }) => {
      e("backdrop-filter", {
        "--tw-backdrop-blur": " ",
        "--tw-backdrop-brightness": " ",
        "--tw-backdrop-contrast": " ",
        "--tw-backdrop-grayscale": " ",
        "--tw-backdrop-hue-rotate": " ",
        "--tw-backdrop-invert": " ",
        "--tw-backdrop-opacity": " ",
        "--tw-backdrop-saturate": " ",
        "--tw-backdrop-sepia": " "
      }), t({
        ".backdrop-filter": {
          "@defaults backdrop-filter": {},
          "-webkit-backdrop-filter": j,
          "backdrop-filter": j
        },
        ".backdrop-filter-none": {
          "-webkit-backdrop-filter": "none",
          "backdrop-filter": "none"
        }
      });
    },
    transitionProperty: ({ matchUtilities: e, theme: t }) => {
      let r = t("transitionTimingFunction.DEFAULT"), n2 = t("transitionDuration.DEFAULT");
      e({
        transition: (a) => ({
          "transition-property": a,
          ...a === "none" ? {} : {
            "transition-timing-function": r,
            "transition-duration": n2
          }
        })
      }, {
        values: t("transitionProperty")
      });
    },
    transitionDelay: v("transitionDelay", [
      [
        "delay",
        [
          "transitionDelay"
        ]
      ]
    ]),
    transitionDuration: v("transitionDuration", [
      [
        "duration",
        [
          "transitionDuration"
        ]
      ]
    ], {
      filterDefault: true
    }),
    transitionTimingFunction: v("transitionTimingFunction", [
      [
        "ease",
        [
          "transitionTimingFunction"
        ]
      ]
    ], {
      filterDefault: true
    }),
    willChange: v("willChange", [
      [
        "will-change",
        [
          "will-change"
        ]
      ]
    ]),
    contain: ({ addDefaults: e, addUtilities: t }) => {
      let r = "var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)";
      e("contain", {
        "--tw-contain-size": " ",
        "--tw-contain-layout": " ",
        "--tw-contain-paint": " ",
        "--tw-contain-style": " "
      }), t({
        ".contain-none": {
          contain: "none"
        },
        ".contain-content": {
          contain: "content"
        },
        ".contain-strict": {
          contain: "strict"
        },
        ".contain-size": {
          "@defaults contain": {},
          "--tw-contain-size": "size",
          contain: r
        },
        ".contain-inline-size": {
          "@defaults contain": {},
          "--tw-contain-size": "inline-size",
          contain: r
        },
        ".contain-layout": {
          "@defaults contain": {},
          "--tw-contain-layout": "layout",
          contain: r
        },
        ".contain-paint": {
          "@defaults contain": {},
          "--tw-contain-paint": "paint",
          contain: r
        },
        ".contain-style": {
          "@defaults contain": {},
          "--tw-contain-style": "style",
          contain: r
        }
      });
    },
    content: v("content", [
      [
        "content",
        [
          "--tw-content",
          [
            "content",
            "var(--tw-content)"
          ]
        ]
      ]
    ]),
    forcedColorAdjust: ({ addUtilities: e }) => {
      e({
        ".forced-color-adjust-auto": {
          "forced-color-adjust": "auto"
        },
        ".forced-color-adjust-none": {
          "forced-color-adjust": "none"
        }
      });
    }
  };
  function Oe(e) {
    if (Array.isArray(e)) return e;
    let t = e.split("[").length - 1, r = e.split("]").length - 1;
    if (t !== r) throw new Error(`Path is invalid. Has unbalanced brackets: ${e}`);
    return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
  var Nr = /* @__PURE__ */ new Map([
    [
      "{",
      "}"
    ],
    [
      "[",
      "]"
    ],
    [
      "(",
      ")"
    ]
  ]), Vr = new Map(Array.from(Nr.entries()).map(([e, t]) => [
    t,
    e
  ])), $a = /* @__PURE__ */ new Set([
    '"',
    "'",
    "`"
  ]);
  function be(e) {
    let t = [], r = false;
    for (let n2 = 0; n2 < e.length; n2++) {
      let a = e[n2];
      if (a === ":" && !r && t.length === 0) return false;
      if ($a.has(a) && e[n2 - 1] !== "\\" && (r = !r), !r && e[n2 - 1] !== "\\") {
        if (Nr.has(a)) t.push(a);
        else if (Vr.has(a)) {
          let i = Vr.get(a);
          if (t.length <= 0 || t.pop() !== i) return false;
        }
      }
    }
    return !(t.length > 0);
  }
  function Ge(e) {
    return (e > 0n) - (e < 0n);
  }
  function Dr(e, t) {
    let r = 0n, n2 = 0n;
    for (let [a, i] of t) e & a && (r = r | a, n2 = n2 | i);
    return e & ~r | n2;
  }
  var He = class {
    constructor() {
      this.offsets = {
        defaults: 0n,
        base: 0n,
        components: 0n,
        utilities: 0n,
        variants: 0n,
        user: 0n
      }, this.layerPositions = {
        defaults: 0n,
        base: 1n,
        components: 2n,
        utilities: 3n,
        user: 4n,
        variants: 5n
      }, this.reservedVariantBits = 0n, this.variantOffsets = /* @__PURE__ */ new Map();
    }
    create(t) {
      return {
        layer: t,
        parentLayer: t,
        arbitrary: 0n,
        variants: 0n,
        parallelIndex: 0n,
        index: this.offsets[t]++,
        propertyOffset: 0n,
        property: "",
        options: []
      };
    }
    arbitraryProperty(t) {
      return {
        ...this.create("utilities"),
        arbitrary: 1n,
        property: t
      };
    }
    forVariant(t, r = 0) {
      let n2 = this.variantOffsets.get(t);
      if (n2 === void 0) throw new Error(`Cannot find offset for unknown variant ${t}`);
      return {
        ...this.create("variants"),
        variants: n2 << BigInt(r)
      };
    }
    applyVariantOffset(t, r, n2) {
      return n2.variant = r.variants, {
        ...t,
        layer: "variants",
        parentLayer: t.layer === "variants" ? t.parentLayer : t.layer,
        variants: t.variants | r.variants,
        options: n2.sort ? [].concat(n2, t.options) : t.options,
        parallelIndex: Pr([
          t.parallelIndex,
          r.parallelIndex
        ])
      };
    }
    applyParallelOffset(t, r) {
      return {
        ...t,
        parallelIndex: BigInt(r)
      };
    }
    recordVariants(t, r) {
      for (let n2 of t) this.recordVariant(n2, r(n2));
    }
    recordVariant(t, r = 1) {
      return this.variantOffsets.set(t, 1n << this.reservedVariantBits), this.reservedVariantBits += BigInt(r), {
        ...this.create("variants"),
        variants: this.variantOffsets.get(t)
      };
    }
    compare(t, r) {
      if (t.layer !== r.layer) return this.layerPositions[t.layer] - this.layerPositions[r.layer];
      if (t.parentLayer !== r.parentLayer) return this.layerPositions[t.parentLayer] - this.layerPositions[r.parentLayer];
      for (let n2 of t.options) for (let a of r.options) {
        if (n2.id !== a.id || !n2.sort || !a.sort) continue;
        let i = Pr([
          n2.variant,
          a.variant
        ]) ?? 0n, o2 = ~(i | i - 1n), s = t.variants & o2, l2 = r.variants & o2;
        if (s !== l2) continue;
        let p2 = n2.sort({
          value: n2.value,
          modifier: n2.modifier
        }, {
          value: a.value,
          modifier: a.modifier
        });
        if (p2 !== 0) return p2;
      }
      return t.variants !== r.variants ? t.variants - r.variants : t.parallelIndex !== r.parallelIndex ? t.parallelIndex - r.parallelIndex : t.arbitrary !== r.arbitrary ? t.arbitrary - r.arbitrary : t.propertyOffset !== r.propertyOffset ? t.propertyOffset - r.propertyOffset : t.index - r.index;
    }
    recalculateVariantOffsets() {
      let t = Array.from(this.variantOffsets.entries()).filter(([a]) => a.startsWith("[")).sort(([a], [i]) => Oa(a, i)), r = t.map(([, a]) => a).sort((a, i) => Ge(a - i));
      return t.map(([, a], i) => [
        a,
        r[i]
      ]).filter(([a, i]) => a !== i);
    }
    remapArbitraryVariantOffsets(t) {
      let r = this.recalculateVariantOffsets();
      return r.length === 0 ? t : t.map((n2) => {
        let [a, i] = n2;
        return a = {
          ...a,
          variants: Dr(a.variants, r)
        }, [
          a,
          i
        ];
      });
    }
    sortArbitraryProperties(t) {
      let r = /* @__PURE__ */ new Set();
      for (let [o2] of t) o2.arbitrary === 1n && r.add(o2.property);
      if (r.size === 0) return t;
      let n2 = Array.from(r).sort(), a = /* @__PURE__ */ new Map(), i = 1n;
      for (let o2 of n2) a.set(o2, i++);
      return t.map((o2) => {
        let [s, l2] = o2;
        return s = {
          ...s,
          propertyOffset: a.get(s.property) ?? 0n
        }, [
          s,
          l2
        ];
      });
    }
    sort(t) {
      return t = this.remapArbitraryVariantOffsets(t), t = this.sortArbitraryProperties(t), t.sort(([r], [n2]) => Ge(this.compare(r, n2)));
    }
  };
  function Pr(e) {
    let t = null;
    for (let r of e) t = t ?? r, t = t > r ? t : r;
    return t;
  }
  function Oa(e, t) {
    let r = e.length, n2 = t.length, a = r < n2 ? r : n2;
    for (let i = 0; i < a; i++) {
      let o2 = e.charCodeAt(i) - t.charCodeAt(i);
      if (o2 !== 0) return o2;
    }
    return r - n2;
  }
  var oe = Symbol(), Ct = {
    MatchVariant: Symbol.for("MATCH_VARIANT")
  }, $t = {
    Base: 1,
    Dynamic: 2
  };
  function At(e, t) {
    let r = e.tailwindConfig.prefix;
    return typeof r == "function" ? r(t) : r + t;
  }
  function Rr({ type: e = "any", ...t }) {
    let r = [].concat(e);
    return {
      ...t,
      types: r.map((n2) => Array.isArray(n2) ? {
        type: n2[0],
        ...n2[1]
      } : {
        type: n2,
        preferOnConflict: false
      })
    };
  }
  function Ma(e) {
    let t = [], r = "", n2 = 0;
    for (let a = 0; a < e.length; a++) {
      let i = e[a];
      if (i === "\\") r += "\\" + e[++a];
      else if (i === "{") ++n2, t.push(r.trim()), r = "";
      else if (i === "}") {
        if (--n2 < 0) throw new Error("Your { and } are unbalanced.");
        t.push(r.trim()), r = "";
      } else r += i;
    }
    return r.length > 0 && t.push(r.trim()), t = t.filter((a) => a !== ""), t;
  }
  function ja(e, t, { before: r = [] } = {}) {
    if (r = [].concat(r), r.length <= 0) {
      e.push(t);
      return;
    }
    let n2 = e.length - 1;
    for (let a of r) {
      let i = e.indexOf(a);
      i !== -1 && (n2 = Math.min(n2, i));
    }
    e.splice(n2, 0, t);
  }
  function zr(e) {
    return Array.isArray(e) ? e.flatMap((t) => !Array.isArray(t) && !H(t) ? t : ce(t)) : zr([
      e
    ]);
  }
  function Ta(e, t) {
    return Pu((n2) => {
      let a = [];
      return t && t(n2), n2.walkClasses((i) => {
        a.push(i.value);
      }), a;
    }).transformSync(e);
  }
  function Ia(e) {
    e.walkPseudos((t) => {
      t.value === ":not" && t.remove();
    });
  }
  function Va(e, t = {
    containsNonOnDemandable: false
  }, r = 0) {
    let n2 = [], a = [];
    e.type === "rule" ? a.push(...e.selectors) : e.type === "atrule" && e.walkRules((i) => a.push(...i.selectors));
    for (let i of a) {
      let o2 = Ta(i, Ia);
      o2.length === 0 && (t.containsNonOnDemandable = true);
      for (let s of o2) n2.push(s);
    }
    return r === 0 ? [
      t.containsNonOnDemandable || n2.length === 0,
      n2
    ] : n2;
  }
  function qe(e) {
    return zr(e).flatMap((t) => {
      let r = /* @__PURE__ */ new Map(), [n2, a] = Va(t);
      return n2 && a.unshift(X), a.map((i) => (r.has(t) || r.set(t, t), [
        i,
        r.get(t)
      ]));
    });
  }
  function Ye(e) {
    return e.startsWith("@") || e.includes("&");
  }
  function Ee(e) {
    e = e.replace(/\n+/g, "").replace(/\s{1,}/g, " ").trim();
    let t = Ma(e).map((r) => {
      if (!r.startsWith("@")) return ({ format: i }) => i(r);
      let [, n2, a] = /@(\S*)( .+|[({].*)?/g.exec(r);
      return ({ wrap: i }) => i(F.atRule({
        name: n2,
        params: (a == null ? void 0 : a.trim()) ?? ""
      }));
    }).reverse();
    return (r) => {
      for (let n2 of t) n2(r);
    };
  }
  function Na(e, t, { variantList: r, variantMap: n2, offsets: a, classList: i }) {
    function o2(u2, m2) {
      return u2 ? x$1(e, u2, m2) : e;
    }
    function s(u2) {
      return pe(e.prefix, u2);
    }
    function l2(u2, m2) {
      return u2 === X ? X : m2.respectPrefix ? t.tailwindConfig.prefix + u2 : u2;
    }
    function p2(u2, m2, h = {}) {
      let b = Oe(u2), c = o2([
        "theme",
        ...b
      ], m2);
      return K(b[0])(c, h);
    }
    let g2 = 0, f2 = {
      postcss: F,
      prefix: s,
      e: R,
      config: o2,
      theme: p2,
      corePlugins: (u2) => Array.isArray(e.corePlugins) ? e.corePlugins.includes(u2) : o2([
        "corePlugins",
        u2
      ], true),
      variants: () => [],
      addBase(u2) {
        for (let [m2, h] of qe(u2)) {
          let b = l2(m2, {}), c = a.create("base");
          t.candidateRuleMap.has(b) || t.candidateRuleMap.set(b, []), t.candidateRuleMap.get(b).push([
            {
              sort: c,
              layer: "base"
            },
            h
          ]);
        }
      },
      addDefaults(u2, m2) {
        let h = {
          [`@defaults ${u2}`]: m2
        };
        for (let [b, c] of qe(h)) {
          let d = l2(b, {});
          t.candidateRuleMap.has(d) || t.candidateRuleMap.set(d, []), t.candidateRuleMap.get(d).push([
            {
              sort: a.create("defaults"),
              layer: "defaults"
            },
            c
          ]);
        }
      },
      addComponents(u2, m2) {
        m2 = Object.assign({}, {
          preserveSource: false,
          respectPrefix: true,
          respectImportant: false
        }, Array.isArray(m2) ? {} : m2);
        for (let [b, c] of qe(u2)) {
          let d = l2(b, m2);
          i.add(d), t.candidateRuleMap.has(d) || t.candidateRuleMap.set(d, []), t.candidateRuleMap.get(d).push([
            {
              sort: a.create("components"),
              layer: "components",
              options: m2
            },
            c
          ]);
        }
      },
      addUtilities(u2, m2) {
        m2 = Object.assign({}, {
          preserveSource: false,
          respectPrefix: true,
          respectImportant: true
        }, Array.isArray(m2) ? {} : m2);
        for (let [b, c] of qe(u2)) {
          let d = l2(b, m2);
          i.add(d), t.candidateRuleMap.has(d) || t.candidateRuleMap.set(d, []), t.candidateRuleMap.get(d).push([
            {
              sort: a.create("utilities"),
              layer: "utilities",
              options: m2
            },
            c
          ]);
        }
      },
      matchUtilities: function(u2, m2) {
        m2 = Rr({
          ...{
            respectPrefix: true,
            respectImportant: true,
            modifiers: false
          },
          ...m2
        });
        let b = a.create("utilities");
        for (let c in u2) {
          let w2 = function(k, { isOnlyPlugin: S }) {
            let [C, A, D] = ht(m2.types, k, m2, e);
            if (C === void 0) return [];
            if (!m2.types.some(({ type: V2 }) => V2 === A)) if (S) M.warn([
              `Unnecessary typehint \`${A}\` in \`${c}-${k}\`.`,
              `You can safely update it to \`${c}-${k.replace(A + ":", "")}\`.`
            ]);
            else return [];
            if (!be(C)) return [];
            let Y = {
              get modifier() {
                return m2.modifiers || M.warn(`modifier-used-without-options-for-${c}`, [
                  "Your plugin must set `modifiers: true` in its options to support modifiers."
                ]), D;
              }
            }, U = P(e, "generalizedModifiers");
            return [].concat(U ? y(C, Y) : y(C)).filter(Boolean).map((V2) => ({
              [_e(c, k)]: V2
            }));
          }, d = l2(c, m2), y = u2[c];
          i.add([
            d,
            m2
          ]);
          let x2 = [
            {
              sort: b,
              layer: "utilities",
              options: m2
            },
            w2
          ];
          t.candidateRuleMap.has(d) || t.candidateRuleMap.set(d, []), t.candidateRuleMap.get(d).push(x2);
        }
      },
      matchComponents: function(u2, m2) {
        m2 = Rr({
          ...{
            respectPrefix: true,
            respectImportant: false,
            modifiers: false
          },
          ...m2
        });
        let b = a.create("components");
        for (let c in u2) {
          let w2 = function(k, { isOnlyPlugin: S }) {
            let [C, A, D] = ht(m2.types, k, m2, e);
            if (C === void 0) return [];
            if (!m2.types.some(({ type: V2 }) => V2 === A)) if (S) M.warn([
              `Unnecessary typehint \`${A}\` in \`${c}-${k}\`.`,
              `You can safely update it to \`${c}-${k.replace(A + ":", "")}\`.`
            ]);
            else return [];
            if (!be(C)) return [];
            let Y = {
              get modifier() {
                return m2.modifiers || M.warn(`modifier-used-without-options-for-${c}`, [
                  "Your plugin must set `modifiers: true` in its options to support modifiers."
                ]), D;
              }
            }, U = P(e, "generalizedModifiers");
            return [].concat(U ? y(C, Y) : y(C)).filter(Boolean).map((V2) => ({
              [_e(c, k)]: V2
            }));
          }, d = l2(c, m2), y = u2[c];
          i.add([
            d,
            m2
          ]);
          let x2 = [
            {
              sort: b,
              layer: "components",
              options: m2
            },
            w2
          ];
          t.candidateRuleMap.has(d) || t.candidateRuleMap.set(d, []), t.candidateRuleMap.get(d).push(x2);
        }
      },
      addVariant(u2, m2, h = {}) {
        m2 = [].concat(m2).map((b) => {
          if (typeof b != "string") return (c = {}) => {
            let { args: d, modifySelectors: y, container: w2, separator: x2, wrap: k, format: S } = c, C = b(Object.assign({
              modifySelectors: y,
              container: w2,
              separator: x2
            }, h.type === Ct.MatchVariant && {
              args: d,
              wrap: k,
              format: S
            }));
            if (typeof C == "string" && !Ye(C)) throw new Error(`Your custom variant \`${u2}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
            return Array.isArray(C) ? C.filter((A) => typeof A == "string").map((A) => Ee(A)) : C && typeof C == "string" && Ee(C)(c);
          };
          if (!Ye(b)) throw new Error(`Your custom variant \`${u2}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
          return Ee(b);
        }), ja(r, u2, h), n2.set(u2, m2), t.variantOptions.set(u2, h);
      },
      matchVariant(u2, m2, h) {
        let b = (h == null ? void 0 : h.id) ?? ++g2, c = u2 === "@", d = P(e, "generalizedModifiers");
        for (let [w2, x2] of Object.entries((h == null ? void 0 : h.values) ?? {})) w2 !== "DEFAULT" && f2.addVariant(c ? `${u2}${w2}` : `${u2}-${w2}`, ({ args: k, container: S }) => m2(x2, d ? {
          modifier: k == null ? void 0 : k.modifier,
          container: S
        } : {
          container: S
        }), {
          ...h,
          value: x2,
          id: b,
          type: Ct.MatchVariant,
          variantInfo: $t.Base
        });
        let y = "DEFAULT" in ((h == null ? void 0 : h.values) ?? {});
        f2.addVariant(u2, ({ args: w2, container: x2 }) => (w2 == null ? void 0 : w2.value) === ke && !y ? null : m2((w2 == null ? void 0 : w2.value) === ke ? h.values.DEFAULT : (w2 == null ? void 0 : w2.value) ?? (typeof w2 == "string" ? w2 : ""), d ? {
          modifier: w2 == null ? void 0 : w2.modifier,
          container: x2
        } : {
          container: x2
        }), {
          ...h,
          id: b,
          type: Ct.MatchVariant,
          variantInfo: $t.Dynamic
        });
      }
    };
    return f2;
  }
  function _r(e) {
    e.walkAtRules((t) => {
      [
        "responsive",
        "variants"
      ].includes(t.name) && (_r(t), t.before(t.nodes), t.remove());
    });
  }
  function Da(e) {
    let t = [];
    return e.each((r) => {
      r.type === "atrule" && [
        "responsive",
        "variants"
      ].includes(r.name) && (r.name = "layer", r.params = "utilities");
    }), e.walkAtRules("layer", (r) => {
      if (_r(r), r.params === "base") {
        for (let n2 of r.nodes) t.push(function({ addBase: a }) {
          a(n2, {
            respectPrefix: false
          });
        });
        r.remove();
      } else if (r.params === "components") {
        for (let n2 of r.nodes) t.push(function({ addComponents: a }) {
          a(n2, {
            respectPrefix: false,
            preserveSource: true
          });
        });
        r.remove();
      } else if (r.params === "utilities") {
        for (let n2 of r.nodes) t.push(function({ addUtilities: a }) {
          a(n2, {
            respectPrefix: false,
            preserveSource: true
          });
        });
        r.remove();
      }
    }), t;
  }
  function Pa(e, t) {
    let r = Object.entries({
      ...E,
      ...Ir
    }).map(([l2, p2]) => e.tailwindConfig.corePlugins.includes(l2) ? p2 : null).filter(Boolean), n2 = e.tailwindConfig.plugins.map((l2) => (l2.__isOptionsFunction && (l2 = l2()), typeof l2 == "function" ? l2 : l2.handler)), a = Da(t), i = [
      E.childVariant,
      E.pseudoElementVariants,
      E.pseudoClassVariants,
      E.hasVariants,
      E.ariaVariants,
      E.dataVariants
    ], o2 = [
      E.supportsVariants,
      E.reducedMotionVariants,
      E.prefersContrastVariants,
      E.screenVariants,
      E.orientationVariants,
      E.directionVariants,
      E.darkVariants,
      E.forcedColorsVariants,
      E.printVariant
    ];
    return (e.tailwindConfig.darkMode === "class" || Array.isArray(e.tailwindConfig.darkMode) && e.tailwindConfig.darkMode[0] === "class") && (o2 = [
      E.supportsVariants,
      E.reducedMotionVariants,
      E.prefersContrastVariants,
      E.darkVariants,
      E.screenVariants,
      E.orientationVariants,
      E.directionVariants,
      E.forcedColorsVariants,
      E.printVariant
    ]), [
      ...r,
      ...i,
      ...n2,
      ...o2,
      ...a
    ];
  }
  function Ra(e, t) {
    let r = [], n2 = /* @__PURE__ */ new Map();
    t.variantMap = n2;
    let a = new He();
    t.offsets = a;
    let i = /* @__PURE__ */ new Set(), o2 = Na(t.tailwindConfig, t, {
      variantList: r,
      variantMap: n2,
      offsets: a,
      classList: i
    });
    for (let g2 of e) if (Array.isArray(g2)) for (let f2 of g2) f2(o2);
    else g2 == null ? void 0 : g2(o2);
    a.recordVariants(r, (g2) => n2.get(g2).length);
    for (let [g2, f2] of n2.entries()) t.variantMap.set(g2, f2.map((u2, m2) => [
      a.forVariant(g2, m2),
      u2
    ]));
    let s = (t.tailwindConfig.safelist ?? []).filter(Boolean);
    if (s.length > 0) {
      let g2 = [];
      for (let f2 of s) {
        if (typeof f2 == "string") {
          t.changedContent.push({
            content: f2,
            extension: "html"
          });
          continue;
        }
        if (f2 instanceof RegExp) {
          M.warn("root-regex", [
            "Regular expressions in `safelist` work differently in Tailwind CSS v3.0.",
            "Update your `safelist` configuration to eliminate this warning.",
            "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
          ]);
          continue;
        }
        g2.push(f2);
      }
      if (g2.length > 0) {
        let f2 = /* @__PURE__ */ new Map(), u2 = t.tailwindConfig.prefix.length, m2 = g2.some((h) => h.pattern.source.includes("!"));
        for (let h of i) {
          let b = Array.isArray(h) ? (() => {
            let [c, d] = h, w2 = Object.keys((d == null ? void 0 : d.values) ?? {}).map((x2) => $e(c, x2));
            return (d == null ? void 0 : d.supportsNegativeValues) && (w2 = [
              ...w2,
              ...w2.map((x2) => "-" + x2)
            ], w2 = [
              ...w2,
              ...w2.map((x2) => x2.slice(0, u2) + "-" + x2.slice(u2))
            ]), d.types.some(({ type: x2 }) => x2 === "color") && (w2 = [
              ...w2,
              ...w2.flatMap((x2) => Object.keys(t.tailwindConfig.theme.opacity).map((k) => `${x2}/${k}`))
            ]), m2 && (d == null ? void 0 : d.respectImportant) && (w2 = [
              ...w2,
              ...w2.map((x2) => "!" + x2)
            ]), w2;
          })() : [
            h
          ];
          for (let c of b) for (let { pattern: d, variants: y = [] } of g2) if (d.lastIndex = 0, f2.has(d) || f2.set(d, 0), !!d.test(c)) {
            f2.set(d, f2.get(d) + 1), t.changedContent.push({
              content: c,
              extension: "html"
            });
            for (let w2 of y) t.changedContent.push({
              content: w2 + t.tailwindConfig.separator + c,
              extension: "html"
            });
          }
        }
        for (let [h, b] of f2.entries()) b === 0 && M.warn([
          `The safelist pattern \`${h}\` doesn't match any Tailwind CSS classes.`,
          "Fix this pattern or remove it from your `safelist` configuration.",
          "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
        ]);
      }
    }
    let l2 = [].concat(t.tailwindConfig.darkMode ?? "media")[1] ?? "dark", p2 = [
      At(t, l2),
      At(t, "group"),
      At(t, "peer")
    ];
    t.getClassOrder = function(f2) {
      let u2 = [
        ...f2
      ].sort((c, d) => c === d ? 0 : c < d ? -1 : 1), m2 = new Map(u2.map((c) => [
        c,
        null
      ])), h = Xe(new Set(u2), t, true);
      h = t.offsets.sort(h);
      let b = BigInt(p2.length);
      for (let [, c] of h) {
        let d = c.raws.tailwind.candidate;
        m2.set(d, m2.get(d) ?? b++);
      }
      return f2.map((c) => {
        let d = m2.get(c) ?? null, y = p2.indexOf(c);
        return d === null && y !== -1 && (d = BigInt(y)), [
          c,
          d
        ];
      });
    }, t.getClassList = function(f2 = {}) {
      var _a2;
      let u2 = [];
      for (let m2 of i) if (Array.isArray(m2)) {
        let [h, b] = m2, c = [], d = Object.keys((b == null ? void 0 : b.modifiers) ?? {});
        ((_a2 = b == null ? void 0 : b.types) == null ? void 0 : _a2.some(({ type: x2 }) => x2 === "color")) && d.push(...Object.keys(t.tailwindConfig.theme.opacity ?? {}));
        let y = {
          modifiers: d
        }, w2 = f2.includeMetadata && d.length > 0;
        for (let [x2, k] of Object.entries((b == null ? void 0 : b.values) ?? {})) {
          if (k == null) continue;
          let S = $e(h, x2);
          if (u2.push(w2 ? [
            S,
            y
          ] : S), (b == null ? void 0 : b.supportsNegativeValues) && me(k)) {
            let C = $e(h, `-${x2}`);
            c.push(w2 ? [
              C,
              y
            ] : C);
          }
        }
        u2.push(...c);
      } else u2.push(m2);
      return u2;
    }, t.getVariants = function() {
      let f2 = Math.random().toString(36).substring(7).toUpperCase(), u2 = [];
      for (let [m2, h] of t.variantOptions.entries()) h.variantInfo !== $t.Base && u2.push({
        name: m2,
        isArbitrary: h.type === Symbol.for("MATCH_VARIANT"),
        values: Object.keys(h.values ?? {}),
        hasDash: m2 !== "@",
        selectors({ modifier: b, value: c } = {}) {
          var _a2;
          let d = `TAILWINDPLACEHOLDER${f2}`, y = F.rule({
            selector: `.${d}`
          }), w2 = F.root({
            nodes: [
              y.clone()
            ]
          }), x2 = w2.toString(), k = (t.variantMap.get(m2) ?? []).flatMap(([F2, z2]) => z2), S = [];
          for (let F2 of k) {
            let z2 = [], Te = {
              args: {
                modifier: b,
                value: ((_a2 = h.values) == null ? void 0 : _a2[c]) ?? c
              },
              separator: t.tailwindConfig.separator,
              modifySelectors(W) {
                return w2.each((it) => {
                  it.type === "rule" && (it.selectors = it.selectors.map((Zt) => W({
                    get className() {
                      return Ot(Zt);
                    },
                    selector: Zt
                  })));
                }), w2;
              },
              format(W) {
                z2.push(W);
              },
              wrap(W) {
                z2.push(`@${W.name} ${W.params} { & }`);
              },
              container: w2
            }, Ie = F2(Te);
            if (z2.length > 0 && S.push(z2), Array.isArray(Ie)) for (let W of Ie) z2 = [], W(Te), S.push(z2);
          }
          let C = [], A = w2.toString();
          x2 !== A && (w2.walkRules((F2) => {
            let z2 = F2.selector, Te = Pu((Ie) => {
              Ie.walkClasses((W) => {
                W.value = `${m2}${t.tailwindConfig.separator}${W.value}`;
              });
            }).processSync(z2);
            C.push(z2.replace(Te, "&").replace(d, "&"));
          }), w2.walkAtRules((F2) => {
            C.push(`@${F2.name} (${F2.params}) { & }`);
          }));
          let D = !(c in (h.values ?? {})), Y = h[oe] ?? {}, U = !(D || Y.respectPrefix === false);
          S = S.map((F2) => F2.map((z2) => ({
            format: z2,
            respectPrefix: U
          }))), C = C.map((F2) => ({
            format: F2,
            respectPrefix: U
          }));
          let Z = {
            candidate: d,
            context: t
          }, V2 = S.map((F2) => ze(`.${d}`, he(F2, Z), Z).replace(`.${d}`, "&").replace("{ & }", "").trim());
          return C.length > 0 && V2.push(he(C, Z).toString().replace(`.${d}`, "&")), V2;
        }
      });
      return u2;
    };
  }
  function Lr(e, t) {
    e.classCache.has(t) && (e.notClassCache.add(t), e.classCache.delete(t), e.applyClassCache.delete(t), e.candidateRuleMap.delete(t), e.candidateRuleCache.delete(t), e.stylesheetCache = null);
  }
  function Fa(e, t) {
    let r = t.raws.tailwind.candidate;
    if (r) {
      for (let n2 of e.ruleCache) n2[1].raws.tailwind.candidate === r && e.ruleCache.delete(n2);
      Lr(e, r);
    }
  }
  function Ur(e, t = [], r = F.root()) {
    let n2 = {
      disposables: [],
      ruleCache: /* @__PURE__ */ new Set(),
      candidateRuleCache: /* @__PURE__ */ new Map(),
      classCache: /* @__PURE__ */ new Map(),
      applyClassCache: /* @__PURE__ */ new Map(),
      notClassCache: new Set(e.blocklist ?? []),
      postCssNodeCache: /* @__PURE__ */ new Map(),
      candidateRuleMap: /* @__PURE__ */ new Map(),
      tailwindConfig: e,
      changedContent: t,
      variantMap: /* @__PURE__ */ new Map(),
      stylesheetCache: null,
      variantOptions: /* @__PURE__ */ new Map(),
      markInvalidUtilityCandidate: (i) => Lr(n2, i),
      markInvalidUtilityNode: (i) => Fa(n2, i)
    }, a = Pa(n2, r);
    return Ra(a, n2), n2;
  }
  function Qe(e, t) {
    let r = Pu().astSync(e);
    return r.each((n2) => {
      n2.nodes.some((i) => i.type === "combinator") && (n2.nodes = [
        Pu.pseudo({
          value: ":is",
          nodes: [
            n2.clone()
          ]
        })
      ]), ge(n2);
    }), `${t} ${r.toString()}`;
  }
  var za = Pu((e) => e.first.filter(({ type: t }) => t === "class").pop().value);
  function Ot(e) {
    return za.transformSync(e);
  }
  function* _a(e) {
    let t = 1 / 0;
    for (; t >= 0; ) {
      let r, n2 = false;
      if (t === 1 / 0 && e.endsWith("]")) {
        let o2 = e.indexOf("[");
        e[o2 - 1] === "-" ? r = o2 - 1 : e[o2 - 1] === "/" ? (r = o2 - 1, n2 = true) : r = -1;
      } else t === 1 / 0 && e.includes("/") ? (r = e.lastIndexOf("/"), n2 = true) : r = e.lastIndexOf("-", t);
      if (r < 0) break;
      let a = e.slice(0, r), i = e.slice(n2 ? r : r + 1);
      t = r - 1, !(a === "" || i === "/") && (yield [
        a,
        i
      ]);
    }
  }
  function La(e, t) {
    if (e.length === 0 || t.tailwindConfig.prefix === "") return e;
    for (let r of e) {
      let [n2] = r;
      if (n2.options.respectPrefix) {
        let a = F.root({
          nodes: [
            r[1].clone()
          ]
        }), i = r[1].raws.tailwind.classCandidate;
        a.walkRules((o2) => {
          let s = i.startsWith("-");
          o2.selector = pe(t.tailwindConfig.prefix, o2.selector, s);
        }), r[1] = a.nodes[0];
      }
    }
    return e;
  }
  function Ua(e, t) {
    if (e.length === 0) return e;
    let r = [];
    function n2(a) {
      return a.parent && a.parent.type === "atrule" && a.parent.name === "keyframes";
    }
    for (let [a, i] of e) {
      let o2 = F.root({
        nodes: [
          i.clone()
        ]
      });
      o2.walkRules((s) => {
        if (n2(s)) return;
        let l2 = Pu().astSync(s.selector);
        l2.each((p2) => xt(p2, t)), wr(l2, (p2) => p2 === t ? `!${p2}` : p2), s.selector = l2.toString(), s.walkDecls((p2) => p2.important = true);
      }), r.push([
        {
          ...a,
          important: true
        },
        o2.nodes[0]
      ]);
    }
    return r;
  }
  function Wa(e, t, r) {
    var _a2;
    if (t.length === 0) return t;
    let n2 = {
      modifier: null,
      value: ke
    };
    {
      let [a, ...i] = T(e, "/");
      if (i.length > 1 && (a = a + "/" + i.slice(0, -1).join("/"), i = i.slice(-1)), i.length && !r.variantMap.has(e) && (e = a, n2.modifier = i[0], !P(r.tailwindConfig, "generalizedModifiers"))) return [];
    }
    if (e.endsWith("]") && !e.startsWith("[")) {
      let a = /(.)(-?)\[(.*)\]/g.exec(e);
      if (a) {
        let [, i, o2, s] = a;
        if (i === "@" && o2 === "-") return [];
        if (i !== "@" && o2 === "") return [];
        e = e.replace(`${o2}[${s}]`, ""), n2.value = s;
      }
    }
    if (Mt(e) && !r.variantMap.has(e)) {
      let a = r.offsets.recordVariant(e), i = $(e.slice(1, -1)), o2 = T(i, ",");
      if (o2.length > 1) return [];
      if (!o2.every(Ye)) return [];
      let s = o2.map((l2, p2) => [
        r.offsets.applyParallelOffset(a, p2),
        Ee(l2.trim())
      ]);
      r.variantMap.set(e, s);
    }
    if (r.variantMap.has(e)) {
      let a = Mt(e), i = ((_a2 = r.variantOptions.get(e)) == null ? void 0 : _a2[oe]) ?? {}, o2 = r.variantMap.get(e).slice(), s = [], l2 = !(a || i.respectPrefix === false);
      for (let [p2, g2] of t) {
        if (p2.layer === "user") continue;
        let f2 = F.root({
          nodes: [
            g2.clone()
          ]
        });
        for (let [u2, m2, h] of o2) {
          let d = function() {
            b.raws.neededBackup || (b.raws.neededBackup = true, b.walkRules((k) => k.raws.originalSelector = k.selector));
          }, y = function(k) {
            return d(), b.each((S) => {
              S.type === "rule" && (S.selectors = S.selectors.map((C) => k({
                get className() {
                  return Ot(C);
                },
                selector: C
              })));
            }), b;
          }, b = (h ?? f2).clone(), c = [], w2 = m2({
            get container() {
              return d(), b;
            },
            separator: r.tailwindConfig.separator,
            modifySelectors: y,
            wrap(k) {
              let S = b.nodes;
              b.removeAll(), k.append(S), b.append(k);
            },
            format(k) {
              c.push({
                format: k,
                respectPrefix: l2
              });
            },
            args: n2
          });
          if (Array.isArray(w2)) {
            for (let [k, S] of w2.entries()) o2.push([
              r.offsets.applyParallelOffset(u2, k),
              S,
              b.clone()
            ]);
            continue;
          }
          if (typeof w2 == "string" && c.push({
            format: w2,
            respectPrefix: l2
          }), w2 === null) continue;
          b.raws.neededBackup && (delete b.raws.neededBackup, b.walkRules((k) => {
            let S = k.raws.originalSelector;
            if (!S || (delete k.raws.originalSelector, S === k.selector)) return;
            let C = k.selector, A = Pu((D) => {
              D.walkClasses((Y) => {
                Y.value = `${e}${r.tailwindConfig.separator}${Y.value}`;
              });
            }).processSync(S);
            c.push({
              format: C.replace(A, "&"),
              respectPrefix: l2
            }), k.selector = S;
          })), b.nodes[0].raws.tailwind = {
            ...b.nodes[0].raws.tailwind,
            parentLayer: p2.layer
          };
          let x2 = [
            {
              ...p2,
              sort: r.offsets.applyVariantOffset(p2.sort, u2, Object.assign(n2, r.variantOptions.get(e))),
              collectedFormats: (p2.collectedFormats ?? []).concat(c)
            },
            b.nodes[0]
          ];
          s.push(x2);
        }
      }
      return s;
    }
    return [];
  }
  function Et(e, t, r = {}) {
    return !H(e) && !Array.isArray(e) ? [
      [
        e
      ],
      r
    ] : Array.isArray(e) ? Et(e[0], t, e[1]) : (t.has(e) || t.set(e, ce(e)), [
      t.get(e),
      r
    ]);
  }
  var Ba = /^[a-z_-]/;
  function Ga(e) {
    return Ba.test(e);
  }
  function Ha(e) {
    if (!e.includes("://")) return false;
    try {
      let t = new URL(e);
      return t.scheme !== "" && t.host !== "";
    } catch {
      return false;
    }
  }
  function Br(e) {
    let t = true;
    return e.walkDecls((r) => {
      if (!Gr(r.prop, r.value)) return t = false, false;
    }), t;
  }
  function Gr(e, t) {
    if (Ha(`${e}:${t}`)) return false;
    try {
      return F.parse(`a{${e}:${t}}`).toResult(), true;
    } catch {
      return false;
    }
  }
  function qa(e, t) {
    let [, r, n2] = e.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? [];
    if (n2 === void 0 || !Ga(r) || !be(n2)) return null;
    let a = $(n2, {
      property: r
    });
    return Gr(r, a) ? [
      [
        {
          sort: t.offsets.arbitraryProperty(e),
          layer: "utilities",
          options: {
            respectImportant: true
          }
        },
        () => ({
          [kt(e)]: {
            [r]: a
          }
        })
      ]
    ] : null;
  }
  function* Ya(e, t) {
    t.candidateRuleMap.has(e) && (yield [
      t.candidateRuleMap.get(e),
      "DEFAULT"
    ]), yield* function* (s) {
      s !== null && (yield [
        s,
        "DEFAULT"
      ]);
    }(qa(e, t));
    let r = e, n2 = false, a = t.tailwindConfig.prefix, i = a.length, o2 = r.startsWith(a) || r.startsWith(`-${a}`);
    r[i] === "-" && o2 && (n2 = true, r = a + r.slice(i + 1)), n2 && t.candidateRuleMap.has(r) && (yield [
      t.candidateRuleMap.get(r),
      "-DEFAULT"
    ]);
    for (let [s, l2] of _a(r)) t.candidateRuleMap.has(s) && (yield [
      t.candidateRuleMap.get(s),
      n2 ? `-${l2}` : l2
    ]);
  }
  function Xa(e, t) {
    return e === X ? [
      X
    ] : T(e, t);
  }
  function* Qa(e, t) {
    var _a2;
    for (let r of e) r[1].raws.tailwind = {
      ...r[1].raws.tailwind,
      classCandidate: t,
      preserveSource: ((_a2 = r[0].options) == null ? void 0 : _a2.preserveSource) ?? false
    }, yield r;
  }
  function* Tt(e, t) {
    var _a2;
    let r = t.tailwindConfig.separator, [n2, ...a] = Xa(e, r).reverse(), i = false;
    n2.startsWith("!") && (i = true, n2 = n2.slice(1));
    for (let o2 of Ya(n2, t)) {
      let s = [], l2 = /* @__PURE__ */ new Map(), [p2, g2] = o2, f2 = p2.length === 1;
      for (let [u2, m2] of p2) {
        let h = [];
        if (typeof m2 == "function") for (let b of [].concat(m2(g2, {
          isOnlyPlugin: f2
        }))) {
          let [c, d] = Et(b, t.postCssNodeCache);
          for (let y of c) h.push([
            {
              ...u2,
              options: {
                ...u2.options,
                ...d
              }
            },
            y
          ]);
        }
        else if (g2 === "DEFAULT" || g2 === "-DEFAULT") {
          let b = m2, [c, d] = Et(b, t.postCssNodeCache);
          for (let y of c) h.push([
            {
              ...u2,
              options: {
                ...u2.options,
                ...d
              }
            },
            y
          ]);
        }
        if (h.length > 0) {
          let b = Array.from(bt(((_a2 = u2.options) == null ? void 0 : _a2.types) ?? [], g2, u2.options ?? {}, t.tailwindConfig)).map(([c, d]) => d);
          b.length > 0 && l2.set(h, b), s.push(h);
        }
      }
      if (Mt(g2)) {
        if (s.length > 1) {
          let h = function(c) {
            return c.length === 1 ? c[0] : c.find((d) => {
              let y = l2.get(d);
              return d.some(([{ options: w2 }, x2]) => Br(x2) ? w2.types.some(({ type: k, preferOnConflict: S }) => y.includes(k) && S) : false);
            });
          }, [u2, m2] = s.reduce((c, d) => (d.some(([{ options: w2 }]) => w2.types.some(({ type: x2 }) => x2 === "any")) ? c[0].push(d) : c[1].push(d), c), [
            [],
            []
          ]), b = h(m2) ?? h(u2);
          if (b) s = [
            b
          ];
          else {
            let c = s.map((y) => /* @__PURE__ */ new Set([
              ...l2.get(y) ?? []
            ]));
            for (let y of c) for (let w2 of y) {
              let x2 = false;
              for (let k of c) y !== k && k.has(w2) && (k.delete(w2), x2 = true);
              x2 && y.delete(w2);
            }
            let d = [];
            for (let [y, w2] of c.entries()) for (let x2 of w2) {
              let k = s[y].map(([, S]) => S).flat().map((S) => S.toString().split(`
`).slice(1, -1).map((C) => C.trim()).map((C) => `      ${C}`).join(`
`)).join(`

`);
              d.push(`  Use \`${e.replace("[", `[${x2}:`)}\` for \`${k.trim()}\``);
              break;
            }
            M.warn([
              `The class \`${e}\` is ambiguous and matches multiple utilities.`,
              ...d,
              `If this is content and not a class, replace it with \`${e.replace("[", "&lsqb;").replace("]", "&rsqb;")}\` to silence this warning.`
            ]);
            continue;
          }
        }
        s = s.map((u2) => u2.filter((m2) => Br(m2[1])));
      }
      s = s.flat(), s = Array.from(Qa(s, n2)), s = La(s, t), i && (s = Ua(s, n2));
      for (let u2 of a) s = Wa(u2, s, t);
      for (let u2 of s) u2[1].raws.tailwind = {
        ...u2[1].raws.tailwind,
        candidate: e
      }, u2 = Ka(u2, {
        context: t,
        candidate: e
      }), u2 !== null && (yield u2);
    }
  }
  function Ka(e, { context: t, candidate: r }) {
    if (!e[0].collectedFormats) return e;
    let n2 = true, a;
    try {
      a = he(e[0].collectedFormats, {
        context: t,
        candidate: r
      });
    } catch {
      return null;
    }
    let i = F.root({
      nodes: [
        e[1].clone()
      ]
    });
    return i.walkRules((o2) => {
      if (!Ke(o2)) try {
        let s = ze(o2.selector, a, {
          candidate: r,
          context: t
        });
        if (s === null) {
          o2.remove();
          return;
        }
        o2.selector = s;
      } catch {
        return n2 = false, false;
      }
    }), !n2 || i.nodes.length === 0 ? null : (e[1] = i.nodes[0], e);
  }
  function Ke(e) {
    return e.parent && e.parent.type === "atrule" && e.parent.name === "keyframes";
  }
  function Ja(e) {
    if (e === true) return (t) => {
      Ke(t) || t.walkDecls((r) => {
        r.parent.type === "rule" && !Ke(r.parent) && (r.important = true);
      });
    };
    if (typeof e == "string") return (t) => {
      Ke(t) || (t.selectors = t.selectors.map((r) => Qe(r, e)));
    };
  }
  function Xe(e, t, r = false) {
    let n2 = [], a = Ja(t.tailwindConfig.important);
    for (let i of e) {
      if (t.notClassCache.has(i)) continue;
      if (t.candidateRuleCache.has(i)) {
        n2 = n2.concat(Array.from(t.candidateRuleCache.get(i)));
        continue;
      }
      let o2 = Array.from(Tt(i, t));
      if (o2.length === 0) {
        t.notClassCache.add(i);
        continue;
      }
      t.classCache.set(i, o2);
      let s = t.candidateRuleCache.get(i) ?? /* @__PURE__ */ new Set();
      t.candidateRuleCache.set(i, s);
      for (let l2 of o2) {
        let [{ sort: p2, options: g2 }, f2] = l2;
        if (g2.respectImportant && a) {
          let m2 = F.root({
            nodes: [
              f2.clone()
            ]
          });
          m2.walkRules(a), f2 = m2.nodes[0];
        }
        let u2 = [
          p2,
          r ? f2.clone() : f2
        ];
        s.add(u2), t.ruleCache.add(u2), n2.push(u2);
      }
    }
    return n2;
  }
  function Mt(e) {
    return e.startsWith("[") && e.endsWith("]");
  }
  function de(e, t = void 0, r = void 0) {
    return e.map((n2) => {
      let a = n2.clone();
      return r !== void 0 && (a.raws.tailwind = {
        ...a.raws.tailwind,
        ...r
      }), t !== void 0 && Hr(a, (i) => {
        var _a2;
        if (((_a2 = i.raws.tailwind) == null ? void 0 : _a2.preserveSource) === true && i.source) return false;
        i.source = t;
      }), a;
    });
  }
  function Hr(e, t) {
    var _a2;
    t(e) !== false && ((_a2 = e.each) == null ? void 0 : _a2.call(e, (r) => Hr(r, t)));
  }
  var qr = /[\\^$.*+?()[\]{}|]/g, Za = RegExp(qr.source);
  function It(e) {
    return e = Array.isArray(e) ? e : [
      e
    ], e = e.map((t) => t instanceof RegExp ? t.source : t), e.join("");
  }
  function L(e) {
    return new RegExp(It(e), "g");
  }
  function se(e) {
    return `(?:${e.map(It).join("|")})`;
  }
  function Vt(e) {
    return `(?:${It(e)})?`;
  }
  function Yr(e) {
    return e && Za.test(e) ? e.replace(qr, "\\$&") : e || "";
  }
  function Xr(e) {
    let t = Array.from(ti(e));
    return (r) => {
      let n2 = [];
      for (let a of t) for (let i of r.match(a) ?? []) n2.push(ai(i));
      for (let a of n2.slice()) {
        let i = T(a, ".");
        for (let o2 = 0; o2 < i.length; o2++) {
          let s = i[o2];
          if (o2 >= i.length - 1) {
            n2.push(s);
            continue;
          }
          let l2 = Number(i[o2 + 1]);
          isNaN(l2) ? n2.push(s) : o2++;
        }
      }
      return n2;
    };
  }
  function* ti(e) {
    let t = e.tailwindConfig.separator, r = e.tailwindConfig.prefix !== "" ? Vt(L([
      /-?/,
      Yr(e.tailwindConfig.prefix)
    ])) : "", n2 = se([
      /\[[^\s:'"`]+:[^\s\[\]]+\]/,
      /\[[^\s:'"`\]]+:[^\s]+?\[[^\s]+\][^\s]+?\]/,
      L([
        se([
          /-?(?:\w+)/,
          /@(?:\w+)/
        ]),
        Vt(se([
          L([
            se([
              /-(?:\w+-)*\['[^\s]+'\]/,
              /-(?:\w+-)*\["[^\s]+"\]/,
              /-(?:\w+-)*\[`[^\s]+`\]/,
              /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s:\[\]]+\]/
            ]),
            /(?![{([]])/,
            /(?:\/[^\s'"`\\><$]*)?/
          ]),
          L([
            se([
              /-(?:\w+-)*\['[^\s]+'\]/,
              /-(?:\w+-)*\["[^\s]+"\]/,
              /-(?:\w+-)*\[`[^\s]+`\]/,
              /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s\[\]]+\]/
            ]),
            /(?![{([]])/,
            /(?:\/[^\s'"`\\$]*)?/
          ]),
          /[-\/][^\s'"`\\$={><]*/
        ]))
      ])
    ]), a = [
      se([
        L([
          /@\[[^\s"'`]+\](\/[^\s"'`]+)?/,
          t
        ]),
        L([
          /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]\/[\w_-]+/,
          t
        ]),
        L([
          /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/,
          t
        ]),
        L([
          /[^\s"'`\[\\]+/,
          t
        ])
      ]),
      se([
        L([
          /([^\s"'`\[\\]+-)?\[[^\s`]+\]\/[\w_-]+/,
          t
        ]),
        L([
          /([^\s"'`\[\\]+-)?\[[^\s`]+\]/,
          t
        ]),
        L([
          /[^\s`\[\\]+/,
          t
        ])
      ])
    ];
    for (let i of a) yield L([
      "((?=((",
      i,
      ")+))\\2)?",
      /!?/,
      r,
      n2
    ]);
    yield /[^<>"'`\s.(){}[\]#=%$][^<>"'`\s(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
  }
  var ri = /([\[\]'"`])([^\[\]'"`])?/g, ni = /[^"'`\s<>\]]+/;
  function ai(e) {
    if (!e.includes("-[")) return e;
    let t = 0, r = [], n2 = e.matchAll(ri);
    n2 = Array.from(n2).flatMap((a) => {
      let [, ...i] = a;
      return i.map((o2, s) => Object.assign([], a, {
        index: a.index + s,
        0: o2
      }));
    });
    for (let a of n2) {
      let i = a[0], o2 = r[r.length - 1];
      if (i === o2 ? r.pop() : (i === "'" || i === '"' || i === "`") && r.push(i), !o2) {
        if (i === "[") {
          t++;
          continue;
        } else if (i === "]") {
          t--;
          continue;
        }
        if (t < 0) return e.substring(0, a.index - 1);
        if (t === 0 && !ni.test(i)) return e.substring(0, a.index);
      }
    }
    return e;
  }
  var J = lt, Qr = {
    DEFAULT: Xr
  }, Kr = {
    DEFAULT: (e) => e,
    svelte: (e) => e.replace(/(?:^|\s)class:/g, " ")
  };
  function si(e, t) {
    let r = e.tailwindConfig.content.extract;
    return r[t] || r.DEFAULT || Qr[t] || Qr.DEFAULT(e);
  }
  function li(e, t) {
    let r = e.content.transform;
    return r[t] || r.DEFAULT || Kr[t] || Kr.DEFAULT;
  }
  var je = /* @__PURE__ */ new WeakMap();
  function ui(e, t, r, n2) {
    je.has(t) || je.set(t, new z({
      maxSize: 25e3
    }));
    for (let a of e.split(`
`)) if (a = a.trim(), !n2.has(a)) if (n2.add(a), je.get(t).has(a)) for (let i of je.get(t).get(a)) r.add(i);
    else {
      let i = t(a).filter((s) => s !== "!*"), o2 = new Set(i);
      for (let s of o2) r.add(s);
      je.get(t).set(a, o2);
    }
  }
  function di(e, t) {
    let r = t.offsets.sort(e), n2 = {
      base: /* @__PURE__ */ new Set(),
      defaults: /* @__PURE__ */ new Set(),
      components: /* @__PURE__ */ new Set(),
      utilities: /* @__PURE__ */ new Set(),
      variants: /* @__PURE__ */ new Set()
    };
    for (let [a, i] of r) n2[a.layer].add(i);
    return n2;
  }
  function Nt(e) {
    return async (t) => {
      let r = {
        base: null,
        components: null,
        utilities: null,
        variants: null
      };
      if (t.walkAtRules((c) => {
        c.name === "tailwind" && Object.keys(r).includes(c.params) && (r[c.params] = c);
      }), Object.values(r).every((c) => c === null)) return t;
      let n2 = /* @__PURE__ */ new Set([
        ...e.candidates ?? [],
        X
      ]), a = /* @__PURE__ */ new Set();
      J.DEBUG && console.time("Reading changed files");
      let i = [];
      for (let c of e.changedContent) {
        let d = li(e.tailwindConfig, c.extension), y = si(e, c.extension);
        i.push([
          c,
          {
            transformer: d,
            extractor: y
          }
        ]);
      }
      let o2 = 500;
      for (let c = 0; c < i.length; c += o2) {
        let d = i.slice(c, c + o2);
        await Promise.all(d.map(async ([{ file: y, content: w2 }, { transformer: x2, extractor: k }]) => {
          w2 = y ? await st$1.promises.readFile(y, "utf8") : w2, ui(x2(w2), k, n2, a);
        }));
      }
      J.DEBUG && console.timeEnd("Reading changed files");
      let s = e.classCache.size;
      J.DEBUG && console.time("Generate rules"), J.DEBUG && console.time("Sorting candidates");
      let l2 = new Set([
        ...n2
      ].sort((c, d) => c === d ? 0 : c < d ? -1 : 1));
      J.DEBUG && console.timeEnd("Sorting candidates"), Xe(l2, e), J.DEBUG && console.timeEnd("Generate rules"), J.DEBUG && console.time("Build stylesheet"), (e.stylesheetCache === null || e.classCache.size !== s) && (e.stylesheetCache = di([
        ...e.ruleCache
      ], e)), J.DEBUG && console.timeEnd("Build stylesheet");
      let { defaults: p2, base: g2, components: f2, utilities: u2, variants: m2 } = e.stylesheetCache;
      r.base && (r.base.before(de([
        ...p2,
        ...g2
      ], r.base.source, {
        layer: "base"
      })), r.base.remove()), r.components && (r.components.before(de([
        ...f2
      ], r.components.source, {
        layer: "components"
      })), r.components.remove()), r.utilities && (r.utilities.before(de([
        ...u2
      ], r.utilities.source, {
        layer: "utilities"
      })), r.utilities.remove());
      let h = Array.from(m2).filter((c) => {
        var _a2;
        let d = (_a2 = c.raws.tailwind) == null ? void 0 : _a2.parentLayer;
        return d === "components" ? r.components !== null : d === "utilities" ? r.utilities !== null : true;
      });
      r.variants ? (r.variants.before(de(h, r.variants.source, {
        layer: "variants"
      })), r.variants.remove()) : h.length > 0 && t.append(de(h, t.source, {
        layer: "variants"
      })), t.source.end = t.source.end ?? t.source.start;
      let b = h.some((c) => {
        var _a2;
        return ((_a2 = c.raws.tailwind) == null ? void 0 : _a2.parentLayer) === "utilities";
      });
      r.utilities && u2.size === 0 && !b && M.warn("content-problems", [
        "No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.",
        "https://tailwindcss.com/docs/content-configuration"
      ]), J.DEBUG && (console.log("Potential classes: ", n2.size), console.log("Active contexts: ", ut.size)), e.changedContent = [], t.walkAtRules("layer", (c) => {
        Object.keys(r).includes(c.params) && c.remove();
      });
    };
  }
  function Je(e) {
    let t = /* @__PURE__ */ new Map();
    F.root({
      nodes: [
        e.clone()
      ]
    }).walkRules((i) => {
      Pu((o2) => {
        o2.walkClasses((s) => {
          let l2 = s.parent.toString(), p2 = t.get(l2);
          p2 || t.set(l2, p2 = /* @__PURE__ */ new Set()), p2.add(s.value);
        });
      }).processSync(i.selector);
    });
    let n2 = Array.from(t.values(), (i) => Array.from(i)), a = n2.flat();
    return Object.assign(a, {
      groups: n2
    });
  }
  var fi = Pu();
  function Dt(e) {
    return fi.astSync(e);
  }
  function Jr(e, t) {
    let r = /* @__PURE__ */ new Set();
    for (let n2 of e) r.add(n2.split(t).pop());
    return Array.from(r);
  }
  function Zr(e, t) {
    let r = e.tailwindConfig.prefix;
    return typeof r == "function" ? r(t) : r + t;
  }
  function* rn(e) {
    for (yield e; e.parent; ) yield e.parent, e = e.parent;
  }
  function ci(e, t = {}) {
    let r = e.nodes;
    e.nodes = [];
    let n2 = e.clone(t);
    return e.nodes = r, n2;
  }
  function pi(e) {
    for (let t of rn(e)) if (e !== t) {
      if (t.type === "root") break;
      e = ci(t, {
        nodes: [
          e
        ]
      });
    }
    return e;
  }
  function mi(e, t) {
    let r = /* @__PURE__ */ new Map();
    return e.walkRules((n2) => {
      var _a2;
      for (let o2 of rn(n2)) if (((_a2 = o2.raws.tailwind) == null ? void 0 : _a2.layer) !== void 0) return;
      let a = pi(n2), i = t.offsets.create("user");
      for (let o2 of Je(n2)) {
        let s = r.get(o2) || [];
        r.set(o2, s), s.push([
          {
            layer: "user",
            sort: i,
            important: false
          },
          a
        ]);
      }
    }), r;
  }
  function gi(e, t) {
    for (let r of e) {
      if (t.notClassCache.has(r) || t.applyClassCache.has(r)) continue;
      if (t.classCache.has(r)) {
        t.applyClassCache.set(r, t.classCache.get(r).map(([a, i]) => [
          a,
          i.clone()
        ]));
        continue;
      }
      let n2 = Array.from(Tt(r, t));
      if (n2.length === 0) {
        t.notClassCache.add(r);
        continue;
      }
      t.applyClassCache.set(r, n2);
    }
    return t.applyClassCache;
  }
  function hi(e) {
    let t = null;
    return {
      get: (r) => (t = t || e(), t.get(r)),
      has: (r) => (t = t || e(), t.has(r))
    };
  }
  function bi(e) {
    return {
      get: (t) => e.flatMap((r) => r.get(t) || []),
      has: (t) => e.some((r) => r.has(t))
    };
  }
  function en(e) {
    let t = e.split(/[\s\t\n]+/g);
    return t[t.length - 1] === "!important" ? [
      t.slice(0, -1),
      true
    ] : [
      t,
      false
    ];
  }
  function nn(e, t, r) {
    let n2 = /* @__PURE__ */ new Set(), a = [];
    if (e.walkAtRules("apply", (l2) => {
      let [p2] = en(l2.params);
      for (let g2 of p2) n2.add(g2);
      a.push(l2);
    }), a.length === 0) return;
    let i = bi([
      r,
      gi(n2, t)
    ]);
    function o2(l2, p2, g2) {
      let f2 = Dt(l2), u2 = Dt(p2), h = Dt(`.${R(g2)}`).nodes[0].nodes[0];
      return f2.each((b) => {
        let c = /* @__PURE__ */ new Set();
        u2.each((d) => {
          let y = false;
          d = d.clone(), d.walkClasses((w2) => {
            w2.value === h.value && (y || (w2.replaceWith(...b.nodes.map((x2) => x2.clone())), c.add(d), y = true));
          });
        });
        for (let d of c) {
          let y = [
            []
          ];
          for (let w2 of d.nodes) w2.type === "combinator" ? (y.push(w2), y.push([])) : y[y.length - 1].push(w2);
          d.nodes = [];
          for (let w2 of y) Array.isArray(w2) && w2.sort((x2, k) => x2.type === "tag" && k.type === "class" ? -1 : x2.type === "class" && k.type === "tag" ? 1 : x2.type === "class" && k.type === "pseudo" && k.value.startsWith("::") ? -1 : x2.type === "pseudo" && x2.value.startsWith("::") && k.type === "class" ? 1 : 0), d.nodes = d.nodes.concat(w2);
        }
        b.replaceWith(...c);
      }), f2.toString();
    }
    let s = /* @__PURE__ */ new Map();
    for (let l2 of a) {
      let [p2] = s.get(l2.parent) || [
        [],
        l2.source
      ];
      s.set(l2.parent, [
        p2,
        l2.source
      ]);
      let [g2, f2] = en(l2.params);
      if (l2.parent.type === "atrule") {
        if (l2.parent.name === "screen") {
          let u2 = l2.parent.params;
          throw l2.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${g2.map((m2) => `${u2}:${m2}`).join(" ")} instead.`);
        }
        throw l2.error(`@apply is not supported within nested at-rules like @${l2.parent.name}. You can fix this by un-nesting @${l2.parent.name}.`);
      }
      for (let u2 of g2) {
        if ([
          Zr(t, "group"),
          Zr(t, "peer")
        ].includes(u2)) throw l2.error(`@apply should not be used with the '${u2}' utility`);
        if (!i.has(u2)) throw l2.error(`The \`${u2}\` class does not exist. If \`${u2}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
        let m2 = i.get(u2);
        for (let [, h] of m2) h.type !== "atrule" && h.walkRules(() => {
          throw l2.error([
            `The \`${u2}\` class cannot be used with \`@apply\` because \`@apply\` does not currently support nested CSS.`,
            "Rewrite the selector without nesting or configure the `tailwindcss/nesting` plugin:",
            "https://tailwindcss.com/docs/using-with-preprocessors#nesting"
          ].join(`
`));
        });
        p2.push([
          u2,
          f2,
          m2
        ]);
      }
    }
    for (let [l2, [p2, g2]] of s) {
      let f2 = [];
      for (let [m2, h, b] of p2) {
        let c = [
          m2,
          ...Jr([
            m2
          ], t.tailwindConfig.separator)
        ];
        for (let [d, y] of b) {
          let w2 = Je(l2), x2 = Je(y);
          if (x2 = x2.groups.filter((A) => A.some((D) => c.includes(D))).flat(), x2 = x2.concat(Jr(x2, t.tailwindConfig.separator)), w2.some((A) => x2.includes(A))) throw y.error(`You cannot \`@apply\` the \`${m2}\` utility here because it creates a circular dependency.`);
          let S = F.root({
            nodes: [
              y.clone()
            ]
          });
          S.walk((A) => {
            A.source = g2;
          }), (y.type !== "atrule" || y.type === "atrule" && y.name !== "keyframes") && S.walkRules((A) => {
            if (!Je(A).some((V2) => V2 === m2)) {
              A.remove();
              return;
            }
            let D = typeof t.tailwindConfig.important == "string" ? t.tailwindConfig.important : null, U = l2.raws.tailwind !== void 0 && D && l2.selector.indexOf(D) === 0 ? l2.selector.slice(D.length) : l2.selector;
            U === "" && (U = l2.selector), A.selector = o2(U, A.selector, m2), D && U !== l2.selector && (A.selector = Qe(A.selector, D)), A.walkDecls((V2) => {
              V2.important = d.important || h;
            });
            let Z = Pu().astSync(A.selector);
            Z.each((V2) => ge(V2)), A.selector = Z.toString();
          }), S.nodes[0] && f2.push([
            d.sort,
            S.nodes[0]
          ]);
        }
      }
      let u2 = t.offsets.sort(f2).map((m2) => m2[1]);
      l2.after(u2);
    }
    for (let l2 of a) l2.parent.nodes.length > 1 ? l2.remove() : l2.parent.remove();
    nn(e, t, r);
  }
  function Rt(e) {
    return (t) => {
      let r = hi(() => mi(t, e));
      nn(t, e, r);
    };
  }
  var qt = Vn(yn());
  function Gt(e) {
    return typeof e == "object" && e !== null;
  }
  function Oi(e, t) {
    let r = Oe(t);
    do
      if (r.pop(), x$1(e, r) !== void 0) break;
    while (r.length);
    return r.length ? r : void 0;
  }
  function ve(e) {
    return typeof e == "string" ? e : e.reduce((t, r, n2) => r.includes(".") ? `${t}[${r}]` : n2 === 0 ? r : `${t}.${r}`, "");
  }
  function vn(e) {
    return e.map((t) => `'${t}'`).join(", ");
  }
  function wn(e) {
    return vn(Object.keys(e));
  }
  function Ht(e, t, r, n2 = {}) {
    let a = Array.isArray(t) ? ve(t) : t.replace(/^['"]+|['"]+$/g, ""), i = Array.isArray(t) ? t : Oe(a), o2 = x$1(e.theme, i, r);
    if (o2 === void 0) {
      let l2 = `'${a}' does not exist in your theme config.`, p2 = i.slice(0, -1), g2 = x$1(e.theme, p2);
      if (Gt(g2)) {
        let f2 = Object.keys(g2).filter((m2) => Ht(e, [
          ...p2,
          m2
        ]).isValid), u2 = N$1(i[i.length - 1], f2);
        u2 ? l2 += ` Did you mean '${ve([
          ...p2,
          u2
        ])}'?` : f2.length > 0 && (l2 += ` '${ve(p2)}' has the following valid keys: ${vn(f2)}`);
      } else {
        let f2 = Oi(e.theme, a);
        if (f2) {
          let u2 = x$1(e.theme, f2);
          Gt(u2) ? l2 += ` '${ve(f2)}' has the following keys: ${wn(u2)}` : l2 += ` '${ve(f2)}' is not an object.`;
        } else l2 += ` Your theme has the following top-level keys: ${wn(e.theme)}`;
      }
      return {
        isValid: false,
        error: l2
      };
    }
    if (!(typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "function" || o2 instanceof String || o2 instanceof Number || Array.isArray(o2))) {
      let l2 = `'${a}' was found but does not resolve to a string.`;
      if (Gt(o2)) {
        let p2 = Object.keys(o2).filter((g2) => Ht(e, [
          ...i,
          g2
        ]).isValid);
        p2.length && (l2 += ` Did you mean something like '${ve([
          ...i,
          p2[0]
        ])}'?`);
      }
      return {
        isValid: false,
        error: l2
      };
    }
    let [s] = i;
    return {
      isValid: true,
      value: K(s)(o2, n2)
    };
  }
  function Ei(e, t, r) {
    t = t.map((a) => xn(e, a, r));
    let n2 = [
      ""
    ];
    for (let a of t) a.type === "div" && a.value === "," ? n2.push("") : n2[n2.length - 1] += qt.default.stringify(a);
    return n2;
  }
  function xn(e, t, r) {
    if (t.type === "function" && r[t.value] !== void 0) {
      let n2 = Ei(e, t.nodes, r);
      t.type = "word", t.value = r[t.value](e, ...n2);
    }
    return t;
  }
  function Mi(e, t, r) {
    return Object.keys(r).some((a) => t.includes(`${a}(`)) ? (0, qt.default)(t).walk((a) => {
      xn(e, a, r);
    }).toString() : t;
  }
  var ji = {
    atrule: "params",
    decl: "value"
  };
  function* Ti(e) {
    e = e.replace(/^['"]+|['"]+$/g, "");
    let t = e.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), r;
    yield [
      e,
      void 0
    ], t && (e = t[1], r = t[2], yield [
      e,
      r
    ]);
  }
  function Ii(e, t, r) {
    let n2 = Array.from(Ti(t)).map(([a, i]) => Object.assign(Ht(e, a, r, {
      opacityValue: i
    }), {
      resolvedPath: a,
      alpha: i
    }));
    return n2.find((a) => a.isValid) ?? n2[0];
  }
  function kn(e) {
    let t = e.tailwindConfig, r = {
      theme: (n2, a, ...i) => {
        var _a2;
        let { isValid: o2, value: s, error: l2, alpha: p2 } = Ii(t, a, i.length ? i : void 0);
        if (!o2) {
          let u2 = n2.parent, m2 = (_a2 = u2 == null ? void 0 : u2.raws.tailwind) == null ? void 0 : _a2.candidate;
          if (u2 && m2 !== void 0) {
            e.markInvalidUtilityNode(u2), u2.remove(), M.warn("invalid-theme-key-in-class", [
              `The utility \`${m2}\` contains an invalid theme value and was not generated.`
            ]);
            return;
          }
          throw n2.error(l2);
        }
        let g2 = Re(s);
        return (p2 !== void 0 || g2 !== void 0 && typeof g2 == "function") && (p2 === void 0 && (p2 = 1), s = re(g2, p2, g2)), s;
      },
      screen: (n2, a) => {
        a = a.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
        let o2 = ie(t.theme.screens).find(({ name: s }) => s === a);
        if (!o2) throw n2.error(`The '${a}' screen does not exist in your theme.`);
        return ae(o2);
      }
    };
    return (n2) => {
      n2.walk((a) => {
        let i = ji[a.type];
        i !== void 0 && (a[i] = Mi(a, a[i], r));
      });
    };
  }
  function Sn({ tailwindConfig: { theme: e } }) {
    return function(t) {
      t.walkAtRules("screen", (r) => {
        let n2 = r.params, i = ie(e.screens).find(({ name: o2 }) => o2 === n2);
        if (!i) throw r.error(`No \`${n2}\` screen found.`);
        r.name = "media", r.params = ae(i);
      });
    };
  }
  var An = {
    id(e) {
      return Pu.attribute({
        attribute: "id",
        operator: "=",
        value: e.value,
        quoteMark: '"'
      });
    }
  };
  function Vi(e) {
    let t = e.filter((s) => s.type !== "pseudo" || s.nodes.length > 0 ? true : s.value.startsWith("::") || [
      ":before",
      ":after",
      ":first-line",
      ":first-letter"
    ].includes(s.value)).reverse(), r = /* @__PURE__ */ new Set([
      "tag",
      "class",
      "id",
      "attribute"
    ]), n2 = t.findIndex((s) => r.has(s.type));
    if (n2 === -1) return t.reverse().join("").trim();
    let a = t[n2], i = An[a.type] ? An[a.type](a) : a;
    t = t.slice(0, n2);
    let o2 = t.findIndex((s) => s.type === "combinator" && s.value === ">");
    return o2 !== -1 && (t.splice(0, o2), t.unshift(Pu.universal())), [
      i,
      ...t.reverse()
    ].join("").trim();
  }
  var Ni = Pu((e) => e.map((t) => {
    let r = t.split((n2) => n2.type === "combinator" && n2.value === " ").pop();
    return Vi(r);
  })), Yt = /* @__PURE__ */ new Map();
  function Di(e) {
    return Yt.has(e) || Yt.set(e, Ni.transformSync(e)), Yt.get(e);
  }
  function Qt({ tailwindConfig: e }) {
    return (t) => {
      let r = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
      if (t.walkAtRules("defaults", (a) => {
        if (a.nodes && a.nodes.length > 0) {
          n2.add(a);
          return;
        }
        let i = a.params;
        r.has(i) || r.set(i, /* @__PURE__ */ new Set()), r.get(i).add(a.parent), a.remove();
      }), P(e, "optimizeUniversalDefaults")) for (let a of n2) {
        let i = /* @__PURE__ */ new Map(), o2 = r.get(a.params) ?? [];
        for (let s of o2) for (let l2 of Di(s.selector)) {
          let p2 = l2.includes(":-") || l2.includes("::-") || l2.includes(":has") ? l2 : "__DEFAULT__", g2 = i.get(p2) ?? /* @__PURE__ */ new Set();
          i.set(p2, g2), g2.add(l2);
        }
        if (i.size === 0) {
          a.remove();
          continue;
        }
        for (let [, s] of i) {
          let l2 = F.rule({
            source: a.source
          });
          l2.selectors = [
            ...s
          ], l2.append(a.nodes.map((p2) => p2.clone())), a.before(l2);
        }
        a.remove();
      }
      else if (n2.size) {
        let a = F.rule({
          selectors: [
            "*",
            "::before",
            "::after"
          ]
        });
        for (let o2 of n2) a.append(o2.nodes), a.parent || o2.before(a), a.source || (a.source = o2.source), o2.remove();
        let i = a.clone({
          selectors: [
            "::backdrop"
          ]
        });
        a.after(i);
      }
    };
  }
  var $n = {
    atrule: [
      "name",
      "params"
    ],
    rule: [
      "selector"
    ]
  }, Pi = new Set(Object.keys($n));
  function Kt() {
    function e(t) {
      let r = null;
      t.each((n2) => {
        if (!Pi.has(n2.type)) {
          r = null;
          return;
        }
        if (r === null) {
          r = n2;
          return;
        }
        let a = $n[n2.type];
        n2.type === "atrule" && n2.name === "font-face" ? r = n2 : a.every((i) => (n2[i] ?? "").replace(/\s+/g, " ") === (r[i] ?? "").replace(/\s+/g, " ")) ? (n2.nodes && r.append(n2.nodes), n2.remove()) : r = n2;
      }), t.each((n2) => {
        n2.type === "atrule" && e(n2);
      });
    }
    return (t) => {
      e(t);
    };
  }
  function Jt() {
    return (e) => {
      e.walkRules((t) => {
        let r = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set([]), a = /* @__PURE__ */ new Map();
        t.walkDecls((i) => {
          if (i.parent === t) {
            if (r.has(i.prop)) {
              if (r.get(i.prop).value === i.value) {
                n2.add(r.get(i.prop)), r.set(i.prop, i);
                return;
              }
              a.has(i.prop) || a.set(i.prop, /* @__PURE__ */ new Set()), a.get(i.prop).add(r.get(i.prop)), a.get(i.prop).add(i);
            }
            r.set(i.prop, i);
          }
        });
        for (let i of n2) i.remove();
        for (let i of a.values()) {
          let o2 = /* @__PURE__ */ new Map();
          for (let s of i) {
            let l2 = Fi(s.value);
            l2 !== null && (o2.has(l2) || o2.set(l2, /* @__PURE__ */ new Set()), o2.get(l2).add(s));
          }
          for (let s of o2.values()) {
            let l2 = Array.from(s).slice(0, -1);
            for (let p2 of l2) p2.remove();
          }
        }
      });
    };
  }
  var Ri = Symbol("unitless-number");
  function Fi(e) {
    let t = /^-?\d*.?\d+([\w%]+)?$/g.exec(e);
    return t ? t[1] ?? Ri : null;
  }
  function zi(e) {
    if (!e.walkAtRules) return;
    let t = /* @__PURE__ */ new Set();
    if (e.walkAtRules("apply", (r) => {
      t.add(r.parent);
    }), t.size !== 0) for (let r of t) {
      let n2 = [], a = [];
      for (let i of r.nodes) i.type === "atrule" && i.name === "apply" ? (a.length > 0 && (n2.push(a), a = []), n2.push([
        i
      ])) : a.push(i);
      if (a.length > 0 && n2.push(a), n2.length !== 1) {
        for (let i of [
          ...n2
        ].reverse()) {
          let o2 = r.clone({
            nodes: []
          });
          o2.append(i), r.after(o2);
        }
        r.remove();
      }
    }
  }
  function at() {
    return (e) => {
      zi(e);
    };
  }
  function _i(e) {
    return async function(t, r) {
      let { tailwindDirectives: n2, applyDirectives: a } = st(t);
      at()(t, r);
      let i = e({
        tailwindDirectives: n2,
        applyDirectives: a,
        registerDependency(o2) {
          r.messages.push({
            plugin: "tailwindcss",
            parent: r.opts.from,
            ...o2
          });
        },
        createContext(o2, s) {
          return Ur(o2, s, t);
        }
      })(t, r);
      if (i.tailwindConfig.separator === "-") throw new Error("The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.");
      br(i.tailwindConfig), await Nt(i)(t, r), at()(t, r), Rt(i)(t, r), kn(i)(t, r), Sn(i)(t, r), Qt(i)(t, r), Kt()(t, r), Jt()(t, r);
    };
  }
  const tailwindcssPostcssPlugin = Object.assign(function(config, contents) {
    return {
      postcssPlugin: "tailwindcss",
      async Once(root, { result }) {
        await _i(({ createContext }) => {
          return () => createContext(config, contents);
        })(root, result);
      }
    };
  }, {
    postcss: true
  });
  function nesting(opts = postcssNested) {
    return (root, result) => {
      root.walkAtRules("screen", (rule) => {
        rule.name = "media";
        rule.params = `screen(${rule.params})`;
      });
      root.walkAtRules("apply", (rule) => {
        rule.before(postcss.decl({
          prop: "__apply",
          value: rule.params,
          source: rule.source
        }));
        rule.remove();
      });
      let plugin = (() => {
        var _a2;
        if (typeof opts === "function" || typeof opts === "object" && ((_a2 = opts == null ? void 0 : opts.hasOwnProperty) == null ? void 0 : _a2.call(opts, "postcssPlugin"))) {
          return opts;
        }
        if (typeof opts === "string") {
          return require(opts);
        }
        if (Object.keys(opts).length <= 0) {
          return postcssNested;
        }
        throw new Error("tailwindcss/nesting should be loaded with a nesting plugin.");
      })();
      postcss([
        plugin
      ]).process(root, result.opts).sync();
      root.walkDecls("__apply", (decl) => {
        decl.before(postcss.atRule({
          name: "apply",
          params: decl.value,
          source: decl.source
        }));
        decl.remove();
      });
      function markDirty(node) {
        if (!("markDirty" in node)) {
          return;
        }
        if (node.nodes) {
          node.nodes.forEach((n2) => markDirty(n2));
        }
        if (!node.nodes) {
          node.markDirty();
        }
      }
      markDirty(root);
      return root;
    };
  }
  const tailwindcssNesting = Object.assign(function(opts) {
    return {
      postcssPlugin: "tailwindcss/nesting",
      Once(root, { result }) {
        return nesting(opts)(root, result);
      }
    };
  }, {
    postcss: true
  });
  async function compile({ contents = [], volume = {}, ..._opts }) {
    const opts = {
      contents,
      volume,
      ..._opts
    };
    opts.contents = opts.contents.map((content) => typeof content === "string" ? {
      content
    } : content);
    const config = await resolveConfig(opts.volume, opts.entrypoint.config);
    const processor = postcss().use(postcssImport({
      filter: () => true,
      async resolve(id, basedir) {
        var _a2, _b;
        if (isValidUrl(id)) {
          return new URL(id).toString();
        } else {
          if (id.startsWith(".")) {
            id = path$2.resolve(path$2.dirname(basedir), id);
            if (!id.endsWith(".css")) {
              if (Object.keys(opts.volume ?? {}).some((file) => file.includes(id.concat(".css")))) {
                id = id.concat(".css");
              } else {
                id = id.concat("/index.css");
              }
            }
          }
          let _path = path$2.resolve(basedir, id);
          if ((_a2 = opts.volume) == null ? void 0 : _a2[_path]) {
            return _path;
          }
          if (!id.endsWith(".css")) {
            id = id.concat("/index.css");
          }
          _path = path$2.join(basedir, id);
          if ((_b = opts.volume) == null ? void 0 : _b[_path]) {
            return _path;
          }
          await fetch(`https://esm.sh${_path}`).then((response) => response.text()).then((data) => {
            data = data.replace(/@config\s+['|"](.*)['|"]/g, (match, p1) => {
              return `@config 'https://esm.sh${path$2.resolve(path$2.dirname(id))}${path$2.resolve(p1)}'`;
            }).replace(/@plugin\s+['|"](.*)['|"]/g, (match, p1) => {
              return `@plugin 'https://esm.sh${path$2.resolve(path$2.dirname(id))}${path$2.resolve(p1)}'`;
            });
            if (opts.volume) {
              opts.volume[_path] = data;
            }
          });
          return _path;
        }
      },
      load(file) {
        var _a2;
        if (isValidUrl(file)) {
          return fetch(file).then((response) => response.text());
        }
        if ((_a2 = opts.volume) == null ? void 0 : _a2[file]) {
          return opts.volume[file];
        }
        return "";
      }
    })).use(tailwindcssPostcssPlugin(config, opts.contents)).use(tailwindcssNesting());
    return await processor.process((opts.volume ?? {})[opts.entrypoint.css], {
      from: void 0
    }).then((result) => result.css);
  }
  build = async function({ contents = [], entrypoint = {
    css: "/main.css",
    config: "/tailwind.config.js"
  }, volume = {}, ...opts }) {
    opts = {
      contents,
      entrypoint,
      volume,
      ...opts
    };
    let result = await compile(opts);
    return `/*! tailwindcss v${version} | MIT License | https://tailwindcss.com */
${result}`;
  };
  optimize = async function(css, minify = false) {
    await init(lightningcssWasmFile);
    const { default: browserslist } = await __vitePreload(async () => {
      const { default: browserslist2 } = await import("../chunks/index-CF8Amobb.min.js").then((n2) => n2.i);
      return {
        default: browserslist2
      };
    }, true ? [] : void 0, import.meta.url);
    const result = transform({
      filename: "main.css",
      code: new TextEncoder().encode(css),
      minify,
      sourceMap: false,
      targets: browserslistToTargets(browserslist("defaults")),
      errorRecovery: true
    });
    return {
      code: result.code,
      css: new TextDecoder().decode(result.code),
      warnings: result.warnings
    };
  };
});
export {
  __tla,
  build as b,
  optimize as o,
  version as v
};
