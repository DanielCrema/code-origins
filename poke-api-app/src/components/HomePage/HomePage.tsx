import * as S from './style'
import Header from '../Header'
import Pagination from '../Pagination'
import PokemonList from '../PokemonList'
import usePokemon from '@/hooks/usePokemon'

/**
 * ( Parênteses / Parenthesis )
 * [ Chaves / Brackets ]
 * { Colchetes / Braces }
 */

const HomePage: React.FC = () => {
  const { dataPokemons, page, setPage } = usePokemon()

  return (
    <S.Home>
      <Header />
      <S.SeparatorLine />
      <S.Content>
        <PokemonList dataPokemons={dataPokemons} />
        <Pagination page={page} setPage={setPage}/>
      </S.Content>
    </S.Home>
  )
}

export default HomePage
