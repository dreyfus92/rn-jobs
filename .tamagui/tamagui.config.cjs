var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react = require("react");
    var PresenceContext = (0, import_react.createContext)(null);
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
      if (!context)
        return [true, null, context];
      const { isPresent: isPresent2, onExitComplete, register } = context, id = (0, import_react.useId)() || "";
      return (0, import_react.useEffect)(() => register(id), [id, register]), !isPresent2 && onExitComplete ? [false, () => onExitComplete == null ? void 0 : onExitComplete(id), context] : [true, void 0, context];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_PresenceContext(), module2.exports);
    __reExport(src_exports, require_usePresence(), module2.exports);
  }
});

// node_modules/@tamagui/animations-css/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "node_modules/@tamagui/animations-css/dist/cjs/createAnimations.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createAnimations_exports = {};
    __export2(createAnimations_exports, {
      createAnimations: () => createAnimations2
    });
    module2.exports = __toCommonJS2(createAnimations_exports);
    var import_core2 = require("@tamagui/core");
    var import_use_presence = require_cjs();
    var import_react = require("react");
    function createAnimations2(animations2) {
      const reactionListeners = /* @__PURE__ */ new WeakMap();
      return {
        View: import_core2.Stack,
        Text: import_core2.Text,
        animations: animations2,
        usePresence: import_use_presence.usePresence,
        supportsCSSVars: true,
        useAnimatedNumber(initial) {
          const [val, setVal] = (0, import_react.useState)(initial);
          return {
            getInstance() {
              return setVal;
            },
            getValue() {
              return val;
            },
            setValue(next) {
              setVal(next);
              const listeners = reactionListeners.get(setVal);
              listeners && listeners.forEach((cb) => cb(next));
            },
            stop() {
            }
          };
        },
        useAnimatedNumberReaction({ hostRef, value }, onValue) {
          (0, import_react.useEffect)(() => {
            const instance = value.getInstance();
            let queue = reactionListeners.get(instance);
            if (!queue) {
              const next = /* @__PURE__ */ new Set();
              reactionListeners.set(instance, next), queue = next;
            }
            return queue.add(onValue), () => {
              queue == null || queue.delete(onValue);
            };
          }, []);
        },
        useAnimatedNumberStyle(val, getStyle) {
          return getStyle(val.getValue());
        },
        useAnimations: ({ props, presence, style, componentState, hostRef }) => {
          const isEntering = !!componentState.unmounted, isExiting = (presence == null ? void 0 : presence[0]) === false, sendExitComplete = presence == null ? void 0 : presence[1], [animationKey, animationConfig] = [].concat(props.animation), animation = animations2[animationKey], keys = props.animateOnly ?? ["all"];
          return (0, import_core2.useIsomorphicLayoutEffect)(() => {
            if (!sendExitComplete || !isExiting || !hostRef.current)
              return;
            const node = hostRef.current, onFinishAnimation = /* @__PURE__ */ __name(() => {
              sendExitComplete == null || sendExitComplete();
            }, "onFinishAnimation");
            return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onFinishAnimation), () => {
              node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onFinishAnimation);
            };
          }, [sendExitComplete, isExiting]), animation ? (style.transition = keys.map((key) => {
            const override = animations2[animationConfig == null ? void 0 : animationConfig[key]] ?? animation;
            return `${key} ${override}`;
          }).join(", "), process.env.NODE_ENV === "development" && props.debug && console.info("CSS animation", style, { isEntering, isExiting }), { style }) : null;
        }
      };
    }
    __name(createAnimations2, "createAnimations");
  }
});

// node_modules/@tamagui/animations-css/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/animations-css/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_createAnimations(), module2.exports);
  }
});

// node_modules/@tamagui/font-inter/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@tamagui/font-inter/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createInterFont: () => createInterFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core2 = require("@tamagui/core");
    var createInterFont2 = /* @__PURE__ */ __name((font = {}, {
      sizeLineHeight = /* @__PURE__ */ __name((size2) => size2 + 10, "sizeLineHeight"),
      sizeSize = /* @__PURE__ */ __name((size2) => size2 * 1, "sizeSize")
    } = {}) => {
      const size2 = Object.fromEntries(
        Object.entries({
          ...defaultSizes,
          ...font.size
        }).map(([k, v]) => [k, sizeSize(+v)])
      );
      return (0, import_core2.createFont)({
        family: import_core2.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
        lineHeight: Object.fromEntries(
          Object.entries(size2).map(([k, v]) => [k, sizeLineHeight((0, import_core2.getVariableValue)(v))])
        ),
        weight: {
          4: "300"
        },
        letterSpacing: {
          4: 0
        },
        ...font,
        size: size2
      });
    }, "createInterFont");
    var defaultSizes = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      true: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 23,
      9: 30,
      10: 46,
      11: 55,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 134
    };
  }
});

