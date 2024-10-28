import { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
    
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className="settingsContent">
            <div className="settingsCard">
            <h1>Settings</h1>
                <div className="settingsBox">
                <label className="settingsDark">
                    <input 
                        type="checkbox" 
                        checked={darkMode} 
                        onChange={toggleDarkMode} 
                    />
                    Dark Mode
                </label>
                </div>
                <p>Additional settings will appear here in the future.</p>
            </div>
        </div>
    );
}

export default Settings;
                

