// src/pages/Delete.jsx
import { useEffect, useState } from 'react';
import { getPersonas, deletePersona } from '../api/PersonaApi';


const Delete = () => {
    const [personas, setPersonas] = useState([]);

    // Function to fetch the list of personas
    const fetchPersonas = async () => {
        
            const response = await getPersonas();
            setPersonas(response.data);
        
    };

    // Function to delete a persona when the delete button is clicked
    const handleDelete = async (id) => {
       
            await deletePersona(id);
            // Refresh the list after deletion
            fetchPersonas();
             alert('Persona deleted successfully!');
        
    };

    useEffect(() => {
        // Fetch personas on component mount
        fetchPersonas();
    }, []);

    return (
        <div>
            <h2>Delete Persona</h2>
            <ul>
                {personas.map(persona => (
                    <li key={persona.id}>
                        {persona.name} (Age: {persona.edad})
                        {/* Delete button */}
                        <button onClick={() => handleDelete(persona.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Delete;
