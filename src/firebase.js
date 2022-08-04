// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, query, where, } from "firebase/firestore";
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

// variable that reference to collection items
const itemRef = collection(db, "items");

const setCollection = async (items) => {
  await addDoc(collection(db, "items"), items);
};

const updateCollection = async (ref) => {
  await updateDoc(doc(db, "items", ref), { id: ref });
};

const getAllProducts = async () => {
  const q = query(itemRef);
  return await getDocs(q);
};

const getProductsByCategoryId = async (categoryId) => {
  if (!categoryId) throw new Error("Missing categoryId");
  const q = query(itemRef, where("category", "==", categoryId));
  return await getDocs(q);
};

const getProducts = async (categoryId) => {
  if (categoryId) {
    return await getProductsByCategoryId(categoryId);
  }
  else {
    return await getAllProducts();
  }
};

const getProductById = async (productId) => {
  if (!productId) throw new Error("Missing productId");
  return (await getDoc(doc(db, "items", productId))).data();
};

const generateBuyer = async (items) => {
  const colRef = collection(db, "buyers");
  const docRef = await addDoc(colRef, items);
  return docRef.id;
};

const updateBuyer = async (id, items) => {
  await updateDoc(doc(db, "buyers", id), items);
};

export { setCollection, updateCollection, getAllProducts, getProductsByCategoryId, getProducts, getProductById, generateBuyer, updateBuyer };
