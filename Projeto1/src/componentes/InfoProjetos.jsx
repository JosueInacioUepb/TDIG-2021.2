import React, { useEffect, useState } from "react";
import api from './services/api';
import './styles/geral.css';

export default function infoProjetos() {

  const [projetos, setProjetos] = useState([]);
  

  useEffect(() => {
    api.get("/api/v1/projects")
      .then((response) => {
        console.log(response);
        setProjetos(response.data)
        isLoaded: true
        redirectToReferrer: false
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (

    <div>
      <h1>Projetos</h1>
      <hr />
      <div className="container" >
        <ul>
          {projetos.map(projeto => (
            <li key={projeto.id}>
              <b>Projeto Nome: </b>{projeto.name}<br />
              <b>Description: </b>{projeto.description}<br />
              <button>Detalhar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


