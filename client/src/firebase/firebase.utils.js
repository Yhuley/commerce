import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc, collection, writeBatch } from "firebase/firestore";

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

export const db = getFirestore(app);

export const auth = getAuth(app);

export const createUserProfileDocument = async ( userAuth, additionalData ) => { 
    if (!userAuth) return

    const userRef = doc(db, "users", userAuth.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc((userRef), {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log(err)
        }

        console.log("Document data:", docSnap);
    } else {
        console.log("No such document!");
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
     const collectionRef =  collection(db, collectionKey);
     
     const batch = writeBatch(db);

     objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef)
        batch.set(newDocRef, obj)
     })

     return await batch.commit();
}

export const convertCollectionSnapshotToMap = collections => {
    const convertedCollections = collections.docs.map(doc => {
        const { title, items } =  doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return convertedCollections.reduce(( acc, collection ) => {
        acc[collection.title.toLowerCase()] =  collection;
        return acc;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise(resolve => {
        const unsubscribe = onAuthStateChanged(auth, userAuth => {
            unsubscribe()

            resolve(userAuth)
        })
    })
}