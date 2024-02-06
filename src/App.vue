<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link to="/" class="navbar-brand">Home</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/petugas" class="navbar-brand">Petugas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/anggota" class="navbar-brand">Anggota</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/buku" class="navbar-brand">Buku</router-link>
                    </li>
                    </ul>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/sign-in" class="navbar-brand">Sign In</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style scoped>

</style>