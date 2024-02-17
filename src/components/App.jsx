import React, { useState } from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [note, setNote] = useState([]);

  function addNote(note) {
    setNote((preNote) => {
      return [...preNote, note]
    })
  }

  function deleteItem(id) {
    setNote((preNote) => {
      return preNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {note.map((noteItem, index) => {
        return (
          <Note 
            id={index}
            key={index} 
            title={noteItem.title} 
            content={noteItem.content} 
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
