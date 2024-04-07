import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAxfbysjqJLupsJy61NjzEAoOTTEah7zJg",
    authDomain: "fir-dee0b.firebaseapp.com",
    projectId: "fir-dee0b",
    storageBucket: "fir-dee0b.appspot.com",
    messagingSenderId: "190986834736",
    appId: "1:190986834736:web:8eed2c13e06b84201eeef5",
    measurementId: "G-MJB5RG50HY"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)