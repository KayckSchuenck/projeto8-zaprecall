import React from "react"
export default function Footer(props){
    return (
    <>
    <footer>
        {props.perguntasRespondidas}/{props.deck.length} CONCLUÍDOS
        <br/>{props.icons}
    </footer>
    </>
    )
}