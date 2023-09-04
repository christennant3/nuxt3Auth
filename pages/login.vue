<template>
    <h1>Login</h1>

    <p>{{ authStore.token }}</p>

    <p>{{ joke.setup }}</p>

    <p>{{ joke.punchline }}</p>

    <FormKit type="form" submit-label="Login" @submit="handleLogin" v-if="visible.form">

        <FormKit type="email" v-model="form.email" label="Email" validation="required" />
        <FormKit type="password" v-model="form.password" label="Password" validation="required" />
    </FormKit>

    <p class="error">{{ errorMessage }}</p>

    <template v-if="visible.success">
        <p>You have logged in</p>


        <p><b>Role: {{ authStore.user.role }} </b></p>

    </template>
</template>

<script setup>

import { useAuthStore } from '~/stores/useAuthStore';

const authStore = useAuthStore();
//const role = authStore.role;
debugger;

/* console.log(authStore.token);
console.log(authStore.user); */

const form = ref({
    email: '',
    password: ''
});

const visible = ref({
    success: false,
    form: true
});
const errorMessage = ref(null);

async function handleLogin() {
    try {
        const { data, error } = await useFetch('http://localhost:44314/api/User/authenticate', {
            method: 'POST',
            body: {
                username: form.value.email,
                password: form.value.password,
            },
        });

        debugger;
        if (error.value !== null) {
            debugger;
            errorMessage.value = error.value.data.message;

        } else {
            console.log('success');
            console.log(data.value.token);


            authStore.setToken(data.value.token);

            const loggedInUser = {

                id: data.value.id,
                email: data.value.username,
                firstname: data.value.firstname,
                token: data.value.token,
                role: data.value.role
            }

            authStore.setUser(loggedInUser);


            //success
            visible.value.success = true;
            visible.value.form = false;
        }






    } catch (error) {

        console.log('error');
        //console.log(error.value.data.message);
        debugger;
    }

}




const { data: joke } = await useFetch('https://official-joke-api.appspot.com/random_joke');
const p = joke;




</script>

<style lang="scss" scoped></style>