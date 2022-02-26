import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './formcadastro/App';



const pagina = document.getElementById('root')
ReactDOM.render(
    <div className="App">
        <div className="App-header">
            <img src={'logo.ico'} className="App-logo" alt="logo" />
            <h3>Formulário de Cadastros de Alunos</h3>
        </div>
        <br></br>
            
        <div className="FormCadastro" >
           
        <br></br>
        <br></br>
            <div id="bloco2">
            <App> </App>
            </div>

            <div id="bloco3">
            <h3></h3>
            </div>
         
        </div> 
        
        <div id="rodape">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <strong>TODOS OS DIREITOS RESERVADOS</strong><br></br>
			Universidade Estadual da Paraíba - UEPB |
			Josué Inácio da Silva           
        </div>
                  
    </div>

, pagina);