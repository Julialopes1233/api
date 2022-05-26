import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 export default function PaginaFebre(){
     const[texto, setTexto] = useState('')
     const[caracter, setCaracter] = useState('')
     const[resposta, setResposta] = useState(0)


     async function CalcularClick(){
         const resp = await axios.get(`http://localhost:5000/dia2/freqcaracter/${texto}/${caracter}`)

         setResposta(resp.data.Freq)
         
     }

     return(
         <div>
             <div>
                <Link to='/'>voltar</Link>

                <h1 className="titulo"> Programa Frequencia</h1>
                <div>
                Texto: &nbsp;
                <input type='text' value={texto} onChange={e => setTexto(e.target.value)} />
                </div>
                <div>
                Caracter: &nbsp;
                <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)} />
                </div>

                <button onClick={CalcularClick}> Calcular</button>

                <div>
                    A qtd dessa caracter no texto é: {resposta }

                </div>

             </div>

         </div>
     )
 }