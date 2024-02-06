import Vue from 'vue';
import VueRouter from 'vue-router';
import Petugas from '../components/Petugas.vue';
import Anggota from '../components/Anggota.vue';
import Buku from '../components/Buku.vue';
import CreatePetugas from '../components/CreatePetugas.vue';
import CreateAnggota from '../components/CreateAnggota.vue';
import CreateBuku from '../components/CreateBuku.vue';
import DetailPetugas from '../components/DetailPetugas.vue';
import DetailAnggota from '../components/DetailAnggota.vue';
import DetailBuku from '../components/DetailBuku.vue';
import DeletePetugas from '../components/DeletePetugas.vue';
import DeleteAnggota from '../components/DeleteAnggota.vue';
import DeleteBuku from '../components/DeleteBuku.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Home from '../components/Home.vue';
import Nilai from '../components/Nilai.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/petugas',
        name: 'Petugas',
        component: Petugas
    },
    {
        path:'/anggota',
        name: 'Anggota',
        component: Anggota
    },
    {
        path:'/buku',
        name: 'Buku',
        component: Buku
    },
    {
        path: '/create-petugas',
        name: 'CreatePetugas',
        component: CreatePetugas
    },
    {
        path: '/create-anggota',
        name: 'CreateAnggota',
        component: CreateAnggota
    },
    {
        path: '/create-buku',
        name: 'CreateBuku',
        component: CreateBuku
    },
    {
        path: '/petugas/:id',
        name: 'DetailPetugas',
        component: DetailPetugas
    },
    {
        path: '/anggota/:id',
        name: 'DetailAnggota',
        component: DetailAnggota
    },
    {
        path: '/buku/:id',
        name: 'DetailBuku',
        component: DetailBuku
    },
    {
        path: '/delete-petugas/:id',
        name: 'DeletePetugas',
        component: DeletePetugas
    },
    {
        path: '/delete-anggota/:id',
        name: 'DeleteAnggota',
        component: DeleteAnggota
    },
    {
        path: '/delete-buku/:id',
        name: 'DeleteBuku',
        component: DeleteBuku
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/nilai',
        name: 'Nilai',
        component: Nilai
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router