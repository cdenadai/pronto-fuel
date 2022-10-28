import { useForm, Head } from "@inertiajs/inertia-vue3";
import QInput from "quasar/src/components/input/QInput.js";
import QBtn from "quasar/src/components/btn/QBtn.js";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./_plugin-vue_export-helper.ce2e2cab.mjs";
import { G as Guest } from "./Guest.56b433cd.mjs";
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
  __name: "Buy",
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Buy Crypto" }, null, _parent));
      _push(`<div class="tw-text-3xl tw-font-bold tw-font-sans">Comprar MATIC (POLYGON)</div><form class="tw-flex-col tw-space-y-2">`);
      _push(ssrRenderComponent(QInput, {
        id: "name",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        "error-message": __props.errors.name,
        error: !!__props.errors.name,
        label: "Quero gastar",
        type: "currency",
        autofocus: "",
        required: "",
        outlined: ""
      }, null, _parent));
      _push(ssrRenderComponent(QInput, {
        id: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        "error-message": __props.errors.email,
        error: !!__props.errors.email,
        label: "Quero comprar",
        type: "currency",
        required: "",
        outlined: ""
      }, null, _parent));
      _push(ssrRenderComponent(QInput, {
        id: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        "error-message": __props.errors.email,
        error: !!__props.errors.email,
        label: "Resumo",
        type: "text",
        outlined: ""
      }, null, _parent));
      _push(`<div class="tw-flex tw-items-center tw-justify-between">`);
      _push(ssrRenderComponent(QBtn, {
        disabled: unref(form).processing,
        type: "submit",
        color: "primary",
        rounded: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Comprar `);
          } else {
            return [
              createTextVNode(" Comprar ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/frontend/Pages/Crypto/Buy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
