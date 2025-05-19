import { p as parseValue } from "../chunks/index-18UIQydn.min.js";
const ZERO = 48;
const NINE = 57;
function compare(a, z) {
  let aLen = a.length;
  let zLen = z.length;
  let minLen = aLen < zLen ? aLen : zLen;
  for (let i = 0; i < minLen; i++) {
    let aCode = a.charCodeAt(i);
    let zCode = z.charCodeAt(i);
    if (aCode >= ZERO && aCode <= NINE && zCode >= ZERO && zCode <= NINE) {
      let aStart = i;
      let aEnd = i + 1;
      let zStart = i;
      let zEnd = i + 1;
      aCode = a.charCodeAt(aEnd);
      while (aCode >= ZERO && aCode <= NINE) aCode = a.charCodeAt(++aEnd);
      zCode = z.charCodeAt(zEnd);
      while (zCode >= ZERO && zCode <= NINE) zCode = z.charCodeAt(++zEnd);
      let aNumber = a.slice(aStart, aEnd);
      let zNumber = z.slice(zStart, zEnd);
      let diff = Number(aNumber) - Number(zNumber);
      if (diff) return diff;
      if (aNumber < zNumber) return -1;
      if (aNumber > zNumber) return 1;
      continue;
    }
    if (aCode === zCode) continue;
    return aCode - zCode;
  }
  return a.length - z.length;
}
function compileCandidates(rawCandidates, designSystem, { onInvalidCandidate } = {}) {
  let nodeSorting = /* @__PURE__ */ new Map();
  let astNodes = [];
  let matches = /* @__PURE__ */ new Map();
  for (let rawCandidate of rawCandidates) {
    if (designSystem.invalidCandidates.has(rawCandidate)) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
      continue;
    }
    let candidates = designSystem.parseCandidate(rawCandidate);
    if (candidates.length === 0) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
      continue;
    }
    matches.set(rawCandidate, candidates);
  }
  let variantOrderMap = designSystem.getVariantOrder();
  for (let [rawCandidate, candidates] of matches) {
    let found = false;
    for (let candidate of candidates) {
      let rules = designSystem.compileAstNodes(candidate);
      if (rules.length === 0) continue;
      found = true;
      for (let { node, propertySort } of rules) {
        let variantOrder = 0n;
        for (let variant of candidate.variants) {
          variantOrder |= 1n << BigInt(variantOrderMap.get(variant));
        }
        nodeSorting.set(node, {
          properties: propertySort,
          variants: variantOrder,
          candidate: rawCandidate
        });
        astNodes.push(node);
      }
    }
    if (!found) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
    }
  }
  astNodes.sort((a, z) => {
    let aSorting = nodeSorting.get(a);
    let zSorting = nodeSorting.get(z);
    if (aSorting.variants - zSorting.variants !== 0n) {
      return Number(aSorting.variants - zSorting.variants);
    }
    let offset = 0;
    while (offset < aSorting.properties.order.length && offset < zSorting.properties.order.length && aSorting.properties.order[offset] === zSorting.properties.order[offset]) {
      offset += 1;
    }
    return (
      // Sort by lowest property index first
      (aSorting.properties.order[offset] ?? Infinity) - (zSorting.properties.order[offset] ?? Infinity) || // Sort by most properties first, then by least properties
      zSorting.properties.count - aSorting.properties.count || // Sort alphabetically
      compare(aSorting.candidate, zSorting.candidate)
    );
  });
  return {
    astNodes,
    nodeSorting
  };
}
function getUtilityList(design) {
  return design.getClassList().map((classEntry) => ({
    kind: "utility",
    selector: classEntry[0]
  }));
}
function getVariantList(design) {
  return design.getVariants().map((classEntry) => ({
    kind: "variant",
    selector: classEntry.name
  }));
}
function unsupportedUtilityList() {
  return [
    {
      kind: "utility",
      selector: "flex"
    }
  ];
}
function defaultSort(arrayOfTuples) {
  return arrayOfTuples.sort(([, a], [, z]) => {
    if (a === z) return 0;
    if (a === null) return -1;
    if (z === null) return 1;
    return bigSign(a - z);
  }).map(([className]) => className);
}
function bigSign(value) {
  if (value > 0n) {
    return 1;
  } else if (value === 0n) {
    return 0;
  } else {
    return -1;
  }
}
async function getVariableList(design) {
  return Array.from(design.theme.entries()).map(
    (entry, index) => {
      const variable = entry[0];
      let isCalculated = false;
      let calculatedValue = null;
      const defaultValue = entry[1].value;
      if (typeof defaultValue === "string" && defaultValue.includes("rem")) {
        calculatedValue = `${parseFloat(defaultValue) * 16}px`;
        isCalculated = true;
      }
      return {
        key: variable,
        value: isCalculated ? calculatedValue : defaultValue,
        index
      };
    }
  );
}
async function sortClasses(design, classList) {
  return defaultSort(design.getClassOrder(classList));
}
function addPixelEquivalentsToValue(value, rootFontSize) {
  if (!(value == null ? void 0 : value.includes("rem"))) {
    return value;
  }
  const commentPool = [];
  parseValue(value).walk((node) => {
    if (node.type !== "word") {
      return true;
    }
    const unit = parseValue.unit(node.value);
    if (!unit || unit.unit !== "rem" && unit.unit !== "rem;") {
      return false;
    }
    const commentStr = ` /* ${parseFloat(unit.number) * rootFontSize}px */`;
    commentPool.push({
      content: commentStr,
      sourceEndIndex: node.sourceEndIndex
    });
    return false;
  });
  let offset = 0;
  commentPool.forEach((comment) => {
    value = value.slice(0, comment.sourceEndIndex + offset) + comment.content + value.slice(comment.sourceEndIndex + offset);
    offset += comment.content.length;
  });
  return value;
}
async function candidatesToCss(design, classes) {
  let css = design.candidatesToCss(classes);
  css = css.map((value) => value ? addPixelEquivalentsToValue(value, 16) : value);
  return css;
}
function getClassList(design) {
  const classList = getUtilityList(design).concat(
    getVariantList(design).concat(unsupportedUtilityList())
  );
  const excludeUtilities = (classEntity) => {
    return classEntity.selector !== "*";
  };
  const prepareClass = (classEntity) => {
    const astNodes = compileCandidates([classEntity.selector], design).astNodes;
    const nodes = astNodes.flatMap((node) => "nodes" in node ? node.nodes : []);
    let css = design.candidatesToCss([classEntity.selector]).at(0);
    if (css) {
      css = css.replaceAll(/([0-9.]+)rem/g, (_match, p1) => {
        return `${parseFloat(p1) * 16}px`;
      });
    }
    css = css == null ? void 0 : css.replaceAll(/\\/g, "");
    return {
      ...classEntity,
      declarations: nodes == null ? void 0 : nodes.filter(
        (node) => node.kind === "declaration"
      ),
      css
    };
  };
  const sortselectors = (a, z) => {
    if (a.selector.startsWith("-") && !z.selector.startsWith("-")) {
      return 1;
    } else if (!a.selector.startsWith("-") && z.selector.startsWith("-")) {
      return -1;
    } else {
      return compare(a.selector, z.selector);
    }
  };
  return classList.filter(excludeUtilities).map(prepareClass).sort(sortselectors);
}
function naturalExpand(value, total) {
  const length = 8;
  return ("0".repeat(length) + value).slice(-8);
}
export {
  addPixelEquivalentsToValue as a,
  bigSign as b,
  candidatesToCss as c,
  getVariableList as d,
  getClassList as g,
  naturalExpand as n,
  sortClasses as s
};
