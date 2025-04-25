import React from "react"
import * as S from './style'
import PokemonCard from "../PokemonCard"
import { Pokemon } from "@/hooks/usePokemon"


type Props = {
    dataPokemons: Pokemon[]
}

const PokemonList: React.FC<Props> = ({ dataPokemons }) => {
    return (
        <S.PokemonList>
            {dataPokemons?.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </S.PokemonList>
    )
}

export default PokemonList