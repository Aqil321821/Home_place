import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIgbRA_5lhMr7OEa8ZsP43KBxW0z9CgZg',
  authDomain: 'house-app-d1fd6.firebaseapp.com',
  projectId: 'house-app-d1fd6',
  storageBucket: 'house-app-d1fd6.firebasestorage.app',
  messagingSenderId: '401187598577',
  appId: '1:401187598577:web:d8a7721badf6231751f950',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
