import React from "react";
import Board from "./board";
import Score from "./Score";
import PlayerArea from "./PlayerArea";

function App() {
  return (
    <div>
      <Score />
      <Board />
      <PlayerArea />
    </div>
  );
}

export default App;
