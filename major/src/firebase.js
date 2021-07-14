import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC87ez62eLk3TxA5zDlxrCkEtHSKg-d98w",
    authDomain: "codescript-19633.firebaseapp.com",
    projectId: "codescript-19633",
    storageBucket: "codescript-19633.appspot.com",
    messagingSenderId: "413724417739",
    appId: "1:413724417739:web:a719535cce8f5b9ae5854e"
})


export const auth = app.auth()
export default app