import { useLocation } from 'react-router-dom';

const Items = [
    'Lorem Ipsum',
    'Ipsum Dipsum',
    'Foo Bar',
    'A little black cat',
    'A lazy fox',
    'A jumping dog'
];

const doProxima = term => {
    if (!term) {
        return Items;
    }

    return Items.filter(item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1);
};

const Professor = () => {
    const query = new URLSearchParams(useLocation().search);
    const term = query.get('q');
    const returned = doProxima(term);

    return (
        <div>
            <h1>Área do Professor</h1>
            <hr />
            Found results for {term}:
            <ul>
                {returned.map(t => (<li key={t}>{t}</li>))}
            </ul>
        </div>
    );
};

export default Professor;