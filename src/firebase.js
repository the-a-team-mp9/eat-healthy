import firebase from 'firebase/app';
import 'firebase/firestore';

// console.log(process.env.API_KEY);

const config={
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID
}

firebase.initializeApp(config);
export default firebase;