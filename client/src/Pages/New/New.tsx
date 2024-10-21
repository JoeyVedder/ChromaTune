import "./New.css";
import { Dropdown } from "react-bootstrap";

const New = () => {
    return (
        <div className="newContent">
            <h1 className="newHeader">How Are You Feeling</h1>
            <p className="newCard">
                Select an emotion to log how you are feeling today.
            </p>
            <div className="dropdownMenu">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select an Emotion
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/optionHappy">Happy</Dropdown.Item>
                    <Dropdown.Item href="#/optionSad">Sad</Dropdown.Item>
                    <Dropdown.Item href="#/optionAngry">Angry</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
        </div>
        </div>
    ) 
}

export default New;