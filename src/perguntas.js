import React from 'react'
import { NaoLembrei,QuaseNaoLembrei,Lembrei } from './resultados'

export default function Perguntas(props){
    const [questions,setQuestions]=React.useState("inicio")
    const mudar=(numero)=>{
        setQuestions(numero)
    }
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
                <button className='opcao' onClick={()=>NaoLembrei(props.setQtd,props.qtd,props.add,props.icon,mudar)} >
                Não Lembrei
                </button>
                <button className='opcao' onClick={()=>QuaseNaoLembrei(props.setQtd,props.qtd,props.add,props.icon,mudar)} >
                Quase não Lembrei
                </button>
                <button className='opcao' onClick={()=>Lembrei(props.setQtd,props.qtd,props.add,props.icon,mudar)} >
                Zap!
                </button>
            </div>
            </div> 
        )
    }
    if(questions==="erro"||questions==="quase"||questions==="zap"){
        return(
            <div className={`pergunta riscada${questions}`}>
            Pergunta {props.index} <img src={`./assets/${questions}.svg`}/>
            </div>
        )
    }
}