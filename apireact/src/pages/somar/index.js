import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 export default function PaginaSoma(){
     const[a, setA] = useState(0)
     const[b, setB] = useState(0)
     const[resposta, setResposta] = useState(0)


     async function CalcularClick(){
         const resp = await axios.post('http://localhost:5000/somar', 
         {
             a : a,
             b : b
         })

         setResposta(resp.data.soma)
         
     }

     return(
         <div>
             <div>
                <Link to='/'>voltar</Link>

                <h1 className="titulo"> Programa Soma</h1>
                <div>
                Numero 1: &nbsp;
                <input type='text' value={a} onChange={e => setA(Number(e.target.value))} />
                </div>
                <div>
                Numero 2: &nbsp;
                <input type='text' value={b} onChange={e => setB(Number(e.target.value))} />
                </div>

                <button onClick={CalcularClick}> Calcular</button>

                <div>
                    o resultado é: {resposta }

                </div>

             </div>

         </div>
     )
 }