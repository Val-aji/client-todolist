<script>
  import {  RouterView } from 'vue-router'
  import "./index.css"
  import { useStoreAccount } from './stores/storeAccount';
  
  
  export default {
    name: "App",
    setup() {
      const storeAccount = useStoreAccount()
      const {cekLogin} = storeAccount
      
      return {cekLogin}
    },
    beforeMount() {
      this.cekLogin()
    },
  }
</script>

<template>
  <RouterView ref="componentUtama"/>
</template>

