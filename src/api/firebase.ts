import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { get, getDatabase, ref, remove, set } from 'firebase/database';
import { CartItemType, ProductDataType, ProductType } from '../types';
import { createUuid } from '../utils/utils';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return await signInWithPopup(auth, provider);
}

export async function logout() {
  return await signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: any) => void) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user: any) {
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins: string[] = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }

      return user;
    })
    .catch(console.error);
}

export async function addNewProduct(product: ProductType, image: string) {
  const id = createUuid();
  return await set(ref(database, `products/${id}`), {
    ...product,
    id,
    image,
    options: product.options.split(','),
  });
}

export async function getProducts() {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addOrUpdateToSaved(
  userId: string,
  product: ProductDataType
) {
  return await set(
    ref(database, `savedItems/${userId}/${product.id}`),
    product
  );
}

export async function removeFromSaved(userId: string, productId: string) {
  return remove(ref(database, `savedItems/${userId}/${productId}`));
}

export async function getSavedItems(userId: string) {
  return get(ref(database, `savedItems/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addOrUpdateToCart(userId: string, product: CartItemType) {
  return await set(ref(database, `cart/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId: string, productId: string) {
  return remove(ref(database, `cart/${userId}/${productId}`));
}

export async function getCartItems(userId: string) {
  return get(ref(database, `cart/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val()) as CartItemType[];
    }
    return [];
  });
}
