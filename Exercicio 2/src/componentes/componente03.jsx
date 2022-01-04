
import React from 'react';
import Logo from '../imagens/logo.png';

class Imagem  extends React.Component {
    render() {
        return (
            <div>
                <figure>
                <img src={Logo} alt="DEES"/>
				<figcaption>Diário Eletronico do Ensino Superior (DEES)</figcaption>
				</figure>
            </div>
        );
    };
};
export {Imagem}