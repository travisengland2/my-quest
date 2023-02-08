import React, { useState, useEffect } from "react";
import Quest from "./components/Quest";
import Navbar from "./components/Navbar";
import TemporaryModal from "./components/AddQuest";
import QuestLog from "./components/QuestLog";
import './styles.css'




export default function App() {
    const [quests, setQuests] = useState([]);
    const [points, setPoints] = useState(null);
    const [name, setName] = useState("");
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState("");
    
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [allPoints, setAllPoints] = useState([]);
    const [modalOpen, setModalOpen] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false
    });

    function createNewQuest() {
      const newQuest = {
        points: points,
        name: name,
        date: date,
        description: description,
        category: category,
        status: status
      };
  
      fetch("https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuest)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
      setQuests([...quests, newQuest]);
      console.log(newQuest);
    }


    async function deleteQuest(questId) {
      try {
        const response = await fetch(`https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm/${questId}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        setQuests(quests.filter(quest => quest.id !== questId));
      } catch (error) {
        console.error("Deletion Failed");
      }

    }

    async function editQuest(questId) {
        const prevQuest = {
            name: name,
            description: description,
            points: points,
            category: category,
            status: status
        };

        try {
            const response = await fetch(`https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm/${questId}`, 
              {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(prevQuest)
              });
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log("Edit Failed");
        }
    }

    useEffect(() => {
        fetch("https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm")
            .then((res) => res.json())
            .then((data) => setQuests(data))
    }, [quests]);

    const totalPoints = quests.reduce((sum, quest) => sum + Number(quest.points), 0);

    const questList = quests.map((item) => (
        <Quest
            name={item.name}
            description={item.description}
            points={item.points}
            key={item.id}
            category={item.category}
            id={item.id}
            date={item.date}
            deleteQuest={deleteQuest}
            editQuest={editQuest}
            status={item.status}
        />
    ));

    return (
      <div className="App">
        <Navbar 
        
        points={totalPoints} 
        
        />

        <TemporaryModal
          questList={questList}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
          points={points}
          setPoints={setPoints}
          category={category}
          setCategory={setCategory}
          allPoints={allPoints}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          setStatus={setStatus}
          createNewQuest={createNewQuest}
        />

        <QuestLog/>


      </div>
    )
}