// node_modules/@tamagui/font-silkscreen/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/font-silkscreen/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      createSilkscreenFont: () => createSilkscreenFont2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core2 = require("@tamagui/core");
    var createSilkscreenFont2 = /* @__PURE__ */ __name((font = {}) => (0, import_core2.createFont)({
      family: import_core2.isWeb ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen",
      size: size2,
      lineHeight: Object.fromEntries(
        Object.entries(font.size || size2).map(([k, v]) => [
          k,
          typeof v == "number" ? v * 1.2 + 6 : v
        ])
      ),
      weight: {
        4: "300"
      },
      letterSpacing: {
        4: 1,
        5: 3,
        6: 3,
        9: -2,
        10: -3,
        12: -4
      },
      ...font
    }), "createSilkscreenFont");
    var size2 = {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 15,
      6: 16,
      7: 18,
      8: 21,
      9: 28,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124
    };
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js
var require_matchMedia = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var matchMedia_exports = {};
    __export2(matchMedia_exports, {
      matchMedia: () => matchMedia
    });
    module2.exports = __toCommonJS2(matchMedia_exports);
    var matchMedia = globalThis.matchMedia;
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js
var require_createMedia = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createMedia_exports = {};
    __export2(createMedia_exports, {
      createMedia: () => createMedia2
    });
    module2.exports = __toCommonJS2(createMedia_exports);
    var import_web3 = require("@tamagui/core");
    var import_matchMedia = require_matchMedia();
    function createMedia2(media2) {
      return (0, import_web3.setupMatchMedia)(import_matchMedia.matchMedia), media2;
    }
    __name(createMedia2, "createMedia");
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js"(exports, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_createMedia(), module2.exports);
    __reExport(src_exports, require_matchMedia(), module2.exports);
  }
});

// src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  config: () => config3,
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/@tamagui/config/dist/esm/animations.css.js
var import_animations_css = __toESM(require_cjs2());
var animations = (0, import_animations_css.createAnimations)({
  "100ms": "ease-in 100ms",
  bouncy: "ease-in 200ms",
  lazy: "ease-in 600ms",
  slow: "ease-in 500ms",
  medium: "ease-in 300ms",
  quick: "ease-in 100ms",
  tooltip: "ease-in 400ms"
});

// node_modules/@tamagui/shorthands/dist/esm/index.js
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bc: "backgroundColor",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  boc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands.bls = "borderLeftStyle";
shorthands.brs = "borderRightStyle";
shorthands.bts = "borderTopStyle";
shorthands.bbs = "borderBottomStyle";
shorthands.bxs = "boxSizing";
shorthands.bxsh = "boxShadow";
shorthands.ox = "overflowX";
shorthands.oy = "overflowY";

// node_modules/@tamagui/colors/dist/esm/dark/blue.js
var blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/gray.js
var gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/green.js
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/orange.js
var orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/pink.js
var pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/purple.js
var purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/red.js
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/yellow.js
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/blue.js
var blue2 = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/gray.js
var gray2 = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/green.js
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/orange.js
var orange2 = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/pink.js
var pink2 = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

// node_modules/@tamagui/colors/dist/esm/light/purple.js
var purple2 = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/red.js
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// node_modules/@tamagui/colors/dist/esm/light/yellow.js
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// node_modules/@tamagui/themes/dist/esm/tokens.js
var import_web = require("@tamagui/core");
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [k, sizeToSpace(v)]);
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var colorTokens = {
  light: {
    blue: blue2,
    gray: gray2,
    green: green2,
    orange: orange2,
    pink: pink2,
    purple: purple2,
    red: red2,
    yellow: yellow2
  },
  dark: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow
  }
};
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])
  );
}
__name(postfixObjKeys, "postfixObjKeys");
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = (0, import_web.createTokens)({
  color,
  radius,
  zIndex,
  space,
  size,
  // testing
  icon: {
    sm: 16,
    md: 24,
    lg: 32
  }
});

// node_modules/@tamagui/create-theme/dist/esm/isMinusZero.js
function isMinusZero(value) {
  return 1 / value === -1 / 0;
}
__name(isMinusZero, "isMinusZero");

