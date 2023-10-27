<template>
  <nav class="navbar navbar-expand-lg   bg-light" >
    <div class="container">
      <a class="navbar-brand" href="#">AOS sosyall </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item" v-show="kullanici">
            <a class="nav-link active" aria-current="page" href="#">paylaş</a>
          </li>
        </ul>
          <div class="d-flex" >
            <router-link to="/login">
              <button class="btn btn-outline-success" type="submit" v-show="!kullanici">Giriş</button>
            </router-link>
          <button class="btn btn-outline-danger" type="submit" @click="handleCikis" v-show="kullanici">Çikiş</button>
          </div>
       
      </div>
    </div>
  </nav>
</template>
<script>
import getUser from '@/composables/getUser';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default{
  setup(){

const {kullanici}=getUser()
const router=useRouter()

const handleCikis=async()=>{
  await signOut(auth)
  router.push({name:'Login'})
}



return {kullanici,handleCikis}
  }
}
</script>
<style>
html,body{
  background: #dad7cd;
}
</style>
