import axios from "axios"
import{ useState } from "react"

export default function index() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');
    async function verficarCor() {
       const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
       if (resp.data.primaria === true) {
           setResposta('sim');
       }
       else {
           setResposta('não');
       }
    }

    return (
        <main>
            <h1>Cor Primária</h1>

            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
            </div>
            <div>
                <button onClick={verficarCor}>Verifcar</button>
            </div>
            <div>
                É cor primária? {resposta}
            </div>
        </main> 
    )
}