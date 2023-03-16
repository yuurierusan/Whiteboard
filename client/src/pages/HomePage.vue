<template>
    <div id="app">
        <header>
            <NavBar />
        </header>
        <main>
            <router-view header="Whiteboard"></router-view>
        </main>
        <Login />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar,
    },
}
</script>
