<template>
    <div class="container">
        <h1 class="mt-5">Tambah Anggota</h1>
        <div class="mb-3 mt-3">
            <label for="Anggota" class="form-label">Kode</label>
            <input v-model="kode" type="text" class="form-control" placeholder="Masukan kode...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Anggota" class="form-label">Nama</label>
            <input v-model="nama" type="text" class="form-control" placeholder="Masukan nama...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Anggota" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" placeholder="Masukan email...">
        </div>
        <button class="mb-3 mt-3 mr-3 btn btn-success" v-on:click="createAnggota">Tambah</button>
        <router-link to="/anggota">
            <button class="btn btn-danger">Kembali</button>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'CreateAnggota',
        data() {
            return {
                kode: '',
                nama: '',
                email: ''
            }
        },
        methods: {
            createAnggota() {
                axios
                .post("http://127.0.0.1:8000/list-anggotas", {
                    kode: this.kode,
                    nama: this.nama,
                    email: this.email
                })
                .then(() => {
                    alert("Anggota berhasil ditambah");
                    this.$router.push({ path: 'anggota' });
                })
                .catch((error) => {
                   alert(error);
                });
            }
        }
    }
</script>

<style></style>