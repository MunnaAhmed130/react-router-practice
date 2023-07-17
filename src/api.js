// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYzphNKepHBp39-askfXhB6FI0jWYSTfU",
  authDomain: "vanlife-693dd.firebaseapp.com",
  projectId: "vanlife-693dd",
  storageBucket: "vanlife-693dd.appspot.com",
  messagingSenderId: "382983635041",
  appId: "1:382983635041:web:b71b0413435a96cd0a2a20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export const getVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    // id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = (await getDoc(docRef)).data();
  console.log(vanSnapshot);
  return vanSnapshot;
};

// export async function getVans(id) {
//   // const url = id ? `/api/vans/${id}` : "/api/vans";
//   const url = id
//     ? `http://localhost:3000/vans/${id}`
//     : "http://localhost:3000/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
//   // throw {
//   //   message: "Error fetching data",
//   //   status: 400,
//   //   statusText: "Bad Request",
//   // };
// }

export const getHostVans = async () => {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    // id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
};

export const getHostVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = (await getDoc(docRef)).data();
  console.log(vanSnapshot);
  return vanSnapshot;
};

// export async function getHostVans(id) {
//   // const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const url = id
//     ? `http://localhost:3000/host/vans/${id}`
//     : "http://localhost:3000/host/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   // console.log(data);
//   return data.vans;
// }

export async function loginUser(creds) {
  const url = "http://localhost:3000/login";
  // const url = "/api/login";

  const res = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" }, // without headers express req.body will get {}
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
