import React, { useState } from "react";
import MainScreen from "./MainScreen.js";
import SignIn from "./SignIn.js";


export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    return (
        <div className={`screen ${isSignedIn ? 'fade-out' : 'fade-in'}`}>
            {!isSignedIn ? (
                <SignIn handleSignIn={handleSignIn} />
            ) : (
                <MainScreen handleSignOut={handleSignOut} />
            )}
        </div>
    );
}

