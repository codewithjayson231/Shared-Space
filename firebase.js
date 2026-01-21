// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration (from your project)
const firebaseConfig = {
  apiKey: "AIzaSyAewTjQoPnklDMupxmR23PbdhahQtGHyJc",
  authDomain: "shared-space-678ec.firebaseapp.com",
  databaseURL: "https://shared-space-678ec-default-rtdb.firebaseio.com",
  projectId: "shared-space-678ec",
  storageBucket: "shared-space-678ec.firebasestorage.app",
  messagingSenderId: "8949280263",
  appId: "1:8949280263:web:43b538d62d9b9cde7bc4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Realtime Database to use in other files
export const database = getDatabase(app);
