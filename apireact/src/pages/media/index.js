import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PaginaMedia(){
    const[n1, setN1] = useState(0)
    const[n2, setN2] = useState(0)
    const[n3, setN3] = useState(0)
    const[resposta, setResposta] = useState(0);

    async function CalcularClick() {
        const resp = await axios.post('http://localhost:5000/media', 
        {
            n1: n1,
            n2: n2,
            n3: n3
        })
        setResposta(resp.data.media)
    }
    return(
        <div>
        <div className="Passou-page">
            <Link to="/">voltar</Link>
            <h1 className="titulo"> Programa Media</h1>

            <div>
                Nota 1:
                <input type="text" value={n1} onChange={e => setN1(Number(e.target.value))} />
            </div>
            <div>
                Nota 2:
                <input type="text" value={n2} onChange={e => setN2(Number(e.target.value))} />
            </div>
            <div>
                Nota 3:
                <input type="text" value={n3} onChange={e => setN3(Number(e.target.value))} />
            </div>
            <div>
            <button onClick={CalcularClick}> Calcular </button>

            

            </div>
            <div>
                Media: {resposta}
            </div>



        </div>




        </div>
    )
}