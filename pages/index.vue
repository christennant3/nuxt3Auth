<template>
    <p>Home</p>
  <pre>{{ auth.user }}</pre>  
</template>

<script setup>
import { useAuthStore } from '~/stores/useAuthStore'
const auth = useAuthStore();
console.log(auth.isLoggedIn);

</script>

<style lang="scss" scoped>
</style>

