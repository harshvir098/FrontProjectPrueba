import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Show from '../pages/Show';
import Delete from '../pages/Delete';



const Router = () => (
    <BrowserRouter basename= "/FrontProjectPrueba/">
        <Routes>   
            <Route index element={<Home/>} />
               <Route path="/show" element={<Show/>} />
            <Route path="/add" element={<Add/>} />
            
                              <Route path="/Delete" element={<Delete/>} />

               
           
        </Routes>
    </BrowserRouter>
);

export default Router;