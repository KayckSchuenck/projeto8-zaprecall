
export default function TelaInicial(props){
    return(
        <div className="tela1">
            <img src="./assets/logo.png"/>
            ZapRecall
            <input type="text" placeholder="Digite sua meta de Zaps" onChange={(e)=> props.setmeta(e.target.value) }/>
            <button onClick={()=>{if(props.meta<9&&props.meta>0){props.tela(false)}}}>Iniciar Recall!</button>
        </div>
    )
}