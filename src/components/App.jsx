import React from "react";
import Board from "./Board";
import Score from "./Score";
import PlayerArea from "./PlayerArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Board />
        <PlayerArea />
      </div>
    </DndProvider>
  );
}

export default App;
