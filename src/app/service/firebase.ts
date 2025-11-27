// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "ebook-moura.firebaseapp.com",
      projectId: "ebook-moura",
      storageBucket: "ebook-moura.firebasestorage.app",
      messagingSenderId: "523337302546",
      appId: "1:523337302546:web:d9b7662a7dd4ea6af9cecb"
};

    
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
