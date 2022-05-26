import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 export default function Tabuada(){
     const[numero, setNumero] = useState(0)
     const[resposta, setResposta] = useState([])


     async function CalcularClick(){
         const resp = await axios.get('http://localhost:5000/tabuada?a=' + numero)

         setResposta(resp.data.tabuada)
     }

     return(
         <div>
             <div>
                <Link to='/'>voltar</Link>

                <h1 className="titulo"> Programa Tabuada</h1>

                Numero: &nbsp;
                <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />

                <button onClick={CalcularClick}> Verificar</button>

                <div>
                    Tabuada: {resposta.map(item => <div> {item} </div>)}

                </div>
                

             </div>

         </div>
     )
 }