import AddNotes from "./Components/Add Notes/AddNotes";
import RecentNotes from "./Components/Recent Notes/RecentNotes";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
  const savedNotes = JSON.parse(localStorage.getItem("note"));
  return savedNotes ? savedNotes:[];
  });

  function deleteNode(id){
    setNotes(prev => prev.filter(note => note.id !== id));
    
  }
  useEffect(() => {
  localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="page">
      <AddNotes setNotes={setNotes} />
      <RecentNotes notes={notes} onDelete={deleteNode}/>
    </div>
  );
}

export default App;
