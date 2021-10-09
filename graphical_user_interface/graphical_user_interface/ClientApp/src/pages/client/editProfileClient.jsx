import React from 'react'
import { useState } from "react";
import auth from '../../auth';
import "../../App.css";
 
{/** THIS IS THE CLIENT EDIT PROFILE PAGE */}

function editProfileClient() {

   /* const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Cellphone, setCellphone] = useState("");
    const [Gender, setGender] = useState("");
    const [DOB, setDOB] = useState(new Date());
    const [IdNumber, setIdNumber] = useState("");
    const [City, setCity] = useState("");
    const [Street, setStreet] = useState("");
    const [PostalCode, setPostalCode] = useState("");

    auth.editProfileClient({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Cellphone: Cellphone,
        Gender: Gender,
        DOB: DOB,
        IdNumber: IdNumber,
        City: City,
        Street: Street,
        PostalCode: PostalCode
    });
*/
    return (
        <div className="EditClientProf">
            <header>Edit Profile (Client)</header>

            <label>Name</label>
        {/**  <input type="text" onChange={(e) => setFirstName(e.target.value)} />*/} 
            <label>Surname</label>
        {/** <input type="text" onChange={(e) => setLastName(e.target.value)} />*/} 
            <label>Email</label>
        {/**  <input type="email" onChange={(e) => setEmail(e.target.value)} />*/} 
            <label>Cellphone</label>
        {/**  <input type="tel" onChange={(e) => setCellphone(e.target.value)} />*/} 
            <label>Gender</label>
        {/**  <input type="radio" onChange={(e) => setGender(e.target.value)} />*/} 
            <label>Date of Birth</label>
        {/**   <input type="date" onChange={(e) => setDOB(e.target.value)} />*/} 
            <label>ID Number</label>
        {/**    <input type="text" onChange={(e) => setIdNumber(e.target.value)} />*/} 
            <label>City</label>
        {/**    <input type="text" onChange={(e) => setCity(e.target.value)} />*/} 
            <label>Street Name</label>
        {/**    <input type="text" onChange={(e) => setStreet(e.target.value)} />*/} 
            <label>Postal Code</label>
        {/**    <input type="text" onChange={(e) => setPostalCode(e.target.value)} />*/} 
        </div>
    )
}

export default editProfileClient
