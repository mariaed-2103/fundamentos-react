import React from "react";

import './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Fragmento from './components/basicos/Fragmento';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";


export default function App(props)  {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#07 - Desafio Repetição" color="#ecb695ff"> 
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#f0ace1ff"> 
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#A0CAE0"> 
                <Familia sobrenome="Silva"> 
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#C9C0F5"> 
                <Aleatorio min={1} max={100}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E45F56"> 
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#8BAD39"> 
                <ComParametro 
                titulo="Situação do Aluno" 
                aluno="Kaike Elias" nota={9.3}
            />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#F24495"> 
                <Primeiro />
            </Card>
            </div>
            
        </div>
    );
}

// versão reduzida de uma função com return
/*export default () => (
        <div id="app">
            <h1>Fundamentos React 2</h1>
            <Fragmento />
            <ComParametro 
                titulo="Situação do Aluno" 
                aluno="Kaike Elias" nota={9.3}
            />
            <Primeiro />
        </div>
    )
*/
