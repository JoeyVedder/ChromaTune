import React, { useState } from "react";
import "./New.css";
<<<<<<< HEAD

const New: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedEmotion) {
      window.location.href = selectedEmotion;
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedEmotion) {
      window.location.hash = selectedEmotion;
    }
  };

  return (
    <div className="newContent">
      <div className="newCard">
        <h1 className="newHeader">How Are You Feeling</h1>
        <p>Select an emotion to log how you are feeling today.</p>
        <form className="newForm" onSubmit={handleSubmit}>
          <div className="newDropdown">
            <button
              type="button"
              id="newDropBtn"
              className="newDropBtn"
              onClick={handleButtonClick}
            >
              Dropdown
            </button>
            <div className="newDropContent">
              <a href="#" onClick={() => setSelectedEmotion("optionHappy")}>
                Happy
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionSad")}>
                Sad
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionAngry")}>
                Angry
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionEnergetic")}>
                Energetic
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionTired")}>
                Tired
              </a>
            </div>
          </div>
          <input type="submit" value="Submit" className="newSubmit" />
        </form>
      </div>
    </div>
  );
=======
import { useState } from "react";

const New = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmotion, setSelectedEmotion] = useState("Moods for Tunes"); 

    const emotions = ["Happy", "Sad", "Angry", "Excited", "Anxious", "Mitchell"]; //Can add more moods if needed

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
>>>>>>> 7caba23 (added dark mode function and mood dropdown)
};

export default New;