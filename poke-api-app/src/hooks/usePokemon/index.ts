import axios from "axios"
import { useEffect, useState } from "react"

export type Pokemon = {
  id: number
  name: string
  sprites: {
      front_default: string
  }
}

type PokemonApiResponse = {
  results: Array<{
      name: string
      url: string
  }>
}

type UsePokemonResponse = {
  dataPokemons: Pokemon[]
  page: number
  setPage: (page: number) => void
}

const usePokemon = (): UsePokemonResponse => {
  const [dataPokemons, setDataPokemons] = useState<Pokemon[]>([])
  const [page, setPage] = useState(0)

    useEffect(() => {
      axios
          .get<PokemonApiResponse>(
              `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`,
          )
          .then((response) => {
              const promises = response.data.results.map((pokemon) =>
                  axios.get<Pokemon>(pokemon.url).then((res) => res.data),
              )
              Promise.all(promises).then((results) => setDataPokemons(results))
          })
    }, [page])


    return { dataPokemons, page, setPage }
}

export default usePokemon