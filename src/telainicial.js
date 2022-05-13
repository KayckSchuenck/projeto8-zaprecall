
export default function TelaInicial(props){

    return(
        <div className="tela1">
            <img src="./assets/logo.png"/>
            ZapRecall
            <button onClick={()=>{props.tela(false)}}>Iniciar Recall!</button>
        </div>
    )
}