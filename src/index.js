import React from 'react';
import ReactDOM from 'react-dom';
import TelaInicial from './telainicial';
import Tela2 from './tela2'
import './reset.css'
import './style.css'

function App() {
  const[telainicial,setTelainicial]=React.useState(true)
  if(telainicial===true){
    return (
    <TelaInicial tela={setTelainicial}/>
    )}

  return (
    <Tela2 />
  )}

ReactDOM.render(
  <App />, document.querySelector('.root')
);