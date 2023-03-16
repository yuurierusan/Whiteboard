<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.jpeg" />
        <Login
            :email="email"
            :password="password"
            @handleFormChange="handleFormChange"
            @handleSubmit="handleSubmit" />
        <!-- <div class="form-container">
            <form @submit="handleSubmit">
                <input
                    placeholder="Email"
                    :value="email"
                    name="email"
                    type="email"
                    v-on:input="handleFormChange" />
                <input
                    placeholder="Password"
                    :value="password"
                    name="password"
                    type="password"
                    @input="handleFormChange" />
                <button>Log In</button>
            </form>
        </div> -->
    </div>
</template>

<script>
import './styles/app.css'
import Login from './components/Login.vue'

export default {
    name: 'App',
    components: {
        Login,
    },
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        handleFormChange(name, value) {
            this[name] = value
        },
        handleSubmit(name, value) {
            alert('Form Submitted')
            this[name] = ''
            this[value] = ''
        },
    },
}
</script>

<style>
img {
    max-width: 500px;
}
</style>
