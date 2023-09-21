import './NotFound.css';
import {useNavigate} from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found-section outer-content-container__text-restriction">
            <div className="inner-content-container">
                <h1>404</h1>
                <h2>De pagina waar je naar zoekt bestaat niet</h2>
                <p>(Tenzij je opzoek was naar een pagina met een animatie van een taco die struikelt. Als dat zo is bestaat de pagina wel en heb je 'm zeker gevonden.)</p>
                <button type="button" onClick={() => navigate('/')}>Terug naar home</button>
            </div>
        </section>
    );
}

export default NotFound;