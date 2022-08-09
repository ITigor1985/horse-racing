import "./App.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const [roundState, setRoundState] = useState([]);
  useEffect(() => {
    const socket = io("http://localhost:3002/");
    socket.on("connect", () => console.log(socket.connected));
    socket.emit("start");
    socket.on("ticker", function (round) {
      setRoundState(round);
    });
  }, []);

  return (
    <div className="App">
      {roundState.map((step) => (
        <div>{step.distance}</div>
      ))}
    </div>
  );
}

export default App;
