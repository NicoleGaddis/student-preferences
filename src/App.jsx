import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // Name preference

  const {
    value: name,
    setValue: setName
  } = useLocalStorage("", "studentName");

  // Favorite language preference
  
  const {
    value: language,
    setValue: setLanguage
  } = useLocalStorage("JavaScript", "favoriteLanguage");

  // Dark mode preference
  const {
    value: darkMode,
    setValue: setDarkMode
  } = useLocalStorage('true', "dark", "bool");

   // Area preferences
  {/* https://stackoverflow.com/questions/64302466/how-to-apply-filter-in-a-list-with-checkbox-in-reactjs */}
  const {
    value: preferedAreas,
    setValue: setPreferedAreas
  } = useLocalStorage(
    "", {}, "object");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Saved Preferences:", {
      name,
      language,
      darkMode

    }, JSON.stringify(preferedAreas, null, 1));

    alert("Preferences saved!");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Student Preferences</h1>

      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Favorite Programming Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        </div>

        {/* https://stackoverflow.com/questions/64302466/how-to-apply-filter-in-a-list-with-checkbox-in-reactjs */}
        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">Prefered Programing Areas</label>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">Backend</label>
          <input
            type="checkbox"
            id="backend"
            checked={preferedAreas.backend || false}
            onChange={(event) => setPreferedAreas((prev) => ({
              ...prev,
              backend: event.target.checked,
            }))
            }
          />
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">Frontend</label>
          <input
            type="checkbox"
            id="frontend"
            checked={preferedAreas.frontend || false}
            onChange={(event) => setPreferedAreas((prev) => ({
              ...prev,
              frontend: event.target.checked,
            }))
            }
          />
        </div>
        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">Database</label>
          <input
            type="checkbox"
            id="database"
            checked={preferedAreas.database || false}
            onChange={(event) => setPreferedAreas((prev) => ({
              ...prev,
              database: event.target.checked,
            }))
            }
          />
        </div>
        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">DevOps</label>
          <input
            type="checkbox"
            id="devOps"
            checked={preferedAreas.devOps || false}
            onChange={(event) => setPreferedAreas((prev) => ({
              ...prev,
              devOps: event.target.checked,
            }))
            }
          />
        </div>
        <div className="form-control checkbox-control">
          <label htmlFor="preferedAreas">QA</label>
          <input
            type="checkbox"
            id="qa"
            checked={preferedAreas.qa || false}
            onChange={(event) => setPreferedAreas((prev) => ({
              ...prev,
              qa: event.target.checked,
            }))
            }
          />
        </div>

        <button type="submit">Save Preferences</button>
      </form>

      <div className="preferences">
        <h2>Current Preferences</h2>
        <p>
          <strong>Name:</strong> {name || "Not set"}
        </p>
        <p>
          <strong>Favorite Language:</strong> {language}
        </p>
        <p>
          <strong>Dark Mode:</strong> {darkMode ? "On" : "Off"}
        </p>
        <p>
          <strong>Prefered Areas:</strong> {Object.keys(preferedAreas)
            .filter(key => preferedAreas[key])
            .join(', ').toUpperCase() || 'None selected'}
        </p>
      </div>
    </div>
  );
}

export default App;