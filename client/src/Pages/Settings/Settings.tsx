import { useState } from "react";
import "./Settings.css";

const Settings = () => {
    const [isMoodMotionEnabled, setIsMoodMotionEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    // Handler to toggle Mood Motion
    const handleMoodMotionToggle = () => {
        setIsMoodMotionEnabled((prev) => !prev);
    };

    // Handler to toggle light/dark mode
    const handleDarkModeToggle = () => {
        setIsDarkModeEnabled((prev) => !prev);
        // This allows styles to be added to dark mode
        if (!isDarkModeEnabled) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };

    return (
        <div className={`settingsContent ${isDarkModeEnabled ? "dark" : ""}`}>
            <h1 className="settingsHeader">Settings</h1>
            <p className="settingsCard">
                Your settings will be displayed here.
            </p>
            <div className="setting">
                <label>
                    <input
                        type="checkbox"
                        checked={isMoodMotionEnabled}
                        onChange={handleMoodMotionToggle}
                    />
                    Mood Motion
                </label>
            </div>
            <div className="setting">
                <label>
                    <input
                        type="checkbox"
                        checked={isDarkModeEnabled}
                        onChange={handleDarkModeToggle}
                    />
                    Dark Mode
                </label>
            </div>
            <p>
                Mood Motion is {isMoodMotionEnabled ? "enabled" : "disabled"}.
            </p>
            <p>
                Dark Mode is {isDarkModeEnabled ? "enabled" : "disabled"}.
            </p>
        </div>
    );
};

export default Settings;
