<template>
    <div class="container">
        <h1 class="mt-5 fw-bold">Sign Up</h1>
        <div class="mb-3 mt-3">
            <label for="Anggota" class="form-label">Username</label>
            <input v-model="kode" type="text" class="form-control" placeholder="Masukan username...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Anggota" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" placeholder="Masukan email...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Anggota" class="form-label">Password</label>
            <input v-model="nama" type="password" class="form-control" placeholder="Masukan password...">
        </div>
        <p>Already have an account? Sign in <router-link to="/sign-in" class="here">here</router-link></p>
        <button class="mb-3 mt-3 mr-3 btn btn-success">Sign Up</button>
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
    }
</script>

<style scoped>
    .container {
        margin-left: 400px;
    }

    h1 {
        margin-left: 140px;
        margin-bottom: 50px;
    }

    input {
        width: 400px;
    }

    button {
        margin-left: 170px;
        margin-top: 15px;
    }

    p {
        margin-left: 65px;
    }
</style>