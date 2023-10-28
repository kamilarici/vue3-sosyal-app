<template>
  
</template>

<script>
import { db } from '@/firebase/config';
import { collection,onSnapshot } from 'firebase/firestore';
import { ref } from 'vue';


export default {
  name:'Home',
  setup(){
const gonderiler=ref([])
onSnapshot(collection(db,"gonderiler"),(snap)=>{
  console.log(snap.docs)
})
  }

}
</script>
