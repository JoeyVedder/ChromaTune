import "./History.css";
import { useState, useEffect } from "react";

const History = () => {
    const [moods, setMoods] = useState<{ mood: string; date: string; color: string }[]>([]); // State to hold mood entries

    useEffect(() => {
        const savedMoods = localStorage.getItem("moods"); // Retrieve moods from local storage
        if (savedMoods) {
            setMoods(JSON.parse(savedMoods)); // Parse and set moods in state
        }
    }, []);

    // Function to delete a specific mood entry
    const deleteMood = (moodToDelete: { mood: string; date: string; color: string }) => {
        const updatedMoods = moods.filter(mood => mood.mood !== moodToDelete.mood || mood.date !== moodToDelete.date); // Filter out the mood to delete
        setMoods(updatedMoods); // Update the state with the new list
        localStorage.setItem("moods", JSON.stringify(updatedMoods)); 
    };

    return (
        <div className="historyContent">
            <h1 className="historyHeader">History</h1>
            <p className="historyCard">
                Your past entries will be displayed here.
            </p>
            {moods.length > 0 ? (
                <ul className="moodList">
                    {moods.map((entry, index) => (
                        <li key={index} className="moodItem" style={{ color: entry.color }}> {/* Set mood color dynamically */}
                            {entry.mood === "Mitchell"
                                ? `On ${entry.date}, you were feeling like Mitchell!` // Special format for "Mitchell"
                                : `On ${entry.date}, you were feeling ${entry.mood}.`} 
                            <button className="deleteButton" onClick={() => deleteMood(entry)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No moods recorded yet.</p>
            )}
        </div>
    );
};

export default History;