// node_modules/@tamagui/create-theme/dist/esm/themeInfo.js
var THEME_INFO = /* @__PURE__ */ new Map();
var getThemeInfo = /* @__PURE__ */ __name((theme, name) => THEME_INFO.get(name || JSON.stringify(theme)), "getThemeInfo");
var setThemeInfo = /* @__PURE__ */ __name((theme, info) => {
  const next = {
    ...info,
    cache: /* @__PURE__ */ new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next), THEME_INFO.set(JSON.stringify(info.definition), next);
}, "setThemeInfo");

// node_modules/@tamagui/create-theme/dist/esm/createTheme.js
var identityCache = /* @__PURE__ */ new Map();
function createTheme(palette, definition, options, name, skipCache = false) {
  const cacheKey = skipCache ? "" : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && identityCache.has(cacheKey))
    return identityCache.get(cacheKey);
  const theme = {
    ...Object.fromEntries(
      Object.entries(definition).map(([key, offset]) => [key, getValue(palette, offset)])
    ),
    ...options == null ? void 0 : options.nonInheritedValues
  };
  return setThemeInfo(theme, { palette, definition, options, name }), cacheKey && identityCache.set(cacheKey, theme), theme;
}
__name(createTheme, "createTheme");
var getValue = /* @__PURE__ */ __name((palette, value) => {
  if (typeof value == "string")
    return value;
  const max = palette.length - 1, next = (value === 0 ? !isMinusZero(value) : value >= 0) ? value : max + value, index = Math.min(Math.max(0, next), max);
  return palette[index];
}, "getValue");

// node_modules/@tamagui/create-theme/dist/esm/helpers.js
function objectEntries(obj) {
  return Object.entries(obj);
}
__name(objectEntries, "objectEntries");
function objectFromEntries(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries, "objectFromEntries");

// node_modules/@tamagui/create-theme/dist/esm/masks.js
var createMask = /* @__PURE__ */ __name((createMask2) => typeof createMask2 == "function" ? { name: createMask2.name || "unnamed", mask: createMask2 } : createMask2, "createMask");
var skipMask = {
  name: "skip-mask",
  mask: (template2, opts) => {
    const { skip } = opts;
    return Object.fromEntries(
      Object.entries(template2).filter(([k]) => !skip || !(k in skip)).map(([k, v]) => [k, applyOverrides(k, v, opts)])
    );
  }
};
function applyOverrides(key, value, opts) {
  var _a, _b, _c;
  let override, strategy = opts.overrideStrategy;
  const overrideSwap = (_a = opts.overrideSwap) == null ? void 0 : _a[key];
  if (typeof overrideSwap < "u")
    override = overrideSwap, strategy = "swap";
  else {
    const overrideShift = (_b = opts.overrideShift) == null ? void 0 : _b[key];
    if (typeof overrideShift < "u")
      override = overrideShift, strategy = "shift";
    else {
      const overrideDefault = (_c = opts.override) == null ? void 0 : _c[key];
      typeof overrideDefault < "u" && (override = overrideDefault, strategy = opts.overrideStrategy);
    }
  }
  return typeof override > "u" || typeof override == "string" ? value : strategy === "swap" ? override : value;
}
__name(applyOverrides, "applyOverrides");
var createIdentityMask = /* @__PURE__ */ __name(() => ({
  name: "identity-mask",
  mask: (template2, opts) => skipMask.mask(template2, opts)
}), "createIdentityMask");
var createInverseMask = /* @__PURE__ */ __name(() => ({
  name: "inverse-mask",
  mask: (template2, opts) => {
    const inversed = objectFromEntries(
      objectEntries(template2).map(([k, v]) => [k, -v])
    );
    return skipMask.mask(inversed, opts);
  }
}), "createInverseMask");
var createShiftMask = /* @__PURE__ */ __name(({ inverse } = {}, defaultOptions) => ({
  name: "shift-mask",
  mask: (template2, opts) => {
    const {
      override,
      overrideStrategy = "shift",
      max: maxIn,
      palette,
      min = 0,
      strength = 1
    } = { ...defaultOptions, ...opts }, values = Object.entries(template2), max = maxIn ?? (palette ? Object.values(palette).length - 1 : 1 / 0), out = {};
    for (const [key, value] of values) {
      if (typeof value == "string")
        continue;
      if (typeof (override == null ? void 0 : override[key]) == "number") {
        const overrideVal = override[key];
        out[key] = overrideStrategy === "shift" ? value + overrideVal : overrideVal;
        continue;
      } else if (typeof (override == null ? void 0 : override[key]) == "string") {
        out[key] = override[key];
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0, direction = isPositive ? 1 : -1, invert = inverse ? -1 : 1, next = value + strength * direction * invert, clamped = isPositive ? Math.max(min, Math.min(max, next)) : Math.min(-min, Math.max(-max, next));
      out[key] = clamped;
    }
    return skipMask.mask(out, opts);
  }
}), "createShiftMask");
var createWeakenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "soften-mask",
  mask: createShiftMask({}, defaultOptions).mask
}), "createWeakenMask");
var createSoftenMask = createWeakenMask;
var createStrengthenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "strengthen-mask",
  mask: createShiftMask({ inverse: true }, defaultOptions).mask
}), "createStrengthenMask");

