import "./New.css";
import { useState } from "react";

const New: = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmotion, setSelectedEmotion] = useState("Mood for Tunes);

  const emotions = ["Happy", "Sad", "Angry", "Excited", "Anxious", "Mitchell"]; // Can add more moods later on if needed

  // Toggle the dropdown menu open/close state
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle the selection of a mood and save it to local storage
  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    setIsOpen(false);

    const date = new Date().toLocaleDateString(); // Get the current date in MM/DD/YYYY format
    const color = getMoodColor(emotion); // Get the color associated with the selected mood

    // Save the selected mood along with its date and color to local storage
    const savedMoods = localStorage.getItem("moods");
    const updatedMoods = savedMoods ? JSON.parse(savedMoods) : [];
    updatedMoods.push({ mood: emotion, date, color });
    localStorage.setItem("moods", JSON.stringify(updatedMoods));
  };

  // Function to get the color representation of the mood
  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "Happy":
        return "yellow";
      case "Sad":
        return "blue";
      case "Angry":
        return "red";
      case "Excited":
        return "orange";
      case "Anxious":
        return "purple";
      case "Mitchell":
        return "green"; // Add a color for Mitchell
      default:
        return "white"; // Default Color 
    }
  };

  return (
    <div className="newContent">
      <h1 className="newHeader"></h1>
      <div className="newBox">
        <p className="newCard">
          Select a Mood for a jam session.</p>
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
