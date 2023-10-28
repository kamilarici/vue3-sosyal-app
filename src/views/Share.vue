<template>
    <div class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Düşüncelerini Yaz</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Bugün Çok Mutluyum" v-model="gonderi">
        </div>
        <div class="mb-3 text-center">
            <button type="button" class="btn btn-dark" @click="handleClick">Gönder</button>
        </div>
        <hr>
        <div class="mb-3">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-center align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Birinci Entry</div>
                        Tarih
                    </div>
                    <span class="badge bg-primary rounded-pill">Yorum Sayisi</span>

                </li>
                <li class="list-group-item d-flex justify-content-center align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Ikinci Entry</div>
                        Tarih
                    </div>
                    <span class="badge bg-primary rounded-pill">Yorum Sayisi</span>

                </li>
                <li class="list-group-item d-flex justify-content-center align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Üçüncü Entry</div>
                        Tarih
                    </div>
                    <span class="badge bg-primary rounded-pill">Yorum Sayisi</span>

                </li>
                
            </ol>
        </div>
      
    </div>
</template>
<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser'; 
import { getDoc,collection,serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
export default {
    setup() {
        

        const {kullanici}=getUser()
        const gonderi=ref('')
        const handleClick=async()=>{
            if(kullanici.value){
                await addDoc(collection(db,'gonderiler'),{
                    gKullaniciAd:kullanici.value.displayName,
                    gonderi:gonderi.value,
                    tarih:serverTimestamp,
                    yorumlar:[]
                })
            }
        }
        return {gonderi,handleClick}
    },
}
</script>
<style scoped>
.container{
    max-width: 600px;
    padding-top: 50px;
}
</style>