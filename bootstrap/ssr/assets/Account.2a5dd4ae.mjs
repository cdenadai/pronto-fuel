import { Head } from "@inertiajs/inertia-vue3";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import { _ as _sfc_main$2 } from "./Authenticated.39785062.mjs";
import "@kyvg/vue3-notification";
import "quasar/src/components/ajax-bar/QAjaxBar.js";
import "@inertiajs/inertia";
import "momentum-modal";
import "pinia";
import "@vueuse/core";
import "quasar/src/plugins/Dark.js";
import "quasar";
import "quasar/src/components/tooltip/QTooltip.js";
import "./ApplicationLogo.bdf231c6.mjs";
import "quasar/src/components/drawer/QDrawer.js";
import "quasar/src/components/scroll-area/QScrollArea.js";
import "quasar/src/components/toolbar/QToolbar.js";
import "quasar/src/components/toolbar/QToolbarTitle.js";
import "quasar/src/components/btn/QBtn.js";
import "quasar/src/components/avatar/QAvatar.js";
import "quasar/src/components/menu/QMenu.js";
import "quasar/src/components/separator/QSeparator.js";
import "quasar/src/components/toggle/QToggle.js";
import "quasar/src/components/layout/QLayout.js";
import "quasar/src/components/header/QHeader.js";
import "quasar/src/components/space/QSpace.js";
import "quasar/src/components/page/QPageContainer.js";
const __default__ = {
  layout: [_sfc_main$1, _sfc_main$2]
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Account",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-p-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, { title: __props.title }, null, _parent));
      _push(`<h1 class="text-h4">${ssrInterpolate(__props.title)}</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
