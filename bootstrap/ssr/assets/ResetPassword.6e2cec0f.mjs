import { _ as __unplugin_components_1 } from "./Logo.90812c6c.mjs";
import { useForm, Head } from "@inertiajs/inertia-vue3";
import QInput from "quasar/src/components/input/QInput.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import { G as Guest } from "./Guest.56b433cd.mjs";
import "./ApplicationLogo.bdf231c6.mjs";
import "@kyvg/vue3-notification";
import "quasar/src/components/ajax-bar/QAjaxBar.js";
import "@inertiajs/inertia";
import "momentum-modal";
import "pinia";
import "@vueuse/core";
import "quasar/src/plugins/Dark.js";
const __default__ = {
  layout: [_sfc_main$1, Guest]
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm(props.form);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_AuthLogo = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthLogo, null, null, _parent));
      _push(`<form class="tw-flex-col tw-space-y-2">`);
      _push(ssrRenderComponent(QInput, {
        id: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        "error-message": __props.errors.password,
        error: !!__props.errors.password,
        type: "password",
        label: "Password",
        autocomplete: "new-password",
        outlined: ""
      }, null, _parent));
      _push(ssrRenderComponent(QInput, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        "error-message": __props.errors.password_confirmation,
        error: !!__props.errors.password_confirmation,
        label: "Password confirmation",
        type: "password",
        autocomplete: "new-password",
        outlined: ""
      }, null, _parent));
      _push(`<div class="tw-flex tw-items-center tw-justify-end">`);
      _push(ssrRenderComponent(QBtn, {
        disabled: unref(form).processing,
        type: "submit",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset Password `);
          } else {
            return [
              createTextVNode(" Reset Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
