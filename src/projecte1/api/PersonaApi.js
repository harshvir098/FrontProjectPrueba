
import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8080/persona' }); 

export const savePersona = async (obj) => await instance.post('/addPersona', obj);
export const getPersonas = async () => await instance.get();
export const deletePersona = async (id) => await instance.delete('/' + id);
export const updatePersona = async (id, name) => await instance.put('/' + id, { name });
