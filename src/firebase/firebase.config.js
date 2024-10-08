import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaARCxLIGzMtsode5zoHJVXqfljMx9F0Y",
  authDomain: "adda-ghor-7abd1.firebaseapp.com",
  projectId: "adda-ghor-7abd1",
  storageBucket: "adda-ghor-7abd1.appspot.com",
  messagingSenderId: "1008723046879",
  appId: "1:1008723046879:web:a330c8814597489471146a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;