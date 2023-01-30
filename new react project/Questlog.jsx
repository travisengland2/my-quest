import React, { useState, useEffect } from "react";

export default function Questlog() {
    const [quests, setQuests] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(null);
    const [points, setPoints] = useState(null);
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [totalPoints, setTotalPoints] = useState([]);

    function createQuest() {
        const newQuest = {
            name: name,
            description: description,
            date: date,
            points: points,
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
        setTasks([...quests, newQuest]);
        console.log(newQuest);
    }

    async function deleteQuest(questId) {
        try {
            const response = await fetch('https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm/${questId}',
                { method: 'DELETE' }
            );
            const data = await response.json();
            console.log(data);
            setQuests(quests.filter(quest => quest.id !== questId));
        }
        catch (error) {
            console.error(error);
            console.error("Deletion Failed");
        }
    }

    async function editQuest(questId) {
        const prevQuest = {
            name: name,
            description: description,
            date: date,
            points: points,
            category: category,
            status: status
        };

        try {
            const response = await fetch('https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm/${questId}',
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

    const questList = quests.map((item) => (
        <Quest
            name={item.name}
            description={item.description}
            points={item.points}
            key={item.id}
            category={item.category}
            date={item.date}
            id={item.id}
            deleteQuest={deleteQuest}
            editQuest={editQuest}
        />
    ));
}