import "./New.css";
import { useState } from "react"; 
import { Dropdown } from "react-bootstrap";

const New = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<string>("Select an Emotion"); 

    // Handler to update the selected emotion
    const handleSelect = (emotion: string) => {
        setSelectedEmotion(emotion); // Updates the state with the new emotion
    };

    return (
        <div className="newContent">
            <h1 className="newHeader">How Are You Feeling</h1>
            <p className="newCard">
                Select an emotion to log how you are feeling today.
            </p>
            <div className="dropdownMenu">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedEmotion} {/* Display the selected emotion */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/* Each Dropdown.Item updates the selected emotion when clicked */}
                        <Dropdown.Item onClick={() => handleSelect("Happy")}>Happy</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSelect("Sad")}>Sad</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSelect("Angry")}>Angry</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div>
        </div>
    );
}

export default New;
