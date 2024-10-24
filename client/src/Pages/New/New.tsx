import "./New.css";
import { useState } from "react";

const New = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmotion, setSelectedEmotion] = useState("Moods for Tunes"); 

    const emotions = ["Happy", "Sad", "Angry", "Excited", "Anxious"]; //Can add more moods if needed

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleEmotionSelect = (emotion: any) => {
        setSelectedEmotion(emotion);
        setIsOpen(false); 
    };

    return (
        <div className="newContent">
            <h1 className="newHeader"></h1>
            <div className="newBox"> 
                <p className="newCard">
                    Select a Mood for a jam session.
                </p>
                <div className="dropdownMenu">
                    <div className="dropdown" onClick={toggleDropdown}>
                        <div className="dropdownToggle">
                            {selectedEmotion}
                        </div>
                        {isOpen && (
                            <div className="dropdownOptions">
                                {emotions.map((emotion) => (
                                    <div 
                                        key={emotion} 
                                        className="dropdownOption" 
                                        onClick={() => handleEmotionSelect(emotion)}
                                    >
                                        {emotion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
