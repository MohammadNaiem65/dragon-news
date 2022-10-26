import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdd_JczILmoYoYnIEvkK-0ViL2uWBt4Xw",
    authDomain: "dragon-news-portal-dae67.firebaseapp.com",
    projectId: "dragon-news-portal-dae67",
    storageBucket: "dragon-news-portal-dae67.appspot.com",
    messagingSenderId: "446670816974",
    appId: "1:446670816974:web:4ff02670d425c4748db29f"
};

export const app = initializeApp(firebaseConfig);