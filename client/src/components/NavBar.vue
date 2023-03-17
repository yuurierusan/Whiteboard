<template>
    <nav>
        <router-link to="/" name="HomePage">Home</router-link>
        <router-link to="/about" name="AboutPage">About</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
.router-link-exact-active {
    color: lightskyblue;
}
nav {
    background: grey;
    padding: 1em;
}
nav a {
    margin: 1em;
    color: #eee;
    text-decoration: none;
    font-weight: 800;
}
</style>
