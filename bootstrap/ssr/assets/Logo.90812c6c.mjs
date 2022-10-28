import { _ as __unplugin_components_0 } from "./ApplicationLogo.bdf231c6.mjs";
import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { a as _export_sfc } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ApplicationLogo = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-flex tw-justify-center tw-mb-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ApplicationLogo, { class: "tw-w-20 tw-h-20 tw-fill-primary-500 tw-text-gray-500" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Components/Auth/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __unplugin_components_1 as _
};
