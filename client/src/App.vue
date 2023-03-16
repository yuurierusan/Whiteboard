<template>
    <div id="app">
        <main>
            <Login :user="user"/>
            <router-view header="Whiteboard"></router-view>
        </main>
    </div>
</template>

<script>
import Login from './components/Login.vue'
import { CheckSession } from './services/Auth';
export default {
    name: 'App',
    components: {
        Login,
    },
    data: () => ({
        user: null
    }),
    mounted: function() {
        this.checkToken()
    },
    methods: {
        async checkToken() {
            const response = await CheckSession()
            this.user = response
        }
}
}   
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
