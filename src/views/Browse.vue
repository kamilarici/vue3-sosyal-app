<template>
  <div class="container my-5">
    <div class="row">
      <div role="alert" class="alert alert-primary text-center">
        <h2>AOS Sosyal</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8 mb-3">
        <div class="card">
          <div class="card-header text-end">tarih</div>
          <div class="card-body text-center">
            <h5 class="card-title">Gönderi</h5>
            <p class="card-text">Kullanici Ad</p>
          </div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex-justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Yorum 1</div>
              </div>
              <span class="badge bg-primary mx-2">kullanici ad</span>
            </li>
            <li
              class="list-group-item d-flex-justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Yorum 1</div>
              </div>
              <span class="badge bg-primary mx-2">kullanici ad</span>
            </li>
          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">henüz yorum yapilmadi</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-4" v-show="kullanici">
        <form @submit.prevent="handleYorumyap">
          <div class="mb-3">
            <div id="yorumBaslik" class="form-text">
              Gönderiye Yorum Yapabilirsiniz
            </div>
            <label for="yorum" class="form-label">Yorumunuz</label>
            <input
              v-model="yorumText"
              type="text"
              class="form-control"
              id="yorum"
              aria-describedby="yorumBaslik"
            />
          </div>
          <button type="submit" class="btn btn-outline-primary">
            Yorum Yap
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { db } from "@/firebase/config";
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import moment from "moment";

export default {
  setup() {
    const { kullanici } = getUser();
    const route = useRoute();
    // console.log(route.params.id)
    const yorumText = ref("");
    const gonderi = ref("");
    const tarih = ref("");
    const yorumlar = ref([]);
    const kullaniciAd = ref("");

    const gonderiRef = doc(db, "gonderiler", route.params.id);

    const handleYorumyap = async () => {
      await updateDoc(gonderiRef, {
        yorumlar: arrayUnion({
          yKullaniciAd: kullanici.value.displayName,
          yorum: yorumText.value,
        }),
      });
      yorumText.value = "";
    };

onSnapshot(gonderiRef,(snap)=>{
gonderi.value=snap.data().gonderi
tarih.value=moment(snap.data().tarih.toDate()).calendar
kullaniciAd.value=snap.data().gKullaniciAd
yorumlar.value=snap.data().yorumlar
})



    return { kullanici, yorumText, handleYorumyap,gonderi,kullaniciAd,tarih,yorumlar };
  },
};
</script>
