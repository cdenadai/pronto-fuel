import { openBlock, createElementBlock, createElementVNode, useSSRContext, computed, mergeProps, unref, onMounted, watch, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, ref, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderSlotInner } from "vue/server-renderer";
import { usePage } from "@inertiajs/inertia-vue3";
import { notify } from "@kyvg/vue3-notification";
import QAjaxBar from "quasar/src/components/ajax-bar/QAjaxBar.js";
import { Inertia } from "@inertiajs/inertia";
import { Modal } from "momentum-modal";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import Dark from "quasar/src/plugins/Dark.js";
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1 = { name: "mdi-close", render: render$1 };
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "mdi-information", render };
const _sfc_main$3 = {
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "info"
    }
  },
  emits: ["dismiss"],
  setup(__props) {
    const props = __props;
    const containerColors = {
      error: [
        "tw-bg-danger-500",
        "tw-shadow-danger-500/30"
      ],
      warning: [
        "tw-bg-warning-400",
        "tw-shadow-warning-400/30"
      ],
      info: [
        "tw-bg-info-500",
        "tw-shadow-info-500/30"
      ],
      success: [
        "tw-bg-success-500",
        "tw-shadow-success-500/30"
      ]
    };
    const containerClasses = computed(() => {
      return containerColors[props.type];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_information = __unplugin_components_0;
      const _component_i_mdi_close = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tw-flex tw-p-4 tw-rounded-lg tw-shadow-md", unref(containerClasses)],
        role: "alert"
      }, _attrs))}><span class="tw-inline-flex tw-h-8 tw-w-8">`);
      _push(ssrRenderComponent(_component_i_mdi_information, { class: "tw-text-white/60 tw-text-lg" }, null, _parent));
      _push(`</span><div class="tw-ml-3 tw-font-medium tw-text-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><button aria-label="Close" type="button" class="tw-inline-flex tw-h-8 tw-w-8 tw-p-1.5 tw-ml-auto -tw-mx-1.5 -tw-my-1.5 tw-rounded-lg tw-transition-all focus:tw-ring-2 tw-text-white/60 hover:tw-bg-white/20 hover:tw-text-white focus:tw-ring-white/50 focus:tw-text-white">`);
      _push(ssrRenderComponent(_component_i_mdi_close, null, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/Alert.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Toasts",
  __ssrInlineRender: true,
  setup(__props) {
    const $page = usePage();
    const toasts = computed(() => {
      return $page.props.value.toasts;
    });
    const renderToasts = (toastsSource) => {
      toastsSource.forEach((toast) => {
        notify(toast);
      });
    };
    onMounted(() => renderToasts(toasts.value));
    watch(toasts, (newToasts) => {
      renderToasts(newToasts);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_notifications = resolveComponent("notifications");
      const _component_Alert = _sfc_main$3;
      _push(ssrRenderComponent(_component_notifications, mergeProps({
        class: "tw-min-w-[300px] tw-p-0 tw-bg-none tw-border-none tw-m-6",
        position: "bottom right"
      }, _attrs), {
        body: withCtx(({ item, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Alert, {
              class: "tw-m-2",
              type: item.type,
              onDismiss: close
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Alert, {
                class: "tw-m-2",
                type: item.type,
                onDismiss: close
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.text), 1)
                ]),
                _: 2
              }, 1032, ["type", "onDismiss"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/Toasts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FadeTransition_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "FadeTransition",
  __ssrInlineRender: true,
  props: {
    id: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Transitions/FadeTransition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useAppShell = defineStore("app-shell", () => {
  var _a, _b, _c, _d;
  const storageKey = ref("app-shell");
  const userId = (_d = (_c = (_b = (_a = usePage().props) == null ? void 0 : _a.value) == null ? void 0 : _b.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.id;
  if (userId) {
    storageKey.value = `${storageKey.value}-${userId}`;
  }
  const defaultSettings = {
    isDark: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  };
  const currentSettings = useStorage(storageKey.value, defaultSettings);
  const setDarkMode = (value = null) => {
    if (value === null) {
      value = currentSettings.value.isDark;
    }
    Dark.set(value);
    const body = document.querySelector("body");
    value ? body.classList.add("tw-dark") : body.classList.remove("tw-dark");
  };
  const toggleDarkMode = () => {
    currentSettings.value.isDark = !currentSettings.value.isDark;
    setDarkMode();
  };
  return {
    setDarkMode,
    toggleDarkMode,
    settings: currentSettings
  };
});
const _sfc_main = {
  __name: "AppShell",
  __ssrInlineRender: true,
  setup(__props) {
    const { setDarkMode } = useAppShell();
    setDarkMode();
    const loadingIndicator = ref(null);
    Inertia.on("start", () => loadingIndicator.value.start());
    Inertia.on("finish", () => loadingIndicator.value.stop());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FadeTransition = _sfc_main$1;
      const _component_Toasts = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FadeTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Modal), null, null, _parent));
      _push(ssrRenderComponent(_component_Toasts, null, null, _parent));
      _push(ssrRenderComponent(QAjaxBar, {
        ref_key: "loadingIndicator",
        ref: loadingIndicator,
        position: "top",
        color: "accent",
        size: "4px",
        "skip-hijack": ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Layouts/AppShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _sfc_main as _,
  _export_sfc as a,
  _sfc_main$1 as b,
  useAppShell as u
};
