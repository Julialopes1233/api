import axios from "axios"
import { useState } from "react"



export default function Index( ) {

    const [numeros, setNumeros] = useState([])
    const [numero, setNumero] = useState(0)
    const [resposta, setResposta] = useState('')

    function adicionar() {
        setNumeros([...numeros, numero])
        setNumero('')
    }
    async function verificar() {
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros)

        setResposta(resp.data.maior)
    }
    return(
        
        <main>
            <h1> Maior Numero</h1>

            <div>
                Numero: <input type="text" value={numero} onChange={e => setNumero(Number(e.target.value))} /> <button onClick={adicionar}>Adicionar Numero </button>
            </div>
            <div>
                {numeros.map(item => <div>
                    {item}
                </div>)}
            </div>

            <div>
                 <button onClick={verificar}> Verificar </button> Maior numero é {resposta}
            </div>
        </main>
        
    );
}