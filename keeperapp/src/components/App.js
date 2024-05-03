import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../data/notes"





function App() {

  return (
    <div>
      <Header />
    
       {notes.map((data) => 
          <Note
            key = {data.key}
            num = {data.key}
            title = {data.title}
            content = {data.content}
          />
            

        )}
         
      
       
      <Footer />
    </div>
  );
}

export default App;
