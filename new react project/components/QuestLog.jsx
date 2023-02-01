import React from "react";
import EmptyState from "../assets/empty-state.jpg";
import Skeleton from "@mui/material/Skeleton";

export default function QuestLog(props) {



  return (
    <div className="main">
      {props.questList.length ? (
        <div className="quest-grid">{props.questList ? props.questList : <Skeleton variant="rectangular" width={210} height={118} />}</div>
      ) : (
        <div className="empty-state">
          <div className="image-title">
            <div className="empty-title">No Quests...yet</div>
            <img src={EmptyState} alt="" className="ghost-img" /> 
          </div>
          

        </div>
      )}
    </div>
  );
}
