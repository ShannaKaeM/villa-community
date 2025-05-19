import { x as xa } from "../chunks/index-DEmRqKf2.min.js";
import { l as loadModule } from "./cssesc-Du71EH2f.js";
import { i as init, l as lightningcssWasmFile, t as transform } from "../chunks/index-C8ehqlLx.min.js";
import { p as preprocess, l as loadStylesheet } from "./pre-process-C0QLwsRC.js";
const Features = {
  Nesting: 1,
  DirSelector: 4,
  LogicalProperties: 524288,
  LightDark: 1048576
};
async function compile({ candidates = [], entrypoint = "/main.css", volume = {}, ...opts }) {
  opts = { candidates, entrypoint, volume, ...opts };
  opts.volume[opts.entrypoint] = (await preprocess(opts)).css;
  return await xa(opts.volume[opts.entrypoint], {
    loadModule: async (modulePath, base, resourceHint) => loadModule(modulePath, base, resourceHint, opts.volume),
    loadStylesheet: async (id, base) => loadStylesheet(id, base, opts.volume)
  });
}
async function optimize({ css, minify = false }) {
  await init(lightningcssWasmFile);
  const result = transform({
    filename: "main.css",
    code: new TextEncoder().encode(css),
    minify,
    sourceMap: false,
    drafts: {
      customMedia: true
    },
    nonStandard: {
      deepSelectorCombinator: true
    },
    include: Features.Nesting,
    exclude: Features.LogicalProperties | Features.DirSelector | Features.LightDark,
    targets: {
      safari: 16 << 16 | 4 << 8,
      ios_saf: 16 << 16 | 4 << 8,
      firefox: 128 << 16,
      chrome: 111 << 16
    },
    errorRecovery: true
  });
  return {
    code: result.code,
    css: new TextDecoder().decode(result.code),
    warnings: result.warnings
  };
}
export {
  compile as c,
  optimize as o
};
