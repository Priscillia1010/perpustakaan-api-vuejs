<template>
    <div class="container">
      <h1 class="mt-5 text-center fw-bold">Table Anggota</h1>
      <router-link to="/create-anggota">
        <button class="btn btn-primary">Tambah Anggota</button>
      </router-link>
      <div>
        <input v-model="searchKode" placeholder="Search...">
        <button class="mb-3 mt-3 ml-3 btn btn-success" v-on:click="searchAnggota">Search</button>
        <button class="mb-3 mt-3 ml-3 btn btn-danger" v-on:click="clearAnggota">Clear</button>
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
        <tr v-for="(anggota) in anggotas" :key="anggota.id">
          <th scope="row">{{ anggota.id }}</th>
          <td>{{ anggota.kode }}</td>
          <td>{{ anggota.nama }}</td>
          <td>{{ anggota.email }}</td>
          <td>
            <router-link :to="{name: 'DetailAnggota', params: {id: anggota.id}}">
              <button class="btn btn-warning">Edit</button> 
            </router-link>
            <router-link :to="{name: 'DeleteAnggota', params: {id: anggota.id}}">
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
        name: 'AnggotaPage',
        data() {
            return {
                anggotas: [],
                searchKode: 0
            }
        },
        mounted () {
            axios
            .get('http://127.0.0.1:8000/list-anggotas')
            .then(response => (this.anggotas = response.data))
        },
        methods: {
            searchAnggota() {
              axios
                  .get("http://127.0.0.1:8000/search-anggota?key=" + this.searchKode, {
                  })
                  .then(
                    response => (this.anggotas = response.data)
                  )
                  .catch((error) => {
                    console.log(error);
                  });
            },
            clearAnggota() {
              axios
              .get('http://127.0.0.1:8000/list-anggotas')
              .then(response => (this.anggotas = response.data))
            },
            sortNomor(sort) {
              axios
              .get('http://127.0.0.1:8000/list-anggotas?' + 'order=id' + '&sort=' + sort)
              .then(response => (this.anggotas = response.data))  
            },
            sortKode(sort) {
              axios
              .get('http://127.0.0.1:8000/list-anggotas?' + 'order=kode' + '&sort=' + sort)
              .then(response => (this.anggotas = response.data))
            },
            sortNama(sort) {
              axios
              .get('http://127.0.0.1:8000/list-anggotas?' + 'order=nama' + '&sort=' + sort)
              .then(response => (this.anggotas = response.data))
            },
            sortEmail(sort) {
              axios
              .get('http://127.0.0.1:8000/list-anggotas?' + 'order=email' + '&sort=' + sort)
              .then(response => (this.anggotas = response.data))
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