const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const classData = require('../../classes/ubcv_data.json'); // Import JSON file

/*
 * classDataToFirestore is ran directly with node which is why it doesn't use .env vars.
 * The file parses the data from ubco_data.json and ubcv_data.json and uploads it to my
 * Firestore database.
*/

// Firebase Config
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

addInitialDataToFirestore(); // To execute file with node, run `node src/app/classes/classDataToFirestore.js`.