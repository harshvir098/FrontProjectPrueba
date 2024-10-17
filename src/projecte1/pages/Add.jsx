import { useState } from "react";
import { savePersona } from "../api/PersonaApi";


const Add = () => {
      const [name, setName] = useState('');
    const [edad, setEdad] = useState('');

    const handleSave = async () => {

        const person = { name, edad };

       
            await savePersona(person);
           
            setName('');
            setEdad('');
            alert('Persona added successfully!');
       
        
    };

    return (
        <div>
            <h1>Add Persona</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            /><br></br><br></br>
            <input
                type="number"
                placeholder="Age"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            /><br></br><br></br>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Add;