import React from "react";

import './App.css'

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Fragmento from './components/basicos/Fragmento';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default function App(props)  {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

             <Card titulo="#13 - Mega Sena" color="#3E3065"> 
                <Mega qtde={6}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="rgb(151, 240, 174)"> 
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente controlado (Input)" color="rgb(92, 161, 244)"> 
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#e6e88cff"> 
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#db212dff"> 
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#95d8ecff"> 
                <ParOuImpar numero={12}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Kaike Elias'}}></UsuarioInfo>
                <UsuarioInfo usuario={{ }}></UsuarioInfo>
                
            </Card>

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
