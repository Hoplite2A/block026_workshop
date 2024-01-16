import Individual from "./Individual";
import ContactList from "./ContactLists";
import { useState } from "react";

export default function ContactRow({ contact, setSelectedContactId }) {

    const { id, name, email, phone } = contact;

    return (
        <tr onClick={()=>setSelectedContactId(id)}
        >
            <td className='td1' >{name}</td>
            <td className='td2' >{email}</td>
            <td className='td3' >{phone}</td>
        </tr>
    );
}
