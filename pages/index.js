import Link from 'next/link';

import api from '../src/services/api';

export default function Home({pokemons}) {
  console.log(pokemons)
  return (
    <div>
      <div>
        <h1>
          Pokenext
        </h1>
        <ul>
          {pokemons.map(info => (
            <div key={info.entry_number}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.entry_number}.png`}/>
              <Link href={`/pokemon/${info.entry_number}`}>{info.pokemon_species.name}</Link>

            </div>
          ))}
        </ul>
      </div>
    </div>
  )
};

export async function getStaticProps() {
  const res = await api.get('/pokedex/2/');


  return{
    props: {
      pokemons : res.data.pokemon_entries
    }
  }
}

