<template>
    <p>Login</p>

    <p>{{ authStore.token }}</p>

    <p>{{ joke.setup }}</p>

    <p>{{ joke.punchline }}</p>

    <FormKit type="form" submit-label="Login" @submit="handleLogin" v-if="visible.form">

        <FormKit type="email" v-model="form.email" label="Email" validation="required"  />
        <FormKit type="password" v-model="form.password" label="Password" validation="required" />
    </FormKit>

    <template v-if="visible.success">
        <p>You have logged in</p>

         <h2>Roles</h2>

    </template>

   
</template>

<script setup>

import { useAuthStore } from '~/stores/useAuthStore';

const authStore = useAuthStore();
const role = authStore.role;
debugger;

console.log(authStore.token);
console.log(authStore.user);

const form = ref({
    email: '',
    password: ''
});

const visible = ref ({
    success: false,
    form: true
})

async function handleLogin() {
    try {
        const { data, error } = await useFetch('http://localhost:44314/api/User/authenticate', {
            method: 'POST',
            body: {
                username: form.value.email,
                password: form.value.password,
            },
        });
       
        console.log('success');
        console.log(data.value.token);
        
        
        authStore.setToken(data.value.token);

        const loggedInUser = {
            
            id: data.value.id,
            email: data.value.username,
            firstname: data.value.firstname,
            token: data.value.token,
        }
        
        authStore.setUser(loggedInUser);

        //success
        visible.value.success = true;
        visible.value.form = false;


    } catch (error) {
        console.log('error');
        //console.log(error.value.data.message);
    }

}




const { data: joke } = await useFetch('https://official-joke-api.appspot.com/random_joke');
const p = joke;




</script>

<style lang="scss" scoped></style>