const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const classData = require('./ubcv_data.json'); // Import JSON file

// Firebase Config
// Since this file was being run directly with node, I couldn't use .env variables.
const firebaseConfig = {
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    projectId: 'projectId',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

// Iterate through the JSON file, parse it, and add its data the Firestore database
const addInitialDataToFirestore = async () => {
    try {
        for await (const data of classData) {
            db.collection('UBCV').doc().set(data);
        }
    } catch (e) {
        console.error(e);
    }
};

addInitialDataToFirestore(); // To execute file with node, run `node src/app/classes/classDataToFirestore.js`