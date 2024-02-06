<template>
    <div class="container">
        <h1 class="mt-5">Hapus Buku</h1>
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
        <button class="mb-3 mt-3 mr-3 btn btn-success" v-on:click="deleteBuku">Hapus</button>
        <router-link to="/buku">
            <button class="btn btn-danger">Kembali</button>
        </router-link>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'DeleteBuku',
        data() {
            return {
                kode: '',
                judul: '',
                stock: ''
            }
        },
        mounted() {
            axios
            .get('http://127.0.0.1:8000/bukus/' + this.$route.params.id)
            .then(response => (
                this.kode = response.data.kode,
                this.judul = response.data.judul,
                this.stock = response.data.stock
            ))
            .catch((error) => {
                   alert(error);
                })
        },
        methods: {
            deleteBuku() {
                axios
                .delete("http://127.0.0.1:8000/bukus/" + this.$route.params.id)
                .then(() => {
                    alert("Buku berhasil dihapus");
                    this.$router.push({ name: 'Buku' });
                })
                .catch((error) => {
                   alert(error);
                });
            }
        }
    }
</script>

<style></style>