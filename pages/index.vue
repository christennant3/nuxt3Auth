<template>
    <p>Home</p>
  <pre>{{ auth.user }}</pre>  

<p>{{ auth.token }}</p>

<p v-if="!auth.isLoggedIn">Not logged In</p>

<p v-if="auth.isLoggedIn">Logged In</p>

</template>

<script setup>
import { useAuthStore } from '~/stores/useAuthStore'
const auth = useAuthStore();
console.log(auth.isLoggedIn);



</script>

<style lang="scss" scoped>
</style>

