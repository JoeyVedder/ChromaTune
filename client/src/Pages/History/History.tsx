import "./History.css";
import { useState, useEffect } from "react";

const History = () => {
    const [moods, setMoods] = useState<string[]>([]);

    useEffect(() => {
        const savedMoods = localStorage.getItem("moods");
        if (savedMoods) {
            setMoods(JSON.parse(savedMoods));
        }
    }, []);

    const deleteMood = (moodToDelete: string) => {
        const updatedMoods = moods.filter(mood => mood !== moodToDelete);
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
                <ul className="moodList">
                    {moods.map((mood, index) => (
                        <li key={index} className="moodItem">
                            {mood}
                            <button className="deleteButton" onClick={() => deleteMood(mood)}>Delete</button>
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
