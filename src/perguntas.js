import React from 'react'
import { NaoLembrei,QuaseNaoLembrei,Lembrei } from './resultados'

export default function Perguntas(props){
    const [questions,setQuestions]=React.useState("inicio")
    if(questions==="inicio"){
        return(
            <div className="pergunta">
            Pergunta {props.index} <img src="./assets/play.svg" onClick={()=>setQuestions("perguntando")}/>
            </div>
        )
    }
    if(questions==="perguntando"){
        return(
            <div className="perguntaAberta">
                {props.questao}
                <img src="./assets/setinha.png" onClick={()=>setQuestions("virada")}/>
            </div>
        )
    }
    if(questions==="virada"){
        return(
            <div className="final perguntaAberta">
            {props.resposta}
            <div>
                <button className='opcao' onClick={()=>NaoLembrei(props.setQtd,props.qtd)} >
                Não Lembrei
                </button>
                <button className='opcao' onClick={()=>QuaseNaoLembrei(props.setQtd,props.qtd)} >
                Quase não Lembrei
                </button>
                <button className='opcao' onClick={()=>Lembrei(props.setQtd,props.qtd)} >
                Zap!
                </button>
            </div>
            </div> 
        )
    }
}