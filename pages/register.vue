<template>
    <div>
        <form @submit.prevent="createAccount" v-if="!success">
            <label>Email
                <input v-model="form.email" type="email" aria-label="Email">
            </label>

            <label>Password
                <input type="password" v-model="form.password" aria-label="Password">
            </label>

            <label>Firstname
                <input type="text" v-model="form.firstname" aria-label="Firstname">
            </label>

            <label>Surname
                <input type="text" v-model="form.surname" aria-label="Surname">
            </label>

            <button>Register</button>

            <p class="text-red-500">{{ errorMessage }}</p>

        </form>
        <template v-else>
            <p>Account created</p>
            <p><router-link to="/login">Login here</router-link></p>
        </template>
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
const success = ref(false);


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
        debugger;
        if (error.value !== null) {
            errorMessage.value = error.value.data.message;

        } else {
            success.value = true;
        }


    } catch (error) {
        console.log('error');
    }

}
</script>

<style lang="scss" scoped></style>