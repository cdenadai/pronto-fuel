<template layout="AppShell,Guest">
  <div>
    <Head title="Buy Crypto" />

    <div rounded class="tw-p-8 tw-rounded-3xl tw-shadow-2xl tw-border tw-border-slate-200">

      <div class="tw-flex tw-flex-row tw-w-full tw-mb-4">

        <div class="tw-text-2xl tw-font-bold tw-font-sans tw-mb-5 tw-mr-auto">Comprar MATIC (POLYGON)</div>
        <div class="ml-auto text-right">
          <MenuIcon />
        </div>
      </div>

      <form
        class="tw-flex-col"
        @submit.prevent="form.post(route('register'))"
      >
        <label for="name" class="tw-text-xs tw-text-[#6B677C] tw-font-semibold tw-pb-0 tw-mb-0">Quero gastar</label>
        <q-input
          id="name"
          v-model="form.name"
          :error-message="errors.name"
          :error="!!errors.name"
          type="currency"
          autofocus
          required
          borderless
          class="tw-bg-gray-100 tw-rounded-xl tw-no-border tw-h-12 tw-mb-4"
        />

        <label for="email" class="tw-text-xs tw-text-[#6B677C] tw-font-semibold tw-pb-0 tw-mb-0">Quero comprar</label>
        <q-input
          id="email"
          v-model="form.email"
          :error-message="errors.email"
          :error="!!errors.email"
          type="currency"
          required
          borderless
          class="tw-bg-gray-100 tw-rounded-xl tw-no-border tw-h-12 tw-mb-4 tw-text-base"
        />

        <label for="resume" class="tw-text-xs tw-text-[#6B677C] tw-font-semibold tw-pb-0 tw-mb-0">Resumo</label>
        <q-input
          id="resume"
          v-model="form.resume"
          :error-message="errors.resume"
          :error="!!errors.resume"
          type="text"
          borderless
          class="tw-bg-gray-100 tw-rounded-xl tw-no-border tw-h-12 tw-mb-4"
        />

        <div class="tw-h-36"></div>
        <div class="tw-text-center tw-w-full">
          <div class="tw-text-xs tw-text-[#6B677C] tw-mb-2">Ao continuar você aceita a nossa <strong class="tw-underline">política de privacidade</strong></div>
          <button
            type="submit"
            class="tw-w-full tw-rounded-full tw-bg-[#009FE3] tw-text-white tw-py-2 tw-text-lg"
          >
            Comprar
          </button>
        </div>
      </form>
    </div>


  </div>
</template>

<script setup>
import MenuIcon from '@/Components/Icons/MenuIcon.vue';

const props = defineProps({
  form: Object,
  errors: Object
})

const form = useForm(props.form)
</script>
