<script>
  import {  RouterView } from 'vue-router'
  import "./index.css"
  import NavigasiVue from './components/Navigasi/NavigasiVue.vue';
  import { useStoreAccount } from './stores/storeAccount';
  import { storeToRefs } from 'pinia';

  export default {
    name: "App",
    beforeMount() {
      const storeAccount = useStoreAccount()
      const {optionsAPI} = storeToRefs(storeAccount)
      storeAccount.cekLogin()

    },
    components: {
      NavigasiVue
    }
  }
</script>

<template>
  <NavigasiVue />
  <RouterView class="bg-light dark:bg-dark h-[110vh] overflow-y-aut pt-[10vh]" />
</template>

