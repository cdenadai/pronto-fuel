import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as __unplugin_components_1 } from "./Logo.90812c6c.mjs";
import QInput from "quasar/src/components/input/QInput.js";
import QCheckbox from "quasar/src/components/checkbox/QCheckbox.js";
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
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String,
    form: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm(props.form);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_AuthLogo = __unplugin_components_1;
      const _component_Link = Link;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthLogo, null, null, _parent));
      _push(`<form class="tw-flex-col tw-space-y-2">`);
      _push(ssrRenderComponent(QInput, {
        id: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        "error-message": __props.errors.email,
        error: !!__props.errors.email,
        label: "Email",
        type: "email",
        autofocus: "",
        autocomplete: "off",
        required: "",
        outlined: ""
      }, null, _parent));
      _push(ssrRenderComponent(QInput, {
        id: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        "error-message": __props.errors.password,
        error: !!__props.errors.password,
        label: "Password",
        type: "password",
        autocomplete: "off",
        required: "",
        outlined: ""
      }, null, _parent));
      _push(ssrRenderComponent(QCheckbox, {
        modelValue: unref(form).remember,
        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
        label: "Remember me"
      }, null, _parent));
      _push(`<div class="tw-flex tw-items-center tw-justify-between">`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("password.request")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Forgot your password? `);
            } else {
              return [
                createTextVNode(" Forgot your password? ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(QBtn, {
        disabled: unref(form).processing,
        type: "submit",
        color: "primary",
        class: "ml-4"
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
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
