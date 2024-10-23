import "./New.css";

const New = () => {
    return (
        <div className="newContent">
            <div className="newCard">
                <h1 className="newHeader">How Are You Feeling</h1>
                <p>
                    Select an emotion to log how you are feeling today.
                </p>
                <div className="newDropdown">
                    <button className="newDropBtn">Dropdown</button>
                    <div className="newDropContent">
                        <a href="optionHappy">Happy</a>
                        <a href="optionSad">Sad</a>
                        <a href="optionAngry">Angry</a>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default New;