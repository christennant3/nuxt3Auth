<template>
    <p>Login</p>

    <p>{{ joke.setup }}</p>

    {{ joke.punchline }}

    <form @submit.prevent="handleLogin">
        <label>Email
            <input v-model="form.email">
        </label>

        <label>Password
            <input type="password" v-model="form.password">
        </label>
        <button>Login</button>

    </form>
</template>

<script setup>
testFunction();


const form = ref({
    email: '',
    password: ''
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

        debugger;
        console.log('success');
        console.log(data.value.token);
        localStorage.setItem('t', data.value.token);

    } catch (error) {
        console.log('error');
        //console.log(error.value.data.message);
    }

}



function testFunction() {
    console.log('test');
}

//import { useFetch } from '@nuxtjs/composition-api';
// import bcrypt from 'bcrypt';


const { data: joke } = await useFetch('https://official-joke-api.appspot.com/random_joke');
const p = joke;


</script>

<style lang="scss" scoped></style>