import { Link } from 'react-router-dom';

const Home = () => (
        <div>    
                <ul>
                    <li>
                        <Link to="/show">Show People</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Person</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete Person</Link>
                    </li>
                </ul>
        </div>
)

export default Home;