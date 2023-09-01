
<template>
    <div>
        <h1>Admin</h1>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';

const authStore = useAuthStore();
const role = authStore.user?.role;

if (role !== 'Admin') {
    console.log('You are not an admin');
    navigateTo('/403');
}


</script>

<style scoped></style>