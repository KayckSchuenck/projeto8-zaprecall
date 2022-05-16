import React from "react"
export default function Footer(props){
    if(props.perguntasRespondidas===props.deck.length){
       const erros= props.icons.filter((elemento)=> elemento==="./assets/erro.svg")
       if(erros.length===0){
        return (
            <footer className="finalizacao">
               <div> <img src="./assets/party.png"/> Parabéns! </div>
               <div>você não esqueceu de nenhum flashcard</div>{console.log(props.tela)} 
                {props.perguntasRespondidas}/{props.deck.length} CONCLUÍDOS
                <div>{props.icons.map((elemento)=> <img src={elemento}/>)}</div>
                <button onClick={()=>{ props.tela(true)}}>Reiniciar</button>
            </footer>
        )

    } else{
            return (
                <footer className="finalizacao">
                    <div> <img src="./assets/sad.png"/> Putz... </div>
                    <div>Ainda faltam alguns mas não desanime!</div>
                    {props.perguntasRespondidas}/{props.deck.length} CONCLUÍDOS
                    <div>{props.icons.map((elemento)=> <img src={elemento}/>)}</div>
                    <button onClick={()=>{ props.tela(true)}}>Reiniciar</button>
                </footer>
            )
        }
    }
    return (
    <footer>
        {props.perguntasRespondidas}/{props.deck.length} CONCLUÍDOS
        <div>{props.icons.map((elemento)=> <img src={elemento}/>)}</div>
    </footer>
    )
}