<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.jpeg" />
        <Login
            :email="email"
            :password="password"
            @handleFormChange="handleFormChange"
            @handleSubmit="handleSubmit" 
            :user="user"/>
        
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
        user: false
    }),
    mounted: function() {
        
        
    },
    methods: {
        handleFormChange(name, value) {
            this[name] = value
        },
        handleSubmit(name, value) {
            alert('Form Submitted')
            this[name] = ''
            this[value] = ''
        },
        
    }
    }


</script>

<style>
img {
    max-width: 500px;
}
</style>
