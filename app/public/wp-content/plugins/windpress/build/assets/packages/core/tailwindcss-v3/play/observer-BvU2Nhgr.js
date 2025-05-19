import { b as build$1 } from "../../../../build-vGvnmmb4.js";
import { d as decodeVFSContainer } from "../../../../vfs-lutpnTRW.js";
import { I as Instrumentation } from "../../../../instrumentation-DB2mxz-d.js";
import "../../../../../chunks/preload-helper-BVFHbGtQ.min.js";
import "../../../../../chunks/index-C8ehqlLx.min.js";
import "../../../../cssesc-Du71EH2f.js";
import "../../../../../chunks/index-Dfa4cJMK.min.js";
import "../../../../../chunks/index-CvyxREt8.min.js";
import "../../../../resolve-config-CV0cW2mm.js";
console.warn(
  "The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache"
);
let classes = /* @__PURE__ */ new Set();
let sheet = document.createElement("style");
let buildQueue = Promise.resolve();
let nextBuildId = 1;
let I = new Instrumentation();
let lastVFS = "";
async function createCompiler() {
  I.start(`Create compiler`);
  I.start("Reading VFS");
  let script = document.querySelector('script#windpress\\:vfs[type="text/plain"]');
  if (!script) {
    throw new Error('Script element with id "windpress:vfs" and type "text/plain" not found.');
  }
  let vfs = (script == null ? void 0 : script.textContent) || "";
  I.end("Reading VFS", {
    size: vfs.length,
    changed: lastVFS !== vfs
  });
  if (lastVFS === vfs) return;
  lastVFS = vfs;
  I.end(`Create compiler`);
  classes.clear();
}
async function build(kind) {
  let newClasses = /* @__PURE__ */ new Set();
  I.start(`Collect classes`);
  for (let element of document.querySelectorAll("[class]")) {
    for (let c of element.classList) {
      if (classes.has(c)) continue;
      classes.add(c);
      newClasses.add(c);
    }
  }
  I.end(`Collect classes`, {
    count: newClasses.size
  });
  I.start(`Build utilities`);
  sheet.textContent = await build$1({
    entrypoint: {
      css: "/main.css",
      config: "/tailwind.config.js"
    },
    contents: Array.from(classes),
    volume: decodeVFSContainer(lastVFS || "e30=")
  });
  I.end(`Build utilities`);
}
function rebuild(kind) {
  async function run() {
    let buildId = nextBuildId++;
    I.start(`Build #${buildId} (${kind})`);
    {
      await createCompiler();
    }
    I.start(`Build`);
    await build();
    I.end(`Build`);
    I.end(`Build #${buildId} (${kind})`);
  }
  buildQueue = buildQueue.then(run).catch((err) => I.error(err));
}
new MutationObserver((records) => {
  let incremental = 0;
  for (let record of records) {
    for (let node of record.addedNodes) {
      if (node.nodeType !== 1) continue;
      if (node === sheet) continue;
      incremental++;
    }
    if (record.type === "attributes") {
      incremental++;
    }
  }
  if (incremental > 0) {
    return rebuild("full");
  }
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class"],
  childList: true,
  subtree: true
});
rebuild("full");
document.head.append(sheet);
