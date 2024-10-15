import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const facebookProvider = new FacebookAuthProvider();
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authValue = {
        googleSignIn,
        facebookSignIn,
        createUserWithEmail,
        signInWithEmail,
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;