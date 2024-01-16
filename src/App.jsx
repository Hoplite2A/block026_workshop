import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactLists";
import Individual from "./components/Individual";


export default function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  console.log(selectedContactId);
  
  return (
    <>
      {!selectedContactId ? 
        <ContactList selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />  : <>
          <Individual selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
        </>
      }
    </>
  );
}