// node_modules/@tamagui/create-theme/dist/esm/applyMask.js
function applyMask(theme, mask, options = {}, parentName, nextName) {
  const info = getThemeInfo(theme, parentName);
  if (!info)
    throw new Error(
      process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2"
    );
  const next = applyMaskStateless(info, mask, options, parentName);
  return setThemeInfo(next.theme, {
    definition: next.definition,
    palette: info.palette,
    name: nextName
  }), next.theme;
}
__name(applyMask, "applyMask");
function applyMaskStateless(info, mask, options = {}, parentName) {
  var _a;
  const skip = {
    ...options.skip
  };
  if ((_a = info.options) == null ? void 0 : _a.nonInheritedValues)
    for (const key in info.options.nonInheritedValues)
      skip[key] = 1;
  const maskOptions2 = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  }, template2 = mask.mask(info.definition, maskOptions2), theme = createTheme(info.palette, template2);
  return {
    ...info,
    cache: /* @__PURE__ */ new Map(),
    definition: template2,
    theme
  };
}
__name(applyMaskStateless, "applyMaskStateless");

// node_modules/@tamagui/create-theme/dist/esm/combineMasks.js
var combineMasks = /* @__PURE__ */ __name((...masks2) => ({
  name: "combine-mask",
  mask: (template2, opts) => {
    let current = getThemeInfo(template2, opts.parentName), theme;
    for (const mask2 of masks2) {
      if (!current)
        throw process.env.NODE_ENV === "development" ? new Error(
          `After applying mask, nothing returned: ${current}, for template: ${template2} and mask: ${mask2.toString()}, given opts ${JSON.stringify(
            opts,
            null,
            2
          )}`
        ) : "\u274C";
      const next = applyMaskStateless(current, mask2, opts);
      current = next, theme = next.theme;
    }
    return theme;
  }
}), "combineMasks");

