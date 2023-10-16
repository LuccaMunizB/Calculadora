import { useState } from 'react';
import Botao from '../Botao/Botao';
import './Tela.css';

function Tela(){
    
    const [conteudo, setConteudo] = useState('0');
    const [resultado, setResultado] = useState('');
    var aux:string = "";
    var count:number = 0;
    
    const handleButtonClick = (value:string) => {
        console.log(count);
        let ultimo:string = conteudo.charAt(conteudo.length-1);
        let primeiro:string = conteudo.charAt(0);
        conteudo.toString()
        if(resultado === "1" && (value === "1" || value === "2" || value === "3" || value === "4" || value === "5"
        || value === "6" || value === "7" || value === "8" || value === "9" || value === "0")){
            setResultado("")
            setConteudo(value);
        } else{
            setResultado("")
            if(conteudo == '0' && value!='C' && value!= "" && value!=',' && value!='√' && value!='x²'){
                setConteudo(value);
            }else if(value == 'C'){
                setConteudo('0');
            }
            else if(value === ""){
                if(conteudo.length<=1){
                    setConteudo('0');
                } else{
                    setConteudo(conteudo.substring(0, conteudo.length-1))
                }
                
            }
            else if(ultimo==="x" || ultimo ==="÷" || ultimo ==="+" || ultimo =="-"){
                if(value === "x" || value === "÷" || value === "+" || value === "-"){
                    setConteudo(conteudo);
                } else{
                    setConteudo(conteudo+value);
                }
            }
            else if(value === "x²"){
                if(conteudo == '0'){
                    setConteudo('0²');
                }else{
                setConteudo(conteudo+"²")
                }
            }
            else if(value == "√"){
                if(conteudo == '0'){
                setConteudo('√(');
                }else{
                    setConteudo(conteudo + '√(');
                }
            }
            else if(value === "="){
                aux = conteudo.replaceAll("x", "*").replaceAll("÷", "/").replaceAll(",", ".").replaceAll(/√\((\d+)\)/g, 'Math.sqrt($1)')
                .replaceAll(/(\d+)²/g, 'Math.pow($1, 2)').replaceAll(/√(\d+)/g, 'Math.sqrt($1)').
                replaceAll(/√\((\d+)/g, 'Math.sqrt($1)')
                aux = aux.replaceAll(/(\d+)%/g, function(match, numero) {
                    return '(' + match + '+(' + numero + '*10/100))';
                });
                aux = eval(aux).toString()
                setConteudo(aux.replaceAll(".", ","))
                setResultado("1")
            }else if(value =='+/-'){
                let aux:string = '(' + conteudo + ')';
                let aux1: number = Number(conteudo);
                aux1 = aux1 * -1;
                setConteudo(aux1.toString());
            } 
            else{
                setConteudo(conteudo+value);
            }
            
        }
    }


    return(
        <div className="tela">
            
            <div className='conteudo'>
                <p className='resultado'></p>
                <p className='cont'>{conteudo}</p>
            </div>
            <div className='linhas'>
                <div className="linha6">
                    {Botao('C', handleButtonClick)}
                    {Botao('(', handleButtonClick)}
                    {Botao(')', handleButtonClick)}
                    {Botao('', handleButtonClick)}
                </div>

                <div className="linha5">
                    {Botao('√', handleButtonClick)}
                    {Botao('x²', handleButtonClick)}
                    {Botao('%', handleButtonClick)}
                    {Botao('÷', handleButtonClick)}
                </div>

                <div className="linha4">
                    {Botao('7', handleButtonClick)}
                    {Botao('8', handleButtonClick)}
                    {Botao('9', handleButtonClick)}
                    {Botao('x', handleButtonClick)}
                </div>

                <div className="linha3">
                    {Botao('4', handleButtonClick)}
                    {Botao('5', handleButtonClick)}
                    {Botao('6', handleButtonClick)}
                    {Botao('-', handleButtonClick)}
                </div>

                <div className="linha2">
                    {Botao('1', handleButtonClick)}
                    {Botao('2', handleButtonClick)}
                    {Botao('3', handleButtonClick)}
                    {Botao('+', handleButtonClick)}
                </div>

                <div className="linha1">
                    {Botao('+/-', handleButtonClick)}
                    {Botao('0', handleButtonClick)}
                    {Botao(',', handleButtonClick)}
                    {Botao('=', handleButtonClick)}
                </div>
            </div>
        </div>
    )

    
}

export default Tela;

//6(-8) fazer multiplicacao