import { a as _export_sfc, b as _sfc_main$1 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import { useSSRContext, mergeProps, withCtx, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FadeTransition = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-flex tw-flex-col tw-min-h-screen tw-justify-center tw-items-center tw-p-6" }, _attrs))}><div class="tw-w-full tw-max-w-md">`);
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Layouts/Guest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Guest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Guest as G
};
