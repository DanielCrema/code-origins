import React from "react"
import * as S from './style'
import { Pokemon } from "../PokemonList"


type Props = {
    pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    return (
        <S.PokemonCard>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.name}</span>
        </S.PokemonCard>
      
    )
}

export default PokemonCard