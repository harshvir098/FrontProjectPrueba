import { useEffect, useState } from 'react';
import { getPersonas } from '../api/PersonaApi';

const Show = () => {
    const [personas, setPersonas] = useState([]);

  
    const fetchPersonas = async () => {
        const response = await getPersonas();
        setPersonas(response.data); 
    };

   
    useEffect(() => {
        fetchPersonas();
    }, []); 

    return (
        <>
            <h1>Show</h1>

            
            <ul>
                {personas.map(persona => (
                    <li key={persona.id}>
                       <p>this is {persona.name} and his (Age: {persona.edad})</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Show;
