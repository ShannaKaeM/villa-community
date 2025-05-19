const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      const attributeName = mutation.attributeName;
      if (attributeName !== "class" && attributeName !== "plainclass") {
        return;
      }
      const target = mutation.target;
      const oldClasses = (mutation.oldValue || "").split(/\s+/).filter((value) => value !== "");
      const newClasses = target.getAttribute(attributeName).split(/\s+/).filter((value) => value !== "");
      if (attributeName === "plainclass") {
        oldClasses.forEach(function(oldClass) {
          if (!newClasses.includes(oldClass)) {
            target.classList.remove(oldClass);
          }
        });
        newClasses.forEach(function(newClass) {
          if (!oldClasses.includes(newClass)) {
            target.classList.add(newClass);
          }
        });
      } else if (attributeName === "class" && target.hasAttribute("plainclass")) {
        const plainclassValue = target.getAttribute("plainclass");
        const plainclassClasses = plainclassValue.split(/\s+/).filter((value) => value !== "");
        plainclassClasses.forEach(function(plainclassClass) {
          if (!newClasses.includes(plainclassClass)) {
            target.classList.add(plainclassClass);
          }
        });
      }
    }
  });
});
observer.observe(document.body, {
  attributes: true,
  subtree: true,
  attributeFilter: ["class", "plainclass"],
  attributeOldValue: true
});
window.addEventListener("message", function(event) {
  var _a;
  if (((_a = event.data) == null ? void 0 : _a.action) === "windpressoxygen-preview-class") {
    if (event.data.do === "remove") {
      removePreviewClassFromElements();
    } else if (event.data.do === "add") {
      const target = document.querySelector(`[ng-attr-component-id="${event.data.elementId}"]`);
      if (target) {
        removePreviewClassFromElements();
        addPreviewClassToElement(target, event.data.className);
      }
    }
  }
});
function addPreviewClassToElement(target, className) {
  target.setAttribute("previewclass", className);
  target.classList.add(className);
}
function removePreviewClassFromElement(target) {
  if (!target.hasAttribute("previewclass") || target.getAttribute("previewclass") === "") {
    return;
  }
  const className = target.getAttribute("previewclass");
  target.removeAttribute("previewclass");
  if (target.hasAttribute("plainclass")) {
    const plainclassAttr = target.getAttribute("plainclass").split(/\s+/).filter((value) => value !== "");
    if (plainclassAttr.includes(className)) {
      return;
    }
  }
  target.classList.remove(className);
}
function removePreviewClassFromElements() {
  const elements = document.querySelectorAll("[ng-attr-component-id]");
  elements.forEach(function(element) {
    removePreviewClassFromElement(element);
  });
}
