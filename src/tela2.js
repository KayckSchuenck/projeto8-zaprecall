import React from 'react';
import Perguntas from "./perguntas";
import Footer from './footer';

export default function Tela2(){
    const [perguntasRespondidas,setPerguntasRespondidas]=React.useState(0)
    const[icons,setIcons]=React.useState([])
    const deck1=[{
        Q: "O que é JSX?", 
        R: "Uma extensão de linguagem do JavaScript"
    },
    {
        Q: "O React é __",
        R: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        Q: "Componentes devem iniciar com __",
        R: "letra maiúscula"
    },
    {
        Q: "Podemos colocar __ dentro do JSX", 
        R: "expressões"
    },
    {
        Q: "O ReactDOM nos ajuda __", 
        R: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        Q: "Usamos o npm para __", 
        R: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        Q: "Usamos props para __",
        R: "passar diferentes informações para componentes"
    },
    {
        Q: "Usamos estado (state) para __",
        R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]
    return(
    <>
    <header>
        <img src="./assets/logo-pequeno.png"/>
        ZapRecall
    </header>
    <div className="conteudo">
    {deck1.map((elemento,index)=><Perguntas key={index} numero={index} questao={elemento.Q} resposta={elemento.R} setQtd={setPerguntasRespondidas} qtd={perguntasRespondidas} add={setIcons} icon={icons}/>)}
    </div>
    <Footer deck={deck1} perguntasRespondidas={perguntasRespondidas} icons={icons}/>
    </>
    )
}