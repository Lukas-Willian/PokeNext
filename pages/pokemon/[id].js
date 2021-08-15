import {useRouter} from 'next/router'
import api from '../../src/services/api';




export default function DynamicPage({info , moves}){

    console.log(info)
    console.log(moves)
    

    return(
        <>
            <h1>{info.name}</h1>
            <h2>Habilities</h2>
            <ul>
                {moves.map(abi => (
                    <li key={abi.move.name}>
                        {abi.move.name}
                    </li>
                ))}
            </ul>
        </>
)
        
        
    
};

export async function getServerSideProps(context) {

    const res = await api.get(`/pokemon/${context.params.id}`)

    return{
        props: {
            info : res.data,
            moves : res.data.moves
        }
    }


    
}

