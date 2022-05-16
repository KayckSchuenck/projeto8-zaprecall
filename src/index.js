import React from 'react';
import ReactDOM from 'react-dom';
import TelaInicial from './telainicial';
import Tela2 from './tela2'
import './reset.css'
import './style.css'

function App() {
  const[telainicial,setTelainicial]=React.useState(true)
  const[metaZaps,setMetaZaps]=React.useState(0)
  if(telainicial===true){
    return (
    <TelaInicial tela={setTelainicial} setmeta={setMetaZaps} meta={metaZaps}/>
    )}

  return (
    <Tela2 tela={setTelainicial} meta={metaZaps}/>
  )}

ReactDOM.render(
  <App />, document.querySelector('.root')
);


