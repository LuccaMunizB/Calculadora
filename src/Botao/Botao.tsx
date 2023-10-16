import './Botao.css'

function Botao(type: string, onClickFunction: Function){

    const handleClick = (type:string) =>{
        onClickFunction(type);
    }
    
    return(
    <button className='botao' id={'botao'+type} onClick={() => handleClick(type)}>{type}</button>
    )
}

export default Botao;