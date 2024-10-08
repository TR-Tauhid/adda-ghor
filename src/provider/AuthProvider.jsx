import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }

    const authValue = {
        googleSignIn
    }

    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;