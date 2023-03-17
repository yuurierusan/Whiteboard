<template>
    <div id="app">
        <header> </header>
        <div>
          <img class="logo" alt="Whiteboard logo" src="../assets/logo.jpeg" />
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

<style>
    .logo {
        width: 15em;
        height: 15em;
        border-radius: 12px;
        border: 2px solid white;
    }
</style>