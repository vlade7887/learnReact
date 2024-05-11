import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  

  function handleOnChange(event){
    setName(event.target.value)
    
  }

  function handleOnChangea(event){
    setLName(event.target.value)
  }
  
  function handleFirstName(event){
    setFirstName(name);
    setLastName(lName)
    event.preventDefault();
    
  }
  
 

  return (
    <div className="container">
      <h1>Hello {`${firstName} ${lastName}`}</h1>
      <form>
        <input 
          onChange={handleOnChange} 
          type="text" 
          name="fName" 
          placeholder="First Name"/>
        <input 
          onChange={handleOnChangea}
          type="text" 
          name="lName" 
          placeholder="Last Name"/>
        <button 
          onClick={handleFirstName}
          type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
