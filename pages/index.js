import Link from 'next/link';

import api from '../src/services/api'

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
            <div key={info.name}>
              <Link href={'/pokemon/' + info.name}>{info.name}</Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
};

export async function getServerSideProps() {
  const res = await api.get('/pokemon')

  return{
    props: {
      pokemons : res.data.results
    }
  }
}

