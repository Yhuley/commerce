import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJklvcJe4k1AXL4nBe_GfIRkgFaEP2kDI",
    authDomain: "commerce-d1f4a.firebaseapp.com",
    projectId: "commerce-d1f4a",
    storageBucket: "commerce-d1f4a.appspot.com",
    messagingSenderId: "262475530058",
    appId: "1:262475530058:web:ea0addb18f7f75b80ecbb3",
    measurementId: "G-BRDN3QLMFS"
};
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);