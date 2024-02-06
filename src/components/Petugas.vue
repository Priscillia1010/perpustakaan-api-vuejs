<template>
  <div class="container">
    <h1 class="mt-5 text-center fw-bold">Table Petugas</h1>
    <router-link to="/create-petugas">
      <button class="btn btn-primary">Tambah Petugas</button>
    </router-link>
    <div>
      <input v-model="searchKode" placeholder="Search...">
      <button class="mb-3 mt-3 ml-3 btn btn-success" v-on:click="searchPetugas">Search</button>
      <button class="mb-3 mt-3 ml-3 btn btn-danger" v-on:click="clearPetugas">Clear</button>
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
        <th scope="col">Nama
          <i class="bi bi-arrow-up"  @click="sortNama('asc')"></i>
          <i class="bi bi-arrow-down"  @click="sortNama('desc')"></i>
        </th>
        <th scope="col">Email
          <i class="bi bi-arrow-up"  @click="sortEmail('asc')"></i>
          <i class="bi bi-arrow-down"  @click="sortEmail('desc')"></i>
        </th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(petugas) in petugass" :key="petugas.id">
        <th scope="row">{{ petugas.id }}</th>
        <td>{{ petugas.kode }}</td>
        <td>{{ petugas.nama }}</td>
        <td>{{ petugas.email }}</td>
        <td>
          <router-link :to="{name: 'DetailPetugas', params: {id: petugas.id}}">
            <button class="btn btn-warning">Edit</button> 
          </router-link>
          <router-link :to="{name: 'DeletePetugas', params: {id: petugas.id}}">
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
  name: 'PetugasPage',
  data() {
    return {
      petugass: [],
      searchKode: 0
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/list-petugass')
      .then(response => (this.petugass = response.data))
  },
  methods: {
    searchPetugas() {
        axios
          .get("http://127.0.0.1:8000/search-petugas?key=" + this.searchKode, {
           })
          .then(
            response => (this.petugass = response.data)
          )
          .catch((error) => {
            console.log(error);
          });
    },
    clearPetugas() {
      axios
      .get('http://127.0.0.1:8000/list-petugass')
      .then(response => (this.petugass = response.data))
    },
    sortNomor(sort) {
            axios
              .get('http://127.0.0.1:8000/list-petugass?' + 'order=id' + '&sort=' + sort)
              .then(response => (this.petugass = response.data))  
            },
    sortKode(sort) {
              axios
              .get('http://127.0.0.1:8000/list-petugass?' + 'order=kode' + '&sort=' + sort)
              .then(response => (this.petugass = response.data))
            },
    sortNama(sort) {
              axios
              .get('http://127.0.0.1:8000/list-petugass?' + 'order=nama' + '&sort=' + sort)
              .then(response => (this.petugass = response.data))
            },
    sortEmail(sort) {
              axios
              .get('http://127.0.0.1:8000/list-petugass?' + 'order=email' + '&sort=' + sort)
              .then(response => (this.petugass = response.data))
            },
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
