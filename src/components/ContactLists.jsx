import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
const BASEURL = "http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/";
const GET = "users";

export default function ContactList({selectedContactId, setSelectedContactId}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(`${BASEURL}${GET}`);
        const json = await res.json();
        setContacts(json);
      } catch (err) {
        console.error("fetchContacts Failed to Fetch", err);
      }
    }
    return () => fetchContacts();
  }, []);

  console.log(contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List Table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='th1'>Name</th>
          <th className='th2'>Email</th>
          <th className='th3'>Phone</th>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id}
                    contact={contact}
                    setSelectedContactId={setSelectedContactId}
                />;
          })
        }
      </tbody>
    </table>
  );
}
