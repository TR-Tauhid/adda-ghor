import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authValue = {}

    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;