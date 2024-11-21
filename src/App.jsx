import { Board } from "./components/Board";
import "./App.css";
import { observe, removeObserver } from "./services/Game";
import { useEffect } from "react";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

let i = 0;
function App() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);

  console.log("renderred", ++i);
  useEffect(() => {
    const callback = (newPosition) => {
      setKnightPosition(newPosition);
    };

    observe(callback);

    return () => {
      removeObserver();
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <main
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Board knightPosition={knightPosition} />
      </main>
    </DndProvider>
  );
}

export default App;
