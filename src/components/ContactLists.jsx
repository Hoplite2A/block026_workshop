import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const BASEURL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/";
const GET = "users"

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList() {

  const [contacts, setContacts] = useState(dummyContacts);
  console.log(contacts);

    useEffect (() => {
        async function fetchContacts() {
            try {
                const res = await fetch(`${BASEURL}${GET}`);
                const json = await res.json();
                setContacts(json)
            }
            catch (err) {
                console.error("fetchContacts Failed to Fetch", err);
            }
        }
        return () => fetchContacts();
    }, []);
    

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List Table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* INSERT (BELOW) - STATE.map function with Component and required Props */}
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
}
