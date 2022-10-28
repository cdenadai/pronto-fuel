import { Link, Head } from "@inertiajs/inertia-vue3";
import { useSSRContext, mergeProps, withCtx, renderSlot, openBlock, createElementBlock, createElementVNode, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { a as _export_sfc, _ as _sfc_main$2 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import QBtn from "quasar/src/components/btn/QBtn.js";
import "@kyvg/vue3-notification";
import "quasar/src/components/ajax-bar/QAjaxBar.js";
import "@inertiajs/inertia";
import "momentum-modal";
import "pinia";
import "@vueuse/core";
import "quasar/src/plugins/Dark.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Link = Link;
  _push(ssrRenderComponent(_component_Link, mergeProps({
    "preserve-state": "",
    "preserve-scroll": "",
    only: ["modal"]
  }, _attrs), {
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/DialogLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_3 = { name: "mdi-comment-multiple-outline", render: render$1 };
const _hoisted_1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_2 = { name: "mdi-bell-outline", render };
const Welcome_vue_vue_type_style_index_0_scoped_87c4ef18_lang = "";
const __default__ = {
  layout: [_sfc_main$2]
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Link = Link;
      const _component_i_mdi_bell_outline = __unplugin_components_2;
      const _component_i_mdi_comment_multiple_outline = __unplugin_components_3;
      const _component_DialogLink = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-relative tw-flex tw-items-top tw-justify-center tw-min-h-screen tw-bg-gray-100 dark:tw-bg-gray-900 sm:tw-items-center sm:tw-pt-0" }, _attrs))} data-v-87c4ef18>`);
      _push(ssrRenderComponent(_component_Head, { title: "Welcome" }, null, _parent));
      if (__props.canLogin) {
        _push(`<div class="tw-hidden tw-fixed tw-top-0 tw-right-0 tw-px-6 tw-py-4 sm:tw-block" data-v-87c4ef18>`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("dashboard"),
            class: "tw-text-sm tw-underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("login"),
            class: "tw-text-sm tw-underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(_component_Link, {
              href: _ctx.route("register"),
              class: "tw-ml-4 tw-text-sm tw-underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tw-max-w-6xl tw-mx-auto sm:tw-px-6 lg:tw-px-8" data-v-87c4ef18><div class="tw-flex tw-justify-center tw-pt-8 sm:tw-justify-start sm:tw-pt-0" data-v-87c4ef18><svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="tw-h-16 tw-w-auto tw-text-gray-700 sm:tw-h-20" data-v-87c4ef18><g clip-path="url(#clip0)" fill="#8b5cf6" data-v-87c4ef18><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" data-v-87c4ef18></path></g></svg></div><div class="tw-mt-8 tw-bg-white dark:tw-bg-gray-800 tw-overflow-hidden tw-shadow sm:tw-rounded-lg" data-v-87c4ef18><div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2" data-v-87c4ef18><div class="tw-p-6" data-v-87c4ef18><div class="tw-flex tw-items-center" data-v-87c4ef18><div class="tw-flex tw-justify-center tw-w-[32px] tw-h-[32px]" data-v-87c4ef18>`);
      _push(ssrRenderComponent(_component_i_mdi_bell_outline, { class: "tw-text-2xl tw-text-gray-500" }, null, _parent));
      _push(`</div><div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold" data-v-87c4ef18><span class="tw-text-gray-900 dark:tw-text-white" data-v-87c4ef18>Server Driven Notifications</span></div></div><div class="tw-ml-12" data-v-87c4ef18><div class="tw-mt-2 tw-mb-3 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm" data-v-87c4ef18> Pronto Fuel enables you to show toast notifications from a simple method call on the server. </div><div data-v-87c4ef18>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/notify/success",
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "positive"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Success `);
                } else {
                  return [
                    createTextVNode(" Success ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "positive"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Success ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: "/notify/info",
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Info `);
                } else {
                  return [
                    createTextVNode(" Info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "info"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Info ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: "/notify/warning",
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "warning"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Warning `);
                } else {
                  return [
                    createTextVNode(" Warning ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "warning"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Warning ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: "/notify/error",
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "negative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Error `);
                } else {
                  return [
                    createTextVNode(" Error ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "negative"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Error ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-t-0 md:tw-border-l" data-v-87c4ef18><div class="tw-flex tw-items-center" data-v-87c4ef18><div class="tw-flex tw-justify-center tw-w-[32px] tw-h-[32px]" data-v-87c4ef18>`);
      _push(ssrRenderComponent(_component_i_mdi_comment_multiple_outline, { class: "tw-text-2xl tw-text-gray-500" }, null, _parent));
      _push(`</div><div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold" data-v-87c4ef18><span class="tw-text-gray-900 dark:tw-text-white" data-v-87c4ef18>Server Driven Dialogs</span></div></div><div class="tw-ml-12" data-v-87c4ef18><div class="tw-mt-2 tw-mb-3 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm" data-v-87c4ef18> With Pronto Fuel you can write controllers as you normally do, but get the contents of the page to open on modals and slideovers. </div><div data-v-87c4ef18>`);
      _push(ssrRenderComponent(_component_DialogLink, { href: "/dialog/modal" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Modal `);
                } else {
                  return [
                    createTextVNode(" Modal ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Modal ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DialogLink, { href: "/dialog/slideover/left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` SlideOver from the left `);
                } else {
                  return [
                    createTextVNode(" SlideOver from the left ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" SlideOver from the left ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DialogLink, { href: "/dialog/slideover/right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QBtn, {
              class: "tw-mb-2 tw-mr-2",
              outline: "",
              size: "sm",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` SlideOver from the right `);
                } else {
                  return [
                    createTextVNode(" SlideOver from the right ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(QBtn, {
                class: "tw-mb-2 tw-mr-2",
                outline: "",
                size: "sm",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" SlideOver from the right ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700" data-v-87c4ef18><div class="tw-flex tw-items-center" data-v-87c4ef18><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500" data-v-87c4ef18><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" data-v-87c4ef18></path></svg><div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold" data-v-87c4ef18><a href="https://laravel-news.com/" class="tw-underline tw-text-gray-900 dark:tw-text-white" data-v-87c4ef18>Laravel News</a></div></div><div class="tw-ml-12" data-v-87c4ef18><div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm" data-v-87c4ef18> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </div></div></div><div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-l" data-v-87c4ef18><div class="tw-flex tw-items-center" data-v-87c4ef18><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500" data-v-87c4ef18><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-87c4ef18></path></svg><div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white" data-v-87c4ef18> Vibrant Ecosystem </div></div><div class="tw-ml-12" data-v-87c4ef18><div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm" data-v-87c4ef18> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="tw-underline" data-v-87c4ef18>Forge</a>, <a href="https://vapor.laravel.com" class="tw-underline" data-v-87c4ef18>Vapor</a>, <a href="https://nova.laravel.com" class="tw-underline" data-v-87c4ef18>Nova</a>, and <a href="https://envoyer.io" class="tw-underline" data-v-87c4ef18>Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="tw-underline" data-v-87c4ef18>Cashier</a>, <a href="https://laravel.com/docs/dusk" class="tw-underline" data-v-87c4ef18>Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="tw-underline" data-v-87c4ef18>Echo</a>, <a href="https://laravel.com/docs/horizon" class="tw-underline" data-v-87c4ef18>Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="tw-underline" data-v-87c4ef18>Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="tw-underline" data-v-87c4ef18>Telescope</a>, and more. </div></div></div></div></div><div class="tw-flex tw-justify-center tw-mt-4 sm:tw-items-center sm:tw-justify-between" data-v-87c4ef18><div class="tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-left" data-v-87c4ef18><div class="tw-flex tw-items-center" data-v-87c4ef18><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-tw-mt-px tw-w-5 tw-h-5 tw-text-gray-400" data-v-87c4ef18><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-v-87c4ef18></path></svg><a href="https://laravel.bigcartel.com" class="tw-ml-1 tw-underline" data-v-87c4ef18>Shop</a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-ml-4 -tw-mt-px tw-w-5 tw-h-5 tw-text-gray-400" data-v-87c4ef18><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-87c4ef18></path></svg><a href="https://github.com/sponsors/taylorotwell" class="tw-ml-1 tw-underline" data-v-87c4ef18>Sponsor</a></div></div><div class="tw-ml-4 tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-right sm:tw-ml-0" data-v-87c4ef18> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87c4ef18"]]);
export {
  Welcome as default
};
