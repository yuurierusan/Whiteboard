<template>
    <div id="app">
        <header> </header>
        <div v-if="!logedIn">
          <img alt="Whiteboard logo" src="../assets/logo.jpeg" />
          <Login
          :email="email"
          :password="password"
          @handleFormChange="handleFormChange"
          @handleSubmit="handleSubmit" />
        </div>
        <div v-if="logedIn">
          <CoursesPage />

        </div>
      </div>
</template>

<script>
import Login from '../components/Login.vue'
import CoursesPage from './CoursesPage.vue'
export default {
    name: 'HomePage',
    components: {
        Login,
        CoursesPage
    },
    data: () => ({
        email: '',
        password: '',
        logedIn: false

    }),
    mounted: function () {},
    methods: {
        handleFormChange(name, value) {
            this[name] = value
        },
        handleSubmit(name, value) {
            this[name] = ''
            this[value] = ''
            this.logedIn = true
        },
    },
}
</script>
