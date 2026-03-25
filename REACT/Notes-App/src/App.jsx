import AddNotes from "./Components/Add Notes/AddNotes";
import RecentNotes from "./Components/Recent Notes/RecentNotes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNode(id){
    setNotes(prev => prev.filter(notes => notes.id !== id));
  }

  return (
    <div className="page">
      <AddNotes setNotes={setNotes} />
      <RecentNotes notes={notes} onDelete={deleteNode}/>
    </div>
  );
}

export default App;
