import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Titulo }       from './componentes/componente01';
import { Paragrafos }   from './componentes/componente02';
import { Imagem }       from './componentes/componente03';
import { Rodape }       from './componentes/componente04';

const pagina = document.getElementById('root')

ReactDOM.render(

    <div> 
        
        <div id = "div1" >
            <Titulo valor = 'Diário Eletronico do Ensino Superior (DEES)'> </Titulo>
        </div>

        <div id ="bloco1" >
            <Paragrafos > </Paragrafos>
        </div>
        
        <div id= "bloco2">

			<div id= "imagem">
				<Imagem></Imagem>
			</div>
            <div id= "contato">
				<Rodape></Rodape>
			</div>

		</div>
        
    </div>
,pagina)