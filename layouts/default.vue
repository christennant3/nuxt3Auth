<template>
    <header class="shadow-sm bg-white">

        <nav class="container mx-auto p-4 flex justify-between">
            <nuxt-link to="/" class="font-bold">Site name</nuxt-link>
            <ul class="flex gap-4">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li v-if="!auth.isLoggedIn"><router-link to="/register">Register</router-link></li>
                <li v-if="!auth.isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="auth.isLoggedIn"><a @click="logout" href="#">Log out</a></li>
            </ul>
        </nav>
    </header>
    <main class="container mx-auto p-4">
        <slot />
    </main>
</template>

<script setup>
import { useAuthStore } from '~/stores/useAuthStore'
const auth = useAuthStore();
function logout() {
    debugger;
    auth.logout();
}

</script>

<style lang="scss" scoped></style>