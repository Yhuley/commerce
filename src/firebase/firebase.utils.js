import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";


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
const db = getFirestore(app);

export const auth = getAuth(app);
export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return

    const userRef = doc(db, `users/TPQ4MOVcg4WBIhj7U4DP`);
    const docSnap = await getDoc(userRef);
    console.log(docSnap.exists())

    if (docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(doc(db, "users", "TPQ4MOVcg4WBIhj7U4DP"), {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log(err)
        }

        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }

    return userRef;
}