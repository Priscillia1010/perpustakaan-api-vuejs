<template>
    <div class="container">
      <h1 class="mt-5 text-center fw-bold">Table Buku</h1>
      <router-link to="/create-buku">
        <button class="btn btn-primary">Tambah Buku</button>
      </router-link>
      <div>
        <input v-model="searchKode" placeholder="Search...">
        <button class="mb-3 mt-3 ml-3 btn btn-success" v-on:click="searchBuku">Search</button>
        <button class="mb-3 mt-3 ml-3 btn btn-danger" v-on:click="clearBuku">Clear</button>
      </div>
      <table class="table table-striped table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">No 
            <i class="bi bi-arrow-up" @click="sortNomor('asc')"></i>
            <i class="bi bi-arrow-down" @click="sortNomor('desc')"></i>
          </th>
          <th scope="col">Kode
            <i class="bi bi-arrow-up"  @click="sortKode('asc')"></i>
            <i class="bi bi-arrow-down"  @click="sortKode('desc')"></i>
          </th>
          <th scope="col">Judul
            <i class="bi bi-arrow-up"  @click="sortJudul('asc')"></i>
            <i class="bi bi-arrow-down"  @click="sortJudul('desc')"></i>
          </th>
          <th scope="col">Stock
            <i class="bi bi-arrow-up"  @click="sortStock('asc')"></i>
            <i class="bi bi-arrow-down"  @click="sortStock('desc')"></i>
          </th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(buku) in bukus" :key="buku.id">
          <th scope="row">{{buku.id }}</th>
          <td>{{ buku.kode }}</td>
          <td>{{ buku.judul }}</td>
          <td>{{ buku.stock }}</td>
          <td>
            <router-link :to="{name: 'DetailBuku', params: {id: buku.id}}">
              <button class="btn btn-warning">Edit</button> 
            </router-link>
            <router-link :to="{name: 'DeleteBuku', params: {id: buku.id}}">
              <button class="btn btn-danger">Delete</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>

<script>
    import axios from 'axios';
    export default {
        name: 'BukuPage',
        data() {
            return {
                bukus: [],
                searchKode: 0
            }
        },
        mounted () {
            axios
            .get('http://127.0.0.1:8000/list-bukus')
            .then(response => (this.bukus = response.data))
        },
        methods: {
          searchBuku() {
            axios
              .get("http://127.0.0.1:8000/search-buku?key=" + this.searchKode, {
              })
              .then(
                response => (this.bukus = response.data)
              )
              .catch((error) => {
                console.log(error);
              });
          },
          clearBuku() {
            axios
              .get('http://127.0.0.1:8000/list-bukus')
              .then(response => (this.bukus = response.data))
          },
          sortNomor(sort) {
            axios
            .get('http://127.0.0.1:8000/list-bukus?' + 'order=id' + '&sort=' + sort)
            .then(response => (this.bukus = response.data))
          },
          sortKode(sort) {
            axios
            .get('http://127.0.0.1:8000/list-bukus?' + 'order=kode' + '&sort=' + sort)
            .then(response => (this.bukus = response.data))
          },
          sortJudul(sort) {
            axios
            .get('http://127.0.0.1:8000/list-bukus?' + 'order=judul' + '&sort=' + sort)
            .then(response => (this.bukus = response.data))
          },
          sortStock(sort) {
            axios
            .get('http://127.0.0.1:8000/list-bukus?' + 'order=stock' + '&sort=' + sort)
            .then(response => (this.bukus = response.data))
          }
        }
    }
</script>

<style scoped>
  i {
    color: blue;
  }

  i:focus {
    color: grey;
  }

  i:active {
    color: grey;
  }
</style>