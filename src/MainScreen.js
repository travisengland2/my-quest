import React from "react";
import QuestLog from "./QuestLog.js";
import NavBar from "./NavBar.js";

export default function MainScreen({ handleSignOut }) {


    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:
                    "url(https://i.imgur.com/SBRHuUn.png)",
                height: '100vh',
            }}
        >
            <NavBar handleSignOut={handleSignOut} />
            <QuestLog />
        </div>
    );
}