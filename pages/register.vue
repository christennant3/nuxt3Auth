<template>
    <div>
        <form @submit.prevent="createAccount">
            <label>Email
                <input v-model="form.email" type="email" aria-label="Email">
            </label>

            <label>Password
                <input type="password" v-model="form.password" aria-label="Password">
            </label>
            <button>Register</button>

            <p>{{ errorMessage }}</p>

        </form>
    </div>
</template>

<script setup>
const form = ref({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    firstname: '',
    surname: '',
    active: true,
});
const errorMessage = ref(null);


async function createAccount() {
    try {
        const { data, error } = await useFetch('http://localhost:44314/api/User/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                username: form.value.email,
                password: form.value.password,
                firstname: form.value.firstname,
                surname: form.value.surname,
                active: true,
                role: 'Admin'
            },
        });

        if(error !== null) {
            errorMessage.value = error.value.data.message;
            const dsfasfd = error.value.data.message;
            debugger;
        }
        

    } catch (error) {
        console.log('error');  
    }

}
</script>

<style lang="scss" scoped></style>