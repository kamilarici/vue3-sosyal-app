import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDrn_wYnupiGyk4ignIB_L4S6sfVxzm9gE",
    authDomain: "aos-sosyal-app-dbc85.firebaseapp.com",
    projectId: "aos-sosyal-app-dbc85",
    storageBucket: "aos-sosyal-app-dbc85.appspot.com",
    messagingSenderId: "621442397636",
    appId: "1:621442397636:web:da7bbee396836f7670a091"
  };


  const app=initializeApp(firebaseConfig)

  const auth=getAuth(app)
  const db=getFirestore(app)

  export {auth,db}