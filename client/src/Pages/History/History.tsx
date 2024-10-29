import "./History.css";
import { useState, useEffect } from "react";

const History = () => {
    const [moods, setMoods] = useState<{ mood: string; date: string; color: string }[]>([]); 

    useEffect(() => {
        const savedMoods = localStorage.getItem("moods"); // Retrieve moods from local storage
        if (savedMoods) {
            setMoods(JSON.parse(savedMoods)); 
        }
    }, []);

    // Function to delete a specific mood entry
    const deleteMood = (moodToDelete: { mood: string; date: string; color: string }) => {
        const updatedMoods = moods.filter(mood => mood.mood !== moodToDelete.mood || mood.date !== moodToDelete.date); // Filter out the mood to delete
        setMoods(updatedMoods); 
        localStorage.setItem("moods", JSON.stringify(updatedMoods)); 
    };

    return (
        <div className="historyContent">
            <h1 className="historyHeader">History</h1>
            <p className="historyCard">
                Your past entries will be displayed here.
            </p>
            {moods.length > 0 ? (
                <table className="moodTable">
                    <thead>
                        <tr>
                            <th>Mood</th>
                            <th>Date Logged</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moods.map((entry, index) => (
                            <tr key={index} className="moodItem" style={{ color: entry.color }}>
                                <td>{entry.mood === "Mitchell" ? "Feeling like Mitchell!" : entry.mood}</td>
                                <td>{entry.date}</td>
                                <td>
                                    <button className="deleteButton" onClick={() => deleteMood(entry)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No moods recorded yet.</p> 
            )}
        </div>
    );
};

export default History;
