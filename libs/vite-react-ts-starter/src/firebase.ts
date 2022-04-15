import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

let firebaseApp: FirebaseApp;
const useEmulator = () => import.meta.env.VITE_USE_FIREBASE_EMULATOR;

export const setupFirebase = () => {
  try {
    firebaseApp = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_APIKEY as string,
      authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN as string,
      // databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL as string,
      projectId: import.meta.env.VITE_FIREBASE_PROJECTID as string,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET as string,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID as string,
      appId: import.meta.env.VITE_FIREBASE_APPID as string,
    });
  } catch (error) {
    console.error({ error });
  }
};

let auth: Auth;
let firestore: ReturnType<typeof getFirestore>;
let storage: ReturnType<typeof getStorage>;

export const useAuth = () => {
  auth = getAuth(firebaseApp);
  if (useEmulator()) {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
  return auth;
};

export const useFirestore = () => {
  if (!firestore) {
    firestore = getFirestore();
    if (useEmulator()) {
      connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
  }
  return firestore;
};

export const useStorage = () => {
  if (!storage) {
    storage = getStorage();
    if (useEmulator()) {
      connectStorageEmulator(storage, 'localhost', 9199);
    }
  }
  return storage;
};
