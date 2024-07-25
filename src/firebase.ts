import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function login() {
  return await signInWithPopup(auth, provider).catch(({ code, message }) => {
    console.error(`${code}: ${message}`);
    return { message };
  });
}

export async function logout() {
  console.log('hi');
  return await signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: any) => void) {
  onAuthStateChanged(auth, (user) => callback(user));
}
