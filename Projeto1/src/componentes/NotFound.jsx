import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>404 - Página não encontrada!</h1>
        <Link to="/">Return to Home</Link>
    </div>
);

export default NotFound;