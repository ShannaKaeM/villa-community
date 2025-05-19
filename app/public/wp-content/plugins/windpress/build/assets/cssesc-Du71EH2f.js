import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { p as process$1, B as Buffer } from "../chunks/index-Dfa4cJMK.min.js";
let requirePathBrowserify, requireHasown, path, requirePostcss, encodeBase64, requirePicocolors_browser, getDefaultExportFromCjs, requireSafeBuffer, isValidUrl, commonjsGlobal, requireStreamBrowserify, loadModule, requireInherits_browser, requireDist$1, requireString_decoder, postcss, requireEvents, requireLib, requireUtil$2, requireBrowser, requireCssesc, importLocalModule, decodeBase64;
let __tla = (async () => {
  commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  getDefaultExportFromCjs = function(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  };
  function getAugmentedNamespace(n) {
    if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f, arguments, this.constructor);
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, "__esModule", {
      value: true
    });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  const alphabet$1 = {
    base64: new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
    base64url: new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
  };
  const rAlphabet$1 = {
    base64: new Uint8Array(128).fill(64),
    base64url: new Uint8Array(128).fill(64)
  };
  alphabet$1.base64.forEach((byte, i) => rAlphabet$1.base64[byte] = i);
  alphabet$1.base64url.forEach((byte, i) => rAlphabet$1.base64url[byte] = i);
  function calcSizeBase64(originalSize) {
    return ((originalSize + 2) / 3 | 0) * 4;
  }
  function encode(buffer2, i, o, alphabet2, padding2) {
    i += 2;
    for (; i < buffer2.length; i += 3) {
      const x = buffer2[i - 2] << 16 | buffer2[i - 1] << 8 | buffer2[i];
      buffer2[o++] = alphabet2[x >> 18];
      buffer2[o++] = alphabet2[x >> 12 & 63];
      buffer2[o++] = alphabet2[x >> 6 & 63];
      buffer2[o++] = alphabet2[x & 63];
    }
    switch (i) {
      case buffer2.length + 1: {
        const x = buffer2[i - 2] << 16;
        buffer2[o++] = alphabet2[x >> 18];
        buffer2[o++] = alphabet2[x >> 12 & 63];
        buffer2[o++] = padding2;
        buffer2[o++] = padding2;
        break;
      }
      case buffer2.length: {
        const x = buffer2[i - 2] << 16 | buffer2[i - 1] << 8;
        buffer2[o++] = alphabet2[x >> 18];
        buffer2[o++] = alphabet2[x >> 12 & 63];
        buffer2[o++] = alphabet2[x >> 6 & 63];
        buffer2[o++] = padding2;
        break;
      }
    }
    return o;
  }
  function decode(buffer2, i, o, alphabet2, padding2) {
    for (let x = buffer2.length - 2; x < buffer2.length; ++x) {
      if (buffer2[x] === padding2) {
        for (let y = x + 1; y < buffer2.length; ++y) {
          if (buffer2[y] !== padding2) {
            throw new TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(buffer2[y])})`);
          }
        }
        buffer2 = buffer2.subarray(0, x);
        break;
      }
    }
    if ((buffer2.length - o) % 4 === 1) {
      throw new RangeError(`Cannot decode input as base64: Length (${buffer2.length - o}), excluding padding, must not have a remainder of 1 when divided by 4`);
    }
    i += 3;
    for (; i < buffer2.length; i += 4) {
      const x = getByte(buffer2[i - 3], alphabet2) << 18 | getByte(buffer2[i - 2], alphabet2) << 12 | getByte(buffer2[i - 1], alphabet2) << 6 | getByte(buffer2[i], alphabet2);
      buffer2[o++] = x >> 16;
      buffer2[o++] = x >> 8 & 255;
      buffer2[o++] = x & 255;
    }
    switch (i) {
      case buffer2.length + 1: {
        const x = getByte(buffer2[i - 3], alphabet2) << 18 | getByte(buffer2[i - 2], alphabet2) << 12;
        buffer2[o++] = x >> 16;
        break;
      }
      case buffer2.length: {
        const x = getByte(buffer2[i - 3], alphabet2) << 18 | getByte(buffer2[i - 2], alphabet2) << 12 | getByte(buffer2[i - 1], alphabet2) << 6;
        buffer2[o++] = x >> 16;
        buffer2[o++] = x >> 8 & 255;
        break;
      }
    }
    return o;
  }
  function getByte(char, alphabet2) {
    const byte = alphabet2[char] ?? 64;
    if (byte === 64) {
      throw new TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(char)})`);
    }
    return byte;
  }
  function detach(buffer2, maxSize) {
    const originalSize = buffer2.length;
    if (buffer2.byteOffset) {
      const b = new Uint8Array(buffer2.buffer);
      b.set(buffer2);
      buffer2 = b.subarray(0, originalSize);
    }
    buffer2 = new Uint8Array(buffer2.buffer.transfer(maxSize));
    buffer2.set(buffer2.subarray(0, originalSize), maxSize - originalSize);
    return [
      buffer2,
      maxSize - originalSize
    ];
  }
  const padding = "=".charCodeAt(0);
  const alphabet = new TextEncoder().encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  const rAlphabet = new Uint8Array(128).fill(64);
  alphabet.forEach((byte, i) => rAlphabet[byte] = i);
  encodeBase64 = function(data) {
    if (typeof data === "string") {
      data = new TextEncoder().encode(data);
    } else if (data instanceof ArrayBuffer) data = new Uint8Array(data).slice();
    else data = data.slice();
    const [output, i] = detach(data, calcSizeBase64(data.length));
    encode(output, i, 0, alphabet, padding);
    return new TextDecoder().decode(output);
  };
  decodeBase64 = function(b64) {
    const output = new TextEncoder().encode(b64);
    return new Uint8Array(output.buffer.transfer(decode(output, 0, 0, rAlphabet, padding)));
  };
  var pathBrowserify;
  var hasRequiredPathBrowserify;
  requirePathBrowserify = function() {
    if (hasRequiredPathBrowserify) return pathBrowserify;
    hasRequiredPathBrowserify = 1;
    function assertPath(path2) {
      if (typeof path2 !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
      }
    }
    function normalizeStringPosix(path2, allowAboveRoot) {
      var res = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path2.length; ++i) {
        if (i < path2.length) code = path2.charCodeAt(i);
        else if (code === 47) break;
        else code = 47;
        if (code === 47) {
          if (lastSlash === i - 1 || dots === 1) ;
          else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf("/");
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = "";
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0) res += "/..";
              else res = "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0) res += "/" + path2.slice(lastSlash + 1, i);
            else res = path2.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }
    var posix = {
      resolve: function resolve2() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path2;
          if (i >= 0) path2 = arguments[i];
          else {
            if (cwd === void 0) cwd = process$1.cwd();
            path2 = cwd;
          }
          assertPath(path2);
          if (path2.length === 0) {
            continue;
          }
          resolvedPath = path2 + "/" + resolvedPath;
          resolvedAbsolute = path2.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0) return "/" + resolvedPath;
          else return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize(path2) {
        assertPath(path2);
        if (path2.length === 0) return ".";
        var isAbsolute = path2.charCodeAt(0) === 47;
        var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
        path2 = normalizeStringPosix(path2, !isAbsolute);
        if (path2.length === 0 && !isAbsolute) path2 = ".";
        if (path2.length > 0 && trailingSeparator) path2 += "/";
        if (isAbsolute) return "/" + path2;
        return path2;
      },
      isAbsolute: function isAbsolute(path2) {
        assertPath(path2);
        return path2.length > 0 && path2.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === void 0) joined = arg;
            else joined += "/" + arg;
          }
        }
        if (joined === void 0) return ".";
        return posix.normalize(joined);
      },
      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47) {
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47) {
                lastCommonSep = i;
              } else if (i === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode) break;
          else if (fromCode === 47) lastCommonSep = i;
        }
        var out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0) out += "..";
            else out += "/..";
          }
        }
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47) ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path2) {
        return path2;
      },
      dirname: function dirname(path2) {
        assertPath(path2);
        if (path2.length === 0) return ".";
        var code = path2.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i = path2.length - 1; i >= 1; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path2.slice(0, end);
      },
      basename: function basename(path2, ext) {
        if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path2);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
          if (ext.length === path2.length && ext === path2) return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path2.length - 1; i >= 0; --i) {
            var code = path2.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) end = firstNonSlashEnd;
          else if (end === -1) end = path2.length;
          return path2.slice(start, end);
        } else {
          for (i = path2.length - 1; i >= 0; --i) {
            if (path2.charCodeAt(i) === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
          }
          if (end === -1) return "";
          return path2.slice(start, end);
        }
      },
      extname: function extname(path2) {
        assertPath(path2);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i = path2.length - 1; i >= 0; --i) {
          var code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path2.slice(startDot, end);
      },
      format: function format2(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format("/", pathObject);
      },
      parse: function parse2(path2) {
        assertPath(path2);
        var ret = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (path2.length === 0) return ret;
        var code = path2.charCodeAt(0);
        var isAbsolute = code === 47;
        var start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path2.length - 1;
        var preDotState = 0;
        for (; i >= start; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute) ret.base = ret.name = path2.slice(1, end);
            else ret.base = ret.name = path2.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path2.slice(1, startDot);
            ret.base = path2.slice(1, end);
          } else {
            ret.name = path2.slice(startPart, startDot);
            ret.base = path2.slice(startPart, end);
          }
          ret.ext = path2.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path2.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.posix = posix;
    pathBrowserify = posix;
    return pathBrowserify;
  };
  var pathBrowserifyExports = requirePathBrowserify();
  path = getDefaultExportFromCjs(pathBrowserifyExports);
  isValidUrl = function(url2) {
    try {
      const resource = new URL(url2);
      return resource.protocol === "http:" || resource.protocol === "https:";
    } catch (e) {
      return false;
    }
  };
  loadModule = async function(modulePath, base, resourceHint, volume2 = {}) {
    let module;
    if (modulePath.startsWith(".") || modulePath.startsWith("/")) {
      return importLocalModule(modulePath, base, resourceHint, volume2);
    } else if (resourceHint === "plugin") {
      if (!modulePath.startsWith("http")) {
        modulePath = `https://esm.sh/${modulePath}`;
      }
      try {
        module = await importCdnModule(modulePath, base, resourceHint);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`The ${resourceHint} file "${modulePath}" could not be loaded. ${error.message}`);
        } else {
          throw new Error(`The ${resourceHint} file "${modulePath}" could not be loaded.`);
        }
      }
    }
    if (!module) {
      throw new Error(`The ${resourceHint} file "${modulePath}" is not a valid module.`);
    }
    return {
      module,
      base
    };
  };
  async function importCdnModule(modulePath, base, resourceHint) {
    const module = await import(modulePath).then(async (m) => {
      await m.__tla;
      return m;
    }).then((m) => m.default ?? m);
    return module;
  }
  importLocalModule = async function(modulePath, base = "/", resourceHint, volume2 = {}) {
    base = base ?? "/";
    const _path = path.resolve(base, modulePath);
    if (!volume2[_path]) {
      throw new Error(`The ${resourceHint} file "${path.resolve("/", modulePath)}" does not exist in the volume.`);
    }
    const _moduleContent = prepareModuleContent(volume2[_path], modulePath, volume2);
    return {
      module: await __vitePreload(() => import(`data:text/javascript;base64,${encodeBase64(_moduleContent)}`).then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url).then((m) => m.default ?? m),
      base: path.dirname(modulePath)
    };
  };
  function prepareModuleContent(moduleContent, modulePath, volume2 = {}) {
    let _moduleContent = moduleContent.replace(/module.exports\s*=\s*/, "export default ").replace(/import\s+({[^}]+})\s+from\s+['"](.+)['"]/g, (_, $1, $2) => {
      return `import ${$1.replace(/\n/g, "")} from '${$2}'`;
    }).split("\n").map((line) => {
      return line.replace(/\bimport\s+(.+)\s+from\s+['"](.+)['"]/g, (_, variable, m) => {
        if (!m.startsWith("http") && !m.startsWith(".") && !m.startsWith("/")) {
          m = `https://esm.sh/${m}`;
        }
        return `const ${variable.indexOf("{") === -1 ? `{default: ${variable}}` : variable.replace(/\s+as\s+/, ": ")} = await import('${m}')`;
      }).replace(/\brequire\(['"]([^'"]*)['"]\)/g, (_, m) => {
        if (!m.startsWith("http") && !m.startsWith(".") && !m.startsWith("/")) {
          m = `https://esm.sh/${m}`;
        }
        return `(await import('${m}')).default`;
      });
    }).join("\n");
    const regex = /import\s*(?:[^'"]*\s*from\s*)?['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g;
    const matchPositions = [];
    let match;
    let shift = 0;
    while ((match = regex.exec(_moduleContent)) !== null) {
      const [fullMatch, staticImport, dynamicImport] = match;
      const importPath = staticImport || dynamicImport;
      if (isValidUrl(importPath)) {
        continue;
      }
      if (!importPath.startsWith(".") && !importPath.startsWith("/")) {
        continue;
      }
      const _path = path.resolve(path.dirname(modulePath), importPath);
      const _importModuleContent = volume2[_path];
      if (!_importModuleContent) {
        throw new Error(`${modulePath}: The module file "${_path}" does not exist in the volume.`);
      }
      matchPositions.push({
        start: match.index + fullMatch.indexOf(importPath),
        end: match.index + fullMatch.indexOf(importPath) + importPath.length,
        replacement: new URL(importPath, window.windpress.user_data.data_dir.url).href
      });
    }
    matchPositions.forEach(({ start, end, replacement }) => {
      _moduleContent = _moduleContent.slice(0, start + shift) + replacement + _moduleContent.slice(end + shift);
      shift += replacement.length - (end - start);
    });
    return _moduleContent;
  }
  var picocolors_browser = {
    exports: {}
  };
  var hasRequiredPicocolors_browser;
  requirePicocolors_browser = function() {
    if (hasRequiredPicocolors_browser) return picocolors_browser.exports;
    hasRequiredPicocolors_browser = 1;
    var x = String;
    var create = function() {
      return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x,
        blackBright: x,
        redBright: x,
        greenBright: x,
        yellowBright: x,
        blueBright: x,
        magentaBright: x,
        cyanBright: x,
        whiteBright: x,
        bgBlackBright: x,
        bgRedBright: x,
        bgGreenBright: x,
        bgYellowBright: x,
        bgBlueBright: x,
        bgMagentaBright: x,
        bgCyanBright: x,
        bgWhiteBright: x
      };
    };
    picocolors_browser.exports = create();
    picocolors_browser.exports.createColors = create;
    return picocolors_browser.exports;
  };
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const require$$1$1 = getAugmentedNamespace(__viteBrowserExternal$1);
  var cssSyntaxError;
  var hasRequiredCssSyntaxError;
  function requireCssSyntaxError() {
    if (hasRequiredCssSyntaxError) return cssSyntaxError;
    hasRequiredCssSyntaxError = 1;
    let pico = requirePicocolors_browser();
    let terminalHighlight = require$$1$1;
    class CssSyntaxError extends Error {
      constructor(message, line, column, source, file, plugin) {
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) {
          this.file = file;
        }
        if (source) {
          this.source = source;
        }
        if (plugin) {
          this.plugin = plugin;
        }
        if (typeof line !== "undefined" && typeof column !== "undefined") {
          if (typeof line === "number") {
            this.line = line;
            this.column = column;
          } else {
            this.line = line.line;
            this.column = line.column;
            this.endLine = column.line;
            this.endColumn = column.column;
          }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, CssSyntaxError);
        }
      }
      setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") {
          this.message += ":" + this.line + ":" + this.column;
        }
        this.message += ": " + this.reason;
      }
      showSourceCode(color) {
        if (!this.source) return "";
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        let aside = (text) => text;
        let mark = (text) => text;
        let highlight = (text) => text;
        if (color) {
          let { bold, gray, red } = pico.createColors(true);
          mark = (text) => bold(red(text));
          aside = (text) => gray(text);
          if (terminalHighlight) {
            highlight = (text) => terminalHighlight(text);
          }
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        return lines.slice(start, end).map((line, index) => {
          let number = start + 1 + index;
          let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
          if (number === this.line) {
            if (line.length > 160) {
              let padding2 = 20;
              let subLineStart = Math.max(0, this.column - padding2);
              let subLineEnd = Math.max(this.column + padding2, this.endColumn + padding2);
              let subLine = line.slice(subLineStart, subLineEnd);
              let spacing2 = aside(gutter.replace(/\d/g, " ")) + line.slice(0, Math.min(this.column - 1, padding2 - 1)).replace(/[^\t]/g, " ");
              return mark(">") + aside(gutter) + highlight(subLine) + "\n " + spacing2 + mark("^");
            }
            let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
            return mark(">") + aside(gutter) + highlight(line) + "\n " + spacing + mark("^");
          }
          return " " + aside(gutter) + highlight(line);
        }).join("\n");
      }
      toString() {
        let code = this.showSourceCode();
        if (code) {
          code = "\n\n" + code + "\n";
        }
        return this.name + ": " + this.message + code;
      }
    }
    cssSyntaxError = CssSyntaxError;
    CssSyntaxError.default = CssSyntaxError;
    return cssSyntaxError;
  }
  var stringifier;
  var hasRequiredStringifier;
  function requireStringifier() {
    if (hasRequiredStringifier) return stringifier;
    hasRequiredStringifier = 1;
    const DEFAULT_RAW = {
      after: "\n",
      beforeClose: "\n",
      beforeComment: "\n",
      beforeDecl: "\n",
      beforeOpen: " ",
      beforeRule: "\n",
      colon: ": ",
      commentLeft: " ",
      commentRight: " ",
      emptyBody: "",
      indent: "    ",
      semicolon: false
    };
    function capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    class Stringifier {
      constructor(builder) {
        this.builder = builder;
      }
      atrule(node2, semicolon) {
        let name = "@" + node2.name;
        let params = node2.params ? this.rawValue(node2, "params") : "";
        if (typeof node2.raws.afterName !== "undefined") {
          name += node2.raws.afterName;
        } else if (params) {
          name += " ";
        }
        if (node2.nodes) {
          this.block(node2, name + params);
        } else {
          let end = (node2.raws.between || "") + (semicolon ? ";" : "");
          this.builder(name + params + end, node2);
        }
      }
      beforeAfter(node2, detect) {
        let value;
        if (node2.type === "decl") {
          value = this.raw(node2, null, "beforeDecl");
        } else if (node2.type === "comment") {
          value = this.raw(node2, null, "beforeComment");
        } else if (detect === "before") {
          value = this.raw(node2, null, "beforeRule");
        } else {
          value = this.raw(node2, null, "beforeClose");
        }
        let buf = node2.parent;
        let depth = 0;
        while (buf && buf.type !== "root") {
          depth += 1;
          buf = buf.parent;
        }
        if (value.includes("\n")) {
          let indent = this.raw(node2, null, "indent");
          if (indent.length) {
            for (let step = 0; step < depth; step++) value += indent;
          }
        }
        return value;
      }
      block(node2, start) {
        let between = this.raw(node2, "between", "beforeOpen");
        this.builder(start + between + "{", node2, "start");
        let after;
        if (node2.nodes && node2.nodes.length) {
          this.body(node2);
          after = this.raw(node2, "after");
        } else {
          after = this.raw(node2, "after", "emptyBody");
        }
        if (after) this.builder(after);
        this.builder("}", node2, "end");
      }
      body(node2) {
        let last = node2.nodes.length - 1;
        while (last > 0) {
          if (node2.nodes[last].type !== "comment") break;
          last -= 1;
        }
        let semicolon = this.raw(node2, "semicolon");
        for (let i = 0; i < node2.nodes.length; i++) {
          let child = node2.nodes[i];
          let before = this.raw(child, "before");
          if (before) this.builder(before);
          this.stringify(child, last !== i || semicolon);
        }
      }
      comment(node2) {
        let left = this.raw(node2, "left", "commentLeft");
        let right = this.raw(node2, "right", "commentRight");
        this.builder("/*" + left + node2.text + right + "*/", node2);
      }
      decl(node2, semicolon) {
        let between = this.raw(node2, "between", "colon");
        let string = node2.prop + between + this.rawValue(node2, "value");
        if (node2.important) {
          string += node2.raws.important || " !important";
        }
        if (semicolon) string += ";";
        this.builder(string, node2);
      }
      document(node2) {
        this.body(node2);
      }
      raw(node2, own, detect) {
        let value;
        if (!detect) detect = own;
        if (own) {
          value = node2.raws[own];
          if (typeof value !== "undefined") return value;
        }
        let parent = node2.parent;
        if (detect === "before") {
          if (!parent || parent.type === "root" && parent.first === node2) {
            return "";
          }
          if (parent && parent.type === "document") {
            return "";
          }
        }
        if (!parent) return DEFAULT_RAW[detect];
        let root2 = node2.root();
        if (!root2.rawCache) root2.rawCache = {};
        if (typeof root2.rawCache[detect] !== "undefined") {
          return root2.rawCache[detect];
        }
        if (detect === "before" || detect === "after") {
          return this.beforeAfter(node2, detect);
        } else {
          let method = "raw" + capitalize(detect);
          if (this[method]) {
            value = this[method](root2, node2);
          } else {
            root2.walk((i) => {
              value = i.raws[own];
              if (typeof value !== "undefined") return false;
            });
          }
        }
        if (typeof value === "undefined") value = DEFAULT_RAW[detect];
        root2.rawCache[detect] = value;
        return value;
      }
      rawBeforeClose(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length > 0) {
            if (typeof i.raws.after !== "undefined") {
              value = i.raws.after;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
      }
      rawBeforeComment(root2, node2) {
        let value;
        root2.walkComments((i) => {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node2, null, "beforeDecl");
        } else if (value) {
          value = value.replace(/\S/g, "");
        }
        return value;
      }
      rawBeforeDecl(root2, node2) {
        let value;
        root2.walkDecls((i) => {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node2, null, "beforeRule");
        } else if (value) {
          value = value.replace(/\S/g, "");
        }
        return value;
      }
      rawBeforeOpen(root2) {
        let value;
        root2.walk((i) => {
          if (i.type !== "decl") {
            value = i.raws.between;
            if (typeof value !== "undefined") return false;
          }
        });
        return value;
      }
      rawBeforeRule(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
            if (typeof i.raws.before !== "undefined") {
              value = i.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
      }
      rawColon(root2) {
        let value;
        root2.walkDecls((i) => {
          if (typeof i.raws.between !== "undefined") {
            value = i.raws.between.replace(/[^\s:]/g, "");
            return false;
          }
        });
        return value;
      }
      rawEmptyBody(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length === 0) {
            value = i.raws.after;
            if (typeof value !== "undefined") return false;
          }
        });
        return value;
      }
      rawIndent(root2) {
        if (root2.raws.indent) return root2.raws.indent;
        let value;
        root2.walk((i) => {
          let p = i.parent;
          if (p && p !== root2 && p.parent && p.parent === root2) {
            if (typeof i.raws.before !== "undefined") {
              let parts = i.raws.before.split("\n");
              value = parts[parts.length - 1];
              value = value.replace(/\S/g, "");
              return false;
            }
          }
        });
        return value;
      }
      rawSemicolon(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length && i.last.type === "decl") {
            value = i.raws.semicolon;
            if (typeof value !== "undefined") return false;
          }
        });
        return value;
      }
      rawValue(node2, prop) {
        let value = node2[prop];
        let raw = node2.raws[prop];
        if (raw && raw.value === value) {
          return raw.raw;
        }
        return value;
      }
      root(node2) {
        this.body(node2);
        if (node2.raws.after) this.builder(node2.raws.after);
      }
      rule(node2) {
        this.block(node2, this.rawValue(node2, "selector"));
        if (node2.raws.ownSemicolon) {
          this.builder(node2.raws.ownSemicolon, node2, "end");
        }
      }
      stringify(node2, semicolon) {
        if (!this[node2.type]) {
          throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
        }
        this[node2.type](node2, semicolon);
      }
    }
    stringifier = Stringifier;
    Stringifier.default = Stringifier;
    return stringifier;
  }
  var stringify_1$1;
  var hasRequiredStringify$1;
  function requireStringify$1() {
    if (hasRequiredStringify$1) return stringify_1$1;
    hasRequiredStringify$1 = 1;
    let Stringifier = requireStringifier();
    function stringify(node2, builder) {
      let str = new Stringifier(builder);
      str.stringify(node2);
    }
    stringify_1$1 = stringify;
    stringify.default = stringify;
    return stringify_1$1;
  }
  var symbols = {};
  var hasRequiredSymbols;
  function requireSymbols() {
    if (hasRequiredSymbols) return symbols;
    hasRequiredSymbols = 1;
    symbols.isClean = Symbol("isClean");
    symbols.my = Symbol("my");
    return symbols;
  }
  var node$1;
  var hasRequiredNode$1;
  function requireNode$1() {
    if (hasRequiredNode$1) return node$1;
    hasRequiredNode$1 = 1;
    let CssSyntaxError = requireCssSyntaxError();
    let Stringifier = requireStringifier();
    let stringify = requireStringify$1();
    let { isClean, my } = requireSymbols();
    function cloneNode(obj, parent) {
      let cloned = new obj.constructor();
      for (let i in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
          continue;
        }
        if (i === "proxyCache") continue;
        let value = obj[i];
        let type2 = typeof value;
        if (i === "parent" && type2 === "object") {
          if (parent) cloned[i] = parent;
        } else if (i === "source") {
          cloned[i] = value;
        } else if (Array.isArray(value)) {
          cloned[i] = value.map((j) => cloneNode(j, cloned));
        } else {
          if (type2 === "object" && value !== null) value = cloneNode(value);
          cloned[i] = value;
        }
      }
      return cloned;
    }
    function sourceOffset(inputCSS, position) {
      if (position && typeof position.offset !== "undefined") {
        return position.offset;
      }
      let column = 1;
      let line = 1;
      let offset = 0;
      for (let i = 0; i < inputCSS.length; i++) {
        if (line === position.line && column === position.column) {
          offset = i;
          break;
        }
        if (inputCSS[i] === "\n") {
          column = 1;
          line += 1;
        } else {
          column += 1;
        }
      }
      return offset;
    }
    class Node {
      get proxyOf() {
        return this;
      }
      constructor(defaults = {}) {
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for (let name in defaults) {
          if (name === "nodes") {
            this.nodes = [];
            for (let node2 of defaults[name]) {
              if (typeof node2.clone === "function") {
                this.append(node2.clone());
              } else {
                this.append(node2);
              }
            }
          } else {
            this[name] = defaults[name];
          }
        }
      }
      addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
          let s = this.source;
          error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
      }
      after(add) {
        this.parent.insertAfter(this, add);
        return this;
      }
      assign(overrides = {}) {
        for (let name in overrides) {
          this[name] = overrides[name];
        }
        return this;
      }
      before(add) {
        this.parent.insertBefore(this, add);
        return this;
      }
      cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
      }
      clone(overrides = {}) {
        let cloned = cloneNode(this);
        for (let name in overrides) {
          cloned[name] = overrides[name];
        }
        return cloned;
      }
      cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
      }
      cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
      }
      error(message, opts = {}) {
        if (this.source) {
          let { end, start } = this.rangeBy(opts);
          return this.source.input.error(message, {
            column: start.column,
            line: start.line
          }, {
            column: end.column,
            line: end.line
          }, opts);
        }
        return new CssSyntaxError(message);
      }
      getProxyProcessor() {
        return {
          get(node2, prop) {
            if (prop === "proxyOf") {
              return node2;
            } else if (prop === "root") {
              return () => node2.root().toProxy();
            } else {
              return node2[prop];
            }
          },
          set(node2, prop, value) {
            if (node2[prop] === value) return true;
            node2[prop] = value;
            if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") {
              node2.markDirty();
            }
            return true;
          }
        };
      }
      markClean() {
        this[isClean] = true;
      }
      markDirty() {
        if (this[isClean]) {
          this[isClean] = false;
          let next = this;
          while (next = next.parent) {
            next[isClean] = false;
          }
        }
      }
      next() {
        if (!this.parent) return void 0;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
      }
      positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) {
          pos = this.positionInside(opts.index);
        } else if (opts.word) {
          let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
          let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
          let index = stringRepresentation.indexOf(opts.word);
          if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
      }
      positionInside(index) {
        let column = this.source.start.column;
        let line = this.source.start.line;
        let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
        let offset = sourceOffset(inputString, this.source.start);
        let end = offset + index;
        for (let i = offset; i < end; i++) {
          if (inputString[i] === "\n") {
            column = 1;
            line += 1;
          } else {
            column += 1;
          }
        }
        return {
          column,
          line
        };
      }
      prev() {
        if (!this.parent) return void 0;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
      }
      rangeBy(opts) {
        let start = {
          column: this.source.start.column,
          line: this.source.start.line
        };
        let end = this.source.end ? {
          column: this.source.end.column + 1,
          line: this.source.end.line
        } : {
          column: start.column + 1,
          line: start.line
        };
        if (opts.word) {
          let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
          let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
          let index = stringRepresentation.indexOf(opts.word);
          if (index !== -1) {
            start = this.positionInside(index);
            end = this.positionInside(index + opts.word.length);
          }
        } else {
          if (opts.start) {
            start = {
              column: opts.start.column,
              line: opts.start.line
            };
          } else if (opts.index) {
            start = this.positionInside(opts.index);
          }
          if (opts.end) {
            end = {
              column: opts.end.column,
              line: opts.end.line
            };
          } else if (typeof opts.endIndex === "number") {
            end = this.positionInside(opts.endIndex);
          } else if (opts.index) {
            end = this.positionInside(opts.index + 1);
          }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
          end = {
            column: start.column + 1,
            line: start.line
          };
        }
        return {
          end,
          start
        };
      }
      raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
      }
      remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
      }
      replaceWith(...nodes) {
        if (this.parent) {
          let bookmark = this;
          let foundSelf = false;
          for (let node2 of nodes) {
            if (node2 === this) {
              foundSelf = true;
            } else if (foundSelf) {
              this.parent.insertAfter(bookmark, node2);
              bookmark = node2;
            } else {
              this.parent.insertBefore(bookmark, node2);
            }
          }
          if (!foundSelf) {
            this.remove();
          }
        }
        return this;
      }
      root() {
        let result2 = this;
        while (result2.parent && result2.parent.type !== "document") {
          result2 = result2.parent;
        }
        return result2;
      }
      toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || /* @__PURE__ */ new Map();
        let inputsNextIndex = 0;
        for (let name in this) {
          if (!Object.prototype.hasOwnProperty.call(this, name)) {
            continue;
          }
          if (name === "parent" || name === "proxyCache") continue;
          let value = this[name];
          if (Array.isArray(value)) {
            fixed[name] = value.map((i) => {
              if (typeof i === "object" && i.toJSON) {
                return i.toJSON(null, inputs);
              } else {
                return i;
              }
            });
          } else if (typeof value === "object" && value.toJSON) {
            fixed[name] = value.toJSON(null, inputs);
          } else if (name === "source") {
            let inputId = inputs.get(value.input);
            if (inputId == null) {
              inputId = inputsNextIndex;
              inputs.set(value.input, inputsNextIndex);
              inputsNextIndex++;
            }
            fixed[name] = {
              end: value.end,
              inputId,
              start: value.start
            };
          } else {
            fixed[name] = value;
          }
        }
        if (emitInputs) {
          fixed.inputs = [
            ...inputs.keys()
          ].map((input2) => input2.toJSON());
        }
        return fixed;
      }
      toProxy() {
        if (!this.proxyCache) {
          this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
      }
      toString(stringifier2 = stringify) {
        if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
        let result2 = "";
        stringifier2(this, (i) => {
          result2 += i;
        });
        return result2;
      }
      warn(result2, text, opts) {
        let data = {
          node: this
        };
        for (let i in opts) data[i] = opts[i];
        return result2.warn(text, data);
      }
    }
    node$1 = Node;
    Node.default = Node;
    return node$1;
  }
  var comment;
  var hasRequiredComment;
  function requireComment() {
    if (hasRequiredComment) return comment;
    hasRequiredComment = 1;
    let Node = requireNode$1();
    class Comment extends Node {
      constructor(defaults) {
        super(defaults);
        this.type = "comment";
      }
    }
    comment = Comment;
    Comment.default = Comment;
    return comment;
  }
  var declaration;
  var hasRequiredDeclaration;
  function requireDeclaration() {
    if (hasRequiredDeclaration) return declaration;
    hasRequiredDeclaration = 1;
    let Node = requireNode$1();
    class Declaration extends Node {
      get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
      }
      constructor(defaults) {
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
          defaults = {
            ...defaults,
            value: String(defaults.value)
          };
        }
        super(defaults);
        this.type = "decl";
      }
    }
    declaration = Declaration;
    Declaration.default = Declaration;
    return declaration;
  }
  var container;
  var hasRequiredContainer;
  function requireContainer() {
    if (hasRequiredContainer) return container;
    hasRequiredContainer = 1;
    let Comment = requireComment();
    let Declaration = requireDeclaration();
    let Node = requireNode$1();
    let { isClean, my } = requireSymbols();
    let AtRule, parse2, Root, Rule;
    function cleanSource(nodes) {
      return nodes.map((i) => {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
      });
    }
    function markTreeDirty(node2) {
      node2[isClean] = false;
      if (node2.proxyOf.nodes) {
        for (let i of node2.proxyOf.nodes) {
          markTreeDirty(i);
        }
      }
    }
    class Container extends Node {
      get first() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[0];
      }
      get last() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
      append(...children) {
        for (let child of children) {
          let nodes = this.normalize(child, this.last);
          for (let node2 of nodes) this.proxyOf.nodes.push(node2);
        }
        this.markDirty();
        return this;
      }
      cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
          for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
        }
      }
      each(callback) {
        if (!this.proxyOf.nodes) return void 0;
        let iterator = this.getIterator();
        let index, result2;
        while (this.indexes[iterator] < this.proxyOf.nodes.length) {
          index = this.indexes[iterator];
          result2 = callback(this.proxyOf.nodes[index], index);
          if (result2 === false) break;
          this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result2;
      }
      every(condition) {
        return this.nodes.every(condition);
      }
      getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
      }
      getProxyProcessor() {
        return {
          get(node2, prop) {
            if (prop === "proxyOf") {
              return node2;
            } else if (!node2[prop]) {
              return node2[prop];
            } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
              return (...args) => {
                return node2[prop](...args.map((i) => {
                  if (typeof i === "function") {
                    return (child, index) => i(child.toProxy(), index);
                  } else {
                    return i;
                  }
                }));
              };
            } else if (prop === "every" || prop === "some") {
              return (cb) => {
                return node2[prop]((child, ...other) => cb(child.toProxy(), ...other));
              };
            } else if (prop === "root") {
              return () => node2.root().toProxy();
            } else if (prop === "nodes") {
              return node2.nodes.map((i) => i.toProxy());
            } else if (prop === "first" || prop === "last") {
              return node2[prop].toProxy();
            } else {
              return node2[prop];
            }
          },
          set(node2, prop, value) {
            if (node2[prop] === value) return true;
            node2[prop] = value;
            if (prop === "name" || prop === "params" || prop === "selector") {
              node2.markDirty();
            }
            return true;
          }
        };
      }
      index(child) {
        if (typeof child === "number") return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
      }
      insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (existIndex < index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type2 = existIndex === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type2).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (existIndex <= index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      normalize(nodes, sample) {
        if (typeof nodes === "string") {
          nodes = cleanSource(parse2(nodes).nodes);
        } else if (typeof nodes === "undefined") {
          nodes = [];
        } else if (Array.isArray(nodes)) {
          nodes = nodes.slice(0);
          for (let i of nodes) {
            if (i.parent) i.parent.removeChild(i, "ignore");
          }
        } else if (nodes.type === "root" && this.type !== "document") {
          nodes = nodes.nodes.slice(0);
          for (let i of nodes) {
            if (i.parent) i.parent.removeChild(i, "ignore");
          }
        } else if (nodes.type) {
          nodes = [
            nodes
          ];
        } else if (nodes.prop) {
          if (typeof nodes.value === "undefined") {
            throw new Error("Value field is missed in node creation");
          } else if (typeof nodes.value !== "string") {
            nodes.value = String(nodes.value);
          }
          nodes = [
            new Declaration(nodes)
          ];
        } else if (nodes.selector || nodes.selectors) {
          nodes = [
            new Rule(nodes)
          ];
        } else if (nodes.name) {
          nodes = [
            new AtRule(nodes)
          ];
        } else if (nodes.text) {
          nodes = [
            new Comment(nodes)
          ];
        } else {
          throw new Error("Unknown node type in node creation");
        }
        let processed = nodes.map((i) => {
          if (!i[my]) Container.rebuild(i);
          i = i.proxyOf;
          if (i.parent) i.parent.removeChild(i);
          if (i[isClean]) markTreeDirty(i);
          if (!i.raws) i.raws = {};
          if (typeof i.raws.before === "undefined") {
            if (sample && typeof sample.raws.before !== "undefined") {
              i.raws.before = sample.raws.before.replace(/\S/g, "");
            }
          }
          i.parent = this.proxyOf;
          return i;
        });
        return processed;
      }
      prepend(...children) {
        children = children.reverse();
        for (let child of children) {
          let nodes = this.normalize(child, this.first, "prepend").reverse();
          for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
          for (let id in this.indexes) {
            this.indexes[id] = this.indexes[id] + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
      }
      removeAll() {
        for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
      }
      removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = void 0;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (index >= child) {
            this.indexes[id] = index - 1;
          }
        }
        this.markDirty();
        return this;
      }
      replaceValues(pattern, opts, callback) {
        if (!callback) {
          callback = opts;
          opts = {};
        }
        this.walkDecls((decl) => {
          if (opts.props && !opts.props.includes(decl.prop)) return;
          if (opts.fast && !decl.value.includes(opts.fast)) return;
          decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
      }
      some(condition) {
        return this.nodes.some(condition);
      }
      walk(callback) {
        return this.each((child, i) => {
          let result2;
          try {
            result2 = callback(child, i);
          } catch (e) {
            throw child.addToError(e);
          }
          if (result2 !== false && child.walk) {
            result2 = child.walk(callback);
          }
          return result2;
        });
      }
      walkAtRules(name, callback) {
        if (!callback) {
          callback = name;
          return this.walk((child, i) => {
            if (child.type === "atrule") {
              return callback(child, i);
            }
          });
        }
        if (name instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "atrule" && name.test(child.name)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "atrule" && child.name === name) {
            return callback(child, i);
          }
        });
      }
      walkComments(callback) {
        return this.walk((child, i) => {
          if (child.type === "comment") {
            return callback(child, i);
          }
        });
      }
      walkDecls(prop, callback) {
        if (!callback) {
          callback = prop;
          return this.walk((child, i) => {
            if (child.type === "decl") {
              return callback(child, i);
            }
          });
        }
        if (prop instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "decl" && prop.test(child.prop)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "decl" && child.prop === prop) {
            return callback(child, i);
          }
        });
      }
      walkRules(selector, callback) {
        if (!callback) {
          callback = selector;
          return this.walk((child, i) => {
            if (child.type === "rule") {
              return callback(child, i);
            }
          });
        }
        if (selector instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "rule" && selector.test(child.selector)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "rule" && child.selector === selector) {
            return callback(child, i);
          }
        });
      }
    }
    Container.registerParse = (dependant) => {
      parse2 = dependant;
    };
    Container.registerRule = (dependant) => {
      Rule = dependant;
    };
    Container.registerAtRule = (dependant) => {
      AtRule = dependant;
    };
    Container.registerRoot = (dependant) => {
      Root = dependant;
    };
    container = Container;
    Container.default = Container;
    Container.rebuild = (node2) => {
      if (node2.type === "atrule") {
        Object.setPrototypeOf(node2, AtRule.prototype);
      } else if (node2.type === "rule") {
        Object.setPrototypeOf(node2, Rule.prototype);
      } else if (node2.type === "decl") {
        Object.setPrototypeOf(node2, Declaration.prototype);
      } else if (node2.type === "comment") {
        Object.setPrototypeOf(node2, Comment.prototype);
      } else if (node2.type === "root") {
        Object.setPrototypeOf(node2, Root.prototype);
      }
      node2[my] = true;
      if (node2.nodes) {
        node2.nodes.forEach((child) => {
          Container.rebuild(child);
        });
      }
    };
    return container;
  }
  var atRule;
  var hasRequiredAtRule;
  function requireAtRule() {
    if (hasRequiredAtRule) return atRule;
    hasRequiredAtRule = 1;
    let Container = requireContainer();
    class AtRule extends Container {
      constructor(defaults) {
        super(defaults);
        this.type = "atrule";
      }
      append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
      }
      prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
      }
    }
    atRule = AtRule;
    AtRule.default = AtRule;
    Container.registerAtRule(AtRule);
    return atRule;
  }
  var document$1;
  var hasRequiredDocument;
  function requireDocument() {
    if (hasRequiredDocument) return document$1;
    hasRequiredDocument = 1;
    let Container = requireContainer();
    let LazyResult, Processor;
    class Document extends Container {
      constructor(defaults) {
        super({
          type: "document",
          ...defaults
        });
        if (!this.nodes) {
          this.nodes = [];
        }
      }
      toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
      }
    }
    Document.registerLazyResult = (dependant) => {
      LazyResult = dependant;
    };
    Document.registerProcessor = (dependant) => {
      Processor = dependant;
    };
    document$1 = Document;
    Document.default = Document;
    return document$1;
  }
  var nonSecure;
  var hasRequiredNonSecure;
  function requireNonSecure() {
    if (hasRequiredNonSecure) return nonSecure;
    hasRequiredNonSecure = 1;
    let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    let customAlphabet = (alphabet2, defaultSize = 21) => {
      return (size = defaultSize) => {
        let id = "";
        let i = size | 0;
        while (i--) {
          id += alphabet2[Math.random() * alphabet2.length | 0];
        }
        return id;
      };
    };
    let nanoid = (size = 21) => {
      let id = "";
      let i = size | 0;
      while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
      }
      return id;
    };
    nonSecure = {
      nanoid,
      customAlphabet
    };
    return nonSecure;
  }
  var punycode$2 = {
    exports: {}
  };
  var punycode$1 = punycode$2.exports;
  var hasRequiredPunycode;
  function requirePunycode() {
    if (hasRequiredPunycode) return punycode$2.exports;
    hasRequiredPunycode = 1;
    (function(module, exports) {
      (function(root2) {
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = module && !module.nodeType && module;
        var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
          root2 = freeGlobal;
        }
        var punycode2, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors2 = {
          "overflow": "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        }, baseMinusTMin = base - tMin, floor2 = Math.floor, stringFromCharCode = String.fromCharCode, key;
        function error(type2) {
          throw new RangeError(errors2[type2]);
        }
        function map(array, fn) {
          var length = array.length;
          var result2 = [];
          while (length--) {
            result2[length] = fn(array[length]);
          }
          return result2;
        }
        function mapDomain(string, fn) {
          var parts = string.split("@");
          var result2 = "";
          if (parts.length > 1) {
            result2 = parts[0] + "@";
            string = parts[1];
          }
          string = string.replace(regexSeparators, ".");
          var labels = string.split(".");
          var encoded = map(labels, fn).join(".");
          return result2 + encoded;
        }
        function ucs2decode(string) {
          var output = [], counter = 0, length = string.length, value, extra;
          while (counter < length) {
            value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
              extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        }
        function ucs2encode(array) {
          return map(array, function(value) {
            var output = "";
            if (value > 65535) {
              value -= 65536;
              output += stringFromCharCode(value >>> 10 & 1023 | 55296);
              value = 56320 | value & 1023;
            }
            output += stringFromCharCode(value);
            return output;
          }).join("");
        }
        function basicToDigit(codePoint) {
          if (codePoint - 48 < 10) {
            return codePoint - 22;
          }
          if (codePoint - 65 < 26) {
            return codePoint - 65;
          }
          if (codePoint - 97 < 26) {
            return codePoint - 97;
          }
          return base;
        }
        function digitToBasic(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }
        function adapt(delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor2(delta / damp) : delta >> 1;
          delta += floor2(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor2(delta / baseMinusTMin);
          }
          return floor2(k + (baseMinusTMin + 1) * delta / (delta + skew));
        }
        function decode2(input2) {
          var output = [], inputLength = input2.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
          basic = input2.lastIndexOf(delimiter);
          if (basic < 0) {
            basic = 0;
          }
          for (j = 0; j < basic; ++j) {
            if (input2.charCodeAt(j) >= 128) {
              error("not-basic");
            }
            output.push(input2.charCodeAt(j));
          }
          for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
            for (oldi = i, w = 1, k = base; ; k += base) {
              if (index >= inputLength) {
                error("invalid-input");
              }
              digit = basicToDigit(input2.charCodeAt(index++));
              if (digit >= base || digit > floor2((maxInt - i) / w)) {
                error("overflow");
              }
              i += digit * w;
              t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (digit < t) {
                break;
              }
              baseMinusT = base - t;
              if (w > floor2(maxInt / baseMinusT)) {
                error("overflow");
              }
              w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            if (floor2(i / out) > maxInt - n) {
              error("overflow");
            }
            n += floor2(i / out);
            i %= out;
            output.splice(i++, 0, n);
          }
          return ucs2encode(output);
        }
        function encode2(input2) {
          var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
          input2 = ucs2decode(input2);
          inputLength = input2.length;
          n = initialN;
          delta = 0;
          bias = initialBias;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input2[j];
            if (currentValue < 128) {
              output.push(stringFromCharCode(currentValue));
            }
          }
          handledCPCount = basicLength = output.length;
          if (basicLength) {
            output.push(delimiter);
          }
          while (handledCPCount < inputLength) {
            for (m = maxInt, j = 0; j < inputLength; ++j) {
              currentValue = input2[j];
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor2((maxInt - delta) / handledCPCountPlusOne)) {
              error("overflow");
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for (j = 0; j < inputLength; ++j) {
              currentValue = input2[j];
              if (currentValue < n && ++delta > maxInt) {
                error("overflow");
              }
              if (currentValue == n) {
                for (q = delta, k = base; ; k += base) {
                  t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  qMinusT = q - t;
                  baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor2(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
            ++delta;
            ++n;
          }
          return output.join("");
        }
        function toUnicode(input2) {
          return mapDomain(input2, function(string) {
            return regexPunycode.test(string) ? decode2(string.slice(4).toLowerCase()) : string;
          });
        }
        function toASCII(input2) {
          return mapDomain(input2, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode2(string) : string;
          });
        }
        punycode2 = {
          "version": "1.4.1",
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode2,
          "encode": encode2,
          "toASCII": toASCII,
          "toUnicode": toUnicode
        };
        if (freeExports && freeModule) {
          if (module.exports == freeExports) {
            freeModule.exports = punycode2;
          } else {
            for (key in punycode2) {
              punycode2.hasOwnProperty(key) && (freeExports[key] = punycode2[key]);
            }
          }
        } else {
          root2.punycode = punycode2;
        }
      })(punycode$1);
    })(punycode$2, punycode$2.exports);
    return punycode$2.exports;
  }
  var punycodeExports = requirePunycode();
  const require$$0$1 = getDefaultExportFromCjs(punycodeExports);
  var type;
  var hasRequiredType;
  function requireType() {
    if (hasRequiredType) return type;
    hasRequiredType = 1;
    type = TypeError;
    return type;
  }
  var objectInspect;
  var hasRequiredObjectInspect;
  function requireObjectInspect() {
    if (hasRequiredObjectInspect) return objectInspect;
    hasRequiredObjectInspect = 1;
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require$$1$1;
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    objectInspect = function inspect_(obj, options2, depth, seen) {
      var opts = options2 || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, {
            depth: maxDepth - depth
          });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type2) {
      return type2 + " { ? }";
    }
    function collectionOf(type2, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type2 + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
    return objectInspect;
  }
  var sideChannelList;
  var hasRequiredSideChannelList;
  function requireSideChannelList() {
    if (hasRequiredSideChannelList) return sideChannelList;
    hasRequiredSideChannelList = 1;
    var inspect = requireObjectInspect();
    var $TypeError = requireType();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node2 = listGetNode(objects, key);
      return node2 && node2.value;
    };
    var listSet = function(objects, key, value) {
      var node2 = listGetNode(objects, key);
      if (node2) {
        node2.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    sideChannelList = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var root2 = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root2 && root2 === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet($o, key, value);
        }
      };
      return channel;
    };
    return sideChannelList;
  }
  var esObjectAtoms;
  var hasRequiredEsObjectAtoms;
  function requireEsObjectAtoms() {
    if (hasRequiredEsObjectAtoms) return esObjectAtoms;
    hasRequiredEsObjectAtoms = 1;
    esObjectAtoms = Object;
    return esObjectAtoms;
  }
  var esErrors;
  var hasRequiredEsErrors;
  function requireEsErrors() {
    if (hasRequiredEsErrors) return esErrors;
    hasRequiredEsErrors = 1;
    esErrors = Error;
    return esErrors;
  }
  var _eval;
  var hasRequired_eval;
  function require_eval() {
    if (hasRequired_eval) return _eval;
    hasRequired_eval = 1;
    _eval = EvalError;
    return _eval;
  }
  var range;
  var hasRequiredRange;
  function requireRange() {
    if (hasRequiredRange) return range;
    hasRequiredRange = 1;
    range = RangeError;
    return range;
  }
  var ref;
  var hasRequiredRef;
  function requireRef() {
    if (hasRequiredRef) return ref;
    hasRequiredRef = 1;
    ref = ReferenceError;
    return ref;
  }
  var syntax;
  var hasRequiredSyntax;
  function requireSyntax() {
    if (hasRequiredSyntax) return syntax;
    hasRequiredSyntax = 1;
    syntax = SyntaxError;
    return syntax;
  }
  var uri;
  var hasRequiredUri;
  function requireUri() {
    if (hasRequiredUri) return uri;
    hasRequiredUri = 1;
    uri = URIError;
    return uri;
  }
  var abs;
  var hasRequiredAbs;
  function requireAbs() {
    if (hasRequiredAbs) return abs;
    hasRequiredAbs = 1;
    abs = Math.abs;
    return abs;
  }
  var floor;
  var hasRequiredFloor;
  function requireFloor() {
    if (hasRequiredFloor) return floor;
    hasRequiredFloor = 1;
    floor = Math.floor;
    return floor;
  }
  var max;
  var hasRequiredMax;
  function requireMax() {
    if (hasRequiredMax) return max;
    hasRequiredMax = 1;
    max = Math.max;
    return max;
  }
  var min;
  var hasRequiredMin;
  function requireMin() {
    if (hasRequiredMin) return min;
    hasRequiredMin = 1;
    min = Math.min;
    return min;
  }
  var pow;
  var hasRequiredPow;
  function requirePow() {
    if (hasRequiredPow) return pow;
    hasRequiredPow = 1;
    pow = Math.pow;
    return pow;
  }
  var round;
  var hasRequiredRound;
  function requireRound() {
    if (hasRequiredRound) return round;
    hasRequiredRound = 1;
    round = Math.round;
    return round;
  }
  var _isNaN;
  var hasRequired_isNaN;
  function require_isNaN() {
    if (hasRequired_isNaN) return _isNaN;
    hasRequired_isNaN = 1;
    _isNaN = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
    return _isNaN;
  }
  var sign;
  var hasRequiredSign;
  function requireSign() {
    if (hasRequiredSign) return sign;
    hasRequiredSign = 1;
    var $isNaN = require_isNaN();
    sign = function sign2(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
    return sign;
  }
  var gOPD;
  var hasRequiredGOPD;
  function requireGOPD() {
    if (hasRequiredGOPD) return gOPD;
    hasRequiredGOPD = 1;
    gOPD = Object.getOwnPropertyDescriptor;
    return gOPD;
  }
  var gopd;
  var hasRequiredGopd;
  function requireGopd() {
    if (hasRequiredGopd) return gopd;
    hasRequiredGopd = 1;
    var $gOPD = requireGOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    gopd = $gOPD;
    return gopd;
  }
  var esDefineProperty;
  var hasRequiredEsDefineProperty;
  function requireEsDefineProperty() {
    if (hasRequiredEsDefineProperty) return esDefineProperty;
    hasRequiredEsDefineProperty = 1;
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", {
          value: 1
        });
      } catch (e) {
        $defineProperty = false;
      }
    }
    esDefineProperty = $defineProperty;
    return esDefineProperty;
  }
  var shams$1;
  var hasRequiredShams$1;
  function requireShams$1() {
    if (hasRequiredShams$1) return shams$1;
    hasRequiredShams$1 = 1;
    shams$1 = function hasSymbols2() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
    return shams$1;
  }
  var hasSymbols;
  var hasRequiredHasSymbols;
  function requireHasSymbols() {
    if (hasRequiredHasSymbols) return hasSymbols;
    hasRequiredHasSymbols = 1;
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = requireShams$1();
    hasSymbols = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
    return hasSymbols;
  }
  var Reflect_getPrototypeOf;
  var hasRequiredReflect_getPrototypeOf;
  function requireReflect_getPrototypeOf() {
    if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
    hasRequiredReflect_getPrototypeOf = 1;
    Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
    return Reflect_getPrototypeOf;
  }
  var Object_getPrototypeOf;
  var hasRequiredObject_getPrototypeOf;
  function requireObject_getPrototypeOf() {
    if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
    hasRequiredObject_getPrototypeOf = 1;
    var $Object = requireEsObjectAtoms();
    Object_getPrototypeOf = $Object.getPrototypeOf || null;
    return Object_getPrototypeOf;
  }
  var implementation$4;
  var hasRequiredImplementation$4;
  function requireImplementation$4() {
    if (hasRequiredImplementation$4) return implementation$4;
    hasRequiredImplementation$4 = 1;
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max2 = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    implementation$4 = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(this, concatty(args, arguments));
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        }
        return target.apply(that, concatty(args, arguments));
      };
      var boundLength = max2(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
    return implementation$4;
  }
  var functionBind;
  var hasRequiredFunctionBind;
  function requireFunctionBind() {
    if (hasRequiredFunctionBind) return functionBind;
    hasRequiredFunctionBind = 1;
    var implementation2 = requireImplementation$4();
    functionBind = Function.prototype.bind || implementation2;
    return functionBind;
  }
  var functionCall;
  var hasRequiredFunctionCall;
  function requireFunctionCall() {
    if (hasRequiredFunctionCall) return functionCall;
    hasRequiredFunctionCall = 1;
    functionCall = Function.prototype.call;
    return functionCall;
  }
  var functionApply;
  var hasRequiredFunctionApply;
  function requireFunctionApply() {
    if (hasRequiredFunctionApply) return functionApply;
    hasRequiredFunctionApply = 1;
    functionApply = Function.prototype.apply;
    return functionApply;
  }
  var reflectApply;
  var hasRequiredReflectApply;
  function requireReflectApply() {
    if (hasRequiredReflectApply) return reflectApply;
    hasRequiredReflectApply = 1;
    reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
    return reflectApply;
  }
  var actualApply;
  var hasRequiredActualApply;
  function requireActualApply() {
    if (hasRequiredActualApply) return actualApply;
    hasRequiredActualApply = 1;
    var bind = requireFunctionBind();
    var $apply = requireFunctionApply();
    var $call = requireFunctionCall();
    var $reflectApply = requireReflectApply();
    actualApply = $reflectApply || bind.call($call, $apply);
    return actualApply;
  }
  var callBindApplyHelpers;
  var hasRequiredCallBindApplyHelpers;
  function requireCallBindApplyHelpers() {
    if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
    hasRequiredCallBindApplyHelpers = 1;
    var bind = requireFunctionBind();
    var $TypeError = requireType();
    var $call = requireFunctionCall();
    var $actualApply = requireActualApply();
    callBindApplyHelpers = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
    return callBindApplyHelpers;
  }
  var get;
  var hasRequiredGet;
  function requireGet() {
    if (hasRequiredGet) return get;
    hasRequiredGet = 1;
    var callBind2 = requireCallBindApplyHelpers();
    var gOPD2 = requireGopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD2 && gOPD2(Object.prototype, "__proto__");
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    get = desc && typeof desc.get === "function" ? callBind2([
      desc.get
    ]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    } : false;
    return get;
  }
  var getProto;
  var hasRequiredGetProto;
  function requireGetProto() {
    if (hasRequiredGetProto) return getProto;
    hasRequiredGetProto = 1;
    var reflectGetProto = requireReflect_getPrototypeOf();
    var originalGetProto = requireObject_getPrototypeOf();
    var getDunderProto = requireGet();
    getProto = reflectGetProto ? function getProto2(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto2(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto2(O) {
      return getDunderProto(O);
    } : null;
    return getProto;
  }
  var hasown;
  var hasRequiredHasown;
  requireHasown = function() {
    if (hasRequiredHasown) return hasown;
    hasRequiredHasown = 1;
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = requireFunctionBind();
    hasown = bind.call(call, $hasOwn);
    return hasown;
  };
  var getIntrinsic;
  var hasRequiredGetIntrinsic;
  function requireGetIntrinsic() {
    if (hasRequiredGetIntrinsic) return getIntrinsic;
    hasRequiredGetIntrinsic = 1;
    var undefined$1;
    var $Object = requireEsObjectAtoms();
    var $Error = requireEsErrors();
    var $EvalError = require_eval();
    var $RangeError = requireRange();
    var $ReferenceError = requireRef();
    var $SyntaxError = requireSyntax();
    var $TypeError = requireType();
    var $URIError = requireUri();
    var abs2 = requireAbs();
    var floor2 = requireFloor();
    var max2 = requireMax();
    var min2 = requireMin();
    var pow2 = requirePow();
    var round2 = requireRound();
    var sign2 = requireSign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = requireGopd();
    var $defineProperty = requireEsDefineProperty();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols2 = requireHasSymbols()();
    var getProto2 = requireGetProto();
    var $ObjectGPO = requireObject_getPrototypeOf();
    var $ReflectGPO = requireReflect_getPrototypeOf();
    var $apply = requireFunctionApply();
    var $call = requireFunctionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
      "%AsyncFromSyncIteratorPrototype%": undefined$1,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
      "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
      "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
      "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs2,
      "%Math.floor%": floor2,
      "%Math.max%": max2,
      "%Math.min%": min2,
      "%Math.pow%": pow2,
      "%Math.round%": round2,
      "%Math.sign%": sign2,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto2) {
      try {
        null.error;
      } catch (e) {
        var errorProto = getProto2(getProto2(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto2) {
          value = getProto2(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
      ],
      "%ArrayPrototype%": [
        "Array",
        "prototype"
      ],
      "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
      ],
      "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
      ],
      "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
      ],
      "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
      ],
      "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
      ],
      "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
      ],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
      ],
      "%BooleanPrototype%": [
        "Boolean",
        "prototype"
      ],
      "%DataViewPrototype%": [
        "DataView",
        "prototype"
      ],
      "%DatePrototype%": [
        "Date",
        "prototype"
      ],
      "%ErrorPrototype%": [
        "Error",
        "prototype"
      ],
      "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
      ],
      "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
      ],
      "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
      ],
      "%FunctionPrototype%": [
        "Function",
        "prototype"
      ],
      "%Generator%": [
        "GeneratorFunction",
        "prototype"
      ],
      "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
      ],
      "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
      ],
      "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
      ],
      "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
      ],
      "%JSONParse%": [
        "JSON",
        "parse"
      ],
      "%JSONStringify%": [
        "JSON",
        "stringify"
      ],
      "%MapPrototype%": [
        "Map",
        "prototype"
      ],
      "%NumberPrototype%": [
        "Number",
        "prototype"
      ],
      "%ObjectPrototype%": [
        "Object",
        "prototype"
      ],
      "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
      ],
      "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
      ],
      "%PromisePrototype%": [
        "Promise",
        "prototype"
      ],
      "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
      ],
      "%Promise_all%": [
        "Promise",
        "all"
      ],
      "%Promise_reject%": [
        "Promise",
        "reject"
      ],
      "%Promise_resolve%": [
        "Promise",
        "resolve"
      ],
      "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
      ],
      "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
      ],
      "%RegExpPrototype%": [
        "RegExp",
        "prototype"
      ],
      "%SetPrototype%": [
        "Set",
        "prototype"
      ],
      "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
      ],
      "%StringPrototype%": [
        "String",
        "prototype"
      ],
      "%SymbolPrototype%": [
        "Symbol",
        "prototype"
      ],
      "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
      ],
      "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
      ],
      "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
      ],
      "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
      ],
      "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
      ],
      "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
      ],
      "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
      ],
      "%URIErrorPrototype%": [
        "URIError",
        "prototype"
      ],
      "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
      ],
      "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
      ]
    };
    var bind = requireFunctionBind();
    var hasOwn = requireHasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result2 = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result2[result2.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result2;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    getIntrinsic = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
          0,
          1
        ], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
    return getIntrinsic;
  }
  var callBound$1;
  var hasRequiredCallBound$1;
  function requireCallBound$1() {
    if (hasRequiredCallBound$1) return callBound$1;
    hasRequiredCallBound$1 = 1;
    var GetIntrinsic = requireGetIntrinsic();
    var callBindBasic = requireCallBindApplyHelpers();
    var $indexOf = callBindBasic([
      GetIntrinsic("%String.prototype.indexOf%")
    ]);
    callBound$1 = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic([
          intrinsic
        ]);
      }
      return intrinsic;
    };
    return callBound$1;
  }
  var sideChannelMap;
  var hasRequiredSideChannelMap;
  function requireSideChannelMap() {
    if (hasRequiredSideChannelMap) return sideChannelMap;
    hasRequiredSideChannelMap = 1;
    var GetIntrinsic = requireGetIntrinsic();
    var callBound2 = requireCallBound$1();
    var inspect = requireObjectInspect();
    var $TypeError = requireType();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound2("Map.prototype.get", true);
    var $mapSet = callBound2("Map.prototype.set", true);
    var $mapHas = callBound2("Map.prototype.has", true);
    var $mapDelete = callBound2("Map.prototype.delete", true);
    var $mapSize = callBound2("Map.prototype.size", true);
    sideChannelMap = !!$Map && function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result2 = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result2;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
    return sideChannelMap;
  }
  var sideChannelWeakmap;
  var hasRequiredSideChannelWeakmap;
  function requireSideChannelWeakmap() {
    if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
    hasRequiredSideChannelWeakmap = 1;
    var GetIntrinsic = requireGetIntrinsic();
    var callBound2 = requireCallBound$1();
    var inspect = requireObjectInspect();
    var getSideChannelMap = requireSideChannelMap();
    var $TypeError = requireType();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound2("WeakMap.prototype.get", true);
    var $weakMapSet = callBound2("WeakMap.prototype.set", true);
    var $weakMapHas = callBound2("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
    sideChannelWeakmap = $WeakMap ? function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key);
            }
          }
          return false;
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key, value);
          }
        }
      };
      return channel;
    } : getSideChannelMap;
    return sideChannelWeakmap;
  }
  var sideChannel;
  var hasRequiredSideChannel;
  function requireSideChannel() {
    if (hasRequiredSideChannel) return sideChannel;
    hasRequiredSideChannel = 1;
    var $TypeError = requireType();
    var inspect = requireObjectInspect();
    var getSideChannelList = requireSideChannelList();
    var getSideChannelMap = requireSideChannelMap();
    var getSideChannelWeakMap = requireSideChannelWeakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    sideChannel = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
    return sideChannel;
  }
  var formats;
  var hasRequiredFormats;
  function requireFormats() {
    if (hasRequiredFormats) return formats;
    hasRequiredFormats = 1;
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    formats = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
    return formats;
  }
  var utils;
  var hasRequiredUtils;
  function requireUtils() {
    if (hasRequiredUtils) return utils;
    hasRequiredUtils = 1;
    var formats2 = requireFormats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options2) {
      var obj = options2 && options2.plainObjects ? {
        __proto__: null
      } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options2) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options2 && (options2.plainObjects || options2.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [
            target,
            source
          ];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [
          target
        ].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options2);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options2);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options2);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode2 = function(str, defaultDecoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode2 = function encode3(str, defaultEncoder, charset, kind, format2) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format2 === formats2.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [
        {
          obj: {
            o: value
          },
          prop: "o"
        }
      ];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({
              obj,
              prop: key
            });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    utils = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode: decode2,
      encode: encode2,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
    return utils;
  }
  var stringify_1;
  var hasRequiredStringify;
  function requireStringify() {
    if (hasRequiredStringify) return stringify_1;
    hasRequiredStringify = 1;
    var getSideChannel = requireSideChannel();
    var utils2 = requireUtils();
    var formats2 = requireFormats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
      ]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats2["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils2.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats2.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter2, sort, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset, sideChannel2) {
      var obj = object;
      var tmpSc = sideChannel2;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter2 === "function") {
        obj = filter2(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils2.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format2) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format2);
          return [
            formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format2))
          ];
        }
        return [
          formatter(prefix) + "=" + formatter(String(obj))
        ];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils2.maybeMap(obj, encoder);
        }
        objKeys = [
          {
            value: obj.length > 0 ? obj.join(",") || null : void 0
          }
        ];
      } else if (isArray(filter2)) {
        objKeys = filter2;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel2.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel2);
        pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter2, sort, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset, valueSideChannel));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format2 = formats2["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats2.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format2 = opts.format;
      }
      var formatter = formats2.formatters[format2];
      var filter2 = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter2 = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter2,
        format: format2,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    stringify_1 = function(object, opts) {
      var obj = object;
      var options2 = normalizeStringifyOptions(opts);
      var objKeys;
      var filter2;
      if (typeof options2.filter === "function") {
        filter2 = options2.filter;
        obj = filter2("", obj);
      } else if (isArray(options2.filter)) {
        filter2 = options2.filter;
        objKeys = filter2;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options2.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options2.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options2.sort) {
        objKeys.sort(options2.sort);
      }
      var sideChannel2 = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];
        if (options2.skipNulls && value === null) {
          continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options2.allowEmptyArrays, options2.strictNullHandling, options2.skipNulls, options2.encodeDotInKeys, options2.encode ? options2.encoder : null, options2.filter, options2.sort, options2.allowDots, options2.serializeDate, options2.format, options2.formatter, options2.encodeValuesOnly, options2.charset, sideChannel2));
      }
      var joined = keys.join(options2.delimiter);
      var prefix = options2.addQueryPrefix === true ? "?" : "";
      if (options2.charsetSentinel) {
        if (options2.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
    return stringify_1;
  }
  var parse$1;
  var hasRequiredParse$1;
  function requireParse$1() {
    if (hasRequiredParse$1) return parse$1;
    hasRequiredParse$1 = 1;
    var utils2 = requireUtils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils2.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options2, currentArrayLength) {
      if (val && typeof val === "string" && options2.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      if (options2.throwOnLimitExceeded && currentArrayLength >= options2.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options2.arrayLimit + " element" + (options2.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options2) {
      var obj = {
        __proto__: null
      };
      var cleanStr = options2.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options2.parameterLimit === Infinity ? void 0 : options2.parameterLimit;
      var parts = cleanStr.split(options2.delimiter, options2.throwOnLimitExceeded ? limit + 1 : limit);
      if (options2.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options2.charset;
      if (options2.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
          key = options2.decoder(part, defaults.decoder, charset, "key");
          val = options2.strictNullHandling ? null : "";
        } else {
          key = options2.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils2.maybeMap(parseArrayValue(part.slice(pos + 1), options2, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
            return options2.decoder(encodedVal, defaults.decoder, charset, "value");
          });
        }
        if (val && options2.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [
            val
          ] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options2.duplicates === "combine") {
          obj[key] = utils2.combine(obj[key], val);
        } else if (!existing || options2.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options2, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options2, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root2 = chain[i];
        if (root2 === "[]" && options2.parseArrays) {
          obj = options2.allowEmptyArrays && (leaf === "" || options2.strictNullHandling && leaf === null) ? [] : utils2.combine([], leaf);
        } else {
          obj = options2.plainObjects ? {
            __proto__: null
          } : {};
          var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
          var decodedRoot = options2.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options2.parseArrays && decodedRoot === "") {
            obj = {
              0: leaf
            };
          } else if (!isNaN(index) && root2 !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options2.parseArrays && index <= options2.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options2, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options2.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options2.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options2.plainObjects && has.call(Object.prototype, parent)) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options2.depth > 0 && (segment = child.exec(key)) !== null && i < options2.depth) {
        i += 1;
        if (!options2.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options2.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options2.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options2.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options2, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    };
    parse$1 = function(str, opts) {
      var options2 = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options2.plainObjects ? {
          __proto__: null
        } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options2) : str;
      var obj = options2.plainObjects ? {
        __proto__: null
      } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options2, typeof str === "string");
        obj = utils2.merge(obj, newObj, options2);
      }
      if (options2.allowSparse === true) {
        return obj;
      }
      return utils2.compact(obj);
    };
    return parse$1;
  }
  var lib$2;
  var hasRequiredLib$2;
  function requireLib$2() {
    if (hasRequiredLib$2) return lib$2;
    hasRequiredLib$2 = 1;
    var stringify = requireStringify();
    var parse2 = requireParse$1();
    var formats2 = requireFormats();
    lib$2 = {
      formats: formats2,
      parse: parse2,
      stringify
    };
    return lib$2;
  }
  var libExports = requireLib$2();
  const require$$1 = getDefaultExportFromCjs(libExports);
  var punycode = require$$0$1;
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, delims = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "	"
  ], unwise = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`"
  ].concat(delims), autoEscape = [
    "'"
  ].concat(unwise), nonHostChars = [
    "%",
    "/",
    "?",
    ";",
    "#"
  ].concat(autoEscape), hostEndingChars = [
    "/",
    "?",
    "#"
  ], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
    javascript: true,
    "javascript:": true
  }, hostlessProtocol = {
    javascript: true,
    "javascript:": true
  }, slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  }, querystring = require$$1;
  function urlParse(url2, parseQueryString, slashesDenoteHost) {
    if (url2 && typeof url2 === "object" && url2 instanceof Url) {
      return url2;
    }
    var u = new Url();
    u.parse(url2, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url2, parseQueryString, slashesDenoteHost) {
    if (typeof url2 !== "string") {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url2);
    }
    var queryIndex = url2.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url2.indexOf("#") ? "?" : "#", uSplit = url2.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url2 = uSplit.join(splitter);
    var rest = url2;
    rest = rest.trim();
    if (!slashesDenoteHost && url2.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
      var slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf("@");
      } else {
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      if (hostEnd === -1) {
        hostEnd = rest.length;
      }
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || "";
      var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) {
            continue;
          }
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += "x";
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = "/" + notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        this.hostname = punycode.toASCII(this.hostname);
      }
      var p = this.port ? ":" + this.port : "";
      var h = this.hostname || "";
      this.host = h + p;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== "/") {
          rest = "/" + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) {
          continue;
        }
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf("#");
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = "";
      this.query = {};
    }
    if (rest) {
      this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "/";
    }
    if (this.pathname || this.search) {
      var p = this.pathname || "";
      var s = this.search || "";
      this.path = p + s;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (typeof obj === "string") {
      obj = urlParse(obj);
    }
    if (!(obj instanceof Url)) {
      return Url.prototype.format.call(obj);
    }
    return obj.format();
  }
  Url.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ":");
      auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        host += ":" + this.port;
      }
    }
    if (this.query && typeof this.query === "object" && Object.keys(this.query).length) {
      query = querystring.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: false
      });
    }
    var search = this.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":") {
      protocol += ":";
    }
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = "//" + (host || "");
      if (pathname && pathname.charAt(0) !== "/") {
        pathname = "/" + pathname;
      }
    } else if (!host) {
      host = "";
    }
    if (hash && hash.charAt(0) !== "#") {
      hash = "#" + hash;
    }
    if (search && search.charAt(0) !== "?") {
      search = "?" + search;
    }
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source) {
      return relative;
    }
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url.prototype.resolveObject = function(relative) {
    if (typeof relative === "string") {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result2 = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result2[tkey] = this[tkey];
    }
    result2.hash = relative.hash;
    if (relative.href === "") {
      result2.href = result2.format();
      return result2;
    }
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== "protocol") {
          result2[rkey] = relative[rkey];
        }
      }
      if (slashedProtocol[result2.protocol] && result2.hostname && !result2.pathname) {
        result2.pathname = "/";
        result2.path = result2.pathname;
      }
      result2.href = result2.format();
      return result2;
    }
    if (relative.protocol && relative.protocol !== result2.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result2[k] = relative[k];
        }
        result2.href = result2.format();
        return result2;
      }
      result2.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || "").split("/");
        while (relPath.length && !(relative.host = relPath.shift())) {
        }
        if (!relative.host) {
          relative.host = "";
        }
        if (!relative.hostname) {
          relative.hostname = "";
        }
        if (relPath[0] !== "") {
          relPath.unshift("");
        }
        if (relPath.length < 2) {
          relPath.unshift("");
        }
        result2.pathname = relPath.join("/");
      } else {
        result2.pathname = relative.pathname;
      }
      result2.search = relative.search;
      result2.query = relative.query;
      result2.host = relative.host || "";
      result2.auth = relative.auth;
      result2.hostname = relative.hostname || relative.host;
      result2.port = relative.port;
      if (result2.pathname || result2.search) {
        var p = result2.pathname || "";
        var s = result2.search || "";
        result2.path = p + s;
      }
      result2.slashes = result2.slashes || relative.slashes;
      result2.href = result2.format();
      return result2;
    }
    var isSourceAbs = result2.pathname && result2.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result2.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result2.pathname && result2.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result2.protocol && !slashedProtocol[result2.protocol];
    if (psychotic) {
      result2.hostname = "";
      result2.port = null;
      if (result2.host) {
        if (srcPath[0] === "") {
          srcPath[0] = result2.host;
        } else {
          srcPath.unshift(result2.host);
        }
      }
      result2.host = "";
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === "") {
            relPath[0] = relative.host;
          } else {
            relPath.unshift(relative.host);
          }
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    if (isRelAbs) {
      result2.host = relative.host || relative.host === "" ? relative.host : result2.host;
      result2.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result2.hostname;
      result2.search = relative.search;
      result2.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath) {
        srcPath = [];
      }
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result2.search = relative.search;
      result2.query = relative.query;
    } else if (relative.search != null) {
      if (psychotic) {
        result2.host = srcPath.shift();
        result2.hostname = result2.host;
        var authInHost = result2.host && result2.host.indexOf("@") > 0 ? result2.host.split("@") : false;
        if (authInHost) {
          result2.auth = authInHost.shift();
          result2.hostname = authInHost.shift();
          result2.host = result2.hostname;
        }
      }
      result2.search = relative.search;
      result2.query = relative.query;
      if (result2.pathname !== null || result2.search !== null) {
        result2.path = (result2.pathname ? result2.pathname : "") + (result2.search ? result2.search : "");
      }
      result2.href = result2.format();
      return result2;
    }
    if (!srcPath.length) {
      result2.pathname = null;
      if (result2.search) {
        result2.path = "/" + result2.search;
      } else {
        result2.path = null;
      }
      result2.href = result2.format();
      return result2;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result2.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === ".") {
        srcPath.splice(i, 1);
      } else if (last === "..") {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift("..");
      }
    }
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
      srcPath.unshift("");
    }
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
      srcPath.push("");
    }
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    if (psychotic) {
      result2.hostname = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
      result2.host = result2.hostname;
      var authInHost = result2.host && result2.host.indexOf("@") > 0 ? result2.host.split("@") : false;
      if (authInHost) {
        result2.auth = authInHost.shift();
        result2.hostname = authInHost.shift();
        result2.host = result2.hostname;
      }
    }
    mustEndAbs = mustEndAbs || result2.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift("");
    }
    if (srcPath.length > 0) {
      result2.pathname = srcPath.join("/");
    } else {
      result2.pathname = null;
      result2.path = null;
    }
    if (result2.pathname !== null || result2.search !== null) {
      result2.path = (result2.pathname ? result2.pathname : "") + (result2.search ? result2.search : "");
    }
    result2.auth = relative.auth || result2.auth;
    result2.slashes = result2.slashes || relative.slashes;
    result2.href = result2.format();
    return result2;
  };
  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) {
      this.hostname = host;
    }
  };
  var parse = urlParse;
  var resolve$1 = urlResolve;
  var resolveObject = urlResolveObject;
  var format = urlFormat;
  var Url_1 = Url;
  function normalizeArray(parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift("..");
      }
    }
    return parts;
  }
  function resolve() {
    var resolvedPath = "", resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path2 = i >= 0 ? arguments[i] : "/";
      if (typeof path2 !== "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path2) {
        continue;
      }
      resolvedPath = path2 + "/" + resolvedPath;
      resolvedAbsolute = path2.charAt(0) === "/";
    }
    resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
      return !!p;
    }), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  }
  function filter(xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
  }
  var _globalThis = function(Object2) {
    function get2() {
      var _global2 = this || self;
      delete Object2.prototype.__magic__;
      return _global2;
    }
    if (typeof globalThis === "object") {
      return globalThis;
    }
    if (this) {
      return get2();
    } else {
      Object2.defineProperty(Object2.prototype, "__magic__", {
        configurable: true,
        get: get2
      });
      var _global = __magic__;
      return _global;
    }
  }(Object);
  var formatImport = format;
  var parseImport = parse;
  var resolveImport = resolve$1;
  var UrlImport = Url_1;
  var URL$1 = _globalThis.URL;
  var URLSearchParams = _globalThis.URLSearchParams;
  var percentRegEx = /%/g;
  var backslashRegEx = /\\/g;
  var newlineRegEx = /\n/g;
  var carriageReturnRegEx = /\r/g;
  var tabRegEx = /\t/g;
  var CHAR_FORWARD_SLASH = 47;
  function isURLInstance(instance) {
    var resolved = instance != null ? instance : null;
    return Boolean(resolved !== null && (resolved == null ? void 0 : resolved.href) && (resolved == null ? void 0 : resolved.origin));
  }
  function getPathFromURLPosix(url2) {
    if (url2.hostname !== "") {
      throw new TypeError('File URL host must be "localhost" or empty on browser');
    }
    var pathname = url2.pathname;
    for (var n = 0; n < pathname.length; n++) {
      if (pathname[n] === "%") {
        var third = pathname.codePointAt(n + 2) | 32;
        if (pathname[n + 1] === "2" && third === 102) {
          throw new TypeError("File URL path must not include encoded / characters");
        }
      }
    }
    return decodeURIComponent(pathname);
  }
  function encodePathChars(filepath) {
    if (filepath.includes("%")) {
      filepath = filepath.replace(percentRegEx, "%25");
    }
    if (filepath.includes("\\")) {
      filepath = filepath.replace(backslashRegEx, "%5C");
    }
    if (filepath.includes("\n")) {
      filepath = filepath.replace(newlineRegEx, "%0A");
    }
    if (filepath.includes("\r")) {
      filepath = filepath.replace(carriageReturnRegEx, "%0D");
    }
    if (filepath.includes("	")) {
      filepath = filepath.replace(tabRegEx, "%09");
    }
    return filepath;
  }
  var domainToASCII = function domainToASCII2(domain) {
    if (typeof domain === "undefined") {
      throw new TypeError('The "domain" argument must be specified');
    }
    return new URL$1("http://" + domain).hostname;
  };
  var domainToUnicode = function domainToUnicode2(domain) {
    if (typeof domain === "undefined") {
      throw new TypeError('The "domain" argument must be specified');
    }
    return new URL$1("http://" + domain).hostname;
  };
  var pathToFileURL = function pathToFileURL2(filepath) {
    var outURL = new URL$1("file://");
    var resolved = resolve(filepath);
    var filePathLast = filepath.charCodeAt(filepath.length - 1);
    if (filePathLast === CHAR_FORWARD_SLASH && resolved[resolved.length - 1] !== "/") {
      resolved += "/";
    }
    outURL.pathname = encodePathChars(resolved);
    return outURL;
  };
  var fileURLToPath = function fileURLToPath2(path2) {
    if (!isURLInstance(path2) && typeof path2 !== "string") {
      throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof path2 + " (" + path2 + ")");
    }
    var resolved = new URL$1(path2);
    if (resolved.protocol !== "file:") {
      throw new TypeError("The URL must be of scheme file");
    }
    return getPathFromURLPosix(resolved);
  };
  var formatImportWithOverloads = function formatImportWithOverloads2(urlObject, options2) {
    var _options$auth, _options$fragment, _options$search, _options$unicode;
    if (options2 === void 0) {
      options2 = {};
    }
    if (!(urlObject instanceof URL$1)) {
      return formatImport(urlObject);
    }
    if (typeof options2 !== "object" || options2 === null) {
      throw new TypeError('The "options" argument must be of type object.');
    }
    var auth = (_options$auth = options2.auth) != null ? _options$auth : true;
    var fragment = (_options$fragment = options2.fragment) != null ? _options$fragment : true;
    var search = (_options$search = options2.search) != null ? _options$search : true;
    (_options$unicode = options2.unicode) != null ? _options$unicode : false;
    var parsed = new URL$1(urlObject.toString());
    if (!auth) {
      parsed.username = "";
      parsed.password = "";
    }
    if (!fragment) {
      parsed.hash = "";
    }
    if (!search) {
      parsed.search = "";
    }
    return parsed.toString();
  };
  var api = {
    format: formatImportWithOverloads,
    parse: parseImport,
    resolve: resolveImport,
    resolveObject,
    Url: UrlImport,
    URL: URL$1,
    URLSearchParams,
    domainToASCII,
    domainToUnicode,
    pathToFileURL,
    fileURLToPath
  };
  const url = Object.freeze(Object.defineProperty({
    __proto__: null,
    URL: URL$1,
    URLSearchParams,
    Url: UrlImport,
    default: api,
    domainToASCII,
    domainToUnicode,
    fileURLToPath,
    format: formatImportWithOverloads,
    parse: parseImport,
    pathToFileURL,
    resolve: resolveImport,
    resolveObject
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const require$$2 = getAugmentedNamespace(url);
  var lib$1 = {
    exports: {}
  };
  var Stats = {};
  var constants$1 = {};
  var hasRequiredConstants$1;
  function requireConstants$1() {
    if (hasRequiredConstants$1) return constants$1;
    hasRequiredConstants$1 = 1;
    Object.defineProperty(constants$1, "__esModule", {
      value: true
    });
    constants$1.constants = void 0;
    constants$1.constants = {
      O_RDONLY: 0,
      O_WRONLY: 1,
      O_RDWR: 2,
      S_IFMT: 61440,
      S_IFREG: 32768,
      S_IFDIR: 16384,
      S_IFCHR: 8192,
      S_IFBLK: 24576,
      S_IFIFO: 4096,
      S_IFLNK: 40960,
      S_IFSOCK: 49152,
      O_CREAT: 64,
      O_EXCL: 128,
      O_NOCTTY: 256,
      O_TRUNC: 512,
      O_APPEND: 1024,
      O_DIRECTORY: 65536,
      O_NOATIME: 262144,
      O_NOFOLLOW: 131072,
      O_SYNC: 1052672,
      O_SYMLINK: 2097152,
      O_DIRECT: 16384,
      O_NONBLOCK: 2048,
      S_IRWXU: 448,
      S_IRUSR: 256,
      S_IWUSR: 128,
      S_IXUSR: 64,
      S_IRWXG: 56,
      S_IRGRP: 32,
      S_IWGRP: 16,
      S_IXGRP: 8,
      S_IRWXO: 7,
      S_IROTH: 4,
      S_IWOTH: 2,
      S_IXOTH: 1,
      F_OK: 0,
      R_OK: 4,
      W_OK: 2,
      X_OK: 1,
      UV_FS_SYMLINK_DIR: 1,
      UV_FS_SYMLINK_JUNCTION: 2,
      UV_FS_COPYFILE_EXCL: 1,
      UV_FS_COPYFILE_FICLONE: 2,
      UV_FS_COPYFILE_FICLONE_FORCE: 4,
      COPYFILE_EXCL: 1,
      COPYFILE_FICLONE: 2,
      COPYFILE_FICLONE_FORCE: 4
    };
    return constants$1;
  }
  var hasRequiredStats;
  function requireStats() {
    if (hasRequiredStats) return Stats;
    hasRequiredStats = 1;
    Object.defineProperty(Stats, "__esModule", {
      value: true
    });
    Stats.Stats = void 0;
    const constants_1 = requireConstants$1();
    const { S_IFMT, S_IFDIR, S_IFREG, S_IFBLK, S_IFCHR, S_IFLNK, S_IFIFO, S_IFSOCK } = constants_1.constants;
    let Stats$1 = class Stats2 {
      static build(node2, bigint = false) {
        const stats = new Stats2();
        const { uid, gid, atime, mtime, ctime } = node2;
        const getStatNumber = !bigint ? (number) => number : (number) => BigInt(number);
        stats.uid = getStatNumber(uid);
        stats.gid = getStatNumber(gid);
        stats.rdev = getStatNumber(node2.rdev);
        stats.blksize = getStatNumber(4096);
        stats.ino = getStatNumber(node2.ino);
        stats.size = getStatNumber(node2.getSize());
        stats.blocks = getStatNumber(1);
        stats.atime = atime;
        stats.mtime = mtime;
        stats.ctime = ctime;
        stats.birthtime = ctime;
        stats.atimeMs = getStatNumber(atime.getTime());
        stats.mtimeMs = getStatNumber(mtime.getTime());
        const ctimeMs = getStatNumber(ctime.getTime());
        stats.ctimeMs = ctimeMs;
        stats.birthtimeMs = ctimeMs;
        if (bigint) {
          stats.atimeNs = BigInt(atime.getTime()) * BigInt(1e6);
          stats.mtimeNs = BigInt(mtime.getTime()) * BigInt(1e6);
          const ctimeNs = BigInt(ctime.getTime()) * BigInt(1e6);
          stats.ctimeNs = ctimeNs;
          stats.birthtimeNs = ctimeNs;
        }
        stats.dev = getStatNumber(0);
        stats.mode = getStatNumber(node2.mode);
        stats.nlink = getStatNumber(node2.nlink);
        return stats;
      }
      _checkModeProperty(property) {
        return (Number(this.mode) & S_IFMT) === property;
      }
      isDirectory() {
        return this._checkModeProperty(S_IFDIR);
      }
      isFile() {
        return this._checkModeProperty(S_IFREG);
      }
      isBlockDevice() {
        return this._checkModeProperty(S_IFBLK);
      }
      isCharacterDevice() {
        return this._checkModeProperty(S_IFCHR);
      }
      isSymbolicLink() {
        return this._checkModeProperty(S_IFLNK);
      }
      isFIFO() {
        return this._checkModeProperty(S_IFIFO);
      }
      isSocket() {
        return this._checkModeProperty(S_IFSOCK);
      }
    };
    Stats.Stats = Stats$1;
    Stats.default = Stats$1;
    return Stats;
  }
  var Dirent = {};
  var encoding = {};
  var buffer = {};
  var dist$1 = {};
  var hasRequiredDist$1;
  requireDist$1 = function() {
    if (hasRequiredDist$1) return dist$1;
    hasRequiredDist$1 = 1;
    (function(exports) {
      Object.defineProperties(exports, {
        __esModule: {
          value: true
        },
        [Symbol.toStringTag]: {
          value: "Module"
        }
      });
      var buffer2 = {};
      var base64Js = {};
      base64Js.byteLength = byteLength;
      base64Js.toByteArray = toByteArray;
      base64Js.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [
          validLen,
          placeHoldersLen
        ];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
        }
        return parts.join("");
      }
      var ieee754 = {};
      ieee754.read = function(buffer3, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i2 = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer3[offset + i2];
        i2 += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer3[offset + i2], i2 += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer3[offset + i2], i2 += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      ieee754.write = function(buffer3, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i2 = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer3[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer3[offset + i2] = e & 255, i2 += d, e /= 256, eLen -= 8) {
        }
        buffer3[offset + i2 - d] |= s * 128;
      };
      (function(exports2) {
        const base64 = base64Js;
        const ieee754$1 = ieee754;
        const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
        exports2.Buffer = Buffer3;
        exports2.SlowBuffer = SlowBuffer;
        exports2.INSPECT_MAX_BYTES = 50;
        const K_MAX_LENGTH = 2147483647;
        exports2.kMaxLength = K_MAX_LENGTH;
        const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
        Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
        if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
          console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        }
        function typedArraySupport() {
          try {
            const arr = new GlobalUint8Array(1);
            const proto = {
              foo: function() {
                return 42;
              }
            };
            Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
            Object.setPrototypeOf(arr, proto);
            return arr.foo() === 42;
          } catch (e) {
            return false;
          }
        }
        Object.defineProperty(Buffer3.prototype, "parent", {
          enumerable: true,
          get: function() {
            if (!Buffer3.isBuffer(this)) return void 0;
            return this.buffer;
          }
        });
        Object.defineProperty(Buffer3.prototype, "offset", {
          enumerable: true,
          get: function() {
            if (!Buffer3.isBuffer(this)) return void 0;
            return this.byteOffset;
          }
        });
        function createBuffer(length) {
          if (length > K_MAX_LENGTH) {
            throw new RangeError('The value "' + length + '" is invalid for option "size"');
          }
          const buf = new GlobalUint8Array(length);
          Object.setPrototypeOf(buf, Buffer3.prototype);
          return buf;
        }
        function Buffer3(arg, encodingOrOffset, length) {
          if (typeof arg === "number") {
            if (typeof encodingOrOffset === "string") {
              throw new TypeError('The "string" argument must be of type string. Received type number');
            }
            return allocUnsafe(arg);
          }
          return from(arg, encodingOrOffset, length);
        }
        Buffer3.poolSize = 8192;
        function from(value, encodingOrOffset, length) {
          if (typeof value === "string") {
            return fromString(value, encodingOrOffset);
          }
          if (GlobalArrayBuffer.isView(value)) {
            return fromArrayView(value);
          }
          if (value == null) {
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
          }
          if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) {
            return fromArrayBuffer(value, encodingOrOffset, length);
          }
          if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) {
            return fromArrayBuffer(value, encodingOrOffset, length);
          }
          if (typeof value === "number") {
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          }
          const valueOf = value.valueOf && value.valueOf();
          if (valueOf != null && valueOf !== value) {
            return Buffer3.from(valueOf, encodingOrOffset, length);
          }
          const b = fromObject(value);
          if (b) return b;
          if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
            return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
          }
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
        }
        Buffer3.from = function(value, encodingOrOffset, length) {
          return from(value, encodingOrOffset, length);
        };
        Object.setPrototypeOf(Buffer3.prototype, GlobalUint8Array.prototype);
        Object.setPrototypeOf(Buffer3, GlobalUint8Array);
        function assertSize(size) {
          if (typeof size !== "number") {
            throw new TypeError('"size" argument must be of type number');
          } else if (size < 0) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
          }
        }
        function alloc(size, fill, encoding2) {
          assertSize(size);
          if (size <= 0) {
            return createBuffer(size);
          }
          if (fill !== void 0) {
            return typeof encoding2 === "string" ? createBuffer(size).fill(fill, encoding2) : createBuffer(size).fill(fill);
          }
          return createBuffer(size);
        }
        Buffer3.alloc = function(size, fill, encoding2) {
          return alloc(size, fill, encoding2);
        };
        function allocUnsafe(size) {
          assertSize(size);
          return createBuffer(size < 0 ? 0 : checked(size) | 0);
        }
        Buffer3.allocUnsafe = function(size) {
          return allocUnsafe(size);
        };
        Buffer3.allocUnsafeSlow = function(size) {
          return allocUnsafe(size);
        };
        function fromString(string, encoding2) {
          if (typeof encoding2 !== "string" || encoding2 === "") {
            encoding2 = "utf8";
          }
          if (!Buffer3.isEncoding(encoding2)) {
            throw new TypeError("Unknown encoding: " + encoding2);
          }
          const length = byteLength2(string, encoding2) | 0;
          let buf = createBuffer(length);
          const actual = buf.write(string, encoding2);
          if (actual !== length) {
            buf = buf.slice(0, actual);
          }
          return buf;
        }
        function fromArrayLike(array) {
          const length = array.length < 0 ? 0 : checked(array.length) | 0;
          const buf = createBuffer(length);
          for (let i2 = 0; i2 < length; i2 += 1) {
            buf[i2] = array[i2] & 255;
          }
          return buf;
        }
        function fromArrayView(arrayView) {
          if (isInstance(arrayView, GlobalUint8Array)) {
            const copy = new GlobalUint8Array(arrayView);
            return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
          }
          return fromArrayLike(arrayView);
        }
        function fromArrayBuffer(array, byteOffset, length) {
          if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError('"offset" is outside of buffer bounds');
          }
          if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError('"length" is outside of buffer bounds');
          }
          let buf;
          if (byteOffset === void 0 && length === void 0) {
            buf = new GlobalUint8Array(array);
          } else if (length === void 0) {
            buf = new GlobalUint8Array(array, byteOffset);
          } else {
            buf = new GlobalUint8Array(array, byteOffset, length);
          }
          Object.setPrototypeOf(buf, Buffer3.prototype);
          return buf;
        }
        function fromObject(obj) {
          if (Buffer3.isBuffer(obj)) {
            const len2 = checked(obj.length) | 0;
            const buf = createBuffer(len2);
            if (buf.length === 0) {
              return buf;
            }
            obj.copy(buf, 0, 0, len2);
            return buf;
          }
          if (obj.length !== void 0) {
            if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
              return createBuffer(0);
            }
            return fromArrayLike(obj);
          }
          if (obj.type === "Buffer" && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data);
          }
        }
        function checked(length) {
          if (length >= K_MAX_LENGTH) {
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
          }
          return length | 0;
        }
        function SlowBuffer(length) {
          if (+length != length) {
            length = 0;
          }
          return Buffer3.alloc(+length);
        }
        Buffer3.isBuffer = function isBuffer(b) {
          return b != null && b._isBuffer === true && b !== Buffer3.prototype;
        };
        Buffer3.compare = function compare(a, b) {
          if (isInstance(a, GlobalUint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
          if (isInstance(b, GlobalUint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
          if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          }
          if (a === b) return 0;
          let x = a.length;
          let y = b.length;
          for (let i2 = 0, len2 = Math.min(x, y); i2 < len2; ++i2) {
            if (a[i2] !== b[i2]) {
              x = a[i2];
              y = b[i2];
              break;
            }
          }
          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };
        Buffer3.isEncoding = function isEncoding(encoding2) {
          switch (String(encoding2).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        };
        Buffer3.concat = function concat(list, length) {
          if (!Array.isArray(list)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          if (list.length === 0) {
            return Buffer3.alloc(0);
          }
          let i2;
          if (length === void 0) {
            length = 0;
            for (i2 = 0; i2 < list.length; ++i2) {
              length += list[i2].length;
            }
          }
          const buffer3 = Buffer3.allocUnsafe(length);
          let pos = 0;
          for (i2 = 0; i2 < list.length; ++i2) {
            let buf = list[i2];
            if (isInstance(buf, GlobalUint8Array)) {
              if (pos + buf.length > buffer3.length) {
                if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
                buf.copy(buffer3, pos);
              } else {
                GlobalUint8Array.prototype.set.call(buffer3, buf, pos);
              }
            } else if (!Buffer3.isBuffer(buf)) {
              throw new TypeError('"list" argument must be an Array of Buffers');
            } else {
              buf.copy(buffer3, pos);
            }
            pos += buf.length;
          }
          return buffer3;
        };
        function byteLength2(string, encoding2) {
          if (Buffer3.isBuffer(string)) {
            return string.length;
          }
          if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) {
            return string.byteLength;
          }
          if (typeof string !== "string") {
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
          }
          const len2 = string.length;
          const mustMatch = arguments.length > 2 && arguments[2] === true;
          if (!mustMatch && len2 === 0) return 0;
          let loweredCase = false;
          for (; ; ) {
            switch (encoding2) {
              case "ascii":
              case "latin1":
              case "binary":
                return len2;
              case "utf8":
              case "utf-8":
                return utf8ToBytes(string).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return len2 * 2;
              case "hex":
                return len2 >>> 1;
              case "base64":
                return base64ToBytes(string).length;
              default:
                if (loweredCase) {
                  return mustMatch ? -1 : utf8ToBytes(string).length;
                }
                encoding2 = ("" + encoding2).toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer3.byteLength = byteLength2;
        function slowToString(encoding2, start, end) {
          let loweredCase = false;
          if (start === void 0 || start < 0) {
            start = 0;
          }
          if (start > this.length) {
            return "";
          }
          if (end === void 0 || end > this.length) {
            end = this.length;
          }
          if (end <= 0) {
            return "";
          }
          end >>>= 0;
          start >>>= 0;
          if (end <= start) {
            return "";
          }
          if (!encoding2) encoding2 = "utf8";
          while (true) {
            switch (encoding2) {
              case "hex":
                return hexSlice(this, start, end);
              case "utf8":
              case "utf-8":
                return utf8Slice(this, start, end);
              case "ascii":
                return asciiSlice(this, start, end);
              case "latin1":
              case "binary":
                return latin1Slice(this, start, end);
              case "base64":
                return base64Slice(this, start, end);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return utf16leSlice(this, start, end);
              default:
                if (loweredCase) throw new TypeError("Unknown encoding: " + encoding2);
                encoding2 = (encoding2 + "").toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer3.prototype._isBuffer = true;
        function swap(b, n, m) {
          const i2 = b[n];
          b[n] = b[m];
          b[m] = i2;
        }
        Buffer3.prototype.swap16 = function swap16() {
          const len2 = this.length;
          if (len2 % 2 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          }
          for (let i2 = 0; i2 < len2; i2 += 2) {
            swap(this, i2, i2 + 1);
          }
          return this;
        };
        Buffer3.prototype.swap32 = function swap32() {
          const len2 = this.length;
          if (len2 % 4 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          }
          for (let i2 = 0; i2 < len2; i2 += 4) {
            swap(this, i2, i2 + 3);
            swap(this, i2 + 1, i2 + 2);
          }
          return this;
        };
        Buffer3.prototype.swap64 = function swap64() {
          const len2 = this.length;
          if (len2 % 8 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          }
          for (let i2 = 0; i2 < len2; i2 += 8) {
            swap(this, i2, i2 + 7);
            swap(this, i2 + 1, i2 + 6);
            swap(this, i2 + 2, i2 + 5);
            swap(this, i2 + 3, i2 + 4);
          }
          return this;
        };
        Buffer3.prototype.toString = function toString() {
          const length = this.length;
          if (length === 0) return "";
          if (arguments.length === 0) return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };
        Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
        Buffer3.prototype.equals = function equals(b) {
          if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
          if (this === b) return true;
          return Buffer3.compare(this, b) === 0;
        };
        Buffer3.prototype.inspect = function inspect() {
          let str = "";
          const max2 = exports2.INSPECT_MAX_BYTES;
          str = this.toString("hex", 0, max2).replace(/(.{2})/g, "$1 ").trim();
          if (this.length > max2) str += " ... ";
          return "<Buffer " + str + ">";
        };
        if (customInspectSymbol) {
          Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
        }
        Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
          if (isInstance(target, GlobalUint8Array)) {
            target = Buffer3.from(target, target.offset, target.byteLength);
          }
          if (!Buffer3.isBuffer(target)) {
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
          }
          if (start === void 0) {
            start = 0;
          }
          if (end === void 0) {
            end = target ? target.length : 0;
          }
          if (thisStart === void 0) {
            thisStart = 0;
          }
          if (thisEnd === void 0) {
            thisEnd = this.length;
          }
          if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError("out of range index");
          }
          if (thisStart >= thisEnd && start >= end) {
            return 0;
          }
          if (thisStart >= thisEnd) {
            return -1;
          }
          if (start >= end) {
            return 1;
          }
          start >>>= 0;
          end >>>= 0;
          thisStart >>>= 0;
          thisEnd >>>= 0;
          if (this === target) return 0;
          let x = thisEnd - thisStart;
          let y = end - start;
          const len2 = Math.min(x, y);
          const thisCopy = this.slice(thisStart, thisEnd);
          const targetCopy = target.slice(start, end);
          for (let i2 = 0; i2 < len2; ++i2) {
            if (thisCopy[i2] !== targetCopy[i2]) {
              x = thisCopy[i2];
              y = targetCopy[i2];
              break;
            }
          }
          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };
        function bidirectionalIndexOf(buffer3, val, byteOffset, encoding2, dir) {
          if (buffer3.length === 0) return -1;
          if (typeof byteOffset === "string") {
            encoding2 = byteOffset;
            byteOffset = 0;
          } else if (byteOffset > 2147483647) {
            byteOffset = 2147483647;
          } else if (byteOffset < -2147483648) {
            byteOffset = -2147483648;
          }
          byteOffset = +byteOffset;
          if (numberIsNaN(byteOffset)) {
            byteOffset = dir ? 0 : buffer3.length - 1;
          }
          if (byteOffset < 0) byteOffset = buffer3.length + byteOffset;
          if (byteOffset >= buffer3.length) {
            if (dir) return -1;
            else byteOffset = buffer3.length - 1;
          } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;
            else return -1;
          }
          if (typeof val === "string") {
            val = Buffer3.from(val, encoding2);
          }
          if (Buffer3.isBuffer(val)) {
            if (val.length === 0) {
              return -1;
            }
            return arrayIndexOf(buffer3, val, byteOffset, encoding2, dir);
          } else if (typeof val === "number") {
            val = val & 255;
            if (typeof GlobalUint8Array.prototype.indexOf === "function") {
              if (dir) {
                return GlobalUint8Array.prototype.indexOf.call(buffer3, val, byteOffset);
              } else {
                return GlobalUint8Array.prototype.lastIndexOf.call(buffer3, val, byteOffset);
              }
            }
            return arrayIndexOf(buffer3, [
              val
            ], byteOffset, encoding2, dir);
          }
          throw new TypeError("val must be string, number or Buffer");
        }
        function arrayIndexOf(arr, val, byteOffset, encoding2, dir) {
          let indexSize = 1;
          let arrLength = arr.length;
          let valLength = val.length;
          if (encoding2 !== void 0) {
            encoding2 = String(encoding2).toLowerCase();
            if (encoding2 === "ucs2" || encoding2 === "ucs-2" || encoding2 === "utf16le" || encoding2 === "utf-16le") {
              if (arr.length < 2 || val.length < 2) {
                return -1;
              }
              indexSize = 2;
              arrLength /= 2;
              valLength /= 2;
              byteOffset /= 2;
            }
          }
          function read(buf, i3) {
            if (indexSize === 1) {
              return buf[i3];
            } else {
              return buf.readUInt16BE(i3 * indexSize);
            }
          }
          let i2;
          if (dir) {
            let foundIndex = -1;
            for (i2 = byteOffset; i2 < arrLength; i2++) {
              if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
                if (foundIndex === -1) foundIndex = i2;
                if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
              } else {
                if (foundIndex !== -1) i2 -= i2 - foundIndex;
                foundIndex = -1;
              }
            }
          } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
            for (i2 = byteOffset; i2 >= 0; i2--) {
              let found = true;
              for (let j = 0; j < valLength; j++) {
                if (read(arr, i2 + j) !== read(val, j)) {
                  found = false;
                  break;
                }
              }
              if (found) return i2;
            }
          }
          return -1;
        }
        Buffer3.prototype.includes = function includes(val, byteOffset, encoding2) {
          return this.indexOf(val, byteOffset, encoding2) !== -1;
        };
        Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding2) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding2, true);
        };
        Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding2) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding2, false);
        };
        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          const remaining = buf.length - offset;
          if (!length) {
            length = remaining;
          } else {
            length = Number(length);
            if (length > remaining) {
              length = remaining;
            }
          }
          const strLen = string.length;
          if (length > strLen / 2) {
            length = strLen / 2;
          }
          let i2;
          for (i2 = 0; i2 < length; ++i2) {
            const parsed = parseInt(string.substr(i2 * 2, 2), 16);
            if (numberIsNaN(parsed)) return i2;
            buf[offset + i2] = parsed;
          }
          return i2;
        }
        function utf8Write(buf, string, offset, length) {
          return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }
        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }
        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }
        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }
        Buffer3.prototype.write = function write(string, offset, length, encoding2) {
          if (offset === void 0) {
            encoding2 = "utf8";
            length = this.length;
            offset = 0;
          } else if (length === void 0 && typeof offset === "string") {
            encoding2 = offset;
            length = this.length;
            offset = 0;
          } else if (isFinite(offset)) {
            offset = offset >>> 0;
            if (isFinite(length)) {
              length = length >>> 0;
              if (encoding2 === void 0) encoding2 = "utf8";
            } else {
              encoding2 = length;
              length = void 0;
            }
          } else {
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          }
          const remaining = this.length - offset;
          if (length === void 0 || length > remaining) length = remaining;
          if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError("Attempt to write outside buffer bounds");
          }
          if (!encoding2) encoding2 = "utf8";
          let loweredCase = false;
          for (; ; ) {
            switch (encoding2) {
              case "hex":
                return hexWrite(this, string, offset, length);
              case "utf8":
              case "utf-8":
                return utf8Write(this, string, offset, length);
              case "ascii":
              case "latin1":
              case "binary":
                return asciiWrite(this, string, offset, length);
              case "base64":
                return base64Write(this, string, offset, length);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return ucs2Write(this, string, offset, length);
              default:
                if (loweredCase) throw new TypeError("Unknown encoding: " + encoding2);
                encoding2 = ("" + encoding2).toLowerCase();
                loweredCase = true;
            }
          }
        };
        Buffer3.prototype.toJSON = function toJSON() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
          } else {
            return base64.fromByteArray(buf.slice(start, end));
          }
        }
        function utf8Slice(buf, start, end) {
          end = Math.min(buf.length, end);
          const res = [];
          let i2 = start;
          while (i2 < end) {
            const firstByte = buf[i2];
            let codePoint = null;
            let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
            if (i2 + bytesPerSequence <= end) {
              let secondByte, thirdByte, fourthByte, tempCodePoint;
              switch (bytesPerSequence) {
                case 1:
                  if (firstByte < 128) {
                    codePoint = firstByte;
                  }
                  break;
                case 2:
                  secondByte = buf[i2 + 1];
                  if ((secondByte & 192) === 128) {
                    tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                    if (tempCodePoint > 127) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 3:
                  secondByte = buf[i2 + 1];
                  thirdByte = buf[i2 + 2];
                  if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                    tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                    if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 4:
                  secondByte = buf[i2 + 1];
                  thirdByte = buf[i2 + 2];
                  fourthByte = buf[i2 + 3];
                  if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                    tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                    if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                      codePoint = tempCodePoint;
                    }
                  }
              }
            }
            if (codePoint === null) {
              codePoint = 65533;
              bytesPerSequence = 1;
            } else if (codePoint > 65535) {
              codePoint -= 65536;
              res.push(codePoint >>> 10 & 1023 | 55296);
              codePoint = 56320 | codePoint & 1023;
            }
            res.push(codePoint);
            i2 += bytesPerSequence;
          }
          return decodeCodePointsArray(res);
        }
        const MAX_ARGUMENTS_LENGTH = 4096;
        function decodeCodePointsArray(codePoints) {
          const len2 = codePoints.length;
          if (len2 <= MAX_ARGUMENTS_LENGTH) {
            return String.fromCharCode.apply(String, codePoints);
          }
          let res = "";
          let i2 = 0;
          while (i2 < len2) {
            res += String.fromCharCode.apply(String, codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH));
          }
          return res;
        }
        function asciiSlice(buf, start, end) {
          let ret = "";
          end = Math.min(buf.length, end);
          for (let i2 = start; i2 < end; ++i2) {
            ret += String.fromCharCode(buf[i2] & 127);
          }
          return ret;
        }
        function latin1Slice(buf, start, end) {
          let ret = "";
          end = Math.min(buf.length, end);
          for (let i2 = start; i2 < end; ++i2) {
            ret += String.fromCharCode(buf[i2]);
          }
          return ret;
        }
        function hexSlice(buf, start, end) {
          const len2 = buf.length;
          if (!start || start < 0) start = 0;
          if (!end || end < 0 || end > len2) end = len2;
          let out = "";
          for (let i2 = start; i2 < end; ++i2) {
            out += hexSliceLookupTable[buf[i2]];
          }
          return out;
        }
        function utf16leSlice(buf, start, end) {
          const bytes = buf.slice(start, end);
          let res = "";
          for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
            res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
          }
          return res;
        }
        Buffer3.prototype.slice = function slice(start, end) {
          const len2 = this.length;
          start = ~~start;
          end = end === void 0 ? len2 : ~~end;
          if (start < 0) {
            start += len2;
            if (start < 0) start = 0;
          } else if (start > len2) {
            start = len2;
          }
          if (end < 0) {
            end += len2;
            if (end < 0) end = 0;
          } else if (end > len2) {
            end = len2;
          }
          if (end < start) end = start;
          const newBuf = this.subarray(start, end);
          Object.setPrototypeOf(newBuf, Buffer3.prototype);
          return newBuf;
        };
        function checkOffset(offset, ext, length) {
          if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
          if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
        }
        Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) checkOffset(offset, byteLength3, this.length);
          let val = this[offset];
          let mul = 1;
          let i2 = 0;
          while (++i2 < byteLength3 && (mul *= 256)) {
            val += this[offset + i2] * mul;
          }
          return val;
        };
        Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) {
            checkOffset(offset, byteLength3, this.length);
          }
          let val = this[offset + --byteLength3];
          let mul = 1;
          while (byteLength3 > 0 && (mul *= 256)) {
            val += this[offset + --byteLength3] * mul;
          }
          return val;
        };
        Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 1, this.length);
          return this[offset];
        };
        Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] | this[offset + 1] << 8;
        };
        Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] << 8 | this[offset + 1];
        };
        Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
        };
        Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        };
        Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
          offset = offset >>> 0;
          validateNumber(offset, "offset");
          const first = this[offset];
          const last = this[offset + 7];
          if (first === void 0 || last === void 0) {
            boundsError(offset, this.length - 8);
          }
          const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
          const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
          return BigInt(lo) + (BigInt(hi) << BigInt(32));
        });
        Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
          offset = offset >>> 0;
          validateNumber(offset, "offset");
          const first = this[offset];
          const last = this[offset + 7];
          if (first === void 0 || last === void 0) {
            boundsError(offset, this.length - 8);
          }
          const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
          const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
          return (BigInt(hi) << BigInt(32)) + BigInt(lo);
        });
        Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) checkOffset(offset, byteLength3, this.length);
          let val = this[offset];
          let mul = 1;
          let i2 = 0;
          while (++i2 < byteLength3 && (mul *= 256)) {
            val += this[offset + i2] * mul;
          }
          mul *= 128;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
          return val;
        };
        Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) checkOffset(offset, byteLength3, this.length);
          let i2 = byteLength3;
          let mul = 1;
          let val = this[offset + --i2];
          while (i2 > 0 && (mul *= 256)) {
            val += this[offset + --i2] * mul;
          }
          mul *= 128;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
          return val;
        };
        Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 1, this.length);
          if (!(this[offset] & 128)) return this[offset];
          return (255 - this[offset] + 1) * -1;
        };
        Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          const val = this[offset] | this[offset + 1] << 8;
          return val & 32768 ? val | 4294901760 : val;
        };
        Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          const val = this[offset + 1] | this[offset] << 8;
          return val & 32768 ? val | 4294901760 : val;
        };
        Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        };
        Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        };
        Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
          offset = offset >>> 0;
          validateNumber(offset, "offset");
          const first = this[offset];
          const last = this[offset + 7];
          if (first === void 0 || last === void 0) {
            boundsError(offset, this.length - 8);
          }
          const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
          return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
        });
        Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
          offset = offset >>> 0;
          validateNumber(offset, "offset");
          const first = this[offset];
          const last = this[offset + 7];
          if (first === void 0 || last === void 0) {
            boundsError(offset, this.length - 8);
          }
          const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
          return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
        });
        Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754$1.read(this, offset, true, 23, 4);
        };
        Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754$1.read(this, offset, false, 23, 4);
        };
        Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754$1.read(this, offset, true, 52, 8);
        };
        Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754$1.read(this, offset, false, 52, 8);
        };
        function checkInt(buf, value, offset, ext, max2, min2) {
          if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (value > max2 || value < min2) throw new RangeError('"value" argument is out of bounds');
          if (offset + ext > buf.length) throw new RangeError("Index out of range");
        }
        Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
          value = +value;
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
            checkInt(this, value, offset, byteLength3, maxBytes, 0);
          }
          let mul = 1;
          let i2 = 0;
          this[offset] = value & 255;
          while (++i2 < byteLength3 && (mul *= 256)) {
            this[offset + i2] = value / mul & 255;
          }
          return offset + byteLength3;
        };
        Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
          value = +value;
          offset = offset >>> 0;
          byteLength3 = byteLength3 >>> 0;
          if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
            checkInt(this, value, offset, byteLength3, maxBytes, 0);
          }
          let i2 = byteLength3 - 1;
          let mul = 1;
          this[offset + i2] = value & 255;
          while (--i2 >= 0 && (mul *= 256)) {
            this[offset + i2] = value / mul & 255;
          }
          return offset + byteLength3;
        };
        Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
          this[offset] = value & 255;
          return offset + 1;
        };
        Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
          return offset + 2;
        };
        Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
          this[offset] = value >>> 8;
          this[offset + 1] = value & 255;
          return offset + 2;
        };
        Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = value & 255;
          return offset + 4;
        };
        Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 255;
          return offset + 4;
        };
        function wrtBigUInt64LE(buf, value, offset, min2, max2) {
          checkIntBI(value, min2, max2, buf, offset, 7);
          let lo = Number(value & BigInt(4294967295));
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          let hi = Number(value >> BigInt(32) & BigInt(4294967295));
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          return offset;
        }
        function wrtBigUInt64BE(buf, value, offset, min2, max2) {
          checkIntBI(value, min2, max2, buf, offset, 7);
          let lo = Number(value & BigInt(4294967295));
          buf[offset + 7] = lo;
          lo = lo >> 8;
          buf[offset + 6] = lo;
          lo = lo >> 8;
          buf[offset + 5] = lo;
          lo = lo >> 8;
          buf[offset + 4] = lo;
          let hi = Number(value >> BigInt(32) & BigInt(4294967295));
          buf[offset + 3] = hi;
          hi = hi >> 8;
          buf[offset + 2] = hi;
          hi = hi >> 8;
          buf[offset + 1] = hi;
          hi = hi >> 8;
          buf[offset] = hi;
          return offset + 8;
        }
        Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
          return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
        });
        Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
          return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
        });
        Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength3 - 1);
            checkInt(this, value, offset, byteLength3, limit - 1, -limit);
          }
          let i2 = 0;
          let mul = 1;
          let sub = 0;
          this[offset] = value & 255;
          while (++i2 < byteLength3 && (mul *= 256)) {
            if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
              sub = 1;
            }
            this[offset + i2] = (value / mul >> 0) - sub & 255;
          }
          return offset + byteLength3;
        };
        Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength3 - 1);
            checkInt(this, value, offset, byteLength3, limit - 1, -limit);
          }
          let i2 = byteLength3 - 1;
          let mul = 1;
          let sub = 0;
          this[offset + i2] = value & 255;
          while (--i2 >= 0 && (mul *= 256)) {
            if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
              sub = 1;
            }
            this[offset + i2] = (value / mul >> 0) - sub & 255;
          }
          return offset + byteLength3;
        };
        Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
          if (value < 0) value = 255 + value + 1;
          this[offset] = value & 255;
          return offset + 1;
        };
        Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
          return offset + 2;
        };
        Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
          this[offset] = value >>> 8;
          this[offset + 1] = value & 255;
          return offset + 2;
        };
        Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
          this[offset] = value & 255;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
          return offset + 4;
        };
        Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
          if (value < 0) value = 4294967295 + value + 1;
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 255;
          return offset + 4;
        };
        Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
          return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        });
        Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
          return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        });
        function checkIEEE754(buf, value, offset, ext, max2, min2) {
          if (offset + ext > buf.length) throw new RangeError("Index out of range");
          if (offset < 0) throw new RangeError("Index out of range");
        }
        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 4);
          }
          ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }
        Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
          return writeFloat(this, value, offset, true, noAssert);
        };
        Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
          return writeFloat(this, value, offset, false, noAssert);
        };
        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 8);
          }
          ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }
        Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
          return writeDouble(this, value, offset, true, noAssert);
        };
        Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
          return writeDouble(this, value, offset, false, noAssert);
        };
        Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
          if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
          if (!start) start = 0;
          if (!end && end !== 0) end = this.length;
          if (targetStart >= target.length) targetStart = target.length;
          if (!targetStart) targetStart = 0;
          if (end > 0 && end < start) end = start;
          if (end === start) return 0;
          if (target.length === 0 || this.length === 0) return 0;
          if (targetStart < 0) {
            throw new RangeError("targetStart out of bounds");
          }
          if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
          if (end < 0) throw new RangeError("sourceEnd out of bounds");
          if (end > this.length) end = this.length;
          if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
          }
          const len2 = end - start;
          if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") {
            this.copyWithin(targetStart, start, end);
          } else {
            GlobalUint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
          }
          return len2;
        };
        Buffer3.prototype.fill = function fill(val, start, end, encoding2) {
          if (typeof val === "string") {
            if (typeof start === "string") {
              encoding2 = start;
              start = 0;
              end = this.length;
            } else if (typeof end === "string") {
              encoding2 = end;
              end = this.length;
            }
            if (encoding2 !== void 0 && typeof encoding2 !== "string") {
              throw new TypeError("encoding must be a string");
            }
            if (typeof encoding2 === "string" && !Buffer3.isEncoding(encoding2)) {
              throw new TypeError("Unknown encoding: " + encoding2);
            }
            if (val.length === 1) {
              const code2 = val.charCodeAt(0);
              if (encoding2 === "utf8" && code2 < 128 || encoding2 === "latin1") {
                val = code2;
              }
            }
          } else if (typeof val === "number") {
            val = val & 255;
          } else if (typeof val === "boolean") {
            val = Number(val);
          }
          if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError("Out of range index");
          }
          if (end <= start) {
            return this;
          }
          start = start >>> 0;
          end = end === void 0 ? this.length : end >>> 0;
          if (!val) val = 0;
          let i2;
          if (typeof val === "number") {
            for (i2 = start; i2 < end; ++i2) {
              this[i2] = val;
            }
          } else {
            const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding2);
            const len2 = bytes.length;
            if (len2 === 0) {
              throw new TypeError('The value "' + val + '" is invalid for argument "value"');
            }
            for (i2 = 0; i2 < end - start; ++i2) {
              this[i2 + start] = bytes[i2 % len2];
            }
          }
          return this;
        };
        const errors2 = {};
        function E(sym, getMessage, Base) {
          errors2[sym] = class NodeError extends Base {
            constructor() {
              super();
              Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
              });
              this.name = `${this.name} [${sym}]`;
              this.stack;
              delete this.name;
            }
            get code() {
              return sym;
            }
            set code(value) {
              Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
              });
            }
            toString() {
              return `${this.name} [${sym}]: ${this.message}`;
            }
          };
        }
        E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        }, RangeError);
        E("ERR_INVALID_ARG_TYPE", function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        }, TypeError);
        E("ERR_OUT_OF_RANGE", function(str, range2, input2) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input2;
          if (Number.isInteger(input2) && Math.abs(input2) > 2 ** 32) {
            received = addNumericalSeparator(String(input2));
          } else if (typeof input2 === "bigint") {
            received = String(input2);
            if (input2 > BigInt(2) ** BigInt(32) || input2 < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range2}. Received ${received}`;
          return msg;
        }, RangeError);
        function addNumericalSeparator(val) {
          let res = "";
          let i2 = val.length;
          const start = val[0] === "-" ? 1 : 0;
          for (; i2 >= start + 4; i2 -= 3) {
            res = `_${val.slice(i2 - 3, i2)}${res}`;
          }
          return `${val.slice(0, i2)}${res}`;
        }
        function checkBounds(buf, offset, byteLength3) {
          validateNumber(offset, "offset");
          if (buf[offset] === void 0 || buf[offset + byteLength3] === void 0) {
            boundsError(offset, buf.length - (byteLength3 + 1));
          }
        }
        function checkIntBI(value, min2, max2, buf, offset, byteLength3) {
          if (value > max2 || value < min2) {
            const n = typeof min2 === "bigint" ? "n" : "";
            let range2;
            {
              if (min2 === 0 || min2 === BigInt(0)) {
                range2 = `>= 0${n} and < 2${n} ** ${(byteLength3 + 1) * 8}${n}`;
              } else {
                range2 = `>= -(2${n} ** ${(byteLength3 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n}`;
              }
            }
            throw new errors2.ERR_OUT_OF_RANGE("value", range2, value);
          }
          checkBounds(buf, offset, byteLength3);
        }
        function validateNumber(value, name) {
          if (typeof value !== "number") {
            throw new errors2.ERR_INVALID_ARG_TYPE(name, "number", value);
          }
        }
        function boundsError(value, length, type2) {
          if (Math.floor(value) !== value) {
            validateNumber(value, type2);
            throw new errors2.ERR_OUT_OF_RANGE("offset", "an integer", value);
          }
          if (length < 0) {
            throw new errors2.ERR_BUFFER_OUT_OF_BOUNDS();
          }
          throw new errors2.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
        }
        const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
        function base64clean(str) {
          str = str.split("=")[0];
          str = str.trim().replace(INVALID_BASE64_RE, "");
          if (str.length < 2) return "";
          while (str.length % 4 !== 0) {
            str = str + "=";
          }
          return str;
        }
        function utf8ToBytes(string, units) {
          units = units || Infinity;
          let codePoint;
          const length = string.length;
          let leadSurrogate = null;
          const bytes = [];
          for (let i2 = 0; i2 < length; ++i2) {
            codePoint = string.charCodeAt(i2);
            if (codePoint > 55295 && codePoint < 57344) {
              if (!leadSurrogate) {
                if (codePoint > 56319) {
                  if ((units -= 3) > -1) bytes.push(239, 191, 189);
                  continue;
                } else if (i2 + 1 === length) {
                  if ((units -= 3) > -1) bytes.push(239, 191, 189);
                  continue;
                }
                leadSurrogate = codePoint;
                continue;
              }
              if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
              }
              codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
            } else if (leadSurrogate) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
            }
            leadSurrogate = null;
            if (codePoint < 128) {
              if ((units -= 1) < 0) break;
              bytes.push(codePoint);
            } else if (codePoint < 2048) {
              if ((units -= 2) < 0) break;
              bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
            } else if (codePoint < 65536) {
              if ((units -= 3) < 0) break;
              bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else if (codePoint < 1114112) {
              if ((units -= 4) < 0) break;
              bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else {
              throw new Error("Invalid code point");
            }
          }
          return bytes;
        }
        function asciiToBytes(str) {
          const byteArray = [];
          for (let i2 = 0; i2 < str.length; ++i2) {
            byteArray.push(str.charCodeAt(i2) & 255);
          }
          return byteArray;
        }
        function utf16leToBytes(str, units) {
          let c, hi, lo;
          const byteArray = [];
          for (let i2 = 0; i2 < str.length; ++i2) {
            if ((units -= 2) < 0) break;
            c = str.charCodeAt(i2);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }
          return byteArray;
        }
        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }
        function blitBuffer(src, dst, offset, length) {
          let i2;
          for (i2 = 0; i2 < length; ++i2) {
            if (i2 + offset >= dst.length || i2 >= src.length) break;
            dst[i2 + offset] = src[i2];
          }
          return i2;
        }
        function isInstance(obj, type2) {
          return obj instanceof type2 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type2.name;
        }
        function numberIsNaN(obj) {
          return obj !== obj;
        }
        const hexSliceLookupTable = function() {
          const alphabet2 = "0123456789abcdef";
          const table = new Array(256);
          for (let i2 = 0; i2 < 16; ++i2) {
            const i16 = i2 * 16;
            for (let j = 0; j < 16; ++j) {
              table[i16 + j] = alphabet2[i2] + alphabet2[j];
            }
          }
          return table;
        }();
        function defineBigIntMethod(fn) {
          return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
        }
        function BufferBigIntNotDefined() {
          throw new Error("BigInt not supported");
        }
      })(buffer2);
      const Buffer2 = buffer2.Buffer;
      exports.Blob = buffer2.Blob;
      exports.BlobOptions = buffer2.BlobOptions;
      exports.Buffer = buffer2.Buffer;
      exports.File = buffer2.File;
      exports.FileOptions = buffer2.FileOptions;
      exports.INSPECT_MAX_BYTES = buffer2.INSPECT_MAX_BYTES;
      exports.SlowBuffer = buffer2.SlowBuffer;
      exports.TranscodeEncoding = buffer2.TranscodeEncoding;
      exports.atob = buffer2.atob;
      exports.btoa = buffer2.btoa;
      exports.constants = buffer2.constants;
      exports.default = Buffer2;
      exports.isAscii = buffer2.isAscii;
      exports.isUtf8 = buffer2.isUtf8;
      exports.kMaxLength = buffer2.kMaxLength;
      exports.kStringMaxLength = buffer2.kStringMaxLength;
      exports.resolveObjectURL = buffer2.resolveObjectURL;
      exports.transcode = buffer2.transcode;
    })(dist$1);
    return dist$1;
  };
  var hasRequiredBuffer;
  function requireBuffer() {
    if (hasRequiredBuffer) return buffer;
    hasRequiredBuffer = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bufferFrom = exports.bufferAllocUnsafe = exports.Buffer = void 0;
      const buffer_1 = requireDist$1();
      Object.defineProperty(exports, "Buffer", {
        enumerable: true,
        get: function() {
          return buffer_1.Buffer;
        }
      });
      function bufferV0P12Ponyfill(arg0, ...args) {
        return new buffer_1.Buffer(arg0, ...args);
      }
      const bufferAllocUnsafe = buffer_1.Buffer.allocUnsafe || bufferV0P12Ponyfill;
      exports.bufferAllocUnsafe = bufferAllocUnsafe;
      const bufferFrom = buffer_1.Buffer.from || bufferV0P12Ponyfill;
      exports.bufferFrom = bufferFrom;
    })(buffer);
    return buffer;
  }
  var errors$1 = {};
  var assert = {
    exports: {}
  };
  var errors = {};
  var util$2 = {};
  var types = {};
  var shams;
  var hasRequiredShams;
  function requireShams() {
    if (hasRequiredShams) return shams;
    hasRequiredShams = 1;
    var hasSymbols2 = requireShams$1();
    shams = function hasToStringTagShams() {
      return hasSymbols2() && !!Symbol.toStringTag;
    };
    return shams;
  }
  var isArguments$1;
  var hasRequiredIsArguments$1;
  function requireIsArguments$1() {
    if (hasRequiredIsArguments$1) return isArguments$1;
    hasRequiredIsArguments$1 = 1;
    var hasToStringTag = requireShams()();
    var callBound2 = requireCallBound$1();
    var $toString = callBound2("Object.prototype.toString");
    var isStandardArguments = function isArguments2(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments2(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    return isArguments$1;
  }
  var isRegex;
  var hasRequiredIsRegex;
  function requireIsRegex() {
    if (hasRequiredIsRegex) return isRegex;
    hasRequiredIsRegex = 1;
    var callBound2 = requireCallBound$1();
    var hasToStringTag = requireShams()();
    var hasOwn = requireHasown();
    var gOPD2 = requireGopd();
    var fn;
    if (hasToStringTag) {
      var $exec = callBound2("RegExp.prototype.exec");
      var isRegexMarker = {};
      var throwRegexMarker = function() {
        throw isRegexMarker;
      };
      var badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
      fn = function isRegex2(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        var descriptor = gOPD2(value, "lastIndex");
        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
        if (!hasLastIndexDataProperty) {
          return false;
        }
        try {
          $exec(value, badStringifier);
        } catch (e) {
          return e === isRegexMarker;
        }
      };
    } else {
      var $toString = callBound2("Object.prototype.toString");
      var regexClass = "[object RegExp]";
      fn = function isRegex2(value) {
        if (!value || typeof value !== "object" && typeof value !== "function") {
          return false;
        }
        return $toString(value) === regexClass;
      };
    }
    isRegex = fn;
    return isRegex;
  }
  var safeRegexTest;
  var hasRequiredSafeRegexTest;
  function requireSafeRegexTest() {
    if (hasRequiredSafeRegexTest) return safeRegexTest;
    hasRequiredSafeRegexTest = 1;
    var callBound2 = requireCallBound$1();
    var isRegex2 = requireIsRegex();
    var $exec = callBound2("RegExp.prototype.exec");
    var $TypeError = requireType();
    safeRegexTest = function regexTester(regex) {
      if (!isRegex2(regex)) {
        throw new $TypeError("`regex` must be a RegExp");
      }
      return function test(s) {
        return $exec(regex, s) !== null;
      };
    };
    return safeRegexTest;
  }
  var isGeneratorFunction;
  var hasRequiredIsGeneratorFunction;
  function requireIsGeneratorFunction() {
    if (hasRequiredIsGeneratorFunction) return isGeneratorFunction;
    hasRequiredIsGeneratorFunction = 1;
    var callBound2 = requireCallBound$1();
    var safeRegexTest2 = requireSafeRegexTest();
    var isFnRegex = safeRegexTest2(/^\s*(?:function)?\*/);
    var hasToStringTag = requireShams()();
    var getProto2 = requireGetProto();
    var toStr = callBound2("Object.prototype.toString");
    var fnToStr = callBound2("Function.prototype.toString");
    var getGeneratorFunc = function() {
      if (!hasToStringTag) {
        return false;
      }
      try {
        return Function("return function*() {}")();
      } catch (e) {
      }
    };
    var GeneratorFunction;
    isGeneratorFunction = function isGeneratorFunction2(fn) {
      if (typeof fn !== "function") {
        return false;
      }
      if (isFnRegex(fnToStr(fn))) {
        return true;
      }
      if (!hasToStringTag) {
        var str = toStr(fn);
        return str === "[object GeneratorFunction]";
      }
      if (!getProto2) {
        return false;
      }
      if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto2(generatorFunc) : false;
      }
      return getProto2(fn) === GeneratorFunction;
    };
    return isGeneratorFunction;
  }
  var isCallable;
  var hasRequiredIsCallable;
  function requireIsCallable() {
    if (hasRequiredIsCallable) return isCallable;
    hasRequiredIsCallable = 1;
    var fnToStr = Function.prototype.toString;
    var reflectApply2 = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply2 === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply2(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply2 = null;
        }
      }
    } else {
      reflectApply2 = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [
      ,
    ]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      var all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    isCallable = reflectApply2 ? function isCallable2(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply2(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable2(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
    return isCallable;
  }
  var forEach;
  var hasRequiredForEach;
  function requireForEach() {
    if (hasRequiredForEach) return forEach;
    hasRequiredForEach = 1;
    var isCallable2 = requireIsCallable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    function isArray(x) {
      return toStr.call(x) === "[object Array]";
    }
    forEach = function forEach2(list, iterator, thisArg) {
      if (!isCallable2(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (isArray(list)) {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    return forEach;
  }
  var possibleTypedArrayNames;
  var hasRequiredPossibleTypedArrayNames;
  function requirePossibleTypedArrayNames() {
    if (hasRequiredPossibleTypedArrayNames) return possibleTypedArrayNames;
    hasRequiredPossibleTypedArrayNames = 1;
    possibleTypedArrayNames = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
    return possibleTypedArrayNames;
  }
  var availableTypedArrays;
  var hasRequiredAvailableTypedArrays;
  function requireAvailableTypedArrays() {
    if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
    hasRequiredAvailableTypedArrays = 1;
    var possibleNames = requirePossibleTypedArrayNames();
    var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
    availableTypedArrays = function availableTypedArrays2() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
    return availableTypedArrays;
  }
  var callBind = {
    exports: {}
  };
  var defineDataProperty;
  var hasRequiredDefineDataProperty;
  function requireDefineDataProperty() {
    if (hasRequiredDefineDataProperty) return defineDataProperty;
    hasRequiredDefineDataProperty = 1;
    var $defineProperty = requireEsDefineProperty();
    var $SyntaxError = requireSyntax();
    var $TypeError = requireType();
    var gopd2 = requireGopd();
    defineDataProperty = function defineDataProperty2(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd2 && gopd2(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
    return defineDataProperty;
  }
  var hasPropertyDescriptors_1;
  var hasRequiredHasPropertyDescriptors;
  function requireHasPropertyDescriptors() {
    if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
    hasRequiredHasPropertyDescriptors = 1;
    var $defineProperty = requireEsDefineProperty();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", {
          value: 1
        }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    hasPropertyDescriptors_1 = hasPropertyDescriptors;
    return hasPropertyDescriptors_1;
  }
  var setFunctionLength;
  var hasRequiredSetFunctionLength;
  function requireSetFunctionLength() {
    if (hasRequiredSetFunctionLength) return setFunctionLength;
    hasRequiredSetFunctionLength = 1;
    var GetIntrinsic = requireGetIntrinsic();
    var define = requireDefineDataProperty();
    var hasDescriptors = requireHasPropertyDescriptors()();
    var gOPD2 = requireGopd();
    var $TypeError = requireType();
    var $floor = GetIntrinsic("%Math.floor%");
    setFunctionLength = function setFunctionLength2(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD2) {
        var desc = gOPD2(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(fn, "length", length, true, true);
        } else {
          define(fn, "length", length);
        }
      }
      return fn;
    };
    return setFunctionLength;
  }
  var applyBind;
  var hasRequiredApplyBind;
  function requireApplyBind() {
    if (hasRequiredApplyBind) return applyBind;
    hasRequiredApplyBind = 1;
    var bind = requireFunctionBind();
    var $apply = requireFunctionApply();
    var actualApply2 = requireActualApply();
    applyBind = function applyBind2() {
      return actualApply2(bind, $apply, arguments);
    };
    return applyBind;
  }
  var hasRequiredCallBind;
  function requireCallBind() {
    if (hasRequiredCallBind) return callBind.exports;
    hasRequiredCallBind = 1;
    (function(module) {
      var setFunctionLength2 = requireSetFunctionLength();
      var $defineProperty = requireEsDefineProperty();
      var callBindBasic = requireCallBindApplyHelpers();
      var applyBind2 = requireApplyBind();
      module.exports = function callBind2(originalFunction) {
        var func = callBindBasic(arguments);
        var adjustedLength = originalFunction.length - (arguments.length - 1);
        return setFunctionLength2(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", {
          value: applyBind2
        });
      } else {
        module.exports.apply = applyBind2;
      }
    })(callBind);
    return callBind.exports;
  }
  var whichTypedArray;
  var hasRequiredWhichTypedArray;
  function requireWhichTypedArray() {
    if (hasRequiredWhichTypedArray) return whichTypedArray;
    hasRequiredWhichTypedArray = 1;
    var forEach2 = requireForEach();
    var availableTypedArrays2 = requireAvailableTypedArrays();
    var callBind2 = requireCallBind();
    var callBound2 = requireCallBound$1();
    var gOPD2 = requireGopd();
    var getProto2 = requireGetProto();
    var $toString = callBound2("Object.prototype.toString");
    var hasToStringTag = requireShams()();
    var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
    var typedArrays = availableTypedArrays2();
    var $slice = callBound2("String.prototype.slice");
    var $indexOf = callBound2("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var cache = {
      __proto__: null
    };
    if (hasToStringTag && gOPD2 && getProto2) {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr && getProto2) {
          var proto = getProto2(arr);
          var descriptor = gOPD2(proto, Symbol.toStringTag);
          if (!descriptor && proto) {
            var superProto = getProto2(proto);
            descriptor = gOPD2(superProto, Symbol.toStringTag);
          }
          cache["$" + typedArray] = callBind2(descriptor.get);
        }
      });
    } else {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        var fn = arr.slice || arr.set;
        if (fn) {
          cache["$" + typedArray] = callBind2(fn);
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var found = false;
      forEach2(cache, function(getter, typedArray) {
        if (!found) {
          try {
            if ("$" + getter(value) === typedArray) {
              found = $slice(typedArray, 1);
            }
          } catch (e) {
          }
        }
      });
      return found;
    };
    var trySlices = function tryAllSlices(value) {
      var found = false;
      forEach2(cache, function(getter, name) {
        if (!found) {
          try {
            getter(value);
            found = $slice(name, 1);
          } catch (e) {
          }
        }
      });
      return found;
    };
    whichTypedArray = function whichTypedArray2(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if ($indexOf(typedArrays, tag) > -1) {
          return tag;
        }
        if (tag !== "Object") {
          return false;
        }
        return trySlices(value);
      }
      if (!gOPD2) {
        return null;
      }
      return tryTypedArrays(value);
    };
    return whichTypedArray;
  }
  var isTypedArray;
  var hasRequiredIsTypedArray;
  function requireIsTypedArray() {
    if (hasRequiredIsTypedArray) return isTypedArray;
    hasRequiredIsTypedArray = 1;
    var whichTypedArray2 = requireWhichTypedArray();
    isTypedArray = function isTypedArray2(value) {
      return !!whichTypedArray2(value);
    };
    return isTypedArray;
  }
  var hasRequiredTypes;
  function requireTypes() {
    if (hasRequiredTypes) return types;
    hasRequiredTypes = 1;
    (function(exports) {
      var isArgumentsObject = requireIsArguments$1();
      var isGeneratorFunction2 = requireIsGeneratorFunction();
      var whichTypedArray2 = requireWhichTypedArray();
      var isTypedArray2 = requireIsTypedArray();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      if (SymbolSupported) {
        var symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction2;
      exports.isTypedArray = isTypedArray2;
      function isPromise(input2) {
        return typeof Promise !== "undefined" && input2 instanceof Promise || input2 !== null && typeof input2 === "object" && typeof input2.then === "function" && typeof input2.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray2(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray2(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray2(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray2(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray2(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray2(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray2(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray2(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray2(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray2(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray2(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray2(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      [
        "isProxy",
        "isExternal",
        "isModuleNamespaceObject"
      ].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    })(types);
    return types;
  }
  var isBufferBrowser;
  var hasRequiredIsBufferBrowser;
  function requireIsBufferBrowser() {
    if (hasRequiredIsBufferBrowser) return isBufferBrowser;
    hasRequiredIsBufferBrowser = 1;
    isBufferBrowser = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
    return isBufferBrowser;
  }
  var inherits_browser = {
    exports: {}
  };
  var hasRequiredInherits_browser;
  requireInherits_browser = function() {
    if (hasRequiredInherits_browser) return inherits_browser.exports;
    hasRequiredInherits_browser = 1;
    if (typeof Object.create === "function") {
      inherits_browser.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      inherits_browser.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    return inherits_browser.exports;
  };
  var hasRequiredUtil$2;
  requireUtil$2 = function() {
    if (hasRequiredUtil$2) return util$2;
    hasRequiredUtil$2 = 1;
    (function(exports) {
      var define_process_env_default = {};
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%") return "%";
          if (i >= len) return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process$1 !== "undefined" && process$1.noDeprecation === true) {
          return fn;
        }
        if (typeof process$1 === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process$1.throwDeprecation) {
              throw new Error(msg);
            } else if (process$1.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (define_process_env_default.NODE_DEBUG) {
        var debugEnv = define_process_env_default.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      exports.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid = process$1.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set, pid, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3) ctx.depth = arguments[2];
        if (arguments.length >= 4) ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
        if (isUndefined(ctx.depth)) ctx.depth = 2;
        if (isUndefined(ctx.colors)) ctx.colors = false;
        if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
        if (ctx.colors) ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
        "bold": [
          1,
          22
        ],
        "italic": [
          3,
          23
        ],
        "underline": [
          4,
          24
        ],
        "inverse": [
          7,
          27
        ],
        "white": [
          37,
          39
        ],
        "grey": [
          90,
          39
        ],
        "black": [
          30,
          39
        ],
        "blue": [
          34,
          39
        ],
        "cyan": [
          36,
          39
        ],
        "green": [
          32,
          39
        ],
        "magenta": [
          35,
          39
        ],
        "red": [
          31,
          39
        ],
        "yellow": [
          33,
          39
        ]
      };
      inspect.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = [
          "{",
          "}"
        ];
        if (isArray(value)) {
          array = true;
          braces = [
            "[",
            "]"
          ];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value)) return ctx.stylize("" + value, "number");
        if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
        if (isNull(value)) return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || {
          value: value[key]
        };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").slice(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var length = output.reduce(function(prev, cur) {
          if (cur.indexOf("\n") >= 0) ;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = requireTypes();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = requireIsBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = /* @__PURE__ */ new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [
          d.getDate(),
          months[d.getMonth()],
          time
        ].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = requireInherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject(add)) return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve2, reject) {
            promiseResolve = resolve2;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(function(ret) {
            process$1.nextTick(cb.bind(null, null, ret));
          }, function(rej) {
            process$1.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          });
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
        return callbackified;
      }
      exports.callbackify = callbackify;
    })(util$2);
    return util$2;
  };
  var hasRequiredErrors$1;
  function requireErrors$1() {
    if (hasRequiredErrors$1) return errors;
    hasRequiredErrors$1 = 1;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function _createClass(Constructor, protoProps, staticProps) {
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var codes = {};
    var assert2;
    var util2;
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = function(_Base) {
        _inherits(NodeError2, _Base);
        var _super = _createSuper(NodeError2);
        function NodeError2(arg1, arg2, arg3) {
          var _this;
          _classCallCheck(this, NodeError2);
          _this = _super.call(this, getMessage(arg1, arg2, arg3));
          _this.code = code;
          return _this;
        }
        return _createClass(NodeError2);
      }(Base);
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(0, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      if (assert2 === void 0) assert2 = requireAssert();
      assert2(typeof name === "string", "'name' must be a string");
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type2 = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(_typeof(actual));
      return msg;
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
      var reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
      if (util2 === void 0) util2 = requireUtil$2();
      var inspected = util2.inspect(value);
      if (inspected.length > 128) {
        inspected = "".concat(inspected.slice(0, 128), "...");
      }
      return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
    }, TypeError);
    createErrorType("ERR_INVALID_RETURN_VALUE", function(input2, name, value) {
      var type2;
      if (value && value.constructor && value.constructor.name) {
        type2 = "instance of ".concat(value.constructor.name);
      } else {
        type2 = "type ".concat(_typeof(value));
      }
      return "Expected ".concat(input2, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type2, ".");
    }, TypeError);
    createErrorType("ERR_MISSING_ARGS", function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (assert2 === void 0) assert2 = requireAssert();
      assert2(args.length > 0, "At least one arg needs to be specified");
      var msg = "The ";
      var len = args.length;
      args = args.map(function(a) {
        return '"'.concat(a, '"');
      });
      switch (len) {
        case 1:
          msg += "".concat(args[0], " argument");
          break;
        case 2:
          msg += "".concat(args[0], " and ").concat(args[1], " arguments");
          break;
        default:
          msg += args.slice(0, len - 1).join(", ");
          msg += ", and ".concat(args[len - 1], " arguments");
          break;
      }
      return "".concat(msg, " must be specified");
    }, TypeError);
    errors.codes = codes;
    return errors;
  }
  var assertion_error;
  var hasRequiredAssertion_error;
  function requireAssertion_error() {
    if (hasRequiredAssertion_error) return assertion_error;
    hasRequiredAssertion_error = 1;
    function ownKeys2(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
          _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input2, hint) {
      if (_typeof(input2) !== "object" || input2 === null) return input2;
      var prim = input2[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input2, hint);
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(input2);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2)) return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2) _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var _require = requireUtil$2(), inspect = _require.inspect;
    var _require2 = requireErrors$1(), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function repeat(str, count) {
      count = Math.floor(count);
      if (str.length == 0 || count == 0) return "";
      var maxCount = str.length * count;
      count = Math.floor(Math.log(count) / Math.log(2));
      while (count) {
        str += str;
        count--;
      }
      str += str.substring(0, maxCount - str.length);
      return str;
    }
    var blue = "";
    var green = "";
    var red = "";
    var white = "";
    var kReadableOperator = {
      deepStrictEqual: "Expected values to be strictly deep-equal:",
      strictEqual: "Expected values to be strictly equal:",
      strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
      deepEqual: "Expected values to be loosely deep-equal:",
      equal: "Expected values to be loosely equal:",
      notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
      notStrictEqual: 'Expected "actual" to be strictly unequal to:',
      notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
      notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
      notEqual: 'Expected "actual" to be loosely unequal to:',
      notIdentical: "Values identical but not reference-equal:"
    };
    var kMaxShortLength = 10;
    function copyError(source) {
      var keys = Object.keys(source);
      var target = Object.create(Object.getPrototypeOf(source));
      keys.forEach(function(key) {
        target[key] = source[key];
      });
      Object.defineProperty(target, "message", {
        value: source.message
      });
      return target;
    }
    function inspectValue(val) {
      return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1e3,
        maxArrayLength: Infinity,
        showHidden: false,
        breakLength: Infinity,
        showProxy: false,
        sorted: true,
        getters: true
      });
    }
    function createErrDiff(actual, expected, operator) {
      var other = "";
      var res = "";
      var lastPos = 0;
      var end = "";
      var skipped = false;
      var actualInspected = inspectValue(actual);
      var actualLines = actualInspected.split("\n");
      var expectedLines = inspectValue(expected).split("\n");
      var i = 0;
      var indicator = "";
      if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
        operator = "strictEqualObject";
      }
      if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length;
        if (inputLength <= kMaxShortLength) {
          if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
          }
        } else if (operator !== "strictEqualObject") {
          var maxLength = process$1.stderr && process$1.stderr.isTTY ? process$1.stderr.columns : 80;
          if (inputLength < maxLength) {
            while (actualLines[0][i] === expectedLines[0][i]) {
              i++;
            }
            if (i > 2) {
              indicator = "\n  ".concat(repeat(" ", i), "^");
              i = 0;
            }
          }
        }
      }
      var a = actualLines[actualLines.length - 1];
      var b = expectedLines[expectedLines.length - 1];
      while (a === b) {
        if (i++ < 2) {
          end = "\n  ".concat(a).concat(end);
        } else {
          other = a;
        }
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
      }
      var maxLines = Math.max(actualLines.length, expectedLines.length);
      if (maxLines === 0) {
        var _actualLines = actualInspected.split("\n");
        if (_actualLines.length > 30) {
          _actualLines[26] = "".concat(blue, "...").concat(white);
          while (_actualLines.length > 27) {
            _actualLines.pop();
          }
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
      }
      if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
      }
      if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
      }
      var printedLines = 0;
      var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
      var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
      for (i = 0; i < maxLines; i++) {
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(expectedLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(expectedLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
          printedLines++;
        } else if (expectedLines.length < i + 1) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
          printedLines++;
        } else {
          var expectedLine = expectedLines[i];
          var actualLine = actualLines[i];
          var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
          if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
            divergingLines = false;
            actualLine += ",";
          }
          if (divergingLines) {
            if (cur > 1 && i > 2) {
              if (cur > 4) {
                res += "\n".concat(blue, "...").concat(white);
                skipped = true;
              } else if (cur > 3) {
                res += "\n  ".concat(actualLines[i - 2]);
                printedLines++;
              }
              res += "\n  ".concat(actualLines[i - 1]);
              printedLines++;
            }
            lastPos = i;
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
            printedLines += 2;
          } else {
            res += other;
            other = "";
            if (cur === 1 || i === 0) {
              res += "\n  ".concat(actualLine);
              printedLines++;
            }
          }
        }
        if (printedLines > 20 && i < maxLines - 2) {
          return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
        }
      }
      return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
    }
    var AssertionError = function(_Error, _inspect$custom) {
      _inherits(AssertionError2, _Error);
      var _super = _createSuper(AssertionError2);
      function AssertionError2(options2) {
        var _this;
        _classCallCheck(this, AssertionError2);
        if (_typeof(options2) !== "object" || options2 === null) {
          throw new ERR_INVALID_ARG_TYPE("options", "Object", options2);
        }
        var message = options2.message, operator = options2.operator, stackStartFn = options2.stackStartFn;
        var actual = options2.actual, expected = options2.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) {
          _this = _super.call(this, String(message));
        } else {
          if (process$1.stderr && process$1.stderr.isTTY) {
            if (process$1.stderr && process$1.stderr.getColorDepth && process$1.stderr.getColorDepth() !== 1) {
              blue = "\x1B[34m";
              green = "\x1B[32m";
              white = "\x1B[39m";
              red = "\x1B[31m";
            } else {
              blue = "";
              green = "";
              white = "";
              red = "";
            }
          }
          if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
            actual = copyError(actual);
            expected = copyError(expected);
          }
          if (operator === "deepStrictEqual" || operator === "strictEqual") {
            _this = _super.call(this, createErrDiff(actual, expected, operator));
          } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
            var base = kReadableOperator[operator];
            var res = inspectValue(actual).split("\n");
            if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
              base = kReadableOperator.notStrictEqualObject;
            }
            if (res.length > 30) {
              res[26] = "".concat(blue, "...").concat(white);
              while (res.length > 27) {
                res.pop();
              }
            }
            if (res.length === 1) {
              _this = _super.call(this, "".concat(base, " ").concat(res[0]));
            } else {
              _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
            }
          } else {
            var _res = inspectValue(actual);
            var other = "";
            var knownOperators = kReadableOperator[operator];
            if (operator === "notDeepEqual" || operator === "notEqual") {
              _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
              if (_res.length > 1024) {
                _res = "".concat(_res.slice(0, 1021), "...");
              }
            } else {
              other = "".concat(inspectValue(expected));
              if (_res.length > 512) {
                _res = "".concat(_res.slice(0, 509), "...");
              }
              if (other.length > 512) {
                other = "".concat(other.slice(0, 509), "...");
              }
              if (operator === "deepEqual" || operator === "equal") {
                _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
              } else {
                other = " ".concat(operator, " ").concat(other);
              }
            }
            _this = _super.call(this, "".concat(_res).concat(other));
          }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), "name", {
          value: "AssertionError [ERR_ASSERTION]",
          enumerable: false,
          writable: true,
          configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
        }
        _this.stack;
        _this.name = "AssertionError";
        return _possibleConstructorReturn(_this);
      }
      _createClass(AssertionError2, [
        {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
          }
        },
        {
          key: _inspect$custom,
          value: function value(recurseTimes, ctx) {
            return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
              customInspect: false,
              depth: 0
            }));
          }
        }
      ]);
      return AssertionError2;
    }(_wrapNativeSuper(Error), inspect.custom);
    assertion_error = AssertionError;
    return assertion_error;
  }
  var isArguments;
  var hasRequiredIsArguments;
  function requireIsArguments() {
    if (hasRequiredIsArguments) return isArguments;
    hasRequiredIsArguments = 1;
    var toStr = Object.prototype.toString;
    isArguments = function isArguments2(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
    return isArguments;
  }
  var implementation$3;
  var hasRequiredImplementation$3;
  function requireImplementation$3() {
    if (hasRequiredImplementation$3) return implementation$3;
    hasRequiredImplementation$3 = 1;
    var keysShim;
    if (!Object.keys) {
      var has = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var isArgs = requireIsArguments();
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var hasDontEnumBug = !isEnumerable.call({
        toString: null
      }, "toString");
      var hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      var hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      var equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments2 = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments2) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments2 && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    implementation$3 = keysShim;
    return implementation$3;
  }
  var objectKeys;
  var hasRequiredObjectKeys;
  function requireObjectKeys() {
    if (hasRequiredObjectKeys) return objectKeys;
    hasRequiredObjectKeys = 1;
    var slice = Array.prototype.slice;
    var isArgs = requireIsArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : requireImplementation$3();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    objectKeys = keysShim;
    return objectKeys;
  }
  var implementation$2;
  var hasRequiredImplementation$2;
  function requireImplementation$2() {
    if (hasRequiredImplementation$2) return implementation$2;
    hasRequiredImplementation$2 = 1;
    var objectKeys2 = requireObjectKeys();
    var hasSymbols2 = requireShams$1()();
    var callBound2 = requireCallBound$1();
    var $Object = requireEsObjectAtoms();
    var $push = callBound2("Array.prototype.push");
    var $propIsEnumerable = callBound2("Object.prototype.propertyIsEnumerable");
    var originalGetSymbols = hasSymbols2 ? $Object.getOwnPropertySymbols : null;
    implementation$2 = function assign(target, source1) {
      if (target == null) {
        throw new TypeError("target must be an object");
      }
      var to = $Object(target);
      if (arguments.length === 1) {
        return to;
      }
      for (var s = 1; s < arguments.length; ++s) {
        var from = $Object(arguments[s]);
        var keys = objectKeys2(from);
        var getSymbols = hasSymbols2 && ($Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
          var syms = getSymbols(from);
          for (var j = 0; j < syms.length; ++j) {
            var key = syms[j];
            if ($propIsEnumerable(from, key)) {
              $push(keys, key);
            }
          }
        }
        for (var i = 0; i < keys.length; ++i) {
          var nextKey = keys[i];
          if ($propIsEnumerable(from, nextKey)) {
            var propValue = from[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    };
    return implementation$2;
  }
  var polyfill$2;
  var hasRequiredPolyfill$2;
  function requirePolyfill$2() {
    if (hasRequiredPolyfill$2) return polyfill$2;
    hasRequiredPolyfill$2 = 1;
    var implementation2 = requireImplementation$2();
    var lacksProperEnumerationOrder = function() {
      if (!Object.assign) {
        return false;
      }
      var str = "abcdefghijklmnopqrst";
      var letters = str.split("");
      var map = {};
      for (var i = 0; i < letters.length; ++i) {
        map[letters[i]] = letters[i];
      }
      var obj = Object.assign({}, map);
      var actual = "";
      for (var k in obj) {
        actual += k;
      }
      return str !== actual;
    };
    var assignHasPendingExceptions = function() {
      if (!Object.assign || !Object.preventExtensions) {
        return false;
      }
      var thrower = Object.preventExtensions({
        1: 2
      });
      try {
        Object.assign(thrower, "xy");
      } catch (e) {
        return thrower[1] === "y";
      }
      return false;
    };
    polyfill$2 = function getPolyfill() {
      if (!Object.assign) {
        return implementation2;
      }
      if (lacksProperEnumerationOrder()) {
        return implementation2;
      }
      if (assignHasPendingExceptions()) {
        return implementation2;
      }
      return Object.assign;
    };
    return polyfill$2;
  }
  var implementation$1;
  var hasRequiredImplementation$1;
  function requireImplementation$1() {
    if (hasRequiredImplementation$1) return implementation$1;
    hasRequiredImplementation$1 = 1;
    var numberIsNaN = function(value) {
      return value !== value;
    };
    implementation$1 = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
    return implementation$1;
  }
  var polyfill$1;
  var hasRequiredPolyfill$1;
  function requirePolyfill$1() {
    if (hasRequiredPolyfill$1) return polyfill$1;
    hasRequiredPolyfill$1 = 1;
    var implementation2 = requireImplementation$1();
    polyfill$1 = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation2;
    };
    return polyfill$1;
  }
  var callBound;
  var hasRequiredCallBound;
  function requireCallBound() {
    if (hasRequiredCallBound) return callBound;
    hasRequiredCallBound = 1;
    var GetIntrinsic = requireGetIntrinsic();
    var callBind2 = requireCallBind();
    var $indexOf = callBind2(GetIntrinsic("String.prototype.indexOf"));
    callBound = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind2(intrinsic);
      }
      return intrinsic;
    };
    return callBound;
  }
  var defineProperties_1;
  var hasRequiredDefineProperties;
  function requireDefineProperties() {
    if (hasRequiredDefineProperties) return defineProperties_1;
    hasRequiredDefineProperties = 1;
    var keys = requireObjectKeys();
    var hasSymbols2 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var defineDataProperty2 = requireDefineDataProperty();
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var supportsDescriptors = requireHasPropertyDescriptors()();
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        defineDataProperty2(object, name, value, true);
      } else {
        defineDataProperty2(object, name, value);
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols2) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    defineProperties_1 = defineProperties;
    return defineProperties_1;
  }
  var shim$1;
  var hasRequiredShim$1;
  function requireShim$1() {
    if (hasRequiredShim$1) return shim$1;
    hasRequiredShim$1 = 1;
    var getPolyfill = requirePolyfill$1();
    var define = requireDefineProperties();
    shim$1 = function shimObjectIs() {
      var polyfill2 = getPolyfill();
      define(Object, {
        is: polyfill2
      }, {
        is: function testObjectIs() {
          return Object.is !== polyfill2;
        }
      });
      return polyfill2;
    };
    return shim$1;
  }
  var objectIs;
  var hasRequiredObjectIs;
  function requireObjectIs() {
    if (hasRequiredObjectIs) return objectIs;
    hasRequiredObjectIs = 1;
    var define = requireDefineProperties();
    var callBind2 = requireCallBind();
    var implementation2 = requireImplementation$1();
    var getPolyfill = requirePolyfill$1();
    var shim2 = requireShim$1();
    var polyfill2 = callBind2(getPolyfill(), Object);
    define(polyfill2, {
      getPolyfill,
      implementation: implementation2,
      shim: shim2
    });
    objectIs = polyfill2;
    return objectIs;
  }
  var implementation;
  var hasRequiredImplementation;
  function requireImplementation() {
    if (hasRequiredImplementation) return implementation;
    hasRequiredImplementation = 1;
    implementation = function isNaN2(value) {
      return value !== value;
    };
    return implementation;
  }
  var polyfill;
  var hasRequiredPolyfill;
  function requirePolyfill() {
    if (hasRequiredPolyfill) return polyfill;
    hasRequiredPolyfill = 1;
    var implementation2 = requireImplementation();
    polyfill = function getPolyfill() {
      if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
        return Number.isNaN;
      }
      return implementation2;
    };
    return polyfill;
  }
  var shim;
  var hasRequiredShim;
  function requireShim() {
    if (hasRequiredShim) return shim;
    hasRequiredShim = 1;
    var define = requireDefineProperties();
    var getPolyfill = requirePolyfill();
    shim = function shimNumberIsNaN() {
      var polyfill2 = getPolyfill();
      define(Number, {
        isNaN: polyfill2
      }, {
        isNaN: function testIsNaN() {
          return Number.isNaN !== polyfill2;
        }
      });
      return polyfill2;
    };
    return shim;
  }
  var isNan;
  var hasRequiredIsNan;
  function requireIsNan() {
    if (hasRequiredIsNan) return isNan;
    hasRequiredIsNan = 1;
    var callBind2 = requireCallBind();
    var define = requireDefineProperties();
    var implementation2 = requireImplementation();
    var getPolyfill = requirePolyfill();
    var shim2 = requireShim();
    var polyfill2 = callBind2(getPolyfill(), Number);
    define(polyfill2, {
      getPolyfill,
      implementation: implementation2,
      shim: shim2
    });
    isNan = polyfill2;
    return isNan;
  }
  var comparisons;
  var hasRequiredComparisons;
  function requireComparisons() {
    if (hasRequiredComparisons) return comparisons;
    hasRequiredComparisons = 1;
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) ;
          else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    var regexFlagsSupported = /a/g.flags !== void 0;
    var arrayFromSet = function arrayFromSet2(set) {
      var array = [];
      set.forEach(function(value) {
        return array.push(value);
      });
      return array;
    };
    var arrayFromMap = function arrayFromMap2(map) {
      var array = [];
      map.forEach(function(value, key) {
        return array.push([
          key,
          value
        ]);
      });
      return array;
    };
    var objectIs2 = Object.is ? Object.is : requireObjectIs();
    var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
      return [];
    };
    var numberIsNaN = Number.isNaN ? Number.isNaN : requireIsNan();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
    var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
    var objectToString = uncurryThis(Object.prototype.toString);
    var _require$types = requireUtil$2().types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
    function isNonIndex(key) {
      if (key.length === 0 || key.length > 10) return true;
      for (var i = 0; i < key.length; i++) {
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
      }
      return key.length === 10 && key >= Math.pow(2, 32);
    }
    function getOwnNonIndexProperties(value) {
      return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
    }
    function compare(a, b) {
      if (a === b) {
        return 0;
      }
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    }
    var kStrict = true;
    var kLoose = false;
    var kNoIterator = 0;
    var kIsArray = 1;
    var kIsSet = 2;
    var kIsMap = 3;
    function areSimilarRegExps(a, b) {
      return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
    }
    function areSimilarFloatArrays(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (var offset = 0; offset < a.byteLength; offset++) {
        if (a[offset] !== b[offset]) {
          return false;
        }
      }
      return true;
    }
    function areSimilarTypedArrays(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
    }
    function areEqualArrayBuffers(buf1, buf2) {
      return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
    }
    function isEqualBoxedPrimitive(val1, val2) {
      if (isNumberObject(val1)) {
        return isNumberObject(val2) && objectIs2(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
      }
      if (isStringObject(val1)) {
        return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
      }
      if (isBooleanObject(val1)) {
        return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
      }
      if (isBigIntObject(val1)) {
        return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
      }
      return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
    }
    function innerDeepEqual(val1, val2, strict, memos) {
      if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs2(val1, val2) : true;
      }
      if (strict) {
        if (_typeof(val1) !== "object") {
          return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
        }
        if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
          return false;
        }
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
          return false;
        }
      } else {
        if (val1 === null || _typeof(val1) !== "object") {
          if (val2 === null || _typeof(val2) !== "object") {
            return val1 == val2;
          }
          return false;
        }
        if (val2 === null || _typeof(val2) !== "object") {
          return false;
        }
      }
      var val1Tag = objectToString(val1);
      var val2Tag = objectToString(val2);
      if (val1Tag !== val2Tag) {
        return false;
      }
      if (Array.isArray(val1)) {
        if (val1.length !== val2.length) {
          return false;
        }
        var keys1 = getOwnNonIndexProperties(val1);
        var keys2 = getOwnNonIndexProperties(val2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
      }
      if (val1Tag === "[object Object]") {
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
          return false;
        }
      }
      if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
          return false;
        }
      } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
          return false;
        }
      } else if (isNativeError(val1) || val1 instanceof Error) {
        if (val1.message !== val2.message || val1.name !== val2.name) {
          return false;
        }
      } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
          if (!areSimilarFloatArrays(val1, val2)) {
            return false;
          }
        } else if (!areSimilarTypedArrays(val1, val2)) {
          return false;
        }
        var _keys = getOwnNonIndexProperties(val1);
        var _keys2 = getOwnNonIndexProperties(val2);
        if (_keys.length !== _keys2.length) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
      } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsSet);
      } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) {
          return false;
        }
        return keyCheck(val1, val2, strict, memos, kIsMap);
      } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) {
          return false;
        }
      } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator);
    }
    function getEnumerables(val, keys) {
      return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
      });
    }
    function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
      if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2);
        if (aKeys.length !== bKeys.length) {
          return false;
        }
      }
      var i = 0;
      for (; i < aKeys.length; i++) {
        if (!hasOwnProperty(val2, aKeys[i])) {
          return false;
        }
      }
      if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
          var count = 0;
          for (i = 0; i < symbolKeysA.length; i++) {
            var key = symbolKeysA[i];
            if (propertyIsEnumerable(val1, key)) {
              if (!propertyIsEnumerable(val2, key)) {
                return false;
              }
              aKeys.push(key);
              count++;
            } else if (propertyIsEnumerable(val2, key)) {
              return false;
            }
          }
          var symbolKeysB = objectGetOwnPropertySymbols(val2);
          if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
            return false;
          }
        } else {
          var _symbolKeysB = objectGetOwnPropertySymbols(val2);
          if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
            return false;
          }
        }
      }
      if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
        return true;
      }
      if (memos === void 0) {
        memos = {
          val1: /* @__PURE__ */ new Map(),
          val2: /* @__PURE__ */ new Map(),
          position: 0
        };
      } else {
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== void 0) {
          var val2MemoB = memos.val2.get(val2);
          if (val2MemoB !== void 0) {
            return val2MemoA === val2MemoB;
          }
        }
        memos.position++;
      }
      memos.val1.set(val1, memos.position);
      memos.val2.set(val2, memos.position);
      var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
      memos.val1.delete(val1);
      memos.val2.delete(val2);
      return areEq;
    }
    function setHasEqualElement(set, val1, strict, memo) {
      var setValues = arrayFromSet(set);
      for (var i = 0; i < setValues.length; i++) {
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
          set.delete(val2);
          return true;
        }
      }
      return false;
    }
    function findLooseMatchingPrimitives(prim) {
      switch (_typeof(prim)) {
        case "undefined":
          return null;
        case "object":
          return void 0;
        case "symbol":
          return false;
        case "string":
          prim = +prim;
        case "number":
          if (numberIsNaN(prim)) {
            return false;
          }
      }
      return true;
    }
    function setMightHaveLoosePrim(a, b, prim) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) return altValue;
      return b.has(altValue) && !a.has(altValue);
    }
    function mapMightHaveLoosePrim(a, b, prim, item, memo) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      var curB = b.get(altValue);
      if (curB === void 0 && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
        return false;
      }
      return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
    }
    function setEquiv(a, b, strict, memo) {
      var set = null;
      var aValues = arrayFromSet(a);
      for (var i = 0; i < aValues.length; i++) {
        var val = aValues[i];
        if (_typeof(val) === "object" && val !== null) {
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(val);
        } else if (!b.has(val)) {
          if (strict) return false;
          if (!setMightHaveLoosePrim(a, b, val)) {
            return false;
          }
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(val);
        }
      }
      if (set !== null) {
        var bValues = arrayFromSet(b);
        for (var _i = 0; _i < bValues.length; _i++) {
          var _val = bValues[_i];
          if (_typeof(_val) === "object" && _val !== null) {
            if (!setHasEqualElement(set, _val, strict, memo)) return false;
          } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
            return false;
          }
        }
        return set.size === 0;
      }
      return true;
    }
    function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
      var setValues = arrayFromSet(set);
      for (var i = 0; i < setValues.length; i++) {
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
          set.delete(key2);
          return true;
        }
      }
      return false;
    }
    function mapEquiv(a, b, strict, memo) {
      var set = null;
      var aEntries = arrayFromMap(a);
      for (var i = 0; i < aEntries.length; i++) {
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === "object" && key !== null) {
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(key);
        } else {
          var item2 = b.get(key);
          if (item2 === void 0 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
            if (strict) return false;
            if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
            if (set === null) {
              set = /* @__PURE__ */ new Set();
            }
            set.add(key);
          }
        }
      }
      if (set !== null) {
        var bEntries = arrayFromMap(b);
        for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
          var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
          if (_typeof(_key) === "object" && _key !== null) {
            if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
          } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) {
            return false;
          }
        }
        return set.size === 0;
      }
      return true;
    }
    function objEquiv(a, b, strict, keys, memos, iterationType) {
      var i = 0;
      if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) {
          return false;
        }
      } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) {
          return false;
        }
      } else if (iterationType === kIsArray) {
        for (; i < a.length; i++) {
          if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
              return false;
            }
          } else if (hasOwnProperty(b, i)) {
            return false;
          } else {
            var keysA = Object.keys(a);
            for (; i < keysA.length; i++) {
              var key = keysA[i];
              if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
                return false;
              }
            }
            if (keysA.length !== Object.keys(b).length) {
              return false;
            }
            return true;
          }
        }
      }
      for (i = 0; i < keys.length; i++) {
        var _key2 = keys[i];
        if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) {
          return false;
        }
      }
      return true;
    }
    function isDeepEqual(val1, val2) {
      return innerDeepEqual(val1, val2, kLoose);
    }
    function isDeepStrictEqual(val1, val2) {
      return innerDeepEqual(val1, val2, kStrict);
    }
    comparisons = {
      isDeepEqual,
      isDeepStrictEqual
    };
    return comparisons;
  }
  var hasRequiredAssert;
  function requireAssert() {
    if (hasRequiredAssert) return assert.exports;
    hasRequiredAssert = 1;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function _createClass(Constructor, protoProps, staticProps) {
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var _require = requireErrors$1(), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var AssertionError = requireAssertion_error();
    var _require2 = requireUtil$2(), inspect = _require2.inspect;
    var _require$types = requireUtil$2().types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
    var objectAssign = requirePolyfill$2()();
    var objectIs2 = requirePolyfill$1()();
    var RegExpPrototypeTest = requireCallBound()("RegExp.prototype.test");
    var isDeepEqual;
    var isDeepStrictEqual;
    function lazyLoadComparison() {
      var comparison = requireComparisons();
      isDeepEqual = comparison.isDeepEqual;
      isDeepStrictEqual = comparison.isDeepStrictEqual;
    }
    var warned = false;
    var assert$1 = assert.exports = ok;
    var NO_EXCEPTION_SENTINEL = {};
    function innerFail(obj) {
      if (obj.message instanceof Error) throw obj.message;
      throw new AssertionError(obj);
    }
    function fail(actual, expected, message, operator, stackStartFn) {
      var argsLen = arguments.length;
      var internalMessage;
      if (argsLen === 0) {
        internalMessage = "Failed";
      } else if (argsLen === 1) {
        message = actual;
        actual = void 0;
      } else {
        if (warned === false) {
          warned = true;
          var warn = process$1.emitWarning ? process$1.emitWarning : console.warn.bind(console);
          warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
      }
      if (message instanceof Error) throw message;
      var errArgs = {
        actual,
        expected,
        operator: operator === void 0 ? "fail" : operator,
        stackStartFn: stackStartFn || fail
      };
      if (message !== void 0) {
        errArgs.message = message;
      }
      var err = new AssertionError(errArgs);
      if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
      }
      throw err;
    }
    assert$1.fail = fail;
    assert$1.AssertionError = AssertionError;
    function innerOk(fn, argLen, value, message) {
      if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
          generatedMessage = true;
          message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) {
          throw message;
        }
        var err = new AssertionError({
          actual: value,
          expected: true,
          message,
          operator: "==",
          stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
      }
    }
    function ok() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      innerOk.apply(void 0, [
        ok,
        args.length
      ].concat(args));
    }
    assert$1.ok = ok;
    assert$1.equal = function equal(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual != expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "==",
          stackStartFn: equal
        });
      }
    };
    assert$1.notEqual = function notEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual == expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "!=",
          stackStartFn: notEqual
        });
      }
    };
    assert$1.deepEqual = function deepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (!isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepEqual",
          stackStartFn: deepEqual
        });
      }
    };
    assert$1.notDeepEqual = function notDeepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepEqual",
          stackStartFn: notDeepEqual
        });
      }
    };
    assert$1.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (!isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepStrictEqual",
          stackStartFn: deepStrictEqual
        });
      }
    };
    assert$1.notDeepStrictEqual = notDeepStrictEqual;
    function notDeepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      if (isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepStrictEqual",
          stackStartFn: notDeepStrictEqual
        });
      }
    }
    assert$1.strictEqual = function strictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (!objectIs2(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "strictEqual",
          stackStartFn: strictEqual
        });
      }
    };
    assert$1.notStrictEqual = function notStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (objectIs2(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notStrictEqual",
          stackStartFn: notStrictEqual
        });
      }
    };
    var Comparison = _createClass(function Comparison2(obj, keys, actual) {
      var _this = this;
      _classCallCheck(this, Comparison2);
      keys.forEach(function(key) {
        if (key in obj) {
          if (actual !== void 0 && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
            _this[key] = actual[key];
          } else {
            _this[key] = obj[key];
          }
        }
      });
    });
    function compareExceptionKey(actual, expected, key, message, keys, fn) {
      if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
          var a = new Comparison(actual, keys);
          var b = new Comparison(expected, keys, actual);
          var err = new AssertionError({
            actual: a,
            expected: b,
            operator: "deepStrictEqual",
            stackStartFn: fn
          });
          err.actual = actual;
          err.expected = expected;
          err.operator = fn.name;
          throw err;
        }
        innerFail({
          actual,
          expected,
          message,
          operator: fn.name,
          stackStartFn: fn
        });
      }
    }
    function expectedException(actual, expected, msg, fn) {
      if (typeof expected !== "function") {
        if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
        if (arguments.length === 2) {
          throw new ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
          ], expected);
        }
        if (_typeof(actual) !== "object" || actual === null) {
          var err = new AssertionError({
            actual,
            expected,
            message: msg,
            operator: "deepStrictEqual",
            stackStartFn: fn
          });
          err.operator = fn.name;
          throw err;
        }
        var keys = Object.keys(expected);
        if (expected instanceof Error) {
          keys.push("name", "message");
        } else if (keys.length === 0) {
          throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        }
        if (isDeepEqual === void 0) lazyLoadComparison();
        keys.forEach(function(key) {
          if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
            return;
          }
          compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
      }
      if (expected.prototype !== void 0 && actual instanceof expected) {
        return true;
      }
      if (Error.isPrototypeOf(expected)) {
        return false;
      }
      return expected.call({}, actual) === true;
    }
    function getActual(fn) {
      if (typeof fn !== "function") {
        throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
      }
      try {
        fn();
      } catch (e) {
        return e;
      }
      return NO_EXCEPTION_SENTINEL;
    }
    function checkIsPromise(obj) {
      return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
    }
    function waitForActual(promiseFn) {
      return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
          resultPromise = promiseFn();
          if (!checkIsPromise(resultPromise)) {
            throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
          }
        } else if (checkIsPromise(promiseFn)) {
          resultPromise = promiseFn;
        } else {
          throw new ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
          ], promiseFn);
        }
        return Promise.resolve().then(function() {
          return resultPromise;
        }).then(function() {
          return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
          return e;
        });
      });
    }
    function expectsError(stackStartFn, actual, error, message) {
      if (typeof error === "string") {
        if (arguments.length === 4) {
          throw new ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
          ], error);
        }
        if (_typeof(actual) === "object" && actual !== null) {
          if (actual.message === error) {
            throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
          }
        } else if (actual === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        }
        message = error;
        error = void 0;
      } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
        throw new ERR_INVALID_ARG_TYPE("error", [
          "Object",
          "Error",
          "Function",
          "RegExp"
        ], error);
      }
      if (actual === NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) {
          details += " (".concat(error.name, ")");
        }
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        innerFail({
          actual: void 0,
          expected: error,
          operator: stackStartFn.name,
          message: "Missing expected ".concat(fnType).concat(details),
          stackStartFn
        });
      }
      if (error && !expectedException(actual, error, message, stackStartFn)) {
        throw actual;
      }
    }
    function expectsNoError(stackStartFn, actual, error, message) {
      if (actual === NO_EXCEPTION_SENTINEL) return;
      if (typeof error === "string") {
        message = error;
        error = void 0;
      }
      if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        innerFail({
          actual,
          expected: error,
          operator: stackStartFn.name,
          message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
          stackStartFn
        });
      }
      throw actual;
    }
    assert$1.throws = function throws(promiseFn) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
      ].concat(args));
    };
    assert$1.rejects = function rejects(promiseFn) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return waitForActual(promiseFn).then(function(result2) {
        return expectsError.apply(void 0, [
          rejects,
          result2
        ].concat(args));
      });
    };
    assert$1.doesNotThrow = function doesNotThrow(fn) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
      ].concat(args));
    };
    assert$1.doesNotReject = function doesNotReject(fn) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      return waitForActual(fn).then(function(result2) {
        return expectsNoError.apply(void 0, [
          doesNotReject,
          result2
        ].concat(args));
      });
    };
    assert$1.ifError = function ifError(err) {
      if (err !== null && err !== void 0) {
        var message = "ifError got unwanted exception: ";
        if (_typeof(err) === "object" && typeof err.message === "string") {
          if (err.message.length === 0 && err.constructor) {
            message += err.constructor.name;
          } else {
            message += err.message;
          }
        } else {
          message += inspect(err);
        }
        var newErr = new AssertionError({
          actual: err,
          expected: null,
          operator: "ifError",
          message,
          stackStartFn: ifError
        });
        var origStack = err.stack;
        if (typeof origStack === "string") {
          var tmp2 = origStack.split("\n");
          tmp2.shift();
          var tmp1 = newErr.stack.split("\n");
          for (var i = 0; i < tmp2.length; i++) {
            var pos = tmp1.indexOf(tmp2[i]);
            if (pos !== -1) {
              tmp1 = tmp1.slice(0, pos);
              break;
            }
          }
          newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
      }
    };
    function internalMatch(string, regexp, message, fn, fnName) {
      if (!isRegExp(regexp)) {
        throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
      }
      var match = fnName === "match";
      if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
        if (message instanceof Error) {
          throw message;
        }
        var generatedMessage = !message;
        message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
        var err = new AssertionError({
          actual: string,
          expected: regexp,
          message,
          operator: fnName,
          stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
      }
    }
    assert$1.match = function match(string, regexp, message) {
      internalMatch(string, regexp, message, match, "match");
    };
    assert$1.doesNotMatch = function doesNotMatch(string, regexp, message) {
      internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
    };
    function strict() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      innerOk.apply(void 0, [
        strict,
        args.length
      ].concat(args));
    }
    assert$1.strict = objectAssign(strict, assert$1, {
      equal: assert$1.strictEqual,
      deepEqual: assert$1.deepStrictEqual,
      notEqual: assert$1.notStrictEqual,
      notDeepEqual: assert$1.notDeepStrictEqual
    });
    assert$1.strict.strict = assert$1.strict;
    return assert.exports;
  }
  var hasRequiredErrors;
  function requireErrors() {
    if (hasRequiredErrors) return errors$1;
    hasRequiredErrors = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AssertionError = exports.RangeError = exports.TypeError = exports.Error = void 0;
      exports.message = message;
      exports.E = E;
      const assert2 = requireAssert();
      const util2 = requireUtil$2();
      const kCode = typeof Symbol === "undefined" ? "_kCode" : Symbol("code");
      const messages = {};
      function makeNodeError(Base) {
        return class NodeError extends Base {
          constructor(key, ...args) {
            super(message(key, args));
            this.code = key;
            this[kCode] = key;
            this.name = `${super.name} [${this[kCode]}]`;
          }
        };
      }
      const g = typeof globalThis !== "undefined" ? globalThis : commonjsGlobal;
      class AssertionError extends g.Error {
        constructor(options2) {
          if (typeof options2 !== "object" || options2 === null) {
            throw new exports.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
          }
          if (options2.message) {
            super(options2.message);
          } else {
            super(`${util2.inspect(options2.actual).slice(0, 128)} ${options2.operator} ${util2.inspect(options2.expected).slice(0, 128)}`);
          }
          this.generatedMessage = !options2.message;
          this.name = "AssertionError [ERR_ASSERTION]";
          this.code = "ERR_ASSERTION";
          this.actual = options2.actual;
          this.expected = options2.expected;
          this.operator = options2.operator;
          exports.Error.captureStackTrace(this, options2.stackStartFunction);
        }
      }
      exports.AssertionError = AssertionError;
      function message(key, args) {
        assert2.strictEqual(typeof key, "string");
        const msg = messages[key];
        assert2(msg, `An invalid error message key was used: ${key}.`);
        let fmt;
        if (typeof msg === "function") {
          fmt = msg;
        } else {
          fmt = util2.format;
          if (args === void 0 || args.length === 0) return msg;
          args.unshift(msg);
        }
        return String(fmt.apply(null, args));
      }
      function E(sym, val) {
        messages[sym] = typeof val === "function" ? val : String(val);
      }
      exports.Error = makeNodeError(g.Error);
      exports.TypeError = makeNodeError(g.TypeError);
      exports.RangeError = makeNodeError(g.RangeError);
      E("ERR_ARG_NOT_ITERABLE", "%s must be iterable");
      E("ERR_ASSERTION", "%s");
      E("ERR_BUFFER_OUT_OF_BOUNDS", bufferOutOfBounds);
      E("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received");
      E("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s");
      E("ERR_CPU_USAGE", "Unable to obtain cpu usage %s");
      E("ERR_DNS_SET_SERVERS_FAILED", (err, servers) => `c-ares failed to set servers: "${err}" [${servers}]`);
      E("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value");
      E("ERR_ENCODING_NOT_SUPPORTED", (enc) => `The "${enc}" encoding is not supported`);
      E("ERR_ENCODING_INVALID_ENCODED_DATA", (enc) => `The encoded data was not valid for encoding ${enc}`);
      E("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client");
      E("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s");
      E("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding");
      E("ERR_INDEX_OUT_OF_RANGE", "Index out of range");
      E("ERR_INVALID_ARG_TYPE", invalidArgType);
      E("ERR_INVALID_ARRAY_LENGTH", (name, len, actual) => {
        assert2.strictEqual(typeof actual, "number");
        return `The array "${name}" (length ${actual}) must be of length ${len}.`;
      });
      E("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s");
      E("ERR_INVALID_CALLBACK", "Callback must be a function");
      E("ERR_INVALID_CHAR", "Invalid character in %s");
      E("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column");
      E("ERR_INVALID_FD", '"fd" must be a positive integer: %s');
      E("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s');
      E("ERR_INVALID_FILE_URL_PATH", "File URL path %s");
      E("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent");
      E("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s");
      E("ERR_INVALID_OPT_VALUE", (name, value) => {
        return `The value "${String(value)}" is invalid for option "${name}"`;
      });
      E("ERR_INVALID_OPT_VALUE_ENCODING", (value) => `The value "${String(value)}" is invalid for option "encoding"`);
      E("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
      E("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s");
      E("ERR_INVALID_THIS", 'Value of "this" must be of type %s');
      E("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple");
      E("ERR_INVALID_URL", "Invalid URL: %s");
      E("ERR_INVALID_URL_SCHEME", (expected) => `The URL must be ${oneOf(expected, "scheme")}`);
      E("ERR_IPC_CHANNEL_CLOSED", "Channel closed");
      E("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected");
      E("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe");
      E("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks");
      E("ERR_MISSING_ARGS", missingArgs);
      E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
      E("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function");
      E("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object");
      E("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support");
      E("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported");
      E("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s");
      E("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound");
      E("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536");
      E("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6");
      E("ERR_SOCKET_CANNOT_SEND", "Unable to send data");
      E("ERR_SOCKET_CLOSED", "Socket is closed");
      E("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running");
      E("ERR_STDERR_CLOSE", "process.stderr cannot be closed");
      E("ERR_STDOUT_CLOSE", "process.stdout cannot be closed");
      E("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode");
      E("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s");
      E("ERR_TLS_DH_PARAM_SIZE", (size) => `DH parameter size ${size} is less than 2048`);
      E("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout");
      E("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate");
      E("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext');
      E("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected");
      E("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming");
      E("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0");
      E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s");
      E("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s");
      E("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type");
      E("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type");
      E("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
      function invalidArgType(name, expected, actual) {
        assert2(name, "name is required");
        let determiner;
        if (expected.includes("not ")) {
          determiner = "must not be";
          expected = expected.split("not ")[1];
        } else {
          determiner = "must be";
        }
        let msg;
        if (Array.isArray(name)) {
          const names = name.map((val) => `"${val}"`).join(", ");
          msg = `The ${names} arguments ${determiner} ${oneOf(expected, "type")}`;
        } else if (name.includes(" argument")) {
          msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
        } else {
          const type2 = name.includes(".") ? "property" : "argument";
          msg = `The "${name}" ${type2} ${determiner} ${oneOf(expected, "type")}`;
        }
        if (arguments.length >= 3) {
          msg += `. Received type ${actual !== null ? typeof actual : "null"}`;
        }
        return msg;
      }
      function missingArgs(...args) {
        assert2(args.length > 0, "At least one arg needs to be specified");
        let msg = "The ";
        const len = args.length;
        args = args.map((a) => `"${a}"`);
        switch (len) {
          case 1:
            msg += `${args[0]} argument`;
            break;
          case 2:
            msg += `${args[0]} and ${args[1]} arguments`;
            break;
          default:
            msg += args.slice(0, len - 1).join(", ");
            msg += `, and ${args[len - 1]} arguments`;
            break;
        }
        return `${msg} must be specified`;
      }
      function oneOf(expected, thing) {
        assert2(expected, "expected is required");
        assert2(typeof thing === "string", "thing is required");
        if (Array.isArray(expected)) {
          const len = expected.length;
          assert2(len > 0, "At least one expected value needs to be specified");
          expected = expected.map((i) => String(i));
          if (len > 2) {
            return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
          } else if (len === 2) {
            return `one of ${thing} ${expected[0]} or ${expected[1]}`;
          } else {
            return `of ${thing} ${expected[0]}`;
          }
        } else {
          return `of ${thing} ${String(expected)}`;
        }
      }
      function bufferOutOfBounds(name, isWriting) {
        if (isWriting) {
          return "Attempt to write outside buffer bounds";
        } else {
          return `"${name}" is outside of buffer bounds`;
        }
      }
    })(errors$1);
    return errors$1;
  }
  var hasRequiredEncoding;
  function requireEncoding() {
    if (hasRequiredEncoding) return encoding;
    hasRequiredEncoding = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ENCODING_UTF8 = void 0;
      exports.assertEncoding = assertEncoding;
      exports.strToEncoding = strToEncoding;
      const buffer_1 = requireBuffer();
      const errors2 = requireErrors();
      exports.ENCODING_UTF8 = "utf8";
      function assertEncoding(encoding2) {
        if (encoding2 && !buffer_1.Buffer.isEncoding(encoding2)) throw new errors2.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", encoding2);
      }
      function strToEncoding(str, encoding2) {
        if (!encoding2 || encoding2 === exports.ENCODING_UTF8) return str;
        if (encoding2 === "buffer") return new buffer_1.Buffer(str);
        return new buffer_1.Buffer(str).toString(encoding2);
      }
    })(encoding);
    return encoding;
  }
  var hasRequiredDirent;
  function requireDirent() {
    if (hasRequiredDirent) return Dirent;
    hasRequiredDirent = 1;
    Object.defineProperty(Dirent, "__esModule", {
      value: true
    });
    Dirent.Dirent = void 0;
    const constants_1 = requireConstants$1();
    const encoding_1 = requireEncoding();
    const { S_IFMT, S_IFDIR, S_IFREG, S_IFBLK, S_IFCHR, S_IFLNK, S_IFIFO, S_IFSOCK } = constants_1.constants;
    let Dirent$1 = class Dirent2 {
      constructor() {
        this.name = "";
        this.path = "";
        this.parentPath = "";
        this.mode = 0;
      }
      static build(link, encoding2) {
        const dirent = new Dirent2();
        const { mode } = link.getNode();
        dirent.name = (0, encoding_1.strToEncoding)(link.getName(), encoding2);
        dirent.mode = mode;
        dirent.path = link.getParentPath();
        dirent.parentPath = dirent.path;
        return dirent;
      }
      _checkModeProperty(property) {
        return (this.mode & S_IFMT) === property;
      }
      isDirectory() {
        return this._checkModeProperty(S_IFDIR);
      }
      isFile() {
        return this._checkModeProperty(S_IFREG);
      }
      isBlockDevice() {
        return this._checkModeProperty(S_IFBLK);
      }
      isCharacterDevice() {
        return this._checkModeProperty(S_IFCHR);
      }
      isSymbolicLink() {
        return this._checkModeProperty(S_IFLNK);
      }
      isFIFO() {
        return this._checkModeProperty(S_IFIFO);
      }
      isSocket() {
        return this._checkModeProperty(S_IFSOCK);
      }
    };
    Dirent.Dirent = Dirent$1;
    Dirent.default = Dirent$1;
    return Dirent;
  }
  var volume = {};
  var node = {};
  var process = {};
  var dist = {};
  var hasRequiredDist;
  function requireDist() {
    if (hasRequiredDist) return dist;
    hasRequiredDist = 1;
    (function(exports) {
      Object.defineProperties(exports, {
        __esModule: {
          value: true
        },
        [Symbol.toStringTag]: {
          value: "Module"
        }
      });
      function getDefaultExportFromCjs2(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
      }
      var browser2 = {
        exports: {}
      };
      var process2 = browser2.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
      var browserExports = browser2.exports;
      const process$12 = getDefaultExportFromCjs2(browserExports);
      exports.default = process$12;
      exports.process = process$12;
    })(dist);
    return dist;
  }
  var hasRequiredProcess;
  function requireProcess() {
    if (hasRequiredProcess) return process;
    hasRequiredProcess = 1;
    Object.defineProperty(process, "__esModule", {
      value: true
    });
    process.createProcess = createProcess;
    const maybeReturnProcess = () => {
      if (typeof process$1 !== "undefined") {
        return process$1;
      }
      try {
        return requireDist();
      } catch (_a) {
        return void 0;
      }
    };
    function createProcess() {
      const p = maybeReturnProcess() || {};
      if (!p.cwd) p.cwd = () => "/";
      if (!p.emitWarning) p.emitWarning = (message, type2) => {
        console.warn(`${type2}${type2 ? ": " : ""}${message}`);
      };
      if (!p.env) p.env = {};
      return p;
    }
    process.default = createProcess();
    return process;
  }
  var events = {
    exports: {}
  };
  var hasRequiredEvents;
  requireEvents = function() {
    if (hasRequiredEvents) return events.exports;
    hasRequiredEvents = 1;
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning2) {
      if (console && console.warn) console.warn(warning2);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    events.exports = EventEmitter;
    events.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type2) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type2 === "error";
      var events2 = this._events;
      if (events2 !== void 0) doError = doError && events2.error === void 0;
      else if (!doError) return false;
      if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events2[type2];
      if (handler === void 0) return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type2, listener, prepend) {
      var m;
      var events2;
      var existing;
      checkListener(listener);
      events2 = target._events;
      if (events2 === void 0) {
        events2 = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events2.newListener !== void 0) {
          target.emit("newListener", type2, listener.listener ? listener.listener : listener);
          events2 = target._events;
        }
        existing = events2[type2];
      }
      if (existing === void 0) {
        existing = events2[type2] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events2[type2] = prepend ? [
            listener,
            existing
          ] : [
            existing,
            listener
          ];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type2;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type2, listener) {
      return _addListener(this, type2, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type2, listener) {
      return _addListener(this, type2, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type2, listener) {
      var state2 = {
        fired: false,
        wrapFn: void 0,
        target,
        type: type2,
        listener
      };
      var wrapped = onceWrapper.bind(state2);
      wrapped.listener = listener;
      state2.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type2, listener) {
      checkListener(listener);
      this.on(type2, _onceWrap(this, type2, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type2, listener) {
      checkListener(listener);
      this.prependListener(type2, _onceWrap(this, type2, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type2, listener) {
      var list, events2, position, i, originalListener;
      checkListener(listener);
      events2 = this._events;
      if (events2 === void 0) return this;
      list = events2[type2];
      if (list === void 0) return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events2[type2];
          if (events2.removeListener) this.emit("removeListener", type2, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1) events2[type2] = list[0];
        if (events2.removeListener !== void 0) this.emit("removeListener", type2, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type2) {
      var listeners, events2, i;
      events2 = this._events;
      if (events2 === void 0) return this;
      if (events2.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events2[type2] !== void 0) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
          else delete events2[type2];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events2);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events2[type2];
      if (typeof listeners === "function") {
        this.removeListener(type2, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type2, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type2, unwrap) {
      var events2 = target._events;
      if (events2 === void 0) return [];
      var evlistener = events2[type2];
      if (evlistener === void 0) return [];
      if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
      ] : [
        evlistener
      ];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type2) {
      return _listeners(this, type2, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type2) {
      return _listeners(this, type2, false);
    };
    EventEmitter.listenerCount = function(emitter, type2) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type2);
      } else {
        return listenerCount.call(emitter, type2);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type2) {
      var events2 = this._events;
      if (events2 !== void 0) {
        var evlistener = events2[type2];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i) copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve2, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve2([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
          once: true
        });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
          });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    return events.exports;
  };
  var hasRequiredNode;
  function requireNode() {
    if (hasRequiredNode) return node;
    hasRequiredNode = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.File = exports.Link = exports.Node = exports.SEP = void 0;
      const process_1 = requireProcess();
      const buffer_1 = requireBuffer();
      const constants_1 = requireConstants$1();
      const events_1 = requireEvents();
      const Stats_1 = requireStats();
      const { S_IFMT, S_IFDIR, S_IFREG, S_IFLNK, S_IFCHR, O_APPEND } = constants_1.constants;
      const getuid = () => {
        var _a, _b;
        return (_b = (_a = process_1.default.getuid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0;
      };
      const getgid = () => {
        var _a, _b;
        return (_b = (_a = process_1.default.getgid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0;
      };
      exports.SEP = "/";
      class Node extends events_1.EventEmitter {
        constructor(ino, mode = 438) {
          super();
          this._uid = getuid();
          this._gid = getgid();
          this._atime = /* @__PURE__ */ new Date();
          this._mtime = /* @__PURE__ */ new Date();
          this._ctime = /* @__PURE__ */ new Date();
          this.rdev = 0;
          this._nlink = 1;
          this.mode = mode;
          this.ino = ino;
        }
        set ctime(ctime) {
          this._ctime = ctime;
        }
        get ctime() {
          return this._ctime;
        }
        set uid(uid) {
          this._uid = uid;
          this.ctime = /* @__PURE__ */ new Date();
        }
        get uid() {
          return this._uid;
        }
        set gid(gid) {
          this._gid = gid;
          this.ctime = /* @__PURE__ */ new Date();
        }
        get gid() {
          return this._gid;
        }
        set atime(atime) {
          this._atime = atime;
          this.ctime = /* @__PURE__ */ new Date();
        }
        get atime() {
          return this._atime;
        }
        set mtime(mtime) {
          this._mtime = mtime;
          this.ctime = /* @__PURE__ */ new Date();
        }
        get mtime() {
          return this._mtime;
        }
        get perm() {
          return this.mode & ~S_IFMT;
        }
        set perm(perm) {
          this.mode = this.mode & S_IFMT | perm & ~S_IFMT;
          this.ctime = /* @__PURE__ */ new Date();
        }
        set nlink(nlink) {
          this._nlink = nlink;
          this.ctime = /* @__PURE__ */ new Date();
        }
        get nlink() {
          return this._nlink;
        }
        getString(encoding2 = "utf8") {
          this.atime = /* @__PURE__ */ new Date();
          return this.getBuffer().toString(encoding2);
        }
        setString(str) {
          this.buf = (0, buffer_1.bufferFrom)(str, "utf8");
          this.touch();
        }
        getBuffer() {
          this.atime = /* @__PURE__ */ new Date();
          if (!this.buf) this.setBuffer((0, buffer_1.bufferAllocUnsafe)(0));
          return (0, buffer_1.bufferFrom)(this.buf);
        }
        setBuffer(buf) {
          this.buf = (0, buffer_1.bufferFrom)(buf);
          this.touch();
        }
        getSize() {
          return this.buf ? this.buf.length : 0;
        }
        setModeProperty(property) {
          this.mode = property;
        }
        isFile() {
          return (this.mode & S_IFMT) === S_IFREG;
        }
        isDirectory() {
          return (this.mode & S_IFMT) === S_IFDIR;
        }
        isSymlink() {
          return (this.mode & S_IFMT) === S_IFLNK;
        }
        isCharacterDevice() {
          return (this.mode & S_IFMT) === S_IFCHR;
        }
        makeSymlink(symlink) {
          this.mode = S_IFLNK | 438;
          this.symlink = symlink;
        }
        write(buf, off = 0, len = buf.length, pos = 0) {
          if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
          if (pos + len > this.buf.length) {
            const newBuf = (0, buffer_1.bufferAllocUnsafe)(pos + len);
            this.buf.copy(newBuf, 0, 0, this.buf.length);
            this.buf = newBuf;
          }
          buf.copy(this.buf, pos, off, off + len);
          this.touch();
          return len;
        }
        read(buf, off = 0, len = buf.byteLength, pos = 0) {
          this.atime = /* @__PURE__ */ new Date();
          if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
          let actualLen = len;
          if (actualLen > buf.byteLength) {
            actualLen = buf.byteLength;
          }
          if (actualLen + pos > this.buf.length) {
            actualLen = this.buf.length - pos;
          }
          const buf2 = buf instanceof buffer_1.Buffer ? buf : buffer_1.Buffer.from(buf.buffer);
          this.buf.copy(buf2, off, pos, pos + actualLen);
          return actualLen;
        }
        truncate(len = 0) {
          if (!len) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
          else {
            if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
            if (len <= this.buf.length) {
              this.buf = this.buf.slice(0, len);
            } else {
              const buf = (0, buffer_1.bufferAllocUnsafe)(len);
              this.buf.copy(buf);
              buf.fill(0, this.buf.length);
              this.buf = buf;
            }
          }
          this.touch();
        }
        chmod(perm) {
          this.mode = this.mode & S_IFMT | perm & ~S_IFMT;
          this.touch();
        }
        chown(uid, gid) {
          this.uid = uid;
          this.gid = gid;
          this.touch();
        }
        touch() {
          this.mtime = /* @__PURE__ */ new Date();
          this.emit("change", this);
        }
        canRead(uid = getuid(), gid = getgid()) {
          if (this.perm & 4) {
            return true;
          }
          if (gid === this.gid) {
            if (this.perm & 32) {
              return true;
            }
          }
          if (uid === this.uid) {
            if (this.perm & 256) {
              return true;
            }
          }
          return false;
        }
        canWrite(uid = getuid(), gid = getgid()) {
          if (this.perm & 2) {
            return true;
          }
          if (gid === this.gid) {
            if (this.perm & 16) {
              return true;
            }
          }
          if (uid === this.uid) {
            if (this.perm & 128) {
              return true;
            }
          }
          return false;
        }
        canExecute(uid = getuid(), gid = getgid()) {
          if (this.perm & 1) {
            return true;
          }
          if (gid === this.gid) {
            if (this.perm & 8) {
              return true;
            }
          }
          if (uid === this.uid) {
            if (this.perm & 64) {
              return true;
            }
          }
          return false;
        }
        del() {
          this.emit("delete", this);
        }
        toJSON() {
          return {
            ino: this.ino,
            uid: this.uid,
            gid: this.gid,
            atime: this.atime.getTime(),
            mtime: this.mtime.getTime(),
            ctime: this.ctime.getTime(),
            perm: this.perm,
            mode: this.mode,
            nlink: this.nlink,
            symlink: this.symlink,
            data: this.getString()
          };
        }
      }
      exports.Node = Node;
      class Link extends events_1.EventEmitter {
        get steps() {
          return this._steps;
        }
        set steps(val) {
          this._steps = val;
          for (const [child, link] of this.children.entries()) {
            if (child === "." || child === "..") {
              continue;
            }
            link === null || link === void 0 ? void 0 : link.syncSteps();
          }
        }
        constructor(vol, parent, name) {
          super();
          this.children = /* @__PURE__ */ new Map();
          this._steps = [];
          this.ino = 0;
          this.length = 0;
          this.vol = vol;
          this.parent = parent;
          this.name = name;
          this.syncSteps();
        }
        setNode(node2) {
          this.node = node2;
          this.ino = node2.ino;
        }
        getNode() {
          return this.node;
        }
        createChild(name, node2 = this.vol.createNode(S_IFREG | 438)) {
          const link = new Link(this.vol, this, name);
          link.setNode(node2);
          if (node2.isDirectory()) {
            link.children.set(".", link);
            link.getNode().nlink++;
          }
          this.setChild(name, link);
          return link;
        }
        setChild(name, link = new Link(this.vol, this, name)) {
          this.children.set(name, link);
          link.parent = this;
          this.length++;
          const node2 = link.getNode();
          if (node2.isDirectory()) {
            link.children.set("..", this);
            this.getNode().nlink++;
          }
          this.getNode().mtime = /* @__PURE__ */ new Date();
          this.emit("child:add", link, this);
          return link;
        }
        deleteChild(link) {
          const node2 = link.getNode();
          if (node2.isDirectory()) {
            link.children.delete("..");
            this.getNode().nlink--;
          }
          this.children.delete(link.getName());
          this.length--;
          this.getNode().mtime = /* @__PURE__ */ new Date();
          this.emit("child:delete", link, this);
        }
        getChild(name) {
          this.getNode().mtime = /* @__PURE__ */ new Date();
          return this.children.get(name);
        }
        getPath() {
          return this.steps.join(exports.SEP);
        }
        getParentPath() {
          return this.steps.slice(0, -1).join(exports.SEP);
        }
        getName() {
          return this.steps[this.steps.length - 1];
        }
        toJSON() {
          return {
            steps: this.steps,
            ino: this.ino,
            children: Array.from(this.children.keys())
          };
        }
        syncSteps() {
          this.steps = this.parent ? this.parent.steps.concat([
            this.name
          ]) : [
            this.name
          ];
        }
      }
      exports.Link = Link;
      class File {
        constructor(link, node2, flags, fd) {
          this.link = link;
          this.node = node2;
          this.flags = flags;
          this.fd = fd;
          this.position = 0;
          if (this.flags & O_APPEND) this.position = this.getSize();
        }
        getString(encoding2 = "utf8") {
          return this.node.getString();
        }
        setString(str) {
          this.node.setString(str);
        }
        getBuffer() {
          return this.node.getBuffer();
        }
        setBuffer(buf) {
          this.node.setBuffer(buf);
        }
        getSize() {
          return this.node.getSize();
        }
        truncate(len) {
          this.node.truncate(len);
        }
        seekTo(position) {
          this.position = position;
        }
        stats() {
          return Stats_1.default.build(this.node);
        }
        write(buf, offset = 0, length = buf.length, position) {
          if (typeof position !== "number") position = this.position;
          const bytes = this.node.write(buf, offset, length, position);
          this.position = position + bytes;
          return bytes;
        }
        read(buf, offset = 0, length = buf.byteLength, position) {
          if (typeof position !== "number") position = this.position;
          const bytes = this.node.read(buf, offset, length, position);
          this.position = position + bytes;
          return bytes;
        }
        chmod(perm) {
          this.node.chmod(perm);
        }
        chown(uid, gid) {
          this.node.chown(uid, gid);
        }
      }
      exports.File = File;
    })(node);
    return node;
  }
  var setImmediate$1 = {};
  var hasRequiredSetImmediate;
  function requireSetImmediate() {
    if (hasRequiredSetImmediate) return setImmediate$1;
    hasRequiredSetImmediate = 1;
    Object.defineProperty(setImmediate$1, "__esModule", {
      value: true
    });
    let _setImmediate;
    if (typeof setImmediate === "function") _setImmediate = setImmediate.bind(typeof globalThis !== "undefined" ? globalThis : commonjsGlobal);
    else _setImmediate = setTimeout.bind(typeof globalThis !== "undefined" ? globalThis : commonjsGlobal);
    setImmediate$1.default = _setImmediate;
    return setImmediate$1;
  }
  var queueMicrotask$1 = {};
  var hasRequiredQueueMicrotask;
  function requireQueueMicrotask() {
    if (hasRequiredQueueMicrotask) return queueMicrotask$1;
    hasRequiredQueueMicrotask = 1;
    Object.defineProperty(queueMicrotask$1, "__esModule", {
      value: true
    });
    queueMicrotask$1.default = typeof queueMicrotask === "function" ? queueMicrotask : (cb) => Promise.resolve().then(() => cb()).catch(() => {
    });
    return queueMicrotask$1;
  }
  var setTimeoutUnref = {};
  var hasRequiredSetTimeoutUnref;
  function requireSetTimeoutUnref() {
    if (hasRequiredSetTimeoutUnref) return setTimeoutUnref;
    hasRequiredSetTimeoutUnref = 1;
    Object.defineProperty(setTimeoutUnref, "__esModule", {
      value: true
    });
    function setTimeoutUnref$1(callback, time, args) {
      const ref2 = setTimeout.apply(typeof globalThis !== "undefined" ? globalThis : commonjsGlobal, arguments);
      if (ref2 && typeof ref2 === "object" && typeof ref2.unref === "function") ref2.unref();
      return ref2;
    }
    setTimeoutUnref.default = setTimeoutUnref$1;
    return setTimeoutUnref;
  }
  var streamBrowser;
  var hasRequiredStreamBrowser;
  function requireStreamBrowser() {
    if (hasRequiredStreamBrowser) return streamBrowser;
    hasRequiredStreamBrowser = 1;
    streamBrowser = requireEvents().EventEmitter;
    return streamBrowser;
  }
  var buffer_list;
  var hasRequiredBuffer_list;
  function requireBuffer_list() {
    if (hasRequiredBuffer_list) return buffer_list;
    hasRequiredBuffer_list = 1;
    function ownKeys2(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols2 = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols2);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input2, hint) {
      if (typeof input2 !== "object" || input2 === null) return input2;
      var prim = input2[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input2, hint);
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(input2);
    }
    var _require = requireDist$1(), Buffer2 = _require.Buffer;
    var _require2 = requireUtil$2(), inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    buffer_list = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [
        {
          key: "push",
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        },
        {
          key: "unshift",
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        },
        {
          key: "shift",
          value: function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }
        },
        {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        },
        {
          key: "join",
          value: function join(s) {
            if (this.length === 0) return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) ret += s + p.data;
            return ret;
          }
        },
        {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0) return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
        },
        {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        },
        {
          key: "first",
          value: function first() {
            return this.head.data;
          }
        },
        {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length) ret += str;
              else ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: custom,
          value: function value(_, options2) {
            return inspect(this, _objectSpread(_objectSpread({}, options2), {}, {
              depth: 0,
              customInspect: false
            }));
          }
        }
      ]);
      return BufferList;
    }();
    return buffer_list;
  }
  var destroy_1;
  var hasRequiredDestroy;
  function requireDestroy() {
    if (hasRequiredDestroy) return destroy_1;
    hasRequiredDestroy = 1;
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process$1.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process$1.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process$1.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process$1.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process$1.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process$1.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process$1.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose) return;
      if (self2._readableState && !self2._readableState.emitClose) return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
      else stream.emit("error", err);
    }
    destroy_1 = {
      destroy,
      undestroy,
      errorOrDestroy
    };
    return destroy_1;
  }
  var errorsBrowser = {};
  var hasRequiredErrorsBrowser;
  function requireErrorsBrowser() {
    if (hasRequiredErrorsBrowser) return errorsBrowser;
    hasRequiredErrorsBrowser = 1;
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
      }(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(0, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type2 = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(typeof actual);
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    errorsBrowser.codes = codes;
    return errorsBrowser;
  }
  var state;
  var hasRequiredState;
  function requireState() {
    if (hasRequiredState) return state;
    hasRequiredState = 1;
    var ERR_INVALID_OPT_VALUE = requireErrorsBrowser().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options2, isDuplex, duplexKey) {
      return options2.highWaterMark != null ? options2.highWaterMark : isDuplex ? options2[duplexKey] : null;
    }
    function getHighWaterMark(state2, options2, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options2, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state2.objectMode ? 16 : 16 * 1024;
    }
    state = {
      getHighWaterMark
    };
    return state;
  }
  var browser;
  var hasRequiredBrowser;
  requireBrowser = function() {
    if (hasRequiredBrowser) return browser;
    hasRequiredBrowser = 1;
    browser = deprecate;
    function deprecate(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name) {
      try {
        if (!commonjsGlobal.localStorage) return false;
      } catch (_) {
        return false;
      }
      var val = commonjsGlobal.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === "true";
    }
    return browser;
  };
  var _stream_writable;
  var hasRequired_stream_writable;
  function require_stream_writable() {
    if (hasRequired_stream_writable) return _stream_writable;
    hasRequired_stream_writable = 1;
    _stream_writable = Writable;
    function CorkedRequest(state2) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state2);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: requireBrowser()
    };
    var Stream = requireStreamBrowser();
    var Buffer2 = requireDist$1().Buffer;
    var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = requireDestroy();
    var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    requireInherits_browser()(Writable, Stream);
    function nop() {
    }
    function WritableState(options2, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options2.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options2, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options2.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options2.emitClose !== false;
      this.autoDestroy = !!options2.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable(options2) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options2);
      this._writableState = new WritableState(options2, this, isDuplex);
      this.writable = true;
      if (options2) {
        if (typeof options2.write === "function") this._write = options2.write;
        if (typeof options2.writev === "function") this._writev = options2.writev;
        if (typeof options2.destroy === "function") this._destroy = options2.destroy;
        if (typeof options2.final === "function") this._final = options2.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process$1.nextTick(cb, er);
    }
    function validChunk(stream, state2, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state2.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer"
        ], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process$1.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding2, cb) {
      var state2 = this._writableState;
      var ret = false;
      var isBuf = !state2.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding2 === "function") {
        cb = encoding2;
        encoding2 = null;
      }
      if (isBuf) encoding2 = "buffer";
      else if (!encoding2) encoding2 = state2.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state2.ending) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state2, chunk, cb)) {
        state2.pendingcb++;
        ret = writeOrBuffer(this, state2, isBuf, chunk, encoding2, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state2 = this._writableState;
      if (state2.corked) {
        state2.corked--;
        if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) clearBuffer(this, state2);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding2) {
      if (typeof encoding2 === "string") encoding2 = encoding2.toLowerCase();
      if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((encoding2 + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding2);
      this._writableState.defaultEncoding = encoding2;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      enumerable: false,
      get: function get2() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state2, chunk, encoding2) {
      if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding2);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get2() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state2, isBuf, chunk, encoding2, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state2, chunk, encoding2);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding2 = "buffer";
          chunk = newChunk;
        }
      }
      var len = state2.objectMode ? 1 : chunk.length;
      state2.length += len;
      var ret = state2.length < state2.highWaterMark;
      if (!ret) state2.needDrain = true;
      if (state2.writing || state2.corked) {
        var last = state2.lastBufferedRequest;
        state2.lastBufferedRequest = {
          chunk,
          encoding: encoding2,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state2.lastBufferedRequest;
        } else {
          state2.bufferedRequest = state2.lastBufferedRequest;
        }
        state2.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state2, false, len, chunk, encoding2, cb);
      }
      return ret;
    }
    function doWrite(stream, state2, writev, len, chunk, encoding2, cb) {
      state2.writelen = len;
      state2.writecb = cb;
      state2.writing = true;
      state2.sync = true;
      if (state2.destroyed) state2.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev) stream._writev(chunk, state2.onwrite);
      else stream._write(chunk, encoding2, state2.onwrite);
      state2.sync = false;
    }
    function onwriteError(stream, state2, sync, er, cb) {
      --state2.pendingcb;
      if (sync) {
        process$1.nextTick(cb, er);
        process$1.nextTick(finishMaybe, stream, state2);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state2);
      }
    }
    function onwriteStateUpdate(state2) {
      state2.writing = false;
      state2.writecb = null;
      state2.length -= state2.writelen;
      state2.writelen = 0;
    }
    function onwrite(stream, er) {
      var state2 = stream._writableState;
      var sync = state2.sync;
      var cb = state2.writecb;
      if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state2);
      if (er) onwriteError(stream, state2, sync, er, cb);
      else {
        var finished = needFinish(state2) || stream.destroyed;
        if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
          clearBuffer(stream, state2);
        }
        if (sync) {
          process$1.nextTick(afterWrite, stream, state2, finished, cb);
        } else {
          afterWrite(stream, state2, finished, cb);
        }
      }
    }
    function afterWrite(stream, state2, finished, cb) {
      if (!finished) onwriteDrain(stream, state2);
      state2.pendingcb--;
      cb();
      finishMaybe(stream, state2);
    }
    function onwriteDrain(stream, state2) {
      if (state2.length === 0 && state2.needDrain) {
        state2.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state2) {
      state2.bufferProcessing = true;
      var entry = state2.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state2.bufferedRequestCount;
        var buffer2 = new Array(l);
        var holder = state2.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer2[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer2.allBuffers = allBuffers;
        doWrite(stream, state2, true, state2.length, buffer2, "", holder.finish);
        state2.pendingcb++;
        state2.lastBufferedRequest = null;
        if (holder.next) {
          state2.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state2.corkedRequestsFree = new CorkedRequest(state2);
        }
        state2.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding2 = entry.encoding;
          var cb = entry.callback;
          var len = state2.objectMode ? 1 : chunk.length;
          doWrite(stream, state2, false, len, chunk, encoding2, cb);
          entry = entry.next;
          state2.bufferedRequestCount--;
          if (state2.writing) {
            break;
          }
        }
        if (entry === null) state2.lastBufferedRequest = null;
      }
      state2.bufferedRequest = entry;
      state2.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding2, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding2, cb) {
      var state2 = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding2 = null;
      } else if (typeof encoding2 === "function") {
        cb = encoding2;
        encoding2 = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding2);
      if (state2.corked) {
        state2.corked = 1;
        this.uncork();
      }
      if (!state2.ending) endWritable(this, state2, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      enumerable: false,
      get: function get2() {
        return this._writableState.length;
      }
    });
    function needFinish(state2) {
      return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
    }
    function callFinal(stream, state2) {
      stream._final(function(err) {
        state2.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state2.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state2);
      });
    }
    function prefinish(stream, state2) {
      if (!state2.prefinished && !state2.finalCalled) {
        if (typeof stream._final === "function" && !state2.destroyed) {
          state2.pendingcb++;
          state2.finalCalled = true;
          process$1.nextTick(callFinal, stream, state2);
        } else {
          state2.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state2) {
      var need = needFinish(state2);
      if (need) {
        prefinish(stream, state2);
        if (state2.pendingcb === 0) {
          state2.finished = true;
          stream.emit("finish");
          if (state2.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state2, cb) {
      state2.ending = true;
      finishMaybe(stream, state2);
      if (cb) {
        if (state2.finished) process$1.nextTick(cb);
        else stream.once("finish", cb);
      }
      state2.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state2, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state2.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state2.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      enumerable: false,
      get: function get2() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    return _stream_writable;
  }
  var _stream_duplex;
  var hasRequired_stream_duplex;
  function require_stream_duplex() {
    if (hasRequired_stream_duplex) return _stream_duplex;
    hasRequired_stream_duplex = 1;
    var objectKeys2 = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) keys2.push(key);
      return keys2;
    };
    _stream_duplex = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    requireInherits_browser()(Duplex, Readable);
    {
      var keys = objectKeys2(Writable.prototype);
      for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    function Duplex(options2) {
      if (!(this instanceof Duplex)) return new Duplex(options2);
      Readable.call(this, options2);
      Writable.call(this, options2);
      this.allowHalfOpen = true;
      if (options2) {
        if (options2.readable === false) this.readable = false;
        if (options2.writable === false) this.writable = false;
        if (options2.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get2() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      enumerable: false,
      get: function get2() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      enumerable: false,
      get: function get2() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended) return;
      process$1.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      enumerable: false,
      get: function get2() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    return _stream_duplex;
  }
  var string_decoder = {};
  var safeBuffer = {
    exports: {}
  };
  var hasRequiredSafeBuffer;
  requireSafeBuffer = function() {
    if (hasRequiredSafeBuffer) return safeBuffer.exports;
    hasRequiredSafeBuffer = 1;
    (function(module, exports) {
      var buffer2 = requireDist$1();
      var Buffer2 = buffer2.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
        module.exports = buffer2;
      } else {
        copyProps(buffer2, exports);
        exports.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer2(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer2.prototype);
      copyProps(Buffer2, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer2(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding2) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer2(size);
        if (fill !== void 0) {
          if (typeof encoding2 === "string") {
            buf.fill(fill, encoding2);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer2(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer2.SlowBuffer(size);
      };
    })(safeBuffer, safeBuffer.exports);
    return safeBuffer.exports;
  };
  var hasRequiredString_decoder;
  requireString_decoder = function() {
    if (hasRequiredString_decoder) return string_decoder;
    hasRequiredString_decoder = 1;
    var Buffer2 = requireSafeBuffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding2) {
      encoding2 = "" + encoding2;
      switch (encoding2 && encoding2.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    string_decoder.StringDecoder = StringDecoder;
    function StringDecoder(encoding2) {
      this.encoding = normalizeEncoding(encoding2);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
    return string_decoder;
  };
  var endOfStream;
  var hasRequiredEndOfStream;
  function requireEndOfStream() {
    if (hasRequiredEndOfStream) return endOfStream;
    hasRequiredEndOfStream = 1;
    var ERR_STREAM_PREMATURE_CLOSE = requireErrorsBrowser().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function") return eos(stream, null, opts);
      if (!opts) opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false) stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    endOfStream = eos;
    return endOfStream;
  }
  var async_iterator;
  var hasRequiredAsync_iterator;
  function requireAsync_iterator() {
    if (hasRequiredAsync_iterator) return async_iterator;
    hasRequiredAsync_iterator = 1;
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input2, hint) {
      if (typeof input2 !== "object" || input2 === null) return input2;
      var prim = input2[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input2, hint);
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input2);
    }
    var finished = requireEndOfStream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve2 = iter[kLastResolve];
      if (resolve2 !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve2(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process$1.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve2, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve2(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve2, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve2, reject) {
            process$1.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve2(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve2, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve2(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve2, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve2(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve2;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve2 = iterator[kLastResolve];
        if (resolve2 !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve2(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    async_iterator = createReadableStreamAsyncIterator;
    return async_iterator;
  }
  var fromBrowser;
  var hasRequiredFromBrowser;
  function requireFromBrowser() {
    if (hasRequiredFromBrowser) return fromBrowser;
    hasRequiredFromBrowser = 1;
    fromBrowser = function() {
      throw new Error("Readable.from is not available in the browser");
    };
    return fromBrowser;
  }
  var _stream_readable;
  var hasRequired_stream_readable;
  function require_stream_readable() {
    if (hasRequired_stream_readable) return _stream_readable;
    hasRequired_stream_readable = 1;
    _stream_readable = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    requireEvents().EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type2) {
      return emitter.listeners(type2).length;
    };
    var Stream = requireStreamBrowser();
    var Buffer2 = requireDist$1().Buffer;
    var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = requireUtil$2();
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = requireBuffer_list();
    var destroyImpl = requireDestroy();
    var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    requireInherits_browser()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [
        fn,
        emitter._events[event]
      ];
    }
    function ReadableState(options2, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options2.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options2, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options2.emitClose !== false;
      this.autoDestroy = !!options2.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options2.encoding) {
        if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
        this.decoder = new StringDecoder(options2.encoding);
        this.encoding = options2.encoding;
      }
    }
    function Readable(options2) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options2);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options2, this, isDuplex);
      this.readable = true;
      if (options2) {
        if (typeof options2.read === "function") this._read = options2.read;
        if (typeof options2.destroy === "function") this._destroy = options2.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      enumerable: false,
      get: function get2() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding2) {
      var state2 = this._readableState;
      var skipChunkCheck;
      if (!state2.objectMode) {
        if (typeof chunk === "string") {
          encoding2 = encoding2 || state2.defaultEncoding;
          if (encoding2 !== state2.encoding) {
            chunk = Buffer2.from(chunk, encoding2);
            encoding2 = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding2, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding2, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state2 = stream._readableState;
      if (chunk === null) {
        state2.reading = false;
        onEofChunk(stream, state2);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state2, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state2.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state2.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else addChunk(stream, state2, chunk, true);
          } else if (state2.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state2.destroyed) {
            return false;
          } else {
            state2.reading = false;
            if (state2.decoder && !encoding2) {
              chunk = state2.decoder.write(chunk);
              if (state2.objectMode || chunk.length !== 0) addChunk(stream, state2, chunk, false);
              else maybeReadMore(stream, state2);
            } else {
              addChunk(stream, state2, chunk, false);
            }
          }
        } else if (!addToFront) {
          state2.reading = false;
          maybeReadMore(stream, state2);
        }
      }
      return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
    }
    function addChunk(stream, state2, chunk, addToFront) {
      if (state2.flowing && state2.length === 0 && !state2.sync) {
        state2.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state2.length += state2.objectMode ? 1 : chunk.length;
        if (addToFront) state2.buffer.unshift(chunk);
        else state2.buffer.push(chunk);
        if (state2.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state2);
    }
    function chunkInvalid(state2, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer",
          "Uint8Array"
        ], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "") this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state2) {
      if (n <= 0 || state2.length === 0 && state2.ended) return 0;
      if (state2.objectMode) return 1;
      if (n !== n) {
        if (state2.flowing && state2.length) return state2.buffer.head.data.length;
        else return state2.length;
      }
      if (n > state2.highWaterMark) state2.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state2.length) return n;
      if (!state2.ended) {
        state2.needReadable = true;
        return 0;
      }
      return state2.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state2 = this._readableState;
      var nOrig = n;
      if (n !== 0) state2.emittedReadable = false;
      if (n === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
        debug("read: emitReadable", state2.length, state2.ended);
        if (state2.length === 0 && state2.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state2);
      if (n === 0 && state2.ended) {
        if (state2.length === 0) endReadable(this);
        return null;
      }
      var doRead = state2.needReadable;
      debug("need readable", doRead);
      if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state2.ended || state2.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state2.reading = true;
        state2.sync = true;
        if (state2.length === 0) state2.needReadable = true;
        this._read(state2.highWaterMark);
        state2.sync = false;
        if (!state2.reading) n = howMuchToRead(nOrig, state2);
      }
      var ret;
      if (n > 0) ret = fromList(n, state2);
      else ret = null;
      if (ret === null) {
        state2.needReadable = state2.length <= state2.highWaterMark;
        n = 0;
      } else {
        state2.length -= n;
        state2.awaitDrain = 0;
      }
      if (state2.length === 0) {
        if (!state2.ended) state2.needReadable = true;
        if (nOrig !== n && state2.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state2) {
      debug("onEofChunk");
      if (state2.ended) return;
      if (state2.decoder) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length) {
          state2.buffer.push(chunk);
          state2.length += state2.objectMode ? 1 : chunk.length;
        }
      }
      state2.ended = true;
      if (state2.sync) {
        emitReadable(stream);
      } else {
        state2.needReadable = false;
        if (!state2.emittedReadable) {
          state2.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state2 = stream._readableState;
      debug("emitReadable", state2.needReadable, state2.emittedReadable);
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        debug("emitReadable", state2.flowing);
        state2.emittedReadable = true;
        process$1.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state2 = stream._readableState;
      debug("emitReadable_", state2.destroyed, state2.length, state2.ended);
      if (!state2.destroyed && (state2.length || state2.ended)) {
        stream.emit("readable");
        state2.emittedReadable = false;
      }
      state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state2) {
      if (!state2.readingMore) {
        state2.readingMore = true;
        process$1.nextTick(maybeReadMore_, stream, state2);
      }
    }
    function maybeReadMore_(stream, state2) {
      while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
        var len = state2.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state2.length) break;
      }
      state2.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state2 = this._readableState;
      switch (state2.pipesCount) {
        case 0:
          state2.pipes = dest;
          break;
        case 1:
          state2.pipes = [
            state2.pipes,
            dest
          ];
          break;
        default:
          state2.pipes.push(dest);
          break;
      }
      state2.pipesCount += 1;
      debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state2.endEmitted) process$1.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state2.awaitDrain);
            state2.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state2.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state2 = src._readableState;
        debug("pipeOnDrain", state2.awaitDrain);
        if (state2.awaitDrain) state2.awaitDrain--;
        if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state2.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state2 = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state2.pipesCount === 0) return this;
      if (state2.pipesCount === 1) {
        if (dest && dest !== state2.pipes) return this;
        if (!dest) dest = state2.pipes;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state2.pipes;
        var len = state2.pipesCount;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var index = indexOf(state2.pipes, dest);
      if (index === -1) return this;
      state2.pipes.splice(index, 1);
      state2.pipesCount -= 1;
      if (state2.pipesCount === 1) state2.pipes = state2.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state2 = this._readableState;
      if (ev === "data") {
        state2.readableListening = this.listenerCount("readable") > 0;
        if (state2.flowing !== false) this.resume();
      } else if (ev === "readable") {
        if (!state2.endEmitted && !state2.readableListening) {
          state2.readableListening = state2.needReadable = true;
          state2.flowing = false;
          state2.emittedReadable = false;
          debug("on readable", state2.length, state2.reading);
          if (state2.length) {
            emitReadable(this);
          } else if (!state2.reading) {
            process$1.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process$1.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process$1.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state2 = self2._readableState;
      state2.readableListening = self2.listenerCount("readable") > 0;
      if (state2.resumeScheduled && !state2.paused) {
        state2.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state2 = this._readableState;
      if (!state2.flowing) {
        debug("resume");
        state2.flowing = !state2.readableListening;
        resume(this, state2);
      }
      state2.paused = false;
      return this;
    };
    function resume(stream, state2) {
      if (!state2.resumeScheduled) {
        state2.resumeScheduled = true;
        process$1.nextTick(resume_, stream, state2);
      }
    }
    function resume_(stream, state2) {
      debug("resume", state2.reading);
      if (!state2.reading) {
        stream.read(0);
      }
      state2.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state2.flowing && !state2.reading) stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state2 = stream._readableState;
      debug("flow", state2.flowing);
      while (state2.flowing && stream.read() !== null) ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state2 = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state2.decoder && !state2.ended) {
          var chunk = state2.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state2.decoder) chunk = state2.decoder.write(chunk);
        if (state2.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state2.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = /* @__PURE__ */ function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = requireAsync_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function get2() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      enumerable: false,
      get: function get2() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      enumerable: false,
      get: function get2() {
        return this._readableState.flowing;
      },
      set: function set(state2) {
        if (this._readableState) {
          this._readableState.flowing = state2;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      enumerable: false,
      get: function get2() {
        return this._readableState.length;
      }
    });
    function fromList(n, state2) {
      if (state2.length === 0) return null;
      var ret;
      if (state2.objectMode) ret = state2.buffer.shift();
      else if (!n || n >= state2.length) {
        if (state2.decoder) ret = state2.buffer.join("");
        else if (state2.buffer.length === 1) ret = state2.buffer.first();
        else ret = state2.buffer.concat(state2.length);
        state2.buffer.clear();
      } else {
        ret = state2.buffer.consume(n, state2.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state2 = stream._readableState;
      debug("endReadable", state2.endEmitted);
      if (!state2.endEmitted) {
        state2.ended = true;
        process$1.nextTick(endReadableNT, state2, stream);
      }
    }
    function endReadableNT(state2, stream) {
      debug("endReadableNT", state2.endEmitted, state2.length);
      if (!state2.endEmitted && state2.length === 0) {
        state2.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state2.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = requireFromBrowser();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
    return _stream_readable;
  }
  var _stream_transform;
  var hasRequired_stream_transform;
  function require_stream_transform() {
    if (hasRequired_stream_transform) return _stream_transform;
    hasRequired_stream_transform = 1;
    _stream_transform = Transform;
    var _require$codes = requireErrorsBrowser().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    requireInherits_browser()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null) this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options2) {
      if (!(this instanceof Transform)) return new Transform(options2);
      Duplex.call(this, options2);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options2) {
        if (typeof options2.transform === "function") this._transform = options2.transform;
        if (typeof options2.flush === "function") this._flush = options2.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding2) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding2);
    };
    Transform.prototype._transform = function(chunk, encoding2, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding2, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding2;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null) stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
    return _stream_transform;
  }
  var _stream_passthrough;
  var hasRequired_stream_passthrough;
  function require_stream_passthrough() {
    if (hasRequired_stream_passthrough) return _stream_passthrough;
    hasRequired_stream_passthrough = 1;
    _stream_passthrough = PassThrough;
    var Transform = require_stream_transform();
    requireInherits_browser()(PassThrough, Transform);
    function PassThrough(options2) {
      if (!(this instanceof PassThrough)) return new PassThrough(options2);
      Transform.call(this, options2);
    }
    PassThrough.prototype._transform = function(chunk, encoding2, cb) {
      cb(null, chunk);
    };
    return _stream_passthrough;
  }
  var pipeline_1;
  var hasRequiredPipeline;
  function requirePipeline() {
    if (hasRequiredPipeline) return pipeline_1;
    hasRequiredPipeline = 1;
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = requireErrorsBrowser().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err) throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0) eos = requireEndOfStream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== "function") return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error) error = err;
          if (err) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    pipeline_1 = pipeline;
    return pipeline_1;
  }
  var streamBrowserify;
  var hasRequiredStreamBrowserify;
  requireStreamBrowserify = function() {
    if (hasRequiredStreamBrowserify) return streamBrowserify;
    hasRequiredStreamBrowserify = 1;
    streamBrowserify = Stream;
    var EE = requireEvents().EventEmitter;
    var inherits = requireInherits_browser();
    inherits(Stream, EE);
    Stream.Readable = require_stream_readable();
    Stream.Writable = require_stream_writable();
    Stream.Duplex = require_stream_duplex();
    Stream.Transform = require_stream_transform();
    Stream.PassThrough = require_stream_passthrough();
    Stream.finished = requireEndOfStream();
    Stream.pipeline = requirePipeline();
    Stream.Stream = Stream;
    function Stream() {
      EE.call(this);
    }
    Stream.prototype.pipe = function(dest, options2) {
      var source = this;
      function ondata(chunk) {
        if (dest.writable) {
          if (false === dest.write(chunk) && source.pause) {
            source.pause();
          }
        }
      }
      source.on("data", ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on("drain", ondrain);
      if (!dest._isStdio && (!options2 || options2.end !== false)) {
        source.on("end", onend);
        source.on("close", onclose);
      }
      var didOnEnd = false;
      function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
        if (typeof dest.destroy === "function") dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, "error") === 0) {
          throw er;
        }
      }
      source.on("error", onerror);
      dest.on("error", onerror);
      function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
      }
      source.on("end", cleanup);
      source.on("close", cleanup);
      dest.on("close", cleanup);
      dest.emit("pipe", source);
      return dest;
    };
    return streamBrowserify;
  };
  var FileHandle = {};
  var util$1 = {};
  var constants = {};
  var hasRequiredConstants;
  function requireConstants() {
    if (hasRequiredConstants) return constants;
    hasRequiredConstants = 1;
    Object.defineProperty(constants, "__esModule", {
      value: true
    });
    constants.FLAGS = constants.ERRSTR = void 0;
    const constants_1 = requireConstants$1();
    constants.ERRSTR = {
      PATH_STR: "path must be a string, Buffer, or Uint8Array",
      FD: "fd must be a file descriptor",
      MODE_INT: "mode must be an int",
      CB: "callback must be a function",
      UID: "uid must be an unsigned int",
      GID: "gid must be an unsigned int",
      LEN: "len must be an integer",
      ATIME: "atime must be an integer",
      MTIME: "mtime must be an integer",
      PREFIX: "filename prefix is required",
      BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
      OFFSET: "offset must be an integer",
      LENGTH: "length must be an integer",
      POSITION: "position must be an integer"
    };
    const { O_RDONLY, O_WRONLY, O_RDWR, O_CREAT, O_EXCL, O_TRUNC, O_APPEND, O_SYNC } = constants_1.constants;
    var FLAGS;
    (function(FLAGS2) {
      FLAGS2[FLAGS2["r"] = O_RDONLY] = "r";
      FLAGS2[FLAGS2["r+"] = O_RDWR] = "r+";
      FLAGS2[FLAGS2["rs"] = O_RDONLY | O_SYNC] = "rs";
      FLAGS2[FLAGS2["sr"] = FLAGS2.rs] = "sr";
      FLAGS2[FLAGS2["rs+"] = O_RDWR | O_SYNC] = "rs+";
      FLAGS2[FLAGS2["sr+"] = FLAGS2["rs+"]] = "sr+";
      FLAGS2[FLAGS2["w"] = O_WRONLY | O_CREAT | O_TRUNC] = "w";
      FLAGS2[FLAGS2["wx"] = O_WRONLY | O_CREAT | O_TRUNC | O_EXCL] = "wx";
      FLAGS2[FLAGS2["xw"] = FLAGS2.wx] = "xw";
      FLAGS2[FLAGS2["w+"] = O_RDWR | O_CREAT | O_TRUNC] = "w+";
      FLAGS2[FLAGS2["wx+"] = O_RDWR | O_CREAT | O_TRUNC | O_EXCL] = "wx+";
      FLAGS2[FLAGS2["xw+"] = FLAGS2["wx+"]] = "xw+";
      FLAGS2[FLAGS2["a"] = O_WRONLY | O_APPEND | O_CREAT] = "a";
      FLAGS2[FLAGS2["ax"] = O_WRONLY | O_APPEND | O_CREAT | O_EXCL] = "ax";
      FLAGS2[FLAGS2["xa"] = FLAGS2.ax] = "xa";
      FLAGS2[FLAGS2["a+"] = O_RDWR | O_APPEND | O_CREAT] = "a+";
      FLAGS2[FLAGS2["ax+"] = O_RDWR | O_APPEND | O_CREAT | O_EXCL] = "ax+";
      FLAGS2[FLAGS2["xa+"] = FLAGS2["ax+"]] = "xa+";
    })(FLAGS || (constants.FLAGS = FLAGS = {}));
    return constants;
  }
  var hasRequiredUtil$1;
  function requireUtil$1() {
    if (hasRequiredUtil$1) return util$1;
    hasRequiredUtil$1 = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.unixify = exports.getWriteSyncArgs = exports.getWriteArgs = exports.bufToUint8 = exports.isWin = void 0;
      exports.promisify = promisify;
      exports.validateCallback = validateCallback;
      exports.modeToNumber = modeToNumber;
      exports.nullCheck = nullCheck;
      exports.pathToFilename = pathToFilename;
      exports.createError = createError;
      exports.genRndStr6 = genRndStr6;
      exports.flagsToNumber = flagsToNumber;
      exports.isFd = isFd;
      exports.validateFd = validateFd;
      exports.streamToBuffer = streamToBuffer;
      exports.dataToBuffer = dataToBuffer;
      exports.bufferToEncoding = bufferToEncoding;
      exports.isReadableStream = isReadableStream;
      const constants_1 = requireConstants();
      const errors2 = requireErrors();
      const buffer_1 = requireBuffer();
      const encoding_1 = requireEncoding();
      const buffer_2 = requireBuffer();
      const queueMicrotask_1 = requireQueueMicrotask();
      exports.isWin = process$1.platform === "win32";
      function promisify(fs, fn, getResult = (input2) => input2) {
        return (...args) => new Promise((resolve2, reject) => {
          fs[fn].bind(fs)(...args, (error, result2) => {
            if (error) return reject(error);
            return resolve2(getResult(result2));
          });
        });
      }
      function validateCallback(callback) {
        if (typeof callback !== "function") throw TypeError(constants_1.ERRSTR.CB);
        return callback;
      }
      function _modeToNumber(mode, def) {
        if (typeof mode === "number") return mode;
        if (typeof mode === "string") return parseInt(mode, 8);
        if (def) return modeToNumber(def);
        return void 0;
      }
      function modeToNumber(mode, def) {
        const result2 = _modeToNumber(mode, def);
        if (typeof result2 !== "number" || isNaN(result2)) throw new TypeError(constants_1.ERRSTR.MODE_INT);
        return result2;
      }
      function nullCheck(path2, callback) {
        if (("" + path2).indexOf("\0") !== -1) {
          const er = new Error("Path must be a string without null bytes");
          er.code = "ENOENT";
          if (typeof callback !== "function") throw er;
          (0, queueMicrotask_1.default)(() => {
            callback(er);
          });
          return false;
        }
        return true;
      }
      function getPathFromURLPosix2(url2) {
        if (url2.hostname !== "") {
          throw new errors2.TypeError("ERR_INVALID_FILE_URL_HOST", process$1.platform);
        }
        const pathname = url2.pathname;
        for (let n = 0; n < pathname.length; n++) {
          if (pathname[n] === "%") {
            const third = pathname.codePointAt(n + 2) | 32;
            if (pathname[n + 1] === "2" && third === 102) {
              throw new errors2.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
            }
          }
        }
        return decodeURIComponent(pathname);
      }
      function pathToFilename(path2) {
        if (path2 instanceof Uint8Array) {
          path2 = (0, buffer_2.bufferFrom)(path2);
        }
        if (typeof path2 !== "string" && !buffer_1.Buffer.isBuffer(path2)) {
          try {
            if (!(path2 instanceof require$$2.URL)) throw new TypeError(constants_1.ERRSTR.PATH_STR);
          } catch (err) {
            throw new TypeError(constants_1.ERRSTR.PATH_STR);
          }
          path2 = getPathFromURLPosix2(path2);
        }
        const pathString = String(path2);
        nullCheck(pathString);
        return pathString;
      }
      const ENOENT = "ENOENT";
      const EBADF = "EBADF";
      const EINVAL = "EINVAL";
      const EPERM = "EPERM";
      const EPROTO = "EPROTO";
      const EEXIST = "EEXIST";
      const ENOTDIR = "ENOTDIR";
      const EMFILE = "EMFILE";
      const EACCES = "EACCES";
      const EISDIR = "EISDIR";
      const ENOTEMPTY = "ENOTEMPTY";
      const ENOSYS = "ENOSYS";
      const ERR_FS_EISDIR = "ERR_FS_EISDIR";
      const ERR_OUT_OF_RANGE = "ERR_OUT_OF_RANGE";
      function formatError(errorCode, func = "", path2 = "", path22 = "") {
        let pathFormatted = "";
        if (path2) pathFormatted = ` '${path2}'`;
        if (path22) pathFormatted += ` -> '${path22}'`;
        switch (errorCode) {
          case ENOENT:
            return `ENOENT: no such file or directory, ${func}${pathFormatted}`;
          case EBADF:
            return `EBADF: bad file descriptor, ${func}${pathFormatted}`;
          case EINVAL:
            return `EINVAL: invalid argument, ${func}${pathFormatted}`;
          case EPERM:
            return `EPERM: operation not permitted, ${func}${pathFormatted}`;
          case EPROTO:
            return `EPROTO: protocol error, ${func}${pathFormatted}`;
          case EEXIST:
            return `EEXIST: file already exists, ${func}${pathFormatted}`;
          case ENOTDIR:
            return `ENOTDIR: not a directory, ${func}${pathFormatted}`;
          case EISDIR:
            return `EISDIR: illegal operation on a directory, ${func}${pathFormatted}`;
          case EACCES:
            return `EACCES: permission denied, ${func}${pathFormatted}`;
          case ENOTEMPTY:
            return `ENOTEMPTY: directory not empty, ${func}${pathFormatted}`;
          case EMFILE:
            return `EMFILE: too many open files, ${func}${pathFormatted}`;
          case ENOSYS:
            return `ENOSYS: function not implemented, ${func}${pathFormatted}`;
          case ERR_FS_EISDIR:
            return `[ERR_FS_EISDIR]: Path is a directory: ${func} returned EISDIR (is a directory) ${path2}`;
          case ERR_OUT_OF_RANGE:
            return `[ERR_OUT_OF_RANGE]: value out of range, ${func}${pathFormatted}`;
          default:
            return `${errorCode}: error occurred, ${func}${pathFormatted}`;
        }
      }
      function createError(errorCode, func = "", path2 = "", path22 = "", Constructor = Error) {
        const error = new Constructor(formatError(errorCode, func, path2, path22));
        error.code = errorCode;
        if (path2) {
          error.path = path2;
        }
        return error;
      }
      function genRndStr6() {
        const str = (Math.random() + 1).toString(36).substring(2, 8);
        if (str.length === 6) return str;
        else return genRndStr6();
      }
      function flagsToNumber(flags) {
        if (typeof flags === "number") return flags;
        if (typeof flags === "string") {
          const flagsNum = constants_1.FLAGS[flags];
          if (typeof flagsNum !== "undefined") return flagsNum;
        }
        throw new errors2.TypeError("ERR_INVALID_OPT_VALUE", "flags", flags);
      }
      function isFd(path2) {
        return path2 >>> 0 === path2;
      }
      function validateFd(fd) {
        if (!isFd(fd)) throw TypeError(constants_1.ERRSTR.FD);
      }
      function streamToBuffer(stream) {
        const chunks = [];
        return new Promise((resolve2, reject) => {
          stream.on("data", (chunk) => chunks.push(chunk));
          stream.on("end", () => resolve2(buffer_1.Buffer.concat(chunks)));
          stream.on("error", reject);
        });
      }
      function dataToBuffer(data, encoding2 = encoding_1.ENCODING_UTF8) {
        if (buffer_1.Buffer.isBuffer(data)) return data;
        else if (data instanceof Uint8Array) return (0, buffer_2.bufferFrom)(data);
        else return (0, buffer_2.bufferFrom)(String(data), encoding2);
      }
      const bufToUint8 = (buf) => new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      exports.bufToUint8 = bufToUint8;
      const getWriteArgs = (fd, a, b, c, d, e) => {
        validateFd(fd);
        let offset = 0;
        let length;
        let position = null;
        let encoding2;
        let callback;
        const tipa = typeof a;
        const tipb = typeof b;
        const tipc = typeof c;
        const tipd = typeof d;
        if (tipa !== "string") {
          if (tipb === "function") {
            callback = b;
          } else if (tipc === "function") {
            offset = b | 0;
            callback = c;
          } else if (tipd === "function") {
            offset = b | 0;
            length = c;
            callback = d;
          } else {
            offset = b | 0;
            length = c;
            position = d;
            callback = e;
          }
        } else {
          if (tipb === "function") {
            callback = b;
          } else if (tipc === "function") {
            position = b;
            callback = c;
          } else if (tipd === "function") {
            position = b;
            encoding2 = c;
            callback = d;
          }
        }
        const buf = dataToBuffer(a, encoding2);
        if (tipa !== "string") {
          if (typeof length === "undefined") length = buf.length;
        } else {
          offset = 0;
          length = buf.length;
        }
        const cb = validateCallback(callback);
        return [
          fd,
          tipa === "string",
          buf,
          offset,
          length,
          position,
          cb
        ];
      };
      exports.getWriteArgs = getWriteArgs;
      const getWriteSyncArgs = (fd, a, b, c, d) => {
        validateFd(fd);
        let encoding2;
        let offset;
        let length;
        let position;
        const isBuffer = typeof a !== "string";
        if (isBuffer) {
          offset = (b || 0) | 0;
          length = c;
          position = d;
        } else {
          position = b;
          encoding2 = c;
        }
        const buf = dataToBuffer(a, encoding2);
        if (isBuffer) {
          if (typeof length === "undefined") {
            length = buf.length;
          }
        } else {
          offset = 0;
          length = buf.length;
        }
        return [
          fd,
          buf,
          offset || 0,
          length,
          position
        ];
      };
      exports.getWriteSyncArgs = getWriteSyncArgs;
      function bufferToEncoding(buffer2, encoding2) {
        if (!encoding2 || encoding2 === "buffer") return buffer2;
        else return buffer2.toString(encoding2);
      }
      function isReadableStream(stream) {
        return stream !== null && typeof stream === "object" && typeof stream.pipe === "function" && typeof stream.on === "function" && stream.readable === true;
      }
      const isSeparator = (str, i) => {
        let char = str[i];
        return i > 0 && (char === "/" || exports.isWin && char === "\\");
      };
      const removeTrailingSeparator = (str) => {
        let i = str.length - 1;
        if (i < 2) return str;
        while (isSeparator(str, i)) i--;
        return str.substr(0, i + 1);
      };
      const normalizePath = (str, stripTrailing) => {
        if (typeof str !== "string") throw new TypeError("expected a string");
        str = str.replace(/[\\\/]+/g, "/");
        if (stripTrailing !== false) str = removeTrailingSeparator(str);
        return str;
      };
      const unixify = (filepath, stripTrailing = true) => {
        if (exports.isWin) {
          filepath = normalizePath(filepath, stripTrailing);
          return filepath.replace(/^([a-zA-Z]+:|\.\/)/, "");
        }
        return filepath;
      };
      exports.unixify = unixify;
    })(util$1);
    return util$1;
  }
  var hasRequiredFileHandle;
  function requireFileHandle() {
    if (hasRequiredFileHandle) return FileHandle;
    hasRequiredFileHandle = 1;
    Object.defineProperty(FileHandle, "__esModule", {
      value: true
    });
    FileHandle.FileHandle = void 0;
    const util_1 = requireUtil$1();
    let FileHandle$1 = class FileHandle {
      constructor(fs, fd) {
        this.fs = fs;
        this.fd = fd;
      }
      appendFile(data, options2) {
        return (0, util_1.promisify)(this.fs, "appendFile")(this.fd, data, options2);
      }
      chmod(mode) {
        return (0, util_1.promisify)(this.fs, "fchmod")(this.fd, mode);
      }
      chown(uid, gid) {
        return (0, util_1.promisify)(this.fs, "fchown")(this.fd, uid, gid);
      }
      close() {
        return (0, util_1.promisify)(this.fs, "close")(this.fd);
      }
      datasync() {
        return (0, util_1.promisify)(this.fs, "fdatasync")(this.fd);
      }
      createReadStream(options2) {
        return this.fs.createReadStream("", Object.assign(Object.assign({}, options2), {
          fd: this
        }));
      }
      createWriteStream(options2) {
        return this.fs.createWriteStream("", Object.assign(Object.assign({}, options2), {
          fd: this
        }));
      }
      readableWebStream(options2) {
        return new ReadableStream({
          pull: async (controller) => {
            const data = await this.readFile();
            controller.enqueue(data);
            controller.close();
          }
        });
      }
      read(buffer2, offset, length, position) {
        return (0, util_1.promisify)(this.fs, "read", (bytesRead) => ({
          bytesRead,
          buffer: buffer2
        }))(this.fd, buffer2, offset, length, position);
      }
      readv(buffers, position) {
        return (0, util_1.promisify)(this.fs, "readv", (bytesRead) => ({
          bytesRead,
          buffers
        }))(this.fd, buffers, position);
      }
      readFile(options2) {
        return (0, util_1.promisify)(this.fs, "readFile")(this.fd, options2);
      }
      stat(options2) {
        return (0, util_1.promisify)(this.fs, "fstat")(this.fd, options2);
      }
      sync() {
        return (0, util_1.promisify)(this.fs, "fsync")(this.fd);
      }
      truncate(len) {
        return (0, util_1.promisify)(this.fs, "ftruncate")(this.fd, len);
      }
      utimes(atime, mtime) {
        return (0, util_1.promisify)(this.fs, "futimes")(this.fd, atime, mtime);
      }
      write(buffer2, offset, length, position) {
        return (0, util_1.promisify)(this.fs, "write", (bytesWritten) => ({
          bytesWritten,
          buffer: buffer2
        }))(this.fd, buffer2, offset, length, position);
      }
      writev(buffers, position) {
        return (0, util_1.promisify)(this.fs, "writev", (bytesWritten) => ({
          bytesWritten,
          buffers
        }))(this.fd, buffers, position);
      }
      writeFile(data, options2) {
        return (0, util_1.promisify)(this.fs, "writeFile")(this.fd, data, options2);
      }
    };
    FileHandle.FileHandle = FileHandle$1;
    return FileHandle;
  }
  var FsPromises = {};
  var hasRequiredFsPromises;
  function requireFsPromises() {
    if (hasRequiredFsPromises) return FsPromises;
    hasRequiredFsPromises = 1;
    Object.defineProperty(FsPromises, "__esModule", {
      value: true
    });
    FsPromises.FsPromises = void 0;
    const util_1 = requireUtil$1();
    const constants_1 = requireConstants$1();
    let FsPromises$1 = class FsPromises {
      constructor(fs, FileHandle2) {
        this.fs = fs;
        this.FileHandle = FileHandle2;
        this.constants = constants_1.constants;
        this.cp = (0, util_1.promisify)(this.fs, "cp");
        this.opendir = (0, util_1.promisify)(this.fs, "opendir");
        this.statfs = (0, util_1.promisify)(this.fs, "statfs");
        this.lutimes = (0, util_1.promisify)(this.fs, "lutimes");
        this.access = (0, util_1.promisify)(this.fs, "access");
        this.chmod = (0, util_1.promisify)(this.fs, "chmod");
        this.chown = (0, util_1.promisify)(this.fs, "chown");
        this.copyFile = (0, util_1.promisify)(this.fs, "copyFile");
        this.lchmod = (0, util_1.promisify)(this.fs, "lchmod");
        this.lchown = (0, util_1.promisify)(this.fs, "lchown");
        this.link = (0, util_1.promisify)(this.fs, "link");
        this.lstat = (0, util_1.promisify)(this.fs, "lstat");
        this.mkdir = (0, util_1.promisify)(this.fs, "mkdir");
        this.mkdtemp = (0, util_1.promisify)(this.fs, "mkdtemp");
        this.readdir = (0, util_1.promisify)(this.fs, "readdir");
        this.readlink = (0, util_1.promisify)(this.fs, "readlink");
        this.realpath = (0, util_1.promisify)(this.fs, "realpath");
        this.rename = (0, util_1.promisify)(this.fs, "rename");
        this.rmdir = (0, util_1.promisify)(this.fs, "rmdir");
        this.rm = (0, util_1.promisify)(this.fs, "rm");
        this.stat = (0, util_1.promisify)(this.fs, "stat");
        this.symlink = (0, util_1.promisify)(this.fs, "symlink");
        this.truncate = (0, util_1.promisify)(this.fs, "truncate");
        this.unlink = (0, util_1.promisify)(this.fs, "unlink");
        this.utimes = (0, util_1.promisify)(this.fs, "utimes");
        this.readFile = (id, options2) => {
          return (0, util_1.promisify)(this.fs, "readFile")(id instanceof this.FileHandle ? id.fd : id, options2);
        };
        this.appendFile = (path2, data, options2) => {
          return (0, util_1.promisify)(this.fs, "appendFile")(path2 instanceof this.FileHandle ? path2.fd : path2, data, options2);
        };
        this.open = (path2, flags = "r", mode) => {
          return (0, util_1.promisify)(this.fs, "open", (fd) => new this.FileHandle(this.fs, fd))(path2, flags, mode);
        };
        this.writeFile = (id, data, options2) => {
          const dataPromise = (0, util_1.isReadableStream)(data) ? (0, util_1.streamToBuffer)(data) : Promise.resolve(data);
          return dataPromise.then((data2) => (0, util_1.promisify)(this.fs, "writeFile")(id instanceof this.FileHandle ? id.fd : id, data2, options2));
        };
        this.watch = () => {
          throw new Error("Not implemented");
        };
      }
    };
    FsPromises.FsPromises = FsPromises$1;
    return FsPromises;
  }
  var print = {};
  var lib = {};
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result2 = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result2 === void 0) continue;
        if (result2 === null || typeof result2 !== "object") throw new TypeError("Object expected");
        if (_ = accept(result2.get)) descriptor.get = _;
        if (_ = accept(result2.set)) descriptor.set = _;
        if (_ = accept(result2.init)) initializers.unshift(_);
      } else if (_ = accept(result2)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name
    });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result2) {
        result2.done ? resolve2(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([
          n,
          v
        ]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [
          op[0] & 2,
          t.value
        ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [
          6,
          e
        ];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
        enumerable: true,
        get: function() {
          return m[k];
        }
      };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  };
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([
              n,
              v,
              a,
              b
            ]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? {
          value: __await(o[n](v)),
          done: false
        } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve2, reject) {
          v = o[n](v), settle(resolve2, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve2, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve2({
          value: v2,
          done: d
        });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {
        value: raw
      });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function(o, v) {
    o["default"] = v;
  };
  var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o2) {
      var ar = [];
      for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result2 = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
    }
    __setModuleDefault(result2, mod);
    return result2;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
      default: mod
    };
  }
  function __classPrivateFieldGet(receiver, state2, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state2, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state2, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value,
        dispose,
        async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  }
  var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result2 = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result2).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path2, preserveJsx) {
    if (typeof path2 === "string" && /^\.\.?\//.test(path2)) {
      return path2.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path2;
  }
  const tslib_es6 = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
  };
  const tslib_es6$1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __addDisposableResource,
    get __assign() {
      return __assign;
    },
    __asyncDelegator,
    __asyncGenerator,
    __asyncValues,
    __await,
    __awaiter,
    __classPrivateFieldGet,
    __classPrivateFieldIn,
    __classPrivateFieldSet,
    __createBinding,
    __decorate,
    __disposeResources,
    __esDecorate,
    __exportStar,
    __extends,
    __generator,
    __importDefault,
    __importStar,
    __makeTemplateObject,
    __metadata,
    __param,
    __propKey,
    __read,
    __rest,
    __rewriteRelativeImportExtension,
    __runInitializers,
    __setFunctionName,
    __spread,
    __spreadArray,
    __spreadArrays,
    __values,
    default: tslib_es6
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const require$$0 = getAugmentedNamespace(tslib_es6$1);
  var printTree = {};
  var hasRequiredPrintTree;
  function requirePrintTree() {
    if (hasRequiredPrintTree) return printTree;
    hasRequiredPrintTree = 1;
    Object.defineProperty(printTree, "__esModule", {
      value: true
    });
    printTree.printTree = void 0;
    const printTree$1 = (tab = "", children) => {
      let str = "";
      let last = children.length - 1;
      for (; last >= 0; last--) if (children[last]) break;
      for (let i = 0; i <= last; i++) {
        const fn = children[i];
        if (!fn) continue;
        const isLast = i === last;
        const child = fn(tab + (isLast ? " " : "\u2502") + "  ");
        const branch = child ? isLast ? "\u2514\u2500" : "\u251C\u2500" : "\u2502";
        str += "\n" + tab + branch + (child ? " " + child : "");
      }
      return str;
    };
    printTree.printTree = printTree$1;
    return printTree;
  }
  var printBinary = {};
  var hasRequiredPrintBinary;
  function requirePrintBinary() {
    if (hasRequiredPrintBinary) return printBinary;
    hasRequiredPrintBinary = 1;
    Object.defineProperty(printBinary, "__esModule", {
      value: true
    });
    printBinary.printBinary = void 0;
    const printBinary$1 = (tab = "", children) => {
      const left = children[0], right = children[1];
      let str = "";
      if (left) str += "\n" + tab + "\u2190 " + left(tab + "  ");
      if (right) str += "\n" + tab + "\u2192 " + right(tab + "  ");
      return str;
    };
    printBinary.printBinary = printBinary$1;
    return printBinary;
  }
  var hasRequiredLib$1;
  function requireLib$1() {
    if (hasRequiredLib$1) return lib;
    hasRequiredLib$1 = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      const tslib_1 = require$$0;
      tslib_1.__exportStar(requirePrintTree(), exports);
      tslib_1.__exportStar(requirePrintBinary(), exports);
    })(lib);
    return lib;
  }
  var util = {};
  var hasRequiredUtil;
  function requireUtil() {
    if (hasRequiredUtil) return util;
    hasRequiredUtil = 1;
    Object.defineProperty(util, "__esModule", {
      value: true
    });
    util.newNotAllowedError = util.newTypeMismatchError = util.newNotFoundError = util.assertCanWrite = util.assertName = util.basename = util.ctx = void 0;
    const ctx = (partial = {}) => {
      return Object.assign({
        separator: "/",
        syncHandleAllowed: false,
        mode: "read"
      }, partial);
    };
    util.ctx = ctx;
    const basename = (path2, separator) => {
      if (path2[path2.length - 1] === separator) path2 = path2.slice(0, -1);
      const lastSlashIndex = path2.lastIndexOf(separator);
      return lastSlashIndex === -1 ? path2 : path2.slice(lastSlashIndex + 1);
    };
    util.basename = basename;
    const nameRegex = /^(\.{1,2})$|^(.*([\/\\]).*)$/;
    const assertName = (name, method, klass) => {
      const isInvalid = !name || nameRegex.test(name);
      if (isInvalid) throw new TypeError(`Failed to execute '${method}' on '${klass}': Name is not allowed.`);
    };
    util.assertName = assertName;
    const assertCanWrite = (mode) => {
      if (mode !== "readwrite") throw new DOMException("The request is not allowed by the user agent or the platform in the current context.", "NotAllowedError");
    };
    util.assertCanWrite = assertCanWrite;
    const newNotFoundError = () => new DOMException("A requested file or directory could not be found at the time an operation was processed.", "NotFoundError");
    util.newNotFoundError = newNotFoundError;
    const newTypeMismatchError = () => new DOMException("The path supplied exists, but was not an entry of requested type.", "TypeMismatchError");
    util.newTypeMismatchError = newTypeMismatchError;
    const newNotAllowedError = () => new DOMException("Permission not granted.", "NotAllowedError");
    util.newNotAllowedError = newNotAllowedError;
    return util;
  }
  var hasRequiredPrint;
  function requirePrint() {
    if (hasRequiredPrint) return print;
    hasRequiredPrint = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.toTreeSync = void 0;
      const tree_dump_1 = requireLib$1();
      const util_1 = requireUtil();
      const toTreeSync = (fs, opts = {}) => {
        var _a;
        const separator = opts.separator || "/";
        let dir = opts.dir || separator;
        if (dir[dir.length - 1] !== separator) dir += separator;
        const tab = opts.tab || "";
        const depth = (_a = opts.depth) !== null && _a !== void 0 ? _a : 10;
        let subtree = " (...)";
        if (depth > 0) {
          const list = fs.readdirSync(dir, {
            withFileTypes: true
          });
          subtree = (0, tree_dump_1.printTree)(tab, list.map((entry) => (tab2) => {
            if (entry.isDirectory()) {
              return (0, exports.toTreeSync)(fs, {
                dir: dir + entry.name,
                depth: depth - 1,
                tab: tab2
              });
            } else if (entry.isSymbolicLink()) {
              return "" + entry.name + " \u2192 " + fs.readlinkSync(dir + entry.name);
            } else {
              return "" + entry.name;
            }
          }));
        }
        const base = (0, util_1.basename)(dir, separator) + separator;
        return base + subtree;
      };
      exports.toTreeSync = toTreeSync;
    })(print);
    return print;
  }
  var options = {};
  var hasRequiredOptions;
  function requireOptions() {
    if (hasRequiredOptions) return options;
    hasRequiredOptions = 1;
    (function(exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getWriteFileOptions = exports.writeFileDefaults = exports.getRealpathOptsAndCb = exports.getRealpathOptions = exports.getStatOptsAndCb = exports.getStatOptions = exports.getAppendFileOptsAndCb = exports.getAppendFileOpts = exports.getOpendirOptsAndCb = exports.getOpendirOptions = exports.getReaddirOptsAndCb = exports.getReaddirOptions = exports.getReadFileOptions = exports.getRmOptsAndCb = exports.getRmdirOptions = exports.getDefaultOptsAndCb = exports.getDefaultOpts = exports.optsDefaults = exports.getMkdirOptions = void 0;
      exports.getOptions = getOptions;
      exports.optsGenerator = optsGenerator;
      exports.optsAndCbGenerator = optsAndCbGenerator;
      const constants_1 = requireConstants();
      const encoding_1 = requireEncoding();
      const util_1 = requireUtil$1();
      const mkdirDefaults = {
        mode: 511,
        recursive: false
      };
      const getMkdirOptions = (options2) => {
        if (typeof options2 === "number") return Object.assign({}, mkdirDefaults, {
          mode: options2
        });
        return Object.assign({}, mkdirDefaults, options2);
      };
      exports.getMkdirOptions = getMkdirOptions;
      const ERRSTR_OPTS = (tipeof) => `Expected options to be either an object or a string, but got ${tipeof} instead`;
      function getOptions(defaults, options2) {
        let opts;
        if (!options2) return defaults;
        else {
          const tipeof = typeof options2;
          switch (tipeof) {
            case "string":
              opts = Object.assign({}, defaults, {
                encoding: options2
              });
              break;
            case "object":
              opts = Object.assign({}, defaults, options2);
              break;
            default:
              throw TypeError(ERRSTR_OPTS(tipeof));
          }
        }
        if (opts.encoding !== "buffer") (0, encoding_1.assertEncoding)(opts.encoding);
        return opts;
      }
      function optsGenerator(defaults) {
        return (options2) => getOptions(defaults, options2);
      }
      function optsAndCbGenerator(getOpts) {
        return (options2, callback) => typeof options2 === "function" ? [
          getOpts(),
          options2
        ] : [
          getOpts(options2),
          (0, util_1.validateCallback)(callback)
        ];
      }
      exports.optsDefaults = {
        encoding: "utf8"
      };
      exports.getDefaultOpts = optsGenerator(exports.optsDefaults);
      exports.getDefaultOptsAndCb = optsAndCbGenerator(exports.getDefaultOpts);
      const rmdirDefaults = {
        recursive: false
      };
      const getRmdirOptions = (options2) => {
        return Object.assign({}, rmdirDefaults, options2);
      };
      exports.getRmdirOptions = getRmdirOptions;
      const getRmOpts = optsGenerator(exports.optsDefaults);
      exports.getRmOptsAndCb = optsAndCbGenerator(getRmOpts);
      const readFileOptsDefaults = {
        flag: "r"
      };
      exports.getReadFileOptions = optsGenerator(readFileOptsDefaults);
      const readdirDefaults = {
        encoding: "utf8",
        recursive: false,
        withFileTypes: false
      };
      exports.getReaddirOptions = optsGenerator(readdirDefaults);
      exports.getReaddirOptsAndCb = optsAndCbGenerator(exports.getReaddirOptions);
      const opendirDefaults = {
        encoding: "utf8",
        bufferSize: 32,
        recursive: false
      };
      exports.getOpendirOptions = optsGenerator(opendirDefaults);
      exports.getOpendirOptsAndCb = optsAndCbGenerator(exports.getOpendirOptions);
      const appendFileDefaults = {
        encoding: "utf8",
        mode: 438,
        flag: constants_1.FLAGS[constants_1.FLAGS.a]
      };
      exports.getAppendFileOpts = optsGenerator(appendFileDefaults);
      exports.getAppendFileOptsAndCb = optsAndCbGenerator(exports.getAppendFileOpts);
      const statDefaults = {
        bigint: false
      };
      const getStatOptions = (options2 = {}) => Object.assign({}, statDefaults, options2);
      exports.getStatOptions = getStatOptions;
      const getStatOptsAndCb = (options2, callback) => typeof options2 === "function" ? [
        (0, exports.getStatOptions)(),
        options2
      ] : [
        (0, exports.getStatOptions)(options2),
        (0, util_1.validateCallback)(callback)
      ];
      exports.getStatOptsAndCb = getStatOptsAndCb;
      const realpathDefaults = exports.optsDefaults;
      exports.getRealpathOptions = optsGenerator(realpathDefaults);
      exports.getRealpathOptsAndCb = optsAndCbGenerator(exports.getRealpathOptions);
      exports.writeFileDefaults = {
        encoding: "utf8",
        mode: 438,
        flag: constants_1.FLAGS[constants_1.FLAGS.w]
      };
      exports.getWriteFileOptions = optsGenerator(exports.writeFileDefaults);
    })(options);
    return options;
  }
  var Dir = {};
  var hasRequiredDir;
  function requireDir() {
    if (hasRequiredDir) return Dir;
    hasRequiredDir = 1;
    Object.defineProperty(Dir, "__esModule", {
      value: true
    });
    Dir.Dir = void 0;
    const util_1 = requireUtil$1();
    const Dirent_1 = requireDirent();
    let Dir$1 = class Dir {
      constructor(link, options2) {
        this.link = link;
        this.options = options2;
        this.iteratorInfo = [];
        this.path = link.getParentPath();
        this.iteratorInfo.push(link.children[Symbol.iterator]());
      }
      wrapAsync(method, args, callback) {
        (0, util_1.validateCallback)(callback);
        setImmediate(() => {
          let result2;
          try {
            result2 = method.apply(this, args);
          } catch (err) {
            callback(err);
            return;
          }
          callback(null, result2);
        });
      }
      isFunction(x) {
        return typeof x === "function";
      }
      promisify(obj, fn) {
        return (...args) => new Promise((resolve2, reject) => {
          if (this.isFunction(obj[fn])) {
            obj[fn].bind(obj)(...args, (error, result2) => {
              if (error) reject(error);
              resolve2(result2);
            });
          } else {
            reject("Not a function");
          }
        });
      }
      closeBase() {
      }
      readBase(iteratorInfo) {
        let done;
        let value;
        let name;
        let link;
        do {
          do {
            ({ done, value } = iteratorInfo[iteratorInfo.length - 1].next());
            if (!done) {
              [name, link] = value;
            } else {
              break;
            }
          } while (name === "." || name === "..");
          if (done) {
            iteratorInfo.pop();
            if (iteratorInfo.length === 0) {
              break;
            } else {
              done = false;
            }
          } else {
            if (this.options.recursive && link.children.size) {
              iteratorInfo.push(link.children[Symbol.iterator]());
            }
            return Dirent_1.default.build(link, this.options.encoding);
          }
        } while (!done);
        return null;
      }
      closeBaseAsync(callback) {
        this.wrapAsync(this.closeBase, [], callback);
      }
      close(callback) {
        if (typeof callback === "function") {
          this.closeBaseAsync(callback);
        } else {
          return this.promisify(this, "closeBaseAsync")();
        }
      }
      closeSync() {
        this.closeBase();
      }
      readBaseAsync(callback) {
        this.wrapAsync(this.readBase, [
          this.iteratorInfo
        ], callback);
      }
      read(callback) {
        if (typeof callback === "function") {
          this.readBaseAsync(callback);
        } else {
          return this.promisify(this, "readBaseAsync")();
        }
      }
      readSync() {
        return this.readBase(this.iteratorInfo);
      }
      [Symbol.asyncIterator]() {
        const iteratorInfo = [];
        const _this = this;
        iteratorInfo.push(_this.link.children[Symbol.iterator]());
        const o = {
          readBaseAsync(callback) {
            _this.wrapAsync(_this.readBase, [
              iteratorInfo
            ], callback);
          }
        };
        return {
          async next() {
            const dirEnt = await _this.promisify(o, "readBaseAsync")();
            if (dirEnt !== null) {
              return {
                done: false,
                value: dirEnt
              };
            } else {
              return {
                done: true,
                value: void 0
              };
            }
          },
          [Symbol.asyncIterator]() {
            throw new Error("Not implemented");
          }
        };
      }
    };
    Dir.Dir = Dir$1;
    return Dir;
  }
  var hasRequiredVolume;
  function requireVolume() {
    if (hasRequiredVolume) return volume;
    hasRequiredVolume = 1;
    Object.defineProperty(volume, "__esModule", {
      value: true
    });
    volume.FSWatcher = volume.StatWatcher = volume.Volume = void 0;
    volume.filenameToSteps = filenameToSteps;
    volume.pathToSteps = pathToSteps;
    volume.dataToStr = dataToStr;
    volume.toUnixTimestamp = toUnixTimestamp;
    const pathModule = requirePathBrowserify();
    const node_1 = requireNode();
    const Stats_1 = requireStats();
    const Dirent_1 = requireDirent();
    const buffer_1 = requireBuffer();
    const setImmediate_1 = requireSetImmediate();
    const queueMicrotask_1 = requireQueueMicrotask();
    const process_1 = requireProcess();
    const setTimeoutUnref_1 = requireSetTimeoutUnref();
    const stream_1 = requireStreamBrowserify();
    const constants_1 = requireConstants$1();
    const events_1 = requireEvents();
    const encoding_1 = requireEncoding();
    const FileHandle_1 = requireFileHandle();
    const util2 = requireUtil$2();
    const FsPromises_1 = requireFsPromises();
    const print_1 = requirePrint();
    const constants_2 = requireConstants();
    const options_1 = requireOptions();
    const util_1 = requireUtil$1();
    const Dir_1 = requireDir();
    const resolveCrossPlatform = pathModule.resolve;
    const { O_RDONLY, O_WRONLY, O_RDWR, O_CREAT, O_EXCL, O_TRUNC, O_APPEND, O_DIRECTORY, O_SYMLINK, F_OK, COPYFILE_EXCL, COPYFILE_FICLONE_FORCE } = constants_1.constants;
    const { sep, relative, join, dirname } = pathModule.posix ? pathModule.posix : pathModule;
    const kMinPoolSpace = 128;
    const EPERM = "EPERM";
    const ENOENT = "ENOENT";
    const EBADF = "EBADF";
    const EINVAL = "EINVAL";
    const EEXIST = "EEXIST";
    const ENOTDIR = "ENOTDIR";
    const EMFILE = "EMFILE";
    const EACCES = "EACCES";
    const EISDIR = "EISDIR";
    const ENOTEMPTY = "ENOTEMPTY";
    const ENOSYS = "ENOSYS";
    const ERR_FS_EISDIR = "ERR_FS_EISDIR";
    const ERR_OUT_OF_RANGE = "ERR_OUT_OF_RANGE";
    let resolve2 = (filename, base = process_1.default.cwd()) => resolveCrossPlatform(base, filename);
    if (util_1.isWin) {
      const _resolve = resolve2;
      resolve2 = (filename, base) => (0, util_1.unixify)(_resolve(filename, base));
    }
    function filenameToSteps(filename, base) {
      const fullPath = resolve2(filename, base);
      const fullPathSansSlash = fullPath.substring(1);
      if (!fullPathSansSlash) return [];
      return fullPathSansSlash.split(sep);
    }
    function pathToSteps(path2) {
      return filenameToSteps((0, util_1.pathToFilename)(path2));
    }
    function dataToStr(data, encoding2 = encoding_1.ENCODING_UTF8) {
      if (buffer_1.Buffer.isBuffer(data)) return data.toString(encoding2);
      else if (data instanceof Uint8Array) return (0, buffer_1.bufferFrom)(data).toString(encoding2);
      else return String(data);
    }
    function toUnixTimestamp(time) {
      if (typeof time === "string" && +time == time) {
        return +time;
      }
      if (time instanceof Date) {
        return time.getTime() / 1e3;
      }
      if (isFinite(time)) {
        if (time < 0) {
          return Date.now() / 1e3;
        }
        return time;
      }
      throw new Error("Cannot parse time: " + time);
    }
    function validateUid(uid) {
      if (typeof uid !== "number") throw TypeError(constants_2.ERRSTR.UID);
    }
    function validateGid(gid) {
      if (typeof gid !== "number") throw TypeError(constants_2.ERRSTR.GID);
    }
    function flattenJSON(nestedJSON) {
      const flatJSON = {};
      function flatten(pathPrefix, node2) {
        for (const path2 in node2) {
          const contentOrNode = node2[path2];
          const joinedPath = join(pathPrefix, path2);
          if (typeof contentOrNode === "string" || contentOrNode instanceof buffer_1.Buffer) {
            flatJSON[joinedPath] = contentOrNode;
          } else if (typeof contentOrNode === "object" && contentOrNode !== null && Object.keys(contentOrNode).length > 0) {
            flatten(joinedPath, contentOrNode);
          } else {
            flatJSON[joinedPath] = null;
          }
        }
      }
      flatten("", nestedJSON);
      return flatJSON;
    }
    const notImplemented = () => {
      throw new Error("Not implemented");
    };
    class Volume {
      static fromJSON(json, cwd) {
        const vol = new Volume();
        vol.fromJSON(json, cwd);
        return vol;
      }
      static fromNestedJSON(json, cwd) {
        const vol = new Volume();
        vol.fromNestedJSON(json, cwd);
        return vol;
      }
      get promises() {
        if (this.promisesApi === null) throw new Error("Promise is not supported in this environment.");
        return this.promisesApi;
      }
      constructor(props = {}) {
        this.ino = 0;
        this.inodes = {};
        this.releasedInos = [];
        this.fds = {};
        this.releasedFds = [];
        this.maxFiles = 1e4;
        this.openFiles = 0;
        this.promisesApi = new FsPromises_1.FsPromises(this, FileHandle_1.FileHandle);
        this.statWatchers = {};
        this.cpSync = notImplemented;
        this.statfsSync = notImplemented;
        this.cp = notImplemented;
        this.statfs = notImplemented;
        this.openAsBlob = notImplemented;
        this.props = Object.assign({
          Node: node_1.Node,
          Link: node_1.Link,
          File: node_1.File
        }, props);
        const root2 = this.createLink();
        root2.setNode(this.createNode(constants_1.constants.S_IFDIR | 511));
        const self2 = this;
        this.StatWatcher = class extends StatWatcher {
          constructor() {
            super(self2);
          }
        };
        const _ReadStream = FsReadStream;
        this.ReadStream = class extends _ReadStream {
          constructor(...args) {
            super(self2, ...args);
          }
        };
        const _WriteStream = FsWriteStream;
        this.WriteStream = class extends _WriteStream {
          constructor(...args) {
            super(self2, ...args);
          }
        };
        this.FSWatcher = class extends FSWatcher {
          constructor() {
            super(self2);
          }
        };
        root2.setChild(".", root2);
        root2.getNode().nlink++;
        root2.setChild("..", root2);
        root2.getNode().nlink++;
        this.root = root2;
      }
      createLink(parent, name, isDirectory = false, mode) {
        if (!parent) {
          return new this.props.Link(this, null, "");
        }
        if (!name) {
          throw new Error("createLink: name cannot be empty");
        }
        const finalPerm = mode !== null && mode !== void 0 ? mode : isDirectory ? 511 : 438;
        const hasFileType = mode && mode & constants_1.constants.S_IFMT;
        const modeType = hasFileType ? mode & constants_1.constants.S_IFMT : isDirectory ? constants_1.constants.S_IFDIR : constants_1.constants.S_IFREG;
        const finalMode = finalPerm & ~constants_1.constants.S_IFMT | modeType;
        return parent.createChild(name, this.createNode(finalMode));
      }
      deleteLink(link) {
        const parent = link.parent;
        if (parent) {
          parent.deleteChild(link);
          return true;
        }
        return false;
      }
      newInoNumber() {
        const releasedFd = this.releasedInos.pop();
        if (releasedFd) return releasedFd;
        else {
          this.ino = (this.ino + 1) % 4294967295;
          return this.ino;
        }
      }
      newFdNumber() {
        const releasedFd = this.releasedFds.pop();
        return typeof releasedFd === "number" ? releasedFd : Volume.fd--;
      }
      createNode(mode) {
        const node2 = new this.props.Node(this.newInoNumber(), mode);
        this.inodes[node2.ino] = node2;
        return node2;
      }
      deleteNode(node2) {
        node2.del();
        delete this.inodes[node2.ino];
        this.releasedInos.push(node2.ino);
      }
      walk(stepsOrFilenameOrLink, resolveSymlinks = false, checkExistence = false, checkAccess = false, funcName) {
        var _a;
        let steps;
        let filename;
        if (stepsOrFilenameOrLink instanceof node_1.Link) {
          steps = stepsOrFilenameOrLink.steps;
          filename = sep + steps.join(sep);
        } else if (typeof stepsOrFilenameOrLink === "string") {
          steps = filenameToSteps(stepsOrFilenameOrLink);
          filename = stepsOrFilenameOrLink;
        } else {
          steps = stepsOrFilenameOrLink;
          filename = sep + steps.join(sep);
        }
        let curr = this.root;
        let i = 0;
        while (i < steps.length) {
          let node2 = curr.getNode();
          if (node2.isDirectory()) {
            if (checkAccess && !node2.canExecute()) {
              throw (0, util_1.createError)(EACCES, funcName, filename);
            }
          } else {
            if (i < steps.length - 1) throw (0, util_1.createError)(ENOTDIR, funcName, filename);
          }
          curr = (_a = curr.getChild(steps[i])) !== null && _a !== void 0 ? _a : null;
          if (!curr) if (checkExistence) throw (0, util_1.createError)(ENOENT, funcName, filename);
          else return null;
          node2 = curr === null || curr === void 0 ? void 0 : curr.getNode();
          if (resolveSymlinks && node2.isSymlink()) {
            const resolvedPath = pathModule.isAbsolute(node2.symlink) ? node2.symlink : join(pathModule.dirname(curr.getPath()), node2.symlink);
            steps = filenameToSteps(resolvedPath).concat(steps.slice(i + 1));
            curr = this.root;
            i = 0;
            continue;
          }
          i++;
        }
        return curr;
      }
      getLink(steps) {
        return this.walk(steps, false, false, false);
      }
      getLinkOrThrow(filename, funcName) {
        return this.walk(filename, false, true, true, funcName);
      }
      getResolvedLink(filenameOrSteps) {
        return this.walk(filenameOrSteps, true, false, false);
      }
      getResolvedLinkOrThrow(filename, funcName) {
        return this.walk(filename, true, true, true, funcName);
      }
      resolveSymlinks(link) {
        return this.getResolvedLink(link.steps.slice(1));
      }
      getLinkAsDirOrThrow(filename, funcName) {
        const link = this.getLinkOrThrow(filename, funcName);
        if (!link.getNode().isDirectory()) throw (0, util_1.createError)(ENOTDIR, funcName, filename);
        return link;
      }
      getLinkParent(steps) {
        return this.getLink(steps.slice(0, -1));
      }
      getLinkParentAsDirOrThrow(filenameOrSteps, funcName) {
        const steps = (filenameOrSteps instanceof Array ? filenameOrSteps : filenameToSteps(filenameOrSteps)).slice(0, -1);
        const filename = sep + steps.join(sep);
        const link = this.getLinkOrThrow(filename, funcName);
        if (!link.getNode().isDirectory()) throw (0, util_1.createError)(ENOTDIR, funcName, filename);
        return link;
      }
      getFileByFd(fd) {
        return this.fds[String(fd)];
      }
      getFileByFdOrThrow(fd, funcName) {
        if (!(0, util_1.isFd)(fd)) throw TypeError(constants_2.ERRSTR.FD);
        const file = this.getFileByFd(fd);
        if (!file) throw (0, util_1.createError)(EBADF, funcName);
        return file;
      }
      wrapAsync(method, args, callback) {
        (0, util_1.validateCallback)(callback);
        (0, setImmediate_1.default)(() => {
          let result2;
          try {
            result2 = method.apply(this, args);
          } catch (err) {
            callback(err);
            return;
          }
          callback(null, result2);
        });
      }
      _toJSON(link = this.root, json = {}, path2, asBuffer) {
        let isEmpty = true;
        let children = link.children;
        if (link.getNode().isFile()) {
          children = /* @__PURE__ */ new Map([
            [
              link.getName(),
              link.parent.getChild(link.getName())
            ]
          ]);
          link = link.parent;
        }
        for (const name of children.keys()) {
          if (name === "." || name === "..") {
            continue;
          }
          isEmpty = false;
          const child = link.getChild(name);
          if (!child) {
            throw new Error("_toJSON: unexpected undefined");
          }
          const node2 = child.getNode();
          if (node2.isFile()) {
            let filename = child.getPath();
            if (path2) filename = relative(path2, filename);
            json[filename] = asBuffer ? node2.getBuffer() : node2.getString();
          } else if (node2.isDirectory()) {
            this._toJSON(child, json, path2, asBuffer);
          }
        }
        let dirPath = link.getPath();
        if (path2) dirPath = relative(path2, dirPath);
        if (dirPath && isEmpty) {
          json[dirPath] = null;
        }
        return json;
      }
      toJSON(paths, json = {}, isRelative = false, asBuffer = false) {
        const links = [];
        if (paths) {
          if (!Array.isArray(paths)) paths = [
            paths
          ];
          for (const path2 of paths) {
            const filename = (0, util_1.pathToFilename)(path2);
            const link = this.getResolvedLink(filename);
            if (!link) continue;
            links.push(link);
          }
        } else {
          links.push(this.root);
        }
        if (!links.length) return json;
        for (const link of links) this._toJSON(link, json, isRelative ? link.getPath() : "", asBuffer);
        return json;
      }
      fromJSON(json, cwd = process_1.default.cwd()) {
        for (let filename in json) {
          const data = json[filename];
          filename = resolve2(filename, cwd);
          if (typeof data === "string" || data instanceof buffer_1.Buffer) {
            const dir = dirname(filename);
            this.mkdirpBase(dir, 511);
            this.writeFileSync(filename, data);
          } else {
            this.mkdirpBase(filename, 511);
          }
        }
      }
      fromNestedJSON(json, cwd) {
        this.fromJSON(flattenJSON(json), cwd);
      }
      toTree(opts = {
        separator: sep
      }) {
        return (0, print_1.toTreeSync)(this, opts);
      }
      reset() {
        this.ino = 0;
        this.inodes = {};
        this.releasedInos = [];
        this.fds = {};
        this.releasedFds = [];
        this.openFiles = 0;
        this.root = this.createLink();
        this.root.setNode(this.createNode(constants_1.constants.S_IFDIR | 511));
      }
      mountSync(mountpoint, json) {
        this.fromJSON(json, mountpoint);
      }
      openLink(link, flagsNum, resolveSymlinks = true) {
        if (this.openFiles >= this.maxFiles) {
          throw (0, util_1.createError)(EMFILE, "open", link.getPath());
        }
        let realLink = link;
        if (resolveSymlinks) realLink = this.getResolvedLinkOrThrow(link.getPath(), "open");
        const node2 = realLink.getNode();
        if (node2.isDirectory()) {
          if ((flagsNum & (O_RDONLY | O_RDWR | O_WRONLY)) !== O_RDONLY) throw (0, util_1.createError)(EISDIR, "open", link.getPath());
        } else {
          if (flagsNum & O_DIRECTORY) throw (0, util_1.createError)(ENOTDIR, "open", link.getPath());
        }
        if (!(flagsNum & O_WRONLY)) {
          if (!node2.canRead()) {
            throw (0, util_1.createError)(EACCES, "open", link.getPath());
          }
        }
        if (!(flagsNum & O_RDONLY)) {
          if (!node2.canWrite()) {
            throw (0, util_1.createError)(EACCES, "open", link.getPath());
          }
        }
        const file = new this.props.File(link, node2, flagsNum, this.newFdNumber());
        this.fds[file.fd] = file;
        this.openFiles++;
        if (flagsNum & O_TRUNC) file.truncate();
        return file;
      }
      openFile(filename, flagsNum, modeNum, resolveSymlinks = true) {
        const steps = filenameToSteps(filename);
        let link;
        try {
          link = resolveSymlinks ? this.getResolvedLinkOrThrow(filename, "open") : this.getLinkOrThrow(filename, "open");
          if (link && flagsNum & O_CREAT && flagsNum & O_EXCL) throw (0, util_1.createError)(EEXIST, "open", filename);
        } catch (err) {
          if (err.code === ENOENT && flagsNum & O_CREAT) {
            const dirname2 = pathModule.dirname(filename);
            const dirLink = this.getResolvedLinkOrThrow(dirname2);
            const dirNode = dirLink.getNode();
            if (!dirNode.isDirectory()) throw (0, util_1.createError)(ENOTDIR, "open", filename);
            if (!dirNode.canExecute() || !dirNode.canWrite()) throw (0, util_1.createError)(EACCES, "open", filename);
            modeNum !== null && modeNum !== void 0 ? modeNum : modeNum = 438;
            link = this.createLink(dirLink, steps[steps.length - 1], false, modeNum);
          } else throw err;
        }
        if (link) return this.openLink(link, flagsNum, resolveSymlinks);
        throw (0, util_1.createError)(ENOENT, "open", filename);
      }
      openBase(filename, flagsNum, modeNum, resolveSymlinks = true) {
        const file = this.openFile(filename, flagsNum, modeNum, resolveSymlinks);
        if (!file) throw (0, util_1.createError)(ENOENT, "open", filename);
        return file.fd;
      }
      openSync(path2, flags, mode = 438) {
        const modeNum = (0, util_1.modeToNumber)(mode);
        const fileName = (0, util_1.pathToFilename)(path2);
        const flagsNum = (0, util_1.flagsToNumber)(flags);
        return this.openBase(fileName, flagsNum, modeNum, !(flagsNum & O_SYMLINK));
      }
      open(path2, flags, a, b) {
        let mode = a;
        let callback = b;
        if (typeof a === "function") {
          mode = 438;
          callback = a;
        }
        mode = mode || 438;
        const modeNum = (0, util_1.modeToNumber)(mode);
        const fileName = (0, util_1.pathToFilename)(path2);
        const flagsNum = (0, util_1.flagsToNumber)(flags);
        this.wrapAsync(this.openBase, [
          fileName,
          flagsNum,
          modeNum,
          !(flagsNum & O_SYMLINK)
        ], callback);
      }
      closeFile(file) {
        if (!this.fds[file.fd]) return;
        this.openFiles--;
        delete this.fds[file.fd];
        this.releasedFds.push(file.fd);
      }
      closeSync(fd) {
        (0, util_1.validateFd)(fd);
        const file = this.getFileByFdOrThrow(fd, "close");
        this.closeFile(file);
      }
      close(fd, callback) {
        (0, util_1.validateFd)(fd);
        const file = this.getFileByFdOrThrow(fd, "close");
        this.wrapAsync(this.closeFile, [
          file
        ], callback);
      }
      openFileOrGetById(id, flagsNum, modeNum) {
        if (typeof id === "number") {
          const file = this.fds[id];
          if (!file) throw (0, util_1.createError)(ENOENT);
          return file;
        } else {
          return this.openFile((0, util_1.pathToFilename)(id), flagsNum, modeNum);
        }
      }
      readBase(fd, buffer2, offset, length, position) {
        if (buffer2.byteLength < length) {
          throw (0, util_1.createError)(ERR_OUT_OF_RANGE, "read", void 0, void 0, RangeError);
        }
        const file = this.getFileByFdOrThrow(fd);
        if (file.node.isSymlink()) {
          throw (0, util_1.createError)(EPERM, "read", file.link.getPath());
        }
        return file.read(buffer2, Number(offset), Number(length), position === -1 || typeof position !== "number" ? void 0 : position);
      }
      readSync(fd, buffer2, offset, length, position) {
        (0, util_1.validateFd)(fd);
        return this.readBase(fd, buffer2, offset, length, position);
      }
      read(fd, buffer2, offset, length, position, callback) {
        (0, util_1.validateCallback)(callback);
        if (length === 0) {
          return (0, queueMicrotask_1.default)(() => {
            if (callback) callback(null, 0, buffer2);
          });
        }
        (0, setImmediate_1.default)(() => {
          try {
            const bytes = this.readBase(fd, buffer2, offset, length, position);
            callback(null, bytes, buffer2);
          } catch (err) {
            callback(err);
          }
        });
      }
      readvBase(fd, buffers, position) {
        const file = this.getFileByFdOrThrow(fd);
        let p = position !== null && position !== void 0 ? position : void 0;
        if (p === -1) {
          p = void 0;
        }
        let bytesRead = 0;
        for (const buffer2 of buffers) {
          const bytes = file.read(buffer2, 0, buffer2.byteLength, p);
          p = void 0;
          bytesRead += bytes;
          if (bytes < buffer2.byteLength) break;
        }
        return bytesRead;
      }
      readv(fd, buffers, a, b) {
        let position = a;
        let callback = b;
        if (typeof a === "function") {
          position = null;
          callback = a;
        }
        (0, util_1.validateCallback)(callback);
        (0, setImmediate_1.default)(() => {
          try {
            const bytes = this.readvBase(fd, buffers, position);
            callback(null, bytes, buffers);
          } catch (err) {
            callback(err);
          }
        });
      }
      readvSync(fd, buffers, position) {
        (0, util_1.validateFd)(fd);
        return this.readvBase(fd, buffers, position);
      }
      readFileBase(id, flagsNum, encoding2) {
        let result2;
        const isUserFd = typeof id === "number";
        const userOwnsFd = isUserFd && (0, util_1.isFd)(id);
        let fd;
        if (userOwnsFd) fd = id;
        else {
          const filename = (0, util_1.pathToFilename)(id);
          const link = this.getResolvedLinkOrThrow(filename, "open");
          const node2 = link.getNode();
          if (node2.isDirectory()) throw (0, util_1.createError)(EISDIR, "open", link.getPath());
          fd = this.openSync(id, flagsNum);
        }
        try {
          result2 = (0, util_1.bufferToEncoding)(this.getFileByFdOrThrow(fd).getBuffer(), encoding2);
        } finally {
          if (!userOwnsFd) {
            this.closeSync(fd);
          }
        }
        return result2;
      }
      readFileSync(file, options2) {
        const opts = (0, options_1.getReadFileOptions)(options2);
        const flagsNum = (0, util_1.flagsToNumber)(opts.flag);
        return this.readFileBase(file, flagsNum, opts.encoding);
      }
      readFile(id, a, b) {
        const [opts, callback] = (0, options_1.optsAndCbGenerator)(options_1.getReadFileOptions)(a, b);
        const flagsNum = (0, util_1.flagsToNumber)(opts.flag);
        this.wrapAsync(this.readFileBase, [
          id,
          flagsNum,
          opts.encoding
        ], callback);
      }
      writeBase(fd, buf, offset, length, position) {
        const file = this.getFileByFdOrThrow(fd, "write");
        if (file.node.isSymlink()) {
          throw (0, util_1.createError)(EBADF, "write", file.link.getPath());
        }
        return file.write(buf, offset, length, position === -1 || typeof position !== "number" ? void 0 : position);
      }
      writeSync(fd, a, b, c, d) {
        const [, buf, offset, length, position] = (0, util_1.getWriteSyncArgs)(fd, a, b, c, d);
        return this.writeBase(fd, buf, offset, length, position);
      }
      write(fd, a, b, c, d, e) {
        const [, asStr, buf, offset, length, position, cb] = (0, util_1.getWriteArgs)(fd, a, b, c, d, e);
        (0, setImmediate_1.default)(() => {
          try {
            const bytes = this.writeBase(fd, buf, offset, length, position);
            if (!asStr) {
              cb(null, bytes, buf);
            } else {
              cb(null, bytes, a);
            }
          } catch (err) {
            cb(err);
          }
        });
      }
      writevBase(fd, buffers, position) {
        const file = this.getFileByFdOrThrow(fd);
        let p = position !== null && position !== void 0 ? position : void 0;
        if (p === -1) {
          p = void 0;
        }
        let bytesWritten = 0;
        for (const buffer2 of buffers) {
          const nodeBuf = buffer_1.Buffer.from(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength);
          const bytes = file.write(nodeBuf, 0, nodeBuf.byteLength, p);
          p = void 0;
          bytesWritten += bytes;
          if (bytes < nodeBuf.byteLength) break;
        }
        return bytesWritten;
      }
      writev(fd, buffers, a, b) {
        let position = a;
        let callback = b;
        if (typeof a === "function") {
          position = null;
          callback = a;
        }
        (0, util_1.validateCallback)(callback);
        (0, setImmediate_1.default)(() => {
          try {
            const bytes = this.writevBase(fd, buffers, position);
            callback(null, bytes, buffers);
          } catch (err) {
            callback(err);
          }
        });
      }
      writevSync(fd, buffers, position) {
        (0, util_1.validateFd)(fd);
        return this.writevBase(fd, buffers, position);
      }
      writeFileBase(id, buf, flagsNum, modeNum) {
        const isUserFd = typeof id === "number";
        let fd;
        if (isUserFd) fd = id;
        else {
          fd = this.openBase((0, util_1.pathToFilename)(id), flagsNum, modeNum);
        }
        let offset = 0;
        let length = buf.length;
        let position = flagsNum & O_APPEND ? void 0 : 0;
        try {
          while (length > 0) {
            const written = this.writeSync(fd, buf, offset, length, position);
            offset += written;
            length -= written;
            if (position !== void 0) position += written;
          }
        } finally {
          if (!isUserFd) this.closeSync(fd);
        }
      }
      writeFileSync(id, data, options2) {
        const opts = (0, options_1.getWriteFileOptions)(options2);
        const flagsNum = (0, util_1.flagsToNumber)(opts.flag);
        const modeNum = (0, util_1.modeToNumber)(opts.mode);
        const buf = (0, util_1.dataToBuffer)(data, opts.encoding);
        this.writeFileBase(id, buf, flagsNum, modeNum);
      }
      writeFile(id, data, a, b) {
        let options2 = a;
        let callback = b;
        if (typeof a === "function") {
          options2 = options_1.writeFileDefaults;
          callback = a;
        }
        const cb = (0, util_1.validateCallback)(callback);
        const opts = (0, options_1.getWriteFileOptions)(options2);
        const flagsNum = (0, util_1.flagsToNumber)(opts.flag);
        const modeNum = (0, util_1.modeToNumber)(opts.mode);
        const buf = (0, util_1.dataToBuffer)(data, opts.encoding);
        this.wrapAsync(this.writeFileBase, [
          id,
          buf,
          flagsNum,
          modeNum
        ], cb);
      }
      linkBase(filename1, filename2) {
        let link1;
        try {
          link1 = this.getLinkOrThrow(filename1, "link");
        } catch (err) {
          if (err.code) err = (0, util_1.createError)(err.code, "link", filename1, filename2);
          throw err;
        }
        const dirname2 = pathModule.dirname(filename2);
        let dir2;
        try {
          dir2 = this.getLinkOrThrow(dirname2, "link");
        } catch (err) {
          if (err.code) err = (0, util_1.createError)(err.code, "link", filename1, filename2);
          throw err;
        }
        const name = pathModule.basename(filename2);
        if (dir2.getChild(name)) throw (0, util_1.createError)(EEXIST, "link", filename1, filename2);
        const node2 = link1.getNode();
        node2.nlink++;
        dir2.createChild(name, node2);
      }
      copyFileBase(src, dest, flags) {
        const buf = this.readFileSync(src);
        if (flags & COPYFILE_EXCL) {
          if (this.existsSync(dest)) {
            throw (0, util_1.createError)(EEXIST, "copyFile", src, dest);
          }
        }
        if (flags & COPYFILE_FICLONE_FORCE) {
          throw (0, util_1.createError)(ENOSYS, "copyFile", src, dest);
        }
        this.writeFileBase(dest, buf, constants_2.FLAGS.w, 438);
      }
      copyFileSync(src, dest, flags) {
        const srcFilename = (0, util_1.pathToFilename)(src);
        const destFilename = (0, util_1.pathToFilename)(dest);
        return this.copyFileBase(srcFilename, destFilename, (flags || 0) | 0);
      }
      copyFile(src, dest, a, b) {
        const srcFilename = (0, util_1.pathToFilename)(src);
        const destFilename = (0, util_1.pathToFilename)(dest);
        let flags;
        let callback;
        if (typeof a === "function") {
          flags = 0;
          callback = a;
        } else {
          flags = a;
          callback = b;
        }
        (0, util_1.validateCallback)(callback);
        this.wrapAsync(this.copyFileBase, [
          srcFilename,
          destFilename,
          flags
        ], callback);
      }
      linkSync(existingPath, newPath) {
        const existingPathFilename = (0, util_1.pathToFilename)(existingPath);
        const newPathFilename = (0, util_1.pathToFilename)(newPath);
        this.linkBase(existingPathFilename, newPathFilename);
      }
      link(existingPath, newPath, callback) {
        const existingPathFilename = (0, util_1.pathToFilename)(existingPath);
        const newPathFilename = (0, util_1.pathToFilename)(newPath);
        this.wrapAsync(this.linkBase, [
          existingPathFilename,
          newPathFilename
        ], callback);
      }
      unlinkBase(filename) {
        const link = this.getLinkOrThrow(filename, "unlink");
        if (link.length) throw Error("Dir not empty...");
        this.deleteLink(link);
        const node2 = link.getNode();
        node2.nlink--;
        if (node2.nlink <= 0) {
          this.deleteNode(node2);
        }
      }
      unlinkSync(path2) {
        const filename = (0, util_1.pathToFilename)(path2);
        this.unlinkBase(filename);
      }
      unlink(path2, callback) {
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.unlinkBase, [
          filename
        ], callback);
      }
      symlinkBase(targetFilename, pathFilename) {
        const pathSteps = filenameToSteps(pathFilename);
        let dirLink;
        try {
          dirLink = this.getLinkParentAsDirOrThrow(pathSteps);
        } catch (err) {
          if (err.code) err = (0, util_1.createError)(err.code, "symlink", targetFilename, pathFilename);
          throw err;
        }
        const name = pathSteps[pathSteps.length - 1];
        if (dirLink.getChild(name)) throw (0, util_1.createError)(EEXIST, "symlink", targetFilename, pathFilename);
        const node2 = dirLink.getNode();
        if (!node2.canExecute() || !node2.canWrite()) throw (0, util_1.createError)(EACCES, "symlink", targetFilename, pathFilename);
        const symlink = dirLink.createChild(name);
        symlink.getNode().makeSymlink(targetFilename);
        return symlink;
      }
      symlinkSync(target, path2, type2) {
        const targetFilename = (0, util_1.pathToFilename)(target);
        const pathFilename = (0, util_1.pathToFilename)(path2);
        this.symlinkBase(targetFilename, pathFilename);
      }
      symlink(target, path2, a, b) {
        const callback = (0, util_1.validateCallback)(typeof a === "function" ? a : b);
        const targetFilename = (0, util_1.pathToFilename)(target);
        const pathFilename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.symlinkBase, [
          targetFilename,
          pathFilename
        ], callback);
      }
      realpathBase(filename, encoding2) {
        const realLink = this.getResolvedLinkOrThrow(filename, "realpath");
        return (0, encoding_1.strToEncoding)(realLink.getPath() || "/", encoding2);
      }
      realpathSync(path2, options2) {
        return this.realpathBase((0, util_1.pathToFilename)(path2), (0, options_1.getRealpathOptions)(options2).encoding);
      }
      realpath(path2, a, b) {
        const [opts, callback] = (0, options_1.getRealpathOptsAndCb)(a, b);
        const pathFilename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.realpathBase, [
          pathFilename,
          opts.encoding
        ], callback);
      }
      lstatBase(filename, bigint = false, throwIfNoEntry = false) {
        let link;
        try {
          link = this.getLinkOrThrow(filename, "lstat");
        } catch (err) {
          if (err.code === ENOENT && !throwIfNoEntry) return void 0;
          else throw err;
        }
        return Stats_1.default.build(link.getNode(), bigint);
      }
      lstatSync(path2, options2) {
        const { throwIfNoEntry = true, bigint = false } = (0, options_1.getStatOptions)(options2);
        return this.lstatBase((0, util_1.pathToFilename)(path2), bigint, throwIfNoEntry);
      }
      lstat(path2, a, b) {
        const [{ throwIfNoEntry = true, bigint = false }, callback] = (0, options_1.getStatOptsAndCb)(a, b);
        this.wrapAsync(this.lstatBase, [
          (0, util_1.pathToFilename)(path2),
          bigint,
          throwIfNoEntry
        ], callback);
      }
      statBase(filename, bigint = false, throwIfNoEntry = true) {
        let link;
        try {
          link = this.getResolvedLinkOrThrow(filename, "stat");
        } catch (err) {
          if (err.code === ENOENT && !throwIfNoEntry) return void 0;
          else throw err;
        }
        return Stats_1.default.build(link.getNode(), bigint);
      }
      statSync(path2, options2) {
        const { bigint = true, throwIfNoEntry = true } = (0, options_1.getStatOptions)(options2);
        return this.statBase((0, util_1.pathToFilename)(path2), bigint, throwIfNoEntry);
      }
      stat(path2, a, b) {
        const [{ bigint = false, throwIfNoEntry = true }, callback] = (0, options_1.getStatOptsAndCb)(a, b);
        this.wrapAsync(this.statBase, [
          (0, util_1.pathToFilename)(path2),
          bigint,
          throwIfNoEntry
        ], callback);
      }
      fstatBase(fd, bigint = false) {
        const file = this.getFileByFd(fd);
        if (!file) throw (0, util_1.createError)(EBADF, "fstat");
        return Stats_1.default.build(file.node, bigint);
      }
      fstatSync(fd, options2) {
        return this.fstatBase(fd, (0, options_1.getStatOptions)(options2).bigint);
      }
      fstat(fd, a, b) {
        const [opts, callback] = (0, options_1.getStatOptsAndCb)(a, b);
        this.wrapAsync(this.fstatBase, [
          fd,
          opts.bigint
        ], callback);
      }
      renameBase(oldPathFilename, newPathFilename) {
        let link;
        try {
          link = this.getResolvedLinkOrThrow(oldPathFilename);
        } catch (err) {
          if (err.code) err = (0, util_1.createError)(err.code, "rename", oldPathFilename, newPathFilename);
          throw err;
        }
        let newPathDirLink;
        try {
          newPathDirLink = this.getLinkParentAsDirOrThrow(newPathFilename);
        } catch (err) {
          if (err.code) err = (0, util_1.createError)(err.code, "rename", oldPathFilename, newPathFilename);
          throw err;
        }
        const oldLinkParent = link.parent;
        const oldParentNode = oldLinkParent.getNode();
        const newPathDirNode = newPathDirLink.getNode();
        if (!oldParentNode.canExecute() || !oldParentNode.canWrite() || !newPathDirNode.canExecute() || !newPathDirNode.canWrite()) {
          throw (0, util_1.createError)(EACCES, "rename", oldPathFilename, newPathFilename);
        }
        oldLinkParent.deleteChild(link);
        const name = pathModule.basename(newPathFilename);
        link.name = name;
        link.steps = [
          ...newPathDirLink.steps,
          name
        ];
        newPathDirLink.setChild(link.getName(), link);
      }
      renameSync(oldPath, newPath) {
        const oldPathFilename = (0, util_1.pathToFilename)(oldPath);
        const newPathFilename = (0, util_1.pathToFilename)(newPath);
        this.renameBase(oldPathFilename, newPathFilename);
      }
      rename(oldPath, newPath, callback) {
        const oldPathFilename = (0, util_1.pathToFilename)(oldPath);
        const newPathFilename = (0, util_1.pathToFilename)(newPath);
        this.wrapAsync(this.renameBase, [
          oldPathFilename,
          newPathFilename
        ], callback);
      }
      existsBase(filename) {
        return !!this.statBase(filename);
      }
      existsSync(path2) {
        try {
          return this.existsBase((0, util_1.pathToFilename)(path2));
        } catch (err) {
          return false;
        }
      }
      exists(path2, callback) {
        const filename = (0, util_1.pathToFilename)(path2);
        if (typeof callback !== "function") throw Error(constants_2.ERRSTR.CB);
        (0, setImmediate_1.default)(() => {
          try {
            callback(this.existsBase(filename));
          } catch (err) {
            callback(false);
          }
        });
      }
      accessBase(filename, mode) {
        this.getLinkOrThrow(filename, "access");
      }
      accessSync(path2, mode = F_OK) {
        const filename = (0, util_1.pathToFilename)(path2);
        mode = mode | 0;
        this.accessBase(filename, mode);
      }
      access(path2, a, b) {
        let mode = F_OK;
        let callback;
        if (typeof a !== "function") {
          mode = a | 0;
          callback = (0, util_1.validateCallback)(b);
        } else {
          callback = a;
        }
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.accessBase, [
          filename,
          mode
        ], callback);
      }
      appendFileSync(id, data, options2) {
        const opts = (0, options_1.getAppendFileOpts)(options2);
        if (!opts.flag || (0, util_1.isFd)(id)) opts.flag = "a";
        this.writeFileSync(id, data, opts);
      }
      appendFile(id, data, a, b) {
        const [opts, callback] = (0, options_1.getAppendFileOptsAndCb)(a, b);
        if (!opts.flag || (0, util_1.isFd)(id)) opts.flag = "a";
        this.writeFile(id, data, opts, callback);
      }
      readdirBase(filename, options2) {
        filenameToSteps(filename);
        const link = this.getResolvedLinkOrThrow(filename, "scandir");
        const node2 = link.getNode();
        if (!node2.isDirectory()) throw (0, util_1.createError)(ENOTDIR, "scandir", filename);
        if (!node2.canRead()) throw (0, util_1.createError)(EACCES, "scandir", filename);
        const list = [];
        for (const name of link.children.keys()) {
          const child = link.getChild(name);
          if (!child || name === "." || name === "..") continue;
          list.push(Dirent_1.default.build(child, options2.encoding));
          if (options2.recursive && child.children.size) {
            const recurseOptions = Object.assign(Object.assign({}, options2), {
              recursive: true,
              withFileTypes: true
            });
            const childList = this.readdirBase(child.getPath(), recurseOptions);
            list.push(...childList);
          }
        }
        if (!util_1.isWin && options2.encoding !== "buffer") list.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        if (options2.withFileTypes) return list;
        let filename2 = filename;
        if (util_1.isWin) {
          filename2 = filename2.replace(/\\/g, "/");
        }
        return list.map((dirent) => {
          if (options2.recursive) {
            let fullPath = pathModule.join(dirent.parentPath, dirent.name.toString());
            if (util_1.isWin) {
              fullPath = fullPath.replace(/\\/g, "/");
            }
            return fullPath.replace(filename2 + pathModule.posix.sep, "");
          }
          return dirent.name;
        });
      }
      readdirSync(path2, options2) {
        const opts = (0, options_1.getReaddirOptions)(options2);
        const filename = (0, util_1.pathToFilename)(path2);
        return this.readdirBase(filename, opts);
      }
      readdir(path2, a, b) {
        const [options2, callback] = (0, options_1.getReaddirOptsAndCb)(a, b);
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.readdirBase, [
          filename,
          options2
        ], callback);
      }
      readlinkBase(filename, encoding2) {
        const link = this.getLinkOrThrow(filename, "readlink");
        const node2 = link.getNode();
        if (!node2.isSymlink()) throw (0, util_1.createError)(EINVAL, "readlink", filename);
        return (0, encoding_1.strToEncoding)(node2.symlink, encoding2);
      }
      readlinkSync(path2, options2) {
        const opts = (0, options_1.getDefaultOpts)(options2);
        const filename = (0, util_1.pathToFilename)(path2);
        return this.readlinkBase(filename, opts.encoding);
      }
      readlink(path2, a, b) {
        const [opts, callback] = (0, options_1.getDefaultOptsAndCb)(a, b);
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.readlinkBase, [
          filename,
          opts.encoding
        ], callback);
      }
      fsyncBase(fd) {
        this.getFileByFdOrThrow(fd, "fsync");
      }
      fsyncSync(fd) {
        this.fsyncBase(fd);
      }
      fsync(fd, callback) {
        this.wrapAsync(this.fsyncBase, [
          fd
        ], callback);
      }
      fdatasyncBase(fd) {
        this.getFileByFdOrThrow(fd, "fdatasync");
      }
      fdatasyncSync(fd) {
        this.fdatasyncBase(fd);
      }
      fdatasync(fd, callback) {
        this.wrapAsync(this.fdatasyncBase, [
          fd
        ], callback);
      }
      ftruncateBase(fd, len) {
        const file = this.getFileByFdOrThrow(fd, "ftruncate");
        file.truncate(len);
      }
      ftruncateSync(fd, len) {
        this.ftruncateBase(fd, len);
      }
      ftruncate(fd, a, b) {
        const len = typeof a === "number" ? a : 0;
        const callback = (0, util_1.validateCallback)(typeof a === "number" ? b : a);
        this.wrapAsync(this.ftruncateBase, [
          fd,
          len
        ], callback);
      }
      truncateBase(path2, len) {
        const fd = this.openSync(path2, "r+");
        try {
          this.ftruncateSync(fd, len);
        } finally {
          this.closeSync(fd);
        }
      }
      truncateSync(id, len) {
        if ((0, util_1.isFd)(id)) return this.ftruncateSync(id, len);
        this.truncateBase(id, len);
      }
      truncate(id, a, b) {
        const len = typeof a === "number" ? a : 0;
        const callback = (0, util_1.validateCallback)(typeof a === "number" ? b : a);
        if ((0, util_1.isFd)(id)) return this.ftruncate(id, len, callback);
        this.wrapAsync(this.truncateBase, [
          id,
          len
        ], callback);
      }
      futimesBase(fd, atime, mtime) {
        const file = this.getFileByFdOrThrow(fd, "futimes");
        const node2 = file.node;
        node2.atime = new Date(atime * 1e3);
        node2.mtime = new Date(mtime * 1e3);
      }
      futimesSync(fd, atime, mtime) {
        this.futimesBase(fd, toUnixTimestamp(atime), toUnixTimestamp(mtime));
      }
      futimes(fd, atime, mtime, callback) {
        this.wrapAsync(this.futimesBase, [
          fd,
          toUnixTimestamp(atime),
          toUnixTimestamp(mtime)
        ], callback);
      }
      utimesBase(filename, atime, mtime, followSymlinks = true) {
        const link = followSymlinks ? this.getResolvedLinkOrThrow(filename, "utimes") : this.getLinkOrThrow(filename, "lutimes");
        const node2 = link.getNode();
        node2.atime = new Date(atime * 1e3);
        node2.mtime = new Date(mtime * 1e3);
      }
      utimesSync(path2, atime, mtime) {
        this.utimesBase((0, util_1.pathToFilename)(path2), toUnixTimestamp(atime), toUnixTimestamp(mtime), true);
      }
      utimes(path2, atime, mtime, callback) {
        this.wrapAsync(this.utimesBase, [
          (0, util_1.pathToFilename)(path2),
          toUnixTimestamp(atime),
          toUnixTimestamp(mtime),
          true
        ], callback);
      }
      lutimesSync(path2, atime, mtime) {
        this.utimesBase((0, util_1.pathToFilename)(path2), toUnixTimestamp(atime), toUnixTimestamp(mtime), false);
      }
      lutimes(path2, atime, mtime, callback) {
        this.wrapAsync(this.utimesBase, [
          (0, util_1.pathToFilename)(path2),
          toUnixTimestamp(atime),
          toUnixTimestamp(mtime),
          false
        ], callback);
      }
      mkdirBase(filename, modeNum) {
        const steps = filenameToSteps(filename);
        if (!steps.length) {
          throw (0, util_1.createError)(EEXIST, "mkdir", filename);
        }
        const dir = this.getLinkParentAsDirOrThrow(filename, "mkdir");
        const name = steps[steps.length - 1];
        if (dir.getChild(name)) throw (0, util_1.createError)(EEXIST, "mkdir", filename);
        const node2 = dir.getNode();
        if (!node2.canWrite() || !node2.canExecute()) throw (0, util_1.createError)(EACCES, "mkdir", filename);
        dir.createChild(name, this.createNode(constants_1.constants.S_IFDIR | modeNum));
      }
      mkdirpBase(filename, modeNum) {
        let created = false;
        const steps = filenameToSteps(filename);
        let curr = null;
        let i = steps.length;
        for (i = steps.length; i >= 0; i--) {
          curr = this.getResolvedLink(steps.slice(0, i));
          if (curr) break;
        }
        if (!curr) {
          curr = this.root;
          i = 0;
        }
        curr = this.getResolvedLinkOrThrow(sep + steps.slice(0, i).join(sep), "mkdir");
        for (i; i < steps.length; i++) {
          const node2 = curr.getNode();
          if (node2.isDirectory()) {
            if (!node2.canExecute() || !node2.canWrite()) throw (0, util_1.createError)(EACCES, "mkdir", filename);
          } else {
            throw (0, util_1.createError)(ENOTDIR, "mkdir", filename);
          }
          created = true;
          curr = curr.createChild(steps[i], this.createNode(constants_1.constants.S_IFDIR | modeNum));
        }
        return created ? filename : void 0;
      }
      mkdirSync(path2, options2) {
        const opts = (0, options_1.getMkdirOptions)(options2);
        const modeNum = (0, util_1.modeToNumber)(opts.mode, 511);
        const filename = (0, util_1.pathToFilename)(path2);
        if (opts.recursive) return this.mkdirpBase(filename, modeNum);
        this.mkdirBase(filename, modeNum);
      }
      mkdir(path2, a, b) {
        const opts = (0, options_1.getMkdirOptions)(a);
        const callback = (0, util_1.validateCallback)(typeof a === "function" ? a : b);
        const modeNum = (0, util_1.modeToNumber)(opts.mode, 511);
        const filename = (0, util_1.pathToFilename)(path2);
        if (opts.recursive) this.wrapAsync(this.mkdirpBase, [
          filename,
          modeNum
        ], callback);
        else this.wrapAsync(this.mkdirBase, [
          filename,
          modeNum
        ], callback);
      }
      mkdtempBase(prefix, encoding2, retry = 5) {
        const filename = prefix + (0, util_1.genRndStr6)();
        try {
          this.mkdirBase(filename, 511);
          return (0, encoding_1.strToEncoding)(filename, encoding2);
        } catch (err) {
          if (err.code === EEXIST) {
            if (retry > 1) return this.mkdtempBase(prefix, encoding2, retry - 1);
            else throw Error("Could not create temp dir.");
          } else throw err;
        }
      }
      mkdtempSync(prefix, options2) {
        const { encoding: encoding2 } = (0, options_1.getDefaultOpts)(options2);
        if (!prefix || typeof prefix !== "string") throw new TypeError("filename prefix is required");
        (0, util_1.nullCheck)(prefix);
        return this.mkdtempBase(prefix, encoding2);
      }
      mkdtemp(prefix, a, b) {
        const [{ encoding: encoding2 }, callback] = (0, options_1.getDefaultOptsAndCb)(a, b);
        if (!prefix || typeof prefix !== "string") throw new TypeError("filename prefix is required");
        if (!(0, util_1.nullCheck)(prefix)) return;
        this.wrapAsync(this.mkdtempBase, [
          prefix,
          encoding2
        ], callback);
      }
      rmdirBase(filename, options2) {
        const opts = (0, options_1.getRmdirOptions)(options2);
        const link = this.getLinkAsDirOrThrow(filename, "rmdir");
        if (link.length && !opts.recursive) throw (0, util_1.createError)(ENOTEMPTY, "rmdir", filename);
        this.deleteLink(link);
      }
      rmdirSync(path2, options2) {
        this.rmdirBase((0, util_1.pathToFilename)(path2), options2);
      }
      rmdir(path2, a, b) {
        const opts = (0, options_1.getRmdirOptions)(a);
        const callback = (0, util_1.validateCallback)(typeof a === "function" ? a : b);
        this.wrapAsync(this.rmdirBase, [
          (0, util_1.pathToFilename)(path2),
          opts
        ], callback);
      }
      rmBase(filename, options2 = {}) {
        let link;
        try {
          link = this.getResolvedLinkOrThrow(filename, "stat");
        } catch (err) {
          if (err.code === ENOENT && options2.force) return;
          else throw err;
        }
        if (link.getNode().isDirectory() && !options2.recursive) throw (0, util_1.createError)(ERR_FS_EISDIR, "rm", filename);
        if (!link.parent.getNode().canWrite()) throw (0, util_1.createError)(EACCES, "rm", filename);
        this.deleteLink(link);
      }
      rmSync(path2, options2) {
        this.rmBase((0, util_1.pathToFilename)(path2), options2);
      }
      rm(path2, a, b) {
        const [opts, callback] = (0, options_1.getRmOptsAndCb)(a, b);
        this.wrapAsync(this.rmBase, [
          (0, util_1.pathToFilename)(path2),
          opts
        ], callback);
      }
      fchmodBase(fd, modeNum) {
        const file = this.getFileByFdOrThrow(fd, "fchmod");
        file.chmod(modeNum);
      }
      fchmodSync(fd, mode) {
        this.fchmodBase(fd, (0, util_1.modeToNumber)(mode));
      }
      fchmod(fd, mode, callback) {
        this.wrapAsync(this.fchmodBase, [
          fd,
          (0, util_1.modeToNumber)(mode)
        ], callback);
      }
      chmodBase(filename, modeNum, followSymlinks = true) {
        const link = followSymlinks ? this.getResolvedLinkOrThrow(filename, "chmod") : this.getLinkOrThrow(filename, "chmod");
        const node2 = link.getNode();
        node2.chmod(modeNum);
      }
      chmodSync(path2, mode) {
        const modeNum = (0, util_1.modeToNumber)(mode);
        const filename = (0, util_1.pathToFilename)(path2);
        this.chmodBase(filename, modeNum, true);
      }
      chmod(path2, mode, callback) {
        const modeNum = (0, util_1.modeToNumber)(mode);
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.chmodBase, [
          filename,
          modeNum
        ], callback);
      }
      lchmodBase(filename, modeNum) {
        this.chmodBase(filename, modeNum, false);
      }
      lchmodSync(path2, mode) {
        const modeNum = (0, util_1.modeToNumber)(mode);
        const filename = (0, util_1.pathToFilename)(path2);
        this.lchmodBase(filename, modeNum);
      }
      lchmod(path2, mode, callback) {
        const modeNum = (0, util_1.modeToNumber)(mode);
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.lchmodBase, [
          filename,
          modeNum
        ], callback);
      }
      fchownBase(fd, uid, gid) {
        this.getFileByFdOrThrow(fd, "fchown").chown(uid, gid);
      }
      fchownSync(fd, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.fchownBase(fd, uid, gid);
      }
      fchown(fd, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.fchownBase, [
          fd,
          uid,
          gid
        ], callback);
      }
      chownBase(filename, uid, gid) {
        const link = this.getResolvedLinkOrThrow(filename, "chown");
        const node2 = link.getNode();
        node2.chown(uid, gid);
      }
      chownSync(path2, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.chownBase((0, util_1.pathToFilename)(path2), uid, gid);
      }
      chown(path2, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.chownBase, [
          (0, util_1.pathToFilename)(path2),
          uid,
          gid
        ], callback);
      }
      lchownBase(filename, uid, gid) {
        this.getLinkOrThrow(filename, "lchown").getNode().chown(uid, gid);
      }
      lchownSync(path2, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.lchownBase((0, util_1.pathToFilename)(path2), uid, gid);
      }
      lchown(path2, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.lchownBase, [
          (0, util_1.pathToFilename)(path2),
          uid,
          gid
        ], callback);
      }
      watchFile(path2, a, b) {
        const filename = (0, util_1.pathToFilename)(path2);
        let options2 = a;
        let listener = b;
        if (typeof options2 === "function") {
          listener = a;
          options2 = null;
        }
        if (typeof listener !== "function") {
          throw Error('"watchFile()" requires a listener function');
        }
        let interval = 5007;
        let persistent = true;
        if (options2 && typeof options2 === "object") {
          if (typeof options2.interval === "number") interval = options2.interval;
          if (typeof options2.persistent === "boolean") persistent = options2.persistent;
        }
        let watcher = this.statWatchers[filename];
        if (!watcher) {
          watcher = new this.StatWatcher();
          watcher.start(filename, persistent, interval);
          this.statWatchers[filename] = watcher;
        }
        watcher.addListener("change", listener);
        return watcher;
      }
      unwatchFile(path2, listener) {
        const filename = (0, util_1.pathToFilename)(path2);
        const watcher = this.statWatchers[filename];
        if (!watcher) return;
        if (typeof listener === "function") {
          watcher.removeListener("change", listener);
        } else {
          watcher.removeAllListeners("change");
        }
        if (watcher.listenerCount("change") === 0) {
          watcher.stop();
          delete this.statWatchers[filename];
        }
      }
      createReadStream(path2, options2) {
        return new this.ReadStream(path2, options2);
      }
      createWriteStream(path2, options2) {
        return new this.WriteStream(path2, options2);
      }
      watch(path2, options2, listener) {
        const filename = (0, util_1.pathToFilename)(path2);
        let givenOptions = options2;
        if (typeof options2 === "function") {
          listener = options2;
          givenOptions = null;
        }
        let { persistent, recursive, encoding: encoding2 } = (0, options_1.getDefaultOpts)(givenOptions);
        if (persistent === void 0) persistent = true;
        if (recursive === void 0) recursive = false;
        const watcher = new this.FSWatcher();
        watcher.start(filename, persistent, recursive, encoding2);
        if (listener) {
          watcher.addListener("change", listener);
        }
        return watcher;
      }
      opendirBase(filename, options2) {
        const link = this.getResolvedLinkOrThrow(filename, "scandir");
        const node2 = link.getNode();
        if (!node2.isDirectory()) throw (0, util_1.createError)(ENOTDIR, "scandir", filename);
        return new Dir_1.Dir(link, options2);
      }
      opendirSync(path2, options2) {
        const opts = (0, options_1.getOpendirOptions)(options2);
        const filename = (0, util_1.pathToFilename)(path2);
        return this.opendirBase(filename, opts);
      }
      opendir(path2, a, b) {
        const [options2, callback] = (0, options_1.getOpendirOptsAndCb)(a, b);
        const filename = (0, util_1.pathToFilename)(path2);
        this.wrapAsync(this.opendirBase, [
          filename,
          options2
        ], callback);
      }
    }
    volume.Volume = Volume;
    Volume.fd = 2147483647;
    function emitStop(self2) {
      self2.emit("stop");
    }
    class StatWatcher extends events_1.EventEmitter {
      constructor(vol) {
        super();
        this.onInterval = () => {
          try {
            const stats = this.vol.statSync(this.filename);
            if (this.hasChanged(stats)) {
              this.emit("change", stats, this.prev);
              this.prev = stats;
            }
          } finally {
            this.loop();
          }
        };
        this.vol = vol;
      }
      loop() {
        this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
      }
      hasChanged(stats) {
        if (stats.mtimeMs > this.prev.mtimeMs) return true;
        if (stats.nlink !== this.prev.nlink) return true;
        return false;
      }
      start(path2, persistent = true, interval = 5007) {
        this.filename = (0, util_1.pathToFilename)(path2);
        this.setTimeout = persistent ? setTimeout.bind(typeof globalThis !== "undefined" ? globalThis : commonjsGlobal) : setTimeoutUnref_1.default;
        this.interval = interval;
        this.prev = this.vol.statSync(this.filename);
        this.loop();
      }
      stop() {
        clearTimeout(this.timeoutRef);
        (0, queueMicrotask_1.default)(() => {
          emitStop.call(this, this);
        });
      }
    }
    volume.StatWatcher = StatWatcher;
    var pool;
    function allocNewPool(poolSize) {
      pool = (0, buffer_1.bufferAllocUnsafe)(poolSize);
      pool.used = 0;
    }
    util2.inherits(FsReadStream, stream_1.Readable);
    volume.ReadStream = FsReadStream;
    function FsReadStream(vol, path2, options2) {
      if (!(this instanceof FsReadStream)) return new FsReadStream(vol, path2, options2);
      this._vol = vol;
      options2 = Object.assign({}, (0, options_1.getOptions)(options2, {}));
      if (options2.highWaterMark === void 0) options2.highWaterMark = 64 * 1024;
      stream_1.Readable.call(this, options2);
      this.path = (0, util_1.pathToFilename)(path2);
      this.fd = options2.fd === void 0 ? null : typeof options2.fd !== "number" ? options2.fd.fd : options2.fd;
      this.flags = options2.flags === void 0 ? "r" : options2.flags;
      this.mode = options2.mode === void 0 ? 438 : options2.mode;
      this.start = options2.start;
      this.end = options2.end;
      this.autoClose = options2.autoClose === void 0 ? true : options2.autoClose;
      this.pos = void 0;
      this.bytesRead = 0;
      if (this.start !== void 0) {
        if (typeof this.start !== "number") {
          throw new TypeError('"start" option must be a Number');
        }
        if (this.end === void 0) {
          this.end = Infinity;
        } else if (typeof this.end !== "number") {
          throw new TypeError('"end" option must be a Number');
        }
        if (this.start > this.end) {
          throw new Error('"start" option must be <= "end" option');
        }
        this.pos = this.start;
      }
      if (typeof this.fd !== "number") this.open();
      this.on("end", function() {
        if (this.autoClose) {
          if (this.destroy) this.destroy();
        }
      });
    }
    FsReadStream.prototype.open = function() {
      var self2 = this;
      this._vol.open(this.path, this.flags, this.mode, (er, fd) => {
        if (er) {
          if (self2.autoClose) {
            if (self2.destroy) self2.destroy();
          }
          self2.emit("error", er);
          return;
        }
        self2.fd = fd;
        self2.emit("open", fd);
        self2.read();
      });
    };
    FsReadStream.prototype._read = function(n) {
      if (typeof this.fd !== "number") {
        return this.once("open", function() {
          this._read(n);
        });
      }
      if (this.destroyed) return;
      if (!pool || pool.length - pool.used < kMinPoolSpace) {
        allocNewPool(this._readableState.highWaterMark);
      }
      var thisPool = pool;
      var toRead = Math.min(pool.length - pool.used, n);
      var start = pool.used;
      if (this.pos !== void 0) toRead = Math.min(this.end - this.pos + 1, toRead);
      if (toRead <= 0) return this.push(null);
      var self2 = this;
      this._vol.read(this.fd, pool, pool.used, toRead, this.pos, onread);
      if (this.pos !== void 0) this.pos += toRead;
      pool.used += toRead;
      function onread(er, bytesRead) {
        if (er) {
          if (self2.autoClose && self2.destroy) {
            self2.destroy();
          }
          self2.emit("error", er);
        } else {
          var b = null;
          if (bytesRead > 0) {
            self2.bytesRead += bytesRead;
            b = thisPool.slice(start, start + bytesRead);
          }
          self2.push(b);
        }
      }
    };
    FsReadStream.prototype._destroy = function(err, cb) {
      this.close((err2) => {
        cb(err || err2);
      });
    };
    FsReadStream.prototype.close = function(cb) {
      var _a;
      if (cb) this.once("close", cb);
      if (this.closed || typeof this.fd !== "number") {
        if (typeof this.fd !== "number") {
          this.once("open", closeOnOpen);
          return;
        }
        return (0, queueMicrotask_1.default)(() => this.emit("close"));
      }
      if (typeof ((_a = this._readableState) === null || _a === void 0 ? void 0 : _a.closed) === "boolean") {
        this._readableState.closed = true;
      } else {
        this.closed = true;
      }
      this._vol.close(this.fd, (er) => {
        if (er) this.emit("error", er);
        else this.emit("close");
      });
      this.fd = null;
    };
    function closeOnOpen(fd) {
      this.close();
    }
    util2.inherits(FsWriteStream, stream_1.Writable);
    volume.WriteStream = FsWriteStream;
    function FsWriteStream(vol, path2, options2) {
      if (!(this instanceof FsWriteStream)) return new FsWriteStream(vol, path2, options2);
      this._vol = vol;
      options2 = Object.assign({}, (0, options_1.getOptions)(options2, {}));
      stream_1.Writable.call(this, options2);
      this.path = (0, util_1.pathToFilename)(path2);
      this.fd = options2.fd === void 0 ? null : typeof options2.fd !== "number" ? options2.fd.fd : options2.fd;
      this.flags = options2.flags === void 0 ? "w" : options2.flags;
      this.mode = options2.mode === void 0 ? 438 : options2.mode;
      this.start = options2.start;
      this.autoClose = options2.autoClose === void 0 ? true : !!options2.autoClose;
      this.pos = void 0;
      this.bytesWritten = 0;
      this.pending = true;
      if (this.start !== void 0) {
        if (typeof this.start !== "number") {
          throw new TypeError('"start" option must be a Number');
        }
        if (this.start < 0) {
          throw new Error('"start" must be >= zero');
        }
        this.pos = this.start;
      }
      if (options2.encoding) this.setDefaultEncoding(options2.encoding);
      if (typeof this.fd !== "number") this.open();
      this.once("finish", function() {
        if (this.autoClose) {
          this.close();
        }
      });
    }
    FsWriteStream.prototype.open = function() {
      this._vol.open(this.path, this.flags, this.mode, (function(er, fd) {
        if (er) {
          if (this.autoClose && this.destroy) {
            this.destroy();
          }
          this.emit("error", er);
          return;
        }
        this.fd = fd;
        this.pending = false;
        this.emit("open", fd);
      }).bind(this));
    };
    FsWriteStream.prototype._write = function(data, encoding2, cb) {
      if (!(data instanceof buffer_1.Buffer || data instanceof Uint8Array)) return this.emit("error", new Error("Invalid data"));
      if (typeof this.fd !== "number") {
        return this.once("open", function() {
          this._write(data, encoding2, cb);
        });
      }
      var self2 = this;
      this._vol.write(this.fd, data, 0, data.length, this.pos, (er, bytes) => {
        if (er) {
          if (self2.autoClose && self2.destroy) {
            self2.destroy();
          }
          return cb(er);
        }
        self2.bytesWritten += bytes;
        cb();
      });
      if (this.pos !== void 0) this.pos += data.length;
    };
    FsWriteStream.prototype._writev = function(data, cb) {
      if (typeof this.fd !== "number") {
        return this.once("open", function() {
          this._writev(data, cb);
        });
      }
      const self2 = this;
      const len = data.length;
      const chunks = new Array(len);
      var size = 0;
      for (var i = 0; i < len; i++) {
        var chunk = data[i].chunk;
        chunks[i] = chunk;
        size += chunk.length;
      }
      const buf = buffer_1.Buffer.concat(chunks);
      this._vol.write(this.fd, buf, 0, buf.length, this.pos, (er, bytes) => {
        if (er) {
          if (self2.destroy) self2.destroy();
          return cb(er);
        }
        self2.bytesWritten += bytes;
        cb();
      });
      if (this.pos !== void 0) this.pos += size;
    };
    FsWriteStream.prototype.close = function(cb) {
      var _a;
      if (cb) this.once("close", cb);
      if (this.closed || typeof this.fd !== "number") {
        if (typeof this.fd !== "number") {
          this.once("open", closeOnOpen);
          return;
        }
        return (0, queueMicrotask_1.default)(() => this.emit("close"));
      }
      if (typeof ((_a = this._writableState) === null || _a === void 0 ? void 0 : _a.closed) === "boolean") {
        this._writableState.closed = true;
      } else {
        this.closed = true;
      }
      this._vol.close(this.fd, (er) => {
        if (er) this.emit("error", er);
        else this.emit("close");
      });
      this.fd = null;
    };
    FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy;
    FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
    class FSWatcher extends events_1.EventEmitter {
      constructor(vol) {
        super();
        this._filename = "";
        this._filenameEncoded = "";
        this._recursive = false;
        this._encoding = encoding_1.ENCODING_UTF8;
        this._listenerRemovers = /* @__PURE__ */ new Map();
        this._onParentChild = (link) => {
          if (link.getName() === this._getName()) {
            this._emit("rename");
          }
        };
        this._emit = (type2) => {
          this.emit("change", type2, this._filenameEncoded);
        };
        this._persist = () => {
          this._timer = setTimeout(this._persist, 1e6);
        };
        this._vol = vol;
      }
      _getName() {
        return this._steps[this._steps.length - 1];
      }
      start(path2, persistent = true, recursive = false, encoding2 = encoding_1.ENCODING_UTF8) {
        this._filename = (0, util_1.pathToFilename)(path2);
        this._steps = filenameToSteps(this._filename);
        this._filenameEncoded = (0, encoding_1.strToEncoding)(this._filename);
        this._recursive = recursive;
        this._encoding = encoding2;
        try {
          this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
        } catch (err) {
          const error = new Error(`watch ${this._filename} ${err.code}`);
          error.code = err.code;
          error.errno = err.code;
          throw error;
        }
        const watchLinkNodeChanged = (link) => {
          var _a;
          const filepath = link.getPath();
          const node2 = link.getNode();
          const onNodeChange = () => {
            let filename = relative(this._filename, filepath);
            if (!filename) {
              filename = this._getName();
            }
            return this.emit("change", "change", filename);
          };
          node2.on("change", onNodeChange);
          const removers = (_a = this._listenerRemovers.get(node2.ino)) !== null && _a !== void 0 ? _a : [];
          removers.push(() => node2.removeListener("change", onNodeChange));
          this._listenerRemovers.set(node2.ino, removers);
        };
        const watchLinkChildrenChanged = (link) => {
          var _a;
          const node2 = link.getNode();
          const onLinkChildAdd = (l) => {
            this.emit("change", "rename", relative(this._filename, l.getPath()));
            setTimeout(() => {
              watchLinkNodeChanged(l);
              watchLinkChildrenChanged(l);
            });
          };
          const onLinkChildDelete = (l) => {
            const removeLinkNodeListeners = (curLink) => {
              const ino = curLink.getNode().ino;
              const removers2 = this._listenerRemovers.get(ino);
              if (removers2) {
                removers2.forEach((r) => r());
                this._listenerRemovers.delete(ino);
              }
              for (const [name, childLink] of curLink.children.entries()) {
                if (childLink && name !== "." && name !== "..") {
                  removeLinkNodeListeners(childLink);
                }
              }
            };
            removeLinkNodeListeners(l);
            this.emit("change", "rename", relative(this._filename, l.getPath()));
          };
          for (const [name, childLink] of link.children.entries()) {
            if (childLink && name !== "." && name !== "..") {
              watchLinkNodeChanged(childLink);
            }
          }
          link.on("child:add", onLinkChildAdd);
          link.on("child:delete", onLinkChildDelete);
          const removers = (_a = this._listenerRemovers.get(node2.ino)) !== null && _a !== void 0 ? _a : [];
          removers.push(() => {
            link.removeListener("child:add", onLinkChildAdd);
            link.removeListener("child:delete", onLinkChildDelete);
          });
          if (recursive) {
            for (const [name, childLink] of link.children.entries()) {
              if (childLink && name !== "." && name !== "..") {
                watchLinkChildrenChanged(childLink);
              }
            }
          }
        };
        watchLinkNodeChanged(this._link);
        watchLinkChildrenChanged(this._link);
        const parent = this._link.parent;
        if (parent) {
          parent.setMaxListeners(parent.getMaxListeners() + 1);
          parent.on("child:delete", this._onParentChild);
        }
        if (persistent) this._persist();
      }
      close() {
        clearTimeout(this._timer);
        this._listenerRemovers.forEach((removers) => {
          removers.forEach((r) => r());
        });
        this._listenerRemovers.clear();
        const parent = this._link.parent;
        if (parent) {
          parent.removeListener("child:delete", this._onParentChild);
        }
      }
    }
    volume.FSWatcher = FSWatcher;
    return volume;
  }
  var fsSynchronousApiList = {};
  var hasRequiredFsSynchronousApiList;
  function requireFsSynchronousApiList() {
    if (hasRequiredFsSynchronousApiList) return fsSynchronousApiList;
    hasRequiredFsSynchronousApiList = 1;
    Object.defineProperty(fsSynchronousApiList, "__esModule", {
      value: true
    });
    fsSynchronousApiList.fsSynchronousApiList = void 0;
    fsSynchronousApiList.fsSynchronousApiList = [
      "accessSync",
      "appendFileSync",
      "chmodSync",
      "chownSync",
      "closeSync",
      "copyFileSync",
      "existsSync",
      "fchmodSync",
      "fchownSync",
      "fdatasyncSync",
      "fstatSync",
      "fsyncSync",
      "ftruncateSync",
      "futimesSync",
      "lchmodSync",
      "lchownSync",
      "linkSync",
      "lstatSync",
      "mkdirSync",
      "mkdtempSync",
      "openSync",
      "readdirSync",
      "readFileSync",
      "readlinkSync",
      "readSync",
      "readvSync",
      "realpathSync",
      "renameSync",
      "rmdirSync",
      "rmSync",
      "statSync",
      "symlinkSync",
      "truncateSync",
      "unlinkSync",
      "utimesSync",
      "lutimesSync",
      "writeFileSync",
      "writeSync",
      "writevSync"
    ];
    return fsSynchronousApiList;
  }
  var fsCallbackApiList = {};
  var hasRequiredFsCallbackApiList;
  function requireFsCallbackApiList() {
    if (hasRequiredFsCallbackApiList) return fsCallbackApiList;
    hasRequiredFsCallbackApiList = 1;
    Object.defineProperty(fsCallbackApiList, "__esModule", {
      value: true
    });
    fsCallbackApiList.fsCallbackApiList = void 0;
    fsCallbackApiList.fsCallbackApiList = [
      "access",
      "appendFile",
      "chmod",
      "chown",
      "close",
      "copyFile",
      "createReadStream",
      "createWriteStream",
      "exists",
      "fchmod",
      "fchown",
      "fdatasync",
      "fstat",
      "fsync",
      "ftruncate",
      "futimes",
      "lchmod",
      "lchown",
      "link",
      "lstat",
      "mkdir",
      "mkdtemp",
      "open",
      "read",
      "readv",
      "readdir",
      "readFile",
      "readlink",
      "realpath",
      "rename",
      "rm",
      "rmdir",
      "stat",
      "symlink",
      "truncate",
      "unlink",
      "unwatchFile",
      "utimes",
      "lutimes",
      "watch",
      "watchFile",
      "write",
      "writev",
      "writeFile"
    ];
    return fsCallbackApiList;
  }
  var hasRequiredLib;
  requireLib = function() {
    if (hasRequiredLib) return lib$1.exports;
    hasRequiredLib = 1;
    (function(module, exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.memfs = exports.fs = exports.vol = exports.Volume = void 0;
      exports.createFsFromVolume = createFsFromVolume;
      const Stats_1 = requireStats();
      const Dirent_1 = requireDirent();
      const volume_1 = requireVolume();
      Object.defineProperty(exports, "Volume", {
        enumerable: true,
        get: function() {
          return volume_1.Volume;
        }
      });
      const constants_1 = requireConstants$1();
      const fsSynchronousApiList_1 = requireFsSynchronousApiList();
      const fsCallbackApiList_1 = requireFsCallbackApiList();
      const { F_OK, R_OK, W_OK, X_OK } = constants_1.constants;
      exports.vol = new volume_1.Volume();
      function createFsFromVolume(vol) {
        const fs = {
          F_OK,
          R_OK,
          W_OK,
          X_OK,
          constants: constants_1.constants,
          Stats: Stats_1.default,
          Dirent: Dirent_1.default
        };
        for (const method of fsSynchronousApiList_1.fsSynchronousApiList) if (typeof vol[method] === "function") fs[method] = vol[method].bind(vol);
        for (const method of fsCallbackApiList_1.fsCallbackApiList) if (typeof vol[method] === "function") fs[method] = vol[method].bind(vol);
        fs.StatWatcher = vol.StatWatcher;
        fs.FSWatcher = vol.FSWatcher;
        fs.WriteStream = vol.WriteStream;
        fs.ReadStream = vol.ReadStream;
        fs.promises = vol.promises;
        fs._toUnixTimestamp = volume_1.toUnixTimestamp;
        fs.__vol = vol;
        return fs;
      }
      exports.fs = createFsFromVolume(exports.vol);
      const memfs = (json = {}, cwd = "/") => {
        const vol = volume_1.Volume.fromNestedJSON(json, cwd);
        const fs = createFsFromVolume(vol);
        return {
          fs,
          vol
        };
      };
      exports.memfs = memfs;
      module.exports = Object.assign(Object.assign({}, module.exports), exports.fs);
      module.exports.semantic = true;
    })(lib$1, lib$1.exports);
    return lib$1.exports;
  };
  var previousMap;
  var hasRequiredPreviousMap;
  function requirePreviousMap() {
    if (hasRequiredPreviousMap) return previousMap;
    hasRequiredPreviousMap = 1;
    let { existsSync, readFileSync } = requireLib();
    let { dirname, join } = requirePathBrowserify();
    let { SourceMapConsumer, SourceMapGenerator } = require$$1$1;
    function fromBase64(str) {
      if (Buffer) {
        return Buffer.from(str, "base64").toString();
      } else {
        return window.atob(str);
      }
    }
    class PreviousMap {
      constructor(css, opts) {
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : void 0;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) {
          this.mapFile = opts.from;
        }
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
      }
      consumer() {
        if (!this.consumerCache) {
          this.consumerCache = new SourceMapConsumer(this.text);
        }
        return this.consumerCache;
      }
      decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri2 = /^data:application\/json,/;
        let uriMatch = text.match(charsetUri) || text.match(uri2);
        if (uriMatch) {
          return decodeURIComponent(text.substr(uriMatch[0].length));
        }
        let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
        if (baseUriMatch) {
          return fromBase64(text.substr(baseUriMatch[0].length));
        }
        let encoding2 = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding2);
      }
      getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
      }
      isMap(map) {
        if (typeof map !== "object") return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
      }
      loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/g);
        if (!comments) return;
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) {
          this.annotation = this.getAnnotationURL(css.substring(start, end));
        }
      }
      loadFile(path2) {
        this.root = dirname(path2);
        if (existsSync(path2)) {
          this.mapFile = path2;
          return readFileSync(path2, "utf-8").toString().trim();
        }
      }
      loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
          if (typeof prev === "string") {
            return prev;
          } else if (typeof prev === "function") {
            let prevPath = prev(file);
            if (prevPath) {
              let map = this.loadFile(prevPath);
              if (!map) {
                throw new Error("Unable to load previous source map: " + prevPath.toString());
              }
              return map;
            }
          } else if (prev instanceof SourceMapConsumer) {
            return SourceMapGenerator.fromSourceMap(prev).toString();
          } else if (prev instanceof SourceMapGenerator) {
            return prev.toString();
          } else if (this.isMap(prev)) {
            return JSON.stringify(prev);
          } else {
            throw new Error("Unsupported previous source map format: " + prev.toString());
          }
        } else if (this.inline) {
          return this.decodeInline(this.annotation);
        } else if (this.annotation) {
          let map = this.annotation;
          if (file) map = join(dirname(file), map);
          return this.loadFile(map);
        }
      }
      startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
      }
      withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
      }
    }
    previousMap = PreviousMap;
    PreviousMap.default = PreviousMap;
    return previousMap;
  }
  var input;
  var hasRequiredInput;
  function requireInput() {
    if (hasRequiredInput) return input;
    hasRequiredInput = 1;
    let { nanoid } = requireNonSecure();
    let { isAbsolute, resolve: resolve2 } = requirePathBrowserify();
    let { SourceMapConsumer, SourceMapGenerator } = require$$1$1;
    let { fileURLToPath: fileURLToPath2, pathToFileURL: pathToFileURL2 } = require$$2;
    let CssSyntaxError = requireCssSyntaxError();
    let PreviousMap = requirePreviousMap();
    let terminalHighlight = require$$1$1;
    let fromOffsetCache = Symbol("fromOffsetCache");
    let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    let pathAvailable = Boolean(resolve2 && isAbsolute);
    class Input {
      get from() {
        return this.file || this.id;
      }
      constructor(css, opts = {}) {
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
          throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
          this.hasBOM = true;
          this.css = this.css.slice(1);
        } else {
          this.hasBOM = false;
        }
        this.document = this.css;
        if (opts.document) this.document = opts.document.toString();
        if (opts.from) {
          if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
            this.file = opts.from;
          } else {
            this.file = resolve2(opts.from);
          }
        }
        if (pathAvailable && sourceMapAvailable) {
          let map = new PreviousMap(this.css, opts);
          if (map.text) {
            this.map = map;
            let file = map.consumer().file;
            if (!this.file && file) this.file = this.mapResolve(file);
          }
        }
        if (!this.file) {
          this.id = "<input css " + nanoid(6) + ">";
        }
        if (this.map) this.map.file = this.from;
      }
      error(message, line, column, opts = {}) {
        let endColumn, endLine, result2;
        if (line && typeof line === "object") {
          let start = line;
          let end = column;
          if (typeof start.offset === "number") {
            let pos = this.fromOffset(start.offset);
            line = pos.line;
            column = pos.col;
          } else {
            line = start.line;
            column = start.column;
          }
          if (typeof end.offset === "number") {
            let pos = this.fromOffset(end.offset);
            endLine = pos.line;
            endColumn = pos.col;
          } else {
            endLine = end.line;
            endColumn = end.column;
          }
        } else if (!column) {
          let pos = this.fromOffset(line);
          line = pos.line;
          column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
          result2 = new CssSyntaxError(message, origin.endLine === void 0 ? origin.line : {
            column: origin.column,
            line: origin.line
          }, origin.endLine === void 0 ? origin.column : {
            column: origin.endColumn,
            line: origin.endLine
          }, origin.source, origin.file, opts.plugin);
        } else {
          result2 = new CssSyntaxError(message, endLine === void 0 ? line : {
            column,
            line
          }, endLine === void 0 ? column : {
            column: endColumn,
            line: endLine
          }, this.css, this.file, opts.plugin);
        }
        result2.input = {
          column,
          endColumn,
          endLine,
          line,
          source: this.css
        };
        if (this.file) {
          if (pathToFileURL2) {
            result2.input.url = pathToFileURL2(this.file).toString();
          }
          result2.input.file = this.file;
        }
        return result2;
      }
      fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
          let lines = this.css.split("\n");
          lineToIndex = new Array(lines.length);
          let prevIndex = 0;
          for (let i = 0, l = lines.length; i < l; i++) {
            lineToIndex[i] = prevIndex;
            prevIndex += lines[i].length + 1;
          }
          this[fromOffsetCache] = lineToIndex;
        } else {
          lineToIndex = this[fromOffsetCache];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min2 = 0;
        if (offset >= lastLine) {
          min2 = lineToIndex.length - 1;
        } else {
          let max2 = lineToIndex.length - 2;
          let mid;
          while (min2 < max2) {
            mid = min2 + (max2 - min2 >> 1);
            if (offset < lineToIndex[mid]) {
              max2 = mid - 1;
            } else if (offset >= lineToIndex[mid + 1]) {
              min2 = mid + 1;
            } else {
              min2 = mid;
              break;
            }
          }
        }
        return {
          col: offset - lineToIndex[min2] + 1,
          line: min2 + 1
        };
      }
      mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
          return file;
        }
        return resolve2(this.map.consumer().sourceRoot || this.map.root || ".", file);
      }
      origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
          column,
          line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === "number") {
          to = consumer.originalPositionFor({
            column: endColumn,
            line: endLine
          });
        }
        let fromUrl;
        if (isAbsolute(from.source)) {
          fromUrl = pathToFileURL2(from.source);
        } else {
          fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL2(this.map.mapFile));
        }
        let result2 = {
          column: from.column,
          endColumn: to && to.column,
          endLine: to && to.line,
          line: from.line,
          url: fromUrl.toString()
        };
        if (fromUrl.protocol === "file:") {
          if (fileURLToPath2) {
            result2.file = fileURLToPath2(fromUrl);
          } else {
            throw new Error(`file: protocol is not available in this PostCSS build`);
          }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result2.source = source;
        return result2;
      }
      toJSON() {
        let json = {};
        for (let name of [
          "hasBOM",
          "css",
          "file",
          "id"
        ]) {
          if (this[name] != null) {
            json[name] = this[name];
          }
        }
        if (this.map) {
          json.map = {
            ...this.map
          };
          if (json.map.consumerCache) {
            json.map.consumerCache = void 0;
          }
        }
        return json;
      }
    }
    input = Input;
    Input.default = Input;
    if (terminalHighlight && terminalHighlight.registerInput) {
      terminalHighlight.registerInput(Input);
    }
    return input;
  }
  var root;
  var hasRequiredRoot;
  function requireRoot() {
    if (hasRequiredRoot) return root;
    hasRequiredRoot = 1;
    let Container = requireContainer();
    let LazyResult, Processor;
    class Root extends Container {
      constructor(defaults) {
        super(defaults);
        this.type = "root";
        if (!this.nodes) this.nodes = [];
      }
      normalize(child, sample, type2) {
        let nodes = super.normalize(child);
        if (sample) {
          if (type2 === "prepend") {
            if (this.nodes.length > 1) {
              sample.raws.before = this.nodes[1].raws.before;
            } else {
              delete sample.raws.before;
            }
          } else if (this.first !== sample) {
            for (let node2 of nodes) {
              node2.raws.before = sample.raws.before;
            }
          }
        }
        return nodes;
      }
      removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) {
          this.nodes[1].raws.before = this.nodes[index].raws.before;
        }
        return super.removeChild(child);
      }
      toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
      }
    }
    Root.registerLazyResult = (dependant) => {
      LazyResult = dependant;
    };
    Root.registerProcessor = (dependant) => {
      Processor = dependant;
    };
    root = Root;
    Root.default = Root;
    Container.registerRoot(Root);
    return root;
  }
  var list_1;
  var hasRequiredList;
  function requireList() {
    if (hasRequiredList) return list_1;
    hasRequiredList = 1;
    let list = {
      comma(string) {
        return list.split(string, [
          ","
        ], true);
      },
      space(string) {
        let spaces = [
          " ",
          "\n",
          "	"
        ];
        return list.split(string, spaces);
      },
      split(string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = "";
        let escape2 = false;
        for (let letter of string) {
          if (escape2) {
            escape2 = false;
          } else if (letter === "\\") {
            escape2 = true;
          } else if (inQuote) {
            if (letter === prevQuote) {
              inQuote = false;
            }
          } else if (letter === '"' || letter === "'") {
            inQuote = true;
            prevQuote = letter;
          } else if (letter === "(") {
            func += 1;
          } else if (letter === ")") {
            if (func > 0) func -= 1;
          } else if (func === 0) {
            if (separators.includes(letter)) split = true;
          }
          if (split) {
            if (current !== "") array.push(current.trim());
            current = "";
            split = false;
          } else {
            current += letter;
          }
        }
        if (last || current !== "") array.push(current.trim());
        return array;
      }
    };
    list_1 = list;
    list.default = list;
    return list_1;
  }
  var rule;
  var hasRequiredRule;
  function requireRule() {
    if (hasRequiredRule) return rule;
    hasRequiredRule = 1;
    let Container = requireContainer();
    let list = requireList();
    class Rule extends Container {
      get selectors() {
        return list.comma(this.selector);
      }
      set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep);
      }
      constructor(defaults) {
        super(defaults);
        this.type = "rule";
        if (!this.nodes) this.nodes = [];
      }
    }
    rule = Rule;
    Rule.default = Rule;
    Container.registerRule(Rule);
    return rule;
  }
  var fromJSON_1;
  var hasRequiredFromJSON;
  function requireFromJSON() {
    if (hasRequiredFromJSON) return fromJSON_1;
    hasRequiredFromJSON = 1;
    let AtRule = requireAtRule();
    let Comment = requireComment();
    let Declaration = requireDeclaration();
    let Input = requireInput();
    let PreviousMap = requirePreviousMap();
    let Root = requireRoot();
    let Rule = requireRule();
    function fromJSON(json, inputs) {
      if (Array.isArray(json)) return json.map((n) => fromJSON(n));
      let { inputs: ownInputs, ...defaults } = json;
      if (ownInputs) {
        inputs = [];
        for (let input2 of ownInputs) {
          let inputHydrated = {
            ...input2,
            __proto__: Input.prototype
          };
          if (inputHydrated.map) {
            inputHydrated.map = {
              ...inputHydrated.map,
              __proto__: PreviousMap.prototype
            };
          }
          inputs.push(inputHydrated);
        }
      }
      if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n) => fromJSON(n, inputs));
      }
      if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
          defaults.source.input = inputs[inputId];
        }
      }
      if (defaults.type === "root") {
        return new Root(defaults);
      } else if (defaults.type === "decl") {
        return new Declaration(defaults);
      } else if (defaults.type === "rule") {
        return new Rule(defaults);
      } else if (defaults.type === "comment") {
        return new Comment(defaults);
      } else if (defaults.type === "atrule") {
        return new AtRule(defaults);
      } else {
        throw new Error("Unknown node type: " + json.type);
      }
    }
    fromJSON_1 = fromJSON;
    fromJSON.default = fromJSON;
    return fromJSON_1;
  }
  var mapGenerator;
  var hasRequiredMapGenerator;
  function requireMapGenerator() {
    if (hasRequiredMapGenerator) return mapGenerator;
    hasRequiredMapGenerator = 1;
    let { dirname, relative, resolve: resolve2, sep } = requirePathBrowserify();
    let { SourceMapConsumer, SourceMapGenerator } = require$$1$1;
    let { pathToFileURL: pathToFileURL2 } = require$$2;
    let Input = requireInput();
    let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    let pathAvailable = Boolean(dirname && resolve2 && relative && sep);
    class MapGenerator {
      constructor(stringify, root2, opts, cssString) {
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root2;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = /* @__PURE__ */ new Map();
        this.memoizedPaths = /* @__PURE__ */ new Map();
        this.memoizedURLs = /* @__PURE__ */ new Map();
      }
      addAnnotation() {
        let content;
        if (this.isInline()) {
          content = "data:application/json;base64," + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === "string") {
          content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === "function") {
          content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
          content = this.outputFile() + ".map";
        }
        let eol = "\n";
        if (this.css.includes("\r\n")) eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
      }
      applyPrevMaps() {
        for (let prev of this.previous()) {
          let from = this.toUrl(this.path(prev.file));
          let root2 = prev.root || dirname(prev.file);
          let map;
          if (this.mapOpts.sourcesContent === false) {
            map = new SourceMapConsumer(prev.text);
            if (map.sourcesContent) {
              map.sourcesContent = null;
            }
          } else {
            map = prev.consumer();
          }
          this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
        }
      }
      clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
          let node2;
          for (let i = this.root.nodes.length - 1; i >= 0; i--) {
            node2 = this.root.nodes[i];
            if (node2.type !== "comment") continue;
            if (node2.text.startsWith("# sourceMappingURL=")) {
              this.root.removeChild(i);
            }
          }
        } else if (this.css) {
          this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "");
        }
      }
      generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) {
          return this.generateMap();
        } else {
          let result2 = "";
          this.stringify(this.root, (i) => {
            result2 += i;
          });
          return [
            result2
          ];
        }
      }
      generateMap() {
        if (this.root) {
          this.generateString();
        } else if (this.previous().length === 1) {
          let prev = this.previous()[0].consumer();
          prev.file = this.outputFile();
          this.map = SourceMapGenerator.fromSourceMap(prev, {
            ignoreInvalidMapping: true
          });
        } else {
          this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
          });
          this.map.addMapping({
            generated: {
              column: 0,
              line: 1
            },
            original: {
              column: 0,
              line: 1
            },
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
          });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) {
          return [
            this.css
          ];
        } else {
          return [
            this.css,
            this.map
          ];
        }
      }
      generateString() {
        this.css = "";
        this.map = new SourceMapGenerator({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
          generated: {
            column: 0,
            line: 0
          },
          original: {
            column: 0,
            line: 0
          },
          source: ""
        };
        let last, lines;
        this.stringify(this.root, (str, node2, type2) => {
          this.css += str;
          if (node2 && type2 !== "end") {
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            if (node2.source && node2.source.start) {
              mapping.source = this.sourcePath(node2);
              mapping.original.line = node2.source.start.line;
              mapping.original.column = node2.source.start.column - 1;
              this.map.addMapping(mapping);
            } else {
              mapping.source = noSource;
              mapping.original.line = 1;
              mapping.original.column = 0;
              this.map.addMapping(mapping);
            }
          }
          lines = str.match(/\n/g);
          if (lines) {
            line += lines.length;
            last = str.lastIndexOf("\n");
            column = str.length - last;
          } else {
            column += str.length;
          }
          if (node2 && type2 !== "start") {
            let p = node2.parent || {
              raws: {}
            };
            let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
            if (!childless || node2 !== p.last || p.raws.semicolon) {
              if (node2.source && node2.source.end) {
                mapping.source = this.sourcePath(node2);
                mapping.original.line = node2.source.end.line;
                mapping.original.column = node2.source.end.column - 1;
                mapping.generated.line = line;
                mapping.generated.column = column - 2;
                this.map.addMapping(mapping);
              } else {
                mapping.source = noSource;
                mapping.original.line = 1;
                mapping.original.column = 0;
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                this.map.addMapping(mapping);
              }
            }
          }
        });
      }
      isAnnotation() {
        if (this.isInline()) {
          return true;
        }
        if (typeof this.mapOpts.annotation !== "undefined") {
          return this.mapOpts.annotation;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.annotation);
        }
        return true;
      }
      isInline() {
        if (typeof this.mapOpts.inline !== "undefined") {
          return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) {
          return false;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.inline);
        }
        return true;
      }
      isMap() {
        if (typeof this.opts.map !== "undefined") {
          return !!this.opts.map;
        }
        return this.previous().length > 0;
      }
      isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") {
          return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.withContent());
        }
        return true;
      }
      outputFile() {
        if (this.opts.to) {
          return this.path(this.opts.to);
        } else if (this.opts.from) {
          return this.path(this.opts.from);
        } else {
          return "to.css";
        }
      }
      path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") {
          from = dirname(resolve2(from, this.mapOpts.annotation));
        }
        let path2 = relative(from, file);
        this.memoizedPaths.set(file, path2);
        return path2;
      }
      previous() {
        if (!this.previousMaps) {
          this.previousMaps = [];
          if (this.root) {
            this.root.walk((node2) => {
              if (node2.source && node2.source.input.map) {
                let map = node2.source.input.map;
                if (!this.previousMaps.includes(map)) {
                  this.previousMaps.push(map);
                }
              }
            });
          } else {
            let input2 = new Input(this.originalCSS, this.opts);
            if (input2.map) this.previousMaps.push(input2.map);
          }
        }
        return this.previousMaps;
      }
      setSourcesContent() {
        let already = {};
        if (this.root) {
          this.root.walk((node2) => {
            if (node2.source) {
              let from = node2.source.input.from;
              if (from && !already[from]) {
                already[from] = true;
                let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                this.map.setSourceContent(fromUrl, node2.source.input.css);
              }
            }
          });
        } else if (this.css) {
          let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
          this.map.setSourceContent(from, this.css);
        }
      }
      sourcePath(node2) {
        if (this.mapOpts.from) {
          return this.toUrl(this.mapOpts.from);
        } else if (this.usesFileUrls) {
          return this.toFileUrl(node2.source.input.from);
        } else {
          return this.toUrl(this.path(node2.source.input.from));
        }
      }
      toBase64(str) {
        if (Buffer) {
          return Buffer.from(str).toString("base64");
        } else {
          return window.btoa(unescape(encodeURIComponent(str)));
        }
      }
      toFileUrl(path2) {
        let cached = this.memoizedFileURLs.get(path2);
        if (cached) return cached;
        if (pathToFileURL2) {
          let fileURL = pathToFileURL2(path2).toString();
          this.memoizedFileURLs.set(path2, fileURL);
          return fileURL;
        } else {
          throw new Error("`map.absolute` option is not available in this PostCSS build");
        }
      }
      toUrl(path2) {
        let cached = this.memoizedURLs.get(path2);
        if (cached) return cached;
        if (sep === "\\") {
          path2 = path2.replace(/\\/g, "/");
        }
        let url2 = encodeURI(path2).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path2, url2);
        return url2;
      }
    }
    mapGenerator = MapGenerator;
    return mapGenerator;
  }
  var tokenize;
  var hasRequiredTokenize;
  function requireTokenize() {
    if (hasRequiredTokenize) return tokenize;
    hasRequiredTokenize = 1;
    const SINGLE_QUOTE = "'".charCodeAt(0);
    const DOUBLE_QUOTE = '"'.charCodeAt(0);
    const BACKSLASH = "\\".charCodeAt(0);
    const SLASH = "/".charCodeAt(0);
    const NEWLINE = "\n".charCodeAt(0);
    const SPACE = " ".charCodeAt(0);
    const FEED = "\f".charCodeAt(0);
    const TAB = "	".charCodeAt(0);
    const CR = "\r".charCodeAt(0);
    const OPEN_SQUARE = "[".charCodeAt(0);
    const CLOSE_SQUARE = "]".charCodeAt(0);
    const OPEN_PARENTHESES = "(".charCodeAt(0);
    const CLOSE_PARENTHESES = ")".charCodeAt(0);
    const OPEN_CURLY = "{".charCodeAt(0);
    const CLOSE_CURLY = "}".charCodeAt(0);
    const SEMICOLON = ";".charCodeAt(0);
    const ASTERISK = "*".charCodeAt(0);
    const COLON = ":".charCodeAt(0);
    const AT = "@".charCodeAt(0);
    const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
    const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
    const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
    const RE_HEX_ESCAPE = /[\da-f]/i;
    tokenize = function tokenizer(input2, options2 = {}) {
      let css = input2.css.valueOf();
      let ignore = options2.ignoreErrors;
      let code, content, escape2, next, quote;
      let currentToken, escaped, escapePos, n, prev;
      let length = css.length;
      let pos = 0;
      let buffer2 = [];
      let returned = [];
      function position() {
        return pos;
      }
      function unclosed(what) {
        throw input2.error("Unclosed " + what, pos);
      }
      function endOfFile() {
        return returned.length === 0 && pos >= length;
      }
      function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch (code) {
          case NEWLINE:
          case SPACE:
          case TAB:
          case CR:
          case FEED: {
            next = pos;
            do {
              next += 1;
              code = css.charCodeAt(next);
            } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
            currentToken = [
              "space",
              css.slice(pos, next)
            ];
            pos = next - 1;
            break;
          }
          case OPEN_SQUARE:
          case CLOSE_SQUARE:
          case OPEN_CURLY:
          case CLOSE_CURLY:
          case COLON:
          case SEMICOLON:
          case CLOSE_PARENTHESES: {
            let controlChar = String.fromCharCode(code);
            currentToken = [
              controlChar,
              controlChar,
              pos
            ];
            break;
          }
          case OPEN_PARENTHESES: {
            prev = buffer2.length ? buffer2.pop()[1] : "";
            n = css.charCodeAt(pos + 1);
            if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
              next = pos;
              do {
                escaped = false;
                next = css.indexOf(")", next + 1);
                if (next === -1) {
                  if (ignore || ignoreUnclosed) {
                    next = pos;
                    break;
                  } else {
                    unclosed("bracket");
                  }
                }
                escapePos = next;
                while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              currentToken = [
                "brackets",
                css.slice(pos, next + 1),
                pos,
                next
              ];
              pos = next;
            } else {
              next = css.indexOf(")", pos + 1);
              content = css.slice(pos, next + 1);
              if (next === -1 || RE_BAD_BRACKET.test(content)) {
                currentToken = [
                  "(",
                  "(",
                  pos
                ];
              } else {
                currentToken = [
                  "brackets",
                  content,
                  pos,
                  next
                ];
                pos = next;
              }
            }
            break;
          }
          case SINGLE_QUOTE:
          case DOUBLE_QUOTE: {
            quote = code === SINGLE_QUOTE ? "'" : '"';
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);
              if (next === -1) {
                if (ignore || ignoreUnclosed) {
                  next = pos + 1;
                  break;
                } else {
                  unclosed("string");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            currentToken = [
              "string",
              css.slice(pos, next + 1),
              pos,
              next
            ];
            pos = next;
            break;
          }
          case AT: {
            RE_AT_END.lastIndex = pos + 1;
            RE_AT_END.test(css);
            if (RE_AT_END.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_AT_END.lastIndex - 2;
            }
            currentToken = [
              "at-word",
              css.slice(pos, next + 1),
              pos,
              next
            ];
            pos = next;
            break;
          }
          case BACKSLASH: {
            next = pos;
            escape2 = true;
            while (css.charCodeAt(next + 1) === BACKSLASH) {
              next += 1;
              escape2 = !escape2;
            }
            code = css.charCodeAt(next + 1);
            if (escape2 && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
              next += 1;
              if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                  next += 1;
                }
                if (css.charCodeAt(next + 1) === SPACE) {
                  next += 1;
                }
              }
            }
            currentToken = [
              "word",
              css.slice(pos, next + 1),
              pos,
              next
            ];
            pos = next;
            break;
          }
          default: {
            if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
              next = css.indexOf("*/", pos + 2) + 1;
              if (next === 0) {
                if (ignore || ignoreUnclosed) {
                  next = css.length;
                } else {
                  unclosed("comment");
                }
              }
              currentToken = [
                "comment",
                css.slice(pos, next + 1),
                pos,
                next
              ];
              pos = next;
            } else {
              RE_WORD_END.lastIndex = pos + 1;
              RE_WORD_END.test(css);
              if (RE_WORD_END.lastIndex === 0) {
                next = css.length - 1;
              } else {
                next = RE_WORD_END.lastIndex - 2;
              }
              currentToken = [
                "word",
                css.slice(pos, next + 1),
                pos,
                next
              ];
              buffer2.push(currentToken);
              pos = next;
            }
            break;
          }
        }
        pos++;
        return currentToken;
      }
      function back(token) {
        returned.push(token);
      }
      return {
        back,
        endOfFile,
        nextToken,
        position
      };
    };
    return tokenize;
  }
  var parser;
  var hasRequiredParser;
  function requireParser() {
    if (hasRequiredParser) return parser;
    hasRequiredParser = 1;
    let AtRule = requireAtRule();
    let Comment = requireComment();
    let Declaration = requireDeclaration();
    let Root = requireRoot();
    let Rule = requireRule();
    let tokenizer = requireTokenize();
    const SAFE_COMMENT_NEIGHBOR = {
      empty: true,
      space: true
    };
    function findLastWithPosition(tokens) {
      for (let i = tokens.length - 1; i >= 0; i--) {
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
      }
    }
    class Parser {
      constructor(input2) {
        this.input = input2;
        this.root = new Root();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
          input: input2,
          start: {
            column: 1,
            line: 1,
            offset: 0
          }
        };
      }
      atrule(token) {
        let node2 = new AtRule();
        node2.name = token[1].slice(1);
        if (node2.name === "") {
          this.unnamedAtrule(node2, token);
        }
        this.init(node2, token[2]);
        let type2;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while (!this.tokenizer.endOfFile()) {
          token = this.tokenizer.nextToken();
          type2 = token[0];
          if (type2 === "(" || type2 === "[") {
            brackets.push(type2 === "(" ? ")" : "]");
          } else if (type2 === "{" && brackets.length > 0) {
            brackets.push("}");
          } else if (type2 === brackets[brackets.length - 1]) {
            brackets.pop();
          }
          if (brackets.length === 0) {
            if (type2 === ";") {
              node2.source.end = this.getPosition(token[2]);
              node2.source.end.offset++;
              this.semicolon = true;
              break;
            } else if (type2 === "{") {
              open = true;
              break;
            } else if (type2 === "}") {
              if (params.length > 0) {
                shift = params.length - 1;
                prev = params[shift];
                while (prev && prev[0] === "space") {
                  prev = params[--shift];
                }
                if (prev) {
                  node2.source.end = this.getPosition(prev[3] || prev[2]);
                  node2.source.end.offset++;
                }
              }
              this.end(token);
              break;
            } else {
              params.push(token);
            }
          } else {
            params.push(token);
          }
          if (this.tokenizer.endOfFile()) {
            last = true;
            break;
          }
        }
        node2.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
          node2.raws.afterName = this.spacesAndCommentsFromStart(params);
          this.raw(node2, "params", params);
          if (last) {
            token = params[params.length - 1];
            node2.source.end = this.getPosition(token[3] || token[2]);
            node2.source.end.offset++;
            this.spaces = node2.raws.between;
            node2.raws.between = "";
          }
        } else {
          node2.raws.afterName = "";
          node2.params = "";
        }
        if (open) {
          node2.nodes = [];
          this.current = node2;
        }
      }
      checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for (let j = colon - 1; j >= 0; j--) {
          token = tokens[j];
          if (token[0] !== "space") {
            founded += 1;
            if (founded === 2) break;
          }
        }
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
      }
      colon(tokens) {
        let brackets = 0;
        let prev, token, type2;
        for (let [i, element] of tokens.entries()) {
          token = element;
          type2 = token[0];
          if (type2 === "(") {
            brackets += 1;
          }
          if (type2 === ")") {
            brackets -= 1;
          }
          if (brackets === 0 && type2 === ":") {
            if (!prev) {
              this.doubleColon(token);
            } else if (prev[0] === "word" && prev[1] === "progid") {
              continue;
            } else {
              return i;
            }
          }
          prev = token;
        }
        return false;
      }
      comment(token) {
        let node2 = new Comment();
        this.init(node2, token[2]);
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
          node2.text = "";
          node2.raws.left = text;
          node2.raws.right = "";
        } else {
          let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
          node2.text = match[2];
          node2.raws.left = match[1];
          node2.raws.right = match[3];
        }
      }
      createTokenizer() {
        this.tokenizer = tokenizer(this.input);
      }
      decl(tokens, customProperty) {
        let node2 = new Declaration();
        this.init(node2, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
          this.semicolon = true;
          tokens.pop();
        }
        node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        node2.source.end.offset++;
        while (tokens[0][0] !== "word") {
          if (tokens.length === 1) this.unknownWord(tokens);
          node2.raws.before += tokens.shift()[1];
        }
        node2.source.start = this.getPosition(tokens[0][2]);
        node2.prop = "";
        while (tokens.length) {
          let type2 = tokens[0][0];
          if (type2 === ":" || type2 === "space" || type2 === "comment") {
            break;
          }
          node2.prop += tokens.shift()[1];
        }
        node2.raws.between = "";
        let token;
        while (tokens.length) {
          token = tokens.shift();
          if (token[0] === ":") {
            node2.raws.between += token[1];
            break;
          } else {
            if (token[0] === "word" && /\w/.test(token[1])) {
              this.unknownWord([
                token
              ]);
            }
            node2.raws.between += token[1];
          }
        }
        if (node2.prop[0] === "_" || node2.prop[0] === "*") {
          node2.raws.before += node2.prop[0];
          node2.prop = node2.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while (tokens.length) {
          next = tokens[0][0];
          if (next !== "space" && next !== "comment") break;
          firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for (let i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];
          if (token[1].toLowerCase() === "!important") {
            node2.important = true;
            let string = this.stringFrom(tokens, i);
            string = this.spacesFromEnd(tokens) + string;
            if (string !== " !important") node2.raws.important = string;
            break;
          } else if (token[1].toLowerCase() === "important") {
            let cache = tokens.slice(0);
            let str = "";
            for (let j = i; j > 0; j--) {
              let type2 = cache[j][0];
              if (str.trim().startsWith("!") && type2 !== "space") {
                break;
              }
              str = cache.pop()[1] + str;
            }
            if (str.trim().startsWith("!")) {
              node2.important = true;
              node2.raws.important = str;
              tokens = cache;
            }
          }
          if (token[0] !== "space" && token[0] !== "comment") {
            break;
          }
        }
        let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
        if (hasWord) {
          node2.raws.between += firstSpaces.map((i) => i[1]).join("");
          firstSpaces = [];
        }
        this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
        if (node2.value.includes(":") && !customProperty) {
          this.checkMissedSemicolon(tokens);
        }
      }
      doubleColon(token) {
        throw this.input.error("Double colon", {
          offset: token[2]
        }, {
          offset: token[2] + token[1].length
        });
      }
      emptyRule(token) {
        let node2 = new Rule();
        this.init(node2, token[2]);
        node2.selector = "";
        node2.raws.between = "";
        this.current = node2;
      }
      end(token) {
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
          this.current.source.end = this.getPosition(token[2]);
          this.current.source.end.offset++;
          this.current = this.current.parent;
        } else {
          this.unexpectedClose(token);
        }
      }
      endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
      }
      freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
          let prev = this.current.nodes[this.current.nodes.length - 1];
          if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
            prev.raws.ownSemicolon = this.spaces;
            this.spaces = "";
            prev.source.end = this.getPosition(token[2]);
            prev.source.end.offset += prev.raws.ownSemicolon.length;
          }
        }
      }
      getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
          column: pos.col,
          line: pos.line,
          offset
        };
      }
      init(node2, offset) {
        this.current.push(node2);
        node2.source = {
          input: this.input,
          start: this.getPosition(offset)
        };
        node2.raws.before = this.spaces;
        this.spaces = "";
        if (node2.type !== "comment") this.semicolon = false;
      }
      other(start) {
        let end = false;
        let type2 = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while (token) {
          type2 = token[0];
          tokens.push(token);
          if (type2 === "(" || type2 === "[") {
            if (!bracket) bracket = token;
            brackets.push(type2 === "(" ? ")" : "]");
          } else if (customProperty && colon && type2 === "{") {
            if (!bracket) bracket = token;
            brackets.push("}");
          } else if (brackets.length === 0) {
            if (type2 === ";") {
              if (colon) {
                this.decl(tokens, customProperty);
                return;
              } else {
                break;
              }
            } else if (type2 === "{") {
              this.rule(tokens);
              return;
            } else if (type2 === "}") {
              this.tokenizer.back(tokens.pop());
              end = true;
              break;
            } else if (type2 === ":") {
              colon = true;
            }
          } else if (type2 === brackets[brackets.length - 1]) {
            brackets.pop();
            if (brackets.length === 0) bracket = null;
          }
          token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
          if (!customProperty) {
            while (tokens.length) {
              token = tokens[tokens.length - 1][0];
              if (token !== "space" && token !== "comment") break;
              this.tokenizer.back(tokens.pop());
            }
          }
          this.decl(tokens, customProperty);
        } else {
          this.unknownWord(tokens);
        }
      }
      parse() {
        let token;
        while (!this.tokenizer.endOfFile()) {
          token = this.tokenizer.nextToken();
          switch (token[0]) {
            case "space":
              this.spaces += token[1];
              break;
            case ";":
              this.freeSemicolon(token);
              break;
            case "}":
              this.end(token);
              break;
            case "comment":
              this.comment(token);
              break;
            case "at-word":
              this.atrule(token);
              break;
            case "{":
              this.emptyRule(token);
              break;
            default:
              this.other(token);
              break;
          }
        }
        this.endFile();
      }
      precheckMissedSemicolon() {
      }
      raw(node2, prop, tokens, customProperty) {
        let token, type2;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for (let i = 0; i < length; i += 1) {
          token = tokens[i];
          type2 = token[0];
          if (type2 === "space" && i === length - 1 && !customProperty) {
            clean = false;
          } else if (type2 === "comment") {
            prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
            next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
            if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
              if (value.slice(-1) === ",") {
                clean = false;
              } else {
                value += token[1];
              }
            } else {
              clean = false;
            }
          } else {
            value += token[1];
          }
        }
        if (!clean) {
          let raw = tokens.reduce((all, i) => all + i[1], "");
          node2.raws[prop] = {
            raw,
            value
          };
        }
        node2[prop] = value;
      }
      rule(tokens) {
        tokens.pop();
        let node2 = new Rule();
        this.init(node2, tokens[0][2]);
        node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node2, "selector", tokens);
        this.current = node2;
      }
      spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space" && lastTokenType !== "comment") break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      }
      spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while (tokens.length) {
          next = tokens[0][0];
          if (next !== "space" && next !== "comment") break;
          spaces += tokens.shift()[1];
        }
        return spaces;
      }
      spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space") break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      }
      stringFrom(tokens, from) {
        let result2 = "";
        for (let i = from; i < tokens.length; i++) {
          result2 += tokens[i][1];
        }
        tokens.splice(from, tokens.length - from);
        return result2;
      }
      unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
      }
      unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", {
          offset: bracket[2]
        }, {
          offset: bracket[2] + 1
        });
      }
      unexpectedClose(token) {
        throw this.input.error("Unexpected }", {
          offset: token[2]
        }, {
          offset: token[2] + 1
        });
      }
      unknownWord(tokens) {
        throw this.input.error("Unknown word " + tokens[0][1], {
          offset: tokens[0][2]
        }, {
          offset: tokens[0][2] + tokens[0][1].length
        });
      }
      unnamedAtrule(node2, token) {
        throw this.input.error("At-rule without name", {
          offset: token[2]
        }, {
          offset: token[2] + token[1].length
        });
      }
    }
    parser = Parser;
    return parser;
  }
  var parse_1;
  var hasRequiredParse;
  function requireParse() {
    if (hasRequiredParse) return parse_1;
    hasRequiredParse = 1;
    let Container = requireContainer();
    let Input = requireInput();
    let Parser = requireParser();
    function parse2(css, opts) {
      let input2 = new Input(css, opts);
      let parser2 = new Parser(input2);
      try {
        parser2.parse();
      } catch (e) {
        throw e;
      }
      return parser2.root;
    }
    parse_1 = parse2;
    parse2.default = parse2;
    Container.registerParse(parse2);
    return parse_1;
  }
  var warning;
  var hasRequiredWarning;
  function requireWarning() {
    if (hasRequiredWarning) return warning;
    hasRequiredWarning = 1;
    class Warning {
      constructor(text, opts = {}) {
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
          let range2 = opts.node.rangeBy(opts);
          this.line = range2.start.line;
          this.column = range2.start.column;
          this.endLine = range2.end.line;
          this.endColumn = range2.end.column;
        }
        for (let opt in opts) this[opt] = opts[opt];
      }
      toString() {
        if (this.node) {
          return this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message;
        }
        if (this.plugin) {
          return this.plugin + ": " + this.text;
        }
        return this.text;
      }
    }
    warning = Warning;
    Warning.default = Warning;
    return warning;
  }
  var result;
  var hasRequiredResult;
  function requireResult() {
    if (hasRequiredResult) return result;
    hasRequiredResult = 1;
    let Warning = requireWarning();
    class Result {
      get content() {
        return this.css;
      }
      constructor(processor2, root2, opts) {
        this.processor = processor2;
        this.messages = [];
        this.root = root2;
        this.opts = opts;
        this.css = void 0;
        this.map = void 0;
      }
      toString() {
        return this.css;
      }
      warn(text, opts = {}) {
        if (!opts.plugin) {
          if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
            opts.plugin = this.lastPlugin.postcssPlugin;
          }
        }
        let warning2 = new Warning(text, opts);
        this.messages.push(warning2);
        return warning2;
      }
      warnings() {
        return this.messages.filter((i) => i.type === "warning");
      }
    }
    result = Result;
    Result.default = Result;
    return result;
  }
  var lazyResult;
  var hasRequiredLazyResult;
  function requireLazyResult() {
    if (hasRequiredLazyResult) return lazyResult;
    hasRequiredLazyResult = 1;
    let Container = requireContainer();
    let Document = requireDocument();
    let MapGenerator = requireMapGenerator();
    let parse2 = requireParse();
    let Result = requireResult();
    let Root = requireRoot();
    let stringify = requireStringify$1();
    let { isClean, my } = requireSymbols();
    const TYPE_TO_CLASS_NAME = {
      atrule: "AtRule",
      comment: "Comment",
      decl: "Declaration",
      document: "Document",
      root: "Root",
      rule: "Rule"
    };
    const PLUGIN_PROPS = {
      AtRule: true,
      AtRuleExit: true,
      Comment: true,
      CommentExit: true,
      Declaration: true,
      DeclarationExit: true,
      Document: true,
      DocumentExit: true,
      Once: true,
      OnceExit: true,
      postcssPlugin: true,
      prepare: true,
      Root: true,
      RootExit: true,
      Rule: true,
      RuleExit: true
    };
    const NOT_VISITORS = {
      Once: true,
      postcssPlugin: true,
      prepare: true
    };
    const CHILDREN = 0;
    function isPromise(obj) {
      return typeof obj === "object" && typeof obj.then === "function";
    }
    function getEvents(node2) {
      let key = false;
      let type2 = TYPE_TO_CLASS_NAME[node2.type];
      if (node2.type === "decl") {
        key = node2.prop.toLowerCase();
      } else if (node2.type === "atrule") {
        key = node2.name.toLowerCase();
      }
      if (key && node2.append) {
        return [
          type2,
          type2 + "-" + key,
          CHILDREN,
          type2 + "Exit",
          type2 + "Exit-" + key
        ];
      } else if (key) {
        return [
          type2,
          type2 + "-" + key,
          type2 + "Exit",
          type2 + "Exit-" + key
        ];
      } else if (node2.append) {
        return [
          type2,
          CHILDREN,
          type2 + "Exit"
        ];
      } else {
        return [
          type2,
          type2 + "Exit"
        ];
      }
    }
    function toStack(node2) {
      let events2;
      if (node2.type === "document") {
        events2 = [
          "Document",
          CHILDREN,
          "DocumentExit"
        ];
      } else if (node2.type === "root") {
        events2 = [
          "Root",
          CHILDREN,
          "RootExit"
        ];
      } else {
        events2 = getEvents(node2);
      }
      return {
        eventIndex: 0,
        events: events2,
        iterator: 0,
        node: node2,
        visitorIndex: 0,
        visitors: []
      };
    }
    function cleanMarks(node2) {
      node2[isClean] = false;
      if (node2.nodes) node2.nodes.forEach((i) => cleanMarks(i));
      return node2;
    }
    let postcss2 = {};
    class LazyResult {
      get content() {
        return this.stringify().content;
      }
      get css() {
        return this.stringify().css;
      }
      get map() {
        return this.stringify().map;
      }
      get messages() {
        return this.sync().messages;
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        return this.sync().root;
      }
      get [Symbol.toStringTag]() {
        return "LazyResult";
      }
      constructor(processor2, css, opts) {
        this.stringified = false;
        this.processed = false;
        let root2;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
          root2 = cleanMarks(css);
        } else if (css instanceof LazyResult || css instanceof Result) {
          root2 = cleanMarks(css.root);
          if (css.map) {
            if (typeof opts.map === "undefined") opts.map = {};
            if (!opts.map.inline) opts.map.inline = false;
            opts.map.prev = css.map;
          }
        } else {
          let parser2 = parse2;
          if (opts.syntax) parser2 = opts.syntax.parse;
          if (opts.parser) parser2 = opts.parser;
          if (parser2.parse) parser2 = parser2.parse;
          try {
            root2 = parser2(css, opts);
          } catch (error) {
            this.processed = true;
            this.error = error;
          }
          if (root2 && !root2[my]) {
            Container.rebuild(root2);
          }
        }
        this.result = new Result(processor2, root2, opts);
        this.helpers = {
          ...postcss2,
          postcss: postcss2,
          result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin) => {
          if (typeof plugin === "object" && plugin.prepare) {
            return {
              ...plugin,
              ...plugin.prepare(this.result)
            };
          } else {
            return plugin;
          }
        });
      }
      async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) {
          this.processing = this.runAsync();
        }
        return this.processing;
      }
      catch(onRejected) {
        return this.async().catch(onRejected);
      }
      finally(onFinally) {
        return this.async().then(onFinally, onFinally);
      }
      getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }
      handleError(error, node2) {
        let plugin = this.result.lastPlugin;
        try {
          if (node2) node2.addToError(error);
          this.error = error;
          if (error.name === "CssSyntaxError" && !error.plugin) {
            error.plugin = plugin.postcssPlugin;
            error.setMessage();
          } else if (plugin.postcssVersion) {
            if (false) ;
          }
        } catch (err) {
          if (console && console.error) console.error(err);
        }
        return error;
      }
      prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type2, cb) => {
          if (!this.listeners[type2]) this.listeners[type2] = [];
          this.listeners[type2].push([
            plugin,
            cb
          ]);
        };
        for (let plugin of this.plugins) {
          if (typeof plugin === "object") {
            for (let event in plugin) {
              if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
              }
              if (!NOT_VISITORS[event]) {
                if (typeof plugin[event] === "object") {
                  for (let filter2 in plugin[event]) {
                    if (filter2 === "*") {
                      add(plugin, event, plugin[event][filter2]);
                    } else {
                      add(plugin, event + "-" + filter2.toLowerCase(), plugin[event][filter2]);
                    }
                  }
                } else if (typeof plugin[event] === "function") {
                  add(plugin, event, plugin[event]);
                }
              }
            }
          }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      async runAsync() {
        this.plugin = 0;
        for (let i = 0; i < this.plugins.length; i++) {
          let plugin = this.plugins[i];
          let promise = this.runOnRoot(plugin);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (error) {
              throw this.handleError(error);
            }
          }
        }
        this.prepareVisitors();
        if (this.hasListener) {
          let root2 = this.result.root;
          while (!root2[isClean]) {
            root2[isClean] = true;
            let stack = [
              toStack(root2)
            ];
            while (stack.length > 0) {
              let promise = this.visitTick(stack);
              if (isPromise(promise)) {
                try {
                  await promise;
                } catch (e) {
                  let node2 = stack[stack.length - 1].node;
                  throw this.handleError(e, node2);
                }
              }
            }
          }
          if (this.listeners.OnceExit) {
            for (let [plugin, visitor] of this.listeners.OnceExit) {
              this.result.lastPlugin = plugin;
              try {
                if (root2.type === "document") {
                  let roots = root2.nodes.map((subRoot) => visitor(subRoot, this.helpers));
                  await Promise.all(roots);
                } else {
                  await visitor(root2, this.helpers);
                }
              } catch (e) {
                throw this.handleError(e);
              }
            }
          }
        }
        this.processed = true;
        return this.stringify();
      }
      runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
          if (typeof plugin === "object" && plugin.Once) {
            if (this.result.root.type === "document") {
              let roots = this.result.root.nodes.map((root2) => plugin.Once(root2, this.helpers));
              if (isPromise(roots[0])) {
                return Promise.all(roots);
              }
              return roots;
            }
            return plugin.Once(this.result.root, this.helpers);
          } else if (typeof plugin === "function") {
            return plugin(this.result.root, this.result);
          }
        } catch (error) {
          throw this.handleError(error);
        }
      }
      stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
      }
      sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) {
          throw this.getAsyncError();
        }
        for (let plugin of this.plugins) {
          let promise = this.runOnRoot(plugin);
          if (isPromise(promise)) {
            throw this.getAsyncError();
          }
        }
        this.prepareVisitors();
        if (this.hasListener) {
          let root2 = this.result.root;
          while (!root2[isClean]) {
            root2[isClean] = true;
            this.walkSync(root2);
          }
          if (this.listeners.OnceExit) {
            if (root2.type === "document") {
              for (let subRoot of root2.nodes) {
                this.visitSync(this.listeners.OnceExit, subRoot);
              }
            } else {
              this.visitSync(this.listeners.OnceExit, root2);
            }
          }
        }
        return this.result;
      }
      then(onFulfilled, onRejected) {
        return this.async().then(onFulfilled, onRejected);
      }
      toString() {
        return this.css;
      }
      visitSync(visitors, node2) {
        for (let [plugin, visitor] of visitors) {
          this.result.lastPlugin = plugin;
          let promise;
          try {
            promise = visitor(node2, this.helpers);
          } catch (e) {
            throw this.handleError(e, node2.proxyOf);
          }
          if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
            return true;
          }
          if (isPromise(promise)) {
            throw this.getAsyncError();
          }
        }
      }
      visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node: node2, visitors } = visit;
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
          stack.pop();
          return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
          let [plugin, visitor] = visitors[visit.visitorIndex];
          visit.visitorIndex += 1;
          if (visit.visitorIndex === visitors.length) {
            visit.visitors = [];
            visit.visitorIndex = 0;
          }
          this.result.lastPlugin = plugin;
          try {
            return visitor(node2.toProxy(), this.helpers);
          } catch (e) {
            throw this.handleError(e, node2);
          }
        }
        if (visit.iterator !== 0) {
          let iterator = visit.iterator;
          let child;
          while (child = node2.nodes[node2.indexes[iterator]]) {
            node2.indexes[iterator] += 1;
            if (!child[isClean]) {
              child[isClean] = true;
              stack.push(toStack(child));
              return;
            }
          }
          visit.iterator = 0;
          delete node2.indexes[iterator];
        }
        let events2 = visit.events;
        while (visit.eventIndex < events2.length) {
          let event = events2[visit.eventIndex];
          visit.eventIndex += 1;
          if (event === CHILDREN) {
            if (node2.nodes && node2.nodes.length) {
              node2[isClean] = true;
              visit.iterator = node2.getIterator();
            }
            return;
          } else if (this.listeners[event]) {
            visit.visitors = this.listeners[event];
            return;
          }
        }
        stack.pop();
      }
      walkSync(node2) {
        node2[isClean] = true;
        let events2 = getEvents(node2);
        for (let event of events2) {
          if (event === CHILDREN) {
            if (node2.nodes) {
              node2.each((child) => {
                if (!child[isClean]) this.walkSync(child);
              });
            }
          } else {
            let visitors = this.listeners[event];
            if (visitors) {
              if (this.visitSync(visitors, node2.toProxy())) return;
            }
          }
        }
      }
      warnings() {
        return this.sync().warnings();
      }
    }
    LazyResult.registerPostcss = (dependant) => {
      postcss2 = dependant;
    };
    lazyResult = LazyResult;
    LazyResult.default = LazyResult;
    Root.registerLazyResult(LazyResult);
    Document.registerLazyResult(LazyResult);
    return lazyResult;
  }
  var noWorkResult;
  var hasRequiredNoWorkResult;
  function requireNoWorkResult() {
    if (hasRequiredNoWorkResult) return noWorkResult;
    hasRequiredNoWorkResult = 1;
    let MapGenerator = requireMapGenerator();
    let parse2 = requireParse();
    const Result = requireResult();
    let stringify = requireStringify$1();
    class NoWorkResult {
      get content() {
        return this.result.css;
      }
      get css() {
        return this.result.css;
      }
      get map() {
        return this.result.map;
      }
      get messages() {
        return [];
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        if (this._root) {
          return this._root;
        }
        let root2;
        let parser2 = parse2;
        try {
          root2 = parser2(this._css, this._opts);
        } catch (error) {
          this.error = error;
        }
        if (this.error) {
          throw this.error;
        } else {
          this._root = root2;
          return root2;
        }
      }
      get [Symbol.toStringTag]() {
        return "NoWorkResult";
      }
      constructor(processor2, css, opts) {
        css = css.toString();
        this.stringified = false;
        this._processor = processor2;
        this._css = css;
        this._opts = opts;
        this._map = void 0;
        let root2;
        let str = stringify;
        this.result = new Result(this._processor, root2, this._opts);
        this.result.css = css;
        let self2 = this;
        Object.defineProperty(this.result, "root", {
          get() {
            return self2.root;
          }
        });
        let map = new MapGenerator(str, root2, this._opts, css);
        if (map.isMap()) {
          let [generatedCSS, generatedMap] = map.generate();
          if (generatedCSS) {
            this.result.css = generatedCSS;
          }
          if (generatedMap) {
            this.result.map = generatedMap;
          }
        } else {
          map.clearAnnotation();
          this.result.css = map.css;
        }
      }
      async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
      }
      catch(onRejected) {
        return this.async().catch(onRejected);
      }
      finally(onFinally) {
        return this.async().then(onFinally, onFinally);
      }
      sync() {
        if (this.error) throw this.error;
        return this.result;
      }
      then(onFulfilled, onRejected) {
        return this.async().then(onFulfilled, onRejected);
      }
      toString() {
        return this._css;
      }
      warnings() {
        return [];
      }
    }
    noWorkResult = NoWorkResult;
    NoWorkResult.default = NoWorkResult;
    return noWorkResult;
  }
  var processor;
  var hasRequiredProcessor;
  function requireProcessor() {
    if (hasRequiredProcessor) return processor;
    hasRequiredProcessor = 1;
    let Document = requireDocument();
    let LazyResult = requireLazyResult();
    let NoWorkResult = requireNoWorkResult();
    let Root = requireRoot();
    class Processor {
      constructor(plugins = []) {
        this.version = "8.5.3";
        this.plugins = this.normalize(plugins);
      }
      normalize(plugins) {
        let normalized = [];
        for (let i of plugins) {
          if (i.postcss === true) {
            i = i();
          } else if (i.postcss) {
            i = i.postcss;
          }
          if (typeof i === "object" && Array.isArray(i.plugins)) {
            normalized = normalized.concat(i.plugins);
          } else if (typeof i === "object" && i.postcssPlugin) {
            normalized.push(i);
          } else if (typeof i === "function") {
            normalized.push(i);
          } else if (typeof i === "object" && (i.parse || i.stringify)) ;
          else {
            throw new Error(i + " is not a PostCSS plugin");
          }
        }
        return normalized;
      }
      process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
          return new NoWorkResult(this, css, opts);
        } else {
          return new LazyResult(this, css, opts);
        }
      }
      use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
          plugin
        ]));
        return this;
      }
    }
    processor = Processor;
    Processor.default = Processor;
    Root.registerProcessor(Processor);
    Document.registerProcessor(Processor);
    return processor;
  }
  var postcss_1;
  var hasRequiredPostcss;
  requirePostcss = function() {
    if (hasRequiredPostcss) return postcss_1;
    hasRequiredPostcss = 1;
    var define_process_env_default = {};
    let AtRule = requireAtRule();
    let Comment = requireComment();
    let Container = requireContainer();
    let CssSyntaxError = requireCssSyntaxError();
    let Declaration = requireDeclaration();
    let Document = requireDocument();
    let fromJSON = requireFromJSON();
    let Input = requireInput();
    let LazyResult = requireLazyResult();
    let list = requireList();
    let Node = requireNode$1();
    let parse2 = requireParse();
    let Processor = requireProcessor();
    let Result = requireResult();
    let Root = requireRoot();
    let Rule = requireRule();
    let stringify = requireStringify$1();
    let Warning = requireWarning();
    function postcss2(...plugins) {
      if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
      }
      return new Processor(plugins);
    }
    postcss2.plugin = function plugin(name, initializer) {
      let warningPrinted = false;
      function creator(...args) {
        if (console && console.warn && !warningPrinted) {
          warningPrinted = true;
          console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
          if (define_process_env_default.LANG && define_process_env_default.LANG.startsWith("cn")) {
            console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
          }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
      }
      let cache;
      Object.defineProperty(creator, "postcss", {
        get() {
          if (!cache) cache = creator();
          return cache;
        }
      });
      creator.process = function(css, processOpts, pluginOpts) {
        return postcss2([
          creator(pluginOpts)
        ]).process(css, processOpts);
      };
      return creator;
    };
    postcss2.stringify = stringify;
    postcss2.parse = parse2;
    postcss2.fromJSON = fromJSON;
    postcss2.list = list;
    postcss2.comment = (defaults) => new Comment(defaults);
    postcss2.atRule = (defaults) => new AtRule(defaults);
    postcss2.decl = (defaults) => new Declaration(defaults);
    postcss2.rule = (defaults) => new Rule(defaults);
    postcss2.root = (defaults) => new Root(defaults);
    postcss2.document = (defaults) => new Document(defaults);
    postcss2.CssSyntaxError = CssSyntaxError;
    postcss2.Declaration = Declaration;
    postcss2.Container = Container;
    postcss2.Processor = Processor;
    postcss2.Document = Document;
    postcss2.Comment = Comment;
    postcss2.Warning = Warning;
    postcss2.AtRule = AtRule;
    postcss2.Result = Result;
    postcss2.Input = Input;
    postcss2.Rule = Rule;
    postcss2.Root = Root;
    postcss2.Node = Node;
    LazyResult.registerPostcss(postcss2);
    postcss_1 = postcss2;
    postcss2.default = postcss2;
    return postcss_1;
  };
  var postcssExports = requirePostcss();
  postcss = getDefaultExportFromCjs(postcssExports);
  postcss.stringify;
  postcss.fromJSON;
  postcss.plugin;
  postcss.parse;
  postcss.list;
  postcss.document;
  postcss.comment;
  postcss.atRule;
  postcss.rule;
  postcss.decl;
  postcss.root;
  postcss.CssSyntaxError;
  postcss.Declaration;
  postcss.Container;
  postcss.Processor;
  postcss.Document;
  postcss.Comment;
  postcss.Warning;
  postcss.AtRule;
  postcss.Result;
  postcss.Input;
  postcss.Rule;
  postcss.Root;
  postcss.Node;
  var cssesc_1;
  var hasRequiredCssesc;
  requireCssesc = function() {
    if (hasRequiredCssesc) return cssesc_1;
    hasRequiredCssesc = 1;
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var merge = function merge2(options2, defaults) {
      if (!options2) {
        return defaults;
      }
      var result2 = {};
      for (var key in defaults) {
        result2[key] = hasOwnProperty.call(options2, key) ? options2[key] : defaults[key];
      }
      return result2;
    };
    var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    var cssesc = function cssesc2(string, options2) {
      options2 = merge(options2, cssesc2.options);
      if (options2.quotes != "single" && options2.quotes != "double") {
        options2.quotes = "single";
      }
      var quote = options2.quotes == "double" ? '"' : "'";
      var isIdentifier = options2.isIdentifier;
      var firstChar = string.charAt(0);
      var output = "";
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options2.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options2.wrap) {
        return quote + output + quote;
      }
      return output;
    };
    cssesc.options = {
      "escapeEverything": false,
      "isIdentifier": false,
      "quotes": "single",
      "wrap": false
    };
    cssesc.version = "3.0.0";
    cssesc_1 = cssesc;
    return cssesc_1;
  };
})();
export {
  __tla,
  requirePathBrowserify as a,
  requireHasown as b,
  path as c,
  requirePostcss as d,
  encodeBase64 as e,
  requirePicocolors_browser as f,
  getDefaultExportFromCjs as g,
  requireSafeBuffer as h,
  isValidUrl as i,
  commonjsGlobal as j,
  requireStreamBrowserify as k,
  loadModule as l,
  requireInherits_browser as m,
  requireDist$1 as n,
  requireString_decoder as o,
  postcss as p,
  requireEvents as q,
  requireLib as r,
  requireUtil$2 as s,
  requireBrowser as t,
  requireCssesc as u,
  importLocalModule as v,
  decodeBase64 as w
};
