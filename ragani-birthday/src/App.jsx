
import { useState } from "react";

import Welcome from "./components/Welcome";
import SecretSurprise from "./components/SecretSurprise";
import CakeCelebration from "./components/CakeCelebration";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <main className="birthday-app">
      {screen === "welcome" && (
        <Welcome
          onNext={() => setScreen("secret")}
        />
      )}

      {screen === "secret" && (
        <SecretSurprise
          onBack={() => setScreen("welcome")}
          onNext={() => setScreen("cake")}
        />
      )}

      {screen === "cake" && (
        <CakeCelebration
          onBack={() => setScreen("secret")}
          onRestart={() => setScreen("welcome")}
        />
      )}
    </main>
  );
}

export default App;

