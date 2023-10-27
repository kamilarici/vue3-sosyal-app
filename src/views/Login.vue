<template>
  <main class="form-signin m-auto w-100">
    <div class="row">
        <div class="col-12">
            <button @click="handleLogin" class="btn btn-primary"> <i class="bi bi-google"></i> ile giriş</button>
        </div>

    </div>

  </main>
</template>
<script>
import {auth} from '../firebase/config'
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
export default{


  setup() {
    const handleLogin=()=>{
      const provider=new GoogleAuthProvider()
      signInWithPopup(auth,provider)
      .then(sonuc=>{
        console.log(sonuc)
      })
    }
    
    return {handleLogin}
  }
}
</script>

<style scoped>
.form-signin{
    max-width: 330px;
    padding: 15px;
    padding-top: 140px;
}
</style>