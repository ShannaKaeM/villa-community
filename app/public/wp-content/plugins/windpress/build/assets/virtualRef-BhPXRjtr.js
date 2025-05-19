import { g as useStorage } from "../chunks/index-DVDdEdAO.min.js";
import { s as set } from "../chunks/set-CQpYICWN.min.js";
import { g as get } from "../chunks/get-C5gQxxub.min.js";
import { r as ref, J as customRef } from "../chunks/runtime-core.esm-bundler-BkeE3T8c.min.js";
function createVirtualRef(initialState, options) {
  const state = (options == null ? void 0 : options.persist) ? useStorage(options.persist, initialState) : ref(initialState);
  const customRefs = {};
  function getVirtualRef(path, initialValue) {
    if (!customRefs[path]) {
      customRefs[path] = customRef((track, trigger) => {
        return {
          get() {
            track();
            return get(state.value, path, initialValue);
          },
          set(value) {
            set(state.value, path, value);
            trigger();
          }
        };
      });
    }
    return customRefs[path];
  }
  return {
    state,
    getVirtualRef
  };
}
export {
  createVirtualRef as c
};
