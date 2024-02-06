<template>
    <div class="container">
        <h1 class="mt-5">Tambah Buku</h1>
        <div class="mb-3 mt-3">
            <label for="Buku" class="form-label">Kode</label>
            <input v-model="kode" type="text" class="form-control" placeholder="Masukan kode...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Buku" class="form-label">Judul</label>
            <input v-model="judul" type="text" class="form-control" placeholder="Masukan judul...">
        </div>
        <div class="mb-3 mt-5">
            <label for="Buku" class="form-label">Stock</label>
            <input v-model="stock" type="text" class="form-control" placeholder="Masukan stock...">
        </div>
        <button class="mb-3 mt-3 mr-3 btn btn-success" v-on:click="createBuku">Tambah</button>
        <router-link to="/buku">
            <button class="btn btn-danger">Kembali</button>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'CreateBuku',
        data() {
            return {
                kode: '',
                judul: '',
                stock: ''
            }
        },
        methods: {
            createBuku() {
                axios
                .post("http://127.0.0.1:8000/list-bukus", {
                    kode: this.kode,
                    judul: this.judul,
                    stock: this.stock
                })
                .then(() => {
                    alert("Buku berhasil ditambah");
                    this.$router.push({ path: 'buku' });
                })
                .catch((error) => {
                   alert(error);
                });
            }
        }
    }
</script>

<style></style>