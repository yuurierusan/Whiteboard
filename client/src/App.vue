<template>
    <div id="app">
        <header>
            <NavBar />
        </header>
        <main>
            <router-view header="HomePage"></router-view>
        </main>
    </div>
</template>

<script>
import './styles/app.css'
import NavBar from './components/NavBar.vue'
export default {
    name: 'App',
    components: {
        NavBar,
    },
}
</script>

<style>
img {
    max-width: 500px;
}
</style>
