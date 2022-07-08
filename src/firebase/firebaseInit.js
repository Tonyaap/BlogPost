import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5retJj1JCUkF0d5V8YeE12c_1D1VpnCs",
    authDomain: "fireblogsyt-6da90.firebaseapp.com",
    projectId: "fireblogsyt-6da90",
    storageBucket: "fireblogsyt-6da90.appspot.com",
    messagingSenderId: "775811594354",
    appId: "1:775811594354:web:292bfafc9e9d0f20fd6aeb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
