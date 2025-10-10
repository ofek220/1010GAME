import React from "react";
import Board from "./Board";
import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import CustomDragLayer from "./CustomDragLayer";

function App() {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div>
        <Board />
        <CustomDragLayer />
      </div>
    </DndProvider>
  );
}

export default App;
