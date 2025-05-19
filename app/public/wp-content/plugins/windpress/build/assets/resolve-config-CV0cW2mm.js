var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b;
import { B as Buffer2, p as process$1 } from "../chunks/index-Dfa4cJMK.min.js";
import { u as requireCssesc, t as requireBrowser, d as requirePostcss, g as getDefaultExportFromCjs, v as importLocalModule } from "./cssesc-Du71EH2f.js";
var w$n = Object.create;
var g$p = Object.defineProperty;
var A$k = Object.getOwnPropertyDescriptor;
var j$t = Object.getOwnPropertyNames;
var R$c = Object.getPrototypeOf, S$m = Object.prototype.hasOwnProperty;
var V$8 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var C$j = (e2, r2, c2, o2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let u2 of j$t(r2)) !S$m.call(e2, u2) && u2 !== c2 && g$p(e2, u2, { get: () => r2[u2], enumerable: !(o2 = A$k(r2, u2)) || o2.enumerable });
  return e2;
};
var F$e = (e2, r2, c2) => (c2 = e2 != null ? w$n(R$c(e2)) : {}, C$j(!e2 || !e2.__esModule ? g$p(c2, "default", { value: e2, enumerable: true }) : c2, e2));
var b$k = V$8((W2, M2) => {
  (function() {
    function e2(o2, u2, i2) {
      if (!o2) return null;
      e2.caseSensitive || (o2 = o2.toLowerCase());
      var f2 = e2.threshold === null ? null : e2.threshold * o2.length, s2 = e2.thresholdAbsolute, l2;
      f2 !== null && s2 !== null ? l2 = Math.min(f2, s2) : f2 !== null ? l2 = f2 : s2 !== null ? l2 = s2 : l2 = null;
      var t2, n2, a2, d2, h2, p3 = u2.length;
      for (h2 = 0; h2 < p3; h2++) if (n2 = u2[h2], i2 && (n2 = n2[i2]), !!n2 && (e2.caseSensitive ? a2 = n2 : a2 = n2.toLowerCase(), d2 = c2(o2, a2, l2), (l2 === null || d2 < l2) && (l2 = d2, i2 && e2.returnWinningObject ? t2 = u2[h2] : t2 = n2, e2.returnFirstMatch))) return t2;
      return t2 || e2.nullResultValue;
    }
    e2.threshold = 0.4, e2.thresholdAbsolute = 20, e2.caseSensitive = false, e2.nullResultValue = null, e2.returnWinningObject = null, e2.returnFirstMatch = false, typeof M2 < "u" && M2.exports ? M2.exports = e2 : window.didYouMean = e2;
    var r2 = Math.pow(2, 32) - 1;
    function c2(o2, u2, i2) {
      i2 = i2 || i2 === 0 ? i2 : r2;
      var f2 = o2.length, s2 = u2.length;
      if (f2 === 0) return Math.min(i2 + 1, s2);
      if (s2 === 0) return Math.min(i2 + 1, f2);
      if (Math.abs(f2 - s2) > i2) return i2 + 1;
      var l2 = [], t2, n2, a2, d2, h2;
      for (t2 = 0; t2 <= s2; t2++) l2[t2] = [t2];
      for (n2 = 0; n2 <= f2; n2++) l2[0][n2] = n2;
      for (t2 = 1; t2 <= s2; t2++) {
        for (a2 = r2, d2 = 1, t2 > i2 && (d2 = t2 - i2), h2 = s2 + 1, h2 > i2 + t2 && (h2 = i2 + t2), n2 = 1; n2 <= f2; n2++) n2 < d2 || n2 > h2 ? l2[t2][n2] = i2 + 1 : u2.charAt(t2 - 1) === o2.charAt(n2 - 1) ? l2[t2][n2] = l2[t2 - 1][n2 - 1] : l2[t2][n2] = Math.min(l2[t2 - 1][n2 - 1] + 1, Math.min(l2[t2][n2 - 1] + 1, l2[t2 - 1][n2] + 1)), l2[t2][n2] < a2 && (a2 = l2[t2][n2]);
        if (a2 > i2) return i2 + 1;
      }
      return l2[s2][f2];
    }
  })();
});
var v$i = F$e(b$k()), { threshold: J$5, thresholdAbsolute: L$c, caseSensitive: Y$a, nullResultValue: D$c, returnWinningObject: E$a, returnFirstMatch: I$g } = v$i, N$d = v$i.default ?? v$i;
var i$f = Object.create;
var c$o = Object.defineProperty;
var m$B = Object.getOwnPropertyDescriptor;
var a$l = Object.getOwnPropertyNames;
var h$t = Object.getPrototypeOf, g$o = Object.prototype.hasOwnProperty;
var j$s = (t2, r2) => () => (r2 || t2((r2 = { exports: {} }).exports, r2), r2.exports);
var y$s = (t2, r2, e2, f2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let u2 of a$l(r2)) !g$o.call(t2, u2) && u2 !== e2 && c$o(t2, u2, { get: () => r2[u2], enumerable: !(f2 = m$B(r2, u2)) || f2.enumerable });
  return t2;
};
var b$j = (t2, r2, e2) => (e2 = t2 != null ? i$f(h$t(t2)) : {}, y$s(!t2 || !t2.__esModule ? c$o(e2, "default", { value: t2, enumerable: true }) : e2, t2));
var d$v = j$s((p3, n2) => {
  (function(t2, r2) {
    typeof p3 == "object" && typeof n2 < "u" ? n2.exports = function(e2, f2, u2, o2, l2) {
      for (f2 = f2.split ? f2.split(".") : f2, o2 = 0; o2 < f2.length; o2++) e2 = e2 ? e2[f2[o2]] : l2;
      return e2 === l2 ? u2 : e2;
    } : typeof define == "function" && define.amd ? define(function() {
      return function(e2, f2, u2, o2, l2) {
        for (f2 = f2.split ? f2.split(".") : f2, o2 = 0; o2 < f2.length; o2++) e2 = e2 ? e2[f2[o2]] : l2;
        return e2 === l2 ? u2 : e2;
      };
    }) : t2.dlv = function(e2, f2, u2, o2, l2) {
      for (f2 = f2.split ? f2.split(".") : f2, o2 = 0; o2 < f2.length; o2++) e2 = e2 ? e2[f2[o2]] : l2;
      return e2 === l2 ? u2 : e2;
    };
  })(p3);
});
var s$b = b$j(d$v()), x$v = s$b.default ?? s$b;
const __0$$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x$v
}, Symbol.toStringTag, { value: "Module" }));
function n$h(r2) {
  return new Error(`[unenv] ${r2} is not implemented yet!`);
}
function e(r2) {
  return Object.assign(() => {
    throw n$h(r2);
  }, { __unenv__: true });
}
function t$3(r2) {
  return class {
    constructor() {
      __publicField(this, "__unenv__", true);
      throw new Error(`[unenv] ${r2} is not implemented yet!`);
    }
  };
}
var o$b = Object.defineProperty, S$l = (r2, a2) => {
  for (var _2 in a2) o$b(r2, _2, { get: a2[_2], enumerable: true });
};
var p$u = {};
S$l(p$u, { getRandomValues: () => s$a, randomUUID: () => P$k, subtle: () => O$b });
var O$b = (_a2 = globalThis.crypto) == null ? void 0 : _a2.subtle, P$k = () => {
  var _a3;
  return (_a3 = globalThis.crypto) == null ? void 0 : _a3.randomUUID();
}, s$a = (r2) => {
  var _a3;
  return (_a3 = globalThis.crypto) == null ? void 0 : _a3.getRandomValues(r2);
}, y$r = {};
S$l(y$r, { Certificate: () => Ne, Cipher: () => le$2, Cipheriv: () => fe, Decipher: () => Ce$2, Decipheriv: () => Le$1, DiffieHellman: () => De$2, DiffieHellmanGroup: () => He$1, ECDH: () => Te$1, Hash: () => he$2, Hmac: () => Ie, KeyObject: () => me$2, Sign: () => ue$1, Verify: () => Re$1, X509Certificate: () => ge$2, checkPrime: () => L$b, checkPrimeSync: () => D$b, constants: () => C$i, createCipher: () => H$7, createCipheriv: () => I$f, createDecipher: () => T$c, createDecipheriv: () => m$A, createDiffieHellman: () => u$m, createDiffieHellmanGroup: () => R$b, createECDH: () => g$n, createHash: () => A$j, createHmac: () => d$u, createPrivateKey: () => G$a, createPublicKey: () => v$h, createSecretKey: () => K$9, createSign: () => b$i, createVerify: () => U$b, diffieHellman: () => M$b, fips: () => f$p, generateKey: () => Z$7, generateKeyPair: () => $$6, generateKeyPairSync: () => Q$9, generateKeySync: () => z$c, generatePrime: () => B$b, generatePrimeSync: () => F$d, getCipherInfo: () => k$f, getCiphers: () => V$7, getCurves: () => Y$9, getDiffieHellman: () => X$7, getFips: () => Ee$1, getHashes: () => w$m, hash: () => Pe$1, hkdf: () => j$r, hkdfSync: () => x$u, pbkdf2: () => q$h, pbkdf2Sync: () => W$b, privateDecrypt: () => J$4, privateEncrypt: () => ee$3, pseudoRandomBytes: () => h$s, publicDecrypt: () => te$3, publicEncrypt: () => re$3, randomBytes: () => l$k, randomFill: () => ae$2, randomFillSync: () => _e, randomInt: () => ce$1, scrypt: () => Se$1, scryptSync: () => ie$2, secureHeapUsed: () => Oe$1, setEngine: () => se$1, setFips: () => ne$3, sign: () => pe$1, timingSafeEqual: () => ye, verify: () => oe$1, webcrypto: () => N$c });
var i$e = 65536, N$c = new Proxy(globalThis.crypto, { get(r2, a2) {
  return a2 === "CryptoKey" ? globalThis.CryptoKey : typeof globalThis.crypto[a2] == "function" ? globalThis.crypto[a2].bind(globalThis.crypto) : globalThis.crypto[a2];
} }), l$k = (r2, a2) => {
  let _2 = Buffer2.alloc(r2, 0, void 0);
  for (let c2 = 0; c2 < r2; c2 += i$e) s$a(Uint8Array.prototype.slice.call(_2, c2, c2 + i$e));
  if (typeof a2 == "function") {
    a2(null, _2);
    return;
  }
  return _2;
}, f$p = false, C$i = {}, L$b = e("crypto.checkPrime"), D$b = e("crypto.checkPrimeSync"), H$7 = e("crypto.createCipher"), T$c = e("crypto.createDecipher"), h$s = e("crypto.pseudoRandomBytes"), I$f = e("crypto.createCipheriv"), m$A = e("crypto.createDecipheriv"), u$m = e("crypto.createDiffieHellman"), R$b = e("crypto.createDiffieHellmanGroup"), g$n = e("crypto.createECDH"), A$j = e("crypto.createHash"), d$u = e("crypto.createHmac"), G$a = e("crypto.createPrivateKey"), v$h = e("crypto.createPublicKey"), K$9 = e("crypto.createSecretKey"), b$i = e("crypto.createSign"), U$b = e("crypto.createVerify"), M$b = e("crypto.diffieHellman"), B$b = e("crypto.generatePrime"), F$d = e("crypto.generatePrimeSync"), V$7 = e("crypto.getCiphers"), k$f = e("crypto.getCipherInfo"), Y$9 = e("crypto.getCurves"), X$7 = e("crypto.getDiffieHellman"), w$m = e("crypto.getHashes"), j$r = e("crypto.hkdf"), x$u = e("crypto.hkdfSync"), q$h = e("crypto.pbkdf2"), W$b = e("crypto.pbkdf2Sync"), $$6 = e("crypto.generateKeyPair"), Q$9 = e("crypto.generateKeyPairSync"), Z$7 = e("crypto.generateKey"), z$c = e("crypto.generateKeySync"), J$4 = e("crypto.privateDecrypt"), ee$3 = e("crypto.privateEncrypt"), te$3 = e("crypto.publicDecrypt"), re$3 = e("crypto.publicEncrypt"), ae$2 = e("crypto.randomFill"), _e = e("crypto.randomFillSync"), ce$1 = e("crypto.randomInt"), Se$1 = e("crypto.scrypt"), ie$2 = e("crypto.scryptSync"), pe$1 = e("crypto.sign"), se$1 = e("crypto.setEngine"), ye = e("crypto.timingSafeEqual"), Ee$1 = e("crypto.getFips"), ne$3 = e("crypto.setFips"), oe$1 = e("crypto.verify"), Oe$1 = e("crypto.secureHeapUsed"), Pe$1 = e("crypto.hash"), Ne = t$3("crypto.Certificate"), le$2 = t$3("crypto.Cipher"), fe = t$3("crypto.Cipheriv"), Ce$2 = t$3("crypto.Decipher"), Le$1 = t$3("crypto.Decipheriv"), De$2 = t$3("crypto.DiffieHellman"), He$1 = t$3("crypto.DiffieHellmanGroup"), Te$1 = t$3("crypto.ECDH"), he$2 = t$3("crypto.Hash"), Ie = t$3("crypto.Hmac"), me$2 = t$3("crypto.KeyObject"), ue$1 = t$3("crypto.Sign"), Re$1 = t$3("crypto.Verify"), ge$2 = t$3("crypto.X509Certificate");
({ ...p$u, ...y$r });
function n$g(_2) {
  return new Error(`[unenv] ${_2} is not implemented yet!`);
}
function s$9(_2) {
  return Object.assign(() => {
    throw n$g(_2);
  }, { __unenv__: true });
}
var O$a = Object.defineProperty, a$k = (_2, e2) => {
  for (var r2 in e2) O$a(_2, r2, { get: e2[r2], enumerable: true });
};
var i$d = {};
a$k(i$d, { F_OK: () => f$o, R_OK: () => I$e, W_OK: () => o$a, X_OK: () => F$c, constants: () => t$2 });
var f$o = 0, I$e = 4, o$a = 2, F$c = 1, t$2 = /* @__PURE__ */ Object.create({ UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, UV_DIRENT_UNKNOWN: 0, UV_DIRENT_FILE: 1, UV_DIRENT_DIR: 2, UV_DIRENT_LINK: 3, UV_DIRENT_FIFO: 4, UV_DIRENT_SOCKET: 5, UV_DIRENT_CHAR: 6, UV_DIRENT_BLOCK: 7, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 64, O_EXCL: 128, UV_FS_O_FILEMAP: 0, O_NOCTTY: 256, O_TRUNC: 512, O_APPEND: 1024, O_DIRECTORY: 65536, O_NOATIME: 262144, O_NOFOLLOW: 131072, O_SYNC: 1052672, O_DSYNC: 4096, O_DIRECT: 16384, O_NONBLOCK: 2048, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_COPYFILE_EXCL: 1, COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, COPYFILE_FICLONE_FORCE: 4 }), l$j = {};
a$k(l$j, { access: () => c$n, appendFile: () => b$h, chmod: () => Y$8, chown: () => P$j, constants: () => t$2, copyFile: () => R$a, cp: () => E$9, default: () => M$a, glob: () => x$t, lchmod: () => k$e, lchown: () => w$l, link: () => h$r, lstat: () => K$8, lutimes: () => W$a, mkdir: () => p$t, mkdtemp: () => X$6, open: () => S$k, opendir: () => m$z, readFile: () => G$9, readdir: () => L$a, readlink: () => T$b, realpath: () => y$q, rename: () => u$l, rm: () => d$t, rmdir: () => C$h, stat: () => D$a, statfs: () => g$m, symlink: () => U$a, truncate: () => N$b, unlink: () => V$6, utimes: () => v$g, watch: () => H$6, writeFile: () => A$i });
var c$n = s$9("fs.access"), R$a = s$9("fs.copyFile"), E$9 = s$9("fs.cp"), S$k = s$9("fs.open"), m$z = s$9("fs.opendir"), u$l = s$9("fs.rename"), N$b = s$9("fs.truncate"), d$t = s$9("fs.rm"), C$h = s$9("fs.rmdir"), p$t = s$9("fs.mkdir"), L$a = s$9("fs.readdir"), T$b = s$9("fs.readlink"), U$a = s$9("fs.symlink"), K$8 = s$9("fs.lstat"), D$a = s$9("fs.stat"), h$r = s$9("fs.link"), V$6 = s$9("fs.unlink"), Y$8 = s$9("fs.chmod"), k$e = s$9("fs.lchmod"), w$l = s$9("fs.lchown"), P$j = s$9("fs.chown"), v$g = s$9("fs.utimes"), W$a = s$9("fs.lutimes"), y$q = s$9("fs.realpath"), X$6 = s$9("fs.mkdtemp"), A$i = s$9("fs.writeFile"), b$h = s$9("fs.appendFile"), G$9 = s$9("fs.readFile"), H$6 = s$9("fs.watch"), g$m = s$9("fs.statfs"), x$t = s$9("fs.glob"), M$a = {};
var f$n = function() {
};
function y$p(e2, n2 = {}) {
  f$n.prototype.name = e2;
  let o2 = {};
  return new Proxy(f$n, { get(i2, c2) {
    return c2 === "caller" ? null : c2 === "__createMock__" ? y$p : c2 === "__unenv__" ? true : c2 in n2 ? n2[c2] : o2[c2] = o2[c2] || y$p(`${e2}.${c2.toString()}`);
  }, apply(i2, c2, d2) {
    return y$p(`${e2}()`);
  }, construct(i2, c2, d2) {
    return y$p(`[${e2}]`);
  }, enumerate() {
    return [];
  } });
}
var r$3 = y$p("mock");
function u$k(e2) {
  return new Error(`[unenv] ${e2} is not implemented yet!`);
}
function s$8(e2) {
  return Object.assign(() => {
    throw u$k(e2);
  }, { __unenv__: true });
}
function t$1(e2) {
  let n2 = s$8(e2);
  return n2.__promisify__ = () => s$8(e2 + ".__promisify__"), n2.native = n2, n2;
}
var p$s = Object.defineProperty, S$j = (e2, n2) => {
  for (var o2 in n2) p$s(e2, o2, { get: n2[o2], enumerable: true });
};
var m$y = {};
S$j(m$y, { Dir: () => N$a, Dirent: () => X$5, FileReadStream: () => Z$6, FileWriteStream: () => ss, ReadStream: () => V$5, Stats: () => Q$8, StatsFs: () => as, WriteStream: () => Y$7 });
var N$a = r$3.__createMock__("fs.Dir"), X$5 = r$3.__createMock__("fs.Dirent"), Q$8 = r$3.__createMock__("fs.Stats"), V$5 = r$3.__createMock__("fs.ReadStream"), Y$7 = r$3.__createMock__("fs.WriteStream"), Z$6 = r$3.__createMock__("fs.FileReadStream"), ss = r$3.__createMock__("fs.FileWriteStream"), as = r$3.__createMock__("fs.StatsFs"), l$i = {};
S$j(l$i, { _toUnixTimestamp: () => Ys, access: () => ts, accessSync: () => ta, appendFile: () => es, appendFileSync: () => aa, chmod: () => cs, chmodSync: () => na, chown: () => ns, chownSync: () => ea, close: () => Os, closeSync: () => ca, copyFile: () => rs, copyFileSync: () => ra, cp: () => os, cpSync: () => oa, createReadStream: () => $s, createWriteStream: () => Bs, exists: () => js, existsSync: () => ia, fchmod: () => Ks, fchmodSync: () => Sa, fchown: () => Es, fchownSync: () => ya, fdatasync: () => Ts, fdatasyncSync: () => fa, fstat: () => Us, fstatSync: () => ma, fsync: () => qs, fsyncSync: () => la, ftruncate: () => zs, ftruncateSync: () => da, futimes: () => Cs, futimesSync: () => ua, glob: () => sa, globSync: () => za$1, lchmod: () => ys, lchmodSync: () => _a, lchown: () => is, lchownSync: () => pa, link: () => Ss, linkSync: () => ha, lstat: () => fs, lstatSync: () => Gs, lutimes: () => ms, lutimesSync: () => wa, mkdir: () => ls, mkdirSync: () => ka, mkdtemp: () => ds, mkdtempSync: () => Fa, open: () => ps, openAsBlob: () => Zs, openSync: () => va, opendir: () => _s, opendirSync: () => xa, read: () => Hs, readFile: () => ws, readFileSync: () => Wa$1, readSync: () => ga, readdir: () => hs, readdirSync: () => ba, readlink: () => ks, readlinkSync: () => Ma, readv: () => Ps, readvSync: () => Ra, realpath: () => us, realpathSync: () => Is, rename: () => Fs, renameSync: () => Da, rm: () => vs, rmSync: () => Aa, rmdir: () => xs$1, rmdirSync: () => Oa, stat: () => bs, statSync: () => Js, statfs: () => As, statfsSync: () => qa, symlink: () => gs, symlinkSync: () => $a$1, truncate: () => Rs, truncateSync: () => Ba$1, unlink: () => Ws, unlinkSync: () => ja$1, unwatchFile: () => Ls, utimes: () => Ms, utimesSync: () => Ea, watch: () => Ns, watchFile: () => Xs, write: () => Qs, writeFile: () => Ds, writeFileSync: () => Ka$1, writeSync: () => Ta, writev: () => Vs, writevSync: () => Ua$1 });
function a$j(e2) {
  let n2 = function(...o2) {
    let i2 = o2.pop();
    e2().catch((c2) => i2(c2)).then((c2) => i2(void 0, c2));
  };
  return n2.__promisify__ = e2, n2.native = n2, n2;
}
var ts = a$j(c$n), es = a$j(b$h), ns = a$j(P$j), cs = a$j(Y$8), rs = a$j(R$a), os = a$j(E$9), is = a$j(w$l), ys = a$j(k$e), Ss = a$j(h$r), fs = a$j(K$8), ms = a$j(W$a), ls = a$j(p$t), ds = a$j(X$6), us = a$j(y$q), ps = a$j(S$k), _s = a$j(m$z), hs = a$j(L$a), ws = a$j(G$9), ks = a$j(T$b), Fs = a$j(u$l), vs = a$j(d$t), xs$1 = a$j(C$h), bs = a$j(D$a), gs = a$j(U$a), Rs = a$j(N$b), Ws = a$j(V$6), Ms = a$j(v$g), Ds = a$j(A$i), As = a$j(g$m), Os = t$1("fs.close"), $s = t$1("fs.createReadStream"), Bs = t$1("fs.createWriteStream"), js = t$1("fs.exists"), Es = t$1("fs.fchown"), Ks = t$1("fs.fchmod"), Ts = t$1("fs.fdatasync"), Us = t$1("fs.fstat"), qs = t$1("fs.fsync"), zs = t$1("fs.ftruncate"), Cs = t$1("fs.futimes"), Gs = t$1("fs.lstatSync"), Hs = t$1("fs.read"), Ps = t$1("fs.readv"), Is = t$1("fs.realpathSync"), Js = t$1("fs.statSync"), Ls = t$1("fs.unwatchFile"), Ns = t$1("fs.watch"), Xs = t$1("fs.watchFile"), Qs = t$1("fs.write"), Vs = t$1("fs.writev"), Ys = t$1("fs._toUnixTimestamp"), Zs = t$1("fs.openAsBlob"), sa = t$1("fs.glob"), aa = s$8("fs.appendFileSync"), ta = s$8("fs.accessSync"), ea = s$8("fs.chownSync"), na = s$8("fs.chmodSync"), ca = s$8("fs.closeSync"), ra = s$8("fs.copyFileSync"), oa = s$8("fs.cpSync"), ia = () => false, ya = s$8("fs.fchownSync"), Sa = s$8("fs.fchmodSync"), fa = s$8("fs.fdatasyncSync"), ma = s$8("fs.fstatSync"), la = s$8("fs.fsyncSync"), da = s$8("fs.ftruncateSync"), ua = s$8("fs.futimesSync"), pa = s$8("fs.lchownSync"), _a = s$8("fs.lchmodSync"), ha = s$8("fs.linkSync"), wa = s$8("fs.lutimesSync"), ka = s$8("fs.mkdirSync"), Fa = s$8("fs.mkdtempSync"), va = s$8("fs.openSync"), xa = s$8("fs.opendirSync"), ba = s$8("fs.readdirSync"), ga = s$8("fs.readSync"), Ra = s$8("fs.readvSync"), Wa$1 = s$8("fs.readFileSync"), Ma = s$8("fs.readlinkSync"), Da = s$8("fs.renameSync"), Aa = s$8("fs.rmSync"), Oa = s$8("fs.rmdirSync"), $a$1 = s$8("fs.symlinkSync"), Ba$1 = s$8("fs.truncateSync"), ja$1 = s$8("fs.unlinkSync"), Ea = s$8("fs.utimesSync"), Ka$1 = s$8("fs.writeFileSync"), Ta = s$8("fs.writeSync"), Ua$1 = s$8("fs.writevSync"), qa = s$8("fs.statfsSync"), za$1 = s$8("fs.globSync"), Ca$1 = l$j, st$4 = { ...m$y, ...i$d, ...l$i, promises: Ca$1 };
const __2$$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dir: N$a,
  Dirent: X$5,
  F_OK: f$o,
  FileReadStream: Z$6,
  FileWriteStream: ss,
  R_OK: I$e,
  ReadStream: V$5,
  Stats: Q$8,
  StatsFs: as,
  W_OK: o$a,
  WriteStream: Y$7,
  X_OK: F$c,
  _toUnixTimestamp: Ys,
  access: ts,
  accessSync: ta,
  appendFile: es,
  appendFileSync: aa,
  chmod: cs,
  chmodSync: na,
  chown: ns,
  chownSync: ea,
  close: Os,
  closeSync: ca,
  constants: t$2,
  copyFile: rs,
  copyFileSync: ra,
  cp: os,
  cpSync: oa,
  createReadStream: $s,
  createWriteStream: Bs,
  default: st$4,
  exists: js,
  existsSync: ia,
  fchmod: Ks,
  fchmodSync: Sa,
  fchown: Es,
  fchownSync: ya,
  fdatasync: Ts,
  fdatasyncSync: fa,
  fstat: Us,
  fstatSync: ma,
  fsync: qs,
  fsyncSync: la,
  ftruncate: zs,
  ftruncateSync: da,
  futimes: Cs,
  futimesSync: ua,
  glob: sa,
  globSync: za$1,
  lchmod: ys,
  lchmodSync: _a,
  lchown: is,
  lchownSync: pa,
  link: Ss,
  linkSync: ha,
  lstat: fs,
  lstatSync: Gs,
  lutimes: ms,
  lutimesSync: wa,
  mkdir: ls,
  mkdirSync: ka,
  mkdtemp: ds,
  mkdtempSync: Fa,
  open: ps,
  openAsBlob: Zs,
  openSync: va,
  opendir: _s,
  opendirSync: xa,
  promises: Ca$1,
  read: Hs,
  readFile: ws,
  readFileSync: Wa$1,
  readSync: ga,
  readdir: hs,
  readdirSync: ba,
  readlink: ks,
  readlinkSync: Ma,
  readv: Ps,
  readvSync: Ra,
  realpath: us,
  realpathSync: Is,
  rename: Fs,
  renameSync: Da,
  rm: vs,
  rmSync: Aa,
  rmdir: xs$1,
  rmdirSync: Oa,
  stat: bs,
  statSync: Js,
  statfs: As,
  statfsSync: qa,
  symlink: gs,
  symlinkSync: $a$1,
  truncate: Rs,
  truncateSync: Ba$1,
  unlink: Ws,
  unlinkSync: ja$1,
  unwatchFile: Ls,
  utimes: Ms,
  utimesSync: Ea,
  watch: Ns,
  watchFile: Xs,
  write: Qs,
  writeFile: Ds,
  writeFileSync: Ka$1,
  writeSync: Ta,
  writev: Vs,
  writevSync: Ua$1
}, Symbol.toStringTag, { value: "Module" }));
function P$i(t2) {
  return new Error(`[unenv] ${t2} is not implemented yet!`);
}
function _$a(t2) {
  return Object.assign(() => {
    throw P$i(t2);
  }, { __unenv__: true });
}
var E$8 = Object.defineProperty, $$5 = (t2, n2) => {
  for (var e2 in n2) E$8(t2, e2, { get: n2[e2], enumerable: true });
};
var x$s = {};
$$5(x$s, { basename: () => d$s, default: () => B$a, delimiter: () => w$k, dirname: () => g$l, extname: () => h$q, format: () => O$9, isAbsolute: () => f$m, join: () => z$b, normalize: () => m$x, normalizeString: () => p$r, parse: () => Z$5, relative: () => k$d, resolve: () => c$m, sep: () => y$o, toNamespacedPath: () => A$h });
var G$8 = /^[A-Za-z]:\//;
function l$h(t2 = "") {
  return t2 && t2.replace(/\\/g, "/").replace(G$8, (n2) => n2.toUpperCase());
}
var I$d = /^[/\\]{2}/, L$9 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, j$q = /^[A-Za-z]:$/, b$g = /^\/([A-Za-z]:)?$/, y$o = "/", w$k = ":", m$x = function(t2) {
  if (t2.length === 0) return ".";
  t2 = l$h(t2);
  let n2 = t2.match(I$d), e2 = f$m(t2), r2 = t2[t2.length - 1] === "/";
  return t2 = p$r(t2, !e2), t2.length === 0 ? e2 ? "/" : r2 ? "./" : "." : (r2 && (t2 += "/"), j$q.test(t2) && (t2 += "/"), n2 ? e2 ? `//${t2}` : `//./${t2}` : e2 && !f$m(t2) ? `/${t2}` : t2);
}, z$b = function(...t2) {
  if (t2.length === 0) return ".";
  let n2;
  for (let e2 of t2) e2 && e2.length > 0 && (n2 === void 0 ? n2 = e2 : n2 += `/${e2}`);
  return n2 === void 0 ? "." : m$x(n2.replace(/\/\/+/g, "/"));
};
function N$9() {
  return typeof process$1 < "u" && typeof process$1.cwd == "function" ? process$1.cwd().replace(/\\/g, "/") : "/";
}
var c$m = function(...t2) {
  t2 = t2.map((r2) => l$h(r2));
  let n2 = "", e2 = false;
  for (let r2 = t2.length - 1; r2 >= -1 && !e2; r2--) {
    let o2 = r2 >= 0 ? t2[r2] : N$9();
    !o2 || o2.length === 0 || (n2 = `${o2}/${n2}`, e2 = f$m(o2));
  }
  return n2 = p$r(n2, !e2), e2 && !f$m(n2) ? `/${n2}` : n2.length > 0 ? n2 : ".";
};
function p$r(t2, n2) {
  let e2 = "", r2 = 0, o2 = -1, a2 = 0, u2 = null;
  for (let i2 = 0; i2 <= t2.length; ++i2) {
    if (i2 < t2.length) u2 = t2[i2];
    else {
      if (u2 === "/") break;
      u2 = "/";
    }
    if (u2 === "/") {
      if (!(o2 === i2 - 1 || a2 === 1)) if (a2 === 2) {
        if (e2.length < 2 || r2 !== 2 || e2[e2.length - 1] !== "." || e2[e2.length - 2] !== ".") {
          if (e2.length > 2) {
            let v2 = e2.lastIndexOf("/");
            v2 === -1 ? (e2 = "", r2 = 0) : (e2 = e2.slice(0, v2), r2 = e2.length - 1 - e2.lastIndexOf("/")), o2 = i2, a2 = 0;
            continue;
          } else if (e2.length > 0) {
            e2 = "", r2 = 0, o2 = i2, a2 = 0;
            continue;
          }
        }
        n2 && (e2 += e2.length > 0 ? "/.." : "..", r2 = 2);
      } else e2.length > 0 ? e2 += `/${t2.slice(o2 + 1, i2)}` : e2 = t2.slice(o2 + 1, i2), r2 = i2 - o2 - 1;
      o2 = i2, a2 = 0;
    } else u2 === "." && a2 !== -1 ? ++a2 : a2 = -1;
  }
  return e2;
}
var f$m = function(t2) {
  return L$9.test(t2);
}, A$h = function(t2) {
  return l$h(t2);
}, S$i = /.(\.[^./]+)$/, h$q = function(t2) {
  let n2 = S$i.exec(l$h(t2));
  return n2 && n2[1] || "";
}, k$d = function(t2, n2) {
  let e2 = c$m(t2).replace(b$g, "$1").split("/"), r2 = c$m(n2).replace(b$g, "$1").split("/");
  if (r2[0][1] === ":" && e2[0][1] === ":" && e2[0] !== r2[0]) return r2.join("/");
  let o2 = [...e2];
  for (let a2 of o2) {
    if (r2[0] !== a2) break;
    e2.shift(), r2.shift();
  }
  return [...e2.map(() => ".."), ...r2].join("/");
}, g$l = function(t2) {
  let n2 = l$h(t2).replace(/\/$/, "").split("/").slice(0, -1);
  return n2.length === 1 && j$q.test(n2[0]) && (n2[0] += "/"), n2.join("/") || (f$m(t2) ? "/" : ".");
}, O$9 = function(t2) {
  let n2 = [t2.root, t2.dir, t2.base ?? t2.name + t2.ext].filter(Boolean);
  return l$h(t2.root ? c$m(...n2) : n2.join("/"));
}, d$s = function(t2, n2) {
  let e2 = l$h(t2).split("/").pop();
  return n2 && e2.endsWith(n2) ? e2.slice(0, -n2.length) : e2;
}, Z$5 = function(t2) {
  let n2 = l$h(t2).split("/").shift() || "/", e2 = d$s(t2), r2 = h$q(e2);
  return { root: n2, dir: g$l(t2), base: e2, ext: r2, name: e2.slice(0, e2.length - r2.length) };
}, B$a = { __proto__: null, basename: d$s, delimiter: w$k, dirname: g$l, extname: h$q, format: O$9, isAbsolute: f$m, join: z$b, normalize: m$x, normalizeString: p$r, parse: Z$5, relative: k$d, resolve: c$m, sep: y$o, toNamespacedPath: A$h }, s$7 = { ...x$s, platform: "posix", posix: void 0, win32: void 0, _makeLong: (t2) => t2, matchesGlob: _$a("path.matchesGlob") };
s$7.posix = s$7;
s$7.win32 = s$7;
var R$9 = s$7, T$a = s$7, U$9 = "posix", V$4 = s$7._makeLong, W$9 = s$7.matchesGlob, F$b = s$7;
const __1$$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _makeLong: V$4,
  basename: d$s,
  default: F$b,
  delimiter: w$k,
  dirname: g$l,
  extname: h$q,
  format: O$9,
  isAbsolute: f$m,
  join: z$b,
  matchesGlob: W$9,
  normalize: m$x,
  normalizeString: p$r,
  parse: Z$5,
  platform: U$9,
  posix: R$9,
  relative: k$d,
  resolve: c$m,
  sep: y$o,
  toNamespacedPath: A$h,
  win32: T$a
}, Symbol.toStringTag, { value: "Module" }));
var v$f = function() {
};
function u$j(e2, t2 = {}) {
  v$f.prototype.name = e2;
  let r2 = {};
  return new Proxy(v$f, { get(n2, a2) {
    return a2 === "caller" ? null : a2 === "__createMock__" ? u$j : a2 === "__unenv__" ? true : a2 in t2 ? t2[a2] : r2[a2] = r2[a2] || u$j(`${e2}.${a2.toString()}`);
  }, apply(n2, a2, o2) {
    return u$j(`${e2}()`);
  }, construct(n2, a2, o2) {
    return u$j(`[${e2}]`);
  }, enumerate() {
    return [];
  } });
}
var d$r = u$j("mock");
function m$w(e2) {
  return new Error(`[unenv] ${e2} is not implemented yet!`);
}
function s$6(e2) {
  return Object.assign(() => {
    throw m$w(e2);
  }, { __unenv__: true });
}
Object.freeze(Object.create(null, { __unenv__: { get: () => true } }));
var p$q = /* @__PURE__ */ Object.create(null), h$p = (_b = globalThis.process) == null ? void 0 : _b.env, l$g = (e2) => h$p || globalThis.__env__ || (e2 ? p$q : globalThis), x$r = new Proxy(p$q, { get(e2, t2) {
  return l$g()[t2] ?? p$q[t2];
}, has(e2, t2) {
  let r2 = l$g();
  return t2 in r2 || t2 in p$q;
}, set(e2, t2, r2) {
  let n2 = l$g(true);
  return n2[t2] = r2, true;
}, deleteProperty(e2, t2) {
  let r2 = l$g(true);
  return delete r2[t2], true;
}, ownKeys() {
  let e2 = l$g();
  return Object.keys(e2);
} });
Object.assign(function(e2) {
  let t2 = Date.now(), r2 = Math.trunc(t2 / 1e3), n2 = t2 % 1e3 * 1e6;
  if (e2) {
    let a2 = r2 - e2[0], o2 = n2 - e2[0];
    return o2 < 0 && (a2 = a2 - 1, o2 = 1e9 + o2), [a2, o2];
  }
  return [r2, n2];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
s$6("process.abort");
s$6("process.cpuUsage");
s$6("process.dlopen");
s$6("process.eventNames");
s$6("process.exit");
s$6("process.getMaxListeners");
s$6("process.kill");
Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
s$6("process.rawListeners");
/* @__PURE__ */ Object.create({ compact: void 0, directory: void 0, filename: void 0, getReport: s$6("process.report.getReport"), reportOnFatalError: void 0, reportOnSignal: void 0, reportOnUncaughtException: void 0, signal: void 0, writeReport: s$6("process.report.writeReport") });
s$6("process.resourceUsage");
s$6("process.setegid");
s$6("process.seteuid");
s$6("process.setgid");
s$6("process.setgroups");
s$6("process.setuid");
s$6("process.setMaxListeners");
s$6("process.setSourceMapsEnabled");
d$r.__createMock__("process.stdout");
d$r.__createMock__("process.stderr");
d$r.__createMock__("process.stdin");
s$6("process.setUncaughtExceptionCaptureCallback");
s$6("process.loadEnvFile");
s$6("process.assert");
s$6("process.openStdin");
s$6("process._debugEnd");
s$6("process._debugProcess");
s$6("process._fatalException");
s$6("process._getActiveHandles");
s$6("process._getActiveRequests");
s$6("process._kill");
s$6("process._rawDebug");
s$6("process._startProfilerIdleNotifier");
s$6("process.__stopProfilerIdleNotifier");
s$6("process._tickCallback");
s$6("process._linkedBinding");
s$6("process.initgroups");
var _$9 = { env: x$r }, xs = _$9;
var F$a = "-", E$7 = /^xn--/, O$8 = /[^\0-\u007F]/, L$8 = /[.\u3002\uFF0E\uFF61]/g, M$9 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, w$j = 35, a$i = Math.floor, C$g = String.fromCharCode;
function h$o(e2) {
  throw new RangeError(M$9[e2]);
}
function P$h(e2, o2) {
  let r2 = [], n2 = e2.length;
  for (; n2--; ) r2[n2] = o2(e2[n2]);
  return r2;
}
function I$c(e2, o2) {
  let r2 = e2.split("@"), n2 = "";
  r2.length > 1 && (n2 = r2[0] + "@", e2 = r2[1]), e2 = e2.replace(L$8, ".");
  let t2 = e2.split("."), l2 = P$h(t2, o2).join(".");
  return n2 + l2;
}
function S$h(e2) {
  let o2 = [], r2 = 0, n2 = e2.length;
  for (; r2 < n2; ) {
    let t2 = e2.charCodeAt(r2++);
    if (t2 >= 55296 && t2 <= 56319 && r2 < n2) {
      let l2 = e2.charCodeAt(r2++);
      (l2 & 64512) == 56320 ? o2.push(((t2 & 1023) << 10) + (l2 & 1023) + 65536) : (o2.push(t2), r2--);
    } else o2.push(t2);
  }
  return o2;
}
var U$8 = function(e2) {
  return e2 >= 48 && e2 < 58 ? 26 + (e2 - 48) : e2 >= 65 && e2 < 91 ? e2 - 65 : e2 >= 97 && e2 < 123 ? e2 - 97 : 36;
}, A$g = function(e2, o2) {
  return e2 + 22 + 75 * (e2 < 26) - ((o2 != 0) << 5);
}, m$v = function(e2, o2, r2) {
  let n2 = 0;
  for (e2 = r2 ? a$i(e2 / 700) : e2 >> 1, e2 += a$i(e2 / o2); e2 > w$j * 26 >> 1; n2 += 36) e2 = a$i(e2 / w$j);
  return a$i(n2 + (w$j + 1) * e2 / (e2 + 38));
}, j$p = function(e2) {
  let o2 = [], r2 = e2.length, n2 = 0, t2 = 128, l2 = 72, s2 = e2.lastIndexOf(F$a);
  s2 < 0 && (s2 = 0);
  for (let u2 = 0; u2 < s2; ++u2) e2.charCodeAt(u2) >= 128 && h$o("not-basic"), o2.push(e2.charCodeAt(u2));
  for (let u2 = s2 > 0 ? s2 + 1 : 0; u2 < r2; ) {
    let p3 = n2;
    for (let d2 = 1, f2 = 36; ; f2 += 36) {
      u2 >= r2 && h$o("invalid-input");
      let c2 = U$8(e2.charCodeAt(u2++));
      c2 >= 36 && h$o("invalid-input"), c2 > a$i((2147483647 - n2) / d2) && h$o("overflow"), n2 += c2 * d2;
      let v2 = f2 <= l2 ? 1 : f2 >= l2 + 26 ? 26 : f2 - l2;
      if (c2 < v2) break;
      let g2 = 36 - v2;
      d2 > a$i(2147483647 / g2) && h$o("overflow"), d2 *= g2;
    }
    let i2 = o2.length + 1;
    l2 = m$v(n2 - p3, i2, p3 === 0), a$i(n2 / i2) > 2147483647 - t2 && h$o("overflow"), t2 += a$i(n2 / i2), n2 %= i2, o2.splice(n2++, 0, t2);
  }
  return String.fromCodePoint(...o2);
}, k$c = function(e2) {
  let o2 = [], r2 = S$h(e2), n2 = r2.length, t2 = 128, l2 = 0, s2 = 72;
  for (let i2 of r2) i2 < 128 && o2.push(C$g(i2));
  let u2 = o2.length, p3 = u2;
  for (u2 && o2.push(F$a); p3 < n2; ) {
    let i2 = 2147483647;
    for (let f2 of r2) f2 >= t2 && f2 < i2 && (i2 = f2);
    let d2 = p3 + 1;
    i2 - t2 > a$i((2147483647 - l2) / d2) && h$o("overflow"), l2 += (i2 - t2) * d2, t2 = i2;
    for (let f2 of r2) if (f2 < t2 && ++l2 > 2147483647 && h$o("overflow"), f2 === t2) {
      let c2 = l2;
      for (let v2 = 36; ; v2 += 36) {
        let g2 = v2 <= s2 ? 1 : v2 >= s2 + 26 ? 26 : v2 - s2;
        if (c2 < g2) break;
        let b2 = c2 - g2, x2 = 36 - g2;
        o2.push(C$g(A$g(g2 + b2 % x2, 0))), c2 = a$i(b2 / x2);
      }
      o2.push(C$g(A$g(c2, 0))), s2 = m$v(l2, d2, p3 === u2), l2 = 0, ++p3;
    }
    ++l2, ++t2;
  }
  return o2.join("");
}, q$g = function(e2) {
  return I$c(e2, function(o2) {
    return E$7.test(o2) ? j$p(o2.slice(4).toLowerCase()) : o2;
  });
}, y$n = function(e2) {
  return I$c(e2, function(o2) {
    return O$8.test(o2) ? "xn--" + k$c(o2) : o2;
  });
};
var p$p = class p extends URIError {
  constructor() {
    super("URI malformed");
    __publicField(this, "code", "ERR_INVALID_URI");
  }
}, f$l = Array.from({ length: 256 });
for (let o2 = 0; o2 < 256; ++o2) f$l[o2] = "%" + String.prototype.toUpperCase.call((o2 < 16 ? "0" : "") + Number.prototype.toString.call(o2, 16));
var g$k = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
function s$5(o2, a2, e2) {
  let c2 = o2.length;
  if (c2 === 0) return "";
  let n2 = "", l2 = 0, r2 = 0;
  t: for (; r2 < c2; r2++) {
    let t2 = String.prototype.charCodeAt.call(o2, r2);
    for (; t2 < 128; ) {
      if (a2[t2] !== 1 && (l2 < r2 && (n2 += String.prototype.slice.call(o2, l2, r2)), l2 = r2 + 1, n2 += e2[t2]), ++r2 === c2) break t;
      t2 = String.prototype.charCodeAt.call(o2, r2);
    }
    if (l2 < r2 && (n2 += String.prototype.slice.call(o2, l2, r2)), t2 < 2048) {
      l2 = r2 + 1, n2 += e2[192 | t2 >> 6] + e2[128 | t2 & 63];
      continue;
    }
    if (t2 < 55296 || t2 >= 57344) {
      l2 = r2 + 1, n2 += e2[224 | t2 >> 12] + e2[128 | t2 >> 6 & 63] + e2[128 | t2 & 63];
      continue;
    }
    if (++r2, r2 >= c2) throw new p$p();
    let i2 = String.prototype.charCodeAt.call(o2, r2) & 1023;
    l2 = r2 + 1, t2 = 65536 + ((t2 & 1023) << 10 | i2), n2 += e2[240 | t2 >> 18] + e2[128 | t2 >> 12 & 63] + e2[128 | t2 >> 6 & 63] + e2[128 | t2 & 63];
  }
  return l2 === 0 ? o2 : l2 < c2 ? n2 + String.prototype.slice.call(o2, l2) : n2;
}
var _$8 = new Int8Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
function N$8(t2, e2) {
  let n2 = globalThis.Buffer.allocUnsafe(t2.length), r2 = 0, l2 = 0, f2, p3, S2, i2, h2 = t2.length - 2, s2 = false;
  for (; r2 < t2.length; ) {
    if (f2 = String.prototype.charCodeAt.call(t2, r2), f2 === 43 && e2) {
      n2[l2++] = 32, r2++;
      continue;
    }
    if (f2 === 37 && r2 < h2) if (f2 = String.prototype.charCodeAt.call(t2, ++r2), S2 = _$8[f2], S2 >= 0) p3 = String.prototype.charCodeAt.call(t2, ++r2), i2 = _$8[p3], i2 >= 0 ? (s2 = true, f2 = S2 * 16 + i2) : (n2[l2++] = 37, r2--);
    else {
      n2[l2++] = 37;
      continue;
    }
    n2[l2++] = f2, r2++;
  }
  return s2 ? n2.slice(0, l2) : n2;
}
function I$b(t2, e2) {
  try {
    return decodeURIComponent(t2);
  } catch {
    return N$8(t2, e2).toString();
  }
}
var M$8 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
function x$q(t2) {
  return typeof t2 != "string" && (typeof t2 == "object" ? t2 = String(t2) : t2 += ""), s$5(t2, M$8, f$l);
}
function P$g(t2) {
  return typeof t2 == "string" ? t2 : typeof t2 == "number" && Number.isFinite(t2) || typeof t2 == "bigint" ? "" + t2 : typeof t2 == "boolean" ? t2 ? "true" : "false" : "";
}
function T$9(t2, e2) {
  return typeof t2 == "string" ? t2.length > 0 ? e2(t2) : "" : typeof t2 == "number" && Number.isFinite(t2) ? Math.abs(t2) < 1e21 ? "" + t2 : e2("" + t2) : typeof t2 == "bigint" ? "" + t2 : typeof t2 == "boolean" ? t2 ? "true" : "false" : "";
}
function D$9(t2, e2) {
  return e2(P$g(t2));
}
function j$o(t2, e2, n2, r2) {
  e2 = e2 || "&", n2 = n2 || "=";
  let l2 = x$q;
  r2 && typeof r2.encodeURIComponent == "function" && (l2 = r2.encodeURIComponent);
  let f2 = l2 === x$q ? T$9 : D$9;
  if (t2 !== null && typeof t2 == "object") {
    let p3 = Object.keys(t2), S2 = p3.length, i2 = "";
    for (let h2 = 0; h2 < S2; ++h2) {
      let s2 = p3[h2], d2 = t2[s2], o2 = f2(s2, l2);
      if (o2 += n2, Array.isArray(d2)) {
        let u2 = d2.length;
        if (u2 === 0) continue;
        i2 && (i2 += e2);
        for (let c2 = 0; c2 < u2; ++c2) c2 && (i2 += e2), i2 += o2, i2 += f2(d2[c2], l2);
      } else i2 && (i2 += e2), i2 += o2, i2 += f2(d2, l2);
    }
    return i2;
  }
  return "";
}
function B$9(t2) {
  if (t2.length === 0) return [];
  if (t2.length === 1) return [String.prototype.charCodeAt.call(t2, 0)];
  let e2 = Array.from({ length: t2.length });
  for (let n2 = 0; n2 < t2.length; ++n2) e2[n2] = String.prototype.charCodeAt.call(t2, n2);
  return e2;
}
var E$6 = [38], G$7 = [61];
function K$7(t2, e2, n2, r2, l2, f2) {
  if (e2.length > 0 && r2 && (e2 = F$9(e2, f2)), n2.length > 0 && l2 && (n2 = F$9(n2, f2)), t2[e2] === void 0) t2[e2] = n2;
  else {
    let p3 = t2[e2];
    p3.pop ? p3[p3.length] = n2 : t2[e2] = [p3, n2];
  }
}
function w$i(t2, e2, n2, r2) {
  let l2 = { __proto__: null };
  if (typeof t2 != "string" || t2.length === 0) return l2;
  let f2 = e2 ? B$9(String(e2)) : E$6, p3 = n2 ? B$9(String(n2)) : G$7, S2 = f2.length, i2 = p3.length, h2 = 1e3;
  r2 && typeof r2.maxKeys == "number" && (h2 = r2.maxKeys > 0 ? r2.maxKeys : -1);
  let s2 = I$b;
  r2 && typeof r2.decodeURIComponent == "function" && (s2 = r2.decodeURIComponent);
  let d2 = s2 !== I$b, o2 = 0, u2 = 0, c2 = 0, g2 = "", b2 = "", C2 = d2, v2 = d2, U2 = d2 ? "%20" : " ", y2 = 0;
  for (let a2 = 0; a2 < t2.length; ++a2) {
    let m2 = String.prototype.charCodeAt.call(t2, a2);
    if (m2 === f2[u2]) {
      if (++u2 === S2) {
        let A2 = a2 - u2 + 1;
        if (c2 < i2) {
          if (o2 < A2) g2 += String.prototype.slice.call(t2, o2, A2);
          else if (g2.length === 0) {
            if (--h2 === 0) return l2;
            o2 = a2 + 1, u2 = c2 = 0;
            continue;
          }
        } else o2 < A2 && (b2 += String.prototype.slice.call(t2, o2, A2));
        if (K$7(l2, g2, b2, C2, v2, s2), --h2 === 0) return l2;
        C2 = v2 = d2, g2 = b2 = "", y2 = 0, o2 = a2 + 1, u2 = c2 = 0;
      }
    } else {
      if (u2 = 0, c2 < i2) {
        if (m2 === p3[c2]) {
          if (++c2 === i2) {
            let A2 = a2 - c2 + 1;
            o2 < A2 && (g2 += String.prototype.slice.call(t2, o2, A2)), y2 = 0, o2 = a2 + 1;
          }
          continue;
        } else if (c2 = 0, !C2) {
          if (m2 === 37) {
            y2 = 1;
            continue;
          } else if (y2 > 0) if (g$k[m2] === 1) {
            ++y2 === 3 && (C2 = true);
            continue;
          } else y2 = 0;
        }
        if (m2 === 43) {
          o2 < a2 && (g2 += String.prototype.slice.call(t2, o2, a2)), g2 += U2, o2 = a2 + 1;
          continue;
        }
      }
      m2 === 43 ? (o2 < a2 && (b2 += String.prototype.slice.call(t2, o2, a2)), b2 += U2, o2 = a2 + 1) : v2 || (m2 === 37 ? y2 = 1 : y2 > 0 && (g$k[m2] === 1 ? ++y2 === 3 && (v2 = true) : y2 = 0));
    }
  }
  if (o2 < t2.length) c2 < i2 ? g2 += String.prototype.slice.call(t2, o2) : u2 < S2 && (b2 += String.prototype.slice.call(t2, o2));
  else if (c2 === 0 && g2.length === 0) return l2;
  return K$7(l2, g2, b2, C2, v2, s2), l2;
}
function F$9(t2, e2) {
  try {
    return e2(t2);
  } catch {
    return I$b(t2, true);
  }
}
function _$7(r2, e2) {
  for (; e2 + 1 < r2.length; e2++) r2[e2] = r2[e2 + 1];
  r2.pop();
}
function E$5(r2) {
  return Array.isArray(r2) ? r2.map((e2) => E$5(e2)).join(" or ") : r2 ? r2.toString() : "" + r2;
}
var B$8 = class B extends TypeError {
  constructor(r2, e2, t2) {
    super(`The ${r2.includes(".") ? "property" : "argument"} '${r2}' ${t2}. Received ${e2}`);
    __publicField(this, "code", "ERR_INVALID_ARG_VALUE");
  }
}, q$f = class q extends TypeError {
  constructor(r2, e2, t2) {
    super(`The "${r2}" argument must be of type ${E$5(e2)}. Received ${E$5(t2)}`);
    __publicField(this, "code", "ERR_INVALID_ARG_TYPE");
  }
}, P$f = class P extends TypeError {
  constructor(r2, e2) {
    super("Invalid URL");
    __publicField(this, "code", "ERR_INVALID_URL");
    __publicField(this, "input");
    __publicField(this, "base");
    this.input = r2, e2 != null && (this.base = e2);
  }
}, Y$6 = class Y extends TypeError {
  constructor(r2) {
    super(`The URL must be of scheme ${r2}`);
    __publicField(this, "code", "ERR_INVALID_URL_SCHEME");
  }
}, j$n = class j extends TypeError {
  constructor(r2) {
    super(`Invalid ile URL path: ${r2}`);
    __publicField(this, "code", "ERR_INVALID_FILE_URL_PATH");
  }
}, J$3 = class J extends TypeError {
  constructor(r2) {
    super(`File URL host must be "localhost" or empty on ${r2}`);
    __publicField(this, "code", "ERR_INVALID_FILE_URL_HOST");
  }
}, K$6 = /* @__PURE__ */ new Set(["javascript", "javascript:"]), T$8 = /* @__PURE__ */ new Set(["javascript", "javascript:"]), C$f = /* @__PURE__ */ new Set(["http", "http:", "https", "https:", "ftp", "ftp:", "gopher", "gopher:", "file", "file:", "ws", "ws:", "wss", "wss:"]), Q$7 = /\//g;
function X$4(r2, e2) {
  let t2 = e2 == null ? void 0 : e2.windows;
  if (t2 && String.prototype.startsWith.call(r2, "\\\\")) {
    let h2 = new URL("file://"), i2 = String.prototype.startsWith.call(r2, "\\\\?\\UNC\\") ? 8 : 2, o2 = String.prototype.indexOf.call(r2, "\\", i2);
    if (o2 === -1) throw new B$8("path", r2, "Missing UNC resource path");
    let a2 = String.prototype.slice.call(r2, i2, o2);
    return h2.hostname = y$n(a2), h2.pathname = D$8(r2.slice(o2).replace(V$3, "/"), { windows: t2 }), h2;
  }
  let s2 = t2 ? F$b.win32.resolve(r2) : F$b.posix.resolve(r2), l2 = String.prototype.charCodeAt.call(r2, r2.length - 1);
  return (l2 === 47 || t2 && l2 === 92) && s2.at(-1) !== F$b.sep && (s2 += "/"), s2 = D$8(s2, { windows: t2 }), String.prototype.indexOf.call(s2, "?") !== -1 && (s2 = s2.replace(ot$3, "%3F")), String.prototype.indexOf.call(s2, "#") !== -1 && (s2 = s2.replace(ht$1, "%23")), new URL(`file://${s2}`);
}
function Z$4(r2, e2) {
  let t2 = e2 == null ? void 0 : e2.windows;
  if (typeof r2 == "string") r2 = new URL(r2);
  else if (!it$2(r2)) throw new q$f("path", ["string", "URL"], r2);
  if (r2.protocol !== "file:") throw new Y$6("file");
  return t2 ? nt$2(r2) : lt$2(r2);
}
function tt$3(r2) {
  let { hostname: e2, pathname: t2, port: s2, username: l2, password: h2, search: i2 } = r2;
  return { __proto__: null, ...r2, protocol: r2.protocol, hostname: e2 && String.prototype.startsWith.call(e2, "[") ? String.prototype.slice.call(e2, 1, -1) : e2, hash: r2.hash, search: i2, pathname: t2, path: `${t2 || ""}${i2 || ""}`, href: r2.href, port: s2 === "" ? void 0 : Number(s2), auth: l2 || h2 ? `${decodeURIComponent(l2)}:${decodeURIComponent(h2)}` : void 0 };
}
var et$1 = /%/g, V$3 = /\\/g, rt$2 = /\n/g, at$2 = /\r/g, st$3 = /\t/g, ot$3 = /\?/g, ht$1 = /#/g;
function D$8(r2, e2) {
  let t2 = e2 == null ? void 0 : e2.windows;
  return String.prototype.indexOf.call(r2, "%") !== -1 && (r2 = r2.replace(et$1, "%25")), !t2 && String.prototype.indexOf.call(r2, "\\") !== -1 && (r2 = r2.replace(V$3, "%5C")), String.prototype.indexOf.call(r2, `
`) !== -1 && (r2 = r2.replace(rt$2, "%0A")), String.prototype.indexOf.call(r2, "\r") !== -1 && (r2 = r2.replace(at$2, "%0D")), String.prototype.indexOf.call(r2, "	") !== -1 && (r2 = r2.replace(st$3, "%09")), r2;
}
function nt$2(r2) {
  let e2 = r2.hostname, t2 = r2.pathname;
  for (let h2 = 0; h2 < t2.length; h2++) if (t2[h2] === "%") {
    let i2 = t2.codePointAt(h2 + 2) | 32;
    if (t2[h2 + 1] === "2" && i2 === 102 || t2[h2 + 1] === "5" && i2 === 99) throw new j$n(String.raw`must not include encoded \ or / characters`);
  }
  if (t2 = t2.replace(Q$7, "\\"), t2 = decodeURIComponent(t2), e2 !== "") return `\\\\${q$g(e2)}${t2}`;
  let s2 = String.prototype.codePointAt.call(t2, 1) | 32, l2 = String.prototype.charAt.call(t2, 2);
  if (s2 < 97 || s2 > 122 || l2 !== ":") throw new j$n("must be absolute");
  return String.prototype.slice.call(t2, 1);
}
function lt$2(r2) {
  if (r2.hostname !== "") throw new J$3("??");
  let e2 = r2.pathname;
  for (let t2 = 0; t2 < e2.length; t2++) if (e2[t2] === "%") {
    let s2 = String.prototype.codePointAt.call(e2, t2 + 2) | 32;
    if (e2[t2 + 1] === "2" && s2 === 102) throw new j$n("must not include encoded / characters");
  }
  return decodeURIComponent(e2);
}
function it$2(r2) {
  return !!((r2 == null ? void 0 : r2.href) && r2.protocol && r2.auth === void 0 && r2.path === void 0);
}
var U$7 = class O {
  constructor() {
    __publicField(this, "auth", null);
    __publicField(this, "hash", null);
    __publicField(this, "host", null);
    __publicField(this, "hostname", null);
    __publicField(this, "href", null);
    __publicField(this, "path", null);
    __publicField(this, "pathname", null);
    __publicField(this, "protocol", null);
    __publicField(this, "search", null);
    __publicField(this, "slashes", null);
    __publicField(this, "port", null);
    __publicField(this, "query", null);
  }
  parse(e2, t2, s2) {
    if (typeof e2 != "string") throw new q$f("url", "string", e2);
    let l2 = false, h2 = false, i2 = -1, o2 = -1, a2 = "", p3 = 0;
    for (let c2 = 0, f2 = false, g2 = false; c2 < e2.length; ++c2) {
      let A2 = e2.charCodeAt(c2), v2 = A2 < 33 || A2 === 160 || A2 === 65279;
      if (i2 === -1) {
        if (v2) continue;
        p3 = i2 = c2;
      } else f2 ? v2 || (o2 = -1, f2 = false) : v2 && (o2 = c2, f2 = true);
      if (g2) !l2 && A2 === 35 && (l2 = true);
      else switch (A2) {
        case 64:
          h2 = true;
          break;
        case 35:
          l2 = true;
        case 63:
          g2 = true;
          break;
        case 92:
          c2 - p3 > 0 && (a2 += e2.slice(p3, c2)), a2 += "/", p3 = c2 + 1;
          break;
      }
    }
    if (i2 !== -1 && (p3 === i2 ? o2 === -1 ? i2 === 0 ? a2 = e2 : a2 = e2.slice(i2) : a2 = e2.slice(i2, o2) : o2 === -1 && p3 < e2.length ? a2 += e2.slice(p3) : o2 !== -1 && p3 < o2 && (a2 += e2.slice(p3, o2))), !s2 && !l2 && !h2) {
      let c2 = ft$1.exec(a2);
      if (c2) return this.path = a2, this.href = a2, this.pathname = c2[1], c2[2] ? (this.search = c2[2], t2 ? this.query = w$i(this.search.slice(1)) : this.query = this.search.slice(1)) : t2 && (this.search = null, this.query = { __proto__: null }), this;
    }
    let u2 = ct$1.exec(a2), w2, d2;
    u2 && (w2 = u2[0], d2 = w2.toLowerCase(), this.protocol = d2, a2 = a2.slice(w2.length));
    let b2;
    if ((s2 || w2 || ut$2.test(a2)) && (b2 = a2.charCodeAt(0) === 47 && a2.charCodeAt(1) === 47, b2 && !(w2 && T$8.has(d2)) && (a2 = a2.slice(2), this.slashes = true)), !T$8.has(d2) && (b2 || w2 && !C$f.has(w2))) {
      let c2 = -1, f2 = -1, g2 = -1;
      for (let y2 = 0; y2 < a2.length; ++y2) {
        switch (a2.charCodeAt(y2)) {
          case 9:
          case 10:
          case 13:
            a2 = a2.slice(0, y2) + a2.slice(y2 + 1), y2 -= 1;
            break;
          case 32:
          case 34:
          case 37:
          case 39:
          case 59:
          case 60:
          case 62:
          case 92:
          case 94:
          case 96:
          case 123:
          case 124:
          case 125:
            g2 === -1 && (g2 = y2);
            break;
          case 35:
          case 47:
          case 63:
            g2 === -1 && (g2 = y2), c2 = y2;
            break;
          case 64:
            f2 = y2, g2 = -1;
            break;
        }
        if (c2 !== -1) break;
      }
      i2 = 0, f2 !== -1 && (this.auth = decodeURIComponent(a2.slice(0, f2)), i2 = f2 + 1), g2 === -1 ? (this.host = a2.slice(i2), a2 = "") : (this.host = a2.slice(i2, g2), a2 = a2.slice(g2)), this.parseHost(), typeof this.hostname != "string" && (this.hostname = "");
      let A2 = this.hostname, v2 = N$7(A2);
      if (v2 || (a2 = At$1(this, a2, A2, e2)), this.hostname.length > wt$2 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), this.hostname !== "") {
        if (v2) {
          if (dt$1.test(this.hostname)) throw new P$f(e2);
        } else if (this.hostname = y$n(this.hostname), this.hostname === "" || mt.test(this.hostname)) throw new P$f(e2);
      }
      let W2 = this.port ? ":" + this.port : "", z2 = this.hostname || "";
      this.host = z2 + W2, v2 && (this.hostname = this.hostname.slice(1, -1), a2[0] !== "/" && (a2 = "/" + a2));
    }
    K$6.has(d2) || (a2 = Rt$1(a2));
    let n2 = -1, m2 = -1;
    for (let c2 = 0; c2 < a2.length; ++c2) {
      let f2 = a2.charCodeAt(c2);
      if (f2 === 35) {
        this.hash = a2.slice(c2), m2 = c2;
        break;
      } else f2 === 63 && n2 === -1 && (n2 = c2);
    }
    n2 !== -1 ? (m2 === -1 ? (this.search = a2.slice(n2), this.query = a2.slice(n2 + 1)) : (this.search = a2.slice(n2, m2), this.query = a2.slice(n2 + 1, m2)), t2 && (this.query = w$i(this.query))) : t2 && (this.search = null, this.query = { __proto__: null });
    let R2 = n2 !== -1 && (m2 === -1 || n2 < m2) ? n2 : m2;
    if (R2 === -1 ? a2.length > 0 && (this.pathname = a2) : R2 > 0 && (this.pathname = a2.slice(0, R2)), C$f.has(d2) && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      let c2 = this.pathname || "", f2 = this.search || "";
      this.path = c2 + f2;
    }
    return this.href = this.format(), this;
  }
  format() {
    let e2 = this.auth || "";
    e2 && (e2 = s$5(e2, gt$1, f$l), e2 += "@");
    let t2 = this.protocol || "", s2 = this.pathname || "", l2 = this.hash || "", h2 = "", i2 = "";
    this.host ? h2 = e2 + this.host : this.hostname && (h2 = e2 + (this.hostname.includes(":") && !N$7(this.hostname) ? "[" + this.hostname + "]" : this.hostname), this.port && (h2 += ":" + this.port)), this.query !== null && typeof this.query == "object" && (i2 = j$o(this.query));
    let o2 = this.search || i2 && "?" + i2 || "";
    t2 && t2.charCodeAt(t2.length - 1) !== 58 && (t2 += ":");
    let a2 = "", p3 = 0;
    for (let u2 = 0; u2 < s2.length; ++u2) switch (s2.charCodeAt(u2)) {
      case 35:
        u2 - p3 > 0 && (a2 += s2.slice(p3, u2)), a2 += "%23", p3 = u2 + 1;
        break;
      case 63:
        u2 - p3 > 0 && (a2 += s2.slice(p3, u2)), a2 += "%3F", p3 = u2 + 1;
        break;
    }
    return p3 > 0 && (p3 === s2.length ? s2 = a2 : s2 = a2 + s2.slice(p3)), (this.slashes || C$f.has(t2)) && (this.slashes || h2 ? (s2 && s2.charCodeAt(0) !== 47 && (s2 = "/" + s2), h2 = "//" + h2) : t2.length >= 4 && t2.charCodeAt(0) === 102 && t2.charCodeAt(1) === 105 && t2.charCodeAt(2) === 108 && t2.charCodeAt(3) === 101 && (h2 = "//")), o2 = o2.replace(/#/g, "%23"), l2 && l2.charCodeAt(0) !== 35 && (l2 = "#" + l2), o2 && o2.charCodeAt(0) !== 63 && (o2 = "?" + o2), t2 + h2 + s2 + o2 + l2;
  }
  resolve(e2) {
    return this.resolveObject(S$g(e2, false, true)).format();
  }
  resolveObject(e2) {
    if (typeof e2 == "string") {
      let n2 = new O();
      n2.parse(e2, false, true), e2 = n2;
    }
    let t2 = new O();
    if (Object.assign(t2, this), t2.hash = e2.hash, e2.href === "") return t2.href = t2.format(), t2;
    if (e2.slashes && !e2.protocol) {
      let n2 = Object.keys(e2).reduce((m2, R2) => (R2 !== "protocol" && (m2[R2] = e2[R2]), m2), {});
      return Object.assign(t2, n2), C$f.has(t2.protocol) && t2.hostname && !t2.pathname && (t2.path = t2.pathname = "/"), t2.href = t2.format(), t2;
    }
    if (e2.protocol && e2.protocol !== t2.protocol) {
      if (!C$f.has(e2.protocol)) return Object.assign(t2, e2), t2.href = t2.format(), t2;
      if (t2.protocol = e2.protocol, !e2.host && !/^file:?$/.test(e2.protocol) && !T$8.has(e2.protocol)) {
        let n2 = (e2.pathname || "").split("/");
        for (; n2.length > 0 && !(e2.host = n2.shift()); ) ;
        e2.host || (e2.host = ""), e2.hostname || (e2.hostname = ""), n2[0] !== "" && n2.unshift(""), n2.length < 2 && n2.unshift(""), t2.pathname = n2.join("/");
      } else t2.pathname = e2.pathname;
      if (t2.search = e2.search, t2.query = e2.query, t2.host = e2.host || "", t2.auth = e2.auth, t2.hostname = e2.hostname || e2.host, t2.port = e2.port, t2.pathname || t2.search) {
        let n2 = t2.pathname || "", m2 = t2.search || "";
        t2.path = n2 + m2;
      }
      return t2.slashes = t2.slashes || e2.slashes, t2.href = t2.format(), t2;
    }
    let s2 = t2.pathname && t2.pathname.charAt(0) === "/", l2 = e2.host || e2.pathname && e2.pathname.charAt(0) === "/", h2 = l2 || s2 || t2.host && e2.pathname, i2 = h2, o2 = t2.pathname && t2.pathname.split("/") || [], a2 = e2.pathname && e2.pathname.split("/") || [], p3 = t2.protocol && !C$f.has(t2.protocol);
    if (p3 && (t2.hostname = "", t2.port = null, t2.host && (o2[0] === "" ? o2[0] = t2.host : o2.unshift(t2.host)), t2.host = "", e2.protocol && (e2.hostname = null, e2.port = null, t2.auth = null, e2.host && (a2[0] === "" ? a2[0] = e2.host : a2.unshift(e2.host)), e2.host = null), h2 = h2 && (a2[0] === "" || o2[0] === "")), l2) (e2.host || e2.host === "") && (t2.host !== e2.host && (t2.auth = null), t2.host = e2.host, t2.port = e2.port), (e2.hostname || e2.hostname === "") && (t2.hostname !== e2.hostname && (t2.auth = null), t2.hostname = e2.hostname), t2.search = e2.search, t2.query = e2.query, o2 = a2;
    else if (a2.length > 0) o2 || (o2 = []), o2.pop(), o2 = o2.concat(a2), t2.search = e2.search, t2.query = e2.query;
    else if (e2.search !== null && e2.search !== void 0) {
      if (p3) {
        t2.hostname = t2.host = o2.shift();
        let n2 = t2.host && t2.host.indexOf("@") > 0 && t2.host.split("@");
        n2 && (t2.auth = n2.shift(), t2.host = t2.hostname = n2.shift());
      }
      return t2.search = e2.search, t2.query = e2.query, (t2.pathname !== null || t2.search !== null) && (t2.path = (t2.pathname ? t2.pathname : "") + (t2.search ? t2.search : "")), t2.href = t2.format(), t2;
    }
    if (o2.length === 0) return t2.pathname = null, t2.search ? t2.path = "/" + t2.search : t2.path = null, t2.href = t2.format(), t2;
    let u2 = o2.at(-1), w2 = (t2.host || e2.host || o2.length > 1) && (u2 === "." || u2 === "..") || u2 === "", d2 = 0;
    for (let n2 = o2.length - 1; n2 >= 0; n2--) u2 = o2[n2], u2 === "." ? _$7(o2, n2) : u2 === ".." ? (_$7(o2, n2), d2++) : d2 && (_$7(o2, n2), d2--);
    if (!h2 && !i2) for (; d2--; ) o2.unshift("..");
    h2 && o2[0] !== "" && (!o2[0] || o2[0].charAt(0) !== "/") && o2.unshift(""), w2 && o2.join("/").slice(-1) !== "/" && o2.push("");
    let b2 = o2[0] === "" || o2[0] && o2[0].charAt(0) === "/";
    if (p3) {
      t2.hostname = t2.host = b2 ? "" : o2.length > 0 ? o2.shift() : "";
      let n2 = t2.host && t2.host.indexOf("@") > 0 ? t2.host.split("@") : false;
      n2 && (t2.auth = n2.shift(), t2.host = t2.hostname = n2.shift());
    }
    return h2 = h2 || t2.host && o2.length, h2 && !b2 && o2.unshift(""), o2.length === 0 ? (t2.pathname = null, t2.path = null) : t2.pathname = o2.join("/"), (t2.pathname !== null || t2.search !== null) && (t2.path = (t2.pathname ? t2.pathname : "") + (t2.search ? t2.search : "")), t2.auth = e2.auth || t2.auth, t2.slashes = t2.slashes || e2.slashes, t2.href = t2.format(), t2;
  }
  parseHost() {
    let e2 = this.host, t2 = pt$1.exec(e2);
    if (t2) {
      let s2 = t2[0];
      s2 !== ":" && (this.port = s2.slice(1)), e2 = e2.slice(0, e2.length - s2.length);
    }
    e2 && (this.hostname = e2);
  }
}, ct$1 = /^[\d+.a-z-]+:/i, pt$1 = /:\d*$/, ut$2 = /^\/\/[^/@]+@[^/@]+/, ft$1 = /^(\/\/?(?!\/)[^\s?]*)(\?\S*)?$/, mt = /[\0\t\n\r #%/:<>?@[\\\]^|]/, dt$1 = /[\0\t\n\r #%/<>?@\\^|]/, gt$1 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]), yt$1 = ["", "", "", "", "", "", "", "", "", "%09", "%0A", "", "", "%0D", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "%20", "", "%22", "", "", "", "", "%27", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "%3C", "", "%3E", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "%5C", "", "%5E", "", "%60", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "%7B", "%7C", "%7D"], wt$2 = 255, k$b = false;
function S$g(r2, e2, t2) {
  if (k$b || (k$b = true, console.warn("[DeprecationWarning] [unenv] [node:url] DEP0169: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.")), r2 instanceof U$7) return r2;
  let s2 = new U$7();
  return s2.parse(r2, e2, t2), s2;
}
function N$7(r2) {
  return String.prototype.charCodeAt.call(r2, 0) === 91 && String.prototype.charCodeAt.call(r2, r2.length - 1) === 93;
}
var F$8 = true;
function At$1(r2, e2, t2, s2) {
  for (let l2 = 0; l2 < t2.length; ++l2) {
    let h2 = t2.charCodeAt(l2);
    if (!(h2 !== 47 && h2 !== 92 && h2 !== 35 && h2 !== 63 && h2 !== 58)) return F$8 && h2 === 58 && (console.warn(`[DeprecationWarning] [unenv] [node:url] DEP0170: The URL ${s2} is invalid. Future versions of Node.js will throw an error.`), F$8 = false), r2.hostname = t2.slice(0, l2), `/${t2.slice(l2)}${e2}`;
  }
  return e2;
}
function Rt$1(r2) {
  let e2 = "", t2 = 0;
  for (let s2 = 0; s2 < r2.length; ++s2) {
    let l2 = yt$1[r2.charCodeAt(s2)];
    l2 && (s2 > t2 && (e2 += r2.slice(t2, s2)), e2 += l2, t2 = s2 + 1);
  }
  return t2 === 0 ? r2 : (t2 < r2.length && (e2 += r2.slice(t2)), e2);
}
function vt$1(r2, e2) {
  if (typeof r2 == "string") r2 = S$g(r2);
  else {
    if (typeof r2 != "object" || r2 === null) throw new q$f("urlObject", ["Object", "string"], r2);
    if (r2 instanceof $$4) {
      let t2 = true, s2 = false, l2 = true, h2 = true;
      e2 && (e2.fragment != null && (t2 = !!e2.fragment), e2.unicode != null && (s2 = !!e2.unicode), e2.search != null && (l2 = !!e2.search), e2.auth != null && (h2 = !!e2.auth));
      let i2 = new $$4(r2.href);
      return t2 || (i2.hash = ""), l2 || (i2.search = ""), h2 || (i2.username = i2.password = ""), s2 ? U$7.prototype.format.call(i2) : i2.href;
    }
  }
  return U$7.prototype.format.call(r2);
}
function bt$2(r2, e2) {
  return S$g(r2, false, true).resolve(e2);
}
function Ct$1(r2, e2) {
  return r2 ? S$g(r2, false, true).resolveObject(e2) : e2;
}
function Lt$2(r2, e2) {
  return X$4(r2, e2);
}
var $$4 = globalThis.URL, Ut$1 = globalThis.URLSearchParams, St$1 = y$n, _t$1 = q$g, $t$1 = { Url: U$7, parse: S$g, resolve: bt$2, resolveObject: Ct$1, format: vt$1, URL: $$4, URLSearchParams: Ut$1, domainToASCII: St$1, domainToUnicode: _t$1, pathToFileURL: Lt$2, fileURLToPath: Z$4, urlToHttpOptions: tt$3 };
const __1$$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  URL: $$4,
  URLSearchParams: Ut$1,
  Url: U$7,
  default: $t$1,
  domainToASCII: St$1,
  domainToUnicode: _t$1,
  fileURLToPath: Z$4,
  format: vt$1,
  parse: S$g,
  pathToFileURL: Lt$2,
  resolve: bt$2,
  resolveObject: Ct$1,
  urlToHttpOptions: tt$3
}, Symbol.toStringTag, { value: "Module" }));
var o$9 = Object.create;
var b$f = Object.defineProperty;
var d$q = Object.getOwnPropertyDescriptor;
var c$l = Object.getOwnPropertyNames;
var u$i = Object.getPrototypeOf, s$4 = Object.prototype.hasOwnProperty;
var y$m = (r2, g2) => () => (g2 || r2((g2 = { exports: {} }).exports, g2), g2.exports);
var w$h = (r2, g2, t2, l2) => {
  if (g2 && typeof g2 == "object" || typeof g2 == "function") for (let i2 of c$l(g2)) !s$4.call(r2, i2) && i2 !== t2 && b$f(r2, i2, { get: () => g2[i2], enumerable: !(l2 = d$q(g2, i2)) || l2.enumerable });
  return r2;
};
var k$a = (r2, g2, t2) => (t2 = r2 != null ? o$9(u$i(r2)) : {}, w$h(!r2 || !r2.__esModule ? b$f(t2, "default", { value: r2, enumerable: true }) : t2, r2));
var n$f = y$m((p3, a2) => {
  var e2 = String, B3 = function() {
    return { isColorSupported: false, reset: e2, bold: e2, dim: e2, italic: e2, underline: e2, inverse: e2, hidden: e2, strikethrough: e2, black: e2, red: e2, green: e2, yellow: e2, blue: e2, magenta: e2, cyan: e2, white: e2, gray: e2, bgBlack: e2, bgRed: e2, bgGreen: e2, bgYellow: e2, bgBlue: e2, bgMagenta: e2, bgCyan: e2, bgWhite: e2, blackBright: e2, redBright: e2, greenBright: e2, yellowBright: e2, blueBright: e2, magentaBright: e2, cyanBright: e2, whiteBright: e2, bgBlackBright: e2, bgRedBright: e2, bgGreenBright: e2, bgYellowBright: e2, bgBlueBright: e2, bgMagentaBright: e2, bgCyanBright: e2, bgWhiteBright: e2 };
  };
  a2.exports = B3();
  a2.exports.createColors = B3;
});
var h$n = k$a(n$f()), { isColorSupported: C$e, reset: f$k, bold: x$p, dim: v$e, italic: G$6, underline: M$7, inverse: R$8, hidden: W$8, strikethrough: Y$5, black: S$f, red: j$m, green: q$e, yellow: z$a, blue: A$f, magenta: D$7, cyan: E$4, white: F$7, gray: H$5, bgBlack: I$a, bgRed: J$2, bgGreen: K$5, bgYellow: L$7, bgBlue: N$6, bgMagenta: O$7, bgCyan: P$e, bgWhite: Q$6, blackBright: T$7, redBright: U$6, greenBright: V$2, yellowBright: X$3, blueBright: Z$3, magentaBright: _$6, cyanBright: $$3, whiteBright: ee$2, bgBlackBright: ge$1, bgRedBright: re$2, bgGreenBright: te$2, bgYellowBright: ie$1, bgBlueBright: he$1, bgMagentaBright: ae$1, bgCyanBright: le$1, bgWhiteBright: be$1, createColors: Be } = h$n, ne$2 = h$n.default ?? h$n;
const __0$$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bgBlack: I$a,
  bgBlackBright: ge$1,
  bgBlue: N$6,
  bgBlueBright: he$1,
  bgCyan: P$e,
  bgCyanBright: le$1,
  bgGreen: K$5,
  bgGreenBright: te$2,
  bgMagenta: O$7,
  bgMagentaBright: ae$1,
  bgRed: J$2,
  bgRedBright: re$2,
  bgWhite: Q$6,
  bgWhiteBright: be$1,
  bgYellow: L$7,
  bgYellowBright: ie$1,
  black: S$f,
  blackBright: T$7,
  blue: A$f,
  blueBright: Z$3,
  bold: x$p,
  createColors: Be,
  cyan: E$4,
  cyanBright: $$3,
  default: ne$2,
  dim: v$e,
  gray: H$5,
  green: q$e,
  greenBright: V$2,
  hidden: W$8,
  inverse: R$8,
  isColorSupported: C$e,
  italic: G$6,
  magenta: D$7,
  magentaBright: _$6,
  red: j$m,
  redBright: U$6,
  reset: f$k,
  strikethrough: Y$5,
  underline: M$7,
  white: F$7,
  whiteBright: ee$2,
  yellow: z$a,
  yellowBright: X$3
}, Symbol.toStringTag, { value: "Module" }));
var w$g = Object.create;
var P$d = Object.defineProperty;
var D$6 = Object.getOwnPropertyDescriptor;
var Q$5 = Object.getOwnPropertyNames;
var m$u = Object.getPrototypeOf, K$4 = Object.prototype.hasOwnProperty;
var F$6 = (r2, o2) => () => (o2 || r2((o2 = { exports: {} }).exports, o2), o2.exports);
var W$7 = (r2, o2, C2, c2) => {
  if (o2 && typeof o2 == "object" || typeof o2 == "function") for (let E2 of Q$5(o2)) !K$4.call(r2, E2) && E2 !== C2 && P$d(r2, E2, { get: () => o2[E2], enumerable: !(c2 = D$6(o2, E2)) || c2.enumerable });
  return r2;
};
var G$5 = (r2, o2, C2) => (C2 = r2 != null ? w$g(m$u(r2)) : {}, W$7(!r2 || !r2.__esModule ? P$d(C2, "default", { value: r2, enumerable: true }) : C2, r2));
var B$7 = F$6((v2, k2) => {
  var h2 = /[\t\n\f\r "#'()/;[\\\]{}]/g, f2 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Y3 = /.[\r\n"'(/\\]/, g2 = /[\da-f]/i;
  k2.exports = function(o2, C2 = {}) {
    let c2 = o2.css.valueOf(), E2 = C2.ignoreErrors, s2, O3, i2, e2, R2, n2, a2, l2, A2, T2, U2 = c2.length, t2 = 0, L2 = [], S2 = [];
    function b2() {
      return t2;
    }
    function N2(d2) {
      throw o2.error("Unclosed " + d2, t2);
    }
    function p3() {
      return S2.length === 0 && t2 >= U2;
    }
    function x2(d2) {
      if (S2.length) return S2.pop();
      if (t2 >= U2) return;
      let _2 = d2 ? d2.ignoreUnclosed : false;
      switch (s2 = c2.charCodeAt(t2), s2) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12: {
          e2 = t2;
          do
            e2 += 1, s2 = c2.charCodeAt(e2);
          while (s2 === 32 || s2 === 10 || s2 === 9 || s2 === 13 || s2 === 12);
          n2 = ["space", c2.slice(t2, e2)], t2 = e2 - 1;
          break;
        }
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let I2 = String.fromCharCode(s2);
          n2 = [I2, I2, t2];
          break;
        }
        case 40: {
          if (T2 = L2.length ? L2.pop()[1] : "", A2 = c2.charCodeAt(t2 + 1), T2 === "url" && A2 !== 39 && A2 !== 34 && A2 !== 32 && A2 !== 10 && A2 !== 9 && A2 !== 12 && A2 !== 13) {
            e2 = t2;
            do {
              if (a2 = false, e2 = c2.indexOf(")", e2 + 1), e2 === -1) if (E2 || _2) {
                e2 = t2;
                break;
              } else N2("bracket");
              for (l2 = e2; c2.charCodeAt(l2 - 1) === 92; ) l2 -= 1, a2 = !a2;
            } while (a2);
            n2 = ["brackets", c2.slice(t2, e2 + 1), t2, e2], t2 = e2;
          } else e2 = c2.indexOf(")", t2 + 1), O3 = c2.slice(t2, e2 + 1), e2 === -1 || Y3.test(O3) ? n2 = ["(", "(", t2] : (n2 = ["brackets", O3, t2, e2], t2 = e2);
          break;
        }
        case 39:
        case 34: {
          R2 = s2 === 39 ? "'" : '"', e2 = t2;
          do {
            if (a2 = false, e2 = c2.indexOf(R2, e2 + 1), e2 === -1) if (E2 || _2) {
              e2 = t2 + 1;
              break;
            } else N2("string");
            for (l2 = e2; c2.charCodeAt(l2 - 1) === 92; ) l2 -= 1, a2 = !a2;
          } while (a2);
          n2 = ["string", c2.slice(t2, e2 + 1), t2, e2], t2 = e2;
          break;
        }
        case 64: {
          h2.lastIndex = t2 + 1, h2.test(c2), h2.lastIndex === 0 ? e2 = c2.length - 1 : e2 = h2.lastIndex - 2, n2 = ["at-word", c2.slice(t2, e2 + 1), t2, e2], t2 = e2;
          break;
        }
        case 92: {
          for (e2 = t2, i2 = true; c2.charCodeAt(e2 + 1) === 92; ) e2 += 1, i2 = !i2;
          if (s2 = c2.charCodeAt(e2 + 1), i2 && s2 !== 47 && s2 !== 32 && s2 !== 10 && s2 !== 9 && s2 !== 13 && s2 !== 12 && (e2 += 1, g2.test(c2.charAt(e2)))) {
            for (; g2.test(c2.charAt(e2 + 1)); ) e2 += 1;
            c2.charCodeAt(e2 + 1) === 32 && (e2 += 1);
          }
          n2 = ["word", c2.slice(t2, e2 + 1), t2, e2], t2 = e2;
          break;
        }
        default: {
          s2 === 47 && c2.charCodeAt(t2 + 1) === 42 ? (e2 = c2.indexOf("*/", t2 + 2) + 1, e2 === 0 && (E2 || _2 ? e2 = c2.length : N2("comment")), n2 = ["comment", c2.slice(t2, e2 + 1), t2, e2], t2 = e2) : (f2.lastIndex = t2 + 1, f2.test(c2), f2.lastIndex === 0 ? e2 = c2.length - 1 : e2 = f2.lastIndex - 2, n2 = ["word", c2.slice(t2, e2 + 1), t2, e2], L2.push(n2), t2 = e2);
          break;
        }
      }
      return t2++, n2;
    }
    function H2(d2) {
      S2.push(d2);
    }
    return { back: H2, endOfFile: p3, nextToken: x2, position: b2 };
  };
});
var u$h = G$5(B$7()), M$6 = u$h.default ?? u$h;
const __5$$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M$6
}, Symbol.toStringTag, { value: "Module" }));
var require$t = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "picocolors":
      return e2(__0$$7);
    case "postcss/lib/tokenize":
      return e2(__5$$2);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var w$f = Object.create;
var a$h = Object.defineProperty;
var p$o = Object.getOwnPropertyDescriptor;
var m$t = Object.getOwnPropertyNames;
var k$9 = Object.getPrototypeOf, h$m = Object.prototype.hasOwnProperty;
var c$k = ((e2) => typeof require$t < "u" ? require$t : typeof Proxy < "u" ? new Proxy(e2, { get: (t2, n2) => (typeof require$t < "u" ? require$t : t2)[n2] }) : e2)(function(e2) {
  if (typeof require$t < "u") return require$t.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var d$p = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var x$o = (e2, t2, n2, l2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let o2 of m$t(t2)) !h$m.call(e2, o2) && o2 !== n2 && a$h(e2, o2, { get: () => t2[o2], enumerable: !(l2 = p$o(t2, o2)) || l2.enumerable });
  return e2;
};
var I$9 = (e2, t2, n2) => (n2 = e2 != null ? w$f(k$9(e2)) : {}, x$o(!e2 || !e2.__esModule ? a$h(n2, "default", { value: e2, enumerable: true }) : n2, e2));
var y$l = d$p((q3, f2) => {
  var r2 = c$k("picocolors"), T2 = c$k("postcss/lib/tokenize"), s2;
  function H2(e2) {
    s2 = e2;
  }
  var b2 = { ";": r2.yellow, ":": r2.yellow, "(": r2.cyan, ")": r2.cyan, "[": r2.yellow, "]": r2.yellow, "{": r2.yellow, "}": r2.yellow, "at-word": r2.cyan, brackets: r2.cyan, call: r2.cyan, class: r2.yellow, comment: r2.gray, hash: r2.magenta, string: r2.green };
  function j3([e2, t2], n2) {
    if (e2 === "word") {
      if (t2[0] === ".") return "class";
      if (t2[0] === "#") return "hash";
    }
    if (!n2.endOfFile()) {
      let l2 = n2.nextToken();
      if (n2.back(l2), l2[0] === "brackets" || l2[0] === "(") return "call";
    }
    return e2;
  }
  function u2(e2) {
    let t2 = T2(new s2(e2), { ignoreErrors: true }), n2 = "";
    for (; !t2.endOfFile(); ) {
      let l2 = t2.nextToken(), o2 = b2[j3(l2, t2)];
      o2 ? n2 += l2[1].split(/\r?\n/).map((g2) => o2(g2)).join(`
`) : n2 += l2[1];
    }
    return n2;
  }
  u2.registerInput = H2;
  f2.exports = u2;
});
var i$c = I$9(y$l()), { registerInput: F$5 } = i$c, G$4 = i$c.default ?? i$c;
const __5$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G$4,
  registerInput: F$5
}, Symbol.toStringTag, { value: "Module" }));
var require$s = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "picocolors":
      return e2(__0$$7);
    case "postcss/lib/terminal-highlight":
      return e2(__5$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var w$e = Object.create;
var p$n = Object.defineProperty;
var T$6 = Object.getOwnPropertyDescriptor;
var H$4 = Object.getOwnPropertyNames;
var W$6 = Object.getPrototypeOf, v$d = Object.prototype.hasOwnProperty;
var S$e = ((t2) => typeof require$s < "u" ? require$s : typeof Proxy < "u" ? new Proxy(t2, { get: (e2, i2) => (typeof require$s < "u" ? require$s : e2)[i2] }) : t2)(function(t2) {
  if (typeof require$s < "u") return require$s.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var z$9 = (t2, e2) => () => (e2 || t2((e2 = { exports: {} }).exports, e2), e2.exports);
var A$e = (t2, e2, i2, s2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let r2 of H$4(e2)) !v$d.call(t2, r2) && r2 !== i2 && p$n(t2, r2, { get: () => e2[r2], enumerable: !(s2 = T$6(e2, r2)) || s2.enumerable });
  return t2;
};
var B$6 = (t2, e2, i2) => (i2 = t2 != null ? w$e(W$6(t2)) : {}, A$e(!t2 || !t2.__esModule ? p$n(i2, "default", { value: t2, enumerable: true }) : i2, t2));
var C$d = z$9((F2, b2) => {
  var x2 = S$e("picocolors"), M2 = S$e("postcss/lib/terminal-highlight"), u2 = class t2 extends Error {
    constructor(e2, i2, s2, r2, h2, a2) {
      super(e2), this.name = "CssSyntaxError", this.reason = e2, h2 && (this.file = h2), r2 && (this.source = r2), a2 && (this.plugin = a2), typeof i2 < "u" && typeof s2 < "u" && (typeof i2 == "number" ? (this.line = i2, this.column = s2) : (this.line = i2.line, this.column = i2.column, this.endLine = s2.line, this.endColumn = s2.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, t2);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(e2) {
      if (!this.source) return "";
      let i2 = this.source;
      e2 == null && (e2 = x2.isColorSupported);
      let s2 = (n2) => n2, r2 = (n2) => n2, h2 = (n2) => n2;
      if (e2) {
        let { bold: n2, gray: m2, red: o2 } = x2.createColors(true);
        r2 = (l2) => n2(o2(l2)), s2 = (l2) => m2(l2), M2 && (h2 = (l2) => M2(l2));
      }
      let a2 = i2.split(/\r?\n/), f2 = Math.max(this.line - 3, 0), g2 = Math.min(this.line + 2, a2.length), y2 = String(g2).length;
      return a2.slice(f2, g2).map((n2, m2) => {
        let o2 = f2 + 1 + m2, l2 = " " + (" " + o2).slice(-y2) + " | ";
        if (o2 === this.line) {
          if (n2.length > 160) {
            let c2 = 20, L2 = Math.max(0, this.column - c2), j3 = Math.max(this.column + c2, this.endColumn + c2), k2 = n2.slice(L2, j3), q3 = s2(l2.replace(/\d/g, " ")) + n2.slice(0, Math.min(this.column - 1, c2 - 1)).replace(/[^\t]/g, " ");
            return r2(">") + s2(l2) + h2(k2) + `
 ` + q3 + r2("^");
          }
          let E2 = s2(l2.replace(/\d/g, " ")) + n2.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return r2(">") + s2(l2) + h2(n2) + `
 ` + E2 + r2("^");
        }
        return " " + s2(l2) + h2(n2);
      }).join(`
`);
    }
    toString() {
      let e2 = this.showSourceCode();
      return e2 && (e2 = `

` + e2 + `
`), this.name + ": " + this.message + e2;
    }
  };
  b2.exports = u2;
  u2.default = u2;
});
var d$o = B$6(C$d()), G$3 = d$o.default ?? d$o;
const __3$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G$3
}, Symbol.toStringTag, { value: "Module" }));
var c$j = Object.create;
var w$d = Object.defineProperty;
var m$s = Object.getOwnPropertyDescriptor;
var y$k = Object.getOwnPropertyNames;
var d$n = Object.getPrototypeOf, g$j = Object.prototype.hasOwnProperty;
var k$8 = (f2, e2) => () => (e2 || f2((e2 = { exports: {} }).exports, e2), e2.exports);
var C$c = (f2, e2, t2, r2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let l2 of y$k(e2)) !g$j.call(f2, l2) && l2 !== t2 && w$d(f2, l2, { get: () => e2[l2], enumerable: !(r2 = m$s(e2, l2)) || r2.enumerable });
  return f2;
};
var v$c = (f2, e2, t2) => (t2 = f2 != null ? c$j(d$n(f2)) : {}, C$c(!f2 || !f2.__esModule ? w$d(t2, "default", { value: f2, enumerable: true }) : t2, f2));
var h$l = k$8((D2, p3) => {
  var o2 = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false };
  function S2(f2) {
    return f2[0].toUpperCase() + f2.slice(1);
  }
  var n2 = class {
    constructor(e2) {
      this.builder = e2;
    }
    atrule(e2, t2) {
      let r2 = "@" + e2.name, l2 = e2.params ? this.rawValue(e2, "params") : "";
      if (typeof e2.raws.afterName < "u" ? r2 += e2.raws.afterName : l2 && (r2 += " "), e2.nodes) this.block(e2, r2 + l2);
      else {
        let a2 = (e2.raws.between || "") + (t2 ? ";" : "");
        this.builder(r2 + l2 + a2, e2);
      }
    }
    beforeAfter(e2, t2) {
      let r2;
      e2.type === "decl" ? r2 = this.raw(e2, null, "beforeDecl") : e2.type === "comment" ? r2 = this.raw(e2, null, "beforeComment") : t2 === "before" ? r2 = this.raw(e2, null, "beforeRule") : r2 = this.raw(e2, null, "beforeClose");
      let l2 = e2.parent, a2 = 0;
      for (; l2 && l2.type !== "root"; ) a2 += 1, l2 = l2.parent;
      if (r2.includes(`
`)) {
        let i2 = this.raw(e2, null, "indent");
        if (i2.length) for (let s2 = 0; s2 < a2; s2++) r2 += i2;
      }
      return r2;
    }
    block(e2, t2) {
      let r2 = this.raw(e2, "between", "beforeOpen");
      this.builder(t2 + r2 + "{", e2, "start");
      let l2;
      e2.nodes && e2.nodes.length ? (this.body(e2), l2 = this.raw(e2, "after")) : l2 = this.raw(e2, "after", "emptyBody"), l2 && this.builder(l2), this.builder("}", e2, "end");
    }
    body(e2) {
      let t2 = e2.nodes.length - 1;
      for (; t2 > 0 && e2.nodes[t2].type === "comment"; ) t2 -= 1;
      let r2 = this.raw(e2, "semicolon");
      for (let l2 = 0; l2 < e2.nodes.length; l2++) {
        let a2 = e2.nodes[l2], i2 = this.raw(a2, "before");
        i2 && this.builder(i2), this.stringify(a2, t2 !== l2 || r2);
      }
    }
    comment(e2) {
      let t2 = this.raw(e2, "left", "commentLeft"), r2 = this.raw(e2, "right", "commentRight");
      this.builder("/*" + t2 + e2.text + r2 + "*/", e2);
    }
    decl(e2, t2) {
      let r2 = this.raw(e2, "between", "colon"), l2 = e2.prop + r2 + this.rawValue(e2, "value");
      e2.important && (l2 += e2.raws.important || " !important"), t2 && (l2 += ";"), this.builder(l2, e2);
    }
    document(e2) {
      this.body(e2);
    }
    raw(e2, t2, r2) {
      let l2;
      if (r2 || (r2 = t2), t2 && (l2 = e2.raws[t2], typeof l2 < "u")) return l2;
      let a2 = e2.parent;
      if (r2 === "before" && (!a2 || a2.type === "root" && a2.first === e2 || a2 && a2.type === "document")) return "";
      if (!a2) return o2[r2];
      let i2 = e2.root();
      if (i2.rawCache || (i2.rawCache = {}), typeof i2.rawCache[r2] < "u") return i2.rawCache[r2];
      if (r2 === "before" || r2 === "after") return this.beforeAfter(e2, r2);
      {
        let s2 = "raw" + S2(r2);
        this[s2] ? l2 = this[s2](i2, e2) : i2.walk((b2) => {
          if (l2 = b2.raws[t2], typeof l2 < "u") return false;
        });
      }
      return typeof l2 > "u" && (l2 = o2[r2]), i2.rawCache[r2] = l2, l2;
    }
    rawBeforeClose(e2) {
      let t2;
      return e2.walk((r2) => {
        if (r2.nodes && r2.nodes.length > 0 && typeof r2.raws.after < "u") return t2 = r2.raws.after, t2.includes(`
`) && (t2 = t2.replace(/[^\n]+$/, "")), false;
      }), t2 && (t2 = t2.replace(/\S/g, "")), t2;
    }
    rawBeforeComment(e2, t2) {
      let r2;
      return e2.walkComments((l2) => {
        if (typeof l2.raws.before < "u") return r2 = l2.raws.before, r2.includes(`
`) && (r2 = r2.replace(/[^\n]+$/, "")), false;
      }), typeof r2 > "u" ? r2 = this.raw(t2, null, "beforeDecl") : r2 && (r2 = r2.replace(/\S/g, "")), r2;
    }
    rawBeforeDecl(e2, t2) {
      let r2;
      return e2.walkDecls((l2) => {
        if (typeof l2.raws.before < "u") return r2 = l2.raws.before, r2.includes(`
`) && (r2 = r2.replace(/[^\n]+$/, "")), false;
      }), typeof r2 > "u" ? r2 = this.raw(t2, null, "beforeRule") : r2 && (r2 = r2.replace(/\S/g, "")), r2;
    }
    rawBeforeOpen(e2) {
      let t2;
      return e2.walk((r2) => {
        if (r2.type !== "decl" && (t2 = r2.raws.between, typeof t2 < "u")) return false;
      }), t2;
    }
    rawBeforeRule(e2) {
      let t2;
      return e2.walk((r2) => {
        if (r2.nodes && (r2.parent !== e2 || e2.first !== r2) && typeof r2.raws.before < "u") return t2 = r2.raws.before, t2.includes(`
`) && (t2 = t2.replace(/[^\n]+$/, "")), false;
      }), t2 && (t2 = t2.replace(/\S/g, "")), t2;
    }
    rawColon(e2) {
      let t2;
      return e2.walkDecls((r2) => {
        if (typeof r2.raws.between < "u") return t2 = r2.raws.between.replace(/[^\s:]/g, ""), false;
      }), t2;
    }
    rawEmptyBody(e2) {
      let t2;
      return e2.walk((r2) => {
        if (r2.nodes && r2.nodes.length === 0 && (t2 = r2.raws.after, typeof t2 < "u")) return false;
      }), t2;
    }
    rawIndent(e2) {
      if (e2.raws.indent) return e2.raws.indent;
      let t2;
      return e2.walk((r2) => {
        let l2 = r2.parent;
        if (l2 && l2 !== e2 && l2.parent && l2.parent === e2 && typeof r2.raws.before < "u") {
          let a2 = r2.raws.before.split(`
`);
          return t2 = a2[a2.length - 1], t2 = t2.replace(/\S/g, ""), false;
        }
      }), t2;
    }
    rawSemicolon(e2) {
      let t2;
      return e2.walk((r2) => {
        if (r2.nodes && r2.nodes.length && r2.last.type === "decl" && (t2 = r2.raws.semicolon, typeof t2 < "u")) return false;
      }), t2;
    }
    rawValue(e2, t2) {
      let r2 = e2[t2], l2 = e2.raws[t2];
      return l2 && l2.value === r2 ? l2.raw : r2;
    }
    root(e2) {
      this.body(e2), e2.raws.after && this.builder(e2.raws.after);
    }
    rule(e2) {
      this.block(e2, this.rawValue(e2, "selector")), e2.raws.ownSemicolon && this.builder(e2.raws.ownSemicolon, e2, "end");
    }
    stringify(e2, t2) {
      if (!this[e2.type]) throw new Error("Unknown AST node type " + e2.type + ". Maybe you need to change PostCSS stringifier.");
      this[e2.type](e2, t2);
    }
  };
  p3.exports = n2;
  n2.default = n2;
});
var u$g = v$c(h$l()), R$7 = u$g.default ?? u$g;
const __1$$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R$7
}, Symbol.toStringTag, { value: "Module" }));
var require$r = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/stringifier":
      return e2(__1$$5);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var a$g = Object.create;
var u$f = Object.defineProperty;
var c$i = Object.getOwnPropertyDescriptor;
var m$r = Object.getOwnPropertyNames;
var d$m = Object.getPrototypeOf, g$i = Object.prototype.hasOwnProperty;
var p$m = ((t2) => typeof require$r < "u" ? require$r : typeof Proxy < "u" ? new Proxy(t2, { get: (r2, e2) => (typeof require$r < "u" ? require$r : r2)[e2] }) : t2)(function(t2) {
  if (typeof require$r < "u") return require$r.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var j$l = (t2, r2) => () => (r2 || t2((r2 = { exports: {} }).exports, r2), r2.exports);
var x$n = (t2, r2, e2, n2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let i2 of m$r(r2)) !g$i.call(t2, i2) && i2 !== e2 && u$f(t2, i2, { get: () => r2[i2], enumerable: !(n2 = c$i(r2, i2)) || n2.enumerable });
  return t2;
};
var y$j = (t2, r2, e2) => (e2 = t2 != null ? a$g(d$m(t2)) : {}, x$n(!t2 || !t2.__esModule ? u$f(e2, "default", { value: t2, enumerable: true }) : e2, t2));
var o$8 = j$l((S2, l2) => {
  var q3 = p$m("postcss/lib/stringifier");
  function s2(t2, r2) {
    new q3(r2).stringify(t2);
  }
  l2.exports = s2;
  s2.default = s2;
});
var f$j = y$j(o$8()), b$e = f$j.default ?? f$j;
const __10$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b$e
}, Symbol.toStringTag, { value: "Module" }));
var p$l = Object.create;
var a$f = Object.defineProperty;
var y$i = Object.getOwnPropertyDescriptor;
var c$h = Object.getOwnPropertyNames;
var n$e = Object.getPrototypeOf, x$m = Object.prototype.hasOwnProperty;
var f$i = (e2, s2) => () => (s2 || e2((s2 = { exports: {} }).exports, s2), s2.exports);
var u$e = (e2, s2, t2, r2) => {
  if (s2 && typeof s2 == "object" || typeof s2 == "function") for (let m2 of c$h(s2)) !x$m.call(e2, m2) && m2 !== t2 && a$f(e2, m2, { get: () => s2[m2], enumerable: !(r2 = y$i(s2, m2)) || r2.enumerable });
  return e2;
};
var C$b = (e2, s2, t2) => (t2 = e2 != null ? p$l(n$e(e2)) : {}, u$e(!e2 || !e2.__esModule ? a$f(t2, "default", { value: e2, enumerable: true }) : t2, e2));
var i$b = f$i((d2, l2) => {
  l2.exports.isClean = Symbol("isClean");
  l2.exports.my = Symbol("my");
});
var o$7 = C$b(i$b()), { isClean: j$k, my: S$d } = o$7, g$h = o$7.default ?? o$7;
const __7$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g$h,
  isClean: j$k,
  my: S$d
}, Symbol.toStringTag, { value: "Module" }));
var require$q = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/css-syntax-error":
      return e2(__3$$1);
    case "postcss/lib/stringifier":
      return e2(__1$$5);
    case "postcss/lib/stringify":
      return e2(__10$);
    case "postcss/lib/symbols":
      return e2(__7$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var w$c = Object.create;
var p$k = Object.defineProperty;
var g$g = Object.getOwnPropertyDescriptor;
var O$6 = Object.getOwnPropertyNames;
var I$8 = Object.getPrototypeOf, k$7 = Object.prototype.hasOwnProperty;
var h$k = ((r2) => typeof require$q < "u" ? require$q : typeof Proxy < "u" ? new Proxy(r2, { get: (e2, t2) => (typeof require$q < "u" ? require$q : e2)[t2] }) : r2)(function(r2) {
  if (typeof require$q < "u") return require$q.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var S$c = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var b$d = (r2, e2, t2, n2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let i2 of O$6(e2)) !k$7.call(r2, i2) && i2 !== t2 && p$k(r2, i2, { get: () => e2[i2], enumerable: !(n2 = g$g(e2, i2)) || n2.enumerable });
  return r2;
};
var P$c = (r2, e2, t2) => (t2 = r2 != null ? w$c(I$8(r2)) : {}, b$d(!r2 || !r2.__esModule ? p$k(t2, "default", { value: r2, enumerable: true }) : t2, r2));
var x$l = S$c((j3, y2) => {
  var A2 = h$k("postcss/lib/css-syntax-error"), C2 = h$k("postcss/lib/stringifier"), N2 = h$k("postcss/lib/stringify"), { isClean: c2, my: B3 } = h$k("postcss/lib/symbols");
  function d2(r2, e2) {
    let t2 = new r2.constructor();
    for (let n2 in r2) {
      if (!Object.prototype.hasOwnProperty.call(r2, n2) || n2 === "proxyCache") continue;
      let i2 = r2[n2], s2 = typeof i2;
      n2 === "parent" && s2 === "object" ? e2 && (t2[n2] = e2) : n2 === "source" ? t2[n2] = i2 : Array.isArray(i2) ? t2[n2] = i2.map((l2) => d2(l2, t2)) : (s2 === "object" && i2 !== null && (i2 = d2(i2)), t2[n2] = i2);
    }
    return t2;
  }
  function a2(r2, e2) {
    if (e2 && typeof e2.offset < "u") return e2.offset;
    let t2 = 1, n2 = 1, i2 = 0;
    for (let s2 = 0; s2 < r2.length; s2++) {
      if (n2 === e2.line && t2 === e2.column) {
        i2 = s2;
        break;
      }
      r2[s2] === `
` ? (t2 = 1, n2 += 1) : t2 += 1;
    }
    return i2;
  }
  var f2 = class {
    get proxyOf() {
      return this;
    }
    constructor(e2 = {}) {
      this.raws = {}, this[c2] = false, this[B3] = true;
      for (let t2 in e2) if (t2 === "nodes") {
        this.nodes = [];
        for (let n2 of e2[t2]) typeof n2.clone == "function" ? this.append(n2.clone()) : this.append(n2);
      } else this[t2] = e2[t2];
    }
    addToError(e2) {
      if (e2.postcssNode = this, e2.stack && this.source && /\n\s{4}at /.test(e2.stack)) {
        let t2 = this.source;
        e2.stack = e2.stack.replace(/\n\s{4}at /, `$&${t2.input.from}:${t2.start.line}:${t2.start.column}$&`);
      }
      return e2;
    }
    after(e2) {
      return this.parent.insertAfter(this, e2), this;
    }
    assign(e2 = {}) {
      for (let t2 in e2) this[t2] = e2[t2];
      return this;
    }
    before(e2) {
      return this.parent.insertBefore(this, e2), this;
    }
    cleanRaws(e2) {
      delete this.raws.before, delete this.raws.after, e2 || delete this.raws.between;
    }
    clone(e2 = {}) {
      let t2 = d2(this);
      for (let n2 in e2) t2[n2] = e2[n2];
      return t2;
    }
    cloneAfter(e2 = {}) {
      let t2 = this.clone(e2);
      return this.parent.insertAfter(this, t2), t2;
    }
    cloneBefore(e2 = {}) {
      let t2 = this.clone(e2);
      return this.parent.insertBefore(this, t2), t2;
    }
    error(e2, t2 = {}) {
      if (this.source) {
        let { end: n2, start: i2 } = this.rangeBy(t2);
        return this.source.input.error(e2, { column: i2.column, line: i2.line }, { column: n2.column, line: n2.line }, t2);
      }
      return new A2(e2);
    }
    getProxyProcessor() {
      return { get(e2, t2) {
        return t2 === "proxyOf" ? e2 : t2 === "root" ? () => e2.root().toProxy() : e2[t2];
      }, set(e2, t2, n2) {
        return e2[t2] === n2 || (e2[t2] = n2, (t2 === "prop" || t2 === "value" || t2 === "name" || t2 === "params" || t2 === "important" || t2 === "text") && e2.markDirty()), true;
      } };
    }
    markClean() {
      this[c2] = true;
    }
    markDirty() {
      if (this[c2]) {
        this[c2] = false;
        let e2 = this;
        for (; e2 = e2.parent; ) e2[c2] = false;
      }
    }
    next() {
      if (!this.parent) return;
      let e2 = this.parent.index(this);
      return this.parent.nodes[e2 + 1];
    }
    positionBy(e2) {
      let t2 = this.source.start;
      if (e2.index) t2 = this.positionInside(e2.index);
      else if (e2.word) {
        let n2 = "document" in this.source.input ? this.source.input.document : this.source.input.css, s2 = n2.slice(a2(n2, this.source.start), a2(n2, this.source.end)).indexOf(e2.word);
        s2 !== -1 && (t2 = this.positionInside(s2));
      }
      return t2;
    }
    positionInside(e2) {
      let t2 = this.source.start.column, n2 = this.source.start.line, i2 = "document" in this.source.input ? this.source.input.document : this.source.input.css, s2 = a2(i2, this.source.start), l2 = s2 + e2;
      for (let o2 = s2; o2 < l2; o2++) i2[o2] === `
` ? (t2 = 1, n2 += 1) : t2 += 1;
      return { column: t2, line: n2 };
    }
    prev() {
      if (!this.parent) return;
      let e2 = this.parent.index(this);
      return this.parent.nodes[e2 - 1];
    }
    rangeBy(e2) {
      let t2 = { column: this.source.start.column, line: this.source.start.line }, n2 = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: t2.column + 1, line: t2.line };
      if (e2.word) {
        let i2 = "document" in this.source.input ? this.source.input.document : this.source.input.css, l2 = i2.slice(a2(i2, this.source.start), a2(i2, this.source.end)).indexOf(e2.word);
        l2 !== -1 && (t2 = this.positionInside(l2), n2 = this.positionInside(l2 + e2.word.length));
      } else e2.start ? t2 = { column: e2.start.column, line: e2.start.line } : e2.index && (t2 = this.positionInside(e2.index)), e2.end ? n2 = { column: e2.end.column, line: e2.end.line } : typeof e2.endIndex == "number" ? n2 = this.positionInside(e2.endIndex) : e2.index && (n2 = this.positionInside(e2.index + 1));
      return (n2.line < t2.line || n2.line === t2.line && n2.column <= t2.column) && (n2 = { column: t2.column + 1, line: t2.line }), { end: n2, start: t2 };
    }
    raw(e2, t2) {
      return new C2().raw(this, e2, t2);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...e2) {
      if (this.parent) {
        let t2 = this, n2 = false;
        for (let i2 of e2) i2 === this ? n2 = true : n2 ? (this.parent.insertAfter(t2, i2), t2 = i2) : this.parent.insertBefore(t2, i2);
        n2 || this.remove();
      }
      return this;
    }
    root() {
      let e2 = this;
      for (; e2.parent && e2.parent.type !== "document"; ) e2 = e2.parent;
      return e2;
    }
    toJSON(e2, t2) {
      let n2 = {}, i2 = t2 == null;
      t2 = t2 || /* @__PURE__ */ new Map();
      let s2 = 0;
      for (let l2 in this) {
        if (!Object.prototype.hasOwnProperty.call(this, l2) || l2 === "parent" || l2 === "proxyCache") continue;
        let o2 = this[l2];
        if (Array.isArray(o2)) n2[l2] = o2.map((u2) => typeof u2 == "object" && u2.toJSON ? u2.toJSON(null, t2) : u2);
        else if (typeof o2 == "object" && o2.toJSON) n2[l2] = o2.toJSON(null, t2);
        else if (l2 === "source") {
          let u2 = t2.get(o2.input);
          u2 == null && (u2 = s2, t2.set(o2.input, s2), s2++), n2[l2] = { end: o2.end, inputId: u2, start: o2.start };
        } else n2[l2] = o2;
      }
      return i2 && (n2.inputs = [...t2.keys()].map((l2) => l2.toJSON())), n2;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(e2 = N2) {
      e2.stringify && (e2 = e2.stringify);
      let t2 = "";
      return e2(this, (n2) => {
        t2 += n2;
      }), t2;
    }
    warn(e2, t2, n2) {
      let i2 = { node: this };
      for (let s2 in n2) i2[s2] = n2[s2];
      return e2.warn(t2, i2);
    }
  };
  y2.exports = f2;
  f2.default = f2;
});
var m$q = P$c(x$l()), R$6 = m$q.default ?? m$q;
const __a$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R$6
}, Symbol.toStringTag, { value: "Module" }));
var require$p = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/node":
      return e2(__a$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var p$j = Object.create;
var a$e = Object.defineProperty;
var f$h = Object.getOwnPropertyDescriptor;
var i$a = Object.getOwnPropertyNames;
var m$p = Object.getPrototypeOf, x$k = Object.prototype.hasOwnProperty;
var j$j = ((e2) => typeof require$p < "u" ? require$p : typeof Proxy < "u" ? new Proxy(e2, { get: (t2, s2) => (typeof require$p < "u" ? require$p : t2)[s2] }) : e2)(function(e2) {
  if (typeof require$p < "u") return require$p.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var n$d = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var h$j = (e2, t2, s2, u2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let r2 of i$a(t2)) !x$k.call(e2, r2) && r2 !== s2 && a$e(e2, r2, { get: () => t2[r2], enumerable: !(u2 = f$h(t2, r2)) || u2.enumerable });
  return e2;
};
var q$d = (e2, t2, s2) => (s2 = e2 != null ? p$j(m$p(e2)) : {}, h$j(!e2 || !e2.__esModule ? a$e(s2, "default", { value: e2, enumerable: true }) : s2, e2));
var l$f = n$d((b2, d2) => {
  var y2 = j$j("postcss/lib/node"), c2 = class extends y2 {
    constructor(t2) {
      super(t2), this.type = "comment";
    }
  };
  d2.exports = c2;
  c2.default = c2;
});
var o$6 = q$d(l$f()), g$f = o$6.default ?? o$6;
const __1$$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g$f
}, Symbol.toStringTag, { value: "Module" }));
var require$o = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/node":
      return e2(__a$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var v$b = Object.create;
var u$d = Object.defineProperty;
var a$d = Object.getOwnPropertyDescriptor;
var h$i = Object.getOwnPropertyNames;
var l$e = Object.getPrototypeOf, m$o = Object.prototype.hasOwnProperty;
var g$e = ((t2) => typeof require$o < "u" ? require$o : typeof Proxy < "u" ? new Proxy(t2, { get: (e2, r2) => (typeof require$o < "u" ? require$o : e2)[r2] }) : t2)(function(t2) {
  if (typeof require$o < "u") return require$o.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var x$j = (t2, e2) => () => (e2 || t2((e2 = { exports: {} }).exports, e2), e2.exports);
var y$h = (t2, e2, r2, o2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let i2 of h$i(e2)) !m$o.call(t2, i2) && i2 !== r2 && u$d(t2, i2, { get: () => e2[i2], enumerable: !(o2 = a$d(e2, i2)) || o2.enumerable });
  return t2;
};
var d$l = (t2, e2, r2) => (r2 = t2 != null ? v$b(l$e(t2)) : {}, y$h(!t2 || !t2.__esModule ? u$d(r2, "default", { value: t2, enumerable: true }) : r2, t2));
var n$c = x$j((b2, c2) => {
  var f2 = g$e("postcss/lib/node"), p3 = class extends f2 {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(e2) {
      e2 && typeof e2.value < "u" && typeof e2.value != "string" && (e2 = { ...e2, value: String(e2.value) }), super(e2), this.type = "decl";
    }
  };
  c2.exports = p3;
  p3.default = p3;
});
var s$3 = d$l(n$c()), q$c = s$3.default ?? s$3;
const __4$$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q$c
}, Symbol.toStringTag, { value: "Module" }));
var require$n = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/comment":
      return e2(__1$$4);
    case "postcss/lib/declaration":
      return e2(__4$$2);
    case "postcss/lib/node":
      return e2(__a$);
    case "postcss/lib/symbols":
      return e2(__7$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var D$5 = Object.create;
var p$i = Object.defineProperty;
var E$3 = Object.getOwnPropertyDescriptor;
var j$i = Object.getOwnPropertyNames;
var A$d = Object.getPrototypeOf, C$a = Object.prototype.hasOwnProperty;
var l$d = ((i2) => typeof require$n < "u" ? require$n : typeof Proxy < "u" ? new Proxy(i2, { get: (e2, t2) => (typeof require$n < "u" ? require$n : e2)[t2] }) : i2)(function(i2) {
  if (typeof require$n < "u") return require$n.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var z$8 = (i2, e2) => () => (e2 || i2((e2 = { exports: {} }).exports, e2), e2.exports);
var q$b = (i2, e2, t2, s2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let r2 of j$i(e2)) !C$a.call(i2, r2) && r2 !== t2 && p$i(i2, r2, { get: () => e2[r2], enumerable: !(s2 = E$3(e2, r2)) || s2.enumerable });
  return i2;
};
var I$7 = (i2, e2, t2) => (t2 = i2 != null ? D$5(A$d(i2)) : {}, q$b(!i2 || !i2.__esModule ? p$i(t2, "default", { value: i2, enumerable: true }) : t2, i2));
var P$b = z$8((V2, R2) => {
  var x2 = l$d("postcss/lib/comment"), d2 = l$d("postcss/lib/declaration"), S2 = l$d("postcss/lib/node"), { isClean: m2, my: w2 } = l$d("postcss/lib/symbols"), a2, O3, g2, y2;
  function v2(i2) {
    return i2.map((e2) => (e2.nodes && (e2.nodes = v2(e2.nodes)), delete e2.source, e2));
  }
  function k2(i2) {
    if (i2[m2] = false, i2.proxyOf.nodes) for (let e2 of i2.proxyOf.nodes) k2(e2);
  }
  var f2 = class i2 extends S2 {
    get first() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...e2) {
      for (let t2 of e2) {
        let s2 = this.normalize(t2, this.last);
        for (let r2 of s2) this.proxyOf.nodes.push(r2);
      }
      return this.markDirty(), this;
    }
    cleanRaws(e2) {
      if (super.cleanRaws(e2), this.nodes) for (let t2 of this.nodes) t2.cleanRaws(e2);
    }
    each(e2) {
      if (!this.proxyOf.nodes) return;
      let t2 = this.getIterator(), s2, r2;
      for (; this.indexes[t2] < this.proxyOf.nodes.length && (s2 = this.indexes[t2], r2 = e2(this.proxyOf.nodes[s2], s2), r2 !== false); ) this.indexes[t2] += 1;
      return delete this.indexes[t2], r2;
    }
    every(e2) {
      return this.nodes.every(e2);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let e2 = this.lastEach;
      return this.indexes[e2] = 0, e2;
    }
    getProxyProcessor() {
      return { get(e2, t2) {
        return t2 === "proxyOf" ? e2 : e2[t2] ? t2 === "each" || typeof t2 == "string" && t2.startsWith("walk") ? (...s2) => e2[t2](...s2.map((r2) => typeof r2 == "function" ? (n2, o2) => r2(n2.toProxy(), o2) : r2)) : t2 === "every" || t2 === "some" ? (s2) => e2[t2]((r2, ...n2) => s2(r2.toProxy(), ...n2)) : t2 === "root" ? () => e2.root().toProxy() : t2 === "nodes" ? e2.nodes.map((s2) => s2.toProxy()) : t2 === "first" || t2 === "last" ? e2[t2].toProxy() : e2[t2] : e2[t2];
      }, set(e2, t2, s2) {
        return e2[t2] === s2 || (e2[t2] = s2, (t2 === "name" || t2 === "params" || t2 === "selector") && e2.markDirty()), true;
      } };
    }
    index(e2) {
      return typeof e2 == "number" ? e2 : (e2.proxyOf && (e2 = e2.proxyOf), this.proxyOf.nodes.indexOf(e2));
    }
    insertAfter(e2, t2) {
      let s2 = this.index(e2), r2 = this.normalize(t2, this.proxyOf.nodes[s2]).reverse();
      s2 = this.index(e2);
      for (let o2 of r2) this.proxyOf.nodes.splice(s2 + 1, 0, o2);
      let n2;
      for (let o2 in this.indexes) n2 = this.indexes[o2], s2 < n2 && (this.indexes[o2] = n2 + r2.length);
      return this.markDirty(), this;
    }
    insertBefore(e2, t2) {
      let s2 = this.index(e2), r2 = s2 === 0 ? "prepend" : false, n2 = this.normalize(t2, this.proxyOf.nodes[s2], r2).reverse();
      s2 = this.index(e2);
      for (let u2 of n2) this.proxyOf.nodes.splice(s2, 0, u2);
      let o2;
      for (let u2 in this.indexes) o2 = this.indexes[u2], s2 <= o2 && (this.indexes[u2] = o2 + n2.length);
      return this.markDirty(), this;
    }
    normalize(e2, t2) {
      if (typeof e2 == "string") e2 = v2(O3(e2).nodes);
      else if (typeof e2 > "u") e2 = [];
      else if (Array.isArray(e2)) {
        e2 = e2.slice(0);
        for (let r2 of e2) r2.parent && r2.parent.removeChild(r2, "ignore");
      } else if (e2.type === "root" && this.type !== "document") {
        e2 = e2.nodes.slice(0);
        for (let r2 of e2) r2.parent && r2.parent.removeChild(r2, "ignore");
      } else if (e2.type) e2 = [e2];
      else if (e2.prop) {
        if (typeof e2.value > "u") throw new Error("Value field is missed in node creation");
        typeof e2.value != "string" && (e2.value = String(e2.value)), e2 = [new d2(e2)];
      } else if (e2.selector || e2.selectors) e2 = [new y2(e2)];
      else if (e2.name) e2 = [new a2(e2)];
      else if (e2.text) e2 = [new x2(e2)];
      else throw new Error("Unknown node type in node creation");
      return e2.map((r2) => (r2[w2] || i2.rebuild(r2), r2 = r2.proxyOf, r2.parent && r2.parent.removeChild(r2), r2[m2] && k2(r2), r2.raws || (r2.raws = {}), typeof r2.raws.before > "u" && t2 && typeof t2.raws.before < "u" && (r2.raws.before = t2.raws.before.replace(/\S/g, "")), r2.parent = this.proxyOf, r2));
    }
    prepend(...e2) {
      e2 = e2.reverse();
      for (let t2 of e2) {
        let s2 = this.normalize(t2, this.first, "prepend").reverse();
        for (let r2 of s2) this.proxyOf.nodes.unshift(r2);
        for (let r2 in this.indexes) this.indexes[r2] = this.indexes[r2] + s2.length;
      }
      return this.markDirty(), this;
    }
    push(e2) {
      return e2.parent = this, this.proxyOf.nodes.push(e2), this;
    }
    removeAll() {
      for (let e2 of this.proxyOf.nodes) e2.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(e2) {
      e2 = this.index(e2), this.proxyOf.nodes[e2].parent = void 0, this.proxyOf.nodes.splice(e2, 1);
      let t2;
      for (let s2 in this.indexes) t2 = this.indexes[s2], t2 >= e2 && (this.indexes[s2] = t2 - 1);
      return this.markDirty(), this;
    }
    replaceValues(e2, t2, s2) {
      return s2 || (s2 = t2, t2 = {}), this.walkDecls((r2) => {
        t2.props && !t2.props.includes(r2.prop) || t2.fast && !r2.value.includes(t2.fast) || (r2.value = r2.value.replace(e2, s2));
      }), this.markDirty(), this;
    }
    some(e2) {
      return this.nodes.some(e2);
    }
    walk(e2) {
      return this.each((t2, s2) => {
        let r2;
        try {
          r2 = e2(t2, s2);
        } catch (n2) {
          throw t2.addToError(n2);
        }
        return r2 !== false && t2.walk && (r2 = t2.walk(e2)), r2;
      });
    }
    walkAtRules(e2, t2) {
      return t2 ? e2 instanceof RegExp ? this.walk((s2, r2) => {
        if (s2.type === "atrule" && e2.test(s2.name)) return t2(s2, r2);
      }) : this.walk((s2, r2) => {
        if (s2.type === "atrule" && s2.name === e2) return t2(s2, r2);
      }) : (t2 = e2, this.walk((s2, r2) => {
        if (s2.type === "atrule") return t2(s2, r2);
      }));
    }
    walkComments(e2) {
      return this.walk((t2, s2) => {
        if (t2.type === "comment") return e2(t2, s2);
      });
    }
    walkDecls(e2, t2) {
      return t2 ? e2 instanceof RegExp ? this.walk((s2, r2) => {
        if (s2.type === "decl" && e2.test(s2.prop)) return t2(s2, r2);
      }) : this.walk((s2, r2) => {
        if (s2.type === "decl" && s2.prop === e2) return t2(s2, r2);
      }) : (t2 = e2, this.walk((s2, r2) => {
        if (s2.type === "decl") return t2(s2, r2);
      }));
    }
    walkRules(e2, t2) {
      return t2 ? e2 instanceof RegExp ? this.walk((s2, r2) => {
        if (s2.type === "rule" && e2.test(s2.selector)) return t2(s2, r2);
      }) : this.walk((s2, r2) => {
        if (s2.type === "rule" && s2.selector === e2) return t2(s2, r2);
      }) : (t2 = e2, this.walk((s2, r2) => {
        if (s2.type === "rule") return t2(s2, r2);
      }));
    }
  };
  f2.registerParse = (i2) => {
    O3 = i2;
  };
  f2.registerRule = (i2) => {
    y2 = i2;
  };
  f2.registerAtRule = (i2) => {
    a2 = i2;
  };
  f2.registerRoot = (i2) => {
    g2 = i2;
  };
  R2.exports = f2;
  f2.default = f2;
  f2.rebuild = (i2) => {
    i2.type === "atrule" ? Object.setPrototypeOf(i2, a2.prototype) : i2.type === "rule" ? Object.setPrototypeOf(i2, y2.prototype) : i2.type === "decl" ? Object.setPrototypeOf(i2, d2.prototype) : i2.type === "comment" ? Object.setPrototypeOf(i2, x2.prototype) : i2.type === "root" && Object.setPrototypeOf(i2, g2.prototype), i2[w2] = true, i2.nodes && i2.nodes.forEach((e2) => {
      f2.rebuild(e2);
    });
  };
});
var h$h = I$7(P$b()), N$5 = h$h.default ?? h$h;
const __2$$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N$5
}, Symbol.toStringTag, { value: "Module" }));
var require$m = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var f$g = Object.create;
var d$k = Object.defineProperty;
var c$g = Object.getOwnPropertyDescriptor;
var l$c = Object.getOwnPropertyNames;
var h$g = Object.getPrototypeOf, x$i = Object.prototype.hasOwnProperty;
var m$n = ((r2) => typeof require$m < "u" ? require$m : typeof Proxy < "u" ? new Proxy(r2, { get: (e2, s2) => (typeof require$m < "u" ? require$m : e2)[s2] }) : r2)(function(r2) {
  if (typeof require$m < "u") return require$m.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var y$g = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var j$h = (r2, e2, s2, o2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let p3 of l$c(e2)) !x$i.call(r2, p3) && p3 !== s2 && d$k(r2, p3, { get: () => e2[p3], enumerable: !(o2 = c$g(e2, p3)) || o2.enumerable });
  return r2;
};
var O$5 = (r2, e2, s2) => (s2 = r2 != null ? f$g(h$g(r2)) : {}, j$h(!r2 || !r2.__esModule ? d$k(s2, "default", { value: r2, enumerable: true }) : s2, r2));
var a$c = y$g((q3, u2) => {
  var i2 = m$n("postcss/lib/container"), t2 = class extends i2 {
    constructor(e2) {
      super(e2), this.type = "atrule";
    }
    append(...e2) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e2);
    }
    prepend(...e2) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e2);
    }
  };
  u2.exports = t2;
  t2.default = t2;
  i2.registerAtRule(t2);
});
var n$b = O$5(a$c()), C$9 = n$b.default ?? n$b;
const __0$$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C$9
}, Symbol.toStringTag, { value: "Module" }));
var require$l = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var f$f = Object.create;
var u$c = Object.defineProperty;
var y$f = Object.getOwnPropertyDescriptor;
var p$h = Object.getOwnPropertyNames;
var m$m = Object.getPrototypeOf, z$7 = Object.prototype.hasOwnProperty;
var g$d = ((e2) => typeof require$l < "u" ? require$l : typeof Proxy < "u" ? new Proxy(e2, { get: (t2, s2) => (typeof require$l < "u" ? require$l : t2)[s2] }) : e2)(function(e2) {
  if (typeof require$l < "u") return require$l.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var h$f = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var x$h = (e2, t2, s2, l2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let o2 of p$h(t2)) !z$7.call(e2, o2) && o2 !== s2 && u$c(e2, o2, { get: () => t2[o2], enumerable: !(l2 = y$f(t2, o2)) || l2.enumerable });
  return e2;
};
var R$5 = (e2, t2, s2) => (s2 = e2 != null ? f$f(m$m(e2)) : {}, x$h(!e2 || !e2.__esModule ? u$c(s2, "default", { value: e2, enumerable: true }) : s2, e2));
var d$j = h$f((L2, c2) => {
  var j3 = g$d("postcss/lib/container"), a2, n2, r2 = class extends j3 {
    constructor(t2) {
      super({ type: "document", ...t2 }), this.nodes || (this.nodes = []);
    }
    toResult(t2 = {}) {
      return new a2(new n2(), this, t2).stringify();
    }
  };
  r2.registerLazyResult = (e2) => {
    a2 = e2;
  };
  r2.registerProcessor = (e2) => {
    n2 = e2;
  };
  c2.exports = r2;
  r2.default = r2;
});
var i$9 = R$5(d$j()), P$a = i$9.default ?? i$9;
const __5$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: P$a
}, Symbol.toStringTag, { value: "Module" }));
var i$8 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", h$e = (t2, e2 = 21) => (l2 = e2) => {
  let r2 = "", n2 = l2 | 0;
  for (; n2--; ) r2 += t2[Math.random() * t2.length | 0];
  return r2;
}, a$b = (t2 = 21) => {
  let e2 = "", l2 = t2 | 0;
  for (; l2--; ) e2 += i$8[Math.random() * 64 | 0];
  return e2;
};
const __0$$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  customAlphabet: h$e,
  nanoid: a$b
}, Symbol.toStringTag, { value: "Module" }));
function ut$1(t2) {
  return new Error(`[unenv] ${t2} is not implemented yet!`);
}
function v$a(t2) {
  return Object.assign(() => {
    throw ut$1(t2);
  }, { __unenv__: true });
}
var d$i = [], y$e = [], st$2 = typeof Uint8Array > "u" ? Array : Uint8Array, N$4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let t2 = 0, e2 = N$4.length; t2 < e2; ++t2) d$i[t2] = N$4[t2], y$e[N$4.charCodeAt(t2)] = t2;
y$e[45] = 62;
y$e[95] = 63;
function ht(t2) {
  let e2 = t2.length;
  if (e2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  let n2 = t2.indexOf("=");
  n2 === -1 && (n2 = e2);
  let r2 = n2 === e2 ? 0 : 4 - n2 % 4;
  return [n2, r2];
}
function lt$1(t2, e2, n2) {
  return (e2 + n2) * 3 / 4 - n2;
}
function at$1(t2) {
  let e2, n2 = ht(t2), r2 = n2[0], o2 = n2[1], i2 = new st$2(lt$1(t2, r2, o2)), u2 = 0, s2 = o2 > 0 ? r2 - 4 : r2, l2;
  for (l2 = 0; l2 < s2; l2 += 4) e2 = y$e[t2.charCodeAt(l2)] << 18 | y$e[t2.charCodeAt(l2 + 1)] << 12 | y$e[t2.charCodeAt(l2 + 2)] << 6 | y$e[t2.charCodeAt(l2 + 3)], i2[u2++] = e2 >> 16 & 255, i2[u2++] = e2 >> 8 & 255, i2[u2++] = e2 & 255;
  return o2 === 2 && (e2 = y$e[t2.charCodeAt(l2)] << 2 | y$e[t2.charCodeAt(l2 + 1)] >> 4, i2[u2++] = e2 & 255), o2 === 1 && (e2 = y$e[t2.charCodeAt(l2)] << 10 | y$e[t2.charCodeAt(l2 + 1)] << 4 | y$e[t2.charCodeAt(l2 + 2)] >> 2, i2[u2++] = e2 >> 8 & 255, i2[u2++] = e2 & 255), i2;
}
function pt(t2) {
  return d$i[t2 >> 18 & 63] + d$i[t2 >> 12 & 63] + d$i[t2 >> 6 & 63] + d$i[t2 & 63];
}
function ct(t2, e2, n2) {
  let r2, o2 = [];
  for (let i2 = e2; i2 < n2; i2 += 3) r2 = (t2[i2] << 16 & 16711680) + (t2[i2 + 1] << 8 & 65280) + (t2[i2 + 2] & 255), o2.push(pt(r2));
  return o2.join("");
}
function k$6(t2) {
  let e2, n2 = t2.length, r2 = n2 % 3, o2 = [], i2 = 16383;
  for (let u2 = 0, s2 = n2 - r2; u2 < s2; u2 += i2) o2.push(ct(t2, u2, u2 + i2 > s2 ? s2 : u2 + i2));
  return r2 === 1 ? (e2 = t2[n2 - 1], o2.push(d$i[e2 >> 2] + d$i[e2 << 4 & 63] + "==")) : r2 === 2 && (e2 = (t2[n2 - 2] << 8) + t2[n2 - 1], o2.push(d$i[e2 >> 10] + d$i[e2 >> 4 & 63] + d$i[e2 << 2 & 63] + "=")), o2.join("");
}
function _$5(t2, e2, n2, r2, o2) {
  let i2, u2, s2 = o2 * 8 - r2 - 1, l2 = (1 << s2) - 1, p3 = l2 >> 1, h2 = -7, a2 = n2 ? o2 - 1 : 0, I2 = n2 ? -1 : 1, w2 = t2[e2 + a2];
  for (a2 += I2, i2 = w2 & (1 << -h2) - 1, w2 >>= -h2, h2 += s2; h2 > 0; ) i2 = i2 * 256 + t2[e2 + a2], a2 += I2, h2 -= 8;
  for (u2 = i2 & (1 << -h2) - 1, i2 >>= -h2, h2 += r2; h2 > 0; ) u2 = u2 * 256 + t2[e2 + a2], a2 += I2, h2 -= 8;
  if (i2 === 0) i2 = 1 - p3;
  else {
    if (i2 === l2) return u2 ? Number.NaN : (w2 ? -1 : 1) * Number.POSITIVE_INFINITY;
    u2 = u2 + Math.pow(2, r2), i2 = i2 - p3;
  }
  return (w2 ? -1 : 1) * u2 * Math.pow(2, i2 - r2);
}
function z$6(t2, e2, n2, r2, o2, i2) {
  let u2, s2, l2, p3 = i2 * 8 - o2 - 1, h2 = (1 << p3) - 1, a2 = h2 >> 1, I2 = o2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w2 = r2 ? 0 : i2 - 1, L2 = r2 ? 1 : -1, ft2 = e2 < 0 || e2 === 0 && 1 / e2 < 0 ? 1 : 0;
  for (e2 = Math.abs(e2), Number.isNaN(e2) || e2 === Number.POSITIVE_INFINITY ? (s2 = Number.isNaN(e2) ? 1 : 0, u2 = h2) : (u2 = Math.floor(Math.log2(e2)), e2 * (l2 = Math.pow(2, -u2)) < 1 && (u2--, l2 *= 2), e2 += u2 + a2 >= 1 ? I2 / l2 : I2 * Math.pow(2, 1 - a2), e2 * l2 >= 2 && (u2++, l2 /= 2), u2 + a2 >= h2 ? (s2 = 0, u2 = h2) : u2 + a2 >= 1 ? (s2 = (e2 * l2 - 1) * Math.pow(2, o2), u2 = u2 + a2) : (s2 = e2 * Math.pow(2, a2 - 1) * Math.pow(2, o2), u2 = 0)); o2 >= 8; ) t2[n2 + w2] = s2 & 255, w2 += L2, s2 /= 256, o2 -= 8;
  for (u2 = u2 << o2 | s2, p3 += o2; p3 > 0; ) t2[n2 + w2] = u2 & 255, w2 += L2, u2 /= 256, p3 -= 8;
  t2[n2 + w2 - L2] |= ft2 * 128;
}
var F$4 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null, G$2 = 50, R$4 = 2147483647;
f$e.TYPED_ARRAY_SUPPORT = gt();
!f$e.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function gt() {
  try {
    let t2 = new Uint8Array(1), e2 = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(t2, e2), t2.foo() === 42;
  } catch {
    return false;
  }
}
Object.defineProperty(f$e.prototype, "parent", { enumerable: true, get: function() {
  if (f$e.isBuffer(this)) return this.buffer;
} });
Object.defineProperty(f$e.prototype, "offset", { enumerable: true, get: function() {
  if (f$e.isBuffer(this)) return this.byteOffset;
} });
function m$l(t2) {
  if (t2 > R$4) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
  let e2 = new Uint8Array(t2);
  return Object.setPrototypeOf(e2, f$e.prototype), e2;
}
function f$e(t2, e2, n2) {
  if (typeof t2 == "number") {
    if (typeof e2 == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
    return M$5(t2);
  }
  return X$2(t2, e2, n2);
}
f$e.poolSize = 8192;
function X$2(t2, e2, n2) {
  if (typeof t2 == "string") return wt$1(t2, e2);
  if (ArrayBuffer.isView(t2)) return dt(t2);
  if (t2 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
  if (b$c(t2, ArrayBuffer) || t2 && b$c(t2.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (b$c(t2, SharedArrayBuffer) || t2 && b$c(t2.buffer, SharedArrayBuffer))) return H$3(t2, e2, n2);
  if (typeof t2 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
  let r2 = t2.valueOf && t2.valueOf();
  if (r2 != null && r2 !== t2) return f$e.from(r2, e2, n2);
  let o2 = bt$1(t2);
  if (o2) return o2;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t2[Symbol.toPrimitive] == "function") return f$e.from(t2[Symbol.toPrimitive]("string"), e2, n2);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
}
f$e.from = function(t2, e2, n2) {
  return X$2(t2, e2, n2);
};
Object.setPrototypeOf(f$e.prototype, Uint8Array.prototype);
Object.setPrototypeOf(f$e, Uint8Array);
function q$a(t2) {
  if (typeof t2 != "number") throw new TypeError('"size" argument must be of type number');
  if (t2 < 0) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
}
function yt(t2, e2, n2) {
  return q$a(t2), t2 <= 0 ? m$l(t2) : e2 !== void 0 ? typeof n2 == "string" ? m$l(t2).fill(e2, n2) : m$l(t2).fill(e2) : m$l(t2);
}
f$e.alloc = function(t2, e2, n2) {
  return yt(t2, e2, n2);
};
function M$5(t2) {
  return q$a(t2), m$l(t2 < 0 ? 0 : $$2(t2) | 0);
}
f$e.allocUnsafe = function(t2) {
  return M$5(t2);
};
f$e.allocUnsafeSlow = function(t2) {
  return M$5(t2);
};
function wt$1(t2, e2) {
  if ((typeof e2 != "string" || e2 === "") && (e2 = "utf8"), !f$e.isEncoding(e2)) throw new TypeError("Unknown encoding: " + e2);
  let n2 = W$5(t2, e2) | 0, r2 = m$l(n2), o2 = r2.write(t2, e2);
  return o2 !== n2 && (r2 = r2.slice(0, o2)), r2;
}
function S$b(t2) {
  let e2 = t2.length < 0 ? 0 : $$2(t2.length) | 0, n2 = m$l(e2);
  for (let r2 = 0; r2 < e2; r2 += 1) n2[r2] = t2[r2] & 255;
  return n2;
}
function dt(t2) {
  if (b$c(t2, Uint8Array)) {
    let e2 = new Uint8Array(t2);
    return H$3(e2.buffer, e2.byteOffset, e2.byteLength);
  }
  return S$b(t2);
}
function H$3(t2, e2, n2) {
  if (e2 < 0 || t2.byteLength < e2) throw new RangeError('"offset" is outside of buffer bounds');
  if (t2.byteLength < e2 + (n2 || 0)) throw new RangeError('"length" is outside of buffer bounds');
  let r2;
  return e2 === void 0 && n2 === void 0 ? r2 = new Uint8Array(t2) : n2 === void 0 ? r2 = new Uint8Array(t2, e2) : r2 = new Uint8Array(t2, e2, n2), Object.setPrototypeOf(r2, f$e.prototype), r2;
}
function bt$1(t2) {
  if (f$e.isBuffer(t2)) {
    let e2 = $$2(t2.length) | 0, n2 = m$l(e2);
    return n2.length === 0 || t2.copy(n2, 0, 0, e2), n2;
  }
  if (t2.length !== void 0) return typeof t2.length != "number" || P$9(t2.length) ? m$l(0) : S$b(t2);
  if (t2.type === "Buffer" && Array.isArray(t2.data)) return S$b(t2.data);
}
function $$2(t2) {
  if (t2 >= R$4) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + R$4.toString(16) + " bytes");
  return t2 | 0;
}
f$e.isBuffer = function(t2) {
  return t2 != null && t2._isBuffer === true && t2 !== f$e.prototype;
};
f$e.compare = function(t2, e2) {
  if (b$c(t2, Uint8Array) && (t2 = f$e.from(t2, t2.offset, t2.byteLength)), b$c(e2, Uint8Array) && (e2 = f$e.from(e2, e2.offset, e2.byteLength)), !f$e.isBuffer(t2) || !f$e.isBuffer(e2)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t2 === e2) return 0;
  let n2 = t2.length, r2 = e2.length;
  for (let o2 = 0, i2 = Math.min(n2, r2); o2 < i2; ++o2) if (t2[o2] !== e2[o2]) {
    n2 = t2[o2], r2 = e2[o2];
    break;
  }
  return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
};
f$e.isEncoding = function(t2) {
  switch (String(t2).toLowerCase()) {
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
f$e.concat = function(t2, e2) {
  if (!Array.isArray(t2)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (t2.length === 0) return f$e.alloc(0);
  let n2;
  if (e2 === void 0) for (e2 = 0, n2 = 0; n2 < t2.length; ++n2) e2 += t2[n2].length;
  let r2 = f$e.allocUnsafe(e2), o2 = 0;
  for (n2 = 0; n2 < t2.length; ++n2) {
    let i2 = t2[n2];
    if (b$c(i2, Uint8Array)) o2 + i2.length > r2.length ? (f$e.isBuffer(i2) || (i2 = f$e.from(i2.buffer, i2.byteOffset, i2.byteLength)), i2.copy(r2, o2)) : Uint8Array.prototype.set.call(r2, i2, o2);
    else if (f$e.isBuffer(i2)) i2.copy(r2, o2);
    else throw new TypeError('"list" argument must be an Array of Buffers');
    o2 += i2.length;
  }
  return r2;
};
function W$5(t2, e2) {
  if (f$e.isBuffer(t2)) return t2.length;
  if (ArrayBuffer.isView(t2) || b$c(t2, ArrayBuffer)) return t2.byteLength;
  if (typeof t2 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t2);
  let n2 = t2.length, r2 = arguments.length > 2 && arguments[2] === true;
  if (!r2 && n2 === 0) return 0;
  let o2 = false;
  for (; ; ) switch (e2) {
    case "ascii":
    case "latin1":
    case "binary":
      return n2;
    case "utf8":
    case "utf-8":
      return x$g(t2).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return n2 * 2;
    case "hex":
      return n2 >>> 1;
    case "base64":
      return ot$2(t2).length;
    default:
      if (o2) return r2 ? -1 : x$g(t2).length;
      e2 = ("" + e2).toLowerCase(), o2 = true;
  }
}
f$e.byteLength = W$5;
function Et(t2, e2, n2) {
  let r2 = false;
  if ((e2 === void 0 || e2 < 0) && (e2 = 0), e2 > this.length || ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0) || (n2 >>>= 0, e2 >>>= 0, n2 <= e2)) return "";
  for (t2 || (t2 = "utf8"); ; ) switch (t2) {
    case "hex":
      return Lt$1(this, e2, n2);
    case "utf8":
    case "utf-8":
      return K$3(this, e2, n2);
    case "ascii":
      return _t(this, e2, n2);
    case "latin1":
    case "binary":
      return Ot(this, e2, n2);
    case "base64":
      return Tt(this, e2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Nt(this, e2, n2);
    default:
      if (r2) throw new TypeError("Unknown encoding: " + t2);
      t2 = (t2 + "").toLowerCase(), r2 = true;
  }
}
f$e.prototype._isBuffer = true;
function B$5(t2, e2, n2) {
  let r2 = t2[e2];
  t2[e2] = t2[n2], t2[n2] = r2;
}
f$e.prototype.swap16 = function() {
  let t2 = this.length;
  if (t2 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (let e2 = 0; e2 < t2; e2 += 2) B$5(this, e2, e2 + 1);
  return this;
};
f$e.prototype.swap32 = function() {
  let t2 = this.length;
  if (t2 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (let e2 = 0; e2 < t2; e2 += 4) B$5(this, e2, e2 + 3), B$5(this, e2 + 1, e2 + 2);
  return this;
};
f$e.prototype.swap64 = function() {
  let t2 = this.length;
  if (t2 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (let e2 = 0; e2 < t2; e2 += 8) B$5(this, e2, e2 + 7), B$5(this, e2 + 1, e2 + 6), B$5(this, e2 + 2, e2 + 5), B$5(this, e2 + 3, e2 + 4);
  return this;
};
f$e.prototype.toString = function() {
  let t2 = this.length;
  return t2 === 0 ? "" : arguments.length === 0 ? K$3(this, 0, t2) : Reflect.apply(Et, this, arguments);
};
f$e.prototype.toLocaleString = f$e.prototype.toString;
f$e.prototype.equals = function(t2) {
  if (!f$e.isBuffer(t2)) throw new TypeError("Argument must be a Buffer");
  return this === t2 ? true : f$e.compare(this, t2) === 0;
};
f$e.prototype.inspect = function() {
  let t2 = "", e2 = G$2;
  return t2 = this.toString("hex", 0, e2).replace(/(.{2})/g, "$1 ").trim(), this.length > e2 && (t2 += " ... "), "<Buffer " + t2 + ">";
};
F$4 && (f$e.prototype[F$4] = f$e.prototype.inspect);
f$e.prototype.compare = function(t2, e2, n2, r2, o2) {
  if (b$c(t2, Uint8Array) && (t2 = f$e.from(t2, t2.offset, t2.byteLength)), !f$e.isBuffer(t2)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t2);
  if (e2 === void 0 && (e2 = 0), n2 === void 0 && (n2 = t2 ? t2.length : 0), r2 === void 0 && (r2 = 0), o2 === void 0 && (o2 = this.length), e2 < 0 || n2 > t2.length || r2 < 0 || o2 > this.length) throw new RangeError("out of range index");
  if (r2 >= o2 && e2 >= n2) return 0;
  if (r2 >= o2) return -1;
  if (e2 >= n2) return 1;
  if (e2 >>>= 0, n2 >>>= 0, r2 >>>= 0, o2 >>>= 0, this === t2) return 0;
  let i2 = o2 - r2, u2 = n2 - e2, s2 = Math.min(i2, u2), l2 = this.slice(r2, o2), p3 = t2.slice(e2, n2);
  for (let h2 = 0; h2 < s2; ++h2) if (l2[h2] !== p3[h2]) {
    i2 = l2[h2], u2 = p3[h2];
    break;
  }
  return i2 < u2 ? -1 : u2 < i2 ? 1 : 0;
};
function J$1(t2, e2, n2, r2, o2) {
  if (t2.length === 0) return -1;
  if (typeof n2 == "string" ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, P$9(n2) && (n2 = o2 ? 0 : t2.length - 1), n2 < 0 && (n2 = t2.length + n2), n2 >= t2.length) {
    if (o2) return -1;
    n2 = t2.length - 1;
  } else if (n2 < 0) if (o2) n2 = 0;
  else return -1;
  if (typeof e2 == "string" && (e2 = f$e.from(e2, r2)), f$e.isBuffer(e2)) return e2.length === 0 ? -1 : j$g(t2, e2, n2, r2, o2);
  if (typeof e2 == "number") return e2 = e2 & 255, typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(t2, e2, n2) : Uint8Array.prototype.lastIndexOf.call(t2, e2, n2) : j$g(t2, [e2], n2, r2, o2);
  throw new TypeError("val must be string, number or Buffer");
}
function j$g(t2, e2, n2, r2, o2) {
  let i2 = 1, u2 = t2.length, s2 = e2.length;
  if (r2 !== void 0 && (r2 = String(r2).toLowerCase(), r2 === "ucs2" || r2 === "ucs-2" || r2 === "utf16le" || r2 === "utf-16le")) {
    if (t2.length < 2 || e2.length < 2) return -1;
    i2 = 2, u2 /= 2, s2 /= 2, n2 /= 2;
  }
  function l2(h2, a2) {
    return i2 === 1 ? h2[a2] : h2.readUInt16BE(a2 * i2);
  }
  let p3;
  if (o2) {
    let h2 = -1;
    for (p3 = n2; p3 < u2; p3++) if (l2(t2, p3) === l2(e2, h2 === -1 ? 0 : p3 - h2)) {
      if (h2 === -1 && (h2 = p3), p3 - h2 + 1 === s2) return h2 * i2;
    } else h2 !== -1 && (p3 -= p3 - h2), h2 = -1;
  } else for (n2 + s2 > u2 && (n2 = u2 - s2), p3 = n2; p3 >= 0; p3--) {
    let h2 = true;
    for (let a2 = 0; a2 < s2; a2++) if (l2(t2, p3 + a2) !== l2(e2, a2)) {
      h2 = false;
      break;
    }
    if (h2) return p3;
  }
  return -1;
}
f$e.prototype.includes = function(t2, e2, n2) {
  return this.indexOf(t2, e2, n2) !== -1;
};
f$e.prototype.indexOf = function(t2, e2, n2) {
  return J$1(this, t2, e2, n2, true);
};
f$e.prototype.lastIndexOf = function(t2, e2, n2) {
  return J$1(this, t2, e2, n2, false);
};
function Bt(t2, e2, n2, r2) {
  n2 = Number(n2) || 0;
  let o2 = t2.length - n2;
  r2 ? (r2 = Number(r2), r2 > o2 && (r2 = o2)) : r2 = o2;
  let i2 = e2.length;
  r2 > i2 / 2 && (r2 = i2 / 2);
  let u2;
  for (u2 = 0; u2 < r2; ++u2) {
    let s2 = Number.parseInt(e2.slice(u2 * 2, u2 * 2 + 2), 16);
    if (P$9(s2)) return u2;
    t2[n2 + u2] = s2;
  }
  return u2;
}
function It(t2, e2, n2, r2) {
  return O$4(x$g(e2, t2.length - n2), t2, n2, r2);
}
function At(t2, e2, n2, r2) {
  return O$4($t(e2), t2, n2, r2);
}
function Ut(t2, e2, n2, r2) {
  return O$4(ot$2(e2), t2, n2, r2);
}
function vt(t2, e2, n2, r2) {
  return O$4(Ct(e2, t2.length - n2), t2, n2, r2);
}
f$e.prototype.write = function(t2, e2, n2, r2) {
  if (e2 === void 0) r2 = "utf8", n2 = this.length, e2 = 0;
  else if (n2 === void 0 && typeof e2 == "string") r2 = e2, n2 = this.length, e2 = 0;
  else if (Number.isFinite(e2)) e2 = e2 >>> 0, Number.isFinite(n2) ? (n2 = n2 >>> 0, r2 === void 0 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
  else throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  let o2 = this.length - e2;
  if ((n2 === void 0 || n2 > o2) && (n2 = o2), t2.length > 0 && (n2 < 0 || e2 < 0) || e2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r2 || (r2 = "utf8");
  let i2 = false;
  for (; ; ) switch (r2) {
    case "hex":
      return Bt(this, t2, e2, n2);
    case "utf8":
    case "utf-8":
      return It(this, t2, e2, n2);
    case "ascii":
    case "latin1":
    case "binary":
      return At(this, t2, e2, n2);
    case "base64":
      return Ut(this, t2, e2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return vt(this, t2, e2, n2);
    default:
      if (i2) throw new TypeError("Unknown encoding: " + r2);
      r2 = ("" + r2).toLowerCase(), i2 = true;
  }
};
f$e.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Tt(t2, e2, n2) {
  return e2 === 0 && n2 === t2.length ? k$6(t2) : k$6(t2.slice(e2, n2));
}
function K$3(t2, e2, n2) {
  n2 = Math.min(t2.length, n2);
  let r2 = [], o2 = e2;
  for (; o2 < n2; ) {
    let i2 = t2[o2], u2 = null, s2 = i2 > 239 ? 4 : i2 > 223 ? 3 : i2 > 191 ? 2 : 1;
    if (o2 + s2 <= n2) {
      let l2, p3, h2, a2;
      switch (s2) {
        case 1:
          i2 < 128 && (u2 = i2);
          break;
        case 2:
          l2 = t2[o2 + 1], (l2 & 192) === 128 && (a2 = (i2 & 31) << 6 | l2 & 63, a2 > 127 && (u2 = a2));
          break;
        case 3:
          l2 = t2[o2 + 1], p3 = t2[o2 + 2], (l2 & 192) === 128 && (p3 & 192) === 128 && (a2 = (i2 & 15) << 12 | (l2 & 63) << 6 | p3 & 63, a2 > 2047 && (a2 < 55296 || a2 > 57343) && (u2 = a2));
          break;
        case 4:
          l2 = t2[o2 + 1], p3 = t2[o2 + 2], h2 = t2[o2 + 3], (l2 & 192) === 128 && (p3 & 192) === 128 && (h2 & 192) === 128 && (a2 = (i2 & 15) << 18 | (l2 & 63) << 12 | (p3 & 63) << 6 | h2 & 63, a2 > 65535 && a2 < 1114112 && (u2 = a2));
      }
    }
    u2 === null ? (u2 = 65533, s2 = 1) : u2 > 65535 && (u2 -= 65536, r2.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | u2 & 1023), r2.push(u2), o2 += s2;
  }
  return Rt(r2);
}
var Y$4 = 4096;
function Rt(t2) {
  let e2 = t2.length;
  if (e2 <= Y$4) return String.fromCharCode.apply(String, t2);
  let n2 = "", r2 = 0;
  for (; r2 < e2; ) n2 += String.fromCharCode.apply(String, t2.slice(r2, r2 += Y$4));
  return n2;
}
function _t(t2, e2, n2) {
  let r2 = "";
  n2 = Math.min(t2.length, n2);
  for (let o2 = e2; o2 < n2; ++o2) r2 += String.fromCharCode(t2[o2] & 127);
  return r2;
}
function Ot(t2, e2, n2) {
  let r2 = "";
  n2 = Math.min(t2.length, n2);
  for (let o2 = e2; o2 < n2; ++o2) r2 += String.fromCharCode(t2[o2]);
  return r2;
}
function Lt$1(t2, e2, n2) {
  let r2 = t2.length;
  (!e2 || e2 < 0) && (e2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
  let o2 = "";
  for (let i2 = e2; i2 < n2; ++i2) o2 += Pt[t2[i2]];
  return o2;
}
function Nt(t2, e2, n2) {
  let r2 = t2.slice(e2, n2), o2 = "";
  for (let i2 = 0; i2 < r2.length - 1; i2 += 2) o2 += String.fromCharCode(r2[i2] + r2[i2 + 1] * 256);
  return o2;
}
f$e.prototype.slice = function(t2, e2) {
  let n2 = this.length;
  t2 = Math.trunc(t2), e2 = e2 === void 0 ? n2 : Math.trunc(e2), t2 < 0 ? (t2 += n2, t2 < 0 && (t2 = 0)) : t2 > n2 && (t2 = n2), e2 < 0 ? (e2 += n2, e2 < 0 && (e2 = 0)) : e2 > n2 && (e2 = n2), e2 < t2 && (e2 = t2);
  let r2 = this.subarray(t2, e2);
  return Object.setPrototypeOf(r2, f$e.prototype), r2;
};
function c$f(t2, e2, n2) {
  if (t2 % 1 !== 0 || t2 < 0) throw new RangeError("offset is not uint");
  if (t2 + e2 > n2) throw new RangeError("Trying to access beyond buffer length");
}
f$e.prototype.readUintLE = f$e.prototype.readUIntLE = function(t2, e2, n2) {
  t2 = t2 >>> 0, e2 = e2 >>> 0, n2 || c$f(t2, e2, this.length);
  let r2 = this[t2], o2 = 1, i2 = 0;
  for (; ++i2 < e2 && (o2 *= 256); ) r2 += this[t2 + i2] * o2;
  return r2;
};
f$e.prototype.readUintBE = f$e.prototype.readUIntBE = function(t2, e2, n2) {
  t2 = t2 >>> 0, e2 = e2 >>> 0, n2 || c$f(t2, e2, this.length);
  let r2 = this[t2 + --e2], o2 = 1;
  for (; e2 > 0 && (o2 *= 256); ) r2 += this[t2 + --e2] * o2;
  return r2;
};
f$e.prototype.readUint8 = f$e.prototype.readUInt8 = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 1, this.length), this[t2];
};
f$e.prototype.readUint16LE = f$e.prototype.readUInt16LE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 2, this.length), this[t2] | this[t2 + 1] << 8;
};
f$e.prototype.readUint16BE = f$e.prototype.readUInt16BE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 2, this.length), this[t2] << 8 | this[t2 + 1];
};
f$e.prototype.readUint32LE = f$e.prototype.readUInt32LE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), (this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16) + this[t2 + 3] * 16777216;
};
f$e.prototype.readUint32BE = f$e.prototype.readUInt32BE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), this[t2] * 16777216 + (this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3]);
};
f$e.prototype.readBigUInt64LE = E$2(function(t2) {
  t2 = t2 >>> 0, U$5(t2, "offset");
  let e2 = this[t2], n2 = this[t2 + 7];
  (e2 === void 0 || n2 === void 0) && T$5(t2, this.length - 8);
  let r2 = e2 + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 24, o2 = this[++t2] + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + n2 * 2 ** 24;
  return BigInt(r2) + (BigInt(o2) << BigInt(32));
});
f$e.prototype.readBigUInt64BE = E$2(function(t2) {
  t2 = t2 >>> 0, U$5(t2, "offset");
  let e2 = this[t2], n2 = this[t2 + 7];
  (e2 === void 0 || n2 === void 0) && T$5(t2, this.length - 8);
  let r2 = e2 * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + this[++t2], o2 = this[++t2] * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + n2;
  return (BigInt(r2) << BigInt(32)) + BigInt(o2);
});
f$e.prototype.readIntLE = function(t2, e2, n2) {
  t2 = t2 >>> 0, e2 = e2 >>> 0, n2 || c$f(t2, e2, this.length);
  let r2 = this[t2], o2 = 1, i2 = 0;
  for (; ++i2 < e2 && (o2 *= 256); ) r2 += this[t2 + i2] * o2;
  return o2 *= 128, r2 >= o2 && (r2 -= Math.pow(2, 8 * e2)), r2;
};
f$e.prototype.readIntBE = function(t2, e2, n2) {
  t2 = t2 >>> 0, e2 = e2 >>> 0, n2 || c$f(t2, e2, this.length);
  let r2 = e2, o2 = 1, i2 = this[t2 + --r2];
  for (; r2 > 0 && (o2 *= 256); ) i2 += this[t2 + --r2] * o2;
  return o2 *= 128, i2 >= o2 && (i2 -= Math.pow(2, 8 * e2)), i2;
};
f$e.prototype.readInt8 = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 1, this.length), this[t2] & 128 ? (255 - this[t2] + 1) * -1 : this[t2];
};
f$e.prototype.readInt16LE = function(t2, e2) {
  t2 = t2 >>> 0, e2 || c$f(t2, 2, this.length);
  let n2 = this[t2] | this[t2 + 1] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f$e.prototype.readInt16BE = function(t2, e2) {
  t2 = t2 >>> 0, e2 || c$f(t2, 2, this.length);
  let n2 = this[t2 + 1] | this[t2] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f$e.prototype.readInt32LE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16 | this[t2 + 3] << 24;
};
f$e.prototype.readInt32BE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), this[t2] << 24 | this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3];
};
f$e.prototype.readBigInt64LE = E$2(function(t2) {
  t2 = t2 >>> 0, U$5(t2, "offset");
  let e2 = this[t2], n2 = this[t2 + 7];
  (e2 === void 0 || n2 === void 0) && T$5(t2, this.length - 8);
  let r2 = this[t2 + 4] + this[t2 + 5] * 2 ** 8 + this[t2 + 6] * 2 ** 16 + (n2 << 24);
  return (BigInt(r2) << BigInt(32)) + BigInt(e2 + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 24);
});
f$e.prototype.readBigInt64BE = E$2(function(t2) {
  t2 = t2 >>> 0, U$5(t2, "offset");
  let e2 = this[t2], n2 = this[t2 + 7];
  (e2 === void 0 || n2 === void 0) && T$5(t2, this.length - 8);
  let r2 = (e2 << 24) + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + this[++t2];
  return (BigInt(r2) << BigInt(32)) + BigInt(this[++t2] * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + n2);
});
f$e.prototype.readFloatLE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), _$5(this, t2, true, 23, 4);
};
f$e.prototype.readFloatBE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 4, this.length), _$5(this, t2, false, 23, 4);
};
f$e.prototype.readDoubleLE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 8, this.length), _$5(this, t2, true, 52, 8);
};
f$e.prototype.readDoubleBE = function(t2, e2) {
  return t2 = t2 >>> 0, e2 || c$f(t2, 8, this.length), _$5(this, t2, false, 52, 8);
};
function g$c(t2, e2, n2, r2, o2, i2) {
  if (!f$e.isBuffer(t2)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e2 > o2 || e2 < i2) throw new RangeError('"value" argument is out of bounds');
  if (n2 + r2 > t2.length) throw new RangeError("Index out of range");
}
f$e.prototype.writeUintLE = f$e.prototype.writeUIntLE = function(t2, e2, n2, r2) {
  if (t2 = +t2, e2 = e2 >>> 0, n2 = n2 >>> 0, !r2) {
    let u2 = Math.pow(2, 8 * n2) - 1;
    g$c(this, t2, e2, n2, u2, 0);
  }
  let o2 = 1, i2 = 0;
  for (this[e2] = t2 & 255; ++i2 < n2 && (o2 *= 256); ) this[e2 + i2] = t2 / o2 & 255;
  return e2 + n2;
};
f$e.prototype.writeUintBE = f$e.prototype.writeUIntBE = function(t2, e2, n2, r2) {
  if (t2 = +t2, e2 = e2 >>> 0, n2 = n2 >>> 0, !r2) {
    let u2 = Math.pow(2, 8 * n2) - 1;
    g$c(this, t2, e2, n2, u2, 0);
  }
  let o2 = n2 - 1, i2 = 1;
  for (this[e2 + o2] = t2 & 255; --o2 >= 0 && (i2 *= 256); ) this[e2 + o2] = t2 / i2 & 255;
  return e2 + n2;
};
f$e.prototype.writeUint8 = f$e.prototype.writeUInt8 = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 1, 255, 0), this[e2] = t2 & 255, e2 + 1;
};
f$e.prototype.writeUint16LE = f$e.prototype.writeUInt16LE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 2, 65535, 0), this[e2] = t2 & 255, this[e2 + 1] = t2 >>> 8, e2 + 2;
};
f$e.prototype.writeUint16BE = f$e.prototype.writeUInt16BE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 2, 65535, 0), this[e2] = t2 >>> 8, this[e2 + 1] = t2 & 255, e2 + 2;
};
f$e.prototype.writeUint32LE = f$e.prototype.writeUInt32LE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 4, 4294967295, 0), this[e2 + 3] = t2 >>> 24, this[e2 + 2] = t2 >>> 16, this[e2 + 1] = t2 >>> 8, this[e2] = t2 & 255, e2 + 4;
};
f$e.prototype.writeUint32BE = f$e.prototype.writeUInt32BE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 4, 4294967295, 0), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = t2 & 255, e2 + 4;
};
function Q$4(t2, e2, n2, r2, o2) {
  rt$1(e2, r2, o2, t2, n2, 7);
  let i2 = Number(e2 & BigInt(4294967295));
  t2[n2++] = i2, i2 = i2 >> 8, t2[n2++] = i2, i2 = i2 >> 8, t2[n2++] = i2, i2 = i2 >> 8, t2[n2++] = i2;
  let u2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, n2;
}
function Z$2(t2, e2, n2, r2, o2) {
  rt$1(e2, r2, o2, t2, n2, 7);
  let i2 = Number(e2 & BigInt(4294967295));
  t2[n2 + 7] = i2, i2 = i2 >> 8, t2[n2 + 6] = i2, i2 = i2 >> 8, t2[n2 + 5] = i2, i2 = i2 >> 8, t2[n2 + 4] = i2;
  let u2 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t2[n2 + 3] = u2, u2 = u2 >> 8, t2[n2 + 2] = u2, u2 = u2 >> 8, t2[n2 + 1] = u2, u2 = u2 >> 8, t2[n2] = u2, n2 + 8;
}
f$e.prototype.writeBigUInt64LE = E$2(function(t2, e2 = 0) {
  return Q$4(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f$e.prototype.writeBigUInt64BE = E$2(function(t2, e2 = 0) {
  return Z$2(this, t2, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f$e.prototype.writeIntLE = function(t2, e2, n2, r2) {
  if (t2 = +t2, e2 = e2 >>> 0, !r2) {
    let s2 = Math.pow(2, 8 * n2 - 1);
    g$c(this, t2, e2, n2, s2 - 1, -s2);
  }
  let o2 = 0, i2 = 1, u2 = 0;
  for (this[e2] = t2 & 255; ++o2 < n2 && (i2 *= 256); ) t2 < 0 && u2 === 0 && this[e2 + o2 - 1] !== 0 && (u2 = 1), this[e2 + o2] = Math.trunc(t2 / i2) - u2 & 255;
  return e2 + n2;
};
f$e.prototype.writeIntBE = function(t2, e2, n2, r2) {
  if (t2 = +t2, e2 = e2 >>> 0, !r2) {
    let s2 = Math.pow(2, 8 * n2 - 1);
    g$c(this, t2, e2, n2, s2 - 1, -s2);
  }
  let o2 = n2 - 1, i2 = 1, u2 = 0;
  for (this[e2 + o2] = t2 & 255; --o2 >= 0 && (i2 *= 256); ) t2 < 0 && u2 === 0 && this[e2 + o2 + 1] !== 0 && (u2 = 1), this[e2 + o2] = Math.trunc(t2 / i2) - u2 & 255;
  return e2 + n2;
};
f$e.prototype.writeInt8 = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 1, 127, -128), t2 < 0 && (t2 = 255 + t2 + 1), this[e2] = t2 & 255, e2 + 1;
};
f$e.prototype.writeInt16LE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 2, 32767, -32768), this[e2] = t2 & 255, this[e2 + 1] = t2 >>> 8, e2 + 2;
};
f$e.prototype.writeInt16BE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 2, 32767, -32768), this[e2] = t2 >>> 8, this[e2 + 1] = t2 & 255, e2 + 2;
};
f$e.prototype.writeInt32LE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 4, 2147483647, -2147483648), this[e2] = t2 & 255, this[e2 + 1] = t2 >>> 8, this[e2 + 2] = t2 >>> 16, this[e2 + 3] = t2 >>> 24, e2 + 4;
};
f$e.prototype.writeInt32BE = function(t2, e2, n2) {
  return t2 = +t2, e2 = e2 >>> 0, n2 || g$c(this, t2, e2, 4, 2147483647, -2147483648), t2 < 0 && (t2 = 4294967295 + t2 + 1), this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = t2 & 255, e2 + 4;
};
f$e.prototype.writeBigInt64LE = E$2(function(t2, e2 = 0) {
  return Q$4(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f$e.prototype.writeBigInt64BE = E$2(function(t2, e2 = 0) {
  return Z$2(this, t2, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function tt$2(t2, e2, n2, r2, o2, i2) {
  if (n2 + r2 > t2.length) throw new RangeError("Index out of range");
  if (n2 < 0) throw new RangeError("Index out of range");
}
function et(t2, e2, n2, r2, o2) {
  return e2 = +e2, n2 = n2 >>> 0, o2 || tt$2(t2, e2, n2, 4), z$6(t2, e2, n2, r2, 23, 4), n2 + 4;
}
f$e.prototype.writeFloatLE = function(t2, e2, n2) {
  return et(this, t2, e2, true, n2);
};
f$e.prototype.writeFloatBE = function(t2, e2, n2) {
  return et(this, t2, e2, false, n2);
};
function nt$1(t2, e2, n2, r2, o2) {
  return e2 = +e2, n2 = n2 >>> 0, o2 || tt$2(t2, e2, n2, 8), z$6(t2, e2, n2, r2, 52, 8), n2 + 8;
}
f$e.prototype.writeDoubleLE = function(t2, e2, n2) {
  return nt$1(this, t2, e2, true, n2);
};
f$e.prototype.writeDoubleBE = function(t2, e2, n2) {
  return nt$1(this, t2, e2, false, n2);
};
f$e.prototype.copy = function(t2, e2, n2, r2) {
  if (!f$e.isBuffer(t2)) throw new TypeError("argument should be a Buffer");
  if (n2 || (n2 = 0), !r2 && r2 !== 0 && (r2 = this.length), e2 >= t2.length && (e2 = t2.length), e2 || (e2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2 || t2.length === 0 || this.length === 0) return 0;
  if (e2 < 0) throw new RangeError("targetStart out of bounds");
  if (n2 < 0 || n2 >= this.length) throw new RangeError("Index out of range");
  if (r2 < 0) throw new RangeError("sourceEnd out of bounds");
  r2 > this.length && (r2 = this.length), t2.length - e2 < r2 - n2 && (r2 = t2.length - e2 + n2);
  let o2 = r2 - n2;
  return this === t2 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e2, n2, r2) : Uint8Array.prototype.set.call(t2, this.subarray(n2, r2), e2), o2;
};
f$e.prototype.fill = function(t2, e2, n2, r2) {
  if (typeof t2 == "string") {
    if (typeof e2 == "string" ? (r2 = e2, e2 = 0, n2 = this.length) : typeof n2 == "string" && (r2 = n2, n2 = this.length), r2 !== void 0 && typeof r2 != "string") throw new TypeError("encoding must be a string");
    if (typeof r2 == "string" && !f$e.isEncoding(r2)) throw new TypeError("Unknown encoding: " + r2);
    if (t2.length === 1) {
      let i2 = t2.charCodeAt(0);
      (r2 === "utf8" && i2 < 128 || r2 === "latin1") && (t2 = i2);
    }
  } else typeof t2 == "number" ? t2 = t2 & 255 : typeof t2 == "boolean" && (t2 = Number(t2));
  if (e2 < 0 || this.length < e2 || this.length < n2) throw new RangeError("Out of range index");
  if (n2 <= e2) return this;
  e2 = e2 >>> 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, t2 || (t2 = 0);
  let o2;
  if (typeof t2 == "number") for (o2 = e2; o2 < n2; ++o2) this[o2] = t2;
  else {
    let i2 = f$e.isBuffer(t2) ? t2 : f$e.from(t2, r2), u2 = i2.length;
    if (u2 === 0) throw new TypeError('The value "' + t2 + '" is invalid for argument "value"');
    for (o2 = 0; o2 < n2 - e2; ++o2) this[o2 + e2] = i2[o2 % u2];
  }
  return this;
};
var A$c = {};
function C$8(t2, e2, n2) {
  A$c[t2] = class extends n2 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(e2, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t2}]`, this.stack, delete this.name;
    }
    get code() {
      return t2;
    }
    set code(r2) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: r2, writable: true });
    }
    toString() {
      return `${this.name} [${t2}]: ${this.message}`;
    }
  };
}
C$8("ERR_BUFFER_OUT_OF_BOUNDS", function(t2) {
  return t2 ? `${t2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError);
C$8("ERR_INVALID_ARG_TYPE", function(t2, e2) {
  return `The "${t2}" argument must be of type number. Received type ${typeof e2}`;
}, TypeError);
C$8("ERR_OUT_OF_RANGE", function(t2, e2, n2) {
  let r2 = `The value of "${t2}" is out of range.`, o2 = n2;
  return Number.isInteger(n2) && Math.abs(n2) > 2 ** 32 ? o2 = D$4(String(n2)) : typeof n2 == "bigint" && (o2 = String(n2), (n2 > BigInt(2) ** BigInt(32) || n2 < -(BigInt(2) ** BigInt(32))) && (o2 = D$4(o2)), o2 += "n"), r2 += ` It must be ${e2}. Received ${o2}`, r2;
}, RangeError);
function D$4(t2) {
  let e2 = "", n2 = t2.length, r2 = t2[0] === "-" ? 1 : 0;
  for (; n2 >= r2 + 4; n2 -= 3) e2 = `_${t2.slice(n2 - 3, n2)}${e2}`;
  return `${t2.slice(0, n2)}${e2}`;
}
function St(t2, e2, n2) {
  U$5(e2, "offset"), (t2[e2] === void 0 || t2[e2 + n2] === void 0) && T$5(e2, t2.length - (n2 + 1));
}
function rt$1(t2, e2, n2, r2, o2, i2) {
  if (t2 > n2 || t2 < e2) {
    let u2 = typeof e2 == "bigint" ? "n" : "", s2;
    throw s2 = e2 === 0 || e2 === BigInt(0) ? `>= 0${u2} and < 2${u2} ** ${(i2 + 1) * 8}${u2}` : `>= -(2${u2} ** ${(i2 + 1) * 8 - 1}${u2}) and < 2 ** ${(i2 + 1) * 8 - 1}${u2}`, new A$c.ERR_OUT_OF_RANGE("value", s2, t2);
  }
  St(r2, o2, i2);
}
function U$5(t2, e2) {
  if (typeof t2 != "number") throw new A$c.ERR_INVALID_ARG_TYPE(e2, "number", t2);
}
function T$5(t2, e2, n2) {
  throw Math.floor(t2) !== t2 ? (U$5(t2, n2), new A$c.ERR_OUT_OF_RANGE("offset", "an integer", t2)) : e2 < 0 ? new A$c.ERR_BUFFER_OUT_OF_BOUNDS() : new A$c.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${e2}`, t2);
}
var xt = /[^\w+/-]/g;
function Mt(t2) {
  if (t2 = t2.split("=")[0], t2 = t2.trim().replace(xt, ""), t2.length < 2) return "";
  for (; t2.length % 4 !== 0; ) t2 = t2 + "=";
  return t2;
}
function x$g(t2, e2) {
  e2 = e2 || Number.POSITIVE_INFINITY;
  let n2, r2 = t2.length, o2 = null, i2 = [];
  for (let u2 = 0; u2 < r2; ++u2) {
    if (n2 = t2.charCodeAt(u2), n2 > 55295 && n2 < 57344) {
      if (!o2) {
        if (n2 > 56319) {
          (e2 -= 3) > -1 && i2.push(239, 191, 189);
          continue;
        } else if (u2 + 1 === r2) {
          (e2 -= 3) > -1 && i2.push(239, 191, 189);
          continue;
        }
        o2 = n2;
        continue;
      }
      if (n2 < 56320) {
        (e2 -= 3) > -1 && i2.push(239, 191, 189), o2 = n2;
        continue;
      }
      n2 = (o2 - 55296 << 10 | n2 - 56320) + 65536;
    } else o2 && (e2 -= 3) > -1 && i2.push(239, 191, 189);
    if (o2 = null, n2 < 128) {
      if ((e2 -= 1) < 0) break;
      i2.push(n2);
    } else if (n2 < 2048) {
      if ((e2 -= 2) < 0) break;
      i2.push(n2 >> 6 | 192, n2 & 63 | 128);
    } else if (n2 < 65536) {
      if ((e2 -= 3) < 0) break;
      i2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else if (n2 < 1114112) {
      if ((e2 -= 4) < 0) break;
      i2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else throw new Error("Invalid code point");
  }
  return i2;
}
function $t(t2) {
  let e2 = [];
  for (let n2 = 0; n2 < t2.length; ++n2) e2.push(t2.charCodeAt(n2) & 255);
  return e2;
}
function Ct(t2, e2) {
  let n2, r2, o2, i2 = [];
  for (let u2 = 0; u2 < t2.length && !((e2 -= 2) < 0); ++u2) n2 = t2.charCodeAt(u2), r2 = n2 >> 8, o2 = n2 % 256, i2.push(o2, r2);
  return i2;
}
function ot$2(t2) {
  return at$1(Mt(t2));
}
function O$4(t2, e2, n2, r2) {
  let o2;
  for (o2 = 0; o2 < r2 && !(o2 + n2 >= e2.length || o2 >= t2.length); ++o2) e2[o2 + n2] = t2[o2];
  return o2;
}
function b$c(t2, e2) {
  return t2 instanceof e2 || t2 != null && t2.constructor != null && t2.constructor.name != null && t2.constructor.name === e2.name;
}
function P$9(t2) {
  return t2 !== t2;
}
var Pt = function() {
  let t2 = "0123456789abcdef", e2 = Array.from({ length: 256 });
  for (let n2 = 0; n2 < 16; ++n2) {
    let r2 = n2 * 16;
    for (let o2 = 0; o2 < 16; ++o2) e2[r2 + o2] = t2[n2] + t2[o2];
  }
  return e2;
}();
function E$2(t2) {
  return typeof BigInt > "u" ? kt$1 : t2;
}
function kt$1() {
  throw new Error("BigInt not supported");
}
var jt = globalThis.Buffer || f$e;
v$a("buffer.resolveObjectURL");
v$a("buffer.transcode");
v$a("buffer.isUtf8");
v$a("buffer.isAscii");
globalThis.btoa.bind(globalThis);
globalThis.atob.bind(globalThis);
/*! Bundled license information:

unenv-nightly/runtime/node/buffer/internal/ieee754.mjs:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv-nightly/runtime/node/buffer/internal/buffer.mjs:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
var require$k = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "node:fs":
      return e2(__2$$5);
    case "node:path":
      return e2(__1$$7);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var y$d = Object.create;
var o$5 = Object.defineProperty;
var M$4 = Object.getOwnPropertyDescriptor;
var j$f = Object.getOwnPropertyNames;
var C$7 = Object.getPrototypeOf, F$3 = Object.prototype.hasOwnProperty;
var c$e = ((i2) => typeof require$k < "u" ? require$k : typeof Proxy < "u" ? new Proxy(i2, { get: (t2, e2) => (typeof require$k < "u" ? require$k : t2)[e2] }) : i2)(function(i2) {
  if (typeof require$k < "u") return require$k.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var A$b = (i2, t2) => () => (i2 && (t2 = i2(i2 = 0)), t2);
var R$3 = (i2, t2) => () => (t2 || i2((t2 = { exports: {} }).exports, t2), t2.exports), I$6 = (i2, t2) => {
  for (var e2 in t2) o$5(i2, e2, { get: t2[e2], enumerable: true });
}, h$d = (i2, t2, e2, n2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let r2 of j$f(t2)) !F$3.call(i2, r2) && r2 !== e2 && o$5(i2, r2, { get: () => t2[r2], enumerable: !(n2 = M$4(t2, r2)) || n2.enumerable });
  return i2;
};
var L$6 = (i2, t2, e2) => (e2 = i2 != null ? y$d(C$7(i2)) : {}, h$d(!i2 || !i2.__esModule ? o$5(e2, "default", { value: i2, enumerable: true }) : e2, i2)), q$9 = (i2) => h$d(o$5({}, "__esModule", { value: true }), i2);
var m$k = {};
I$6(m$k, { default: () => x$f });
var x$f, d$h = A$b(() => {
  x$f = {};
});
var S$a = R$3((J3, b2) => {
  var { existsSync: B3, readFileSync: E2 } = c$e("node:fs"), { dirname: s2, join: O3 } = c$e("node:path"), { SourceMapConsumer: p3, SourceMapGenerator: g2 } = (d$h(), q$9(m$k));
  function W2(i2) {
    return jt ? jt.from(i2, "base64").toString() : window.atob(i2);
  }
  var a2 = class {
    constructor(t2, e2) {
      if (e2.map === false) return;
      this.loadAnnotation(t2), this.inline = this.startWith(this.annotation, "data:");
      let n2 = e2.map ? e2.map.prev : void 0, r2 = this.loadMap(e2.from, n2);
      !this.mapFile && e2.from && (this.mapFile = e2.from), this.mapFile && (this.root = s2(this.mapFile)), r2 && (this.text = r2);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new p3(this.text)), this.consumerCache;
    }
    decodeInline(t2) {
      let e2 = /^data:application\/json;charset=utf-?8;base64,/, n2 = /^data:application\/json;base64,/, r2 = /^data:application\/json;charset=utf-?8,/, U2 = /^data:application\/json,/, u2 = t2.match(r2) || t2.match(U2);
      if (u2) return decodeURIComponent(t2.substr(u2[0].length));
      let f2 = t2.match(e2) || t2.match(n2);
      if (f2) return W2(t2.substr(f2[0].length));
      let w2 = t2.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + w2);
    }
    getAnnotationURL(t2) {
      return t2.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(t2) {
      return typeof t2 != "object" ? false : typeof t2.mappings == "string" || typeof t2._mappings == "string" || Array.isArray(t2.sections);
    }
    loadAnnotation(t2) {
      let e2 = t2.match(/\/\*\s*# sourceMappingURL=/g);
      if (!e2) return;
      let n2 = t2.lastIndexOf(e2.pop()), r2 = t2.indexOf("*/", n2);
      n2 > -1 && r2 > -1 && (this.annotation = this.getAnnotationURL(t2.substring(n2, r2)));
    }
    loadFile(t2) {
      if (this.root = s2(t2), B3(t2)) return this.mapFile = t2, E2(t2, "utf-8").toString().trim();
    }
    loadMap(t2, e2) {
      if (e2 === false) return false;
      if (e2) {
        if (typeof e2 == "string") return e2;
        if (typeof e2 == "function") {
          let n2 = e2(t2);
          if (n2) {
            let r2 = this.loadFile(n2);
            if (!r2) throw new Error("Unable to load previous source map: " + n2.toString());
            return r2;
          }
        } else {
          if (e2 instanceof p3) return g2.fromSourceMap(e2).toString();
          if (e2 instanceof g2) return e2.toString();
          if (this.isMap(e2)) return JSON.stringify(e2);
          throw new Error("Unsupported previous source map format: " + e2.toString());
        }
      } else {
        if (this.inline) return this.decodeInline(this.annotation);
        if (this.annotation) {
          let n2 = this.annotation;
          return t2 && (n2 = O3(s2(t2), n2)), this.loadFile(n2);
        }
      }
    }
    startWith(t2, e2) {
      return t2 ? t2.substr(0, e2.length) === e2 : false;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  };
  b2.exports = a2;
  a2.default = a2;
});
var l$b = L$6(S$a()), N$3 = l$b.default ?? l$b;
const __4$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N$3
}, Symbol.toStringTag, { value: "Module" }));
var require$j = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2, c2 = (m2) => Object.assign({ __esModule: true }, m2);
  switch (n2) {
    case "nanoid/non-secure":
      return c2(__0$$5);
    case "node:path":
      return e2(__1$$7);
    case "node:url":
      return e2(__1$$6);
    case "postcss/lib/css-syntax-error":
      return e2(__3$$1);
    case "postcss/lib/previous-map":
      return e2(__4$$1);
    case "postcss/lib/terminal-highlight":
      return e2(__5$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var R$2 = Object.create;
var p$g = Object.defineProperty;
var P$8 = Object.getOwnPropertyDescriptor;
var j$e = Object.getOwnPropertyNames;
var B$4 = Object.getPrototypeOf, E$1 = Object.prototype.hasOwnProperty;
var m$j = ((s2) => typeof require$j < "u" ? require$j : typeof Proxy < "u" ? new Proxy(s2, { get: (e2, i2) => (typeof require$j < "u" ? require$j : e2)[i2] }) : s2)(function(s2) {
  if (typeof require$j < "u") return require$j.apply(this, arguments);
  throw Error('Dynamic require of "' + s2 + '" is not supported');
});
var A$a = (s2, e2) => () => (s2 && (e2 = s2(s2 = 0)), e2);
var U$4 = (s2, e2) => () => (e2 || s2((e2 = { exports: {} }).exports, e2), e2.exports), I$5 = (s2, e2) => {
  for (var i2 in e2) p$g(s2, i2, { get: e2[i2], enumerable: true });
}, F$2 = (s2, e2, i2, t2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let l2 of j$e(e2)) !E$1.call(s2, l2) && l2 !== i2 && p$g(s2, l2, { get: () => e2[l2], enumerable: !(t2 = P$8(e2, l2)) || t2.enumerable });
  return s2;
};
var T$4 = (s2, e2, i2) => (i2 = s2 != null ? R$2(B$4(s2)) : {}, F$2(!s2 || !s2.__esModule ? p$g(i2, "default", { value: s2, enumerable: true }) : i2, s2)), k$5 = (s2) => F$2(p$g({}, "__esModule", { value: true }), s2);
var O$3 = {};
I$5(O$3, { default: () => G$1 });
var G$1, v$9 = A$a(() => {
  G$1 = {};
});
var M$3 = U$4((K2, q3) => {
  var { nanoid: H2 } = m$j("nanoid/non-secure"), { isAbsolute: C2, resolve: b2 } = m$j("node:path"), { SourceMapConsumer: J3, SourceMapGenerator: N2 } = (v$9(), k$5(O$3)), { fileURLToPath: y2, pathToFileURL: d2 } = m$j("node:url"), x2 = m$j("postcss/lib/css-syntax-error"), $2 = m$j("postcss/lib/previous-map"), g2 = m$j("postcss/lib/terminal-highlight"), S2 = Symbol("fromOffsetCache"), z2 = !!(J3 && N2), L2 = !!(b2 && C2), a2 = class {
    get from() {
      return this.file || this.id;
    }
    constructor(e2, i2 = {}) {
      if (e2 === null || typeof e2 > "u" || typeof e2 == "object" && !e2.toString) throw new Error(`PostCSS received ${e2} instead of CSS string`);
      if (this.css = e2.toString(), this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, i2.document && (this.document = i2.document.toString()), i2.from && (!L2 || /^\w+:\/\//.test(i2.from) || C2(i2.from) ? this.file = i2.from : this.file = b2(i2.from)), L2 && z2) {
        let t2 = new $2(this.css, i2);
        if (t2.text) {
          this.map = t2;
          let l2 = t2.consumer().file;
          !this.file && l2 && (this.file = this.mapResolve(l2));
        }
      }
      this.file || (this.id = "<input css " + H2(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(e2, i2, t2, l2 = {}) {
      let n2, r2, f2;
      if (i2 && typeof i2 == "object") {
        let u2 = i2, h2 = t2;
        if (typeof u2.offset == "number") {
          let c2 = this.fromOffset(u2.offset);
          i2 = c2.line, t2 = c2.col;
        } else i2 = u2.line, t2 = u2.column;
        if (typeof h2.offset == "number") {
          let c2 = this.fromOffset(h2.offset);
          r2 = c2.line, n2 = c2.col;
        } else r2 = h2.line, n2 = h2.column;
      } else if (!t2) {
        let u2 = this.fromOffset(i2);
        i2 = u2.line, t2 = u2.col;
      }
      let o2 = this.origin(i2, t2, r2, n2);
      return o2 ? f2 = new x2(e2, o2.endLine === void 0 ? o2.line : { column: o2.column, line: o2.line }, o2.endLine === void 0 ? o2.column : { column: o2.endColumn, line: o2.endLine }, o2.source, o2.file, l2.plugin) : f2 = new x2(e2, r2 === void 0 ? i2 : { column: t2, line: i2 }, r2 === void 0 ? t2 : { column: n2, line: r2 }, this.css, this.file, l2.plugin), f2.input = { column: t2, endColumn: n2, endLine: r2, line: i2, source: this.css }, this.file && (d2 && (f2.input.url = d2(this.file).toString()), f2.input.file = this.file), f2;
    }
    fromOffset(e2) {
      let i2, t2;
      if (this[S2]) t2 = this[S2];
      else {
        let n2 = this.css.split(`
`);
        t2 = new Array(n2.length);
        let r2 = 0;
        for (let f2 = 0, o2 = n2.length; f2 < o2; f2++) t2[f2] = r2, r2 += n2[f2].length + 1;
        this[S2] = t2;
      }
      i2 = t2[t2.length - 1];
      let l2 = 0;
      if (e2 >= i2) l2 = t2.length - 1;
      else {
        let n2 = t2.length - 2, r2;
        for (; l2 < n2; ) if (r2 = l2 + (n2 - l2 >> 1), e2 < t2[r2]) n2 = r2 - 1;
        else if (e2 >= t2[r2 + 1]) l2 = r2 + 1;
        else {
          l2 = r2;
          break;
        }
      }
      return { col: e2 - t2[l2] + 1, line: l2 + 1 };
    }
    mapResolve(e2) {
      return /^\w+:\/\//.test(e2) ? e2 : b2(this.map.consumer().sourceRoot || this.map.root || ".", e2);
    }
    origin(e2, i2, t2, l2) {
      if (!this.map) return false;
      let n2 = this.map.consumer(), r2 = n2.originalPositionFor({ column: i2, line: e2 });
      if (!r2.source) return false;
      let f2;
      typeof t2 == "number" && (f2 = n2.originalPositionFor({ column: l2, line: t2 }));
      let o2;
      C2(r2.source) ? o2 = d2(r2.source) : o2 = new URL(r2.source, this.map.consumer().sourceRoot || d2(this.map.mapFile));
      let u2 = { column: r2.column, endColumn: f2 && f2.column, endLine: f2 && f2.line, line: r2.line, url: o2.toString() };
      if (o2.protocol === "file:") if (y2) u2.file = y2(o2);
      else throw new Error("file: protocol is not available in this PostCSS build");
      let h2 = n2.sourceContentFor(r2.source);
      return h2 && (u2.source = h2), u2;
    }
    toJSON() {
      let e2 = {};
      for (let i2 of ["hasBOM", "css", "file", "id"]) this[i2] != null && (e2[i2] = this[i2]);
      return this.map && (e2.map = { ...this.map }, e2.map.consumerCache && (e2.map.consumerCache = void 0)), e2;
    }
  };
  q3.exports = a2;
  a2.default = a2;
  g2 && g2.registerInput && g2.registerInput(a2);
});
var w$b = T$4(M$3()), Q$3 = w$b.default ?? w$b;
const __7$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q$3
}, Symbol.toStringTag, { value: "Module" }));
var require$i = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var b$b = Object.create;
var f$d = Object.defineProperty;
var c$d = Object.getOwnPropertyDescriptor;
var g$b = Object.getOwnPropertyNames;
var y$c = Object.getPrototypeOf, z$5 = Object.prototype.hasOwnProperty;
var p$f = ((r2) => typeof require$i < "u" ? require$i : typeof Proxy < "u" ? new Proxy(r2, { get: (e2, s2) => (typeof require$i < "u" ? require$i : e2)[s2] }) : r2)(function(r2) {
  if (typeof require$i < "u") return require$i.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var x$e = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var m$i = (r2, e2, s2, i2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let t2 of g$b(e2)) !z$5.call(r2, t2) && t2 !== s2 && f$d(r2, t2, { get: () => e2[t2], enumerable: !(i2 = c$d(e2, t2)) || i2.enumerable });
  return r2;
};
var C$6 = (r2, e2, s2) => (s2 = r2 != null ? b$b(y$c(r2)) : {}, m$i(!r2 || !r2.__esModule ? f$d(s2, "default", { value: r2, enumerable: true }) : s2, r2));
var h$c = x$e((j3, u2) => {
  var l2 = p$f("postcss/lib/container"), d2, a2, o2 = class extends l2 {
    constructor(e2) {
      super(e2), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(e2, s2, i2) {
      let t2 = super.normalize(e2);
      if (s2) {
        if (i2 === "prepend") this.nodes.length > 1 ? s2.raws.before = this.nodes[1].raws.before : delete s2.raws.before;
        else if (this.first !== s2) for (let w2 of t2) w2.raws.before = s2.raws.before;
      }
      return t2;
    }
    removeChild(e2, s2) {
      let i2 = this.index(e2);
      return !s2 && i2 === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[i2].raws.before), super.removeChild(e2);
    }
    toResult(e2 = {}) {
      return new d2(new a2(), this, e2).stringify();
    }
  };
  o2.registerLazyResult = (r2) => {
    d2 = r2;
  };
  o2.registerProcessor = (r2) => {
    a2 = r2;
  };
  u2.exports = o2;
  o2.default = o2;
  l2.registerRoot(o2);
});
var n$a = C$6(h$c()), v$8 = n$a.default ?? n$a;
const __e$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v$8
}, Symbol.toStringTag, { value: "Module" }));
var h$b = Object.create;
var n$9 = Object.defineProperty;
var j$d = Object.getOwnPropertyDescriptor;
var Q$2 = Object.getOwnPropertyNames;
var v$7 = Object.getPrototypeOf, y$b = Object.prototype.hasOwnProperty;
var b$a = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var g$a = (e2, t2, f2, i2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let l2 of Q$2(t2)) !y$b.call(e2, l2) && l2 !== f2 && n$9(e2, l2, { get: () => t2[l2], enumerable: !(i2 = j$d(t2, l2)) || i2.enumerable });
  return e2;
};
var k$4 = (e2, t2, f2) => (f2 = e2 != null ? h$b(v$7(e2)) : {}, g$a(!e2 || !e2.__esModule ? n$9(f2, "default", { value: e2, enumerable: true }) : f2, e2));
var x$d = b$a((w2, d2) => {
  var r2 = { comma(e2) {
    return r2.split(e2, [","], true);
  }, space(e2) {
    let t2 = [" ", `
`, "	"];
    return r2.split(e2, t2);
  }, split(e2, t2, f2) {
    let i2 = [], l2 = "", p3 = false, a2 = 0, c2 = false, m2 = "", o2 = false;
    for (let s2 of e2) o2 ? o2 = false : s2 === "\\" ? o2 = true : c2 ? s2 === m2 && (c2 = false) : s2 === '"' || s2 === "'" ? (c2 = true, m2 = s2) : s2 === "(" ? a2 += 1 : s2 === ")" ? a2 > 0 && (a2 -= 1) : a2 === 0 && t2.includes(s2) && (p3 = true), p3 ? (l2 !== "" && i2.push(l2.trim()), l2 = "", p3 = false) : l2 += s2;
    return (f2 || l2 !== "") && i2.push(l2.trim()), i2;
  } };
  d2.exports = r2;
  r2.default = r2;
});
var u$b = k$4(x$d()), { comma: z$4, space: A$9, split: B$3 } = u$b, C$5 = u$b.default ?? u$b;
const __9$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  comma: z$4,
  default: C$5,
  space: A$9,
  split: B$3
}, Symbol.toStringTag, { value: "Module" }));
var require$h = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    case "postcss/lib/list":
      return e2(__9$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var m$h = Object.create;
var c$c = Object.defineProperty;
var p$e = Object.getOwnPropertyDescriptor;
var d$g = Object.getOwnPropertyNames;
var f$c = Object.getPrototypeOf, j$c = Object.prototype.hasOwnProperty;
var n$8 = ((t2) => typeof require$h < "u" ? require$h : typeof Proxy < "u" ? new Proxy(t2, { get: (e2, s2) => (typeof require$h < "u" ? require$h : e2)[s2] }) : t2)(function(t2) {
  if (typeof require$h < "u") return require$h.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var x$c = (t2, e2) => () => (e2 || t2((e2 = { exports: {} }).exports, e2), e2.exports);
var b$9 = (t2, e2, s2, o2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let l2 of d$g(e2)) !j$c.call(t2, l2) && l2 !== s2 && c$c(t2, l2, { get: () => e2[l2], enumerable: !(o2 = p$e(e2, l2)) || o2.enumerable });
  return t2;
};
var g$9 = (t2, e2, s2) => (s2 = t2 != null ? m$h(f$c(t2)) : {}, b$9(!t2 || !t2.__esModule ? c$c(s2, "default", { value: t2, enumerable: true }) : s2, t2));
var h$a = x$c((y2, a2) => {
  var u2 = n$8("postcss/lib/container"), q3 = n$8("postcss/lib/list"), r2 = class extends u2 {
    get selectors() {
      return q3.comma(this.selector);
    }
    set selectors(e2) {
      let s2 = this.selector ? this.selector.match(/,\s*/) : null, o2 = s2 ? s2[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e2.join(o2);
    }
    constructor(e2) {
      super(e2), this.type = "rule", this.nodes || (this.nodes = []);
    }
  };
  a2.exports = r2;
  r2.default = r2;
  u2.registerRule(r2);
});
var i$7 = g$9(h$a()), C$4 = i$7.default ?? i$7;
const __f$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C$4
}, Symbol.toStringTag, { value: "Module" }));
var require$g = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/at-rule":
      return e2(__0$$6);
    case "postcss/lib/comment":
      return e2(__1$$4);
    case "postcss/lib/declaration":
      return e2(__4$$2);
    case "postcss/lib/input":
      return e2(__7$);
    case "postcss/lib/previous-map":
      return e2(__4$$1);
    case "postcss/lib/root":
      return e2(__e$);
    case "postcss/lib/rule":
      return e2(__f$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var m$g = Object.create;
var f$b = Object.defineProperty;
var c$b = Object.getOwnPropertyDescriptor;
var d$f = Object.getOwnPropertyNames;
var y$a = Object.getPrototypeOf, w$a = Object.prototype.hasOwnProperty;
var l$a = ((e2) => typeof require$g < "u" ? require$g : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, o2) => (typeof require$g < "u" ? require$g : r2)[o2] }) : e2)(function(e2) {
  if (typeof require$g < "u") return require$g.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var _$4 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var q$8 = (e2, r2, o2, t2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let u2 of d$f(r2)) !w$a.call(e2, u2) && u2 !== o2 && f$b(e2, u2, { get: () => r2[u2], enumerable: !(t2 = c$b(r2, u2)) || t2.enumerable });
  return e2;
};
var A$8 = (e2, r2, o2) => (o2 = e2 != null ? m$g(y$a(e2)) : {}, q$8(!e2 || !e2.__esModule ? f$b(o2, "default", { value: e2, enumerable: true }) : o2, e2));
var a$a = _$4((E2, s2) => {
  var I2 = l$a("postcss/lib/at-rule"), R2 = l$a("postcss/lib/comment"), h2 = l$a("postcss/lib/declaration"), x2 = l$a("postcss/lib/input"), k2 = l$a("postcss/lib/previous-map"), v2 = l$a("postcss/lib/root"), C2 = l$a("postcss/lib/rule");
  function i2(e2, r2) {
    if (Array.isArray(e2)) return e2.map((u2) => i2(u2));
    let { inputs: o2, ...t2 } = e2;
    if (o2) {
      r2 = [];
      for (let u2 of o2) {
        let p3 = { ...u2, __proto__: x2.prototype };
        p3.map && (p3.map = { ...p3.map, __proto__: k2.prototype }), r2.push(p3);
      }
    }
    if (t2.nodes && (t2.nodes = e2.nodes.map((u2) => i2(u2, r2))), t2.source) {
      let { inputId: u2, ...p3 } = t2.source;
      t2.source = p3, u2 != null && (t2.source.input = r2[u2]);
    }
    if (t2.type === "root") return new v2(t2);
    if (t2.type === "decl") return new h2(t2);
    if (t2.type === "rule") return new C2(t2);
    if (t2.type === "comment") return new R2(t2);
    if (t2.type === "atrule") return new I2(t2);
    throw new Error("Unknown node type: " + e2.type);
  }
  s2.exports = i2;
  i2.default = i2;
});
var n$7 = A$8(a$a()), H$2 = n$7.default ?? n$7;
const __6$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H$2
}, Symbol.toStringTag, { value: "Module" }));
var require$f = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "node:path":
      return e2(__1$$7);
    case "node:url":
      return e2(__1$$6);
    case "postcss/lib/input":
      return e2(__7$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var I$4 = Object.create;
var a$9 = Object.defineProperty;
var b$8 = Object.getOwnPropertyDescriptor;
var L$5 = Object.getOwnPropertyNames;
var z$3 = Object.getPrototypeOf, A$7 = Object.prototype.hasOwnProperty;
var u$a = ((i2) => typeof require$f < "u" ? require$f : typeof Proxy < "u" ? new Proxy(i2, { get: (t2, e2) => (typeof require$f < "u" ? require$f : t2)[e2] }) : i2)(function(i2) {
  if (typeof require$f < "u") return require$f.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var P$7 = (i2, t2) => () => (i2 && (t2 = i2(i2 = 0)), t2);
var x$b = (i2, t2) => () => (t2 || i2((t2 = { exports: {} }).exports, t2), t2.exports), B$2 = (i2, t2) => {
  for (var e2 in t2) a$9(i2, e2, { get: t2[e2], enumerable: true });
}, v$6 = (i2, t2, e2, o2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let s2 of L$5(t2)) !A$7.call(i2, s2) && s2 !== e2 && a$9(i2, s2, { get: () => t2[s2], enumerable: !(o2 = b$8(t2, s2)) || o2.enumerable });
  return i2;
};
var q$7 = (i2, t2, e2) => (e2 = i2 != null ? I$4(z$3(i2)) : {}, v$6(!i2 || !i2.__esModule ? a$9(e2, "default", { value: i2, enumerable: true }) : e2, i2)), j$b = (i2) => v$6(a$9({}, "__esModule", { value: true }), i2);
var M$2 = {};
B$2(M$2, { default: () => k$3 });
var k$3, U$3 = P$7(() => {
  k$3 = {};
});
var R$1 = x$b((G2, F2) => {
  var { dirname: l2, relative: S2, resolve: C2, sep: w2 } = u$a("node:path"), { SourceMapConsumer: y2, SourceMapGenerator: p3 } = (U$3(), j$b(M$2)), { pathToFileURL: O3 } = u$a("node:url"), E2 = u$a("postcss/lib/input"), T2 = !!(y2 && p3), W2 = !!(l2 && C2 && S2 && w2), m2 = class {
    constructor(t2, e2, o2, s2) {
      this.stringify = t2, this.mapOpts = o2.map || {}, this.root = e2, this.opts = o2, this.css = s2, this.originalCSS = s2, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let t2;
      this.isInline() ? t2 = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t2 = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t2 = this.mapOpts.annotation(this.opts.to, this.root) : t2 = this.outputFile() + ".map";
      let e2 = `
`;
      this.css.includes(`\r
`) && (e2 = `\r
`), this.css += e2 + "/*# sourceMappingURL=" + t2 + " */";
    }
    applyPrevMaps() {
      for (let t2 of this.previous()) {
        let e2 = this.toUrl(this.path(t2.file)), o2 = t2.root || l2(t2.file), s2;
        this.mapOpts.sourcesContent === false ? (s2 = new y2(t2.text), s2.sourcesContent && (s2.sourcesContent = null)) : s2 = t2.consumer(), this.map.applySourceMap(s2, e2, this.toUrl(this.path(o2)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== false) if (this.root) {
        let t2;
        for (let e2 = this.root.nodes.length - 1; e2 >= 0; e2--) t2 = this.root.nodes[e2], t2.type === "comment" && t2.text.startsWith("# sourceMappingURL=") && this.root.removeChild(e2);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), W2 && T2 && this.isMap()) return this.generateMap();
      {
        let t2 = "";
        return this.stringify(this.root, (e2) => {
          t2 += e2;
        }), [t2];
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let t2 = this.previous()[0].consumer();
        t2.file = this.outputFile(), this.map = p3.fromSourceMap(t2, { ignoreInvalidMapping: true });
      } else this.map = new p3({ file: this.outputFile(), ignoreInvalidMapping: true }), this.map.addMapping({ generated: { column: 0, line: 1 }, original: { column: 0, line: 1 }, source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>" });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new p3({ file: this.outputFile(), ignoreInvalidMapping: true });
      let t2 = 1, e2 = 1, o2 = "<no source>", s2 = { generated: { column: 0, line: 0 }, original: { column: 0, line: 0 }, source: "" }, f2, h2;
      this.stringify(this.root, (n2, r2, g2) => {
        if (this.css += n2, r2 && g2 !== "end" && (s2.generated.line = t2, s2.generated.column = e2 - 1, r2.source && r2.source.start ? (s2.source = this.sourcePath(r2), s2.original.line = r2.source.start.line, s2.original.column = r2.source.start.column - 1, this.map.addMapping(s2)) : (s2.source = o2, s2.original.line = 1, s2.original.column = 0, this.map.addMapping(s2))), h2 = n2.match(/\n/g), h2 ? (t2 += h2.length, f2 = n2.lastIndexOf(`
`), e2 = n2.length - f2) : e2 += n2.length, r2 && g2 !== "start") {
          let d2 = r2.parent || { raws: {} };
          (!(r2.type === "decl" || r2.type === "atrule" && !r2.nodes) || r2 !== d2.last || d2.raws.semicolon) && (r2.source && r2.source.end ? (s2.source = this.sourcePath(r2), s2.original.line = r2.source.end.line, s2.original.column = r2.source.end.column - 1, s2.generated.line = t2, s2.generated.column = e2 - 2, this.map.addMapping(s2)) : (s2.source = o2, s2.original.line = 1, s2.original.column = 0, s2.generated.line = t2, s2.generated.column = e2 - 1, this.map.addMapping(s2)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? true : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((t2) => t2.annotation) : true;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let t2 = this.mapOpts.annotation;
      return typeof t2 < "u" && t2 !== true ? false : this.previous().length ? this.previous().some((e2) => e2.inline) : true;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((t2) => t2.withContent()) : true;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(t2) {
      if (this.mapOpts.absolute || t2.charCodeAt(0) === 60 || /^\w+:\/\//.test(t2)) return t2;
      let e2 = this.memoizedPaths.get(t2);
      if (e2) return e2;
      let o2 = this.opts.to ? l2(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (o2 = l2(C2(o2, this.mapOpts.annotation)));
      let s2 = S2(o2, t2);
      return this.memoizedPaths.set(t2, s2), s2;
    }
    previous() {
      if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((t2) => {
        if (t2.source && t2.source.input.map) {
          let e2 = t2.source.input.map;
          this.previousMaps.includes(e2) || this.previousMaps.push(e2);
        }
      });
      else {
        let t2 = new E2(this.originalCSS, this.opts);
        t2.map && this.previousMaps.push(t2.map);
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let t2 = {};
      if (this.root) this.root.walk((e2) => {
        if (e2.source) {
          let o2 = e2.source.input.from;
          if (o2 && !t2[o2]) {
            t2[o2] = true;
            let s2 = this.usesFileUrls ? this.toFileUrl(o2) : this.toUrl(this.path(o2));
            this.map.setSourceContent(s2, e2.source.input.css);
          }
        }
      });
      else if (this.css) {
        let e2 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(e2, this.css);
      }
    }
    sourcePath(t2) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t2.source.input.from) : this.toUrl(this.path(t2.source.input.from));
    }
    toBase64(t2) {
      return jt ? jt.from(t2).toString("base64") : window.btoa(unescape(encodeURIComponent(t2)));
    }
    toFileUrl(t2) {
      let e2 = this.memoizedFileURLs.get(t2);
      if (e2) return e2;
      if (O3) {
        let o2 = O3(t2).toString();
        return this.memoizedFileURLs.set(t2, o2), o2;
      } else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(t2) {
      let e2 = this.memoizedURLs.get(t2);
      if (e2) return e2;
      w2 === "\\" && (t2 = t2.replace(/\\/g, "/"));
      let o2 = encodeURI(t2).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(t2, o2), o2;
    }
  };
  F2.exports = m2;
});
var c$a = q$7(R$1()), H$1 = c$a.default ?? c$a;
const __0$$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H$1
}, Symbol.toStringTag, { value: "Module" }));
var require$e = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/at-rule":
      return e2(__0$$6);
    case "postcss/lib/comment":
      return e2(__1$$4);
    case "postcss/lib/declaration":
      return e2(__4$$2);
    case "postcss/lib/root":
      return e2(__e$);
    case "postcss/lib/rule":
      return e2(__f$);
    case "postcss/lib/tokenize":
      return e2(__5$$2);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var S$9 = Object.create;
var g$8 = Object.defineProperty;
var C$3 = Object.getOwnPropertyDescriptor;
var P$6 = Object.getOwnPropertyNames;
var A$6 = Object.getPrototypeOf, T$3 = Object.prototype.hasOwnProperty;
var p$d = ((h2) => typeof require$e < "u" ? require$e : typeof Proxy < "u" ? new Proxy(h2, { get: (e2, t2) => (typeof require$e < "u" ? require$e : e2)[t2] }) : h2)(function(h2) {
  if (typeof require$e < "u") return require$e.apply(this, arguments);
  throw Error('Dynamic require of "' + h2 + '" is not supported');
});
var W$4 = (h2, e2) => () => (e2 || h2((e2 = { exports: {} }).exports, e2), e2.exports);
var E = (h2, e2, t2, s2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let i2 of P$6(e2)) !T$3.call(h2, i2) && i2 !== t2 && g$8(h2, i2, { get: () => e2[i2], enumerable: !(s2 = C$3(e2, i2)) || s2.enumerable });
  return h2;
};
var v$5 = (h2, e2, t2) => (t2 = h2 != null ? S$9(A$6(h2)) : {}, E(!h2 || !h2.__esModule ? g$8(t2, "default", { value: h2, enumerable: true }) : t2, h2));
var x$a = W$4((U2, y2) => {
  var M2 = p$d("postcss/lib/at-rule"), O3 = p$d("postcss/lib/comment"), q3 = p$d("postcss/lib/declaration"), R2 = p$d("postcss/lib/root"), b2 = p$d("postcss/lib/rule"), j3 = p$d("postcss/lib/tokenize"), F2 = { empty: true, space: true };
  function B3(h2) {
    for (let e2 = h2.length - 1; e2 >= 0; e2--) {
      let t2 = h2[e2], s2 = t2[3] || t2[2];
      if (s2) return s2;
    }
  }
  var w2 = class {
    constructor(e2) {
      this.input = e2, this.root = new R2(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: e2, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(e2) {
      let t2 = new M2();
      t2.name = e2[1].slice(1), t2.name === "" && this.unnamedAtrule(t2, e2), this.init(t2, e2[2]);
      let s2, i2, r2, o2 = false, a2 = false, n2 = [], l2 = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (e2 = this.tokenizer.nextToken(), s2 = e2[0], s2 === "(" || s2 === "[" ? l2.push(s2 === "(" ? ")" : "]") : s2 === "{" && l2.length > 0 ? l2.push("}") : s2 === l2[l2.length - 1] && l2.pop(), l2.length === 0) if (s2 === ";") {
          t2.source.end = this.getPosition(e2[2]), t2.source.end.offset++, this.semicolon = true;
          break;
        } else if (s2 === "{") {
          a2 = true;
          break;
        } else if (s2 === "}") {
          if (n2.length > 0) {
            for (r2 = n2.length - 1, i2 = n2[r2]; i2 && i2[0] === "space"; ) i2 = n2[--r2];
            i2 && (t2.source.end = this.getPosition(i2[3] || i2[2]), t2.source.end.offset++);
          }
          this.end(e2);
          break;
        } else n2.push(e2);
        else n2.push(e2);
        if (this.tokenizer.endOfFile()) {
          o2 = true;
          break;
        }
      }
      t2.raws.between = this.spacesAndCommentsFromEnd(n2), n2.length ? (t2.raws.afterName = this.spacesAndCommentsFromStart(n2), this.raw(t2, "params", n2), o2 && (e2 = n2[n2.length - 1], t2.source.end = this.getPosition(e2[3] || e2[2]), t2.source.end.offset++, this.spaces = t2.raws.between, t2.raws.between = "")) : (t2.raws.afterName = "", t2.params = ""), a2 && (t2.nodes = [], this.current = t2);
    }
    checkMissedSemicolon(e2) {
      let t2 = this.colon(e2);
      if (t2 === false) return;
      let s2 = 0, i2;
      for (let r2 = t2 - 1; r2 >= 0 && (i2 = e2[r2], !(i2[0] !== "space" && (s2 += 1, s2 === 2))); r2--) ;
      throw this.input.error("Missed semicolon", i2[0] === "word" ? i2[3] + 1 : i2[2]);
    }
    colon(e2) {
      let t2 = 0, s2, i2, r2;
      for (let [o2, a2] of e2.entries()) {
        if (i2 = a2, r2 = i2[0], r2 === "(" && (t2 += 1), r2 === ")" && (t2 -= 1), t2 === 0 && r2 === ":") if (!s2) this.doubleColon(i2);
        else {
          if (s2[0] === "word" && s2[1] === "progid") continue;
          return o2;
        }
        s2 = i2;
      }
      return false;
    }
    comment(e2) {
      let t2 = new O3();
      this.init(t2, e2[2]), t2.source.end = this.getPosition(e2[3] || e2[2]), t2.source.end.offset++;
      let s2 = e2[1].slice(2, -2);
      if (/^\s*$/.test(s2)) t2.text = "", t2.raws.left = s2, t2.raws.right = "";
      else {
        let i2 = s2.match(/^(\s*)([^]*\S)(\s*)$/);
        t2.text = i2[2], t2.raws.left = i2[1], t2.raws.right = i2[3];
      }
    }
    createTokenizer() {
      this.tokenizer = j3(this.input);
    }
    decl(e2, t2) {
      let s2 = new q3();
      this.init(s2, e2[0][2]);
      let i2 = e2[e2.length - 1];
      for (i2[0] === ";" && (this.semicolon = true, e2.pop()), s2.source.end = this.getPosition(i2[3] || i2[2] || B3(e2)), s2.source.end.offset++; e2[0][0] !== "word"; ) e2.length === 1 && this.unknownWord(e2), s2.raws.before += e2.shift()[1];
      for (s2.source.start = this.getPosition(e2[0][2]), s2.prop = ""; e2.length; ) {
        let l2 = e2[0][0];
        if (l2 === ":" || l2 === "space" || l2 === "comment") break;
        s2.prop += e2.shift()[1];
      }
      s2.raws.between = "";
      let r2;
      for (; e2.length; ) if (r2 = e2.shift(), r2[0] === ":") {
        s2.raws.between += r2[1];
        break;
      } else r2[0] === "word" && /\w/.test(r2[1]) && this.unknownWord([r2]), s2.raws.between += r2[1];
      (s2.prop[0] === "_" || s2.prop[0] === "*") && (s2.raws.before += s2.prop[0], s2.prop = s2.prop.slice(1));
      let o2 = [], a2;
      for (; e2.length && (a2 = e2[0][0], !(a2 !== "space" && a2 !== "comment")); ) o2.push(e2.shift());
      this.precheckMissedSemicolon(e2);
      for (let l2 = e2.length - 1; l2 >= 0; l2--) {
        if (r2 = e2[l2], r2[1].toLowerCase() === "!important") {
          s2.important = true;
          let f2 = this.stringFrom(e2, l2);
          f2 = this.spacesFromEnd(e2) + f2, f2 !== " !important" && (s2.raws.important = f2);
          break;
        } else if (r2[1].toLowerCase() === "important") {
          let f2 = e2.slice(0), u2 = "";
          for (let c2 = l2; c2 > 0; c2--) {
            let m2 = f2[c2][0];
            if (u2.trim().startsWith("!") && m2 !== "space") break;
            u2 = f2.pop()[1] + u2;
          }
          u2.trim().startsWith("!") && (s2.important = true, s2.raws.important = u2, e2 = f2);
        }
        if (r2[0] !== "space" && r2[0] !== "comment") break;
      }
      e2.some((l2) => l2[0] !== "space" && l2[0] !== "comment") && (s2.raws.between += o2.map((l2) => l2[1]).join(""), o2 = []), this.raw(s2, "value", o2.concat(e2), t2), s2.value.includes(":") && !t2 && this.checkMissedSemicolon(e2);
    }
    doubleColon(e2) {
      throw this.input.error("Double colon", { offset: e2[2] }, { offset: e2[2] + e2[1].length });
    }
    emptyRule(e2) {
      let t2 = new b2();
      this.init(t2, e2[2]), t2.selector = "", t2.raws.between = "", this.current = t2;
    }
    end(e2) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e2[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e2);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(e2) {
      if (this.spaces += e2[1], this.current.nodes) {
        let t2 = this.current.nodes[this.current.nodes.length - 1];
        t2 && t2.type === "rule" && !t2.raws.ownSemicolon && (t2.raws.ownSemicolon = this.spaces, this.spaces = "", t2.source.end = this.getPosition(e2[2]), t2.source.end.offset += t2.raws.ownSemicolon.length);
      }
    }
    getPosition(e2) {
      let t2 = this.input.fromOffset(e2);
      return { column: t2.col, line: t2.line, offset: e2 };
    }
    init(e2, t2) {
      this.current.push(e2), e2.source = { input: this.input, start: this.getPosition(t2) }, e2.raws.before = this.spaces, this.spaces = "", e2.type !== "comment" && (this.semicolon = false);
    }
    other(e2) {
      let t2 = false, s2 = null, i2 = false, r2 = null, o2 = [], a2 = e2[1].startsWith("--"), n2 = [], l2 = e2;
      for (; l2; ) {
        if (s2 = l2[0], n2.push(l2), s2 === "(" || s2 === "[") r2 || (r2 = l2), o2.push(s2 === "(" ? ")" : "]");
        else if (a2 && i2 && s2 === "{") r2 || (r2 = l2), o2.push("}");
        else if (o2.length === 0) if (s2 === ";") if (i2) {
          this.decl(n2, a2);
          return;
        } else break;
        else if (s2 === "{") {
          this.rule(n2);
          return;
        } else if (s2 === "}") {
          this.tokenizer.back(n2.pop()), t2 = true;
          break;
        } else s2 === ":" && (i2 = true);
        else s2 === o2[o2.length - 1] && (o2.pop(), o2.length === 0 && (r2 = null));
        l2 = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (t2 = true), o2.length > 0 && this.unclosedBracket(r2), t2 && i2) {
        if (!a2) for (; n2.length && (l2 = n2[n2.length - 1][0], !(l2 !== "space" && l2 !== "comment")); ) this.tokenizer.back(n2.pop());
        this.decl(n2, a2);
      } else this.unknownWord(n2);
    }
    parse() {
      let e2;
      for (; !this.tokenizer.endOfFile(); ) switch (e2 = this.tokenizer.nextToken(), e2[0]) {
        case "space":
          this.spaces += e2[1];
          break;
        case ";":
          this.freeSemicolon(e2);
          break;
        case "}":
          this.end(e2);
          break;
        case "comment":
          this.comment(e2);
          break;
        case "at-word":
          this.atrule(e2);
          break;
        case "{":
          this.emptyRule(e2);
          break;
        default:
          this.other(e2);
          break;
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(e2, t2, s2, i2) {
      let r2, o2, a2 = s2.length, n2 = "", l2 = true, f2, u2;
      for (let c2 = 0; c2 < a2; c2 += 1) r2 = s2[c2], o2 = r2[0], o2 === "space" && c2 === a2 - 1 && !i2 ? l2 = false : o2 === "comment" ? (u2 = s2[c2 - 1] ? s2[c2 - 1][0] : "empty", f2 = s2[c2 + 1] ? s2[c2 + 1][0] : "empty", !F2[u2] && !F2[f2] ? n2.slice(-1) === "," ? l2 = false : n2 += r2[1] : l2 = false) : n2 += r2[1];
      if (!l2) {
        let c2 = s2.reduce((m2, z2) => m2 + z2[1], "");
        e2.raws[t2] = { raw: c2, value: n2 };
      }
      e2[t2] = n2;
    }
    rule(e2) {
      e2.pop();
      let t2 = new b2();
      this.init(t2, e2[0][2]), t2.raws.between = this.spacesAndCommentsFromEnd(e2), this.raw(t2, "selector", e2), this.current = t2;
    }
    spacesAndCommentsFromEnd(e2) {
      let t2, s2 = "";
      for (; e2.length && (t2 = e2[e2.length - 1][0], !(t2 !== "space" && t2 !== "comment")); ) s2 = e2.pop()[1] + s2;
      return s2;
    }
    spacesAndCommentsFromStart(e2) {
      let t2, s2 = "";
      for (; e2.length && (t2 = e2[0][0], !(t2 !== "space" && t2 !== "comment")); ) s2 += e2.shift()[1];
      return s2;
    }
    spacesFromEnd(e2) {
      let t2, s2 = "";
      for (; e2.length && (t2 = e2[e2.length - 1][0], t2 === "space"); ) s2 = e2.pop()[1] + s2;
      return s2;
    }
    stringFrom(e2, t2) {
      let s2 = "";
      for (let i2 = t2; i2 < e2.length; i2++) s2 += e2[i2][1];
      return e2.splice(t2, e2.length - t2), s2;
    }
    unclosedBlock() {
      let e2 = this.current.source.start;
      throw this.input.error("Unclosed block", e2.line, e2.column);
    }
    unclosedBracket(e2) {
      throw this.input.error("Unclosed bracket", { offset: e2[2] }, { offset: e2[2] + 1 });
    }
    unexpectedClose(e2) {
      throw this.input.error("Unexpected }", { offset: e2[2] }, { offset: e2[2] + 1 });
    }
    unknownWord(e2) {
      throw this.input.error("Unknown word " + e2[0][1], { offset: e2[0][2] }, { offset: e2[0][2] + e2[0][1].length });
    }
    unnamedAtrule(e2, t2) {
      throw this.input.error("At-rule without name", { offset: t2[2] }, { offset: t2[2] + t2[1].length });
    }
  };
  y2.exports = w2;
});
var d$e = v$5(x$a()), L$4 = d$e.default ?? d$e;
const __2$$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L$4
}, Symbol.toStringTag, { value: "Module" }));
var require$d = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    case "postcss/lib/input":
      return e2(__7$);
    case "postcss/lib/parser":
      return e2(__2$$3);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var h$9 = Object.create;
var n$6 = Object.defineProperty;
var c$9 = Object.getOwnPropertyDescriptor;
var d$d = Object.getOwnPropertyNames;
var l$9 = Object.getPrototypeOf, m$f = Object.prototype.hasOwnProperty;
var i$6 = ((s2) => typeof require$d < "u" ? require$d : typeof Proxy < "u" ? new Proxy(s2, { get: (e2, t2) => (typeof require$d < "u" ? require$d : e2)[t2] }) : s2)(function(s2) {
  if (typeof require$d < "u") return require$d.apply(this, arguments);
  throw Error('Dynamic require of "' + s2 + '" is not supported');
});
var S$8 = (s2, e2) => () => (e2 || s2((e2 = { exports: {} }).exports, e2), e2.exports);
var w$9 = (s2, e2, t2, a2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let r2 of d$d(e2)) !m$f.call(s2, r2) && r2 !== t2 && n$6(s2, r2, { get: () => e2[r2], enumerable: !(a2 = c$9(e2, r2)) || a2.enumerable });
  return s2;
};
var g$7 = (s2, e2, t2) => (t2 = s2 != null ? h$9(l$9(s2)) : {}, w$9(!s2 || !s2.__esModule ? n$6(t2, "default", { value: s2, enumerable: true }) : t2, s2));
var f$a = S$8((E2, u2) => {
  var C2 = i$6("postcss/lib/container"), y2 = i$6("postcss/lib/input"), q3 = i$6("postcss/lib/parser");
  function o2(s2, e2) {
    let t2 = new y2(s2, e2), a2 = new q3(t2);
    try {
      a2.parse();
    } catch (r2) {
      throw r2;
    }
    return a2.root;
  }
  u2.exports = o2;
  o2.default = o2;
  C2.registerParse(o2);
});
var p$c = g$7(f$a()), Y$3 = p$c.default ?? p$c;
const __b$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y$3
}, Symbol.toStringTag, { value: "Module" }));
var d$c = Object.create;
var l$8 = Object.defineProperty;
var a$8 = Object.getOwnPropertyDescriptor;
var c$8 = Object.getOwnPropertyNames;
var m$e = Object.getPrototypeOf, f$9 = Object.prototype.hasOwnProperty;
var g$6 = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var x$9 = (e2, t2, i2, n2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let s2 of c$8(t2)) !f$9.call(e2, s2) && s2 !== i2 && l$8(e2, s2, { get: () => t2[s2], enumerable: !(n2 = a$8(t2, s2)) || n2.enumerable });
  return e2;
};
var p$b = (e2, t2, i2) => (i2 = e2 != null ? d$c(m$e(e2)) : {}, x$9(!e2 || !e2.__esModule ? l$8(i2, "default", { value: e2, enumerable: true }) : i2, e2));
var u$9 = g$6((j3, o2) => {
  var r2 = class {
    constructor(t2, i2 = {}) {
      if (this.type = "warning", this.text = t2, i2.node && i2.node.source) {
        let n2 = i2.node.rangeBy(i2);
        this.line = n2.start.line, this.column = n2.start.column, this.endLine = n2.end.line, this.endColumn = n2.end.column;
      }
      for (let n2 in i2) this[n2] = i2[n2];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  };
  o2.exports = r2;
  r2.default = r2;
});
var h$8 = p$b(u$9()), y$9 = h$8.default ?? h$8;
const __11$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y$9
}, Symbol.toStringTag, { value: "Module" }));
var require$c = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/warning":
      return e2(__11$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var h$7 = Object.create;
var a$7 = Object.defineProperty;
var c$7 = Object.getOwnPropertyDescriptor;
var o$4 = Object.getOwnPropertyNames;
var p$a = Object.getPrototypeOf, f$8 = Object.prototype.hasOwnProperty;
var m$d = ((t2) => typeof require$c < "u" ? require$c : typeof Proxy < "u" ? new Proxy(t2, { get: (s2, i2) => (typeof require$c < "u" ? require$c : s2)[i2] }) : t2)(function(t2) {
  if (typeof require$c < "u") return require$c.apply(this, arguments);
  throw Error('Dynamic require of "' + t2 + '" is not supported');
});
var d$b = (t2, s2) => () => (s2 || t2((s2 = { exports: {} }).exports, s2), s2.exports);
var w$8 = (t2, s2, i2, e2) => {
  if (s2 && typeof s2 == "object" || typeof s2 == "function") for (let n2 of o$4(s2)) !f$8.call(t2, n2) && n2 !== i2 && a$7(t2, n2, { get: () => s2[n2], enumerable: !(e2 = c$7(s2, n2)) || e2.enumerable });
  return t2;
};
var P$5 = (t2, s2, i2) => (i2 = t2 != null ? h$7(p$a(t2)) : {}, w$8(!t2 || !t2.__esModule ? a$7(i2, "default", { value: t2, enumerable: true }) : i2, t2));
var l$7 = d$b((q3, g2) => {
  var j3 = m$d("postcss/lib/warning"), r2 = class {
    get content() {
      return this.css;
    }
    constructor(s2, i2, e2) {
      this.processor = s2, this.messages = [], this.root = i2, this.opts = e2, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(s2, i2 = {}) {
      i2.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (i2.plugin = this.lastPlugin.postcssPlugin);
      let e2 = new j3(s2, i2);
      return this.messages.push(e2), e2;
    }
    warnings() {
      return this.messages.filter((s2) => s2.type === "warning");
    }
  };
  g2.exports = r2;
  r2.default = r2;
});
var u$8 = P$5(l$7()), y$8 = u$8.default ?? u$8;
const __d$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y$8
}, Symbol.toStringTag, { value: "Module" }));
var d$a = Object.create;
var f$7 = Object.defineProperty;
var p$9 = Object.getOwnPropertyDescriptor;
var s$2 = Object.getOwnPropertyNames;
var a$6 = Object.getPrototypeOf, w$7 = Object.prototype.hasOwnProperty;
var j$a = (t2, n2) => () => (n2 || t2((n2 = { exports: {} }).exports, n2), n2.exports);
var m$c = (t2, n2, e2, c2) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function") for (let o2 of s$2(n2)) !w$7.call(t2, o2) && o2 !== e2 && f$7(t2, o2, { get: () => n2[o2], enumerable: !(c2 = p$9(n2, o2)) || c2.enumerable });
  return t2;
};
var x$8 = (t2, n2, e2) => (e2 = t2 != null ? d$a(a$6(t2)) : {}, m$c(!t2 || !t2.__esModule ? f$7(e2, "default", { value: t2, enumerable: true }) : e2, t2));
var l$6 = j$a((O3, u2) => {
  var i2 = {};
  u2.exports = function(n2) {
    i2[n2] || (i2[n2] = true, typeof console < "u" && console.warn && console.warn(n2));
  };
});
var r$2 = x$8(l$6()), b$7 = r$2.default ?? r$2;
const __4$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b$7
}, Symbol.toStringTag, { value: "Module" }));
var require$b = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/container":
      return e2(__2$$4);
    case "postcss/lib/document":
      return e2(__5$);
    case "postcss/lib/map-generator":
      return e2(__0$$4);
    case "postcss/lib/parse":
      return e2(__b$);
    case "postcss/lib/result":
      return e2(__d$);
    case "postcss/lib/root":
      return e2(__e$);
    case "postcss/lib/stringify":
      return e2(__10$);
    case "postcss/lib/symbols":
      return e2(__7$$1);
    case "postcss/lib/warn-once":
      return e2(__4$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var P$4 = Object.create;
var d$9 = Object.defineProperty;
var O$2 = Object.getOwnPropertyDescriptor;
var R = Object.getOwnPropertyNames;
var I$3 = Object.getPrototypeOf, C$2 = Object.prototype.hasOwnProperty;
var u$7 = ((i2) => typeof require$b < "u" ? require$b : typeof Proxy < "u" ? new Proxy(i2, { get: (e2, t2) => (typeof require$b < "u" ? require$b : e2)[t2] }) : i2)(function(i2) {
  if (typeof require$b < "u") return require$b.apply(this, arguments);
  throw Error('Dynamic require of "' + i2 + '" is not supported');
});
var b$6 = (i2, e2) => () => (e2 || i2((e2 = { exports: {} }).exports, e2), e2.exports);
var V$1 = (i2, e2, t2, r2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let s2 of R(e2)) !C$2.call(i2, s2) && s2 !== t2 && d$9(i2, s2, { get: () => e2[s2], enumerable: !(r2 = O$2(e2, s2)) || r2.enumerable });
  return i2;
};
var A$5 = (i2, e2, t2) => (t2 = i2 != null ? P$4(I$3(i2)) : {}, V$1(!i2 || !i2.__esModule ? d$9(t2, "default", { value: i2, enumerable: true }) : t2, i2));
var S$7 = b$6((G2, v2) => {
  var D2 = u$7("postcss/lib/container"), L2 = u$7("postcss/lib/document"), N2 = u$7("postcss/lib/map-generator"), j3 = u$7("postcss/lib/parse"), w2 = u$7("postcss/lib/result"), k2 = u$7("postcss/lib/root"), q3 = u$7("postcss/lib/stringify"), { isClean: l2, my: T2 } = u$7("postcss/lib/symbols");
  u$7("postcss/lib/warn-once");
  var _2 = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, M2 = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, U2 = { Once: true, postcssPlugin: true, prepare: true }, c2 = 0;
  function f2(i2) {
    return typeof i2 == "object" && typeof i2.then == "function";
  }
  function x2(i2) {
    let e2 = false, t2 = _2[i2.type];
    return i2.type === "decl" ? e2 = i2.prop.toLowerCase() : i2.type === "atrule" && (e2 = i2.name.toLowerCase()), e2 && i2.append ? [t2, t2 + "-" + e2, c2, t2 + "Exit", t2 + "Exit-" + e2] : e2 ? [t2, t2 + "-" + e2, t2 + "Exit", t2 + "Exit-" + e2] : i2.append ? [t2, c2, t2 + "Exit"] : [t2, t2 + "Exit"];
  }
  function E2(i2) {
    let e2;
    return i2.type === "document" ? e2 = ["Document", c2, "DocumentExit"] : i2.type === "root" ? e2 = ["Root", c2, "RootExit"] : e2 = x2(i2), { eventIndex: 0, events: e2, iterator: 0, node: i2, visitorIndex: 0, visitors: [] };
  }
  function p3(i2) {
    return i2[l2] = false, i2.nodes && i2.nodes.forEach((e2) => p3(e2)), i2;
  }
  var g2 = {}, h2 = class i2 {
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
    constructor(e2, t2, r2) {
      this.stringified = false, this.processed = false;
      let s2;
      if (typeof t2 == "object" && t2 !== null && (t2.type === "root" || t2.type === "document")) s2 = p3(t2);
      else if (t2 instanceof i2 || t2 instanceof w2) s2 = p3(t2.root), t2.map && (typeof r2.map > "u" && (r2.map = {}), r2.map.inline || (r2.map.inline = false), r2.map.prev = t2.map);
      else {
        let n2 = j3;
        r2.syntax && (n2 = r2.syntax.parse), r2.parser && (n2 = r2.parser), n2.parse && (n2 = n2.parse);
        try {
          s2 = n2(t2, r2);
        } catch (o2) {
          this.processed = true, this.error = o2;
        }
        s2 && !s2[T2] && D2.rebuild(s2);
      }
      this.result = new w2(e2, s2, r2), this.helpers = { ...g2, postcss: g2, result: this.result }, this.plugins = this.processor.plugins.map((n2) => typeof n2 == "object" && n2.prepare ? { ...n2, ...n2.prepare(this.result) } : n2);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(e2) {
      return this.async().catch(e2);
    }
    finally(e2) {
      return this.async().then(e2, e2);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e2, t2) {
      let r2 = this.result.lastPlugin;
      try {
        t2 && t2.addToError(e2), this.error = e2, e2.name === "CssSyntaxError" && !e2.plugin ? (e2.plugin = r2.postcssPlugin, e2.setMessage()) : r2.postcssVersion;
      } catch (s2) {
        console && console.error && console.error(s2);
      }
      return e2;
    }
    prepareVisitors() {
      this.listeners = {};
      let e2 = (t2, r2, s2) => {
        this.listeners[r2] || (this.listeners[r2] = []), this.listeners[r2].push([t2, s2]);
      };
      for (let t2 of this.plugins) if (typeof t2 == "object") for (let r2 in t2) {
        if (!M2[r2] && /^[A-Z]/.test(r2)) throw new Error(`Unknown event ${r2} in ${t2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!U2[r2]) if (typeof t2[r2] == "object") for (let s2 in t2[r2]) s2 === "*" ? e2(t2, r2, t2[r2][s2]) : e2(t2, r2 + "-" + s2.toLowerCase(), t2[r2][s2]);
        else typeof t2[r2] == "function" && e2(t2, r2, t2[r2]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e2 = 0; e2 < this.plugins.length; e2++) {
        let t2 = this.plugins[e2], r2 = this.runOnRoot(t2);
        if (f2(r2)) try {
          await r2;
        } catch (s2) {
          throw this.handleError(s2);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e2 = this.result.root;
        for (; !e2[l2]; ) {
          e2[l2] = true;
          let t2 = [E2(e2)];
          for (; t2.length > 0; ) {
            let r2 = this.visitTick(t2);
            if (f2(r2)) try {
              await r2;
            } catch (s2) {
              let n2 = t2[t2.length - 1].node;
              throw this.handleError(s2, n2);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [t2, r2] of this.listeners.OnceExit) {
          this.result.lastPlugin = t2;
          try {
            if (e2.type === "document") {
              let s2 = e2.nodes.map((n2) => r2(n2, this.helpers));
              await Promise.all(s2);
            } else await r2(e2, this.helpers);
          } catch (s2) {
            throw this.handleError(s2);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    runOnRoot(e2) {
      this.result.lastPlugin = e2;
      try {
        if (typeof e2 == "object" && e2.Once) {
          if (this.result.root.type === "document") {
            let t2 = this.result.root.nodes.map((r2) => e2.Once(r2, this.helpers));
            return f2(t2[0]) ? Promise.all(t2) : t2;
          }
          return e2.Once(this.result.root, this.helpers);
        } else if (typeof e2 == "function") return e2(this.result.root, this.result);
      } catch (t2) {
        throw this.handleError(t2);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let e2 = this.result.opts, t2 = q3;
      e2.syntax && (t2 = e2.syntax.stringify), e2.stringifier && (t2 = e2.stringifier), t2.stringify && (t2 = t2.stringify);
      let s2 = new N2(t2, this.result.root, this.result.opts).generate();
      return this.result.css = s2[0], this.result.map = s2[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let e2 of this.plugins) {
        let t2 = this.runOnRoot(e2);
        if (f2(t2)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e2 = this.result.root;
        for (; !e2[l2]; ) e2[l2] = true, this.walkSync(e2);
        if (this.listeners.OnceExit) if (e2.type === "document") for (let t2 of e2.nodes) this.visitSync(this.listeners.OnceExit, t2);
        else this.visitSync(this.listeners.OnceExit, e2);
      }
      return this.result;
    }
    then(e2, t2) {
      return this.async().then(e2, t2);
    }
    toString() {
      return this.css;
    }
    visitSync(e2, t2) {
      for (let [r2, s2] of e2) {
        this.result.lastPlugin = r2;
        let n2;
        try {
          n2 = s2(t2, this.helpers);
        } catch (o2) {
          throw this.handleError(o2, t2.proxyOf);
        }
        if (t2.type !== "root" && t2.type !== "document" && !t2.parent) return true;
        if (f2(n2)) throw this.getAsyncError();
      }
    }
    visitTick(e2) {
      let t2 = e2[e2.length - 1], { node: r2, visitors: s2 } = t2;
      if (r2.type !== "root" && r2.type !== "document" && !r2.parent) {
        e2.pop();
        return;
      }
      if (s2.length > 0 && t2.visitorIndex < s2.length) {
        let [o2, a2] = s2[t2.visitorIndex];
        t2.visitorIndex += 1, t2.visitorIndex === s2.length && (t2.visitors = [], t2.visitorIndex = 0), this.result.lastPlugin = o2;
        try {
          return a2(r2.toProxy(), this.helpers);
        } catch (m2) {
          throw this.handleError(m2, r2);
        }
      }
      if (t2.iterator !== 0) {
        let o2 = t2.iterator, a2;
        for (; a2 = r2.nodes[r2.indexes[o2]]; ) if (r2.indexes[o2] += 1, !a2[l2]) {
          a2[l2] = true, e2.push(E2(a2));
          return;
        }
        t2.iterator = 0, delete r2.indexes[o2];
      }
      let n2 = t2.events;
      for (; t2.eventIndex < n2.length; ) {
        let o2 = n2[t2.eventIndex];
        if (t2.eventIndex += 1, o2 === c2) {
          r2.nodes && r2.nodes.length && (r2[l2] = true, t2.iterator = r2.getIterator());
          return;
        } else if (this.listeners[o2]) {
          t2.visitors = this.listeners[o2];
          return;
        }
      }
      e2.pop();
    }
    walkSync(e2) {
      e2[l2] = true;
      let t2 = x2(e2);
      for (let r2 of t2) if (r2 === c2) e2.nodes && e2.each((s2) => {
        s2[l2] || this.walkSync(s2);
      });
      else {
        let s2 = this.listeners[r2];
        if (s2 && this.visitSync(s2, e2.toProxy())) return;
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  };
  h2.registerPostcss = (i2) => {
    g2 = i2;
  };
  v2.exports = h2;
  h2.default = h2;
  k2.registerLazyResult(h2);
  L2.registerLazyResult(h2);
});
var y$7 = A$5(S$7()), Y$2 = y$7.default ?? y$7;
const __8$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y$2
}, Symbol.toStringTag, { value: "Module" }));
var require$a = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/map-generator":
      return e2(__0$$4);
    case "postcss/lib/parse":
      return e2(__b$);
    case "postcss/lib/result":
      return e2(__d$);
    case "postcss/lib/stringify":
      return e2(__10$);
    case "postcss/lib/warn-once":
      return e2(__4$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var d$8 = Object.create;
var c$6 = Object.defineProperty;
var _$3 = Object.getOwnPropertyDescriptor;
var w$6 = Object.getOwnPropertyNames;
var S$6 = Object.getPrototypeOf, y$6 = Object.prototype.hasOwnProperty;
var o$3 = ((r2) => typeof require$a < "u" ? require$a : typeof Proxy < "u" ? new Proxy(r2, { get: (t2, e2) => (typeof require$a < "u" ? require$a : t2)[e2] }) : r2)(function(r2) {
  if (typeof require$a < "u") return require$a.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var q$6 = (r2, t2) => () => (t2 || r2((t2 = { exports: {} }).exports, t2), t2.exports);
var j$9 = (r2, t2, e2, i2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let s2 of w$6(t2)) !y$6.call(r2, s2) && s2 !== e2 && c$6(r2, s2, { get: () => t2[s2], enumerable: !(i2 = _$3(t2, s2)) || i2.enumerable });
  return r2;
};
var O$1 = (r2, t2, e2) => (e2 = r2 != null ? d$8(S$6(r2)) : {}, j$9(!r2 || !r2.__esModule ? c$6(e2, "default", { value: r2, enumerable: true }) : e2, r2));
var f$6 = q$6((E2, p3) => {
  var P3 = o$3("postcss/lib/map-generator"), v2 = o$3("postcss/lib/parse"), C2 = o$3("postcss/lib/result"), M2 = o$3("postcss/lib/stringify");
  o$3("postcss/lib/warn-once");
  var n2 = class {
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
      if (this._root) return this._root;
      let t2, e2 = v2;
      try {
        t2 = e2(this._css, this._opts);
      } catch (i2) {
        this.error = i2;
      }
      if (this.error) throw this.error;
      return this._root = t2, t2;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(t2, e2, i2) {
      e2 = e2.toString(), this.stringified = false, this._processor = t2, this._css = e2, this._opts = i2, this._map = void 0;
      let s2, g2 = M2;
      this.result = new C2(this._processor, s2, this._opts), this.result.css = e2;
      let m2 = this;
      Object.defineProperty(this.result, "root", { get() {
        return m2.root;
      } });
      let h2 = new P3(g2, s2, this._opts, e2);
      if (h2.isMap()) {
        let [l2, a2] = h2.generate();
        l2 && (this.result.css = l2), a2 && (this.result.map = a2);
      } else h2.clearAnnotation(), this.result.css = h2.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(t2) {
      return this.async().catch(t2);
    }
    finally(t2) {
      return this.async().then(t2, t2);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(t2, e2) {
      return this.async().then(t2, e2);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  };
  p3.exports = n2;
  n2.default = n2;
});
var u$6 = O$1(f$6()), N$2 = u$6.default ?? u$6;
const __2$$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N$2
}, Symbol.toStringTag, { value: "Module" }));
var require$9 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/document":
      return e2(__5$);
    case "postcss/lib/lazy-result":
      return e2(__8$);
    case "postcss/lib/no-work-result":
      return e2(__2$$2);
    case "postcss/lib/root":
      return e2(__e$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var c$5 = Object.create;
var l$5 = Object.defineProperty;
var f$5 = Object.getOwnPropertyDescriptor;
var h$6 = Object.getOwnPropertyNames;
var g$5 = Object.getPrototypeOf, y$5 = Object.prototype.hasOwnProperty;
var n$5 = ((r2) => typeof require$9 < "u" ? require$9 : typeof Proxy < "u" ? new Proxy(r2, { get: (e2, t2) => (typeof require$9 < "u" ? require$9 : e2)[t2] }) : r2)(function(r2) {
  if (typeof require$9 < "u") return require$9.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var m$b = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var d$7 = (r2, e2, t2, s2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let o2 of h$6(e2)) !y$5.call(r2, o2) && o2 !== t2 && l$5(r2, o2, { get: () => e2[o2], enumerable: !(s2 = f$5(e2, o2)) || s2.enumerable });
  return r2;
};
var w$5 = (r2, e2, t2) => (t2 = r2 != null ? c$5(g$5(r2)) : {}, d$7(!r2 || !r2.__esModule ? l$5(t2, "default", { value: r2, enumerable: true }) : t2, r2));
var p$8 = m$b((b2, a2) => {
  var S2 = n$5("postcss/lib/document"), j3 = n$5("postcss/lib/lazy-result"), x2 = n$5("postcss/lib/no-work-result"), z2 = n$5("postcss/lib/root"), i2 = class {
    constructor(e2 = []) {
      this.version = "8.5.3", this.plugins = this.normalize(e2);
    }
    normalize(e2) {
      let t2 = [];
      for (let s2 of e2) if (s2.postcss === true ? s2 = s2() : s2.postcss && (s2 = s2.postcss), typeof s2 == "object" && Array.isArray(s2.plugins)) t2 = t2.concat(s2.plugins);
      else if (typeof s2 == "object" && s2.postcssPlugin) t2.push(s2);
      else if (typeof s2 == "function") t2.push(s2);
      else if (!(typeof s2 == "object" && (s2.parse || s2.stringify))) throw new Error(s2 + " is not a PostCSS plugin");
      return t2;
    }
    process(e2, t2 = {}) {
      return !this.plugins.length && !t2.parser && !t2.stringifier && !t2.syntax ? new x2(this, e2, t2) : new j3(this, e2, t2);
    }
    use(e2) {
      return this.plugins = this.plugins.concat(this.normalize([e2])), this;
    }
  };
  a2.exports = i2;
  i2.default = i2;
  z2.registerProcessor(i2);
  S2.registerProcessor(i2);
});
var u$5 = w$5(p$8()), q$5 = u$5.default ?? u$5;
const __c$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q$5
}, Symbol.toStringTag, { value: "Module" }));
var require$8 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss/lib/at-rule":
      return e2(__0$$6);
    case "postcss/lib/comment":
      return e2(__1$$4);
    case "postcss/lib/container":
      return e2(__2$$4);
    case "postcss/lib/css-syntax-error":
      return e2(__3$$1);
    case "postcss/lib/declaration":
      return e2(__4$$2);
    case "postcss/lib/document":
      return e2(__5$);
    case "postcss/lib/fromJSON":
      return e2(__6$);
    case "postcss/lib/input":
      return e2(__7$);
    case "postcss/lib/lazy-result":
      return e2(__8$);
    case "postcss/lib/list":
      return e2(__9$);
    case "postcss/lib/node":
      return e2(__a$);
    case "postcss/lib/parse":
      return e2(__b$);
    case "postcss/lib/processor":
      return e2(__c$);
    case "postcss/lib/result":
      return e2(__d$);
    case "postcss/lib/root":
      return e2(__e$);
    case "postcss/lib/rule":
      return e2(__f$);
    case "postcss/lib/stringify":
      return e2(__10$);
    case "postcss/lib/warning":
      return e2(__11$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var N$1 = Object.create;
var m$a = Object.defineProperty;
var A$4 = Object.getOwnPropertyDescriptor;
var D$3 = Object.getOwnPropertyNames;
var P$3 = Object.getPrototypeOf, S$5 = Object.prototype.hasOwnProperty;
var n$4 = ((e2) => typeof require$8 < "u" ? require$8 : typeof Proxy < "u" ? new Proxy(e2, { get: (o2, c2) => (typeof require$8 < "u" ? require$8 : o2)[c2] }) : e2)(function(e2) {
  if (typeof require$8 < "u") return require$8.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var h$5 = (e2, o2) => () => (o2 || e2((o2 = { exports: {} }).exports, o2), o2.exports);
var O2 = (e2, o2, c2, i2) => {
  if (o2 && typeof o2 == "object" || typeof o2 == "function") for (let s2 of D$3(o2)) !S$5.call(e2, s2) && s2 !== c2 && m$a(e2, s2, { get: () => o2[s2], enumerable: !(i2 = A$4(o2, s2)) || i2.enumerable });
  return e2;
};
var W$3 = (e2, o2, c2) => (c2 = e2 != null ? N$1(P$3(e2)) : {}, O2(m$a(c2, "default", { value: e2, enumerable: true }), e2));
var y$4 = h$5((B3, w2) => {
  var x2 = n$4("postcss/lib/at-rule"), f2 = n$4("postcss/lib/comment"), v2 = n$4("postcss/lib/container"), E2 = n$4("postcss/lib/css-syntax-error"), R2 = n$4("postcss/lib/declaration"), g2 = n$4("postcss/lib/document"), I2 = n$4("postcss/lib/fromJSON"), J3 = n$4("postcss/lib/input"), L2 = n$4("postcss/lib/lazy-result"), G2 = n$4("postcss/lib/list"), b2 = n$4("postcss/lib/node"), j3 = n$4("postcss/lib/parse"), a2 = n$4("postcss/lib/processor"), z2 = n$4("postcss/lib/result"), q3 = n$4("postcss/lib/root"), d2 = n$4("postcss/lib/rule"), M2 = n$4("postcss/lib/stringify"), V2 = n$4("postcss/lib/warning");
  function t2(...e2) {
    return e2.length === 1 && Array.isArray(e2[0]) && (e2 = e2[0]), new a2(e2);
  }
  t2.plugin = function(o2, c2) {
    let i2 = false;
    function s2(...p3) {
      console && console.warn && !i2 && (i2 = true, console.warn(o2 + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), xs.env.LANG && xs.env.LANG.startsWith("cn") && console.warn(o2 + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
      let u2 = c2(...p3);
      return u2.postcssPlugin = o2, u2.postcssVersion = new a2().version, u2;
    }
    let l2;
    return Object.defineProperty(s2, "postcss", { get() {
      return l2 || (l2 = s2()), l2;
    } }), s2.process = function(p3, u2, C2) {
      return t2([s2(C2)]).process(p3, u2);
    }, s2;
  };
  t2.stringify = M2;
  t2.parse = j3;
  t2.fromJSON = I2;
  t2.list = G2;
  t2.comment = (e2) => new f2(e2);
  t2.atRule = (e2) => new x2(e2);
  t2.decl = (e2) => new R2(e2);
  t2.rule = (e2) => new d2(e2);
  t2.root = (e2) => new q3(e2);
  t2.document = (e2) => new g2(e2);
  t2.CssSyntaxError = E2;
  t2.Declaration = R2;
  t2.Container = v2;
  t2.Processor = a2;
  t2.Document = g2;
  t2.Comment = f2;
  t2.Warning = V2;
  t2.AtRule = x2;
  t2.Result = z2;
  t2.Input = J3;
  t2.Rule = d2;
  t2.Root = q3;
  t2.Node = b2;
  L2.registerPostcss(t2);
  w2.exports = t2;
  t2.default = t2;
});
var r$1 = W$3(y$4()), F$1 = r$1.default, H = r$1.default.stringify, K$2 = r$1.default.fromJSON, Q$1 = r$1.default.plugin, T$2 = r$1.default.parse, U$2 = r$1.default.list, X$1 = r$1.default.document, Y$1 = r$1.default.comment, Z$1 = r$1.default.atRule, _$2 = r$1.default.rule, $$1 = r$1.default.decl, ee$1 = r$1.default.root, te$1 = r$1.default.CssSyntaxError, re$1 = r$1.default.Declaration, oe = r$1.default.Container, ne$1 = r$1.default.Processor, se = r$1.default.Document, ce = r$1.default.Comment, ie = r$1.default.Warning, ue = r$1.default.AtRule, le = r$1.default.Result, pe = r$1.default.Input, ae = r$1.default.Rule, me$1 = r$1.default.Root, xe = r$1.default.Node;
const __0$$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AtRule: ue,
  Comment: ce,
  Container: oe,
  CssSyntaxError: te$1,
  Declaration: re$1,
  Document: se,
  Input: pe,
  Node: xe,
  Processor: ne$1,
  Result: le,
  Root: me$1,
  Rule: ae,
  Warning: ie,
  atRule: Z$1,
  comment: Y$1,
  decl: $$1,
  default: F$1,
  document: X$1,
  fromJSON: K$2,
  list: U$2,
  parse: T$2,
  plugin: Q$1,
  root: ee$1,
  rule: _$2,
  stringify: H
}, Symbol.toStringTag, { value: "Module" }));
var d$6 = Object.create;
var r = Object.defineProperty;
var o$2 = Object.getOwnPropertyDescriptor;
var h$4 = Object.getOwnPropertyNames;
var i$5 = Object.getPrototypeOf, m$9 = Object.prototype.hasOwnProperty;
var A$3 = (e2, a2) => () => (a2 || e2((a2 = { exports: {} }).exports, a2), a2.exports);
var S$4 = (e2, a2, c2, l2) => {
  if (a2 && typeof a2 == "object" || typeof a2 == "function") for (let s2 of h$4(a2)) !m$9.call(e2, s2) && s2 !== c2 && r(e2, s2, { get: () => a2[s2], enumerable: !(l2 = o$2(a2, s2)) || l2.enumerable });
  return e2;
};
var b$5 = (e2, a2, c2) => (c2 = e2 != null ? d$6(i$5(e2)) : {}, S$4(!e2 || !e2.__esModule ? r(c2, "default", { value: e2, enumerable: true }) : c2, e2));
var f$4 = A$3((k2, n2) => {
  var C2 = /-(\w|$)/g, u2 = function(a2, c2) {
    return c2.toUpperCase();
  }, v2 = function(a2) {
    return a2 = a2.toLowerCase(), a2 === "float" ? "cssFloat" : a2.charCodeAt(0) === 45 && a2.charCodeAt(1) === 109 && a2.charCodeAt(2) === 115 && a2.charCodeAt(3) === 45 ? a2.substr(1).replace(C2, u2) : a2.replace(C2, u2);
  };
  n2.exports = v2;
});
var t = b$5(f$4()), w$4 = t.default ?? t;
const __0$$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w$4
}, Symbol.toStringTag, { value: "Module" }));
var require$7 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "camelcase-css":
      return e2(__0$$2);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var m$8 = Object.create;
var n$3 = Object.defineProperty;
var y$3 = Object.getOwnPropertyDescriptor;
var x$7 = Object.getOwnPropertyNames;
var v$4 = Object.getPrototypeOf, b$4 = Object.prototype.hasOwnProperty;
var k$2 = ((u2) => typeof require$7 < "u" ? require$7 : typeof Proxy < "u" ? new Proxy(u2, { get: (e2, r2) => (typeof require$7 < "u" ? require$7 : e2)[r2] }) : u2)(function(u2) {
  if (typeof require$7 < "u") return require$7.apply(this, arguments);
  throw Error('Dynamic require of "' + u2 + '" is not supported');
});
var A$2 = (u2, e2) => () => (e2 || u2((e2 = { exports: {} }).exports, e2), e2.exports);
var N = (u2, e2, r2, t2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let o2 of x$7(e2)) !b$4.call(u2, o2) && o2 !== r2 && n$3(u2, o2, { get: () => e2[o2], enumerable: !(t2 = y$3(e2, o2)) || t2.enumerable });
  return u2;
};
var S$3 = (u2, e2, r2) => (r2 = u2 != null ? m$8(v$4(u2)) : {}, N(!u2 || !u2.__esModule ? n$3(r2, "default", { value: u2, enumerable: true }) : r2, u2));
var i$4 = A$2((F2, l2) => {
  var g2 = k$2("camelcase-css"), w2 = { boxFlex: true, boxFlexGroup: true, columnCount: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, strokeDashoffset: true, strokeOpacity: true, strokeWidth: true };
  function s2(u2) {
    return typeof u2.nodes > "u" ? true : a2(u2);
  }
  function a2(u2) {
    let e2, r2 = {};
    return u2.each((t2) => {
      if (t2.type === "atrule") e2 = "@" + t2.name, t2.params && (e2 += " " + t2.params), typeof r2[e2] > "u" ? r2[e2] = s2(t2) : Array.isArray(r2[e2]) ? r2[e2].push(s2(t2)) : r2[e2] = [r2[e2], s2(t2)];
      else if (t2.type === "rule") {
        let o2 = a2(t2);
        if (r2[t2.selector]) for (let f2 in o2) r2[t2.selector][f2] = o2[f2];
        else r2[t2.selector] = o2;
      } else if (t2.type === "decl") {
        t2.prop[0] === "-" && t2.prop[1] === "-" || t2.parent && t2.parent.selector === ":export" ? e2 = t2.prop : e2 = g2(t2.prop);
        let o2 = t2.value;
        !isNaN(t2.value) && w2[e2] && (o2 = parseFloat(t2.value)), t2.important && (o2 += " !important"), typeof r2[e2] > "u" ? r2[e2] = o2 : Array.isArray(r2[e2]) ? r2[e2].push(o2) : r2[e2] = [r2[e2], o2];
      }
    }), r2;
  }
  l2.exports = a2;
});
var p$7 = S$3(i$4()), j$8 = p$7.default ?? p$7;
const __0$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j$8
}, Symbol.toStringTag, { value: "Module" }));
var require$6 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss-js/objectifier":
      return e2(__0$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var i$3 = Object.create;
var n$2 = Object.defineProperty;
var u$4 = Object.getOwnPropertyDescriptor;
var a$5 = Object.getOwnPropertyNames;
var p$6 = Object.getPrototypeOf, m$7 = Object.prototype.hasOwnProperty;
var j$7 = ((o2) => typeof require$6 < "u" ? require$6 : typeof Proxy < "u" ? new Proxy(o2, { get: (e2, t2) => (typeof require$6 < "u" ? require$6 : e2)[t2] }) : o2)(function(o2) {
  if (typeof require$6 < "u") return require$6.apply(this, arguments);
  throw Error('Dynamic require of "' + o2 + '" is not supported');
});
var x$6 = (o2, e2) => () => (e2 || o2((e2 = { exports: {} }).exports, e2), e2.exports);
var d$5 = (o2, e2, t2, s2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let r2 of a$5(e2)) !m$7.call(o2, r2) && r2 !== t2 && n$2(o2, r2, { get: () => e2[r2], enumerable: !(s2 = u$4(e2, r2)) || s2.enumerable });
  return o2;
};
var g$4 = (o2, e2, t2) => (t2 = o2 != null ? i$3(p$6(o2)) : {}, d$5(!o2 || !o2.__esModule ? n$2(t2, "default", { value: o2, enumerable: true }) : t2, o2));
var f$3 = x$6((b2, l2) => {
  var w2 = j$7("postcss-js/objectifier");
  l2.exports = function(e2) {
    return console && console.warn && e2.warnings().forEach((t2) => {
      let s2 = t2.plugin || "PostCSS";
      console.warn(s2 + ": " + t2.text);
    }), w2(e2.root);
  };
});
var c$4 = g$4(f$3()), h$3 = c$4.default ?? c$4;
const __1$$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h$3
}, Symbol.toStringTag, { value: "Module" }));
var require$5 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss":
      return e2(__0$$3);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var a$4 = Object.create;
var c$3 = Object.defineProperty;
var m$6 = Object.getOwnPropertyDescriptor;
var g$3 = Object.getOwnPropertyNames;
var w$3 = Object.getPrototypeOf, A$1 = Object.prototype.hasOwnProperty;
var b$3 = ((r2) => typeof require$5 < "u" ? require$5 : typeof Proxy < "u" ? new Proxy(r2, { get: (e2, t2) => (typeof require$5 < "u" ? require$5 : e2)[t2] }) : r2)(function(r2) {
  if (typeof require$5 < "u") return require$5.apply(this, arguments);
  throw Error('Dynamic require of "' + r2 + '" is not supported');
});
var k$1 = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var S$2 = (r2, e2, t2, o2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let i2 of g$3(e2)) !A$1.call(r2, i2) && i2 !== t2 && c$3(r2, i2, { get: () => e2[i2], enumerable: !(o2 = m$6(e2, i2)) || o2.enumerable });
  return r2;
};
var j$6 = (r2, e2, t2) => (t2 = r2 != null ? a$4(w$3(r2)) : {}, S$2(!r2 || !r2.__esModule ? c$3(t2, "default", { value: r2, enumerable: true }) : t2, r2));
var x$5 = k$1((I2, h2) => {
  var s2 = b$3("postcss"), n2 = /\s*!important\s*$/i, z2 = { "box-flex": true, "box-flex-group": true, "column-count": true, flex: true, "flex-grow": true, "flex-positive": true, "flex-shrink": true, "flex-negative": true, "font-weight": true, "line-clamp": true, "line-height": true, opacity: true, order: true, orphans: true, "tab-size": true, widows: true, "z-index": true, zoom: true, "fill-opacity": true, "stroke-dashoffset": true, "stroke-opacity": true, "stroke-width": true };
  function R2(r2) {
    return r2.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
  }
  function p3(r2, e2, t2) {
    t2 === false || t2 === null || (e2.startsWith("--") || (e2 = R2(e2)), typeof t2 == "number" && (t2 === 0 || z2[e2] ? t2 = t2.toString() : t2 += "px"), e2 === "css-float" && (e2 = "float"), n2.test(t2) ? (t2 = t2.replace(n2, ""), r2.push(s2.decl({ prop: e2, value: t2, important: true }))) : r2.push(s2.decl({ prop: e2, value: t2 })));
  }
  function d2(r2, e2, t2) {
    let o2 = s2.atRule({ name: e2[1], params: e2[3] || "" });
    typeof t2 == "object" && (o2.nodes = [], u2(t2, o2)), r2.push(o2);
  }
  function u2(r2, e2) {
    let t2, o2, i2;
    for (t2 in r2) if (o2 = r2[t2], !(o2 === null || typeof o2 > "u")) if (t2[0] === "@") {
      let f2 = t2.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
      if (Array.isArray(o2)) for (let y2 of o2) d2(e2, f2, y2);
      else d2(e2, f2, o2);
    } else if (Array.isArray(o2)) for (let f2 of o2) p3(e2, t2, f2);
    else typeof o2 == "object" ? (i2 = s2.rule({ selector: t2 }), u2(o2, i2), e2.push(i2)) : p3(e2, t2, o2);
  }
  h2.exports = function(r2) {
    let e2 = s2.root();
    return u2(r2, e2), e2;
  };
});
var l$4 = j$6(x$5()), L$3 = l$4.default ?? l$4;
const __1$$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L$3
}, Symbol.toStringTag, { value: "Module" }));
var require$4 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss":
      return e2(__0$$3);
    case "postcss-js/process-result":
      return e2(__1$$3);
    case "postcss-js/parser":
      return e2(__1$$2);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var n$1 = Object.create;
var c$2 = Object.defineProperty;
var i$2 = Object.getOwnPropertyDescriptor;
var f$2 = Object.getOwnPropertyNames;
var m$5 = Object.getPrototypeOf, d$4 = Object.prototype.hasOwnProperty;
var u$3 = ((e2) => typeof require$4 < "u" ? require$4 : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, s2) => (typeof require$4 < "u" ? require$4 : r2)[s2] }) : e2)(function(e2) {
  if (typeof require$4 < "u") return require$4.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var q$4 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var j$5 = (e2, r2, s2, o2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let t2 of f$2(r2)) !d$4.call(e2, t2) && t2 !== s2 && c$2(e2, t2, { get: () => r2[t2], enumerable: !(o2 = i$2(r2, t2)) || o2.enumerable });
  return e2;
};
var x$4 = (e2, r2, s2) => (s2 = e2 != null ? n$1(m$5(e2)) : {}, j$5(!e2 || !e2.__esModule ? c$2(s2, "default", { value: e2, enumerable: true }) : s2, e2));
var p$5 = q$4((g2, l2) => {
  var y2 = u$3("postcss"), w2 = u$3("postcss-js/process-result"), R2 = u$3("postcss-js/parser");
  l2.exports = function(r2) {
    let s2 = y2(r2);
    return async (o2) => {
      let t2 = await s2.process(o2, { parser: R2, from: void 0 });
      return w2(t2);
    };
  };
});
var a$3 = x$4(p$5()), h$2 = a$3.default ?? a$3;
const __2$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h$2
}, Symbol.toStringTag, { value: "Module" }));
var require$3 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss":
      return e2(__0$$3);
    case "postcss-js/process-result":
      return e2(__1$$3);
    case "postcss-js/parser":
      return e2(__1$$2);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var i$1 = Object.create;
var p$4 = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var a$2 = Object.getOwnPropertyNames;
var m$4 = Object.getPrototypeOf, d$3 = Object.prototype.hasOwnProperty;
var u$2 = ((e2) => typeof require$3 < "u" ? require$3 : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, s2) => (typeof require$3 < "u" ? require$3 : r2)[s2] }) : e2)(function(e2) {
  if (typeof require$3 < "u") return require$3.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var q$3 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var j$4 = (e2, r2, s2, o2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let t2 of a$2(r2)) !d$3.call(e2, t2) && t2 !== s2 && p$4(e2, t2, { get: () => r2[t2], enumerable: !(o2 = n(r2, t2)) || o2.enumerable });
  return e2;
};
var x$3 = (e2, r2, s2) => (s2 = e2 != null ? i$1(m$4(e2)) : {}, j$4(!e2 || !e2.__esModule ? p$4(s2, "default", { value: e2, enumerable: true }) : s2, e2));
var f$1 = q$3((k2, c2) => {
  var R2 = u$2("postcss"), b2 = u$2("postcss-js/process-result"), g2 = u$2("postcss-js/parser");
  c2.exports = function(e2) {
    let r2 = R2(e2);
    return (s2) => {
      let o2 = r2.process(s2, { parser: g2, from: void 0 });
      return b2(o2);
    };
  };
});
var l$3 = x$3(f$1()), v$3 = l$3.default ?? l$3;
const __3$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v$3
}, Symbol.toStringTag, { value: "Module" }));
var require$2 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss-js/objectifier":
      return e2(__0$$1);
    case "postcss-js/parser":
      return e2(__1$$2);
    case "postcss-js/async":
      return e2(__2$$1);
    case "postcss-js/sync":
      return e2(__3$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var a$1 = Object.create;
var p$3 = Object.defineProperty;
var x$2 = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l$2 = Object.getPrototypeOf, u$1 = Object.prototype.hasOwnProperty;
var c$1 = ((e2) => typeof require$2 < "u" ? require$2 : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, t2) => (typeof require$2 < "u" ? require$2 : r2)[t2] }) : e2)(function(e2) {
  if (typeof require$2 < "u") return require$2.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var q$2 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var b$2 = (e2, r2, t2, n2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let s2 of f(r2)) !u$1.call(e2, s2) && s2 !== t2 && p$3(e2, s2, { get: () => r2[s2], enumerable: !(n2 = x$2(r2, s2)) || n2.enumerable });
  return e2;
};
var j$3 = (e2, r2, t2) => (t2 = e2 != null ? a$1(l$2(e2)) : {}, b$2(p$3(t2, "default", { value: e2, enumerable: true }), e2));
var y$2 = q$2((v2, i2) => {
  var d2 = c$1("postcss-js/objectifier"), m2 = c$1("postcss-js/parser"), g2 = c$1("postcss-js/async"), h2 = c$1("postcss-js/sync");
  i2.exports = { objectify: d2, parse: m2, async: g2, sync: h2 };
});
var o$1 = j$3(y$2()), w$2 = o$1.default;
o$1.default.objectify;
o$1.default.parse;
o$1.default.async;
o$1.default.sync;
var S$1 = Object.create;
var C$1 = Object.defineProperty;
var o = Object.getOwnPropertyDescriptor;
var b$1 = Object.getOwnPropertyNames;
var j$2 = Object.getPrototypeOf, y$1 = Object.prototype.hasOwnProperty;
var D$2 = (s2, e2) => () => (e2 || s2((e2 = { exports: {} }).exports, e2), e2.exports);
var I$2 = (s2, e2, r2, f2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let t2 of b$1(e2)) !y$1.call(s2, t2) && t2 !== r2 && C$1(s2, t2, { get: () => e2[t2], enumerable: !(f2 = o(e2, t2)) || f2.enumerable });
  return s2;
};
var U$1 = (s2, e2, r2) => (r2 = s2 != null ? S$1(j$2(s2)) : {}, I$2(!s2 || !s2.__esModule ? C$1(r2, "default", { value: s2, enumerable: true }) : r2, s2));
var m$3 = D$2((J3, E2) => {
  var d2 = {}, h2 = d2.hasOwnProperty, B3 = function(e2, r2) {
    if (!e2) return r2;
    var f2 = {};
    for (var t2 in r2) f2[t2] = h2.call(e2, t2) ? e2[t2] : r2[t2];
    return f2;
  }, O3 = /[ -,\.\/:-@\[-\^`\{-~]/, z2 = /[ -,\.\/:-@\[\]\^`\{-~]/, G2 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, u2 = function s2(e2, r2) {
    r2 = B3(r2, s2.options), r2.quotes != "single" && r2.quotes != "double" && (r2.quotes = "single");
    for (var f2 = r2.quotes == "double" ? '"' : "'", t2 = r2.isIdentifier, p3 = e2.charAt(0), l2 = "", x2 = 0, F2 = e2.length; x2 < F2; ) {
      var i2 = e2.charAt(x2++), v2 = i2.charCodeAt(), n2 = void 0;
      if (v2 < 32 || v2 > 126) {
        if (v2 >= 55296 && v2 <= 56319 && x2 < F2) {
          var A2 = e2.charCodeAt(x2++);
          (A2 & 64512) == 56320 ? v2 = ((v2 & 1023) << 10) + (A2 & 1023) + 65536 : x2--;
        }
        n2 = "\\" + v2.toString(16).toUpperCase() + " ";
      } else r2.escapeEverything ? O3.test(i2) ? n2 = "\\" + i2 : n2 = "\\" + v2.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(i2) ? n2 = "\\" + v2.toString(16).toUpperCase() + " " : i2 == "\\" || !t2 && (i2 == '"' && f2 == i2 || i2 == "'" && f2 == i2) || t2 && z2.test(i2) ? n2 = "\\" + i2 : n2 = i2;
      l2 += n2;
    }
    return t2 && (/^-[-\d]/.test(l2) ? l2 = "\\-" + l2.slice(1) : /\d/.test(p3) && (l2 = "\\3" + p3 + " " + l2.slice(1))), l2 = l2.replace(G2, function(q3, g2, w2) {
      return g2 && g2.length % 2 ? q3 : (g2 || "") + w2;
    }), !t2 && r2.wrap ? f2 + l2 + f2 : l2;
  };
  u2.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false };
  u2.version = "3.0.0";
  E2.exports = u2;
});
var a = U$1(m$3()), { options: K$1, version: L$2 } = a, M$1 = a.default ?? a;
/*! Bundled license information:

cssesc/cssesc.js:
  (*! https://mths.be/cssesc v3.0.0 by @mathias *)
*/
const __2$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M$1,
  options: K$1,
  version: L$2
}, Symbol.toStringTag, { value: "Module" }));
var u = Object.create;
var c = Object.defineProperty;
var s$1 = Object.getOwnPropertyDescriptor;
var p$2 = Object.getOwnPropertyNames;
var d$2 = Object.getPrototypeOf, w$1 = Object.prototype.hasOwnProperty;
var g$2 = (r2, e2) => () => (e2 || r2((e2 = { exports: {} }).exports, e2), e2.exports);
var h$1 = (r2, e2, t2, o2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let a2 of p$2(e2)) !w$1.call(r2, a2) && a2 !== t2 && c(r2, a2, { get: () => e2[a2], enumerable: !(o2 = s$1(e2, a2)) || o2.enumerable });
  return r2;
};
var m$2 = (r2, e2, t2) => (t2 = r2 != null ? u(d$2(r2)) : {}, h$1(!r2 || !r2.__esModule ? c(t2, "default", { value: r2, enumerable: true }) : t2, r2));
var i = g$2((S2, f2) => {
  f2.exports = v2;
  function v2(r2, e2) {
    if (n2("noDeprecation")) return r2;
    var t2 = false;
    function o2() {
      if (!t2) {
        if (n2("throwDeprecation")) throw new Error(e2);
        n2("traceDeprecation") ? console.trace(e2) : console.warn(e2), t2 = true;
      }
      return r2.apply(this, arguments);
    }
    return o2;
  }
  function n2(r2) {
    try {
      if (!globalThis.localStorage) return false;
    } catch {
      return false;
    }
    var e2 = globalThis.localStorage[r2];
    return e2 == null ? false : String(e2).toLowerCase() === "true";
  }
});
var l$1 = m$2(i()), b = l$1.default ?? l$1;
const __1$$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b
}, Symbol.toStringTag, { value: "Module" }));
var require$1 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "cssesc":
      return e2(__2$);
    case "util-deprecate":
      return e2(__1$$1);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var Mr = Object.create;
var wt = Object.defineProperty;
var Nr = Object.getOwnPropertyDescriptor;
var Rr = Object.getOwnPropertyNames;
var Fr = Object.getPrototypeOf, Cr = Object.prototype.hasOwnProperty;
var ge = ((e2) => typeof require$1 < "u" ? require$1 : typeof Proxy < "u" ? new Proxy(e2, { get: (i2, n2) => (typeof require$1 < "u" ? require$1 : i2)[n2] }) : e2)(function(e2) {
  if (typeof require$1 < "u") return require$1.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var T$1 = (e2, i2) => () => (i2 || e2((i2 = { exports: {} }).exports, i2), i2.exports);
var Ur = (e2, i2, n2, t2) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function") for (let r2 of Rr(i2)) !Cr.call(e2, r2) && r2 !== n2 && wt(e2, r2, { get: () => i2[r2], enumerable: !(t2 = Nr(i2, r2)) || t2.enumerable });
  return e2;
};
var Wr = (e2, i2, n2) => (n2 = e2 != null ? Mr(Fr(e2)) : {}, Ur(!e2 || !e2.__esModule ? wt(n2, "default", { value: e2, enumerable: true }) : n2, e2));
var De$1 = T$1((Te2, mt2) => {
  Te2.__esModule = true;
  Te2.default = Yr;
  function Br(e2) {
    for (var i2 = e2.toLowerCase(), n2 = "", t2 = false, r2 = 0; r2 < 6 && i2[r2] !== void 0; r2++) {
      var s2 = i2.charCodeAt(r2), a2 = s2 >= 97 && s2 <= 102 || s2 >= 48 && s2 <= 57;
      if (t2 = s2 === 32, !a2) break;
      n2 += i2[r2];
    }
    if (n2.length !== 0) {
      var u2 = parseInt(n2, 16), h2 = u2 >= 55296 && u2 <= 57343;
      return h2 || u2 === 0 || u2 > 1114111 ? ["\uFFFD", n2.length + (t2 ? 1 : 0)] : [String.fromCodePoint(u2), n2.length + (t2 ? 1 : 0)];
    }
  }
  var Qr = /\\/;
  function Yr(e2) {
    var i2 = Qr.test(e2);
    if (!i2) return e2;
    for (var n2 = "", t2 = 0; t2 < e2.length; t2++) {
      if (e2[t2] === "\\") {
        var r2 = Br(e2.slice(t2 + 1, t2 + 7));
        if (r2 !== void 0) {
          n2 += r2[0], t2 += r2[1];
          continue;
        }
        if (e2[t2 + 1] === "\\") {
          n2 += "\\", t2++;
          continue;
        }
        e2.length === t2 + 1 && (n2 += e2[t2]);
        continue;
      }
      n2 += e2[t2];
    }
    return n2;
  }
  mt2.exports = Te2.default;
});
var kt = T$1((Oe2, Pt2) => {
  Oe2.__esModule = true;
  Oe2.default = Gr;
  function Gr(e2) {
    for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), t2 = 1; t2 < i2; t2++) n2[t2 - 1] = arguments[t2];
    for (; n2.length > 0; ) {
      var r2 = n2.shift();
      if (!e2[r2]) return;
      e2 = e2[r2];
    }
    return e2;
  }
  Pt2.exports = Oe2.default;
});
var bt = T$1((ye2, It2) => {
  ye2.__esModule = true;
  ye2.default = Vr;
  function Vr(e2) {
    for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), t2 = 1; t2 < i2; t2++) n2[t2 - 1] = arguments[t2];
    for (; n2.length > 0; ) {
      var r2 = n2.shift();
      e2[r2] || (e2[r2] = {}), e2 = e2[r2];
    }
  }
  It2.exports = ye2.default;
});
var Lt = T$1((Ee2, qt) => {
  Ee2.__esModule = true;
  Ee2.default = jr;
  function jr(e2) {
    for (var i2 = "", n2 = e2.indexOf("/*"), t2 = 0; n2 >= 0; ) {
      i2 = i2 + e2.slice(t2, n2);
      var r2 = e2.indexOf("*/", n2 + 2);
      if (r2 < 0) return i2;
      t2 = r2 + 2, n2 = e2.indexOf("/*", t2);
    }
    return i2 = i2 + e2.slice(t2), i2;
  }
  qt.exports = Ee2.default;
});
var z$2 = T$1((U2) => {
  U2.__esModule = true;
  U2.unesc = U2.stripComments = U2.getProp = U2.ensureObject = void 0;
  var Hr = we2(De$1());
  U2.unesc = Hr.default;
  var Kr = we2(kt());
  U2.getProp = Kr.default;
  var $r = we2(bt());
  U2.ensureObject = $r.default;
  var zr = we2(Lt());
  U2.stripComments = zr.default;
  function we2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
});
var W$2 = T$1((J3, xt2) => {
  J3.__esModule = true;
  J3.default = void 0;
  var Dt = z$2();
  function At2(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Jr(e2, i2, n2) {
    return i2 && At2(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  var Xr = function e2(i2, n2) {
    if (typeof i2 != "object" || i2 === null) return i2;
    var t2 = new i2.constructor();
    for (var r2 in i2) if (i2.hasOwnProperty(r2)) {
      var s2 = i2[r2], a2 = typeof s2;
      r2 === "parent" && a2 === "object" ? n2 && (t2[r2] = n2) : s2 instanceof Array ? t2[r2] = s2.map(function(u2) {
        return e2(u2, t2);
      }) : t2[r2] = e2(s2, t2);
    }
    return t2;
  }, Zr = function() {
    function e2(n2) {
      n2 === void 0 && (n2 = {}), Object.assign(this, n2), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var i2 = e2.prototype;
    return i2.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, i2.replaceWith = function() {
      if (this.parent) {
        for (var t2 in arguments) this.parent.insertBefore(this, arguments[t2]);
        this.remove();
      }
      return this;
    }, i2.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, i2.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, i2.clone = function(t2) {
      t2 === void 0 && (t2 = {});
      var r2 = Xr(this);
      for (var s2 in t2) r2[s2] = t2[s2];
      return r2;
    }, i2.appendToPropertyAndEscape = function(t2, r2, s2) {
      this.raws || (this.raws = {});
      var a2 = this[t2], u2 = this.raws[t2];
      this[t2] = a2 + r2, u2 || s2 !== r2 ? this.raws[t2] = (u2 || a2) + s2 : delete this.raws[t2];
    }, i2.setPropertyAndEscape = function(t2, r2, s2) {
      this.raws || (this.raws = {}), this[t2] = r2, this.raws[t2] = s2;
    }, i2.setPropertyWithoutEscape = function(t2, r2) {
      this[t2] = r2, this.raws && delete this.raws[t2];
    }, i2.isAtPosition = function(t2, r2) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > t2 || this.source.end.line < t2 || this.source.start.line === t2 && this.source.start.column > r2 || this.source.end.line === t2 && this.source.end.column < r2);
    }, i2.stringifyProperty = function(t2) {
      return this.raws && this.raws[t2] || this[t2];
    }, i2.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, i2.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, Jr(e2, [{ key: "rawSpaceBefore", get: function() {
      var t2 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return t2 === void 0 && (t2 = this.spaces && this.spaces.before), t2 || "";
    }, set: function(t2) {
      (0, Dt.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = t2;
    } }, { key: "rawSpaceAfter", get: function() {
      var t2 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return t2 === void 0 && (t2 = this.spaces.after), t2 || "";
    }, set: function(t2) {
      (0, Dt.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = t2;
    } }]), e2;
  }();
  J3.default = Zr;
  xt2.exports = J3.default;
});
var L$1 = T$1((w2) => {
  w2.__esModule = true;
  w2.UNIVERSAL = w2.TAG = w2.STRING = w2.SELECTOR = w2.ROOT = w2.PSEUDO = w2.NESTING = w2.ID = w2.COMMENT = w2.COMBINATOR = w2.CLASS = w2.ATTRIBUTE = void 0;
  var ei = "tag";
  w2.TAG = ei;
  var ti = "string";
  w2.STRING = ti;
  var ri = "selector";
  w2.SELECTOR = ri;
  var ii = "root";
  w2.ROOT = ii;
  var ni = "pseudo";
  w2.PSEUDO = ni;
  var si = "nesting";
  w2.NESTING = si;
  var ai = "id";
  w2.ID = ai;
  var ui = "comment";
  w2.COMMENT = ui;
  var oi = "combinator";
  w2.COMBINATOR = oi;
  var ci = "class";
  w2.CLASS = ci;
  var fi = "attribute";
  w2.ATTRIBUTE = fi;
  var li = "universal";
  w2.UNIVERSAL = li;
});
var me = T$1((X2, Ft) => {
  X2.__esModule = true;
  X2.default = void 0;
  var hi = di(W$2()), B3 = pi(L$1());
  function Rt2(e2) {
    if (typeof WeakMap != "function") return null;
    var i2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
    return (Rt2 = function(r2) {
      return r2 ? n2 : i2;
    })(e2);
  }
  function pi(e2, i2) {
    if (e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return { default: e2 };
    var n2 = Rt2(i2);
    if (n2 && n2.has(e2)) return n2.get(e2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s2 in e2) if (s2 !== "default" && Object.prototype.hasOwnProperty.call(e2, s2)) {
      var a2 = r2 ? Object.getOwnPropertyDescriptor(e2, s2) : null;
      a2 && (a2.get || a2.set) ? Object.defineProperty(t2, s2, a2) : t2[s2] = e2[s2];
    }
    return t2.default = e2, n2 && n2.set(e2, t2), t2;
  }
  function di(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function vi(e2, i2) {
    var n2 = typeof Symbol < "u" && e2[Symbol.iterator] || e2["@@iterator"];
    if (n2) return (n2 = n2.call(e2)).next.bind(n2);
    if (Array.isArray(e2) || (n2 = _i(e2)) || i2) {
      n2 && (e2 = n2);
      var t2 = 0;
      return function() {
        return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function _i(e2, i2) {
    if (e2) {
      if (typeof e2 == "string") return Mt2(e2, i2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      if (n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set") return Array.from(e2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return Mt2(e2, i2);
    }
  }
  function Mt2(e2, i2) {
    (i2 == null || i2 > e2.length) && (i2 = e2.length);
    for (var n2 = 0, t2 = new Array(i2); n2 < i2; n2++) t2[n2] = e2[n2];
    return t2;
  }
  function Nt2(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Si(e2, i2, n2) {
    return i2 && Nt2(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function gi(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ae2(e2, i2);
  }
  function Ae2(e2, i2) {
    return Ae2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ae2(e2, i2);
  }
  var Ti = function(e2) {
    gi(i2, e2);
    function i2(t2) {
      var r2;
      return r2 = e2.call(this, t2) || this, r2.nodes || (r2.nodes = []), r2;
    }
    var n2 = i2.prototype;
    return n2.append = function(r2) {
      return r2.parent = this, this.nodes.push(r2), this;
    }, n2.prepend = function(r2) {
      return r2.parent = this, this.nodes.unshift(r2), this;
    }, n2.at = function(r2) {
      return this.nodes[r2];
    }, n2.index = function(r2) {
      return typeof r2 == "number" ? r2 : this.nodes.indexOf(r2);
    }, n2.removeChild = function(r2) {
      r2 = this.index(r2), this.at(r2).parent = void 0, this.nodes.splice(r2, 1);
      var s2;
      for (var a2 in this.indexes) s2 = this.indexes[a2], s2 >= r2 && (this.indexes[a2] = s2 - 1);
      return this;
    }, n2.removeAll = function() {
      for (var r2 = vi(this.nodes), s2; !(s2 = r2()).done; ) {
        var a2 = s2.value;
        a2.parent = void 0;
      }
      return this.nodes = [], this;
    }, n2.empty = function() {
      return this.removeAll();
    }, n2.insertAfter = function(r2, s2) {
      s2.parent = this;
      var a2 = this.index(r2);
      this.nodes.splice(a2 + 1, 0, s2), s2.parent = this;
      var u2;
      for (var h2 in this.indexes) u2 = this.indexes[h2], a2 <= u2 && (this.indexes[h2] = u2 + 1);
      return this;
    }, n2.insertBefore = function(r2, s2) {
      s2.parent = this;
      var a2 = this.index(r2);
      this.nodes.splice(a2, 0, s2), s2.parent = this;
      var u2;
      for (var h2 in this.indexes) u2 = this.indexes[h2], u2 <= a2 && (this.indexes[h2] = u2 + 1);
      return this;
    }, n2._findChildAtPosition = function(r2, s2) {
      var a2 = void 0;
      return this.each(function(u2) {
        if (u2.atPosition) {
          var h2 = u2.atPosition(r2, s2);
          if (h2) return a2 = h2, false;
        } else if (u2.isAtPosition(r2, s2)) return a2 = u2, false;
      }), a2;
    }, n2.atPosition = function(r2, s2) {
      if (this.isAtPosition(r2, s2)) return this._findChildAtPosition(r2, s2) || this;
    }, n2._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n2.each = function(r2) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var s2 = this.lastEach;
      if (this.indexes[s2] = 0, !!this.length) {
        for (var a2, u2; this.indexes[s2] < this.length && (a2 = this.indexes[s2], u2 = r2(this.at(a2), a2), u2 !== false); ) this.indexes[s2] += 1;
        if (delete this.indexes[s2], u2 === false) return false;
      }
    }, n2.walk = function(r2) {
      return this.each(function(s2, a2) {
        var u2 = r2(s2, a2);
        if (u2 !== false && s2.length && (u2 = s2.walk(r2)), u2 === false) return false;
      });
    }, n2.walkAttributes = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.ATTRIBUTE) return r2.call(s2, a2);
      });
    }, n2.walkClasses = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.CLASS) return r2.call(s2, a2);
      });
    }, n2.walkCombinators = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.COMBINATOR) return r2.call(s2, a2);
      });
    }, n2.walkComments = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.COMMENT) return r2.call(s2, a2);
      });
    }, n2.walkIds = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.ID) return r2.call(s2, a2);
      });
    }, n2.walkNesting = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.NESTING) return r2.call(s2, a2);
      });
    }, n2.walkPseudos = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.PSEUDO) return r2.call(s2, a2);
      });
    }, n2.walkTags = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.TAG) return r2.call(s2, a2);
      });
    }, n2.walkUniversals = function(r2) {
      var s2 = this;
      return this.walk(function(a2) {
        if (a2.type === B3.UNIVERSAL) return r2.call(s2, a2);
      });
    }, n2.split = function(r2) {
      var s2 = this, a2 = [];
      return this.reduce(function(u2, h2, l2) {
        var d2 = r2.call(s2, h2);
        return a2.push(h2), d2 ? (u2.push(a2), a2 = []) : l2 === s2.length - 1 && u2.push(a2), u2;
      }, []);
    }, n2.map = function(r2) {
      return this.nodes.map(r2);
    }, n2.reduce = function(r2, s2) {
      return this.nodes.reduce(r2, s2);
    }, n2.every = function(r2) {
      return this.nodes.every(r2);
    }, n2.some = function(r2) {
      return this.nodes.some(r2);
    }, n2.filter = function(r2) {
      return this.nodes.filter(r2);
    }, n2.sort = function(r2) {
      return this.nodes.sort(r2);
    }, n2.toString = function() {
      return this.map(String).join("");
    }, Si(i2, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), i2;
  }(hi.default);
  X2.default = Ti;
  Ft.exports = X2.default;
});
var Me = T$1((Z2, Ut2) => {
  Z2.__esModule = true;
  Z2.default = void 0;
  var Oi = Ei(me()), yi = L$1();
  function Ei(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Ct2(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function wi(e2, i2, n2) {
    return i2 && Ct2(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function mi(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, xe2(e2, i2);
  }
  function xe2(e2, i2) {
    return xe2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, xe2(e2, i2);
  }
  var Pi = function(e2) {
    mi(i2, e2);
    function i2(t2) {
      var r2;
      return r2 = e2.call(this, t2) || this, r2.type = yi.ROOT, r2;
    }
    var n2 = i2.prototype;
    return n2.toString = function() {
      var r2 = this.reduce(function(s2, a2) {
        return s2.push(String(a2)), s2;
      }, []).join(",");
      return this.trailingComma ? r2 + "," : r2;
    }, n2.error = function(r2, s2) {
      return this._error ? this._error(r2, s2) : new Error(r2);
    }, wi(i2, [{ key: "errorGenerator", set: function(r2) {
      this._error = r2;
    } }]), i2;
  }(Oi.default);
  Z2.default = Pi;
  Ut2.exports = Z2.default;
});
var Re = T$1((ee2, Wt) => {
  ee2.__esModule = true;
  ee2.default = void 0;
  var ki = bi(me()), Ii = L$1();
  function bi(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function qi(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ne2(e2, i2);
  }
  function Ne2(e2, i2) {
    return Ne2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ne2(e2, i2);
  }
  var Li = function(e2) {
    qi(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = Ii.SELECTOR, t2;
    }
    return i2;
  }(ki.default);
  ee2.default = Li;
  Wt.exports = ee2.default;
});
var Ce$1 = T$1((te2, Yt) => {
  te2.__esModule = true;
  te2.default = void 0;
  var Di = Qt(ge("cssesc")), Ai = z$2(), xi = Qt(W$2()), Mi = L$1();
  function Qt(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Bt2(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Ni(e2, i2, n2) {
    return i2 && Bt2(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function Ri(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Fe2(e2, i2);
  }
  function Fe2(e2, i2) {
    return Fe2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Fe2(e2, i2);
  }
  var Fi = function(e2) {
    Ri(i2, e2);
    function i2(t2) {
      var r2;
      return r2 = e2.call(this, t2) || this, r2.type = Mi.CLASS, r2._constructed = true, r2;
    }
    var n2 = i2.prototype;
    return n2.valueToString = function() {
      return "." + e2.prototype.valueToString.call(this);
    }, Ni(i2, [{ key: "value", get: function() {
      return this._value;
    }, set: function(r2) {
      if (this._constructed) {
        var s2 = (0, Di.default)(r2, { isIdentifier: true });
        s2 !== r2 ? ((0, Ai.ensureObject)(this, "raws"), this.raws.value = s2) : this.raws && delete this.raws.value;
      }
      this._value = r2;
    } }]), i2;
  }(xi.default);
  te2.default = Fi;
  Yt.exports = te2.default;
});
var We = T$1((re2, Gt) => {
  re2.__esModule = true;
  re2.default = void 0;
  var Ci = Wi(W$2()), Ui = L$1();
  function Wi(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Bi(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ue2(e2, i2);
  }
  function Ue2(e2, i2) {
    return Ue2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ue2(e2, i2);
  }
  var Qi = function(e2) {
    Bi(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = Ui.COMMENT, t2;
    }
    return i2;
  }(Ci.default);
  re2.default = Qi;
  Gt.exports = re2.default;
});
var Qe = T$1((ie2, Vt) => {
  ie2.__esModule = true;
  ie2.default = void 0;
  var Yi = Vi(W$2()), Gi = L$1();
  function Vi(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function ji(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Be2(e2, i2);
  }
  function Be2(e2, i2) {
    return Be2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Be2(e2, i2);
  }
  var Hi = function(e2) {
    ji(i2, e2);
    function i2(t2) {
      var r2;
      return r2 = e2.call(this, t2) || this, r2.type = Gi.ID, r2;
    }
    var n2 = i2.prototype;
    return n2.valueToString = function() {
      return "#" + e2.prototype.valueToString.call(this);
    }, i2;
  }(Yi.default);
  ie2.default = Hi;
  Vt.exports = ie2.default;
});
var Pe = T$1((ne2, Kt) => {
  ne2.__esModule = true;
  ne2.default = void 0;
  var Ki = Ht(ge("cssesc")), $i = z$2(), zi = Ht(W$2());
  function Ht(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function jt2(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Ji(e2, i2, n2) {
    return i2 && jt2(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function Xi(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ye(e2, i2);
  }
  function Ye(e2, i2) {
    return Ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ye(e2, i2);
  }
  var Zi = function(e2) {
    Xi(i2, e2);
    function i2() {
      return e2.apply(this, arguments) || this;
    }
    var n2 = i2.prototype;
    return n2.qualifiedName = function(r2) {
      return this.namespace ? this.namespaceString + "|" + r2 : r2;
    }, n2.valueToString = function() {
      return this.qualifiedName(e2.prototype.valueToString.call(this));
    }, Ji(i2, [{ key: "namespace", get: function() {
      return this._namespace;
    }, set: function(r2) {
      if (r2 === true || r2 === "*" || r2 === "&") {
        this._namespace = r2, this.raws && delete this.raws.namespace;
        return;
      }
      var s2 = (0, Ki.default)(r2, { isIdentifier: true });
      this._namespace = r2, s2 !== r2 ? ((0, $i.ensureObject)(this, "raws"), this.raws.namespace = s2) : this.raws && delete this.raws.namespace;
    } }, { key: "ns", get: function() {
      return this._namespace;
    }, set: function(r2) {
      this.namespace = r2;
    } }, { key: "namespaceString", get: function() {
      if (this.namespace) {
        var r2 = this.stringifyProperty("namespace");
        return r2 === true ? "" : r2;
      } else return "";
    } }]), i2;
  }(zi.default);
  ne2.default = Zi;
  Kt.exports = ne2.default;
});
var Ve = T$1((se2, $t2) => {
  se2.__esModule = true;
  se2.default = void 0;
  var en = rn(Pe()), tn = L$1();
  function rn(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function nn(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ge(e2, i2);
  }
  function Ge(e2, i2) {
    return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ge(e2, i2);
  }
  var sn = function(e2) {
    nn(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = tn.TAG, t2;
    }
    return i2;
  }(en.default);
  se2.default = sn;
  $t2.exports = se2.default;
});
var He = T$1((ae2, zt) => {
  ae2.__esModule = true;
  ae2.default = void 0;
  var an = on(W$2()), un = L$1();
  function on(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function cn(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, je2(e2, i2);
  }
  function je2(e2, i2) {
    return je2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, je2(e2, i2);
  }
  var fn = function(e2) {
    cn(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = un.STRING, t2;
    }
    return i2;
  }(an.default);
  ae2.default = fn;
  zt.exports = ae2.default;
});
var $e$1 = T$1((ue2, Jt) => {
  ue2.__esModule = true;
  ue2.default = void 0;
  var ln = pn(me()), hn = L$1();
  function pn(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function dn(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Ke(e2, i2);
  }
  function Ke(e2, i2) {
    return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Ke(e2, i2);
  }
  var vn = function(e2) {
    dn(i2, e2);
    function i2(t2) {
      var r2;
      return r2 = e2.call(this, t2) || this, r2.type = hn.PSEUDO, r2;
    }
    var n2 = i2.prototype;
    return n2.toString = function() {
      var r2 = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), r2, this.rawSpaceAfter].join("");
    }, i2;
  }(ln.default);
  ue2.default = vn;
  Jt.exports = ue2.default;
});
var tt$1 = T$1((fe2) => {
  fe2.__esModule = true;
  fe2.default = void 0;
  fe2.unescapeValue = et2;
  var oe2 = Ze(ge("cssesc")), _n = Ze(De$1()), Sn = Ze(Pe()), gn = L$1(), ze2;
  function Ze(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Xt(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Tn(e2, i2, n2) {
    return i2 && Xt(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function On(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, Xe(e2, i2);
  }
  function Xe(e2, i2) {
    return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, Xe(e2, i2);
  }
  var ce2 = ge("util-deprecate"), yn = /^('|")([^]*)\1$/, En = ce2(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), wn = ce2(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), mn = ce2(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function et2(e2) {
    var i2 = false, n2 = null, t2 = e2, r2 = t2.match(yn);
    return r2 && (n2 = r2[1], t2 = r2[2]), t2 = (0, _n.default)(t2), t2 !== e2 && (i2 = true), { deprecatedUsage: i2, unescaped: t2, quoteMark: n2 };
  }
  function Pn(e2) {
    if (e2.quoteMark !== void 0 || e2.value === void 0) return e2;
    mn();
    var i2 = et2(e2.value), n2 = i2.quoteMark, t2 = i2.unescaped;
    return e2.raws || (e2.raws = {}), e2.raws.value === void 0 && (e2.raws.value = e2.value), e2.value = t2, e2.quoteMark = n2, e2;
  }
  var ke = function(e2) {
    On(i2, e2);
    function i2(t2) {
      var r2;
      return t2 === void 0 && (t2 = {}), r2 = e2.call(this, Pn(t2)) || this, r2.type = gn.ATTRIBUTE, r2.raws = r2.raws || {}, Object.defineProperty(r2.raws, "unquoted", { get: ce2(function() {
        return r2.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."), set: ce2(function() {
        return r2.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.") }), r2._constructed = true, r2;
    }
    var n2 = i2.prototype;
    return n2.getQuotedValue = function(r2) {
      r2 === void 0 && (r2 = {});
      var s2 = this._determineQuoteMark(r2), a2 = Je[s2], u2 = (0, oe2.default)(this._value, a2);
      return u2;
    }, n2._determineQuoteMark = function(r2) {
      return r2.smart ? this.smartQuoteMark(r2) : this.preferredQuoteMark(r2);
    }, n2.setValue = function(r2, s2) {
      s2 === void 0 && (s2 = {}), this._value = r2, this._quoteMark = this._determineQuoteMark(s2), this._syncRawValue();
    }, n2.smartQuoteMark = function(r2) {
      var s2 = this.value, a2 = s2.replace(/[^']/g, "").length, u2 = s2.replace(/[^"]/g, "").length;
      if (a2 + u2 === 0) {
        var h2 = (0, oe2.default)(s2, { isIdentifier: true });
        if (h2 === s2) return i2.NO_QUOTE;
        var l2 = this.preferredQuoteMark(r2);
        if (l2 === i2.NO_QUOTE) {
          var d2 = this.quoteMark || r2.quoteMark || i2.DOUBLE_QUOTE, S2 = Je[d2], O3 = (0, oe2.default)(s2, S2);
          if (O3.length < h2.length) return d2;
        }
        return l2;
      } else return u2 === a2 ? this.preferredQuoteMark(r2) : u2 < a2 ? i2.DOUBLE_QUOTE : i2.SINGLE_QUOTE;
    }, n2.preferredQuoteMark = function(r2) {
      var s2 = r2.preferCurrentQuoteMark ? this.quoteMark : r2.quoteMark;
      return s2 === void 0 && (s2 = r2.preferCurrentQuoteMark ? r2.quoteMark : this.quoteMark), s2 === void 0 && (s2 = i2.DOUBLE_QUOTE), s2;
    }, n2._syncRawValue = function() {
      var r2 = (0, oe2.default)(this._value, Je[this.quoteMark]);
      r2 === this._value ? this.raws && delete this.raws.value : this.raws.value = r2;
    }, n2._handleEscapes = function(r2, s2) {
      if (this._constructed) {
        var a2 = (0, oe2.default)(s2, { isIdentifier: true });
        a2 !== s2 ? this.raws[r2] = a2 : delete this.raws[r2];
      }
    }, n2._spacesFor = function(r2) {
      var s2 = { before: "", after: "" }, a2 = this.spaces[r2] || {}, u2 = this.raws.spaces && this.raws.spaces[r2] || {};
      return Object.assign(s2, a2, u2);
    }, n2._stringFor = function(r2, s2, a2) {
      s2 === void 0 && (s2 = r2), a2 === void 0 && (a2 = Zt);
      var u2 = this._spacesFor(s2);
      return a2(this.stringifyProperty(r2), u2);
    }, n2.offsetOf = function(r2) {
      var s2 = 1, a2 = this._spacesFor("attribute");
      if (s2 += a2.before.length, r2 === "namespace" || r2 === "ns") return this.namespace ? s2 : -1;
      if (r2 === "attributeNS" || (s2 += this.namespaceString.length, this.namespace && (s2 += 1), r2 === "attribute")) return s2;
      s2 += this.stringifyProperty("attribute").length, s2 += a2.after.length;
      var u2 = this._spacesFor("operator");
      s2 += u2.before.length;
      var h2 = this.stringifyProperty("operator");
      if (r2 === "operator") return h2 ? s2 : -1;
      s2 += h2.length, s2 += u2.after.length;
      var l2 = this._spacesFor("value");
      s2 += l2.before.length;
      var d2 = this.stringifyProperty("value");
      if (r2 === "value") return d2 ? s2 : -1;
      s2 += d2.length, s2 += l2.after.length;
      var S2 = this._spacesFor("insensitive");
      return s2 += S2.before.length, r2 === "insensitive" && this.insensitive ? s2 : -1;
    }, n2.toString = function() {
      var r2 = this, s2 = [this.rawSpaceBefore, "["];
      return s2.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (s2.push(this._stringFor("operator")), s2.push(this._stringFor("value")), s2.push(this._stringFor("insensitiveFlag", "insensitive", function(a2, u2) {
        return a2.length > 0 && !r2.quoted && u2.before.length === 0 && !(r2.spaces.value && r2.spaces.value.after) && (u2.before = " "), Zt(a2, u2);
      }))), s2.push("]"), s2.push(this.rawSpaceAfter), s2.join("");
    }, Tn(i2, [{ key: "quoted", get: function() {
      var r2 = this.quoteMark;
      return r2 === "'" || r2 === '"';
    }, set: function(r2) {
      wn();
    } }, { key: "quoteMark", get: function() {
      return this._quoteMark;
    }, set: function(r2) {
      if (!this._constructed) {
        this._quoteMark = r2;
        return;
      }
      this._quoteMark !== r2 && (this._quoteMark = r2, this._syncRawValue());
    } }, { key: "qualifiedAttribute", get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: "insensitiveFlag", get: function() {
      return this.insensitive ? "i" : "";
    } }, { key: "value", get: function() {
      return this._value;
    }, set: function(r2) {
      if (this._constructed) {
        var s2 = et2(r2), a2 = s2.deprecatedUsage, u2 = s2.unescaped, h2 = s2.quoteMark;
        if (a2 && En(), u2 === this._value && h2 === this._quoteMark) return;
        this._value = u2, this._quoteMark = h2, this._syncRawValue();
      } else this._value = r2;
    } }, { key: "insensitive", get: function() {
      return this._insensitive;
    }, set: function(r2) {
      r2 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i") && (this.raws.insensitiveFlag = void 0)), this._insensitive = r2;
    } }, { key: "attribute", get: function() {
      return this._attribute;
    }, set: function(r2) {
      this._handleEscapes("attribute", r2), this._attribute = r2;
    } }]), i2;
  }(Sn.default);
  fe2.default = ke;
  ke.NO_QUOTE = null;
  ke.SINGLE_QUOTE = "'";
  ke.DOUBLE_QUOTE = '"';
  var Je = (ze2 = { "'": { quotes: "single", wrap: true }, '"': { quotes: "double", wrap: true } }, ze2[null] = { isIdentifier: true }, ze2);
  function Zt(e2, i2) {
    return "" + i2.before + e2 + i2.after;
  }
});
var it$1 = T$1((le2, er) => {
  le2.__esModule = true;
  le2.default = void 0;
  var kn = bn(Pe()), In = L$1();
  function bn(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function qn(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, rt2(e2, i2);
  }
  function rt2(e2, i2) {
    return rt2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, rt2(e2, i2);
  }
  var Ln = function(e2) {
    qn(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = In.UNIVERSAL, t2.value = "*", t2;
    }
    return i2;
  }(kn.default);
  le2.default = Ln;
  er.exports = le2.default;
});
var st$1 = T$1((he2, tr) => {
  he2.__esModule = true;
  he2.default = void 0;
  var Dn = xn(W$2()), An = L$1();
  function xn(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Mn(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, nt2(e2, i2);
  }
  function nt2(e2, i2) {
    return nt2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, nt2(e2, i2);
  }
  var Nn = function(e2) {
    Mn(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = An.COMBINATOR, t2;
    }
    return i2;
  }(Dn.default);
  he2.default = Nn;
  tr.exports = he2.default;
});
var ut = T$1((pe2, rr) => {
  pe2.__esModule = true;
  pe2.default = void 0;
  var Rn = Cn(W$2()), Fn = L$1();
  function Cn(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function Un(e2, i2) {
    e2.prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, at2(e2, i2);
  }
  function at2(e2, i2) {
    return at2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, r2) {
      return t2.__proto__ = r2, t2;
    }, at2(e2, i2);
  }
  var Wn = function(e2) {
    Un(i2, e2);
    function i2(n2) {
      var t2;
      return t2 = e2.call(this, n2) || this, t2.type = Fn.NESTING, t2.value = "&", t2;
    }
    return i2;
  }(Rn.default);
  pe2.default = Wn;
  rr.exports = pe2.default;
});
var nr = T$1((Ie2, ir) => {
  Ie2.__esModule = true;
  Ie2.default = Bn;
  function Bn(e2) {
    return e2.sort(function(i2, n2) {
      return i2 - n2;
    });
  }
  ir.exports = Ie2.default;
});
var ot$1 = T$1((p3) => {
  p3.__esModule = true;
  p3.word = p3.tilde = p3.tab = p3.str = p3.space = p3.slash = p3.singleQuote = p3.semicolon = p3.plus = p3.pipe = p3.openSquare = p3.openParenthesis = p3.newline = p3.greaterThan = p3.feed = p3.equals = p3.doubleQuote = p3.dollar = p3.cr = p3.comment = p3.comma = p3.combinator = p3.colon = p3.closeSquare = p3.closeParenthesis = p3.caret = p3.bang = p3.backslash = p3.at = p3.asterisk = p3.ampersand = void 0;
  var Qn = 38;
  p3.ampersand = Qn;
  var Yn = 42;
  p3.asterisk = Yn;
  var Gn = 64;
  p3.at = Gn;
  var Vn = 44;
  p3.comma = Vn;
  var jn = 58;
  p3.colon = jn;
  var Hn = 59;
  p3.semicolon = Hn;
  var Kn = 40;
  p3.openParenthesis = Kn;
  var $n = 41;
  p3.closeParenthesis = $n;
  var zn = 91;
  p3.openSquare = zn;
  var Jn = 93;
  p3.closeSquare = Jn;
  var Xn = 36;
  p3.dollar = Xn;
  var Zn = 126;
  p3.tilde = Zn;
  var es2 = 94;
  p3.caret = es2;
  var ts2 = 43;
  p3.plus = ts2;
  var rs2 = 61;
  p3.equals = rs2;
  var is2 = 124;
  p3.pipe = is2;
  var ns2 = 62;
  p3.greaterThan = ns2;
  var ss2 = 32;
  p3.space = ss2;
  var sr = 39;
  p3.singleQuote = sr;
  var as2 = 34;
  p3.doubleQuote = as2;
  var us2 = 47;
  p3.slash = us2;
  var os2 = 33;
  p3.bang = os2;
  var cs2 = 92;
  p3.backslash = cs2;
  var fs2 = 13;
  p3.cr = fs2;
  var ls2 = 12;
  p3.feed = ls2;
  var hs2 = 10;
  p3.newline = hs2;
  var ps2 = 9;
  p3.tab = ps2;
  var ds2 = sr;
  p3.str = ds2;
  var vs2 = -1;
  p3.comment = vs2;
  var _s2 = -2;
  p3.word = _s2;
  var Ss2 = -3;
  p3.combinator = Ss2;
});
var or = T$1((de) => {
  de.__esModule = true;
  de.FIELDS = void 0;
  de.default = ms2;
  var c2 = gs2(ot$1()), H2, y2;
  function ur(e2) {
    if (typeof WeakMap != "function") return null;
    var i2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
    return (ur = function(r2) {
      return r2 ? n2 : i2;
    })(e2);
  }
  function gs2(e2, i2) {
    if (e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return { default: e2 };
    var n2 = ur(i2);
    if (n2 && n2.has(e2)) return n2.get(e2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s2 in e2) if (s2 !== "default" && Object.prototype.hasOwnProperty.call(e2, s2)) {
      var a2 = r2 ? Object.getOwnPropertyDescriptor(e2, s2) : null;
      a2 && (a2.get || a2.set) ? Object.defineProperty(t2, s2, a2) : t2[s2] = e2[s2];
    }
    return t2.default = e2, n2 && n2.set(e2, t2), t2;
  }
  var Ts2 = (H2 = {}, H2[c2.tab] = true, H2[c2.newline] = true, H2[c2.cr] = true, H2[c2.feed] = true, H2), Os2 = (y2 = {}, y2[c2.space] = true, y2[c2.tab] = true, y2[c2.newline] = true, y2[c2.cr] = true, y2[c2.feed] = true, y2[c2.ampersand] = true, y2[c2.asterisk] = true, y2[c2.bang] = true, y2[c2.comma] = true, y2[c2.colon] = true, y2[c2.semicolon] = true, y2[c2.openParenthesis] = true, y2[c2.closeParenthesis] = true, y2[c2.openSquare] = true, y2[c2.closeSquare] = true, y2[c2.singleQuote] = true, y2[c2.doubleQuote] = true, y2[c2.plus] = true, y2[c2.pipe] = true, y2[c2.tilde] = true, y2[c2.greaterThan] = true, y2[c2.equals] = true, y2[c2.dollar] = true, y2[c2.caret] = true, y2[c2.slash] = true, y2), ct2 = {}, ar = "0123456789abcdefABCDEF";
  for (be2 = 0; be2 < ar.length; be2++) ct2[ar.charCodeAt(be2)] = true;
  var be2;
  function ys2(e2, i2) {
    var n2 = i2, t2;
    do {
      if (t2 = e2.charCodeAt(n2), Os2[t2]) return n2 - 1;
      t2 === c2.backslash ? n2 = Es2(e2, n2) + 1 : n2++;
    } while (n2 < e2.length);
    return n2 - 1;
  }
  function Es2(e2, i2) {
    var n2 = i2, t2 = e2.charCodeAt(n2 + 1);
    if (!Ts2[t2]) if (ct2[t2]) {
      var r2 = 0;
      do
        n2++, r2++, t2 = e2.charCodeAt(n2 + 1);
      while (ct2[t2] && r2 < 6);
      r2 < 6 && t2 === c2.space && n2++;
    } else n2++;
    return n2;
  }
  var ws2 = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  de.FIELDS = ws2;
  function ms2(e2) {
    var i2 = [], n2 = e2.css.valueOf(), t2 = n2, r2 = t2.length, s2 = -1, a2 = 1, u2 = 0, h2 = 0, l2, d2, S2, O3, v2, E2, A2, x2, _2, I2, b2, D2, q3;
    function Q2(j3, Y3) {
      if (e2.safe) n2 += Y3, _2 = n2.length - 1;
      else throw e2.error("Unclosed " + j3, a2, u2 - s2, u2);
    }
    for (; u2 < r2; ) {
      switch (l2 = n2.charCodeAt(u2), l2 === c2.newline && (s2 = u2, a2 += 1), l2) {
        case c2.space:
        case c2.tab:
        case c2.newline:
        case c2.cr:
        case c2.feed:
          _2 = u2;
          do
            _2 += 1, l2 = n2.charCodeAt(_2), l2 === c2.newline && (s2 = _2, a2 += 1);
          while (l2 === c2.space || l2 === c2.newline || l2 === c2.tab || l2 === c2.cr || l2 === c2.feed);
          q3 = c2.space, O3 = a2, S2 = _2 - s2 - 1, h2 = _2;
          break;
        case c2.plus:
        case c2.greaterThan:
        case c2.tilde:
        case c2.pipe:
          _2 = u2;
          do
            _2 += 1, l2 = n2.charCodeAt(_2);
          while (l2 === c2.plus || l2 === c2.greaterThan || l2 === c2.tilde || l2 === c2.pipe);
          q3 = c2.combinator, O3 = a2, S2 = u2 - s2, h2 = _2;
          break;
        case c2.asterisk:
        case c2.ampersand:
        case c2.bang:
        case c2.comma:
        case c2.equals:
        case c2.dollar:
        case c2.caret:
        case c2.openSquare:
        case c2.closeSquare:
        case c2.colon:
        case c2.semicolon:
        case c2.openParenthesis:
        case c2.closeParenthesis:
          _2 = u2, q3 = l2, O3 = a2, S2 = u2 - s2, h2 = _2 + 1;
          break;
        case c2.singleQuote:
        case c2.doubleQuote:
          D2 = l2 === c2.singleQuote ? "'" : '"', _2 = u2;
          do
            for (v2 = false, _2 = n2.indexOf(D2, _2 + 1), _2 === -1 && Q2("quote", D2), E2 = _2; n2.charCodeAt(E2 - 1) === c2.backslash; ) E2 -= 1, v2 = !v2;
          while (v2);
          q3 = c2.str, O3 = a2, S2 = u2 - s2, h2 = _2 + 1;
          break;
        default:
          l2 === c2.slash && n2.charCodeAt(u2 + 1) === c2.asterisk ? (_2 = n2.indexOf("*/", u2 + 2) + 1, _2 === 0 && Q2("comment", "*/"), d2 = n2.slice(u2, _2 + 1), x2 = d2.split(`
`), A2 = x2.length - 1, A2 > 0 ? (I2 = a2 + A2, b2 = _2 - x2[A2].length) : (I2 = a2, b2 = s2), q3 = c2.comment, a2 = I2, O3 = I2, S2 = _2 - b2) : l2 === c2.slash ? (_2 = u2, q3 = l2, O3 = a2, S2 = u2 - s2, h2 = _2 + 1) : (_2 = ys2(n2, u2), q3 = c2.word, O3 = a2, S2 = _2 - s2), h2 = _2 + 1;
          break;
      }
      i2.push([q3, a2, u2 - s2, O3, S2, u2, h2]), b2 && (s2 = b2, b2 = null), u2 = h2;
    }
    return i2;
  }
});
var _r = T$1((ve2, vr) => {
  ve2.__esModule = true;
  ve2.default = void 0;
  var Ps2 = N2(Me()), ft2 = N2(Re()), ks2 = N2(Ce$1()), cr = N2(We()), Is2 = N2(Qe()), bs2 = N2(Ve()), lt2 = N2(He()), qs2 = N2($e$1()), fr = qe(tt$1()), Ls2 = N2(it$1()), ht2 = N2(st$1()), Ds2 = N2(ut()), As2 = N2(nr()), o2 = qe(or()), f2 = qe(ot$1()), xs2 = qe(L$1()), P3 = z$2(), G2, pt2;
  function dr(e2) {
    if (typeof WeakMap != "function") return null;
    var i2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
    return (dr = function(r2) {
      return r2 ? n2 : i2;
    })(e2);
  }
  function qe(e2, i2) {
    if (e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return { default: e2 };
    var n2 = dr(i2);
    if (n2 && n2.has(e2)) return n2.get(e2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s2 in e2) if (s2 !== "default" && Object.prototype.hasOwnProperty.call(e2, s2)) {
      var a2 = r2 ? Object.getOwnPropertyDescriptor(e2, s2) : null;
      a2 && (a2.get || a2.set) ? Object.defineProperty(t2, s2, a2) : t2[s2] = e2[s2];
    }
    return t2.default = e2, n2 && n2.set(e2, t2), t2;
  }
  function N2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function lr(e2, i2) {
    for (var n2 = 0; n2 < i2.length; n2++) {
      var t2 = i2[n2];
      t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e2, t2.key, t2);
    }
  }
  function Ms2(e2, i2, n2) {
    return i2 && lr(e2.prototype, i2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  var _t2 = (G2 = {}, G2[f2.space] = true, G2[f2.cr] = true, G2[f2.feed] = true, G2[f2.newline] = true, G2[f2.tab] = true, G2), Ns2 = Object.assign({}, _t2, (pt2 = {}, pt2[f2.comment] = true, pt2));
  function hr(e2) {
    return { line: e2[o2.FIELDS.START_LINE], column: e2[o2.FIELDS.START_COL] };
  }
  function pr(e2) {
    return { line: e2[o2.FIELDS.END_LINE], column: e2[o2.FIELDS.END_COL] };
  }
  function V2(e2, i2, n2, t2) {
    return { start: { line: e2, column: i2 }, end: { line: n2, column: t2 } };
  }
  function K2(e2) {
    return V2(e2[o2.FIELDS.START_LINE], e2[o2.FIELDS.START_COL], e2[o2.FIELDS.END_LINE], e2[o2.FIELDS.END_COL]);
  }
  function dt2(e2, i2) {
    if (e2) return V2(e2[o2.FIELDS.START_LINE], e2[o2.FIELDS.START_COL], i2[o2.FIELDS.END_LINE], i2[o2.FIELDS.END_COL]);
  }
  function $2(e2, i2) {
    var n2 = e2[i2];
    if (typeof n2 == "string") return n2.indexOf("\\") !== -1 && ((0, P3.ensureObject)(e2, "raws"), e2[i2] = (0, P3.unesc)(n2), e2.raws[i2] === void 0 && (e2.raws[i2] = n2)), e2;
  }
  function vt2(e2, i2) {
    for (var n2 = -1, t2 = []; (n2 = e2.indexOf(i2, n2 + 1)) !== -1; ) t2.push(n2);
    return t2;
  }
  function Rs2() {
    var e2 = Array.prototype.concat.apply([], arguments);
    return e2.filter(function(i2, n2) {
      return n2 === e2.indexOf(i2);
    });
  }
  var Fs2 = function() {
    function e2(n2, t2) {
      t2 === void 0 && (t2 = {}), this.rule = n2, this.options = Object.assign({ lossy: false, safe: false }, t2), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, o2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var r2 = dt2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new Ps2.default({ source: r2 }), this.root.errorGenerator = this._errorGenerator();
      var s2 = new ft2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(s2), this.current = s2, this.loop();
    }
    var i2 = e2.prototype;
    return i2._errorGenerator = function() {
      var t2 = this;
      return function(r2, s2) {
        return typeof t2.rule == "string" ? new Error(r2) : t2.rule.error(r2, s2);
      };
    }, i2.attribute = function() {
      var t2 = [], r2 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[o2.FIELDS.TYPE] !== f2.closeSquare; ) t2.push(this.currToken), this.position++;
      if (this.currToken[o2.FIELDS.TYPE] !== f2.closeSquare) return this.expected("closing square bracket", this.currToken[o2.FIELDS.START_POS]);
      var s2 = t2.length, a2 = { source: V2(r2[1], r2[2], this.currToken[3], this.currToken[4]), sourceIndex: r2[o2.FIELDS.START_POS] };
      if (s2 === 1 && !~[f2.word].indexOf(t2[0][o2.FIELDS.TYPE])) return this.expected("attribute", t2[0][o2.FIELDS.START_POS]);
      for (var u2 = 0, h2 = "", l2 = "", d2 = null, S2 = false; u2 < s2; ) {
        var O3 = t2[u2], v2 = this.content(O3), E2 = t2[u2 + 1];
        switch (O3[o2.FIELDS.TYPE]) {
          case f2.space:
            if (S2 = true, this.options.lossy) break;
            if (d2) {
              (0, P3.ensureObject)(a2, "spaces", d2);
              var A2 = a2.spaces[d2].after || "";
              a2.spaces[d2].after = A2 + v2;
              var x2 = (0, P3.getProp)(a2, "raws", "spaces", d2, "after") || null;
              x2 && (a2.raws.spaces[d2].after = x2 + v2);
            } else h2 = h2 + v2, l2 = l2 + v2;
            break;
          case f2.asterisk:
            if (E2[o2.FIELDS.TYPE] === f2.equals) a2.operator = v2, d2 = "operator";
            else if ((!a2.namespace || d2 === "namespace" && !S2) && E2) {
              h2 && ((0, P3.ensureObject)(a2, "spaces", "attribute"), a2.spaces.attribute.before = h2, h2 = ""), l2 && ((0, P3.ensureObject)(a2, "raws", "spaces", "attribute"), a2.raws.spaces.attribute.before = h2, l2 = ""), a2.namespace = (a2.namespace || "") + v2;
              var _2 = (0, P3.getProp)(a2, "raws", "namespace") || null;
              _2 && (a2.raws.namespace += v2), d2 = "namespace";
            }
            S2 = false;
            break;
          case f2.dollar:
            if (d2 === "value") {
              var I2 = (0, P3.getProp)(a2, "raws", "value");
              a2.value += "$", I2 && (a2.raws.value = I2 + "$");
              break;
            }
          case f2.caret:
            E2[o2.FIELDS.TYPE] === f2.equals && (a2.operator = v2, d2 = "operator"), S2 = false;
            break;
          case f2.combinator:
            if (v2 === "~" && E2[o2.FIELDS.TYPE] === f2.equals && (a2.operator = v2, d2 = "operator"), v2 !== "|") {
              S2 = false;
              break;
            }
            E2[o2.FIELDS.TYPE] === f2.equals ? (a2.operator = v2, d2 = "operator") : !a2.namespace && !a2.attribute && (a2.namespace = true), S2 = false;
            break;
          case f2.word:
            if (E2 && this.content(E2) === "|" && t2[u2 + 2] && t2[u2 + 2][o2.FIELDS.TYPE] !== f2.equals && !a2.operator && !a2.namespace) a2.namespace = v2, d2 = "namespace";
            else if (!a2.attribute || d2 === "attribute" && !S2) {
              h2 && ((0, P3.ensureObject)(a2, "spaces", "attribute"), a2.spaces.attribute.before = h2, h2 = ""), l2 && ((0, P3.ensureObject)(a2, "raws", "spaces", "attribute"), a2.raws.spaces.attribute.before = l2, l2 = ""), a2.attribute = (a2.attribute || "") + v2;
              var b2 = (0, P3.getProp)(a2, "raws", "attribute") || null;
              b2 && (a2.raws.attribute += v2), d2 = "attribute";
            } else if (!a2.value && a2.value !== "" || d2 === "value" && !(S2 || a2.quoteMark)) {
              var D2 = (0, P3.unesc)(v2), q3 = (0, P3.getProp)(a2, "raws", "value") || "", Q2 = a2.value || "";
              a2.value = Q2 + D2, a2.quoteMark = null, (D2 !== v2 || q3) && ((0, P3.ensureObject)(a2, "raws"), a2.raws.value = (q3 || Q2) + v2), d2 = "value";
            } else {
              var j3 = v2 === "i" || v2 === "I";
              (a2.value || a2.value === "") && (a2.quoteMark || S2) ? (a2.insensitive = j3, (!j3 || v2 === "I") && ((0, P3.ensureObject)(a2, "raws"), a2.raws.insensitiveFlag = v2), d2 = "insensitive", h2 && ((0, P3.ensureObject)(a2, "spaces", "insensitive"), a2.spaces.insensitive.before = h2, h2 = ""), l2 && ((0, P3.ensureObject)(a2, "raws", "spaces", "insensitive"), a2.raws.spaces.insensitive.before = l2, l2 = "")) : (a2.value || a2.value === "") && (d2 = "value", a2.value += v2, a2.raws.value && (a2.raws.value += v2));
            }
            S2 = false;
            break;
          case f2.str:
            if (!a2.attribute || !a2.operator) return this.error("Expected an attribute followed by an operator preceding the string.", { index: O3[o2.FIELDS.START_POS] });
            var Y3 = (0, fr.unescapeValue)(v2), br = Y3.unescaped, qr = Y3.quoteMark;
            a2.value = br, a2.quoteMark = qr, d2 = "value", (0, P3.ensureObject)(a2, "raws"), a2.raws.value = v2, S2 = false;
            break;
          case f2.equals:
            if (!a2.attribute) return this.expected("attribute", O3[o2.FIELDS.START_POS], v2);
            if (a2.value) return this.error('Unexpected "=" found; an operator was already defined.', { index: O3[o2.FIELDS.START_POS] });
            a2.operator = a2.operator ? a2.operator + v2 : v2, d2 = "operator", S2 = false;
            break;
          case f2.comment:
            if (d2) if (S2 || E2 && E2[o2.FIELDS.TYPE] === f2.space || d2 === "insensitive") {
              var Lr = (0, P3.getProp)(a2, "spaces", d2, "after") || "", Dr = (0, P3.getProp)(a2, "raws", "spaces", d2, "after") || Lr;
              (0, P3.ensureObject)(a2, "raws", "spaces", d2), a2.raws.spaces[d2].after = Dr + v2;
            } else {
              var Ar = a2[d2] || "", xr = (0, P3.getProp)(a2, "raws", d2) || Ar;
              (0, P3.ensureObject)(a2, "raws"), a2.raws[d2] = xr + v2;
            }
            else l2 = l2 + v2;
            break;
          default:
            return this.error('Unexpected "' + v2 + '" found.', { index: O3[o2.FIELDS.START_POS] });
        }
        u2++;
      }
      $2(a2, "attribute"), $2(a2, "namespace"), this.newNode(new fr.default(a2)), this.position++;
    }, i2.parseWhitespaceEquivalentTokens = function(t2) {
      t2 < 0 && (t2 = this.tokens.length);
      var r2 = this.position, s2 = [], a2 = "", u2 = void 0;
      do
        if (_t2[this.currToken[o2.FIELDS.TYPE]]) this.options.lossy || (a2 += this.content());
        else if (this.currToken[o2.FIELDS.TYPE] === f2.comment) {
          var h2 = {};
          a2 && (h2.before = a2, a2 = ""), u2 = new cr.default({ value: this.content(), source: K2(this.currToken), sourceIndex: this.currToken[o2.FIELDS.START_POS], spaces: h2 }), s2.push(u2);
        }
      while (++this.position < t2);
      if (a2) {
        if (u2) u2.spaces.after = a2;
        else if (!this.options.lossy) {
          var l2 = this.tokens[r2], d2 = this.tokens[this.position - 1];
          s2.push(new lt2.default({ value: "", source: V2(l2[o2.FIELDS.START_LINE], l2[o2.FIELDS.START_COL], d2[o2.FIELDS.END_LINE], d2[o2.FIELDS.END_COL]), sourceIndex: l2[o2.FIELDS.START_POS], spaces: { before: a2, after: "" } }));
        }
      }
      return s2;
    }, i2.convertWhitespaceNodesToSpace = function(t2, r2) {
      var s2 = this;
      r2 === void 0 && (r2 = false);
      var a2 = "", u2 = "";
      t2.forEach(function(l2) {
        var d2 = s2.lossySpace(l2.spaces.before, r2), S2 = s2.lossySpace(l2.rawSpaceBefore, r2);
        a2 += d2 + s2.lossySpace(l2.spaces.after, r2 && d2.length === 0), u2 += d2 + l2.value + s2.lossySpace(l2.rawSpaceAfter, r2 && S2.length === 0);
      }), u2 === a2 && (u2 = void 0);
      var h2 = { space: a2, rawSpace: u2 };
      return h2;
    }, i2.isNamedCombinator = function(t2) {
      return t2 === void 0 && (t2 = this.position), this.tokens[t2 + 0] && this.tokens[t2 + 0][o2.FIELDS.TYPE] === f2.slash && this.tokens[t2 + 1] && this.tokens[t2 + 1][o2.FIELDS.TYPE] === f2.word && this.tokens[t2 + 2] && this.tokens[t2 + 2][o2.FIELDS.TYPE] === f2.slash;
    }, i2.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var t2 = this.content(this.tokens[this.position + 1]), r2 = (0, P3.unesc)(t2).toLowerCase(), s2 = {};
        r2 !== t2 && (s2.value = "/" + t2 + "/");
        var a2 = new ht2.default({ value: "/" + r2 + "/", source: V2(this.currToken[o2.FIELDS.START_LINE], this.currToken[o2.FIELDS.START_COL], this.tokens[this.position + 2][o2.FIELDS.END_LINE], this.tokens[this.position + 2][o2.FIELDS.END_COL]), sourceIndex: this.currToken[o2.FIELDS.START_POS], raws: s2 });
        return this.position = this.position + 3, a2;
      } else this.unexpected();
    }, i2.combinator = function() {
      var t2 = this;
      if (this.content() === "|") return this.namespace();
      var r2 = this.locateNextMeaningfulToken(this.position);
      if (r2 < 0 || this.tokens[r2][o2.FIELDS.TYPE] === f2.comma || this.tokens[r2][o2.FIELDS.TYPE] === f2.closeParenthesis) {
        var s2 = this.parseWhitespaceEquivalentTokens(r2);
        if (s2.length > 0) {
          var a2 = this.current.last;
          if (a2) {
            var u2 = this.convertWhitespaceNodesToSpace(s2), h2 = u2.space, l2 = u2.rawSpace;
            l2 !== void 0 && (a2.rawSpaceAfter += l2), a2.spaces.after += h2;
          } else s2.forEach(function(q3) {
            return t2.newNode(q3);
          });
        }
        return;
      }
      var d2 = this.currToken, S2 = void 0;
      r2 > this.position && (S2 = this.parseWhitespaceEquivalentTokens(r2));
      var O3;
      if (this.isNamedCombinator() ? O3 = this.namedCombinator() : this.currToken[o2.FIELDS.TYPE] === f2.combinator ? (O3 = new ht2.default({ value: this.content(), source: K2(this.currToken), sourceIndex: this.currToken[o2.FIELDS.START_POS] }), this.position++) : _t2[this.currToken[o2.FIELDS.TYPE]] || S2 || this.unexpected(), O3) {
        if (S2) {
          var v2 = this.convertWhitespaceNodesToSpace(S2), E2 = v2.space, A2 = v2.rawSpace;
          O3.spaces.before = E2, O3.rawSpaceBefore = A2;
        }
      } else {
        var x2 = this.convertWhitespaceNodesToSpace(S2, true), _2 = x2.space, I2 = x2.rawSpace;
        I2 || (I2 = _2);
        var b2 = {}, D2 = { spaces: {} };
        _2.endsWith(" ") && I2.endsWith(" ") ? (b2.before = _2.slice(0, _2.length - 1), D2.spaces.before = I2.slice(0, I2.length - 1)) : _2.startsWith(" ") && I2.startsWith(" ") ? (b2.after = _2.slice(1), D2.spaces.after = I2.slice(1)) : D2.value = I2, O3 = new ht2.default({ value: " ", source: dt2(d2, this.tokens[this.position - 1]), sourceIndex: d2[o2.FIELDS.START_POS], spaces: b2, raws: D2 });
      }
      return this.currToken && this.currToken[o2.FIELDS.TYPE] === f2.space && (O3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(O3);
    }, i2.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var t2 = new ft2.default({ source: { start: hr(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][o2.FIELDS.START_POS] });
      this.current.parent.append(t2), this.current = t2, this.position++;
    }, i2.comment = function() {
      var t2 = this.currToken;
      this.newNode(new cr.default({ value: this.content(), source: K2(t2), sourceIndex: t2[o2.FIELDS.START_POS] })), this.position++;
    }, i2.error = function(t2, r2) {
      throw this.root.error(t2, r2);
    }, i2.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[o2.FIELDS.START_POS] });
    }, i2.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[o2.FIELDS.START_POS]);
    }, i2.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[o2.FIELDS.START_POS]);
    }, i2.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[o2.FIELDS.START_POS]);
    }, i2.unexpectedPipe = function() {
      return this.error("Unexpected '|'.", this.currToken[o2.FIELDS.START_POS]);
    }, i2.namespace = function() {
      var t2 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[o2.FIELDS.TYPE] === f2.word) return this.position++, this.word(t2);
      if (this.nextToken[o2.FIELDS.TYPE] === f2.asterisk) return this.position++, this.universal(t2);
      this.unexpectedPipe();
    }, i2.nesting = function() {
      if (this.nextToken) {
        var t2 = this.content(this.nextToken);
        if (t2 === "|") {
          this.position++;
          return;
        }
      }
      var r2 = this.currToken;
      this.newNode(new Ds2.default({ value: this.content(), source: K2(r2), sourceIndex: r2[o2.FIELDS.START_POS] })), this.position++;
    }, i2.parentheses = function() {
      var t2 = this.current.last, r2 = 1;
      if (this.position++, t2 && t2.type === xs2.PSEUDO) {
        var s2 = new ft2.default({ source: { start: hr(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][o2.FIELDS.START_POS] }), a2 = this.current;
        for (t2.append(s2), this.current = s2; this.position < this.tokens.length && r2; ) this.currToken[o2.FIELDS.TYPE] === f2.openParenthesis && r2++, this.currToken[o2.FIELDS.TYPE] === f2.closeParenthesis && r2--, r2 ? this.parse() : (this.current.source.end = pr(this.currToken), this.current.parent.source.end = pr(this.currToken), this.position++);
        this.current = a2;
      } else {
        for (var u2 = this.currToken, h2 = "(", l2; this.position < this.tokens.length && r2; ) this.currToken[o2.FIELDS.TYPE] === f2.openParenthesis && r2++, this.currToken[o2.FIELDS.TYPE] === f2.closeParenthesis && r2--, l2 = this.currToken, h2 += this.parseParenthesisToken(this.currToken), this.position++;
        t2 ? t2.appendToPropertyAndEscape("value", h2, h2) : this.newNode(new lt2.default({ value: h2, source: V2(u2[o2.FIELDS.START_LINE], u2[o2.FIELDS.START_COL], l2[o2.FIELDS.END_LINE], l2[o2.FIELDS.END_COL]), sourceIndex: u2[o2.FIELDS.START_POS] }));
      }
      if (r2) return this.expected("closing parenthesis", this.currToken[o2.FIELDS.START_POS]);
    }, i2.pseudo = function() {
      for (var t2 = this, r2 = "", s2 = this.currToken; this.currToken && this.currToken[o2.FIELDS.TYPE] === f2.colon; ) r2 += this.content(), this.position++;
      if (!this.currToken) return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[o2.FIELDS.TYPE] === f2.word) this.splitWord(false, function(a2, u2) {
        r2 += a2, t2.newNode(new qs2.default({ value: r2, source: dt2(s2, t2.currToken), sourceIndex: s2[o2.FIELDS.START_POS] })), u2 > 1 && t2.nextToken && t2.nextToken[o2.FIELDS.TYPE] === f2.openParenthesis && t2.error("Misplaced parenthesis.", { index: t2.nextToken[o2.FIELDS.START_POS] });
      });
      else return this.expected(["pseudo-class", "pseudo-element"], this.currToken[o2.FIELDS.START_POS]);
    }, i2.space = function() {
      var t2 = this.content();
      this.position === 0 || this.prevToken[o2.FIELDS.TYPE] === f2.comma || this.prevToken[o2.FIELDS.TYPE] === f2.openParenthesis || this.current.nodes.every(function(r2) {
        return r2.type === "comment";
      }) ? (this.spaces = this.optionalSpace(t2), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[o2.FIELDS.TYPE] === f2.comma || this.nextToken[o2.FIELDS.TYPE] === f2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(t2), this.position++) : this.combinator();
    }, i2.string = function() {
      var t2 = this.currToken;
      this.newNode(new lt2.default({ value: this.content(), source: K2(t2), sourceIndex: t2[o2.FIELDS.START_POS] })), this.position++;
    }, i2.universal = function(t2) {
      var r2 = this.nextToken;
      if (r2 && this.content(r2) === "|") return this.position++, this.namespace();
      var s2 = this.currToken;
      this.newNode(new Ls2.default({ value: this.content(), source: K2(s2), sourceIndex: s2[o2.FIELDS.START_POS] }), t2), this.position++;
    }, i2.splitWord = function(t2, r2) {
      for (var s2 = this, a2 = this.nextToken, u2 = this.content(); a2 && ~[f2.dollar, f2.caret, f2.equals, f2.word].indexOf(a2[o2.FIELDS.TYPE]); ) {
        this.position++;
        var h2 = this.content();
        if (u2 += h2, h2.lastIndexOf("\\") === h2.length - 1) {
          var l2 = this.nextToken;
          l2 && l2[o2.FIELDS.TYPE] === f2.space && (u2 += this.requiredSpace(this.content(l2)), this.position++);
        }
        a2 = this.nextToken;
      }
      var d2 = vt2(u2, ".").filter(function(E2) {
        var A2 = u2[E2 - 1] === "\\", x2 = /^\d+\.\d+%$/.test(u2);
        return !A2 && !x2;
      }), S2 = vt2(u2, "#").filter(function(E2) {
        return u2[E2 - 1] !== "\\";
      }), O3 = vt2(u2, "#{");
      O3.length && (S2 = S2.filter(function(E2) {
        return !~O3.indexOf(E2);
      }));
      var v2 = (0, As2.default)(Rs2([0].concat(d2, S2)));
      v2.forEach(function(E2, A2) {
        var x2 = v2[A2 + 1] || u2.length, _2 = u2.slice(E2, x2);
        if (A2 === 0 && r2) return r2.call(s2, _2, v2.length);
        var I2, b2 = s2.currToken, D2 = b2[o2.FIELDS.START_POS] + v2[A2], q3 = V2(b2[1], b2[2] + E2, b2[3], b2[2] + (x2 - 1));
        if (~d2.indexOf(E2)) {
          var Q2 = { value: _2.slice(1), source: q3, sourceIndex: D2 };
          I2 = new ks2.default($2(Q2, "value"));
        } else if (~S2.indexOf(E2)) {
          var j3 = { value: _2.slice(1), source: q3, sourceIndex: D2 };
          I2 = new Is2.default($2(j3, "value"));
        } else {
          var Y3 = { value: _2, source: q3, sourceIndex: D2 };
          $2(Y3, "value"), I2 = new bs2.default(Y3);
        }
        s2.newNode(I2, t2), t2 = null;
      }), this.position++;
    }, i2.word = function(t2) {
      var r2 = this.nextToken;
      return r2 && this.content(r2) === "|" ? (this.position++, this.namespace()) : this.splitWord(t2);
    }, i2.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, i2.parse = function(t2) {
      switch (this.currToken[o2.FIELDS.TYPE]) {
        case f2.space:
          this.space();
          break;
        case f2.comment:
          this.comment();
          break;
        case f2.openParenthesis:
          this.parentheses();
          break;
        case f2.closeParenthesis:
          t2 && this.missingParenthesis();
          break;
        case f2.openSquare:
          this.attribute();
          break;
        case f2.dollar:
        case f2.caret:
        case f2.equals:
        case f2.word:
          this.word();
          break;
        case f2.colon:
          this.pseudo();
          break;
        case f2.comma:
          this.comma();
          break;
        case f2.asterisk:
          this.universal();
          break;
        case f2.ampersand:
          this.nesting();
          break;
        case f2.slash:
        case f2.combinator:
          this.combinator();
          break;
        case f2.str:
          this.string();
          break;
        case f2.closeSquare:
          this.missingSquareBracket();
        case f2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, i2.expected = function(t2, r2, s2) {
      if (Array.isArray(t2)) {
        var a2 = t2.pop();
        t2 = t2.join(", ") + " or " + a2;
      }
      var u2 = /^[aeiou]/.test(t2[0]) ? "an" : "a";
      return s2 ? this.error("Expected " + u2 + " " + t2 + ', found "' + s2 + '" instead.', { index: r2 }) : this.error("Expected " + u2 + " " + t2 + ".", { index: r2 });
    }, i2.requiredSpace = function(t2) {
      return this.options.lossy ? " " : t2;
    }, i2.optionalSpace = function(t2) {
      return this.options.lossy ? "" : t2;
    }, i2.lossySpace = function(t2, r2) {
      return this.options.lossy ? r2 ? " " : "" : t2;
    }, i2.parseParenthesisToken = function(t2) {
      var r2 = this.content(t2);
      return t2[o2.FIELDS.TYPE] === f2.space ? this.requiredSpace(r2) : r2;
    }, i2.newNode = function(t2, r2) {
      return r2 && (/^ +$/.test(r2) && (this.options.lossy || (this.spaces = (this.spaces || "") + r2), r2 = true), t2.namespace = r2, $2(t2, "namespace")), this.spaces && (t2.spaces.before = this.spaces, this.spaces = ""), this.current.append(t2);
    }, i2.content = function(t2) {
      return t2 === void 0 && (t2 = this.currToken), this.css.slice(t2[o2.FIELDS.START_POS], t2[o2.FIELDS.END_POS]);
    }, i2.locateNextMeaningfulToken = function(t2) {
      t2 === void 0 && (t2 = this.position + 1);
      for (var r2 = t2; r2 < this.tokens.length; ) if (Ns2[this.tokens[r2][o2.FIELDS.TYPE]]) {
        r2++;
        continue;
      } else return r2;
      return -1;
    }, Ms2(e2, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), e2;
  }();
  ve2.default = Fs2;
  vr.exports = ve2.default;
});
var gr = T$1((_e2, Sr) => {
  _e2.__esModule = true;
  _e2.default = void 0;
  var Cs2 = Us2(_r());
  function Us2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var Ws2 = function() {
    function e2(n2, t2) {
      this.func = n2 || function() {
      }, this.funcRes = null, this.options = t2;
    }
    var i2 = e2.prototype;
    return i2._shouldUpdateSelector = function(t2, r2) {
      r2 === void 0 && (r2 = {});
      var s2 = Object.assign({}, this.options, r2);
      return s2.updateSelector === false ? false : typeof t2 != "string";
    }, i2._isLossy = function(t2) {
      t2 === void 0 && (t2 = {});
      var r2 = Object.assign({}, this.options, t2);
      return r2.lossless === false;
    }, i2._root = function(t2, r2) {
      r2 === void 0 && (r2 = {});
      var s2 = new Cs2.default(t2, this._parseOptions(r2));
      return s2.root;
    }, i2._parseOptions = function(t2) {
      return { lossy: this._isLossy(t2) };
    }, i2._run = function(t2, r2) {
      var s2 = this;
      return r2 === void 0 && (r2 = {}), new Promise(function(a2, u2) {
        try {
          var h2 = s2._root(t2, r2);
          Promise.resolve(s2.func(h2)).then(function(l2) {
            var d2 = void 0;
            return s2._shouldUpdateSelector(t2, r2) && (d2 = h2.toString(), t2.selector = d2), { transform: l2, root: h2, string: d2 };
          }).then(a2, u2);
        } catch (l2) {
          u2(l2);
          return;
        }
      });
    }, i2._runSync = function(t2, r2) {
      r2 === void 0 && (r2 = {});
      var s2 = this._root(t2, r2), a2 = this.func(s2);
      if (a2 && typeof a2.then == "function") throw new Error("Selector processor returned a promise to a synchronous call.");
      var u2 = void 0;
      return r2.updateSelector && typeof t2 != "string" && (u2 = s2.toString(), t2.selector = u2), { transform: a2, root: s2, string: u2 };
    }, i2.ast = function(t2, r2) {
      return this._run(t2, r2).then(function(s2) {
        return s2.root;
      });
    }, i2.astSync = function(t2, r2) {
      return this._runSync(t2, r2).root;
    }, i2.transform = function(t2, r2) {
      return this._run(t2, r2).then(function(s2) {
        return s2.transform;
      });
    }, i2.transformSync = function(t2, r2) {
      return this._runSync(t2, r2).transform;
    }, i2.process = function(t2, r2) {
      return this._run(t2, r2).then(function(s2) {
        return s2.string || s2.root.toString();
      });
    }, i2.processSync = function(t2, r2) {
      var s2 = this._runSync(t2, r2);
      return s2.string || s2.root.toString();
    }, e2;
  }();
  _e2.default = Ws2;
  Sr.exports = _e2.default;
});
var Tr = T$1((m2) => {
  m2.__esModule = true;
  m2.universal = m2.tag = m2.string = m2.selector = m2.root = m2.pseudo = m2.nesting = m2.id = m2.comment = m2.combinator = m2.className = m2.attribute = void 0;
  var Bs2 = R2(tt$1()), Qs2 = R2(Ce$1()), Ys2 = R2(st$1()), Gs2 = R2(We()), Vs2 = R2(Qe()), js2 = R2(ut()), Hs2 = R2($e$1()), Ks2 = R2(Me()), $s2 = R2(Re()), zs2 = R2(He()), Js2 = R2(Ve()), Xs2 = R2(it$1());
  function R2(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var Zs2 = function(i2) {
    return new Bs2.default(i2);
  };
  m2.attribute = Zs2;
  var ea2 = function(i2) {
    return new Qs2.default(i2);
  };
  m2.className = ea2;
  var ta2 = function(i2) {
    return new Ys2.default(i2);
  };
  m2.combinator = ta2;
  var ra2 = function(i2) {
    return new Gs2.default(i2);
  };
  m2.comment = ra2;
  var ia2 = function(i2) {
    return new Vs2.default(i2);
  };
  m2.id = ia2;
  var na2 = function(i2) {
    return new js2.default(i2);
  };
  m2.nesting = na2;
  var sa2 = function(i2) {
    return new Hs2.default(i2);
  };
  m2.pseudo = sa2;
  var aa2 = function(i2) {
    return new Ks2.default(i2);
  };
  m2.root = aa2;
  var ua2 = function(i2) {
    return new $s2.default(i2);
  };
  m2.selector = ua2;
  var oa2 = function(i2) {
    return new zs2.default(i2);
  };
  m2.string = oa2;
  var ca2 = function(i2) {
    return new Js2.default(i2);
  };
  m2.tag = ca2;
  var fa2 = function(i2) {
    return new Xs2.default(i2);
  };
  m2.universal = fa2;
});
var wr = T$1((g2) => {
  g2.__esModule = true;
  g2.isComment = g2.isCombinator = g2.isClassName = g2.isAttribute = void 0;
  g2.isContainer = Ea2;
  g2.isIdentifier = void 0;
  g2.isNamespace = wa2;
  g2.isNesting = void 0;
  g2.isNode = St2;
  g2.isPseudo = void 0;
  g2.isPseudoClass = ya2;
  g2.isPseudoElement = Er;
  g2.isUniversal = g2.isTag = g2.isString = g2.isSelector = g2.isRoot = void 0;
  var k2 = L$1(), M2, la2 = (M2 = {}, M2[k2.ATTRIBUTE] = true, M2[k2.CLASS] = true, M2[k2.COMBINATOR] = true, M2[k2.COMMENT] = true, M2[k2.ID] = true, M2[k2.NESTING] = true, M2[k2.PSEUDO] = true, M2[k2.ROOT] = true, M2[k2.SELECTOR] = true, M2[k2.STRING] = true, M2[k2.TAG] = true, M2[k2.UNIVERSAL] = true, M2);
  function St2(e2) {
    return typeof e2 == "object" && la2[e2.type];
  }
  function F2(e2, i2) {
    return St2(i2) && i2.type === e2;
  }
  var Or = F2.bind(null, k2.ATTRIBUTE);
  g2.isAttribute = Or;
  var ha2 = F2.bind(null, k2.CLASS);
  g2.isClassName = ha2;
  var pa2 = F2.bind(null, k2.COMBINATOR);
  g2.isCombinator = pa2;
  var da2 = F2.bind(null, k2.COMMENT);
  g2.isComment = da2;
  var va2 = F2.bind(null, k2.ID);
  g2.isIdentifier = va2;
  var _a3 = F2.bind(null, k2.NESTING);
  g2.isNesting = _a3;
  var gt2 = F2.bind(null, k2.PSEUDO);
  g2.isPseudo = gt2;
  var Sa2 = F2.bind(null, k2.ROOT);
  g2.isRoot = Sa2;
  var ga2 = F2.bind(null, k2.SELECTOR);
  g2.isSelector = ga2;
  var Ta2 = F2.bind(null, k2.STRING);
  g2.isString = Ta2;
  var yr = F2.bind(null, k2.TAG);
  g2.isTag = yr;
  var Oa2 = F2.bind(null, k2.UNIVERSAL);
  g2.isUniversal = Oa2;
  function Er(e2) {
    return gt2(e2) && e2.value && (e2.value.startsWith("::") || e2.value.toLowerCase() === ":before" || e2.value.toLowerCase() === ":after" || e2.value.toLowerCase() === ":first-letter" || e2.value.toLowerCase() === ":first-line");
  }
  function ya2(e2) {
    return gt2(e2) && !Er(e2);
  }
  function Ea2(e2) {
    return !!(St2(e2) && e2.walk);
  }
  function wa2(e2) {
    return Or(e2) || yr(e2);
  }
});
var mr = T$1((C2) => {
  C2.__esModule = true;
  var Tt2 = L$1();
  Object.keys(Tt2).forEach(function(e2) {
    e2 === "default" || e2 === "__esModule" || e2 in C2 && C2[e2] === Tt2[e2] || (C2[e2] = Tt2[e2]);
  });
  var Ot2 = Tr();
  Object.keys(Ot2).forEach(function(e2) {
    e2 === "default" || e2 === "__esModule" || e2 in C2 && C2[e2] === Ot2[e2] || (C2[e2] = Ot2[e2]);
  });
  var yt2 = wr();
  Object.keys(yt2).forEach(function(e2) {
    e2 === "default" || e2 === "__esModule" || e2 in C2 && C2[e2] === yt2[e2] || (C2[e2] = yt2[e2]);
  });
});
var Ir = T$1((Se2, kr) => {
  Se2.__esModule = true;
  Se2.default = void 0;
  var ma2 = Ia(gr()), Pa = ka2(mr());
  function Pr(e2) {
    if (typeof WeakMap != "function") return null;
    var i2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
    return (Pr = function(r2) {
      return r2 ? n2 : i2;
    })(e2);
  }
  function ka2(e2, i2) {
    if (e2 && e2.__esModule) return e2;
    if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return { default: e2 };
    var n2 = Pr(i2);
    if (n2 && n2.has(e2)) return n2.get(e2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s2 in e2) if (s2 !== "default" && Object.prototype.hasOwnProperty.call(e2, s2)) {
      var a2 = r2 ? Object.getOwnPropertyDescriptor(e2, s2) : null;
      a2 && (a2.get || a2.set) ? Object.defineProperty(t2, s2, a2) : t2[s2] = e2[s2];
    }
    return t2.default = e2, n2 && n2.set(e2, t2), t2;
  }
  function Ia(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  var Et2 = function(i2) {
    return new ma2.default(i2);
  };
  Object.assign(Et2, Pa);
  delete Et2.__esModule;
  var ba2 = Et2;
  Se2.default = ba2;
  kr.exports = Se2.default;
});
var Le = Wr(Ir()), { ATTRIBUTE: Ca, CLASS: Ua, COMBINATOR: Wa, COMMENT: Ba, ID: Qa, NESTING: Ya, PSEUDO: Ga, ROOT: Va, SELECTOR: ja, STRING: Ha, TAG: Ka, UNIVERSAL: $a, attribute: za, className: Ja, combinator: Xa, comment: Za, id: eu, nesting: tu, pseudo: ru, root: iu, selector: nu, string: su, tag: au, universal: uu, isAttribute: ou, isClassName: cu, isCombinator: fu, isComment: lu, isContainer: hu, isIdentifier: pu, isNamespace: du, isNesting: vu, isNode: _u, isPseudo: Su, isPseudoClass: gu, isPseudoElement: Tu, isRoot: Ou, isSelector: yu, isString: Eu, isTag: wu, isUniversal: mu } = Le, Pu = Le.default ?? Le;
const __1$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ATTRIBUTE: Ca,
  CLASS: Ua,
  COMBINATOR: Wa,
  COMMENT: Ba,
  ID: Qa,
  NESTING: Ya,
  PSEUDO: Ga,
  ROOT: Va,
  SELECTOR: ja,
  STRING: Ha,
  TAG: Ka,
  UNIVERSAL: $a,
  attribute: za,
  className: Ja,
  combinator: Xa,
  comment: Za,
  default: Pu,
  id: eu,
  isAttribute: ou,
  isClassName: cu,
  isCombinator: fu,
  isComment: lu,
  isContainer: hu,
  isIdentifier: pu,
  isNamespace: du,
  isNesting: vu,
  isNode: _u,
  isPseudo: Su,
  isPseudoClass: gu,
  isPseudoElement: Tu,
  isRoot: Ou,
  isSelector: yu,
  isString: Eu,
  isTag: wu,
  isUniversal: mu,
  nesting: tu,
  pseudo: ru,
  root: iu,
  selector: nu,
  string: su,
  tag: au,
  universal: uu
}, Symbol.toStringTag, { value: "Module" }));
const __0$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AtRule: ue,
  Comment: ce,
  Container: oe,
  CssSyntaxError: te$1,
  Declaration: re$1,
  Document: se,
  Input: pe,
  Node: xe,
  Processor: ne$1,
  Result: le,
  Root: me$1,
  Rule: ae,
  Warning: ie,
  atRule: Z$1,
  comment: Y$1,
  decl: $$1,
  default: F$1,
  document: X$1,
  fromJSON: K$2,
  list: U$2,
  parse: T$2,
  plugin: Q$1,
  root: ee$1,
  rule: _$2,
  stringify: H
}, Symbol.toStringTag, { value: "Module" }));
var require2 = (n2) => {
  const e2 = (m2) => typeof m2.default < "u" ? m2.default : m2;
  switch (n2) {
    case "postcss":
      return e2(__0$);
    case "postcss-selector-parser":
      return e2(__1$);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var j$1 = Object.create;
var v$2 = Object.defineProperty;
var M = Object.getOwnPropertyDescriptor;
var q$1 = Object.getOwnPropertyNames;
var z$1 = Object.getPrototypeOf, B$1 = Object.prototype.hasOwnProperty;
var x$1 = ((e2) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e2, { get: (n2, t2) => (typeof require2 < "u" ? require2 : n2)[t2] }) : e2)(function(e2) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var D$1 = (e2, n2) => () => (n2 || e2((n2 = { exports: {} }).exports, n2), n2.exports);
var I$1 = (e2, n2, t2, o2) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function") for (let s2 of q$1(n2)) !B$1.call(e2, s2) && s2 !== t2 && v$2(e2, s2, { get: () => n2[s2], enumerable: !(o2 = M(n2, s2)) || o2.enumerable });
  return e2;
};
var W$1 = (e2, n2, t2) => (t2 = e2 != null ? j$1(z$1(e2)) : {}, I$1(!e2 || !e2.__esModule ? v$2(t2, "default", { value: e2, enumerable: true }) : t2, e2));
var P$2 = D$1((Q2, h2) => {
  var { AtRule: _2, Rule: S2 } = x$1("postcss"), A2 = x$1("postcss-selector-parser");
  function d2(e2, n2) {
    let t2;
    try {
      A2((o2) => {
        t2 = o2;
      }).processSync(e2);
    } catch (o2) {
      throw e2.includes(":") ? n2 ? n2.error("Missed semicolon") : o2 : n2 ? n2.error(o2.message) : o2;
    }
    return t2.at(0);
  }
  function N2(e2, n2) {
    let t2 = false;
    return e2.each((o2) => {
      if (o2.type === "nesting") {
        let s2 = n2.clone({});
        o2.value !== "&" ? o2.replaceWith(d2(o2.value.replace("&", s2.toString()))) : o2.replaceWith(s2), t2 = true;
      } else "nodes" in o2 && o2.nodes && N2(o2, n2) && (t2 = true);
    }), t2;
  }
  function C2(e2, n2) {
    let t2 = [];
    return e2.selectors.forEach((o2) => {
      let s2 = d2(o2, e2);
      n2.selectors.forEach((p3) => {
        if (!p3) return;
        let r2 = d2(p3, n2);
        N2(r2, s2) || (r2.prepend(A2.combinator({ value: " " })), r2.prepend(s2.clone({}))), t2.push(r2.toString());
      });
    }), t2;
  }
  function m2(e2, n2) {
    let t2 = e2.prev();
    for (n2.after(e2); t2 && t2.type === "comment"; ) {
      let o2 = t2.prev();
      n2.after(t2), t2 = o2;
    }
    return e2;
  }
  function F2(e2) {
    return function n2(t2, o2, s2, p3 = s2) {
      let r2 = [];
      if (o2.each((l2) => {
        l2.type === "rule" && s2 ? p3 && (l2.selectors = C2(t2, l2)) : l2.type === "atrule" && l2.nodes ? e2[l2.name] ? n2(t2, l2, p3) : o2[g2] !== false && r2.push(l2) : r2.push(l2);
      }), s2 && r2.length) {
        let l2 = t2.clone({ nodes: [] });
        for (let f2 of r2) l2.append(f2);
        o2.prepend(l2);
      }
    };
  }
  function R2(e2, n2, t2) {
    let o2 = new S2({ nodes: [], selector: e2 });
    return o2.append(n2), t2.after(o2), o2;
  }
  function E2(e2, n2) {
    let t2 = {};
    for (let o2 of e2) t2[o2] = true;
    if (n2) for (let o2 of n2) t2[o2.replace(/^@/, "")] = true;
    return t2;
  }
  function J3(e2) {
    e2 = e2.trim();
    let n2 = e2.match(/^\((.*)\)$/);
    if (!n2) return { selector: e2, type: "basic" };
    let t2 = n2[1].match(/^(with(?:out)?):(.+)$/);
    if (t2) {
      let o2 = t2[1] === "with", s2 = Object.fromEntries(t2[2].trim().split(/\s+/).map((r2) => [r2, true]));
      if (o2 && s2.all) return { type: "noop" };
      let p3 = (r2) => !!s2[r2];
      return s2.all ? p3 = () => true : o2 && (p3 = (r2) => r2 === "all" ? false : !s2[r2]), { escapes: p3, type: "withrules" };
    }
    return { type: "unknown" };
  }
  function L2(e2) {
    let n2 = [], t2 = e2.parent;
    for (; t2 && t2 instanceof _2; ) n2.push(t2), t2 = t2.parent;
    return n2;
  }
  function U2(e2) {
    let n2 = e2[O3];
    if (!n2) e2.after(e2.nodes);
    else {
      let t2 = e2.nodes, o2, s2 = -1, p3, r2, l2, f2 = L2(e2);
      if (f2.forEach((i2, c2) => {
        if (n2(i2.name)) o2 = i2, s2 = c2, r2 = l2;
        else {
          let a2 = l2;
          l2 = i2.clone({ nodes: [] }), a2 && l2.append(a2), p3 = p3 || l2;
        }
      }), o2 ? r2 ? (p3.append(t2), o2.after(r2)) : o2.after(t2) : e2.after(t2), e2.next() && o2) {
        let i2;
        f2.slice(0, s2 + 1).forEach((c2, a2, $2) => {
          let k2 = i2;
          i2 = c2.clone({ nodes: [] }), k2 && i2.append(k2);
          let b2 = [], u2 = ($2[a2 - 1] || e2).next();
          for (; u2; ) b2.push(u2), u2 = u2.next();
          i2.append(b2);
        }), i2 && (r2 || t2[t2.length - 1]).after(i2);
      }
    }
    e2.remove();
  }
  var g2 = Symbol("rootRuleMergeSel"), O3 = Symbol("rootRuleEscapes");
  function G2(e2) {
    let { params: n2 } = e2, { escapes: t2, selector: o2, type: s2 } = J3(n2);
    if (s2 === "unknown") throw e2.error(`Unknown @${e2.name} parameter ${JSON.stringify(n2)}`);
    if (s2 === "basic" && o2) {
      let p3 = new S2({ nodes: e2.nodes, selector: o2 });
      e2.removeAll(), e2.append(p3);
    }
    e2[O3] = t2, e2[g2] = t2 ? !t2("all") : s2 === "noop";
  }
  var w2 = Symbol("hasRootRule");
  h2.exports = (e2 = {}) => {
    let n2 = E2(["media", "supports", "layer", "container", "starting-style"], e2.bubble), t2 = F2(n2), o2 = E2(["document", "font-face", "keyframes", "-webkit-keyframes", "-moz-keyframes"], e2.unwrap), s2 = (e2.rootRuleName || "at-root").replace(/^@/, ""), p3 = e2.preserveEmpty;
    return { Once(r2) {
      r2.walkAtRules(s2, (l2) => {
        G2(l2), r2[w2] = true;
      });
    }, postcssPlugin: "postcss-nested", RootExit(r2) {
      r2[w2] && (r2.walkAtRules(s2, U2), r2[w2] = false);
    }, Rule(r2) {
      let l2 = false, f2 = r2, i2 = false, c2 = [];
      r2.each((a2) => {
        a2.type === "rule" ? (c2.length && (f2 = R2(r2.selector, c2, f2), c2 = []), i2 = true, l2 = true, a2.selectors = C2(r2, a2), f2 = m2(a2, f2)) : a2.type === "atrule" ? (c2.length && (f2 = R2(r2.selector, c2, f2), c2 = []), a2.name === s2 ? (l2 = true, t2(r2, a2, true, a2[g2]), f2 = m2(a2, f2)) : n2[a2.name] ? (i2 = true, l2 = true, t2(r2, a2, true), f2 = m2(a2, f2)) : o2[a2.name] ? (i2 = true, l2 = true, t2(r2, a2, false), f2 = m2(a2, f2)) : i2 && c2.push(a2)) : a2.type === "decl" && i2 && c2.push(a2);
      }), c2.length && (f2 = R2(r2.selector, c2, f2)), l2 && p3 !== true && (r2.raws.semicolon = true, r2.nodes.length === 0 && r2.remove());
    } };
  };
  h2.exports.postcss = true;
});
var y = W$1(P$2()), { postcss: T } = y, V = y.default ?? y;
var s = Object.create;
var l = Object.defineProperty;
var x = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var g$1 = Object.getPrototypeOf, m$1 = Object.prototype.hasOwnProperty;
var p$1 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var C = (e2, r2, t2, n2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let a2 of h(r2)) !m$1.call(e2, a2) && a2 !== t2 && l(e2, a2, { get: () => r2[a2], enumerable: !(n2 = x(r2, a2)) || n2.enumerable });
  return e2;
};
var P$1 = (e2, r2, t2) => (t2 = e2 != null ? s(g$1(e2)) : {}, C(!e2 || !e2.__esModule ? l(t2, "default", { value: e2, enumerable: true }) : t2, e2));
var d$1 = p$1((o2, c2) => {
  o2.__esModule = true;
  o2.default = D2;
  function S2(e2) {
    for (var r2 = e2.toLowerCase(), t2 = "", n2 = false, a2 = 0; a2 < 6 && r2[a2] !== void 0; a2++) {
      var u2 = r2.charCodeAt(a2), i2 = u2 >= 97 && u2 <= 102 || u2 >= 48 && u2 <= 57;
      if (n2 = u2 === 32, !i2) break;
      t2 += r2[a2];
    }
    if (t2.length !== 0) {
      var f2 = parseInt(t2, 16), F2 = f2 >= 55296 && f2 <= 57343;
      return F2 || f2 === 0 || f2 > 1114111 ? ["\uFFFD", t2.length + (n2 ? 1 : 0)] : [String.fromCodePoint(f2), t2.length + (n2 ? 1 : 0)];
    }
  }
  var A2 = /\\/;
  function D2(e2) {
    var r2 = A2.test(e2);
    if (!r2) return e2;
    for (var t2 = "", n2 = 0; n2 < e2.length; n2++) {
      if (e2[n2] === "\\") {
        var a2 = S2(e2.slice(n2 + 1, n2 + 7));
        if (a2 !== void 0) {
          t2 += a2[0], n2 += a2[1];
          continue;
        }
        if (e2[n2 + 1] === "\\") {
          t2 += "\\", n2++;
          continue;
        }
        e2.length === n2 + 1 && (t2 += e2[n2]);
        continue;
      }
      t2 += e2[n2];
    }
    return t2;
  }
  c2.exports = o2.default;
});
var v$1 = P$1(d$1()), _$1 = v$1.default ?? v$1;
var postcssNested$1 = { exports: {} };
var dist = { exports: {} };
var processor = { exports: {} };
var parser = { exports: {} };
var root = { exports: {} };
var container = { exports: {} };
var node = { exports: {} };
var util = {};
var unesc = { exports: {} };
var hasRequiredUnesc;
function requireUnesc() {
  if (hasRequiredUnesc) return unesc.exports;
  hasRequiredUnesc = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = unesc2;
    function gobbleHex(str) {
      var lower = str.toLowerCase();
      var hex = "";
      var spaceTerminated = false;
      for (var i2 = 0; i2 < 6 && lower[i2] !== void 0; i2++) {
        var code = lower.charCodeAt(i2);
        var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
        spaceTerminated = code === 32;
        if (!valid) {
          break;
        }
        hex += lower[i2];
      }
      if (hex.length === 0) {
        return void 0;
      }
      var codePoint = parseInt(hex, 16);
      var isSurrogate = codePoint >= 55296 && codePoint <= 57343;
      if (isSurrogate || codePoint === 0 || codePoint > 1114111) {
        return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
      }
      return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
    }
    var CONTAINS_ESCAPE = /\\/;
    function unesc2(str) {
      var needToProcess = CONTAINS_ESCAPE.test(str);
      if (!needToProcess) {
        return str;
      }
      var ret = "";
      for (var i2 = 0; i2 < str.length; i2++) {
        if (str[i2] === "\\") {
          var gobbled = gobbleHex(str.slice(i2 + 1, i2 + 7));
          if (gobbled !== void 0) {
            ret += gobbled[0];
            i2 += gobbled[1];
            continue;
          }
          if (str[i2 + 1] === "\\") {
            ret += "\\";
            i2++;
            continue;
          }
          if (str.length === i2 + 1) {
            ret += str[i2];
          }
          continue;
        }
        ret += str[i2];
      }
      return ret;
    }
    module.exports = exports.default;
  })(unesc, unesc.exports);
  return unesc.exports;
}
var getProp = { exports: {} };
var hasRequiredGetProp;
function requireGetProp() {
  if (hasRequiredGetProp) return getProp.exports;
  hasRequiredGetProp = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = getProp2;
    function getProp2(obj) {
      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }
      while (props.length > 0) {
        var prop = props.shift();
        if (!obj[prop]) {
          return void 0;
        }
        obj = obj[prop];
      }
      return obj;
    }
    module.exports = exports.default;
  })(getProp, getProp.exports);
  return getProp.exports;
}
var ensureObject = { exports: {} };
var hasRequiredEnsureObject;
function requireEnsureObject() {
  if (hasRequiredEnsureObject) return ensureObject.exports;
  hasRequiredEnsureObject = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = ensureObject2;
    function ensureObject2(obj) {
      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }
      while (props.length > 0) {
        var prop = props.shift();
        if (!obj[prop]) {
          obj[prop] = {};
        }
        obj = obj[prop];
      }
    }
    module.exports = exports.default;
  })(ensureObject, ensureObject.exports);
  return ensureObject.exports;
}
var stripComments = { exports: {} };
var hasRequiredStripComments;
function requireStripComments() {
  if (hasRequiredStripComments) return stripComments.exports;
  hasRequiredStripComments = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = stripComments2;
    function stripComments2(str) {
      var s2 = "";
      var commentStart = str.indexOf("/*");
      var lastEnd = 0;
      while (commentStart >= 0) {
        s2 = s2 + str.slice(lastEnd, commentStart);
        var commentEnd = str.indexOf("*/", commentStart + 2);
        if (commentEnd < 0) {
          return s2;
        }
        lastEnd = commentEnd + 2;
        commentStart = str.indexOf("/*", lastEnd);
      }
      s2 = s2 + str.slice(lastEnd);
      return s2;
    }
    module.exports = exports.default;
  })(stripComments, stripComments.exports);
  return stripComments.exports;
}
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  util.__esModule = true;
  util.unesc = util.stripComments = util.getProp = util.ensureObject = void 0;
  var _unesc = _interopRequireDefault(requireUnesc());
  util.unesc = _unesc["default"];
  var _getProp = _interopRequireDefault(requireGetProp());
  util.getProp = _getProp["default"];
  var _ensureObject = _interopRequireDefault(requireEnsureObject());
  util.ensureObject = _ensureObject["default"];
  var _stripComments = _interopRequireDefault(requireStripComments());
  util.stripComments = _stripComments["default"];
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  return util;
}
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node.exports;
  hasRequiredNode = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _util = requireUtil();
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var cloneNode = function cloneNode2(obj, parent) {
      if (typeof obj !== "object" || obj === null) {
        return obj;
      }
      var cloned = new obj.constructor();
      for (var i2 in obj) {
        if (!obj.hasOwnProperty(i2)) {
          continue;
        }
        var value = obj[i2];
        var type = typeof value;
        if (i2 === "parent" && type === "object") {
          if (parent) {
            cloned[i2] = parent;
          }
        } else if (value instanceof Array) {
          cloned[i2] = value.map(function(j3) {
            return cloneNode2(j3, cloned);
          });
        } else {
          cloned[i2] = cloneNode2(value, cloned);
        }
      }
      return cloned;
    };
    var Node = /* @__PURE__ */ function() {
      function Node2(opts) {
        if (opts === void 0) {
          opts = {};
        }
        Object.assign(this, opts);
        this.spaces = this.spaces || {};
        this.spaces.before = this.spaces.before || "";
        this.spaces.after = this.spaces.after || "";
      }
      var _proto = Node2.prototype;
      _proto.remove = function remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
      };
      _proto.replaceWith = function replaceWith() {
        if (this.parent) {
          for (var index in arguments) {
            this.parent.insertBefore(this, arguments[index]);
          }
          this.remove();
        }
        return this;
      };
      _proto.next = function next() {
        return this.parent.at(this.parent.index(this) + 1);
      };
      _proto.prev = function prev() {
        return this.parent.at(this.parent.index(this) - 1);
      };
      _proto.clone = function clone(overrides) {
        if (overrides === void 0) {
          overrides = {};
        }
        var cloned = cloneNode(this);
        for (var name in overrides) {
          cloned[name] = overrides[name];
        }
        return cloned;
      };
      _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }
        var originalValue = this[name];
        var originalEscaped = this.raws[name];
        this[name] = originalValue + value;
        if (originalEscaped || valueEscaped !== value) {
          this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
        } else {
          delete this.raws[name];
        }
      };
      _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }
        this[name] = value;
        this.raws[name] = valueEscaped;
      };
      _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
        this[name] = value;
        if (this.raws) {
          delete this.raws[name];
        }
      };
      _proto.isAtPosition = function isAtPosition(line, column) {
        if (this.source && this.source.start && this.source.end) {
          if (this.source.start.line > line) {
            return false;
          }
          if (this.source.end.line < line) {
            return false;
          }
          if (this.source.start.line === line && this.source.start.column > column) {
            return false;
          }
          if (this.source.end.line === line && this.source.end.column < column) {
            return false;
          }
          return true;
        }
        return void 0;
      };
      _proto.stringifyProperty = function stringifyProperty(name) {
        return this.raws && this.raws[name] || this[name];
      };
      _proto.valueToString = function valueToString() {
        return String(this.stringifyProperty("value"));
      };
      _proto.toString = function toString() {
        return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
      };
      _createClass(Node2, [{
        key: "rawSpaceBefore",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
          if (rawSpace === void 0) {
            rawSpace = this.spaces && this.spaces.before;
          }
          return rawSpace || "";
        },
        set: function set(raw) {
          (0, _util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.before = raw;
        }
      }, {
        key: "rawSpaceAfter",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
          if (rawSpace === void 0) {
            rawSpace = this.spaces.after;
          }
          return rawSpace || "";
        },
        set: function set(raw) {
          (0, _util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.after = raw;
        }
      }]);
      return Node2;
    }();
    exports["default"] = Node;
    module.exports = exports.default;
  })(node, node.exports);
  return node.exports;
}
var types = {};
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  types.__esModule = true;
  types.UNIVERSAL = types.TAG = types.STRING = types.SELECTOR = types.ROOT = types.PSEUDO = types.NESTING = types.ID = types.COMMENT = types.COMBINATOR = types.CLASS = types.ATTRIBUTE = void 0;
  var TAG = "tag";
  types.TAG = TAG;
  var STRING = "string";
  types.STRING = STRING;
  var SELECTOR = "selector";
  types.SELECTOR = SELECTOR;
  var ROOT = "root";
  types.ROOT = ROOT;
  var PSEUDO = "pseudo";
  types.PSEUDO = PSEUDO;
  var NESTING = "nesting";
  types.NESTING = NESTING;
  var ID = "id";
  types.ID = ID;
  var COMMENT = "comment";
  types.COMMENT = COMMENT;
  var COMBINATOR = "combinator";
  types.COMBINATOR = COMBINATOR;
  var CLASS = "class";
  types.CLASS = CLASS;
  var ATTRIBUTE = "attribute";
  types.ATTRIBUTE = ATTRIBUTE;
  var UNIVERSAL = "universal";
  types.UNIVERSAL = UNIVERSAL;
  return types;
}
var hasRequiredContainer;
function requireContainer() {
  if (hasRequiredContainer) return container.exports;
  hasRequiredContainer = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var types2 = _interopRequireWildcard(requireTypes());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
      var it2 = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
      if (it2) return (it2 = it2.call(o2)).next.bind(it2);
      if (Array.isArray(o2) || (it2 = _unsupportedIterableToArray(o2)) || allowArrayLike) {
        if (it2) o2 = it2;
        var i2 = 0;
        return function() {
          if (i2 >= o2.length) return { done: true };
          return { done: false, value: o2[i2++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2) return;
      if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set") return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
        arr2[i2] = arr[i2];
      }
      return arr2;
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Container = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Container2, _Node);
      function Container2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        if (!_this.nodes) {
          _this.nodes = [];
        }
        return _this;
      }
      var _proto = Container2.prototype;
      _proto.append = function append(selector2) {
        selector2.parent = this;
        this.nodes.push(selector2);
        return this;
      };
      _proto.prepend = function prepend(selector2) {
        selector2.parent = this;
        this.nodes.unshift(selector2);
        return this;
      };
      _proto.at = function at2(index) {
        return this.nodes[index];
      };
      _proto.index = function index(child) {
        if (typeof child === "number") {
          return child;
        }
        return this.nodes.indexOf(child);
      };
      _proto.removeChild = function removeChild(child) {
        child = this.index(child);
        this.at(child).parent = void 0;
        this.nodes.splice(child, 1);
        var index;
        for (var id2 in this.indexes) {
          index = this.indexes[id2];
          if (index >= child) {
            this.indexes[id2] = index - 1;
          }
        }
        return this;
      };
      _proto.removeAll = function removeAll() {
        for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done; ) {
          var node2 = _step.value;
          node2.parent = void 0;
        }
        this.nodes = [];
        return this;
      };
      _proto.empty = function empty() {
        return this.removeAll();
      };
      _proto.insertAfter = function insertAfter(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex + 1, 0, newNode);
        newNode.parent = this;
        var index;
        for (var id2 in this.indexes) {
          index = this.indexes[id2];
          if (oldIndex <= index) {
            this.indexes[id2] = index + 1;
          }
        }
        return this;
      };
      _proto.insertBefore = function insertBefore(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex, 0, newNode);
        newNode.parent = this;
        var index;
        for (var id2 in this.indexes) {
          index = this.indexes[id2];
          if (index <= oldIndex) {
            this.indexes[id2] = index + 1;
          }
        }
        return this;
      };
      _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
        var found = void 0;
        this.each(function(node2) {
          if (node2.atPosition) {
            var foundChild = node2.atPosition(line, col);
            if (foundChild) {
              found = foundChild;
              return false;
            }
          } else if (node2.isAtPosition(line, col)) {
            found = node2;
            return false;
          }
        });
        return found;
      };
      _proto.atPosition = function atPosition(line, col) {
        if (this.isAtPosition(line, col)) {
          return this._findChildAtPosition(line, col) || this;
        } else {
          return void 0;
        }
      };
      _proto._inferEndPosition = function _inferEndPosition() {
        if (this.last && this.last.source && this.last.source.end) {
          this.source = this.source || {};
          this.source.end = this.source.end || {};
          Object.assign(this.source.end, this.last.source.end);
        }
      };
      _proto.each = function each(callback) {
        if (!this.lastEach) {
          this.lastEach = 0;
        }
        if (!this.indexes) {
          this.indexes = {};
        }
        this.lastEach++;
        var id2 = this.lastEach;
        this.indexes[id2] = 0;
        if (!this.length) {
          return void 0;
        }
        var index, result;
        while (this.indexes[id2] < this.length) {
          index = this.indexes[id2];
          result = callback(this.at(index), index);
          if (result === false) {
            break;
          }
          this.indexes[id2] += 1;
        }
        delete this.indexes[id2];
        if (result === false) {
          return false;
        }
      };
      _proto.walk = function walk(callback) {
        return this.each(function(node2, i2) {
          var result = callback(node2, i2);
          if (result !== false && node2.length) {
            result = node2.walk(callback);
          }
          if (result === false) {
            return false;
          }
        });
      };
      _proto.walkAttributes = function walkAttributes(callback) {
        var _this2 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.ATTRIBUTE) {
            return callback.call(_this2, selector2);
          }
        });
      };
      _proto.walkClasses = function walkClasses(callback) {
        var _this3 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.CLASS) {
            return callback.call(_this3, selector2);
          }
        });
      };
      _proto.walkCombinators = function walkCombinators(callback) {
        var _this4 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.COMBINATOR) {
            return callback.call(_this4, selector2);
          }
        });
      };
      _proto.walkComments = function walkComments(callback) {
        var _this5 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.COMMENT) {
            return callback.call(_this5, selector2);
          }
        });
      };
      _proto.walkIds = function walkIds(callback) {
        var _this6 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.ID) {
            return callback.call(_this6, selector2);
          }
        });
      };
      _proto.walkNesting = function walkNesting(callback) {
        var _this7 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.NESTING) {
            return callback.call(_this7, selector2);
          }
        });
      };
      _proto.walkPseudos = function walkPseudos(callback) {
        var _this8 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.PSEUDO) {
            return callback.call(_this8, selector2);
          }
        });
      };
      _proto.walkTags = function walkTags(callback) {
        var _this9 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.TAG) {
            return callback.call(_this9, selector2);
          }
        });
      };
      _proto.walkUniversals = function walkUniversals(callback) {
        var _this10 = this;
        return this.walk(function(selector2) {
          if (selector2.type === types2.UNIVERSAL) {
            return callback.call(_this10, selector2);
          }
        });
      };
      _proto.split = function split(callback) {
        var _this11 = this;
        var current = [];
        return this.reduce(function(memo, node2, index) {
          var split2 = callback.call(_this11, node2);
          current.push(node2);
          if (split2) {
            memo.push(current);
            current = [];
          } else if (index === _this11.length - 1) {
            memo.push(current);
          }
          return memo;
        }, []);
      };
      _proto.map = function map(callback) {
        return this.nodes.map(callback);
      };
      _proto.reduce = function reduce(callback, memo) {
        return this.nodes.reduce(callback, memo);
      };
      _proto.every = function every(callback) {
        return this.nodes.every(callback);
      };
      _proto.some = function some(callback) {
        return this.nodes.some(callback);
      };
      _proto.filter = function filter(callback) {
        return this.nodes.filter(callback);
      };
      _proto.sort = function sort(callback) {
        return this.nodes.sort(callback);
      };
      _proto.toString = function toString() {
        return this.map(String).join("");
      };
      _createClass(Container2, [{
        key: "first",
        get: function get() {
          return this.at(0);
        }
      }, {
        key: "last",
        get: function get() {
          return this.at(this.length - 1);
        }
      }, {
        key: "length",
        get: function get() {
          return this.nodes.length;
        }
      }]);
      return Container2;
    }(_node["default"]);
    exports["default"] = Container;
    module.exports = exports.default;
  })(container, container.exports);
  return container.exports;
}
var hasRequiredRoot;
function requireRoot() {
  if (hasRequiredRoot) return root.exports;
  hasRequiredRoot = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(requireContainer());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Root = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Root2, _Container);
      function Root2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.ROOT;
        return _this;
      }
      var _proto = Root2.prototype;
      _proto.toString = function toString() {
        var str = this.reduce(function(memo, selector2) {
          memo.push(String(selector2));
          return memo;
        }, []).join(",");
        return this.trailingComma ? str + "," : str;
      };
      _proto.error = function error(message, options) {
        if (this._error) {
          return this._error(message, options);
        } else {
          return new Error(message);
        }
      };
      _createClass(Root2, [{
        key: "errorGenerator",
        set: function set(handler) {
          this._error = handler;
        }
      }]);
      return Root2;
    }(_container["default"]);
    exports["default"] = Root;
    module.exports = exports.default;
  })(root, root.exports);
  return root.exports;
}
var selector = { exports: {} };
var hasRequiredSelector;
function requireSelector() {
  if (hasRequiredSelector) return selector.exports;
  hasRequiredSelector = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(requireContainer());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Selector = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Selector2, _Container);
      function Selector2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.SELECTOR;
        return _this;
      }
      return Selector2;
    }(_container["default"]);
    exports["default"] = Selector;
    module.exports = exports.default;
  })(selector, selector.exports);
  return selector.exports;
}
var className = { exports: {} };
var hasRequiredClassName;
function requireClassName() {
  if (hasRequiredClassName) return className.exports;
  hasRequiredClassName = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _cssesc = _interopRequireDefault(requireCssesc());
    var _util = requireUtil();
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var ClassName = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(ClassName2, _Node);
      function ClassName2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.CLASS;
        _this._constructed = true;
        return _this;
      }
      var _proto = ClassName2.prototype;
      _proto.valueToString = function valueToString() {
        return "." + _Node.prototype.valueToString.call(this);
      };
      _createClass(ClassName2, [{
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v2) {
          if (this._constructed) {
            var escaped = (0, _cssesc["default"])(v2, {
              isIdentifier: true
            });
            if (escaped !== v2) {
              (0, _util.ensureObject)(this, "raws");
              this.raws.value = escaped;
            } else if (this.raws) {
              delete this.raws.value;
            }
          }
          this._value = v2;
        }
      }]);
      return ClassName2;
    }(_node["default"]);
    exports["default"] = ClassName;
    module.exports = exports.default;
  })(className, className.exports);
  return className.exports;
}
var comment = { exports: {} };
var hasRequiredComment;
function requireComment() {
  if (hasRequiredComment) return comment.exports;
  hasRequiredComment = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Comment = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Comment2, _Node);
      function Comment2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.COMMENT;
        return _this;
      }
      return Comment2;
    }(_node["default"]);
    exports["default"] = Comment;
    module.exports = exports.default;
  })(comment, comment.exports);
  return comment.exports;
}
var id = { exports: {} };
var hasRequiredId;
function requireId() {
  if (hasRequiredId) return id.exports;
  hasRequiredId = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var ID = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(ID2, _Node);
      function ID2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.ID;
        return _this;
      }
      var _proto = ID2.prototype;
      _proto.valueToString = function valueToString() {
        return "#" + _Node.prototype.valueToString.call(this);
      };
      return ID2;
    }(_node["default"]);
    exports["default"] = ID;
    module.exports = exports.default;
  })(id, id.exports);
  return id.exports;
}
var tag = { exports: {} };
var namespace = { exports: {} };
var hasRequiredNamespace;
function requireNamespace() {
  if (hasRequiredNamespace) return namespace.exports;
  hasRequiredNamespace = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _cssesc = _interopRequireDefault(requireCssesc());
    var _util = requireUtil();
    var _node = _interopRequireDefault(requireNode());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Namespace = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Namespace2, _Node);
      function Namespace2() {
        return _Node.apply(this, arguments) || this;
      }
      var _proto = Namespace2.prototype;
      _proto.qualifiedName = function qualifiedName(value) {
        if (this.namespace) {
          return this.namespaceString + "|" + value;
        } else {
          return value;
        }
      };
      _proto.valueToString = function valueToString() {
        return this.qualifiedName(_Node.prototype.valueToString.call(this));
      };
      _createClass(Namespace2, [{
        key: "namespace",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace2) {
          if (namespace2 === true || namespace2 === "*" || namespace2 === "&") {
            this._namespace = namespace2;
            if (this.raws) {
              delete this.raws.namespace;
            }
            return;
          }
          var escaped = (0, _cssesc["default"])(namespace2, {
            isIdentifier: true
          });
          this._namespace = namespace2;
          if (escaped !== namespace2) {
            (0, _util.ensureObject)(this, "raws");
            this.raws.namespace = escaped;
          } else if (this.raws) {
            delete this.raws.namespace;
          }
        }
      }, {
        key: "ns",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace2) {
          this.namespace = namespace2;
        }
      }, {
        key: "namespaceString",
        get: function get() {
          if (this.namespace) {
            var ns2 = this.stringifyProperty("namespace");
            if (ns2 === true) {
              return "";
            } else {
              return ns2;
            }
          } else {
            return "";
          }
        }
      }]);
      return Namespace2;
    }(_node["default"]);
    exports["default"] = Namespace;
    module.exports = exports.default;
  })(namespace, namespace.exports);
  return namespace.exports;
}
var hasRequiredTag;
function requireTag() {
  if (hasRequiredTag) return tag.exports;
  hasRequiredTag = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _namespace = _interopRequireDefault(requireNamespace());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Tag = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Tag2, _Namespace);
      function Tag2(opts) {
        var _this;
        _this = _Namespace.call(this, opts) || this;
        _this.type = _types.TAG;
        return _this;
      }
      return Tag2;
    }(_namespace["default"]);
    exports["default"] = Tag;
    module.exports = exports.default;
  })(tag, tag.exports);
  return tag.exports;
}
var string = { exports: {} };
var hasRequiredString;
function requireString() {
  if (hasRequiredString) return string.exports;
  hasRequiredString = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var String2 = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(String3, _Node);
      function String3(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.STRING;
        return _this;
      }
      return String3;
    }(_node["default"]);
    exports["default"] = String2;
    module.exports = exports.default;
  })(string, string.exports);
  return string.exports;
}
var pseudo = { exports: {} };
var hasRequiredPseudo;
function requirePseudo() {
  if (hasRequiredPseudo) return pseudo.exports;
  hasRequiredPseudo = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(requireContainer());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Pseudo = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Pseudo2, _Container);
      function Pseudo2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.PSEUDO;
        return _this;
      }
      var _proto = Pseudo2.prototype;
      _proto.toString = function toString() {
        var params = this.length ? "(" + this.map(String).join(",") + ")" : "";
        return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join("");
      };
      return Pseudo2;
    }(_container["default"]);
    exports["default"] = Pseudo;
    module.exports = exports.default;
  })(pseudo, pseudo.exports);
  return pseudo.exports;
}
var attribute = {};
var hasRequiredAttribute;
function requireAttribute() {
  if (hasRequiredAttribute) return attribute;
  hasRequiredAttribute = 1;
  (function(exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    exports.unescapeValue = unescapeValue;
    var _cssesc = _interopRequireDefault(requireCssesc());
    var _unesc = _interopRequireDefault(requireUnesc());
    var _namespace = _interopRequireDefault(requireNamespace());
    var _types = requireTypes();
    var _CSSESC_QUOTE_OPTIONS;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var deprecate = requireBrowser();
    var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
    var warnOfDeprecatedValueAssignment = deprecate(function() {
    }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.");
    var warnOfDeprecatedQuotedAssignment = deprecate(function() {
    }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
    var warnOfDeprecatedConstructor = deprecate(function() {
    }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
    function unescapeValue(value) {
      var deprecatedUsage = false;
      var quoteMark = null;
      var unescaped = value;
      var m2 = unescaped.match(WRAPPED_IN_QUOTES);
      if (m2) {
        quoteMark = m2[1];
        unescaped = m2[2];
      }
      unescaped = (0, _unesc["default"])(unescaped);
      if (unescaped !== value) {
        deprecatedUsage = true;
      }
      return {
        deprecatedUsage,
        unescaped,
        quoteMark
      };
    }
    function handleDeprecatedContructorOpts(opts) {
      if (opts.quoteMark !== void 0) {
        return opts;
      }
      if (opts.value === void 0) {
        return opts;
      }
      warnOfDeprecatedConstructor();
      var _unescapeValue = unescapeValue(opts.value), quoteMark = _unescapeValue.quoteMark, unescaped = _unescapeValue.unescaped;
      if (!opts.raws) {
        opts.raws = {};
      }
      if (opts.raws.value === void 0) {
        opts.raws.value = opts.value;
      }
      opts.value = unescaped;
      opts.quoteMark = quoteMark;
      return opts;
    }
    var Attribute = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Attribute2, _Namespace);
      function Attribute2(opts) {
        var _this;
        if (opts === void 0) {
          opts = {};
        }
        _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
        _this.type = _types.ATTRIBUTE;
        _this.raws = _this.raws || {};
        Object.defineProperty(_this.raws, "unquoted", {
          get: deprecate(function() {
            return _this.value;
          }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
          set: deprecate(function() {
            return _this.value;
          }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
        });
        _this._constructed = true;
        return _this;
      }
      var _proto = Attribute2.prototype;
      _proto.getQuotedValue = function getQuotedValue(options) {
        if (options === void 0) {
          options = {};
        }
        var quoteMark = this._determineQuoteMark(options);
        var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
        var escaped = (0, _cssesc["default"])(this._value, cssescopts);
        return escaped;
      };
      _proto._determineQuoteMark = function _determineQuoteMark(options) {
        return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
      };
      _proto.setValue = function setValue(value, options) {
        if (options === void 0) {
          options = {};
        }
        this._value = value;
        this._quoteMark = this._determineQuoteMark(options);
        this._syncRawValue();
      };
      _proto.smartQuoteMark = function smartQuoteMark(options) {
        var v2 = this.value;
        var numSingleQuotes = v2.replace(/[^']/g, "").length;
        var numDoubleQuotes = v2.replace(/[^"]/g, "").length;
        if (numSingleQuotes + numDoubleQuotes === 0) {
          var escaped = (0, _cssesc["default"])(v2, {
            isIdentifier: true
          });
          if (escaped === v2) {
            return Attribute2.NO_QUOTE;
          } else {
            var pref = this.preferredQuoteMark(options);
            if (pref === Attribute2.NO_QUOTE) {
              var quote = this.quoteMark || options.quoteMark || Attribute2.DOUBLE_QUOTE;
              var opts = CSSESC_QUOTE_OPTIONS[quote];
              var quoteValue = (0, _cssesc["default"])(v2, opts);
              if (quoteValue.length < escaped.length) {
                return quote;
              }
            }
            return pref;
          }
        } else if (numDoubleQuotes === numSingleQuotes) {
          return this.preferredQuoteMark(options);
        } else if (numDoubleQuotes < numSingleQuotes) {
          return Attribute2.DOUBLE_QUOTE;
        } else {
          return Attribute2.SINGLE_QUOTE;
        }
      };
      _proto.preferredQuoteMark = function preferredQuoteMark(options) {
        var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
        if (quoteMark === void 0) {
          quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
        }
        if (quoteMark === void 0) {
          quoteMark = Attribute2.DOUBLE_QUOTE;
        }
        return quoteMark;
      };
      _proto._syncRawValue = function _syncRawValue() {
        var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
        if (rawValue === this._value) {
          if (this.raws) {
            delete this.raws.value;
          }
        } else {
          this.raws.value = rawValue;
        }
      };
      _proto._handleEscapes = function _handleEscapes(prop, value) {
        if (this._constructed) {
          var escaped = (0, _cssesc["default"])(value, {
            isIdentifier: true
          });
          if (escaped !== value) {
            this.raws[prop] = escaped;
          } else {
            delete this.raws[prop];
          }
        }
      };
      _proto._spacesFor = function _spacesFor(name) {
        var attrSpaces = {
          before: "",
          after: ""
        };
        var spaces = this.spaces[name] || {};
        var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
        return Object.assign(attrSpaces, spaces, rawSpaces);
      };
      _proto._stringFor = function _stringFor(name, spaceName, concat) {
        if (spaceName === void 0) {
          spaceName = name;
        }
        if (concat === void 0) {
          concat = defaultAttrConcat;
        }
        var attrSpaces = this._spacesFor(spaceName);
        return concat(this.stringifyProperty(name), attrSpaces);
      };
      _proto.offsetOf = function offsetOf(name) {
        var count = 1;
        var attributeSpaces = this._spacesFor("attribute");
        count += attributeSpaces.before.length;
        if (name === "namespace" || name === "ns") {
          return this.namespace ? count : -1;
        }
        if (name === "attributeNS") {
          return count;
        }
        count += this.namespaceString.length;
        if (this.namespace) {
          count += 1;
        }
        if (name === "attribute") {
          return count;
        }
        count += this.stringifyProperty("attribute").length;
        count += attributeSpaces.after.length;
        var operatorSpaces = this._spacesFor("operator");
        count += operatorSpaces.before.length;
        var operator = this.stringifyProperty("operator");
        if (name === "operator") {
          return operator ? count : -1;
        }
        count += operator.length;
        count += operatorSpaces.after.length;
        var valueSpaces = this._spacesFor("value");
        count += valueSpaces.before.length;
        var value = this.stringifyProperty("value");
        if (name === "value") {
          return value ? count : -1;
        }
        count += value.length;
        count += valueSpaces.after.length;
        var insensitiveSpaces = this._spacesFor("insensitive");
        count += insensitiveSpaces.before.length;
        if (name === "insensitive") {
          return this.insensitive ? count : -1;
        }
        return -1;
      };
      _proto.toString = function toString() {
        var _this2 = this;
        var selector2 = [this.rawSpaceBefore, "["];
        selector2.push(this._stringFor("qualifiedAttribute", "attribute"));
        if (this.operator && (this.value || this.value === "")) {
          selector2.push(this._stringFor("operator"));
          selector2.push(this._stringFor("value"));
          selector2.push(this._stringFor("insensitiveFlag", "insensitive", function(attrValue, attrSpaces) {
            if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
              attrSpaces.before = " ";
            }
            return defaultAttrConcat(attrValue, attrSpaces);
          }));
        }
        selector2.push("]");
        selector2.push(this.rawSpaceAfter);
        return selector2.join("");
      };
      _createClass(Attribute2, [{
        key: "quoted",
        get: function get() {
          var qm = this.quoteMark;
          return qm === "'" || qm === '"';
        },
        set: function set(value) {
          warnOfDeprecatedQuotedAssignment();
        }
        /**
         * returns a single (`'`) or double (`"`) quote character if the value is quoted.
         * returns `null` if the value is not quoted.
         * returns `undefined` if the quotation state is unknown (this can happen when
         * the attribute is constructed without specifying a quote mark.)
         */
      }, {
        key: "quoteMark",
        get: function get() {
          return this._quoteMark;
        },
        set: function set(quoteMark) {
          if (!this._constructed) {
            this._quoteMark = quoteMark;
            return;
          }
          if (this._quoteMark !== quoteMark) {
            this._quoteMark = quoteMark;
            this._syncRawValue();
          }
        }
      }, {
        key: "qualifiedAttribute",
        get: function get() {
          return this.qualifiedName(this.raws.attribute || this.attribute);
        }
      }, {
        key: "insensitiveFlag",
        get: function get() {
          return this.insensitive ? "i" : "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: (
          /**
           * Before 3.0, the value had to be set to an escaped value including any wrapped
           * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
           * is unescaped during parsing and any quote marks are removed.
           *
           * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
           * a deprecation warning is raised when the new value contains any characters that would
           * require escaping (including if it contains wrapped quotes).
           *
           * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
           * how the new value is quoted.
           */
          function set(v2) {
            if (this._constructed) {
              var _unescapeValue2 = unescapeValue(v2), deprecatedUsage = _unescapeValue2.deprecatedUsage, unescaped = _unescapeValue2.unescaped, quoteMark = _unescapeValue2.quoteMark;
              if (deprecatedUsage) {
                warnOfDeprecatedValueAssignment();
              }
              if (unescaped === this._value && quoteMark === this._quoteMark) {
                return;
              }
              this._value = unescaped;
              this._quoteMark = quoteMark;
              this._syncRawValue();
            } else {
              this._value = v2;
            }
          }
        )
      }, {
        key: "insensitive",
        get: function get() {
          return this._insensitive;
        },
        set: function set(insensitive) {
          if (!insensitive) {
            this._insensitive = false;
            if (this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i")) {
              this.raws.insensitiveFlag = void 0;
            }
          }
          this._insensitive = insensitive;
        }
      }, {
        key: "attribute",
        get: function get() {
          return this._attribute;
        },
        set: function set(name) {
          this._handleEscapes("attribute", name);
          this._attribute = name;
        }
      }]);
      return Attribute2;
    }(_namespace["default"]);
    exports["default"] = Attribute;
    Attribute.NO_QUOTE = null;
    Attribute.SINGLE_QUOTE = "'";
    Attribute.DOUBLE_QUOTE = '"';
    var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
      "'": {
        quotes: "single",
        wrap: true
      },
      '"': {
        quotes: "double",
        wrap: true
      }
    }, _CSSESC_QUOTE_OPTIONS[null] = {
      isIdentifier: true
    }, _CSSESC_QUOTE_OPTIONS);
    function defaultAttrConcat(attrValue, attrSpaces) {
      return "" + attrSpaces.before + attrValue + attrSpaces.after;
    }
  })(attribute);
  return attribute;
}
var universal = { exports: {} };
var hasRequiredUniversal;
function requireUniversal() {
  if (hasRequiredUniversal) return universal.exports;
  hasRequiredUniversal = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _namespace = _interopRequireDefault(requireNamespace());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Universal = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Universal2, _Namespace);
      function Universal2(opts) {
        var _this;
        _this = _Namespace.call(this, opts) || this;
        _this.type = _types.UNIVERSAL;
        _this.value = "*";
        return _this;
      }
      return Universal2;
    }(_namespace["default"]);
    exports["default"] = Universal;
    module.exports = exports.default;
  })(universal, universal.exports);
  return universal.exports;
}
var combinator = { exports: {} };
var hasRequiredCombinator;
function requireCombinator() {
  if (hasRequiredCombinator) return combinator.exports;
  hasRequiredCombinator = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Combinator = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Combinator2, _Node);
      function Combinator2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.COMBINATOR;
        return _this;
      }
      return Combinator2;
    }(_node["default"]);
    exports["default"] = Combinator;
    module.exports = exports.default;
  })(combinator, combinator.exports);
  return combinator.exports;
}
var nesting = { exports: {} };
var hasRequiredNesting;
function requireNesting() {
  if (hasRequiredNesting) return nesting.exports;
  hasRequiredNesting = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(requireNode());
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    var Nesting = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Nesting2, _Node);
      function Nesting2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.NESTING;
        _this.value = "&";
        return _this;
      }
      return Nesting2;
    }(_node["default"]);
    exports["default"] = Nesting;
    module.exports = exports.default;
  })(nesting, nesting.exports);
  return nesting.exports;
}
var sortAscending = { exports: {} };
var hasRequiredSortAscending;
function requireSortAscending() {
  if (hasRequiredSortAscending) return sortAscending.exports;
  hasRequiredSortAscending = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = sortAscending2;
    function sortAscending2(list) {
      return list.sort(function(a2, b2) {
        return a2 - b2;
      });
    }
    module.exports = exports.default;
  })(sortAscending, sortAscending.exports);
  return sortAscending.exports;
}
var tokenize = {};
var tokenTypes = {};
var hasRequiredTokenTypes;
function requireTokenTypes() {
  if (hasRequiredTokenTypes) return tokenTypes;
  hasRequiredTokenTypes = 1;
  tokenTypes.__esModule = true;
  tokenTypes.word = tokenTypes.tilde = tokenTypes.tab = tokenTypes.str = tokenTypes.space = tokenTypes.slash = tokenTypes.singleQuote = tokenTypes.semicolon = tokenTypes.plus = tokenTypes.pipe = tokenTypes.openSquare = tokenTypes.openParenthesis = tokenTypes.newline = tokenTypes.greaterThan = tokenTypes.feed = tokenTypes.equals = tokenTypes.doubleQuote = tokenTypes.dollar = tokenTypes.cr = tokenTypes.comment = tokenTypes.comma = tokenTypes.combinator = tokenTypes.colon = tokenTypes.closeSquare = tokenTypes.closeParenthesis = tokenTypes.caret = tokenTypes.bang = tokenTypes.backslash = tokenTypes.at = tokenTypes.asterisk = tokenTypes.ampersand = void 0;
  var ampersand = 38;
  tokenTypes.ampersand = ampersand;
  var asterisk = 42;
  tokenTypes.asterisk = asterisk;
  var at2 = 64;
  tokenTypes.at = at2;
  var comma = 44;
  tokenTypes.comma = comma;
  var colon = 58;
  tokenTypes.colon = colon;
  var semicolon = 59;
  tokenTypes.semicolon = semicolon;
  var openParenthesis = 40;
  tokenTypes.openParenthesis = openParenthesis;
  var closeParenthesis = 41;
  tokenTypes.closeParenthesis = closeParenthesis;
  var openSquare = 91;
  tokenTypes.openSquare = openSquare;
  var closeSquare = 93;
  tokenTypes.closeSquare = closeSquare;
  var dollar = 36;
  tokenTypes.dollar = dollar;
  var tilde = 126;
  tokenTypes.tilde = tilde;
  var caret = 94;
  tokenTypes.caret = caret;
  var plus = 43;
  tokenTypes.plus = plus;
  var equals = 61;
  tokenTypes.equals = equals;
  var pipe = 124;
  tokenTypes.pipe = pipe;
  var greaterThan = 62;
  tokenTypes.greaterThan = greaterThan;
  var space = 32;
  tokenTypes.space = space;
  var singleQuote = 39;
  tokenTypes.singleQuote = singleQuote;
  var doubleQuote = 34;
  tokenTypes.doubleQuote = doubleQuote;
  var slash = 47;
  tokenTypes.slash = slash;
  var bang = 33;
  tokenTypes.bang = bang;
  var backslash = 92;
  tokenTypes.backslash = backslash;
  var cr = 13;
  tokenTypes.cr = cr;
  var feed = 12;
  tokenTypes.feed = feed;
  var newline = 10;
  tokenTypes.newline = newline;
  var tab = 9;
  tokenTypes.tab = tab;
  var str = singleQuote;
  tokenTypes.str = str;
  var comment2 = -1;
  tokenTypes.comment = comment2;
  var word = -2;
  tokenTypes.word = word;
  var combinator2 = -3;
  tokenTypes.combinator = combinator2;
  return tokenTypes;
}
var hasRequiredTokenize;
function requireTokenize() {
  if (hasRequiredTokenize) return tokenize;
  hasRequiredTokenize = 1;
  (function(exports) {
    exports.__esModule = true;
    exports.FIELDS = void 0;
    exports["default"] = tokenize2;
    var t2 = _interopRequireWildcard(requireTokenTypes());
    var _unescapable, _wordDelimiters;
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var unescapable = (_unescapable = {}, _unescapable[t2.tab] = true, _unescapable[t2.newline] = true, _unescapable[t2.cr] = true, _unescapable[t2.feed] = true, _unescapable);
    var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t2.space] = true, _wordDelimiters[t2.tab] = true, _wordDelimiters[t2.newline] = true, _wordDelimiters[t2.cr] = true, _wordDelimiters[t2.feed] = true, _wordDelimiters[t2.ampersand] = true, _wordDelimiters[t2.asterisk] = true, _wordDelimiters[t2.bang] = true, _wordDelimiters[t2.comma] = true, _wordDelimiters[t2.colon] = true, _wordDelimiters[t2.semicolon] = true, _wordDelimiters[t2.openParenthesis] = true, _wordDelimiters[t2.closeParenthesis] = true, _wordDelimiters[t2.openSquare] = true, _wordDelimiters[t2.closeSquare] = true, _wordDelimiters[t2.singleQuote] = true, _wordDelimiters[t2.doubleQuote] = true, _wordDelimiters[t2.plus] = true, _wordDelimiters[t2.pipe] = true, _wordDelimiters[t2.tilde] = true, _wordDelimiters[t2.greaterThan] = true, _wordDelimiters[t2.equals] = true, _wordDelimiters[t2.dollar] = true, _wordDelimiters[t2.caret] = true, _wordDelimiters[t2.slash] = true, _wordDelimiters);
    var hex = {};
    var hexChars = "0123456789abcdefABCDEF";
    for (var i2 = 0; i2 < hexChars.length; i2++) {
      hex[hexChars.charCodeAt(i2)] = true;
    }
    function consumeWord(css, start) {
      var next = start;
      var code;
      do {
        code = css.charCodeAt(next);
        if (wordDelimiters[code]) {
          return next - 1;
        } else if (code === t2.backslash) {
          next = consumeEscape(css, next) + 1;
        } else {
          next++;
        }
      } while (next < css.length);
      return next - 1;
    }
    function consumeEscape(css, start) {
      var next = start;
      var code = css.charCodeAt(next + 1);
      if (unescapable[code]) ;
      else if (hex[code]) {
        var hexDigits = 0;
        do {
          next++;
          hexDigits++;
          code = css.charCodeAt(next + 1);
        } while (hex[code] && hexDigits < 6);
        if (hexDigits < 6 && code === t2.space) {
          next++;
        }
      } else {
        next++;
      }
      return next;
    }
    var FIELDS = {
      TYPE: 0,
      START_LINE: 1,
      START_COL: 2,
      END_LINE: 3,
      END_COL: 4,
      START_POS: 5,
      END_POS: 6
    };
    exports.FIELDS = FIELDS;
    function tokenize2(input) {
      var tokens = [];
      var css = input.css.valueOf();
      var _css = css, length = _css.length;
      var offset = -1;
      var line = 1;
      var start = 0;
      var end = 0;
      var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
      function unclosed(what, fix) {
        if (input.safe) {
          css += fix;
          next = css.length - 1;
        } else {
          throw input.error("Unclosed " + what, line, start - offset, start);
        }
      }
      while (start < length) {
        code = css.charCodeAt(start);
        if (code === t2.newline) {
          offset = start;
          line += 1;
        }
        switch (code) {
          case t2.space:
          case t2.tab:
          case t2.newline:
          case t2.cr:
          case t2.feed:
            next = start;
            do {
              next += 1;
              code = css.charCodeAt(next);
              if (code === t2.newline) {
                offset = next;
                line += 1;
              }
            } while (code === t2.space || code === t2.newline || code === t2.tab || code === t2.cr || code === t2.feed);
            tokenType = t2.space;
            endLine = line;
            endColumn = next - offset - 1;
            end = next;
            break;
          case t2.plus:
          case t2.greaterThan:
          case t2.tilde:
          case t2.pipe:
            next = start;
            do {
              next += 1;
              code = css.charCodeAt(next);
            } while (code === t2.plus || code === t2.greaterThan || code === t2.tilde || code === t2.pipe);
            tokenType = t2.combinator;
            endLine = line;
            endColumn = start - offset;
            end = next;
            break;
          // Consume these characters as single tokens.
          case t2.asterisk:
          case t2.ampersand:
          case t2.bang:
          case t2.comma:
          case t2.equals:
          case t2.dollar:
          case t2.caret:
          case t2.openSquare:
          case t2.closeSquare:
          case t2.colon:
          case t2.semicolon:
          case t2.openParenthesis:
          case t2.closeParenthesis:
            next = start;
            tokenType = code;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;
          case t2.singleQuote:
          case t2.doubleQuote:
            quote = code === t2.singleQuote ? "'" : '"';
            next = start;
            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);
              if (next === -1) {
                unclosed("quote", quote);
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === t2.backslash) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            tokenType = t2.str;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;
          default:
            if (code === t2.slash && css.charCodeAt(start + 1) === t2.asterisk) {
              next = css.indexOf("*/", start + 2) + 1;
              if (next === 0) {
                unclosed("comment", "*/");
              }
              content = css.slice(start, next + 1);
              lines = content.split("\n");
              last = lines.length - 1;
              if (last > 0) {
                nextLine = line + last;
                nextOffset = next - lines[last].length;
              } else {
                nextLine = line;
                nextOffset = offset;
              }
              tokenType = t2.comment;
              line = nextLine;
              endLine = nextLine;
              endColumn = next - nextOffset;
            } else if (code === t2.slash) {
              next = start;
              tokenType = code;
              endLine = line;
              endColumn = start - offset;
              end = next + 1;
            } else {
              next = consumeWord(css, start);
              tokenType = t2.word;
              endLine = line;
              endColumn = next - offset;
            }
            end = next + 1;
            break;
        }
        tokens.push([
          tokenType,
          // [0] Token type
          line,
          // [1] Starting line
          start - offset,
          // [2] Starting column
          endLine,
          // [3] Ending line
          endColumn,
          // [4] Ending column
          start,
          // [5] Start position / Source index
          end
          // [6] End position
        ]);
        if (nextOffset) {
          offset = nextOffset;
          nextOffset = null;
        }
        start = end;
      }
      return tokens;
    }
  })(tokenize);
  return tokenize;
}
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser.exports;
  hasRequiredParser = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _root = _interopRequireDefault(requireRoot());
    var _selector = _interopRequireDefault(requireSelector());
    var _className = _interopRequireDefault(requireClassName());
    var _comment = _interopRequireDefault(requireComment());
    var _id = _interopRequireDefault(requireId());
    var _tag = _interopRequireDefault(requireTag());
    var _string = _interopRequireDefault(requireString());
    var _pseudo = _interopRequireDefault(requirePseudo());
    var _attribute = _interopRequireWildcard(requireAttribute());
    var _universal = _interopRequireDefault(requireUniversal());
    var _combinator = _interopRequireDefault(requireCombinator());
    var _nesting = _interopRequireDefault(requireNesting());
    var _sortAscending = _interopRequireDefault(requireSortAscending());
    var _tokenize = _interopRequireWildcard(requireTokenize());
    var tokens = _interopRequireWildcard(requireTokenTypes());
    var types2 = _interopRequireWildcard(requireTypes());
    var _util = requireUtil();
    var _WHITESPACE_TOKENS, _Object$assign;
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
    var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
    function tokenStart(token) {
      return {
        line: token[_tokenize.FIELDS.START_LINE],
        column: token[_tokenize.FIELDS.START_COL]
      };
    }
    function tokenEnd(token) {
      return {
        line: token[_tokenize.FIELDS.END_LINE],
        column: token[_tokenize.FIELDS.END_COL]
      };
    }
    function getSource(startLine, startColumn, endLine, endColumn) {
      return {
        start: {
          line: startLine,
          column: startColumn
        },
        end: {
          line: endLine,
          column: endColumn
        }
      };
    }
    function getTokenSource(token) {
      return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
    }
    function getTokenSourceSpan(startToken, endToken) {
      if (!startToken) {
        return void 0;
      }
      return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
    }
    function unescapeProp(node2, prop) {
      var value = node2[prop];
      if (typeof value !== "string") {
        return;
      }
      if (value.indexOf("\\") !== -1) {
        (0, _util.ensureObject)(node2, "raws");
        node2[prop] = (0, _util.unesc)(value);
        if (node2.raws[prop] === void 0) {
          node2.raws[prop] = value;
        }
      }
      return node2;
    }
    function indexesOf(array, item) {
      var i2 = -1;
      var indexes = [];
      while ((i2 = array.indexOf(item, i2 + 1)) !== -1) {
        indexes.push(i2);
      }
      return indexes;
    }
    function uniqs() {
      var list = Array.prototype.concat.apply([], arguments);
      return list.filter(function(item, i2) {
        return i2 === list.indexOf(item);
      });
    }
    var Parser = /* @__PURE__ */ function() {
      function Parser2(rule, options) {
        if (options === void 0) {
          options = {};
        }
        this.rule = rule;
        this.options = Object.assign({
          lossy: false,
          safe: false
        }, options);
        this.position = 0;
        this.css = typeof this.rule === "string" ? this.rule : this.rule.selector;
        this.tokens = (0, _tokenize["default"])({
          css: this.css,
          error: this._errorGenerator(),
          safe: this.options.safe
        });
        var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
        this.root = new _root["default"]({
          source: rootSource
        });
        this.root.errorGenerator = this._errorGenerator();
        var selector2 = new _selector["default"]({
          source: {
            start: {
              line: 1,
              column: 1
            }
          },
          sourceIndex: 0
        });
        this.root.append(selector2);
        this.current = selector2;
        this.loop();
      }
      var _proto = Parser2.prototype;
      _proto._errorGenerator = function _errorGenerator() {
        var _this = this;
        return function(message, errorOptions) {
          if (typeof _this.rule === "string") {
            return new Error(message);
          }
          return _this.rule.error(message, errorOptions);
        };
      };
      _proto.attribute = function attribute2() {
        var attr = [];
        var startingToken = this.currToken;
        this.position++;
        while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          attr.push(this.currToken);
          this.position++;
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          return this.expected("closing square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
        }
        var len = attr.length;
        var node2 = {
          source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
        };
        if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
          return this.expected("attribute", attr[0][_tokenize.FIELDS.START_POS]);
        }
        var pos = 0;
        var spaceBefore = "";
        var commentBefore = "";
        var lastAdded = null;
        var spaceAfterMeaningfulToken = false;
        while (pos < len) {
          var token = attr[pos];
          var content = this.content(token);
          var next = attr[pos + 1];
          switch (token[_tokenize.FIELDS.TYPE]) {
            case tokens.space:
              spaceAfterMeaningfulToken = true;
              if (this.options.lossy) {
                break;
              }
              if (lastAdded) {
                (0, _util.ensureObject)(node2, "spaces", lastAdded);
                var prevContent = node2.spaces[lastAdded].after || "";
                node2.spaces[lastAdded].after = prevContent + content;
                var existingComment = (0, _util.getProp)(node2, "raws", "spaces", lastAdded, "after") || null;
                if (existingComment) {
                  node2.raws.spaces[lastAdded].after = existingComment + content;
                }
              } else {
                spaceBefore = spaceBefore + content;
                commentBefore = commentBefore + content;
              }
              break;
            case tokens.asterisk:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node2.operator = content;
                lastAdded = "operator";
              } else if ((!node2.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
                if (spaceBefore) {
                  (0, _util.ensureObject)(node2, "spaces", "attribute");
                  node2.spaces.attribute.before = spaceBefore;
                  spaceBefore = "";
                }
                if (commentBefore) {
                  (0, _util.ensureObject)(node2, "raws", "spaces", "attribute");
                  node2.raws.spaces.attribute.before = spaceBefore;
                  commentBefore = "";
                }
                node2.namespace = (node2.namespace || "") + content;
                var rawValue = (0, _util.getProp)(node2, "raws", "namespace") || null;
                if (rawValue) {
                  node2.raws.namespace += content;
                }
                lastAdded = "namespace";
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.dollar:
              if (lastAdded === "value") {
                var oldRawValue = (0, _util.getProp)(node2, "raws", "value");
                node2.value += "$";
                if (oldRawValue) {
                  node2.raws.value = oldRawValue + "$";
                }
                break;
              }
            // Falls through
            case tokens.caret:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node2.operator = content;
                lastAdded = "operator";
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.combinator:
              if (content === "~" && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node2.operator = content;
                lastAdded = "operator";
              }
              if (content !== "|") {
                spaceAfterMeaningfulToken = false;
                break;
              }
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node2.operator = content;
                lastAdded = "operator";
              } else if (!node2.namespace && !node2.attribute) {
                node2.namespace = true;
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.word:
              if (next && this.content(next) === "|" && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && // this look-ahead probably fails with comment nodes involved.
              !node2.operator && !node2.namespace) {
                node2.namespace = content;
                lastAdded = "namespace";
              } else if (!node2.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
                if (spaceBefore) {
                  (0, _util.ensureObject)(node2, "spaces", "attribute");
                  node2.spaces.attribute.before = spaceBefore;
                  spaceBefore = "";
                }
                if (commentBefore) {
                  (0, _util.ensureObject)(node2, "raws", "spaces", "attribute");
                  node2.raws.spaces.attribute.before = commentBefore;
                  commentBefore = "";
                }
                node2.attribute = (node2.attribute || "") + content;
                var _rawValue = (0, _util.getProp)(node2, "raws", "attribute") || null;
                if (_rawValue) {
                  node2.raws.attribute += content;
                }
                lastAdded = "attribute";
              } else if (!node2.value && node2.value !== "" || lastAdded === "value" && !(spaceAfterMeaningfulToken || node2.quoteMark)) {
                var _unescaped = (0, _util.unesc)(content);
                var _oldRawValue = (0, _util.getProp)(node2, "raws", "value") || "";
                var oldValue = node2.value || "";
                node2.value = oldValue + _unescaped;
                node2.quoteMark = null;
                if (_unescaped !== content || _oldRawValue) {
                  (0, _util.ensureObject)(node2, "raws");
                  node2.raws.value = (_oldRawValue || oldValue) + content;
                }
                lastAdded = "value";
              } else {
                var insensitive = content === "i" || content === "I";
                if ((node2.value || node2.value === "") && (node2.quoteMark || spaceAfterMeaningfulToken)) {
                  node2.insensitive = insensitive;
                  if (!insensitive || content === "I") {
                    (0, _util.ensureObject)(node2, "raws");
                    node2.raws.insensitiveFlag = content;
                  }
                  lastAdded = "insensitive";
                  if (spaceBefore) {
                    (0, _util.ensureObject)(node2, "spaces", "insensitive");
                    node2.spaces.insensitive.before = spaceBefore;
                    spaceBefore = "";
                  }
                  if (commentBefore) {
                    (0, _util.ensureObject)(node2, "raws", "spaces", "insensitive");
                    node2.raws.spaces.insensitive.before = commentBefore;
                    commentBefore = "";
                  }
                } else if (node2.value || node2.value === "") {
                  lastAdded = "value";
                  node2.value += content;
                  if (node2.raws.value) {
                    node2.raws.value += content;
                  }
                }
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.str:
              if (!node2.attribute || !node2.operator) {
                return this.error("Expected an attribute followed by an operator preceding the string.", {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }
              var _unescapeValue = (0, _attribute.unescapeValue)(content), unescaped = _unescapeValue.unescaped, quoteMark = _unescapeValue.quoteMark;
              node2.value = unescaped;
              node2.quoteMark = quoteMark;
              lastAdded = "value";
              (0, _util.ensureObject)(node2, "raws");
              node2.raws.value = content;
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.equals:
              if (!node2.attribute) {
                return this.expected("attribute", token[_tokenize.FIELDS.START_POS], content);
              }
              if (node2.value) {
                return this.error('Unexpected "=" found; an operator was already defined.', {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }
              node2.operator = node2.operator ? node2.operator + content : content;
              lastAdded = "operator";
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.comment:
              if (lastAdded) {
                if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === "insensitive") {
                  var lastComment = (0, _util.getProp)(node2, "spaces", lastAdded, "after") || "";
                  var rawLastComment = (0, _util.getProp)(node2, "raws", "spaces", lastAdded, "after") || lastComment;
                  (0, _util.ensureObject)(node2, "raws", "spaces", lastAdded);
                  node2.raws.spaces[lastAdded].after = rawLastComment + content;
                } else {
                  var lastValue = node2[lastAdded] || "";
                  var rawLastValue = (0, _util.getProp)(node2, "raws", lastAdded) || lastValue;
                  (0, _util.ensureObject)(node2, "raws");
                  node2.raws[lastAdded] = rawLastValue + content;
                }
              } else {
                commentBefore = commentBefore + content;
              }
              break;
            default:
              return this.error('Unexpected "' + content + '" found.', {
                index: token[_tokenize.FIELDS.START_POS]
              });
          }
          pos++;
        }
        unescapeProp(node2, "attribute");
        unescapeProp(node2, "namespace");
        this.newNode(new _attribute["default"](node2));
        this.position++;
      };
      _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
        if (stopPosition < 0) {
          stopPosition = this.tokens.length;
        }
        var startPosition = this.position;
        var nodes = [];
        var space = "";
        var lastComment = void 0;
        do {
          if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
            if (!this.options.lossy) {
              space += this.content();
            }
          } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
            var spaces = {};
            if (space) {
              spaces.before = space;
              space = "";
            }
            lastComment = new _comment["default"]({
              value: this.content(),
              source: getTokenSource(this.currToken),
              sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
              spaces
            });
            nodes.push(lastComment);
          }
        } while (++this.position < stopPosition);
        if (space) {
          if (lastComment) {
            lastComment.spaces.after = space;
          } else if (!this.options.lossy) {
            var firstToken = this.tokens[startPosition];
            var lastToken = this.tokens[this.position - 1];
            nodes.push(new _string["default"]({
              value: "",
              source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
              sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
              spaces: {
                before: space,
                after: ""
              }
            }));
          }
        }
        return nodes;
      };
      _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
        var _this2 = this;
        if (requiredSpace === void 0) {
          requiredSpace = false;
        }
        var space = "";
        var rawSpace = "";
        nodes.forEach(function(n2) {
          var spaceBefore = _this2.lossySpace(n2.spaces.before, requiredSpace);
          var rawSpaceBefore = _this2.lossySpace(n2.rawSpaceBefore, requiredSpace);
          space += spaceBefore + _this2.lossySpace(n2.spaces.after, requiredSpace && spaceBefore.length === 0);
          rawSpace += spaceBefore + n2.value + _this2.lossySpace(n2.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
        });
        if (rawSpace === space) {
          rawSpace = void 0;
        }
        var result = {
          space,
          rawSpace
        };
        return result;
      };
      _proto.isNamedCombinator = function isNamedCombinator(position) {
        if (position === void 0) {
          position = this.position;
        }
        return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
      };
      _proto.namedCombinator = function namedCombinator() {
        if (this.isNamedCombinator()) {
          var nameRaw = this.content(this.tokens[this.position + 1]);
          var name = (0, _util.unesc)(nameRaw).toLowerCase();
          var raws = {};
          if (name !== nameRaw) {
            raws.value = "/" + nameRaw + "/";
          }
          var node2 = new _combinator["default"]({
            value: "/" + name + "/",
            source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
            raws
          });
          this.position = this.position + 3;
          return node2;
        } else {
          this.unexpected();
        }
      };
      _proto.combinator = function combinator2() {
        var _this3 = this;
        if (this.content() === "|") {
          return this.namespace();
        }
        var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
        if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
          if (nodes.length > 0) {
            var last = this.current.last;
            if (last) {
              var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes), space = _this$convertWhitespa.space, rawSpace = _this$convertWhitespa.rawSpace;
              if (rawSpace !== void 0) {
                last.rawSpaceAfter += rawSpace;
              }
              last.spaces.after += space;
            } else {
              nodes.forEach(function(n2) {
                return _this3.newNode(n2);
              });
            }
          }
          return;
        }
        var firstToken = this.currToken;
        var spaceOrDescendantSelectorNodes = void 0;
        if (nextSigTokenPos > this.position) {
          spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
        }
        var node2;
        if (this.isNamedCombinator()) {
          node2 = this.namedCombinator();
        } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
          node2 = new _combinator["default"]({
            value: this.content(),
            source: getTokenSource(this.currToken),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
          });
          this.position++;
        } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) ;
        else if (!spaceOrDescendantSelectorNodes) {
          this.unexpected();
        }
        if (node2) {
          if (spaceOrDescendantSelectorNodes) {
            var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes), _space = _this$convertWhitespa2.space, _rawSpace = _this$convertWhitespa2.rawSpace;
            node2.spaces.before = _space;
            node2.rawSpaceBefore = _rawSpace;
          }
        } else {
          var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true), _space2 = _this$convertWhitespa3.space, _rawSpace2 = _this$convertWhitespa3.rawSpace;
          if (!_rawSpace2) {
            _rawSpace2 = _space2;
          }
          var spaces = {};
          var raws = {
            spaces: {}
          };
          if (_space2.endsWith(" ") && _rawSpace2.endsWith(" ")) {
            spaces.before = _space2.slice(0, _space2.length - 1);
            raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
          } else if (_space2.startsWith(" ") && _rawSpace2.startsWith(" ")) {
            spaces.after = _space2.slice(1);
            raws.spaces.after = _rawSpace2.slice(1);
          } else {
            raws.value = _rawSpace2;
          }
          node2 = new _combinator["default"]({
            value: " ",
            source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
            sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
            spaces,
            raws
          });
        }
        if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
          node2.spaces.after = this.optionalSpace(this.content());
          this.position++;
        }
        return this.newNode(node2);
      };
      _proto.comma = function comma() {
        if (this.position === this.tokens.length - 1) {
          this.root.trailingComma = true;
          this.position++;
          return;
        }
        this.current._inferEndPosition();
        var selector2 = new _selector["default"]({
          source: {
            start: tokenStart(this.tokens[this.position + 1])
          },
          sourceIndex: this.tokens[this.position + 1][_tokenize.FIELDS.START_POS]
        });
        this.current.parent.append(selector2);
        this.current = selector2;
        this.position++;
      };
      _proto.comment = function comment2() {
        var current = this.currToken;
        this.newNode(new _comment["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.error = function error(message, opts) {
        throw this.root.error(message, opts);
      };
      _proto.missingBackslash = function missingBackslash() {
        return this.error("Expected a backslash preceding the semicolon.", {
          index: this.currToken[_tokenize.FIELDS.START_POS]
        });
      };
      _proto.missingParenthesis = function missingParenthesis() {
        return this.expected("opening parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.missingSquareBracket = function missingSquareBracket() {
        return this.expected("opening square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.unexpected = function unexpected() {
        return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.unexpectedPipe = function unexpectedPipe() {
        return this.error("Unexpected '|'.", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.namespace = function namespace2() {
        var before = this.prevToken && this.content(this.prevToken) || true;
        if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.position++;
          return this.word(before);
        } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
          this.position++;
          return this.universal(before);
        }
        this.unexpectedPipe();
      };
      _proto.nesting = function nesting2() {
        if (this.nextToken) {
          var nextContent = this.content(this.nextToken);
          if (nextContent === "|") {
            this.position++;
            return;
          }
        }
        var current = this.currToken;
        this.newNode(new _nesting["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.parentheses = function parentheses() {
        var last = this.current.last;
        var unbalanced = 1;
        this.position++;
        if (last && last.type === types2.PSEUDO) {
          var selector2 = new _selector["default"]({
            source: {
              start: tokenStart(this.tokens[this.position])
            },
            sourceIndex: this.tokens[this.position][_tokenize.FIELDS.START_POS]
          });
          var cache = this.current;
          last.append(selector2);
          this.current = selector2;
          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }
            if (unbalanced) {
              this.parse();
            } else {
              this.current.source.end = tokenEnd(this.currToken);
              this.current.parent.source.end = tokenEnd(this.currToken);
              this.position++;
            }
          }
          this.current = cache;
        } else {
          var parenStart = this.currToken;
          var parenValue = "(";
          var parenEnd;
          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }
            parenEnd = this.currToken;
            parenValue += this.parseParenthesisToken(this.currToken);
            this.position++;
          }
          if (last) {
            last.appendToPropertyAndEscape("value", parenValue, parenValue);
          } else {
            this.newNode(new _string["default"]({
              value: parenValue,
              source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
              sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
            }));
          }
        }
        if (unbalanced) {
          return this.expected("closing parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };
      _proto.pseudo = function pseudo2() {
        var _this4 = this;
        var pseudoStr = "";
        var startingToken = this.currToken;
        while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
          pseudoStr += this.content();
          this.position++;
        }
        if (!this.currToken) {
          return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.splitWord(false, function(first, length) {
            pseudoStr += first;
            _this4.newNode(new _pseudo["default"]({
              value: pseudoStr,
              source: getTokenSourceSpan(startingToken, _this4.currToken),
              sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
            }));
            if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              _this4.error("Misplaced parenthesis.", {
                index: _this4.nextToken[_tokenize.FIELDS.START_POS]
              });
            }
          });
        } else {
          return this.expected(["pseudo-class", "pseudo-element"], this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };
      _proto.space = function space() {
        var content = this.content();
        if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function(node2) {
          return node2.type === "comment";
        })) {
          this.spaces = this.optionalSpace(content);
          this.position++;
        } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          this.current.last.spaces.after = this.optionalSpace(content);
          this.position++;
        } else {
          this.combinator();
        }
      };
      _proto.string = function string2() {
        var current = this.currToken;
        this.newNode(new _string["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.universal = function universal2(namespace2) {
        var nextToken = this.nextToken;
        if (nextToken && this.content(nextToken) === "|") {
          this.position++;
          return this.namespace();
        }
        var current = this.currToken;
        this.newNode(new _universal["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }), namespace2);
        this.position++;
      };
      _proto.splitWord = function splitWord(namespace2, firstCallback) {
        var _this5 = this;
        var nextToken = this.nextToken;
        var word = this.content();
        while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
          this.position++;
          var current = this.content();
          word += current;
          if (current.lastIndexOf("\\") === current.length - 1) {
            var next = this.nextToken;
            if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
              word += this.requiredSpace(this.content(next));
              this.position++;
            }
          }
          nextToken = this.nextToken;
        }
        var hasClass = indexesOf(word, ".").filter(function(i2) {
          var escapedDot = word[i2 - 1] === "\\";
          var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
          return !escapedDot && !isKeyframesPercent;
        });
        var hasId = indexesOf(word, "#").filter(function(i2) {
          return word[i2 - 1] !== "\\";
        });
        var interpolations = indexesOf(word, "#{");
        if (interpolations.length) {
          hasId = hasId.filter(function(hashIndex) {
            return !~interpolations.indexOf(hashIndex);
          });
        }
        var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
        indices.forEach(function(ind, i2) {
          var index = indices[i2 + 1] || word.length;
          var value = word.slice(ind, index);
          if (i2 === 0 && firstCallback) {
            return firstCallback.call(_this5, value, indices.length);
          }
          var node2;
          var current2 = _this5.currToken;
          var sourceIndex = current2[_tokenize.FIELDS.START_POS] + indices[i2];
          var source = getSource(current2[1], current2[2] + ind, current2[3], current2[2] + (index - 1));
          if (~hasClass.indexOf(ind)) {
            var classNameOpts = {
              value: value.slice(1),
              source,
              sourceIndex
            };
            node2 = new _className["default"](unescapeProp(classNameOpts, "value"));
          } else if (~hasId.indexOf(ind)) {
            var idOpts = {
              value: value.slice(1),
              source,
              sourceIndex
            };
            node2 = new _id["default"](unescapeProp(idOpts, "value"));
          } else {
            var tagOpts = {
              value,
              source,
              sourceIndex
            };
            unescapeProp(tagOpts, "value");
            node2 = new _tag["default"](tagOpts);
          }
          _this5.newNode(node2, namespace2);
          namespace2 = null;
        });
        this.position++;
      };
      _proto.word = function word(namespace2) {
        var nextToken = this.nextToken;
        if (nextToken && this.content(nextToken) === "|") {
          this.position++;
          return this.namespace();
        }
        return this.splitWord(namespace2);
      };
      _proto.loop = function loop() {
        while (this.position < this.tokens.length) {
          this.parse(true);
        }
        this.current._inferEndPosition();
        return this.root;
      };
      _proto.parse = function parse(throwOnParenthesis) {
        switch (this.currToken[_tokenize.FIELDS.TYPE]) {
          case tokens.space:
            this.space();
            break;
          case tokens.comment:
            this.comment();
            break;
          case tokens.openParenthesis:
            this.parentheses();
            break;
          case tokens.closeParenthesis:
            if (throwOnParenthesis) {
              this.missingParenthesis();
            }
            break;
          case tokens.openSquare:
            this.attribute();
            break;
          case tokens.dollar:
          case tokens.caret:
          case tokens.equals:
          case tokens.word:
            this.word();
            break;
          case tokens.colon:
            this.pseudo();
            break;
          case tokens.comma:
            this.comma();
            break;
          case tokens.asterisk:
            this.universal();
            break;
          case tokens.ampersand:
            this.nesting();
            break;
          case tokens.slash:
          case tokens.combinator:
            this.combinator();
            break;
          case tokens.str:
            this.string();
            break;
          // These cases throw; no break needed.
          case tokens.closeSquare:
            this.missingSquareBracket();
          case tokens.semicolon:
            this.missingBackslash();
          default:
            this.unexpected();
        }
      };
      _proto.expected = function expected(description, index, found) {
        if (Array.isArray(description)) {
          var last = description.pop();
          description = description.join(", ") + " or " + last;
        }
        var an = /^[aeiou]/.test(description[0]) ? "an" : "a";
        if (!found) {
          return this.error("Expected " + an + " " + description + ".", {
            index
          });
        }
        return this.error("Expected " + an + " " + description + ', found "' + found + '" instead.', {
          index
        });
      };
      _proto.requiredSpace = function requiredSpace(space) {
        return this.options.lossy ? " " : space;
      };
      _proto.optionalSpace = function optionalSpace(space) {
        return this.options.lossy ? "" : space;
      };
      _proto.lossySpace = function lossySpace(space, required) {
        if (this.options.lossy) {
          return required ? " " : "";
        } else {
          return space;
        }
      };
      _proto.parseParenthesisToken = function parseParenthesisToken(token) {
        var content = this.content(token);
        if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
          return this.requiredSpace(content);
        } else {
          return content;
        }
      };
      _proto.newNode = function newNode(node2, namespace2) {
        if (namespace2) {
          if (/^ +$/.test(namespace2)) {
            if (!this.options.lossy) {
              this.spaces = (this.spaces || "") + namespace2;
            }
            namespace2 = true;
          }
          node2.namespace = namespace2;
          unescapeProp(node2, "namespace");
        }
        if (this.spaces) {
          node2.spaces.before = this.spaces;
          this.spaces = "";
        }
        return this.current.append(node2);
      };
      _proto.content = function content(token) {
        if (token === void 0) {
          token = this.currToken;
        }
        return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
      };
      _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
        if (startPosition === void 0) {
          startPosition = this.position + 1;
        }
        var searchPosition = startPosition;
        while (searchPosition < this.tokens.length) {
          if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
            searchPosition++;
            continue;
          } else {
            return searchPosition;
          }
        }
        return -1;
      };
      _createClass(Parser2, [{
        key: "currToken",
        get: function get() {
          return this.tokens[this.position];
        }
      }, {
        key: "nextToken",
        get: function get() {
          return this.tokens[this.position + 1];
        }
      }, {
        key: "prevToken",
        get: function get() {
          return this.tokens[this.position - 1];
        }
      }]);
      return Parser2;
    }();
    exports["default"] = Parser;
    module.exports = exports.default;
  })(parser, parser.exports);
  return parser.exports;
}
var hasRequiredProcessor;
function requireProcessor() {
  if (hasRequiredProcessor) return processor.exports;
  hasRequiredProcessor = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _parser = _interopRequireDefault(requireParser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Processor = /* @__PURE__ */ function() {
      function Processor2(func, options) {
        this.func = func || function noop() {
        };
        this.funcRes = null;
        this.options = options;
      }
      var _proto = Processor2.prototype;
      _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var merged = Object.assign({}, this.options, options);
        if (merged.updateSelector === false) {
          return false;
        } else {
          return typeof rule !== "string";
        }
      };
      _proto._isLossy = function _isLossy(options) {
        if (options === void 0) {
          options = {};
        }
        var merged = Object.assign({}, this.options, options);
        if (merged.lossless === false) {
          return true;
        } else {
          return false;
        }
      };
      _proto._root = function _root(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var parser2 = new _parser["default"](rule, this._parseOptions(options));
        return parser2.root;
      };
      _proto._parseOptions = function _parseOptions(options) {
        return {
          lossy: this._isLossy(options)
        };
      };
      _proto._run = function _run(rule, options) {
        var _this = this;
        if (options === void 0) {
          options = {};
        }
        return new Promise(function(resolve, reject) {
          try {
            var root2 = _this._root(rule, options);
            Promise.resolve(_this.func(root2)).then(function(transform) {
              var string2 = void 0;
              if (_this._shouldUpdateSelector(rule, options)) {
                string2 = root2.toString();
                rule.selector = string2;
              }
              return {
                transform,
                root: root2,
                string: string2
              };
            }).then(resolve, reject);
          } catch (e2) {
            reject(e2);
            return;
          }
        });
      };
      _proto._runSync = function _runSync(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var root2 = this._root(rule, options);
        var transform = this.func(root2);
        if (transform && typeof transform.then === "function") {
          throw new Error("Selector processor returned a promise to a synchronous call.");
        }
        var string2 = void 0;
        if (options.updateSelector && typeof rule !== "string") {
          string2 = root2.toString();
          rule.selector = string2;
        }
        return {
          transform,
          root: root2,
          string: string2
        };
      };
      _proto.ast = function ast(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.root;
        });
      };
      _proto.astSync = function astSync(rule, options) {
        return this._runSync(rule, options).root;
      };
      _proto.transform = function transform(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.transform;
        });
      };
      _proto.transformSync = function transformSync(rule, options) {
        return this._runSync(rule, options).transform;
      };
      _proto.process = function process(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.string || result.root.toString();
        });
      };
      _proto.processSync = function processSync(rule, options) {
        var result = this._runSync(rule, options);
        return result.string || result.root.toString();
      };
      return Processor2;
    }();
    exports["default"] = Processor;
    module.exports = exports.default;
  })(processor, processor.exports);
  return processor.exports;
}
var selectors = {};
var constructors = {};
var hasRequiredConstructors;
function requireConstructors() {
  if (hasRequiredConstructors) return constructors;
  hasRequiredConstructors = 1;
  constructors.__esModule = true;
  constructors.universal = constructors.tag = constructors.string = constructors.selector = constructors.root = constructors.pseudo = constructors.nesting = constructors.id = constructors.comment = constructors.combinator = constructors.className = constructors.attribute = void 0;
  var _attribute = _interopRequireDefault(requireAttribute());
  var _className = _interopRequireDefault(requireClassName());
  var _combinator = _interopRequireDefault(requireCombinator());
  var _comment = _interopRequireDefault(requireComment());
  var _id = _interopRequireDefault(requireId());
  var _nesting = _interopRequireDefault(requireNesting());
  var _pseudo = _interopRequireDefault(requirePseudo());
  var _root = _interopRequireDefault(requireRoot());
  var _selector = _interopRequireDefault(requireSelector());
  var _string = _interopRequireDefault(requireString());
  var _tag = _interopRequireDefault(requireTag());
  var _universal = _interopRequireDefault(requireUniversal());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var attribute2 = function attribute3(opts) {
    return new _attribute["default"](opts);
  };
  constructors.attribute = attribute2;
  var className2 = function className3(opts) {
    return new _className["default"](opts);
  };
  constructors.className = className2;
  var combinator2 = function combinator3(opts) {
    return new _combinator["default"](opts);
  };
  constructors.combinator = combinator2;
  var comment2 = function comment3(opts) {
    return new _comment["default"](opts);
  };
  constructors.comment = comment2;
  var id2 = function id3(opts) {
    return new _id["default"](opts);
  };
  constructors.id = id2;
  var nesting2 = function nesting3(opts) {
    return new _nesting["default"](opts);
  };
  constructors.nesting = nesting2;
  var pseudo2 = function pseudo3(opts) {
    return new _pseudo["default"](opts);
  };
  constructors.pseudo = pseudo2;
  var root2 = function root3(opts) {
    return new _root["default"](opts);
  };
  constructors.root = root2;
  var selector2 = function selector3(opts) {
    return new _selector["default"](opts);
  };
  constructors.selector = selector2;
  var string2 = function string3(opts) {
    return new _string["default"](opts);
  };
  constructors.string = string2;
  var tag2 = function tag3(opts) {
    return new _tag["default"](opts);
  };
  constructors.tag = tag2;
  var universal2 = function universal3(opts) {
    return new _universal["default"](opts);
  };
  constructors.universal = universal2;
  return constructors;
}
var guards = {};
var hasRequiredGuards;
function requireGuards() {
  if (hasRequiredGuards) return guards;
  hasRequiredGuards = 1;
  guards.__esModule = true;
  guards.isComment = guards.isCombinator = guards.isClassName = guards.isAttribute = void 0;
  guards.isContainer = isContainer;
  guards.isIdentifier = void 0;
  guards.isNamespace = isNamespace;
  guards.isNesting = void 0;
  guards.isNode = isNode;
  guards.isPseudo = void 0;
  guards.isPseudoClass = isPseudoClass;
  guards.isPseudoElement = isPseudoElement;
  guards.isUniversal = guards.isTag = guards.isString = guards.isSelector = guards.isRoot = void 0;
  var _types = requireTypes();
  var _IS_TYPE;
  var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
  function isNode(node2) {
    return typeof node2 === "object" && IS_TYPE[node2.type];
  }
  function isNodeType(type, node2) {
    return isNode(node2) && node2.type === type;
  }
  var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
  guards.isAttribute = isAttribute;
  var isClassName = isNodeType.bind(null, _types.CLASS);
  guards.isClassName = isClassName;
  var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
  guards.isCombinator = isCombinator;
  var isComment = isNodeType.bind(null, _types.COMMENT);
  guards.isComment = isComment;
  var isIdentifier = isNodeType.bind(null, _types.ID);
  guards.isIdentifier = isIdentifier;
  var isNesting = isNodeType.bind(null, _types.NESTING);
  guards.isNesting = isNesting;
  var isPseudo = isNodeType.bind(null, _types.PSEUDO);
  guards.isPseudo = isPseudo;
  var isRoot = isNodeType.bind(null, _types.ROOT);
  guards.isRoot = isRoot;
  var isSelector = isNodeType.bind(null, _types.SELECTOR);
  guards.isSelector = isSelector;
  var isString = isNodeType.bind(null, _types.STRING);
  guards.isString = isString;
  var isTag = isNodeType.bind(null, _types.TAG);
  guards.isTag = isTag;
  var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
  guards.isUniversal = isUniversal;
  function isPseudoElement(node2) {
    return isPseudo(node2) && node2.value && (node2.value.startsWith("::") || node2.value.toLowerCase() === ":before" || node2.value.toLowerCase() === ":after" || node2.value.toLowerCase() === ":first-letter" || node2.value.toLowerCase() === ":first-line");
  }
  function isPseudoClass(node2) {
    return isPseudo(node2) && !isPseudoElement(node2);
  }
  function isContainer(node2) {
    return !!(isNode(node2) && node2.walk);
  }
  function isNamespace(node2) {
    return isAttribute(node2) || isTag(node2);
  }
  return guards;
}
var hasRequiredSelectors;
function requireSelectors() {
  if (hasRequiredSelectors) return selectors;
  hasRequiredSelectors = 1;
  (function(exports) {
    exports.__esModule = true;
    var _types = requireTypes();
    Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _types[key]) return;
      exports[key] = _types[key];
    });
    var _constructors = requireConstructors();
    Object.keys(_constructors).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _constructors[key]) return;
      exports[key] = _constructors[key];
    });
    var _guards = requireGuards();
    Object.keys(_guards).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _guards[key]) return;
      exports[key] = _guards[key];
    });
  })(selectors);
  return selectors;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist.exports;
  hasRequiredDist = 1;
  (function(module, exports) {
    exports.__esModule = true;
    exports["default"] = void 0;
    var _processor = _interopRequireDefault(requireProcessor());
    var selectors2 = _interopRequireWildcard(requireSelectors());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var parser2 = function parser3(processor2) {
      return new _processor["default"](processor2);
    };
    Object.assign(parser2, selectors2);
    delete parser2.__esModule;
    var _default = parser2;
    exports["default"] = _default;
    module.exports = exports.default;
  })(dist, dist.exports);
  return dist.exports;
}
var hasRequiredPostcssNested;
function requirePostcssNested() {
  if (hasRequiredPostcssNested) return postcssNested$1.exports;
  hasRequiredPostcssNested = 1;
  const { AtRule, Rule } = requirePostcss();
  let parser2 = requireDist();
  function parse(rawSelector, rule) {
    let nodes;
    try {
      parser2((parsed) => {
        nodes = parsed;
      }).processSync(rawSelector);
    } catch (e2) {
      if (rawSelector.includes(":")) {
        throw rule ? rule.error("Missed semicolon") : e2;
      } else {
        throw rule ? rule.error(e2.message) : e2;
      }
    }
    return nodes.at(0);
  }
  function interpolateAmpInSelector(nodes, parent) {
    let replaced = false;
    nodes.each((node2) => {
      if (node2.type === "nesting") {
        let clonedParent = parent.clone({});
        if (node2.value !== "&") {
          node2.replaceWith(
            parse(node2.value.replace("&", clonedParent.toString()))
          );
        } else {
          node2.replaceWith(clonedParent);
        }
        replaced = true;
      } else if ("nodes" in node2 && node2.nodes) {
        if (interpolateAmpInSelector(node2, parent)) {
          replaced = true;
        }
      }
    });
    return replaced;
  }
  function mergeSelectors(parent, child) {
    let merged = [];
    parent.selectors.forEach((sel) => {
      let parentNode = parse(sel, parent);
      child.selectors.forEach((selector2) => {
        if (!selector2) {
          return;
        }
        let node2 = parse(selector2, child);
        let replaced = interpolateAmpInSelector(node2, parentNode);
        if (!replaced) {
          node2.prepend(parser2.combinator({ value: " " }));
          node2.prepend(parentNode.clone({}));
        }
        merged.push(node2.toString());
      });
    });
    return merged;
  }
  function breakOut(child, after) {
    let prev = child.prev();
    after.after(child);
    while (prev && prev.type === "comment") {
      let nextPrev = prev.prev();
      after.after(prev);
      prev = nextPrev;
    }
    return child;
  }
  function createFnAtruleChilds(bubble) {
    return function atruleChilds(rule, atrule, bubbling, mergeSels = bubbling) {
      let children = [];
      atrule.each((child) => {
        if (child.type === "rule" && bubbling) {
          if (mergeSels) {
            child.selectors = mergeSelectors(rule, child);
          }
        } else if (child.type === "atrule" && child.nodes) {
          if (bubble[child.name]) {
            atruleChilds(rule, child, mergeSels);
          } else if (atrule[rootRuleMergeSel] !== false) {
            children.push(child);
          }
        } else {
          children.push(child);
        }
      });
      if (bubbling) {
        if (children.length) {
          let clone = rule.clone({ nodes: [] });
          for (let child of children) {
            clone.append(child);
          }
          atrule.prepend(clone);
        }
      }
    };
  }
  function pickDeclarations(selector2, declarations, after) {
    let parent = new Rule({
      nodes: [],
      selector: selector2
    });
    parent.append(declarations);
    after.after(parent);
    return parent;
  }
  function atruleNames(defaults, custom) {
    let list = {};
    for (let name of defaults) {
      list[name] = true;
    }
    if (custom) {
      for (let name of custom) {
        list[name.replace(/^@/, "")] = true;
      }
    }
    return list;
  }
  function parseRootRuleParams(params) {
    params = params.trim();
    let braceBlock = params.match(/^\((.*)\)$/);
    if (!braceBlock) {
      return { selector: params, type: "basic" };
    }
    let bits = braceBlock[1].match(/^(with(?:out)?):(.+)$/);
    if (bits) {
      let allowlist = bits[1] === "with";
      let rules = Object.fromEntries(
        bits[2].trim().split(/\s+/).map((name) => [name, true])
      );
      if (allowlist && rules.all) {
        return { type: "noop" };
      }
      let escapes = (rule) => !!rules[rule];
      if (rules.all) {
        escapes = () => true;
      } else if (allowlist) {
        escapes = (rule) => rule === "all" ? false : !rules[rule];
      }
      return {
        escapes,
        type: "withrules"
      };
    }
    return { type: "unknown" };
  }
  function getAncestorRules(leaf) {
    let lineage = [];
    let parent = leaf.parent;
    while (parent && parent instanceof AtRule) {
      lineage.push(parent);
      parent = parent.parent;
    }
    return lineage;
  }
  function unwrapRootRule(rule) {
    let escapes = rule[rootRuleEscapes];
    if (!escapes) {
      rule.after(rule.nodes);
    } else {
      let nodes = rule.nodes;
      let topEscaped;
      let topEscapedIdx = -1;
      let breakoutLeaf;
      let breakoutRoot;
      let clone;
      let lineage = getAncestorRules(rule);
      lineage.forEach((parent, i2) => {
        if (escapes(parent.name)) {
          topEscaped = parent;
          topEscapedIdx = i2;
          breakoutRoot = clone;
        } else {
          let oldClone = clone;
          clone = parent.clone({ nodes: [] });
          oldClone && clone.append(oldClone);
          breakoutLeaf = breakoutLeaf || clone;
        }
      });
      if (!topEscaped) {
        rule.after(nodes);
      } else if (!breakoutRoot) {
        topEscaped.after(nodes);
      } else {
        let leaf = breakoutLeaf;
        leaf.append(nodes);
        topEscaped.after(breakoutRoot);
      }
      if (rule.next() && topEscaped) {
        let restRoot;
        lineage.slice(0, topEscapedIdx + 1).forEach((parent, i2, arr) => {
          let oldRoot = restRoot;
          restRoot = parent.clone({ nodes: [] });
          oldRoot && restRoot.append(oldRoot);
          let nextSibs = [];
          let _child = arr[i2 - 1] || rule;
          let next = _child.next();
          while (next) {
            nextSibs.push(next);
            next = next.next();
          }
          restRoot.append(nextSibs);
        });
        restRoot && (breakoutRoot || nodes[nodes.length - 1]).after(restRoot);
      }
    }
    rule.remove();
  }
  const rootRuleMergeSel = Symbol("rootRuleMergeSel");
  const rootRuleEscapes = Symbol("rootRuleEscapes");
  function normalizeRootRule(rule) {
    let { params } = rule;
    let { escapes, selector: selector2, type } = parseRootRuleParams(params);
    if (type === "unknown") {
      throw rule.error(
        `Unknown @${rule.name} parameter ${JSON.stringify(params)}`
      );
    }
    if (type === "basic" && selector2) {
      let selectorBlock = new Rule({ nodes: rule.nodes, selector: selector2 });
      rule.removeAll();
      rule.append(selectorBlock);
    }
    rule[rootRuleEscapes] = escapes;
    rule[rootRuleMergeSel] = escapes ? !escapes("all") : type === "noop";
  }
  const hasRootRule = Symbol("hasRootRule");
  postcssNested$1.exports = (opts = {}) => {
    let bubble = atruleNames(
      ["media", "supports", "layer", "container", "starting-style"],
      opts.bubble
    );
    let atruleChilds = createFnAtruleChilds(bubble);
    let unwrap = atruleNames(
      [
        "document",
        "font-face",
        "keyframes",
        "-webkit-keyframes",
        "-moz-keyframes"
      ],
      opts.unwrap
    );
    let rootRuleName = (opts.rootRuleName || "at-root").replace(/^@/, "");
    let preserveEmpty = opts.preserveEmpty;
    return {
      Once(root2) {
        root2.walkAtRules(rootRuleName, (node2) => {
          normalizeRootRule(node2);
          root2[hasRootRule] = true;
        });
      },
      postcssPlugin: "postcss-nested",
      RootExit(root2) {
        if (root2[hasRootRule]) {
          root2.walkAtRules(rootRuleName, unwrapRootRule);
          root2[hasRootRule] = false;
        }
      },
      Rule(rule) {
        let unwrapped = false;
        let after = rule;
        let copyDeclarations = false;
        let declarations = [];
        rule.each((child) => {
          if (child.type === "rule") {
            if (declarations.length) {
              after = pickDeclarations(rule.selector, declarations, after);
              declarations = [];
            }
            copyDeclarations = true;
            unwrapped = true;
            child.selectors = mergeSelectors(rule, child);
            after = breakOut(child, after);
          } else if (child.type === "atrule") {
            if (declarations.length) {
              after = pickDeclarations(rule.selector, declarations, after);
              declarations = [];
            }
            if (child.name === rootRuleName) {
              unwrapped = true;
              atruleChilds(rule, child, true, child[rootRuleMergeSel]);
              after = breakOut(child, after);
            } else if (bubble[child.name]) {
              copyDeclarations = true;
              unwrapped = true;
              atruleChilds(rule, child, true);
              after = breakOut(child, after);
            } else if (unwrap[child.name]) {
              copyDeclarations = true;
              unwrapped = true;
              atruleChilds(rule, child, false);
              after = breakOut(child, after);
            } else if (copyDeclarations) {
              declarations.push(child);
            }
          } else if (child.type === "decl" && copyDeclarations) {
            declarations.push(child);
          }
        });
        if (declarations.length) {
          after = pickDeclarations(rule.selector, declarations, after);
        }
        if (unwrapped && preserveEmpty !== true) {
          rule.raws.semicolon = true;
          if (rule.nodes.length === 0) rule.remove();
        }
      }
    };
  };
  postcssNested$1.exports.postcss = true;
  return postcssNested$1.exports;
}
var postcssNestedExports = requirePostcssNested();
const postcssNested = /* @__PURE__ */ getDefaultExportFromCjs(postcssNestedExports);
var Ae = Object.create;
var Y2 = Object.defineProperty;
var Se = Object.getOwnPropertyDescriptor;
var Ce = Object.getOwnPropertyNames;
var Oe = Object.getPrototypeOf, Ee = Object.prototype.hasOwnProperty;
var ze = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
var Te = (e2, r2, t2, n2) => {
  if (r2 && typeof r2 == "object" || typeof r2 == "function") for (let i2 of Ce(r2)) !Ee.call(e2, i2) && i2 !== t2 && Y2(e2, i2, { get: () => r2[i2], enumerable: !(n2 = Se(r2, i2)) || n2.enumerable });
  return e2;
};
var $e = (e2, r2, t2) => (t2 = e2 != null ? Ae(Oe(e2)) : {}, Te(!e2 || !e2.__esModule ? Y2(t2, "default", { value: e2, enumerable: true }) : t2, e2));
var we = ze((mr2, ye2) => {
  ye2.exports = { content: [], presets: [], darkMode: "media", theme: { accentColor: ({ theme: e2 }) => ({ ...e2("colors"), auto: "auto" }), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: e2 }) => e2("blur"), backdropBrightness: ({ theme: e2 }) => e2("brightness"), backdropContrast: ({ theme: e2 }) => e2("contrast"), backdropGrayscale: ({ theme: e2 }) => e2("grayscale"), backdropHueRotate: ({ theme: e2 }) => e2("hueRotate"), backdropInvert: ({ theme: e2 }) => e2("invert"), backdropOpacity: ({ theme: e2 }) => e2("opacity"), backdropSaturate: ({ theme: e2 }) => e2("saturate"), backdropSepia: ({ theme: e2 }) => e2("sepia"), backgroundColor: ({ theme: e2 }) => e2("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e2 }) => e2("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e2 }) => ({ ...e2("colors"), DEFAULT: e2("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: e2 }) => e2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e2 }) => ({ ...e2("spacing") }), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e2 }) => e2("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, caretColor: ({ theme: e2 }) => e2("colors"), colors: ({ colors: e2 }) => ({ inherit: e2.inherit, current: e2.current, transparent: e2.transparent, black: e2.black, white: e2.white, slate: e2.slate, gray: e2.gray, zinc: e2.zinc, neutral: e2.neutral, stone: e2.stone, red: e2.red, orange: e2.orange, amber: e2.amber, yellow: e2.yellow, lime: e2.lime, green: e2.green, emerald: e2.emerald, teal: e2.teal, cyan: e2.cyan, sky: e2.sky, blue: e2.blue, indigo: e2.indigo, violet: e2.violet, purple: e2.purple, fuchsia: e2.fuchsia, pink: e2.pink, rose: e2.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e2 }) => e2("borderColor"), divideOpacity: ({ theme: e2 }) => e2("borderOpacity"), divideWidth: ({ theme: e2 }) => e2("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e2 }) => ({ none: "none", ...e2("colors") }), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e2 }) => e2("spacing"), gradientColorStops: ({ theme: e2 }) => e2("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%" }, grayscale: { 0: "0", DEFAULT: "100%" }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, height: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content" }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, inset: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), invert: { 0: "0", DEFAULT: "100%" }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" }, maxHeight: ({ theme: e2 }) => ({ ...e2("spacing"), none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: e2, breakpoints: r2 }) => ({ ...e2("spacing"), none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...r2(e2("screens")) }), minHeight: ({ theme: e2 }) => ({ ...e2("spacing"), full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content" }), minWidth: ({ theme: e2 }) => ({ ...e2("spacing"), full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, outlineColor: ({ theme: e2 }) => e2("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, padding: ({ theme: e2 }) => e2("spacing"), placeholderColor: ({ theme: e2 }) => e2("colors"), placeholderOpacity: ({ theme: e2 }) => e2("opacity"), ringColor: ({ theme: e2 }) => ({ DEFAULT: e2("colors.blue.500", "#3b82f6"), ...e2("colors") }), ringOffsetColor: ({ theme: e2 }) => e2("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: e2 }) => ({ DEFAULT: "0.5", ...e2("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, scrollMargin: ({ theme: e2 }) => ({ ...e2("spacing") }), scrollPadding: ({ theme: e2 }) => e2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: e2 }) => ({ ...e2("spacing") }), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e2 }) => ({ none: "none", ...e2("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2" }, supports: {}, data: {}, textColor: ({ theme: e2 }) => e2("colors"), textDecorationColor: ({ theme: e2 }) => e2("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: e2 }) => ({ ...e2("spacing") }), textOpacity: ({ theme: e2 }) => e2("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e2 }) => ({ ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), size: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }), width: ({ theme: e2 }) => ({ auto: "auto", ...e2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, plugins: [] };
});
function w(e2) {
  if (e2 = `${e2}`, e2 === "0") return "0";
  if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e2)) return e2.replace(/^[+-]?/, (t2) => t2 === "-" ? "" : "-");
  let r2 = ["var", "calc", "min", "max", "clamp"];
  for (let t2 of r2) if (e2.includes(`${t2}(`)) return `calc(${e2} * -1)`;
}
var K = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "lineClamp", "display", "aspectRatio", "size", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "captionSide", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "listStyleImage", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "hyphens", "whitespace", "textWrap", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "contain", "content", "forcedColorAdjust"];
function X(e2, r2) {
  return e2 === void 0 ? r2 : Array.isArray(e2) ? e2 : [...new Set(r2.filter((n2) => e2 !== false && e2[n2] !== false).concat(Object.keys(e2).filter((n2) => e2[n2] !== false)))];
}
var J2 = /* @__PURE__ */ new Set();
function L(e2, r2, t2) {
  typeof xs < "u" && xs.env.JEST_WORKER_ID || t2 && J2.has(t2) || (t2 && J2.add(t2), console.warn(""), r2.forEach((n2) => console.warn(e2, "-", n2)));
}
function P2(e2) {
  return ne$2.dim(e2);
}
var p2 = { info(e2, r2) {
  L(ne$2.bold(ne$2.cyan("info")), ...Array.isArray(e2) ? [e2] : [r2, e2]);
}, warn(e2, r2) {
  L(ne$2.bold(ne$2.yellow("warn")), ...Array.isArray(e2) ? [e2] : [r2, e2]);
}, risk(e2, r2) {
  L(ne$2.bold(ne$2.magenta("risk")), ...Array.isArray(e2) ? [e2] : [r2, e2]);
} };
function k({ version: e2, from: r2, to: t2 }) {
  p2.warn(`${r2}-color-renamed`, [`As of Tailwind CSS ${e2}, \`${r2}\` has been renamed to \`${t2}\`.`, "Update your configuration file to silence this warning."]);
}
var Q = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, get lightBlue() {
  return k({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
}, get warmGray() {
  return k({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
}, get trueGray() {
  return k({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral;
}, get coolGray() {
  return k({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
}, get blueGray() {
  return k({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
} };
function W(e2, ...r2) {
  var _a3, _b2;
  for (let t2 of r2) {
    for (let n2 in t2) ((_a3 = e2 == null ? void 0 : e2.hasOwnProperty) == null ? void 0 : _a3.call(e2, n2)) || (e2[n2] = t2[n2]);
    for (let n2 of Object.getOwnPropertySymbols(t2)) ((_b2 = e2 == null ? void 0 : e2.hasOwnProperty) == null ? void 0 : _b2.call(e2, n2)) || (e2[n2] = t2[n2]);
  }
  return e2;
}
function I(e2) {
  if (Array.isArray(e2)) return e2;
  let r2 = e2.split("[").length - 1, t2 = e2.split("]").length - 1;
  if (r2 !== t2) throw new Error(`Path is invalid. Has unbalanced brackets: ${e2}`);
  return e2.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}
var Z = { optimizeUniversalDefaults: false, generalizedModifiers: true, disableColorOpacityUtilitiesByDefault: false, relativeContentPathsByDefault: false }, ee = { future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity", "disableColorOpacityUtilitiesByDefault", "relativeContentPathsByDefault"], experimental: ["optimizeUniversalDefaults", "generalizedModifiers"] };
function A(e2, r2) {
  var _a3, _b2;
  return ee.future.includes(r2) ? e2.future === "all" || (((_a3 = e2 == null ? void 0 : e2.future) == null ? void 0 : _a3[r2]) ?? Z[r2] ?? false) : ee.experimental.includes(r2) ? e2.experimental === "all" || (((_b2 = e2 == null ? void 0 : e2.experimental) == null ? void 0 : _b2[r2]) ?? Z[r2] ?? false) : false;
}
function te(e2) {
  (() => {
    if (e2.purge || !e2.content || !Array.isArray(e2.content) && !(typeof e2.content == "object" && e2.content !== null)) return false;
    if (Array.isArray(e2.content)) return e2.content.every((t2) => typeof t2 == "string" ? true : !(typeof (t2 == null ? void 0 : t2.raw) != "string" || (t2 == null ? void 0 : t2.extension) && typeof (t2 == null ? void 0 : t2.extension) != "string"));
    if (typeof e2.content == "object" && e2.content !== null) {
      if (Object.keys(e2.content).some((t2) => !["files", "relative", "extract", "transform"].includes(t2))) return false;
      if (Array.isArray(e2.content.files)) {
        if (!e2.content.files.every((t2) => typeof t2 == "string" ? true : !(typeof (t2 == null ? void 0 : t2.raw) != "string" || (t2 == null ? void 0 : t2.extension) && typeof (t2 == null ? void 0 : t2.extension) != "string"))) return false;
        if (typeof e2.content.extract == "object") {
          for (let t2 of Object.values(e2.content.extract)) if (typeof t2 != "function") return false;
        } else if (!(e2.content.extract === void 0 || typeof e2.content.extract == "function")) return false;
        if (typeof e2.content.transform == "object") {
          for (let t2 of Object.values(e2.content.transform)) if (typeof t2 != "function") return false;
        } else if (!(e2.content.transform === void 0 || typeof e2.content.transform == "function")) return false;
        if (typeof e2.content.relative != "boolean" && typeof e2.content.relative < "u") return false;
      }
      return true;
    }
    return false;
  })() || p2.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), e2.safelist = (() => {
    var _a3;
    let { content: t2, purge: n2, safelist: i2 } = e2;
    return Array.isArray(i2) ? i2 : Array.isArray(t2 == null ? void 0 : t2.safelist) ? t2.safelist : Array.isArray(n2 == null ? void 0 : n2.safelist) ? n2.safelist : Array.isArray((_a3 = n2 == null ? void 0 : n2.options) == null ? void 0 : _a3.safelist) ? n2.options.safelist : [];
  })(), e2.blocklist = (() => {
    let { blocklist: t2 } = e2;
    if (Array.isArray(t2)) {
      if (t2.every((n2) => typeof n2 == "string")) return t2;
      p2.warn("blocklist-invalid", ["The `blocklist` option must be an array of strings.", "https://tailwindcss.com/docs/content-configuration#discarding-classes"]);
    }
    return [];
  })(), typeof e2.prefix == "function" ? (p2.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), e2.prefix = "") : e2.prefix = e2.prefix ?? "", e2.content = { relative: (() => {
    let { content: t2 } = e2;
    return (t2 == null ? void 0 : t2.relative) ? t2.relative : A(e2, "relativeContentPathsByDefault");
  })(), files: (() => {
    let { content: t2, purge: n2 } = e2;
    return Array.isArray(n2) ? n2 : Array.isArray(n2 == null ? void 0 : n2.content) ? n2.content : Array.isArray(t2) ? t2 : Array.isArray(t2 == null ? void 0 : t2.content) ? t2.content : Array.isArray(t2 == null ? void 0 : t2.files) ? t2.files : [];
  })(), extract: (() => {
    var _a3, _b2, _c, _d, _e2, _f, _g, _h, _i, _j;
    let t2 = ((_a3 = e2.purge) == null ? void 0 : _a3.extract) ? e2.purge.extract : ((_b2 = e2.content) == null ? void 0 : _b2.extract) ? e2.content.extract : ((_d = (_c = e2.purge) == null ? void 0 : _c.extract) == null ? void 0 : _d.DEFAULT) ? e2.purge.extract.DEFAULT : ((_f = (_e2 = e2.content) == null ? void 0 : _e2.extract) == null ? void 0 : _f.DEFAULT) ? e2.content.extract.DEFAULT : ((_h = (_g = e2.purge) == null ? void 0 : _g.options) == null ? void 0 : _h.extractors) ? e2.purge.options.extractors : ((_j = (_i = e2.content) == null ? void 0 : _i.options) == null ? void 0 : _j.extractors) ? e2.content.options.extractors : {}, n2 = {}, i2 = (() => {
      var _a4, _b3, _c2, _d2;
      if ((_b3 = (_a4 = e2.purge) == null ? void 0 : _a4.options) == null ? void 0 : _b3.defaultExtractor) return e2.purge.options.defaultExtractor;
      if ((_d2 = (_c2 = e2.content) == null ? void 0 : _c2.options) == null ? void 0 : _d2.defaultExtractor) return e2.content.options.defaultExtractor;
    })();
    if (i2 !== void 0 && (n2.DEFAULT = i2), typeof t2 == "function") n2.DEFAULT = t2;
    else if (Array.isArray(t2)) for (let { extensions: o2, extractor: a2 } of t2 ?? []) for (let l2 of o2) n2[l2] = a2;
    else typeof t2 == "object" && t2 !== null && Object.assign(n2, t2);
    return n2;
  })(), transform: (() => {
    var _a3, _b2, _c, _d, _e2, _f;
    let t2 = ((_a3 = e2.purge) == null ? void 0 : _a3.transform) ? e2.purge.transform : ((_b2 = e2.content) == null ? void 0 : _b2.transform) ? e2.content.transform : ((_d = (_c = e2.purge) == null ? void 0 : _c.transform) == null ? void 0 : _d.DEFAULT) ? e2.purge.transform.DEFAULT : ((_f = (_e2 = e2.content) == null ? void 0 : _e2.transform) == null ? void 0 : _f.DEFAULT) ? e2.content.transform.DEFAULT : {}, n2 = {};
    return typeof t2 == "function" ? n2.DEFAULT = t2 : typeof t2 == "object" && t2 !== null && Object.assign(n2, t2), n2;
  })() };
  for (let t2 of e2.content.files) if (typeof t2 == "string" && /{([^,]*?)}/g.test(t2)) {
    p2.warn("invalid-glob-braces", [`The glob pattern ${P2(t2)} in your Tailwind CSS configuration is invalid.`, `Update it to ${P2(t2.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`]);
    break;
  }
  return e2;
}
function d(e2) {
  if (Object.prototype.toString.call(e2) !== "[object Object]") return false;
  let r2 = Object.getPrototypeOf(e2);
  return r2 === null || Object.getPrototypeOf(r2) === null;
}
function $(e2) {
  return Array.isArray(e2) ? e2.map((r2) => $(r2)) : typeof e2 == "object" && e2 !== null ? Object.fromEntries(Object.entries(e2).map(([r2, t2]) => [r2, $(t2)])) : e2;
}
var B2 = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
var De = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, Fe = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, m = /(?:\d+|\d*\.\d+)%?/, D = /(?:\s*,\s*|\s+)/, re = /\s*[,/]\s*/, g = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, Ue = new RegExp(`^(rgba?)\\(\\s*(${m.source}|${g.source})(?:${D.source}(${m.source}|${g.source}))?(?:${D.source}(${m.source}|${g.source}))?(?:${re.source}(${m.source}|${g.source}))?\\s*\\)$`), je = new RegExp(`^(hsla?)\\(\\s*((?:${m.source})(?:deg|rad|grad|turn)?|${g.source})(?:${D.source}(${m.source}|${g.source}))?(?:${D.source}(${m.source}|${g.source}))?(?:${re.source}(${m.source}|${g.source}))?\\s*\\)$`);
function F(e2, { loose: r2 = false } = {}) {
  var _a3, _b2;
  if (typeof e2 != "string") return null;
  if (e2 = e2.trim(), e2 === "transparent") return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
  if (e2 in B2) return { mode: "rgb", color: B2[e2].map((o2) => o2.toString()) };
  let t2 = e2.replace(Fe, (o2, a2, l2, y2, x2) => ["#", a2, a2, l2, l2, y2, y2, x2 ? x2 + x2 : ""].join("")).match(De);
  if (t2 !== null) return { mode: "rgb", color: [parseInt(t2[1], 16), parseInt(t2[2], 16), parseInt(t2[3], 16)].map((o2) => o2.toString()), alpha: t2[4] ? (parseInt(t2[4], 16) / 255).toString() : void 0 };
  let n2 = e2.match(Ue) ?? e2.match(je);
  if (n2 === null) return null;
  let i2 = [n2[2], n2[3], n2[4]].filter(Boolean).map((o2) => o2.toString());
  return i2.length === 2 && i2[0].startsWith("var(") ? { mode: n2[1], color: [i2[0]], alpha: i2[1] } : !r2 && i2.length !== 3 || i2.length < 3 && !i2.some((o2) => /^var\(.*?\)$/.test(o2)) ? null : { mode: n2[1], color: i2, alpha: (_b2 = (_a3 = n2[5]) == null ? void 0 : _a3.toString) == null ? void 0 : _b2.call(_a3) };
}
function ne({ mode: e2, color: r2, alpha: t2 }) {
  let n2 = t2 !== void 0;
  return e2 === "rgba" || e2 === "hsla" ? `${e2}(${r2.join(", ")}${n2 ? `, ${t2}` : ""})` : `${e2}(${r2.join(" ")}${n2 ? ` / ${t2}` : ""})`;
}
function S(e2, r2, t2) {
  if (typeof e2 == "function") return e2({ opacityValue: r2 });
  let n2 = F(e2, { loose: true });
  return n2 === null ? t2 : ne({ ...n2, alpha: r2 });
}
function U(e2) {
  if (typeof e2 == "string" && e2.includes("<alpha-value>")) {
    let r2 = e2;
    return ({ opacityValue: t2 = 1 }) => r2.replace(/<alpha-value>/g, t2);
  }
  return e2;
}
function _(e2) {
  return typeof e2 == "function" ? e2({}) : e2;
}
function v(e2) {
  return typeof e2 == "function";
}
function z(e2, ...r2) {
  let t2 = r2.pop();
  for (let n2 of r2) for (let i2 in n2) {
    let o2 = t2(e2[i2], n2[i2]);
    o2 === void 0 ? d(e2[i2]) && d(n2[i2]) ? e2[i2] = z({}, e2[i2], n2[i2], t2) : e2[i2] = n2[i2] : e2[i2] = o2;
  }
  return e2;
}
var q2 = { colors: Q, negative(e2) {
  return Object.keys(e2).filter((r2) => e2[r2] !== "0").reduce((r2, t2) => {
    let n2 = w(e2[t2]);
    return n2 !== void 0 && (r2[`-${t2}`] = n2), r2;
  }, {});
}, breakpoints(e2) {
  return Object.keys(e2).filter((r2) => typeof e2[r2] == "string").reduce((r2, t2) => ({ ...r2, [`screen-${t2}`]: e2[t2] }), {});
} };
function tt(e2, ...r2) {
  return v(e2) ? e2(...r2) : e2;
}
function rt(e2) {
  return e2.reduce((r2, { extend: t2 }) => z(r2, t2, (n2, i2) => n2 === void 0 ? [i2] : Array.isArray(n2) ? [i2, ...n2] : [i2, n2]), {});
}
function nt(e2) {
  return { ...e2.reduce((r2, t2) => W(r2, t2), {}), extend: rt(e2) };
}
function be(e2, r2) {
  if (Array.isArray(e2) && d(e2[0])) return e2.concat(r2);
  if (Array.isArray(r2) && d(r2[0]) && d(e2)) return [e2, ...r2];
  if (Array.isArray(r2)) return r2;
}
function it({ extend: e2, ...r2 }) {
  return z(r2, e2, (t2, n2) => !v(t2) && !n2.some(v) ? z({}, t2, ...n2, be) : (i2, o2) => z({}, ...[t2, ...n2].map((a2) => tt(a2, i2, o2)), be));
}
function* at(e2) {
  let r2 = I(e2);
  if (r2.length === 0 || (yield r2, Array.isArray(e2))) return;
  let t2 = /^(.*?)\s*\/\s*([^/]+)$/, n2 = e2.match(t2);
  if (n2 !== null) {
    let [, i2, o2] = n2, a2 = I(i2);
    a2.alpha = o2, yield a2;
  }
}
function ot(e2) {
  let r2 = (t2, n2) => {
    for (let i2 of at(t2)) {
      let o2 = 0, a2 = e2;
      for (; a2 != null && o2 < i2.length; ) a2 = a2[i2[o2++]], a2 = v(a2) && (i2.alpha === void 0 || o2 <= i2.length - 1) ? a2(r2, q2) : a2;
      if (a2 !== void 0) {
        if (i2.alpha !== void 0) {
          let l2 = U(a2);
          return S(l2, i2.alpha, _(l2));
        }
        return d(a2) ? $(a2) : a2;
      }
    }
    return n2;
  };
  return Object.assign(r2, { theme: r2, ...q2 }), Object.keys(e2).reduce((t2, n2) => (t2[n2] = v(e2[n2]) ? e2[n2](r2, q2) : e2[n2], t2), {});
}
function he(e2) {
  let r2 = [];
  return e2.forEach((t2) => {
    r2 = [...r2, t2];
    let n2 = (t2 == null ? void 0 : t2.plugins) ?? [];
    n2.length !== 0 && n2.forEach((i2) => {
      i2.__isOptionsFunction && (i2 = i2()), r2 = [...r2, ...he([(i2 == null ? void 0 : i2.config) ?? {}])];
    });
  }), r2;
}
function lt(e2) {
  return [...e2].reduceRight((t2, n2) => v(n2) ? n2({ corePlugins: t2 }) : X(n2, t2), K);
}
function st(e2) {
  return [...e2].reduceRight((t2, n2) => [...t2, ...n2], []);
}
function G(e2) {
  let r2 = [...he(e2), { prefix: "", important: false, separator: ":" }];
  return te(W({ theme: ot(it(nt(r2.map((t2) => (t2 == null ? void 0 : t2.theme) ?? {})))), corePlugins: lt(r2.map((t2) => t2.corePlugins)), plugins: st(e2.map((t2) => (t2 == null ? void 0 : t2.plugins) ?? [])) }, ...r2));
}
var ve = $e(we());
function j2(e2) {
  let r2 = ((e2 == null ? void 0 : e2.presets) ?? [ve.default]).slice().reverse().flatMap((i2) => j2(i2 instanceof Function ? i2() : i2)), t2 = { respectDefaultRingColorOpacity: { theme: { ringColor: ({ theme: i2 }) => ({ DEFAULT: "#3b82f67f", ...i2("colors") }) } }, disableColorOpacityUtilitiesByDefault: { corePlugins: { backgroundOpacity: false, borderOpacity: false, divideOpacity: false, placeholderOpacity: false, ringOpacity: false, textOpacity: false } } }, n2 = Object.keys(t2).filter((i2) => A(e2, i2)).map((i2) => t2[i2]);
  return [e2, ...n2, ...r2];
}
function ft(...e2) {
  let [, ...r2] = j2(e2[0]);
  return G([...e2, ...r2]);
}
async function resolveConfig(volume = {}, entrypoint = "/tailwind.config.js") {
  const importedConfig = await importLocalModule(entrypoint, void 0, "config", volume);
  return ft(importedConfig.module);
}
export {
  F$1 as F,
  N$d as N,
  Pu as P,
  V,
  _$1 as _,
  x$v as a,
  __2$ as b,
  __2$$5 as c,
  __1$$7 as d,
  __0$$8 as e,
  requireDist as f,
  requireUnesc as g,
  ne$2 as n,
  postcssNested as p,
  resolveConfig as r,
  st$4 as s,
  w$2 as w,
  xs as x
};
