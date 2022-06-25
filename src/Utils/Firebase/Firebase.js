// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCfYy9dZkfjo6uTRzb3E2fLRfnk5Vx1Zk",
  authDomain: "react-ecommerce-9c8e7.firebaseapp.com",
  projectId: "react-ecommerce-9c8e7",
  storageBucket: "react-ecommerce-9c8e7.appspot.com",
  messagingSenderId: "801850934803",
  appId: "1:801850934803:web:19ba0048fcff8ff44321e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db, 'users',userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  // If user data does not exist 
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt
      });
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef; 
}

