import ContactList from "./ContactLists";
import { useState, useEffect } from "react";

const BASEURL = "http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/";
const GET = "users/";


export default function Individual({selectedContactId, setSelectedContactId}) {
  
  const [individual, setIndividual] = useState([]);
  const { name, username, email, phone, website } = individual;

    useEffect(()=> {
        async function fetchIndividualDetails() {
            try {
                const res = await fetch(`${BASEURL}${GET}${selectedContactId}`);
                const json = await res.json();
                setIndividual(json);
            } catch (err) {
                console.error("fetchIndividualDetails Failed to Fetch", err);
            }
        }
        return () => fetchIndividualDetails();
    }, [])

  return (
      <div
        onClick={()=>setSelectedContactId(null)}
      >
        <p className="userInfo">Name: {name}</p>
        <p className="userInfo">Username: {username}</p>
        <p className="userInfo">Email: {email}</p>
        <p className="userInfo">Phone: {phone}</p>
        <p className="userInfo">URL: {website}</p>
      </div>
  );
}
