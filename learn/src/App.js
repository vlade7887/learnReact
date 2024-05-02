import contacts from "./data/contacts";
import Card from "./components/Card";
import Avatar from "./components/Avatar";




function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar  
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Mh_0LE_Y1cFrfUBnMXC7-2jjQ8cZLLpRAcF4vQwrCw&s"/>

        {contacts.map((contact) =>(
           <Card 
              key={contact.id}
              id={contact.id}
              name={contact.name}
              img={contact.imgURL}
              tel={contact.phone}
              email={contact.email}
          />
      
))}



    
 
     {/*
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
