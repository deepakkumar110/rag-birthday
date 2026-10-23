import { useState } from "react";
import Welcome from "./components/Welcome";
import BirthdayLetter from "./components/BirthdayLetter";
import CakeCelebration from "./components/CakeCelebration";
import SpecialMessage from "./components/SpecialMessage";
import SecretSurprise from "./components/SecretSurprise";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <main className="birthday-app">
      {screen === "welcome" && (
        <Welcome onNext={() => setScreen("letter")} />
      )}

      {screen === "letter" && (
        <BirthdayLetter
          onBack={() => setScreen("welcome")}
          onNext={() => setScreen("cake")}
        />
      )}

      {screen === "cake" && (
        <CakeCelebration
          onBack={() => setScreen("letter")}
          onNext={() => setScreen("special")}
        />
      )}

      {screen === "special" && (
        <SpecialMessage
          onBack={() => setScreen("cake")}
          onNext={() => setScreen("secret")}
        />
      )}

      {screen === "secret" && (
        <SecretSurprise
          onBack={() => setScreen("special")}
          onRestart={() => setScreen("welcome")}
        />
      )}
    </main>
  );
}

export default App;