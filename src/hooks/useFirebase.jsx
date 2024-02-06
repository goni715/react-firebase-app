import {useEffect, useState} from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init.js";
import {useNavigate} from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false)
    const [name, setName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regLoading, setRegLoading] = useState(false);
    const [success, setSuccess] = useState(false);




    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            } else {
                setUser({})
                // User is signed out
            }
            setLoading(false);
        })

        return (()=> unsubscribed);
    }, [auth]);


    const handleGoogleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                setError("");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)
                setError("");
            }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorMessage)
        });
    }
    
    
    
    
    //sign in with email & password
    const handleSignInWithEmailAndPassword = () => {
        setLoginLoading(true);
        setError("");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                setLoginLoading(false);
                setError("");
                window.location.href="/"
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setLoginLoading(false)
            });
    }






   const handleCreateUserWithEmailAndPassword = () => {
        setRegLoading(true);
        setError("");
       createUserWithEmailAndPassword(auth, regEmail, regPassword)
           .then((userCredential) => {
               // Signed up
               const user = userCredential.user;
               SetUserName();
           })
           .catch((error) => {
               const errorMessage = error.message;
               setError(errorMessage);
               setRegLoading(false)
           });
   }



    const SetUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            // Profile updated!
            setRegLoading(false);
            setSuccess(true)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            setRegLoading(false)
        });

    }
    
    
    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({});
            setLoading(false)
            window.location.href="/login"
            // Sign-out successful.
            // navigate("/login")
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
            setLoading(false)
        });
    }

    return {
        user,
        email,
        setEmail,
        password,
        setPassword,
        loginLoading,
        name,
        setName,
        regEmail,
        setRegEmail,
        regPassword,
        setRegPassword,
        regLoading,
        setRegLoading,
        loading,
        error,
        success,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignInWithEmailAndPassword,
        handleCreateUserWithEmailAndPassword,
        logout
    };

}

export default useFirebase;

