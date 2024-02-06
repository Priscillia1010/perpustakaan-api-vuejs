<template>
    <div class="container">
        <h1 class="mt-5">Tambah Petugas</h1>
        <div class="mb-3 mt-3">
            <label for="Petugas" class="form-label">Kode</label>
            <input v-model="kode" type="text" class="form-control" placeholder="Masukan kode...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Petugas2" class="form-label">Nama</label>
            <input v-model="nama" type="text" class="form-control" placeholder="Masukan nama...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Petugas2" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" placeholder="Masukan email...">
        </div>
        <button class="mb-3 mt-3 mr-3 btn btn-success" v-on:click="createPetugas">Tambah</button>
        <router-link to="/petugas">
            <button class="btn btn-danger">Kembali</button>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'CreatePetugas',
        data() {
            return {
                kode: '',
                nama: '',
                email: ''
            }
        },
        methods: {
            createPetugas() {
                axios
                .post("http://127.0.0.1:8000/list-petugass", {
                    kode: this.kode,
                    nama: this.nama,
                    email: this.email
                })
                .then(() => {
                    alert("Petugas berhasil ditambah");
                    this.$router.push({ path: 'petugas' });
                })
                .catch((error) => {
                   alert(error);
                });
            }
        }
    }
</script>

<style></style>