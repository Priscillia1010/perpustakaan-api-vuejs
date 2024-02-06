<template>
    <div class="container">
      <input type="text" v-model="tugas">
      <input type="text" v-model="uts">
      <input type="text" v-model="uas">
      <button @click="hitungNilai">Hitung</button>
      <h3>{{ nilaiAkhir }}</h3>
    </div>
  </template>
  
  <script>
    export default {
        name: 'NilaiPage',
        data() {
            return {
                tugas: 0,
                uts: 0,
                uas: 0,
                nilaiAkhir: 0
            }
        },
        methods: {
            hitungNilai() {
                this.nilaiAkhir = (this.tugas * 0.2) + (this.uts * 0.3) + (this.uas * 0.5);
            }
        }
    }
  </script>
  
  <style scoped>
    
  </style>
  