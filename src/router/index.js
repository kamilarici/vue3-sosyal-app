import { createRouter, createWebHistory } from 'vue-router'

import { auth } from '../firebase/config'

import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Share from '@/views/Share.vue'
import Browse from '@/views/Browse.vue'


//! path ile gitmemesi için user giriş yapmış mı kontrol edip route a eklediğimizde bu fonksiyon beforeEnter ile çalışıp gerekli yönlendirmeyi yapacak
const kullniciKontrol=(to,from,next)=>{
  let kullanici=auth.currentUser;
if(!kullanici){
  next({name:"Login"})
}else{
  next()
}

}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/browse/:id',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/share',
    name: 'Share',
    component: Share,
    beforeEnter: kullniciKontrol
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
