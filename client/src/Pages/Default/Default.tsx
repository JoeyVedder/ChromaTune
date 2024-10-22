import "./Default.css";

const Default = () => {
    return (
        <div className="defaultContent">
            <h1 className="defaultHeader"></h1>
            <div className="defaultCard">
                <p><strong>How It Works:</strong></p>
                <ol>
                    <li><strong>Select Your Mood:</strong> Choose how you feel today from the dropdown menu. Options include happy, sad, angry, and more.</li>
                    <li><strong>Get Your Playlist:</strong> Based on your selection, our algorithm curates a personalized playlist that matches your emotional state.</li>
                    <li><strong>Enjoy the Music:</strong> Sit back and enjoy a handpicked collection of songs designed to resonate with your mood.</li>
                    <li><strong>Change Anytime:</strong> Feel free to change your mood at any time, and we'll refresh your playlist accordingly!</li>
                </ol>
                <p>
                    Enter your mood from the following dropdown.
                </p>
            </div>
        </div>
    );
}

export default Default;
