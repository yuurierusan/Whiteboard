<template>
    <div id="app">
        <header> </header>
        <div>
            <img alt="Whiteboard logo" src="../assets/logo.jpeg" />
            <Login
                :email="email"
                :password="password"
                @handleFormChange="handleFormChange"
                @handleSubmit="handleSubmit" />
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
    name: 'HomePage',
    components: {
        Login,
    },
    data: () => ({
        email: '',
        password: '',
    }),
    mounted: function () {},
    methods: {
        handleFormChange(name, value) {
            this[name] = value
        },
        handleSubmit(name, value) {
            this[name] = ''
            this[value] = ''
        },
    },
}
</script>
