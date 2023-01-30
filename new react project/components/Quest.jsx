import React from "react";

export default function Quest(props) {
    return (
        <div className="quest-card">
            <div className="header-topbar">
                <div className="quest-name">{props.name}</div>
                <div className="points">{props.points}</div>
            </div>
            <div className="info-wrapper">
                <div>{props.description}</div>
                <div className="category">{props.category}</div>
                <div className="date">{props.date}</div>
            </div>
            <button onClick={() => props.deleteQuest(props.id)}>Delete Task</button>
            <button onClick={() => props.editQuest()}>Edit Task</button>
        </div>
    );
}