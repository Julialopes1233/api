import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 export default function PaginaIngresso(){
     const[qtdInteira, setQtdInteira] = useState(0)
     const[qtdMeia, setQtdMeia] = useState(0)
     const[diaSemana, setDiaSemana] = useState('')
     const[nacionalidade, setNacionalidade] = useState('')
     const[total, setTotal] = useState(false)


     async function CalcularClick(){
         const resp = await axios.post('http://localhost:5000/dia2/ingressocinema/', 
         {
            qtdInteira: qtdInteira,
            qtdMeia: qtdMeia,
            diaSemana: diaSemana,
            nacionalidade: nacionalidade
         })
         setTotal(resp.data.total)

     }

     return(
         <div>
             <div>
                <Link to='/'>voltar</Link>

                <h1 className="titulo"> Programa Ingresso Cinema</h1>

                <div>
                Qtd Inteiras: &nbsp;
                <input type='text' value={qtdInteira} onChange={e => setQtdInteira(Number(e.target.value))} />
                </div>

                <div>
                Qtd Meias: &nbsp;
                <input type='text' value={qtdMeia} onChange={e => setQtdMeia(Number(e.target.value))} />
                </div>

                <div>
                dia da semana: &nbsp;
                <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
                </div>

                <div>
                Nacionalidade: &nbsp;
                <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
                </div>

                <button onClick={CalcularClick}> Calcular</button>

                <div>
                   o total é R$ {total}

                </div>

             </div>

         </div>
     )
 }