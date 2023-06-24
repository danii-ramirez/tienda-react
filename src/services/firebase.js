import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkGi4ex8xdCfNf9dXVwNBuK6MuMcIvcFo",
  authDomain: "tienda-react-43837.firebaseapp.com",
  projectId: "tienda-react-43837",
  storageBucket: "tienda-react-43837.appspot.com",
  messagingSenderId: "927951794255",
  appId: "1:927951794255:web:af39a30db4b673e6717a3a"
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp)

export async function getItems() {
    const productsSnapshot = await getDocs(collection(db, "products"))
    const dataDocs = productsSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    })
    return dataDocs
}

export async function getItem(id) {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    
    return { id: docSnap.id, ...docSnap.data() }
}

// function getDataCategory(){
    
// }


