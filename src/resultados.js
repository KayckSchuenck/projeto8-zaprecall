export function NaoLembrei(set,qtd,add,icon,mudar){
    const newIcon="./assets/erro.svg"
    set(qtd+1)
    add([...icon,newIcon])
    mudar("erro")
}

export function QuaseNaoLembrei(set,qtd,add,icon,mudar){
    const newIcon='./assets/quase.svg'
    set(qtd+1)
    add([...icon,newIcon])
    mudar("quase")
}

export function Lembrei(set,qtd,add,icon,mudar){
    const newIcon="./assets/zap.svg"
    set(qtd+1)
    add([...icon,newIcon])
    mudar("zap")
}