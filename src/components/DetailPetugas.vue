<template>
    <div class="container">
        <h1 class="mt-5">Edit Petugas</h1>
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
        <button class="mb-3 mt-3 mr-3 btn btn-success" v-on:click="updatePetugas">Update</button>
        <router-link to="/petugas">
            <button class="btn btn-danger">Kembali</button>
        </router-link>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'DetailPetugas',
        data() {
            return {
                kode: '',
                nama: '',
                email: ''
            }
        },
        mounted() {
            axios
            .get('http://127.0.0.1:8000/petugass/' + this.$route.params.id)
            .then(response => (
                this.kode = response.data.kode,
                this.nama = response.data.nama,
                this.email = response.data.email
            ))
            .catch((error) => {
                   alert(error);
                })
        },
        methods: {
            updatePetugas() {
                axios
                .put("http://127.0.0.1:8000/petugass/" + this.$route.params.id, {
                    kode: this.kode,
                    nama: this.nama,
                    email: this.email
                })
                .then(() => {
                    alert("Petugas berhasil diupdate");
                    this.$router.push({ name: 'Petugas' });
                })
                .catch((error) => {
                   alert(error);
                });
            }
        }
    }
</script>

<style></style>