// node_modules/@tamagui/themes/dist/esm/masks.js
var masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({ strength: 2 }),
  soften3: createSoftenMask({ strength: 3 }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
  inverseSoften: combineMasks(createInverseMask(), createSoftenMask({ strength: 2 })),
  inverseSoften2: combineMasks(createInverseMask(), createSoftenMask({ strength: 3 })),
  inverseSoften3: combineMasks(createInverseMask(), createSoftenMask({ strength: 4 })),
  inverseStrengthen2: combineMasks(
    createInverseMask(),
    createStrengthenMask({ strength: 2 })
  ),
  strengthenButSoftenBorder: createMask((template2, options) => {
    const stronger = createStrengthenMask().mask(template2, options), softer = createSoftenMask().mask(template2, options);
    return {
      ...stronger,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  soften2Border1: createMask((template2, options) => {
    const softer2 = createSoftenMask({ strength: 2 }).mask(template2, options), softer1 = createSoftenMask({ strength: 1 }).mask(template2, options);
    return {
      ...softer2,
      borderColor: softer1.borderColor,
      borderColorHover: softer1.borderColorHover,
      borderColorPress: softer1.borderColorPress,
      borderColorFocus: softer1.borderColorFocus
    };
  }),
  soften3FlatBorder: createMask((template2, options) => {
    const borderMask = createSoftenMask({ strength: 2 }).mask(template2, options);
    return {
      ...createSoftenMask({ strength: 3 }).mask(template2, options),
      borderColor: borderMask.borderColor,
      borderColorHover: borderMask.borderColorHover,
      borderColorPress: borderMask.borderColorPress,
      borderColorFocus: borderMask.borderColorFocus
    };
  }),
  softenBorder: createMask((template2, options) => {
    const plain = skipMask.mask(template2, options), softer = createSoftenMask().mask(template2, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  softenBorder2: createMask((template2, options) => {
    const plain = skipMask.mask(template2, options), softer = createSoftenMask({ strength: 2 }).mask(template2, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  })
};

// node_modules/@tamagui/themes/dist/esm/helpers.js
var objectKeys = /* @__PURE__ */ __name((obj) => Object.keys(obj), "objectKeys");
function objectFromEntries2(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries2, "objectFromEntries");

// node_modules/@tamagui/themes/dist/esm/palettes.js
var palettes = (() => {
  const lightTransparent = "rgba(255,255,255,0)", darkTransparent = "rgba(10,10,10,0)", transparent = /* @__PURE__ */ __name((hsl, opacity = 0) => hsl.replace("%)", `%, ${opacity})`).replace("hsl(", "hsla("), "transparent"), getColorPalette = /* @__PURE__ */ __name((colors2, color2 = colors2[0]) => {
    const colorPalette = Object.values(colors2), [head, tail] = [
      colorPalette.slice(0, 6),
      colorPalette.slice(colorPalette.length - 5)
    ];
    return [
      transparent(colorPalette[0]),
      ...head,
      ...tail,
      color2,
      transparent(colorPalette[colorPalette.length - 1])
    ];
  }, "getColorPalette"), lightColor = "hsl(0, 0%, 9.0%)", lightPalette = [
    lightTransparent,
    "#fff",
    "#f8f8f8",
    "hsl(0, 0%, 96.3%)",
    "hsl(0, 0%, 94.1%)",
    "hsl(0, 0%, 92.0%)",
    "hsl(0, 0%, 90.0%)",
    "hsl(0, 0%, 88.5%)",
    "hsl(0, 0%, 81.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 50.3%)",
    "hsl(0, 0%, 42.5%)",
    lightColor,
    darkTransparent
  ], darkColor = "#fff", darkPalette = [
    darkTransparent,
    "#050505",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#a5a5a5",
    darkColor,
    lightTransparent
  ], lightPalettes = objectFromEntries2(
    objectKeys(colorTokens.light).map(
      (key) => [`light_${key}`, getColorPalette(colorTokens.light[key], lightColor)]
    )
  ), darkPalettes = objectFromEntries2(
    objectKeys(colorTokens.dark).map(
      (key) => [`dark_${key}`, getColorPalette(colorTokens.dark[key], darkColor)]
    )
  ), colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };
  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes
  };
})();

// node_modules/@tamagui/themes/dist/esm/templates.js
var templateColorsSpecific = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12
};
var template = {
  ...templateColorsSpecific,
  // the background, color, etc keys here work like generics - they make it so you
  // can publish components for others to use without mandating a specific color scale
  // the @tamagui/button Button component looks for `$background`, so you set the
  // dark_red_Button theme to have a stronger background than the dark_red theme.
  background: 2,
  backgroundHover: 3,
  backgroundPress: 4,
  backgroundFocus: 5,
  backgroundStrong: 1,
  backgroundTransparent: 0,
  color: -1,
  colorHover: -2,
  colorPress: -1,
  colorFocus: -2,
  colorTransparent: -0,
  borderColor: 5,
  borderColorHover: 6,
  borderColorFocus: 4,
  borderColorPress: 5,
  placeholderColor: -4
};
var templates = {
  base: template,
  colorLight: {
    ...template,
    // light color themes are a bit less sensitive
    borderColor: 4,
    borderColorHover: 5,
    borderColorFocus: 4,
    borderColorPress: 4
  }
};
var shadows = {
  shadowColor: 0,
  shadowColorHover: 0,
  shadowColorPress: 0,
  shadowColorFocus: 0
};
var colors = {
  ...shadows,
  color: 0,
  colorHover: 0,
  colorFocus: 0,
  colorPress: 0
};
var baseMaskOptions = {
  override: shadows,
  skip: shadows,
  // avoids the transparent ends
  max: palettes.light.length - 2,
  min: 1
};
var skipShadowsAndSpecificColors = {
  ...shadows,
  ...templateColorsSpecific
};
var maskOptions = {
  component: {
    ...baseMaskOptions,
    override: colors,
    skip: skipShadowsAndSpecificColors
  },
  alt: {
    ...baseMaskOptions
  },
  button: {
    ...baseMaskOptions,
    override: {
      ...colors,
      borderColor: "transparent",
      borderColorHover: "transparent"
    },
    skip: skipShadowsAndSpecificColors
  }
};

// node_modules/@tamagui/themes/dist/esm/componentThemeDefinitions.js
var overlayThemes = {
  light: {
    background: "rgba(0,0,0,0.5)"
  },
  dark: {
    background: "rgba(0,0,0,0.9)"
  }
};
var overlayThemeDefinitions = [
  {
    parent: "light",
    theme: overlayThemes.light
  },
  {
    parent: "dark",
    theme: overlayThemes.dark
  }
];
var componentThemeDefinitions = {
  ListItem: [
    {
      parent: "light",
      mask: "strengthen",
      ...maskOptions.component
    },
    {
      parent: "dark",
      mask: "identity",
      ...maskOptions.component
    }
  ],
  Card: {
    mask: "soften",
    ...maskOptions.component
  },
  Button: {
    mask: "soften2",
    ...maskOptions.button
  },
  Checkbox: {
    mask: "softenBorder2",
    ...maskOptions.component
  },
  Switch: {
    mask: "soften2",
    ...maskOptions.component
  },
  SwitchThumb: {
    mask: "inverseStrengthen2",
    ...maskOptions.component
  },
  TooltipContent: {
    mask: "soften2",
    ...maskOptions.component
  },
  DrawerFrame: {
    mask: "soften",
    ...maskOptions.component
  },
  Progress: {
    mask: "soften",
    ...maskOptions.component
  },
  RadioGroupItem: {
    mask: "softenBorder2",
    ...maskOptions.component
  },
  TooltipArrow: {
    mask: "soften",
    ...maskOptions.component
  },
  SliderTrackActive: {
    mask: "inverseSoften",
    ...maskOptions.component
  },
  SliderTrack: {
    mask: "soften2",
    ...maskOptions.component
  },
  SliderThumb: {
    mask: "inverse",
    ...maskOptions.component
  },
  Tooltip: {
    mask: "inverse",
    ...maskOptions.component
  },
  ProgressIndicator: {
    mask: "inverse",
    ...maskOptions.component
  },
  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,
  Input: {
    mask: "softenBorder2",
    ...maskOptions.component
  },
  TextArea: {
    mask: "softenBorder2",
    ...maskOptions.component
  }
};

// node_modules/@tamagui/themes/dist/esm/shadows.js
var lightShadowColor = "rgba(0,0,0,0.04)";
var lightShadowColorStrong = "rgba(0,0,0,0.085)";
var darkShadowColor = "rgba(0,0,0,0.2)";
var darkShadowColorStrong = "rgba(0,0,0,0.3)";
var shadows2 = {
  light: {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor
  },
  dark: {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor
  }
};

// node_modules/@tamagui/theme-builder/dist/esm/ThemeBuilder.js
var _ThemeBuilder = class _ThemeBuilder {
  constructor(state) {
    this.state = state;
  }
  addPalettes(palettes2) {
    return this.state.palettes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.palettes,
      ...palettes2
    }, this;
  }
  addTemplates(templates2) {
    return this.state.templates = {
      // as {} prevents generic string key merge messing up types
      ...this.state.templates,
      ...templates2
    }, this;
  }
  addMasks(masks2) {
    return this.state.masks = {
      // as {} prevents generic string key merge messing up types
      ...this.state.masks,
      ...objectFromEntries(
        objectEntries(masks2).map(([key, val]) => [key, createMask(val)])
      )
    }, this;
  }
  addThemes(themes2) {
    return this.state.themes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...themes2
    }, this;
  }
  addChildThemes(childThemeDefinition, options) {
    const currentThemes = this.state.themes;
    if (!currentThemes)
      throw new Error(
        "No themes defined yet, use addThemes first to set your base themes"
      );
    const currentThemeNames = Object.keys(currentThemes), incomingThemeNames = Object.keys(childThemeDefinition), namesWithDefinitions = currentThemeNames.flatMap((prefix) => {
      const avoidNestingWithin = options == null ? void 0 : options.avoidNestingWithin;
      return avoidNestingWithin && avoidNestingWithin.some(
        (avoidName) => prefix.startsWith(avoidName) || prefix.endsWith(avoidName)
      ) ? [] : incomingThemeNames.map((subName) => {
        const fullName = `${prefix}_${subName}`, definition = childThemeDefinition[subName];
        return "avoidNestingWithin" in definition && definition.avoidNestingWithin.some((name) => prefix.startsWith(name) || prefix.endsWith(name)) ? null : [fullName, definition];
      }).filter(Boolean);
    }), childThemes = Object.fromEntries(namesWithDefinitions), next = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...childThemes
    };
    return this.state.themes = next, this;
  }
  build() {
    var _a, _b, _c;
    if (!this.state.themes)
      return {};
    const out = {}, maskedThemes = [];
    for (const themeName in this.state.themes) {
      const nameParts = themeName.split("_"), parentName = nameParts.slice(0, nameParts.length - 1).join("_"), definitions = this.state.themes[themeName], themeDefinition = Array.isArray(definitions) ? (() => {
        const found = definitions.find(
          // endWith match stronger than startsWith
          (d) => parentName.endsWith(d.parent) || parentName.startsWith(d.parent)
        );
        return found || null;
      })() : definitions;
      if (themeDefinition)
        if ("theme" in themeDefinition)
          out[themeName] = themeDefinition.theme;
        else if ("mask" in themeDefinition)
          maskedThemes.push({ parentName, themeName, mask: themeDefinition });
        else {
          const {
            palette: paletteName,
            template: templateName,
            ...options
          } = themeDefinition;
          if (!this.state.palettes)
            throw new Error(
              `No palettes defined for theme with palette expected: ${themeName}`
            );
          let palette = this.state.palettes[paletteName];
          if (!palette) {
            const fullPaletteName = `${parentName}_${paletteName}`;
            palette = this.state.palettes[fullPaletteName];
          }
          if (!palette)
            throw new Error(`No palette for theme ${themeName}: ${paletteName}`);
          const template2 = (_a = this.state.templates) == null ? void 0 : _a[templateName];
          if (!template2)
            throw new Error(`No template for theme ${themeName}: ${templateName}`);
          out[themeName] = createTheme(palette, template2, options, themeName, true);
        }
    }
    for (const { mask, themeName, parentName } of maskedThemes) {
      const parent = out[parentName];
      if (!parent)
        continue;
      const { mask: maskName, ...options } = mask;
      let maskFunction = (_b = this.state.masks) == null ? void 0 : _b[maskName];
      if (!maskFunction)
        throw new Error(`No mask ${maskFunction}`);
      const parentTheme = this.state.themes[parentName];
      if (parentTheme && "childOptions" in parentTheme) {
        const { mask: mask2, ...childOpts } = parentTheme.childOptions;
        mask2 && (maskFunction = (_c = this.state.masks) == null ? void 0 : _c[mask2]), Object.assign(options, childOpts);
      }
      out[themeName] = applyMask(
        parent,
        maskFunction,
        options,
        parentName,
        themeName
      );
    }
    return out;
  }
};
__name(_ThemeBuilder, "ThemeBuilder");
var ThemeBuilder = _ThemeBuilder;
function createThemeBuilder() {
  return new ThemeBuilder({});
}
__name(createThemeBuilder, "createThemeBuilder");

// node_modules/@tamagui/themes/dist/esm/v2-themes.js
var colorThemeDefinition = /* @__PURE__ */ __name((colorName) => [
  {
    parent: "light",
    palette: colorName,
    template: "colorLight"
  },
  {
    parent: "dark",
    palette: colorName,
    template: "base"
  }
], "colorThemeDefinition");
var nonInherited = {
  light: {
    ...lightColors,
    ...shadows2.light
  },
  dark: {
    ...darkColors,
    ...shadows2.dark
  }
};
var themesBuilder = createThemeBuilder().addPalettes(palettes).addTemplates(templates).addMasks(masks).addThemes({
  light: {
    template: "base",
    palette: "light",
    nonInheritedValues: nonInherited.light
  },
  dark: {
    template: "base",
    palette: "dark",
    nonInheritedValues: nonInherited.dark
  }
}).addChildThemes({
  orange: colorThemeDefinition("orange"),
  yellow: colorThemeDefinition("yellow"),
  green: colorThemeDefinition("green"),
  blue: colorThemeDefinition("blue"),
  purple: colorThemeDefinition("purple"),
  pink: colorThemeDefinition("pink"),
  red: colorThemeDefinition("red"),
  gray: colorThemeDefinition("gray")
}).addChildThemes({
  alt1: {
    mask: "soften",
    ...maskOptions.alt
  },
  alt2: {
    mask: "soften2Border1",
    ...maskOptions.alt
  },
  active: {
    mask: "soften3FlatBorder",
    skip: {
      color: 1
    }
  }
}).addChildThemes(
  {
    ListItem: [
      {
        parent: "light",
        avoidNestingWithin: ["active"],
        mask: "identity",
        ...maskOptions.component
      },
      {
        parent: "dark",
        avoidNestingWithin: ["active"],
        mask: "identity",
        ...maskOptions.component
      }
    ],
    Card: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    Button: {
      mask: "soften2Border1",
      ...maskOptions.component
    },
    Checkbox: {
      mask: "softenBorder2",
      ...maskOptions.component
    },
    Switch: {
      mask: "soften2Border1",
      ...maskOptions.component
    },
    SwitchThumb: {
      mask: "inverseStrengthen2",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    TooltipContent: {
      mask: "soften2Border1",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    DrawerFrame: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    Progress: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    RadioGroupItem: {
      mask: "softenBorder2",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    TooltipArrow: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    SliderTrackActive: {
      mask: "inverseSoften",
      ...maskOptions.component
    },
    SliderTrack: {
      mask: "soften2Border1",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    SliderThumb: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    Tooltip: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    ProgressIndicator: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...maskOptions.component
    },
    SheetOverlay: overlayThemeDefinitions,
    DialogOverlay: overlayThemeDefinitions,
    ModalOverlay: overlayThemeDefinitions,
    Input: {
      mask: "softenBorder2",
      ...maskOptions.component
    },
    TextArea: {
      mask: "softenBorder2",
      ...maskOptions.component
    }
  },
  {
    // to save bundle size but make alt themes not work on components
    // avoidNestingWithin: ['alt1', 'alt2'],
  }
);
var themesIn = themesBuilder.build();
var themes = themesIn;

// node_modules/@tamagui/config/dist/esm/fonts.js
var import_font_inter = __toESM(require_cjs3());
var import_font_silkscreen = __toESM(require_cjs4());

// node_modules/@tamagui/config/dist/esm/createGenericFont.js
var import_web2 = require("@tamagui/core");
var genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};
function createGenericFont(family, font = {}, {
  sizeLineHeight = /* @__PURE__ */ __name((val) => val * 1.35, "sizeLineHeight")
} = {}) {
  const size2 = font.size || genericFontSizes;
  return (0, import_web2.createFont)({
    family,
    size: size2,
    lineHeight: Object.fromEntries(
      Object.entries(size2).map(([k, v]) => [k, sizeLineHeight(+v)])
    ),
    weight: { 0: "300" },
    letterSpacing: { 4: 0 },
    ...font
  });
}
__name(createGenericFont, "createGenericFont");

// node_modules/@tamagui/config/dist/esm/fonts.js
var silkscreenFont = (0, import_font_silkscreen.createSilkscreenFont)();
var headingFont = (0, import_font_inter.createInterFont)(
  {
    size: {
      5: 13,
      6: 15,
      9: 32,
      10: 44
    },
    transform: {
      6: "uppercase",
      7: "none"
    },
    weight: {
      6: "400",
      7: "700"
    },
    color: {
      6: "$colorFocus",
      7: "$color"
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: 0,
      9: -1,
      10: -1.5,
      12: -2,
      14: -3,
      15: -4
    },
    // for native
    face: {
      700: { normal: "InterBold" },
      800: { normal: "InterBold" },
      900: { normal: "InterBold" }
    }
  },
  { sizeLineHeight: (size2) => Math.round(size2 * 1.1 + (size2 < 30 ? 10 : 5)) }
);
var bodyFont = (0, import_font_inter.createInterFont)(
  {
    weight: {
      1: "400",
      7: "600"
    }
  },
  {
    sizeSize: (size2) => Math.round(size2),
    sizeLineHeight: (size2) => Math.round(size2 * 1.1 + (size2 >= 12 ? 8 : 4))
  }
);
var monoFont = createGenericFont(
  '"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  {
    weight: {
      1: "500"
    },
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 22,
      9: 30,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124
    }
  },
  {
    sizeLineHeight: (x) => x * 1.5
  }
);
var fonts = {
  // noto: notoFont as any,
  heading: headingFont,
  body: bodyFont,
  mono: monoFont,
  silkscreen: silkscreenFont
};

// node_modules/@tamagui/config/dist/esm/media.js
var import_react_native_media_driver = __toESM(require_cjs5());
var media = (0, import_react_native_media_driver.createMedia)({
  // for site
  xl: { maxWidth: 1650 },
  lg: { maxWidth: 1280 },
  md: { maxWidth: 1020 },
  sm: { maxWidth: 800 },
  xs: { maxWidth: 660 },
  xxs: { maxWidth: 390 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  gtXl: { minWidth: 1650 + 1 }
});
var mediaQueryDefaultActive = {
  xl: true,
  lg: true,
  md: true,
  sm: true,
  xs: true,
  // false
  xxs: false
};

// node_modules/@tamagui/config/dist/esm/v2-base.js
var config = {
  defaultFont: "body",
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  themes,
  media,
  shorthands,
  tokens,
  fonts,
  mediaQueryDefaultActive,
  selectionStyles: (theme) => theme.color5 ? {
    backgroundColor: theme.color5,
    color: theme.color11
  } : null
};

// node_modules/@tamagui/config/dist/esm/v2.js
var config2 = {
  ...config,
  animations
};

// src/tamagui.config.ts
var import_core = require("@tamagui/core");
var config3 = (0, import_core.createTamagui)(config2);
var tamagui_config_default = config3;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
