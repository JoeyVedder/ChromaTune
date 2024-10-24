import "./Default.css";

const Default = () => {
    return (
        <div className="defaultContent">
            <div className="defaultCard">
                <h1>What is ChromaTune</h1>
                <div className="defaultCardText">
                    <p>
                        ChromaTune is a web application that generates playlists based on your mood.
                    </p>
                    <p>
                        We use the Spotify API to generate a playlist that is tailored to your mood.
                    </p>
                </div>
            </div>
            <div className="defaultCard">
                <h1>How to use ChromaTune</h1>
                <div className="defaultCardText">
                    <p>Click on the "New" tab in the nav bar and select a mood from the dropdown.</p>
                    <p>After you have selected your mood, a generated playlist will appear just for you!</p>
                </div>
            </div>
        </div>
    );
}

export default Default;