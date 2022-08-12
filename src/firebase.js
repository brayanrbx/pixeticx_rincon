// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, deleteDoc, deleteField, getDoc, getDocs, setDoc, updateDoc, query, where, } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfRdYqoW0dRzcPeIvyfhZWzrq4g6L61uY",
  authDomain: "pixeticx.firebaseapp.com",
  projectId: "pixeticx",
  storageBucket: "pixeticx.appspot.com",
  messagingSenderId: "761143044738",
  appId: "1:761143044738:web:f0d8202d89c85c656da29b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const addCollection = async (collections, items) => {
  const colRef = collection(db, collections);
  const docRef = await addDoc(colRef, items);
  return docRef.id;
};

const updateCollection = async (collections, id, items) => {
  await updateDoc(doc(db, collections, id), items);
};

const getCollection = async (collections, id) => {
  const docRef = doc(db, collections, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    return console.log("No such document!");
  }
};

const deleteCollection = async (collections, id) => {
  await deleteDoc(doc(db, collections, id));
};

const deleteFieldCollection = async (collections, productId, field) => {
  console.log("")
};

const getAllProducts = async (collections) => {
  const q = query(collection(db, collections));
  return await getDocs(q);
};

const getProductsByCategoryId = async (collections, categoryId) => {
  if (!categoryId) throw new Error("Missing categoryId");
  const q = query(collection(db, collections), where("category", "==", categoryId));
  return await getDocs(q);
};

const getProducts = async (collections, categoryId) => {
  if (categoryId) {
    return await getProductsByCategoryId(collections, categoryId);
  }
  else {
    return await getAllProducts(collections);
  }
};

const getProductById = async (collections,productId) => {
  if (!productId) throw new Error("Missing productId");
  return (await getDoc(doc(db, collections, productId))).data();
};

// const generateBuyer = async (collections, items) => {
//   const colRef = collection(db, collections);
//   const docRef = await addDoc(colRef, items);
//   return docRef.id;
// };

// const updateBuyer = async (collections, id, items) => {
//   await updateDoc(doc(db, collections, id), items);
// };

export { addCollection, updateCollection, getCollection, deleteCollection, getAllProducts, getProductsByCategoryId, getProducts, getProductById};
