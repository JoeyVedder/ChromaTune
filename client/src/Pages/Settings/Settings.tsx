import { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem('lightMode') === 'true';
  });

  // Function to toggle light mode
  const toggleLightMode = () => {
    setLightMode(prevMode => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('lightMode', lightMode.toString());
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [lightMode]);

  return (
    <div className="settingsContent">
          <div className="settingsCard">
          <h1>Settings</h1>
              <div className="settingsBox">
              <label className="settingsDark">
                  <input 
                    type="checkbox" 
                    checked={lightMode} 
                    onChange={toggleLightMode} 
                  />
                  Light Mode
              </label>
      </div>
      <div className="settingsCard">
        <p>Additional settings will appear here in the future.</p>
      </div>
    </div>
  </div>
  );
};

export default Settings;
