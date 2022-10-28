import { a as _export_sfc, u as useAppShell, b as _sfc_main$7 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import { openBlock, createElementBlock, createElementVNode, useSSRContext, inject, ref, computed, unref, mergeProps, useSlots, withCtx, createBlock, createCommentVNode, renderSlot, createVNode, provide, createTextVNode, isRef, toDisplayString } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { useQuasar } from "quasar";
import { ssrRenderAttrs, ssrRenderSlotInner, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import QTooltip from "quasar/src/components/tooltip/QTooltip.js";
import { _ as __unplugin_components_0$1 } from "./ApplicationLogo.bdf231c6.mjs";
import { Inertia } from "@inertiajs/inertia";
import QDrawer from "quasar/src/components/drawer/QDrawer.js";
import QScrollArea from "quasar/src/components/scroll-area/QScrollArea.js";
import QToolbar from "quasar/src/components/toolbar/QToolbar.js";
import QToolbarTitle from "quasar/src/components/toolbar/QToolbarTitle.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import QAvatar from "quasar/src/components/avatar/QAvatar.js";
import QMenu from "quasar/src/components/menu/QMenu.js";
import QSeparator from "quasar/src/components/separator/QSeparator.js";
import QToggle from "quasar/src/components/toggle/QToggle.js";
import QLayout from "quasar/src/components/layout/QLayout.js";
import QHeader from "quasar/src/components/header/QHeader.js";
import QSpace from "quasar/src/components/space/QSpace.js";
import QPageContainer from "quasar/src/components/page/QPageContainer.js";
import { useLocalStorage } from "@vueuse/core";
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_6 = { name: "mdi-account-outline", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_5 = { name: "mdi-home-outline", render: render$2 };
const NavLinkBookmarker_vue_vue_type_style_index_0_scoped_d1b2fec4_lang = "";
const _sfc_main$6 = {
  __name: "NavLinkBookmarker",
  __ssrInlineRender: true,
  setup(__props) {
    const $q = useQuasar();
    const mini = inject("mini", ref(false));
    const width = inject("width", 0);
    const miniWidth = inject("miniWidth", 0);
    const right = computed(() => {
      if (!mini.value) {
        return "0";
      }
      return width - miniWidth + "px";
    });
    const color = computed(() => {
      return $q.dark.isActive ? "var(--q-dark-page)" : "white";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--d1c3338e": unref(right),
        "--d3645900": unref(color)
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["bookmarker tw-block tw-h-full tw-absolute tw-left-2 tw-rounded-l-md tw-bg-white dark:tw-bg-slate-900 tw-transition-all -tw-z-10 before:tw-contents-[''] before:tw-absolute before:tw-bg-transparent before:tw-box-border before:tw-w-[1.5rem] before:tw-h-[0.75rem] before:tw-right-0 before:tw-bottom-full before:tw-rounded-br-lg before:tw-transition-all after:tw-contents-[''] after:tw-absolute after:tw-bg-transparent after:tw-box-border after:tw-w-[1.5rem] after:tw-h-[0.75rem] after:tw-right-0 after:tw-top-full after:tw-rounded-tr-lg after:tw-transition-all", {
          "before:tw-block after:tw-block": unref($q).screen.gt.xs,
          "tw-right-2 before:tw-hidden after:tw-hidden tw-rounded-r-md": unref($q).screen.xs
        }],
        "data-rounded-r-inverted": unref($q).screen.gt.xs
      }, _attrs, _cssVars))} data-v-d1b2fec4></span>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/NavLinkBookmarker.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d1b2fec4"]]);
const ScaleYTransition_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "ScaleYTransition",
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Transitions/ScaleYTransition.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean
  },
  setup(__props) {
    const slots = useSlots();
    const mini = inject("mini", ref(false));
    const bookmarker = inject("bookmarker", false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScaleYTransition = _sfc_main$5;
      const _component_NavLinkBookmarker = __unplugin_components_1;
      const _component_Link = Link;
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["tw-relative tw-px-[10px]", {
          "tw-z-10": __props.active
        }]
      }, _attrs))}>`);
      if (unref(bookmarker)) {
        _push(ssrRenderComponent(_component_ScaleYTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.active) {
                _push2(ssrRenderComponent(_component_NavLinkBookmarker, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.active ? (openBlock(), createBlock(_component_NavLinkBookmarker, { key: 0 })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Link, mergeProps(_ctx.$attrs, {
        class: ["tw-relative tw-flex tw-w-full tw-items-center tw-space-x-[10px] tw-group tw-rounded-md tw-transition", {
          "tw-text-primary-500 dark:tw-text-primary-400": !__props.active,
          "tw-text-accent-700 hover:tw-text-accent-700 focus:tw-text-accent-700 dark:tw-text-accent-500 dark:hover:tw-text-accent-500 dark:focus:tw-text-accent-500 hover:tw-cursor-default": __props.active,
          "hover:tw-bg-primary-100 dark:hover:tw-bg-slate-700": !unref(mini) && !__props.active
        }]
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!unref(slots).icon) {
              _push2(`<span class="${ssrRenderClass([{
                "group-hover:tw-bg-primary-100 dark:group-hover:tw-bg-slate-700": unref(mini) && !__props.active
              }, "tw-relative tw-flex tw-w-[40px] tw-h-[40px] tw-justify-center tw-items-center tw-rounded-md tw-text-lg tw-transition"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
              if (unref(mini)) {
                _push2(ssrRenderComponent(QTooltip, {
                  anchor: "center right",
                  self: "center left",
                  "transition-show": "jump-right",
                  "transition-hide": "jump-right"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "default")
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([{
              "tw-px-[10px]": !unref(slots).icon
            }, "tw-flex tw-h-[40px] tw-items-center"])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              !!unref(slots).icon ? (openBlock(), createBlock("span", {
                key: 0,
                class: ["tw-relative tw-flex tw-w-[40px] tw-h-[40px] tw-justify-center tw-items-center tw-rounded-md tw-text-lg tw-transition", {
                  "group-hover:tw-bg-primary-100 dark:group-hover:tw-bg-slate-700": unref(mini) && !__props.active
                }]
              }, [
                renderSlot(_ctx.$slots, "icon"),
                unref(mini) ? (openBlock(), createBlock(QTooltip, {
                  key: 0,
                  anchor: "center right",
                  self: "center left",
                  "transition-show": "jump-right",
                  "transition-hide": "jump-right"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              createVNode("span", {
                class: ["tw-flex tw-h-[40px] tw-items-center", {
                  "tw-px-[10px]": !unref(slots).icon
                }]
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/NavLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "NavList",
  __ssrInlineRender: true,
  props: {
    bookmarker: Boolean
  },
  setup(__props) {
    const props = __props;
    provide("bookmarker", props.bookmarker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "tw-relative tw-z-0 tw-py-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/NavList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavDrawer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "NavDrawer",
  __ssrInlineRender: true,
  props: {
    width: {
      type: Number,
      default: 240
    },
    miniWidth: {
      type: Number,
      default: 60
    },
    isOpen: Boolean,
    mini: Boolean
  },
  emits: [
    "update:isOpen",
    "update:mini"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const $q = useQuasar();
    const pixelWidth = computed(() => props.width + "px");
    const pixelMiniWidth = computed(() => props.miniWidth + "px");
    const isMini = computed({
      get() {
        return props.mini;
      },
      set() {
        emit("update:mini");
      }
    });
    provide("mini", isMini);
    provide("width", props.width);
    provide("miniWidth", props.miniWidth);
    Inertia.on("navigate", () => {
      if (props.isOpen && $q.screen.xs) {
        emit("update:isOpen", false);
      }
    });
    const breakpoint = $q.screen.sizes.sm - 1;
    let previousWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (previousWidth < breakpoint && breakpoint < window.innerWidth) {
        if (props.isOpen) {
          emit("update:isOpen", false);
        }
        setTimeout(() => emit("update:isOpen", true), 1e3);
      }
      previousWidth = window.innerWidth;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ApplicationLogo = __unplugin_components_0$1;
      const _cssVars = { style: {
        "--76f598be": unref(pixelWidth),
        "--045ed80a": unref(pixelMiniWidth)
      } };
      _push(ssrRenderComponent(QDrawer, mergeProps({
        "show-if-above": "",
        side: "left",
        "model-value": __props.isOpen,
        width: __props.width,
        mini: unref(isMini),
        "mini-width": __props.miniWidth,
        breakpoint,
        class: "tw-bg-primary-50 dark:tw-bg-slate-800",
        "onUpdate:modelValue": ($event) => emit("update:isOpen")
      }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QScrollArea, { class: "fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="drawer__content"${_scopeId2}>`);
                  _push3(ssrRenderComponent(QToolbar, { class: "drawer__toolbar tw-bg-primary-500 text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="drawer__logo tw-flex tw-justify-center tw-items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ApplicationLogo, { class: "tw-w-9 tw-fill-white" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="tw-font-extralight"${_scopeId4}>Pronto Fuel</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "tw-font-extralight" }, "Pronto Fuel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "drawer__logo tw-flex tw-justify-center tw-items-center" }, [
                            createVNode(_component_ApplicationLogo, { class: "tw-w-9 tw-fill-white" })
                          ]),
                          createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "tw-font-extralight" }, "Pronto Fuel")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "drawer__content" }, [
                      createVNode(QToolbar, { class: "drawer__toolbar tw-bg-primary-500 text-white" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "drawer__logo tw-flex tw-justify-center tw-items-center" }, [
                            createVNode(_component_ApplicationLogo, { class: "tw-w-9 tw-fill-white" })
                          ]),
                          createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "tw-font-extralight" }, "Pronto Fuel")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QScrollArea, { class: "fit" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "drawer__content" }, [
                    createVNode(QToolbar, { class: "drawer__toolbar tw-bg-primary-500 text-white" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "drawer__logo tw-flex tw-justify-center tw-items-center" }, [
                          createVNode(_component_ApplicationLogo, { class: "tw-w-9 tw-fill-white" })
                        ]),
                        createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "tw-font-extralight" }, "Pronto Fuel")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    renderSlot(_ctx.$slots, "default")
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/NavDrawer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M13 3h-2v10h2V3m4.83 2.17l-1.42 1.42A6.944 6.944 0 0 1 19 12a7 7 0 0 1-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17a9.001 9.001 0 0 0-1.03 12.69c3.22 3.78 8.9 4.24 12.69 1.02A9.003 9.003 0 0 0 21 12c0-2.63-1.16-5.13-3.17-6.83Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_3 = { name: "mdi-power-standby", render: render$1 };
const _sfc_main$1 = {
  __name: "AccountMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { settings, toggleDarkMode } = useAppShell();
    const dark = computed({
      get() {
        return settings.isDark;
      },
      set() {
        toggleDarkMode();
      }
    });
    const isOpen = ref(false);
    const user = usePage().props.value.auth.user;
    Inertia.on("navigate", () => {
      isOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavList = _sfc_main$3;
      const _component_NavLink = _sfc_main$4;
      const _component_i_mdi_account_outline = __unplugin_components_6;
      const _component_i_mdi_power_standby = __unplugin_components_3;
      _push(ssrRenderComponent(QBtn, mergeProps({
        flat: "",
        stretch: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row items-center no-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(QAvatar, { size: "32px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(user).avatar)}${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(user).avatar
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(QMenu, {
              modelValue: isOpen.value,
              "onUpdate:modelValue": ($event) => isOpen.value = $event,
              "transition-show": "jump-down",
              "transition-hide": "jump-up",
              anchor: "bottom right",
              self: "top right",
              "max-width": "260px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-flex tw-items-center tw-p-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(QAvatar, {
                    size: "32px",
                    class: "tw-mr-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(user).avatar)}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(user).avatar
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="tw-opacity-60"${_scopeId2}><span class="tw-block tw-font-semibold"${_scopeId2}>${ssrInterpolate(unref(user).name)}</span><span class="tw-block tw-text-xs"${_scopeId2}>${ssrInterpolate(unref(user).email)}</span></div></div>`);
                  _push3(ssrRenderComponent(QSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NavList, { class: "tw-w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NavLink, {
                          href: _ctx.route("account.index"),
                          active: _ctx.route().current("account.index")
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_i_mdi_account_outline, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_i_mdi_account_outline)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` My Account `);
                            } else {
                              return [
                                createTextVNode(" My Account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(QSeparator, { spaced: "" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(QToggle, {
                          modelValue: unref(dark),
                          "onUpdate:modelValue": ($event) => isRef(dark) ? dark.value = $event : null,
                          color: "deep-purple-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="tw-opacity-60"${_scopeId4}>Dark Mode</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "tw-opacity-60" }, "Dark Mode")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(QSeparator, { spaced: "" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NavLink, {
                          href: _ctx.route("logout"),
                          method: "post",
                          as: "button"
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_i_mdi_power_standby, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_i_mdi_power_standby)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Logout `);
                            } else {
                              return [
                                createTextVNode(" Logout ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NavLink, {
                            href: _ctx.route("account.index"),
                            active: _ctx.route().current("account.index")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_i_mdi_account_outline)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" My Account ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"]),
                          createVNode(QSeparator, { spaced: "" }),
                          createVNode(QToggle, {
                            modelValue: unref(dark),
                            "onUpdate:modelValue": ($event) => isRef(dark) ? dark.value = $event : null,
                            color: "deep-purple-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "tw-opacity-60" }, "Dark Mode")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(QSeparator, { spaced: "" }),
                          createVNode(_component_NavLink, {
                            href: _ctx.route("logout"),
                            method: "post",
                            as: "button"
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_i_mdi_power_standby)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Logout ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "tw-flex tw-items-center tw-p-4" }, [
                      createVNode(QAvatar, {
                        size: "32px",
                        class: "tw-mr-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(user).avatar
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "tw-opacity-60" }, [
                        createVNode("span", { class: "tw-block tw-font-semibold" }, toDisplayString(unref(user).name), 1),
                        createVNode("span", { class: "tw-block tw-text-xs" }, toDisplayString(unref(user).email), 1)
                      ])
                    ]),
                    createVNode(QSeparator),
                    createVNode(_component_NavList, { class: "tw-w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_NavLink, {
                          href: _ctx.route("account.index"),
                          active: _ctx.route().current("account.index")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_i_mdi_account_outline)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" My Account ")
                          ]),
                          _: 1
                        }, 8, ["href", "active"]),
                        createVNode(QSeparator, { spaced: "" }),
                        createVNode(QToggle, {
                          modelValue: unref(dark),
                          "onUpdate:modelValue": ($event) => isRef(dark) ? dark.value = $event : null,
                          color: "deep-purple-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "tw-opacity-60" }, "Dark Mode")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(QSeparator, { spaced: "" }),
                        createVNode(_component_NavLink, {
                          href: _ctx.route("logout"),
                          method: "post",
                          as: "button"
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_i_mdi_power_standby)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Logout ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "row items-center no-wrap" }, [
                createVNode(QAvatar, { size: "32px" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: unref(user).avatar
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(QMenu, {
                modelValue: isOpen.value,
                "onUpdate:modelValue": ($event) => isOpen.value = $event,
                "transition-show": "jump-down",
                "transition-hide": "jump-up",
                anchor: "bottom right",
                self: "top right",
                "max-width": "260px"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-flex tw-items-center tw-p-4" }, [
                    createVNode(QAvatar, {
                      size: "32px",
                      class: "tw-mr-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(user).avatar
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "tw-opacity-60" }, [
                      createVNode("span", { class: "tw-block tw-font-semibold" }, toDisplayString(unref(user).name), 1),
                      createVNode("span", { class: "tw-block tw-text-xs" }, toDisplayString(unref(user).email), 1)
                    ])
                  ]),
                  createVNode(QSeparator),
                  createVNode(_component_NavList, { class: "tw-w-full" }, {
                    default: withCtx(() => [
                      createVNode(_component_NavLink, {
                        href: _ctx.route("account.index"),
                        active: _ctx.route().current("account.index")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_i_mdi_account_outline)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" My Account ")
                        ]),
                        _: 1
                      }, 8, ["href", "active"]),
                      createVNode(QSeparator, { spaced: "" }),
                      createVNode(QToggle, {
                        modelValue: unref(dark),
                        "onUpdate:modelValue": ($event) => isRef(dark) ? dark.value = $event : null,
                        color: "deep-purple-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "tw-opacity-60" }, "Dark Mode")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(QSeparator, { spaced: "" }),
                      createVNode(_component_NavLink, {
                        href: _ctx.route("logout"),
                        method: "post",
                        as: "button"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_i_mdi_power_standby)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Logout ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/AccountMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "mdi-menu", render };
const _sfc_main = {
  __name: "Authenticated",
  __ssrInlineRender: true,
  setup(__props) {
    const $q = useQuasar();
    const page = usePage();
    const isNavDrawerOpen = ref($q.screen.gt.xs);
    const layout = useLocalStorage(`authenticated-layout-${page.props.value.auth.user.id}`, {
      navigationDrawer: {
        mini: true
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_menu = __unplugin_components_0;
      const _component_AccountMenu = _sfc_main$1;
      const _component_NavDrawer = _sfc_main$2;
      const _component_NavList = _sfc_main$3;
      const _component_NavLink = _sfc_main$4;
      const _component_i_mdi_home_outline = __unplugin_components_5;
      const _component_i_mdi_account_outline = __unplugin_components_6;
      const _component_FadeTransition = _sfc_main$7;
      _push(ssrRenderComponent(QLayout, mergeProps({ view: "lhr lpr lfr" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(QToolbar, { class: "tw-bg-primary-800" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(QBtn, {
                          dense: "",
                          flat: "",
                          round: "",
                          onClick: ($event) => unref($q).screen.xs ? isNavDrawerOpen.value = !isNavDrawerOpen.value : unref(layout).navigationDrawer.mini = !unref(layout).navigationDrawer.mini
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_i_mdi_menu, { class: "tw-text-lg" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_i_mdi_menu, { class: "tw-text-lg" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="tw-font-extralight"${_scopeId4}>${ssrInterpolate(_ctx.$page.props.title)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "tw-font-extralight" }, toDisplayString(_ctx.$page.props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(QSpace, { class: "tw-hidden sm:tw-flex" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AccountMenu, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(QBtn, {
                            dense: "",
                            flat: "",
                            round: "",
                            onClick: ($event) => unref($q).screen.xs ? isNavDrawerOpen.value = !isNavDrawerOpen.value : unref(layout).navigationDrawer.mini = !unref(layout).navigationDrawer.mini
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_i_mdi_menu, { class: "tw-text-lg" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "tw-font-extralight" }, toDisplayString(_ctx.$page.props.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(QSpace, { class: "tw-hidden sm:tw-flex" }),
                          createVNode(_component_AccountMenu)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(QToolbar, { class: "tw-bg-primary-800" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          dense: "",
                          flat: "",
                          round: "",
                          onClick: ($event) => unref($q).screen.xs ? isNavDrawerOpen.value = !isNavDrawerOpen.value : unref(layout).navigationDrawer.mini = !unref(layout).navigationDrawer.mini
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_i_mdi_menu, { class: "tw-text-lg" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "tw-font-extralight" }, toDisplayString(_ctx.$page.props.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QSpace, { class: "tw-hidden sm:tw-flex" }),
                        createVNode(_component_AccountMenu)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NavDrawer, {
              "is-open": isNavDrawerOpen.value,
              "onUpdate:is-open": ($event) => isNavDrawerOpen.value = $event,
              mini: unref(layout).navigationDrawer.mini,
              "onUpdate:mini": ($event) => unref(layout).navigationDrawer.mini = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NavList, { bookmarker: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NavLink, {
                          href: _ctx.route("dashboard"),
                          active: _ctx.route().current("dashboard")
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_i_mdi_home_outline, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_i_mdi_home_outline)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Dashboard `);
                            } else {
                              return [
                                createTextVNode(" Dashboard ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NavLink, {
                          href: _ctx.route("account.index"),
                          active: _ctx.route().current("account.index")
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_i_mdi_account_outline, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_i_mdi_account_outline)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Account `);
                            } else {
                              return [
                                createTextVNode(" Account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NavLink, {
                            href: _ctx.route("dashboard"),
                            active: _ctx.route().current("dashboard")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_i_mdi_home_outline)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Dashboard ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"]),
                          createVNode(_component_NavLink, {
                            href: _ctx.route("account.index"),
                            active: _ctx.route().current("account.index")
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_i_mdi_account_outline)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Account ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NavList, { bookmarker: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_NavLink, {
                          href: _ctx.route("dashboard"),
                          active: _ctx.route().current("dashboard")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_i_mdi_home_outline)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Dashboard ")
                          ]),
                          _: 1
                        }, 8, ["href", "active"]),
                        createVNode(_component_NavLink, {
                          href: _ctx.route("account.index"),
                          active: _ctx.route().current("account.index")
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_i_mdi_account_outline)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Account ")
                          ]),
                          _: 1
                        }, 8, ["href", "active"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(QPageContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FadeTransition, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FadeTransition, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QHeader, null, {
                default: withCtx(() => [
                  createVNode(QToolbar, { class: "tw-bg-primary-800" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        dense: "",
                        flat: "",
                        round: "",
                        onClick: ($event) => unref($q).screen.xs ? isNavDrawerOpen.value = !isNavDrawerOpen.value : unref(layout).navigationDrawer.mini = !unref(layout).navigationDrawer.mini
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_i_mdi_menu, { class: "tw-text-lg" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(QToolbarTitle, { class: "tw-flex tw-items-center" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "tw-font-extralight" }, toDisplayString(_ctx.$page.props.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(QSpace, { class: "tw-hidden sm:tw-flex" }),
                      createVNode(_component_AccountMenu)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NavDrawer, {
                "is-open": isNavDrawerOpen.value,
                "onUpdate:is-open": ($event) => isNavDrawerOpen.value = $event,
                mini: unref(layout).navigationDrawer.mini,
                "onUpdate:mini": ($event) => unref(layout).navigationDrawer.mini = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_NavList, { bookmarker: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_NavLink, {
                        href: _ctx.route("dashboard"),
                        active: _ctx.route().current("dashboard")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_i_mdi_home_outline)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Dashboard ")
                        ]),
                        _: 1
                      }, 8, ["href", "active"]),
                      createVNode(_component_NavLink, {
                        href: _ctx.route("account.index"),
                        active: _ctx.route().current("account.index")
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_i_mdi_account_outline)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" Account ")
                        ]),
                        _: 1
                      }, 8, ["href", "active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["is-open", "onUpdate:is-open", "mini", "onUpdate:mini"]),
              createVNode(QPageContainer, null, {
                default: withCtx(() => [
                  createVNode(_component_FadeTransition, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Layouts/Authenticated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
