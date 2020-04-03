import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Newincident(){
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o Caso Detalhadamente para Encontrar um Herói para Resolver Isso </p>

          <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para HOME
                    </Link>

        </section>

        <form>
          <input placeholder="Titulo do Caso" />
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em Reais" />

         
          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}