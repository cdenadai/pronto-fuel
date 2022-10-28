import QDialog from "quasar/src/components/dialog/QDialog.js";
import { useSSRContext, mergeProps, unref, withCtx, createVNode, renderSlot, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { useModal } from "momentum-modal";
import QToolbar from "quasar/src/components/toolbar/QToolbar.js";
import QToolbarTitle from "quasar/src/components/toolbar/QToolbarTitle.js";
const _sfc_main$1 = {
  __name: "SlideOver",
  __ssrInlineRender: true,
  setup(__props) {
    const { show, redirect } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(QDialog, mergeProps({
        "model-value": unref(show),
        maximized: "",
        onHide: unref(redirect)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-bg-white"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "tw-bg-white" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/SlideOver.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WelcomeSlideOver",
  __ssrInlineRender: true,
  props: {
    title: String,
    message: String,
    position: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SlideOver = _sfc_main$1;
      _push(ssrRenderComponent(_component_SlideOver, mergeProps({ position: __props.position }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-max-w-sm tw-h-full tw-bg-primary-500 tw-text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(QToolbar, { class: "tw-bg-primary-600" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(QToolbarTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="tw-block tw-px-6 tw-py-4"${_scopeId3}>${ssrInterpolate(__props.title)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "tw-block tw-px-6 tw-py-4" }, toDisplayString(__props.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "tw-block tw-px-6 tw-py-4" }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="tw-p-8"${_scopeId}><span class="tw-text-lg"${_scopeId}>${ssrInterpolate(__props.message)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-max-w-sm tw-h-full tw-bg-primary-500 tw-text-white" }, [
                createVNode(QToolbar, { class: "tw-bg-primary-600" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "tw-block tw-px-6 tw-py-4" }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "tw-p-8" }, [
                  createVNode("span", { class: "tw-text-lg" }, toDisplayString(__props.message), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/WelcomeSlideOver.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
