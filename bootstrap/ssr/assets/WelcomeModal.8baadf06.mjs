import QDialog from "quasar/src/components/dialog/QDialog.js";
import { useSSRContext, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { useModal } from "momentum-modal";
import QCard from "quasar/src/components/card/QCard.js";
import QToolbar from "quasar/src/components/toolbar/QToolbar.js";
import QToolbarTitle from "quasar/src/components/toolbar/QToolbarTitle.js";
import QCardSection from "quasar/src/components/card/QCardSection.js";
const _sfc_main$1 = {
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const { show, redirect } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(QDialog, mergeProps({
        "model-value": unref(show),
        onHide: unref(redirect)
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WelcomeModal",
  __ssrInlineRender: true,
  props: {
    title: String,
    message: String,
    position: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1;
      _push(ssrRenderComponent(_component_Modal, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(QCard, { class: "tw-text-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(QToolbar, { class: "tw-bg-primary-600" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(QToolbarTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(QToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.title), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(QCardSection, { class: "tw-bg-primary-500" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="tw-text-lg"${_scopeId3}>${ssrInterpolate(__props.message)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "tw-text-lg" }, toDisplayString(__props.message), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(QToolbar, { class: "tw-bg-primary-600" }, {
                      default: withCtx(() => [
                        createVNode(QToolbarTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QCardSection, { class: "tw-bg-primary-500" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "tw-text-lg" }, toDisplayString(__props.message), 1)
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
              createVNode(QCard, { class: "tw-text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbar, { class: "tw-bg-primary-600" }, {
                    default: withCtx(() => [
                      createVNode(QToolbarTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, { class: "tw-bg-primary-500" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-text-lg" }, toDisplayString(__props.message), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/WelcomeModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
