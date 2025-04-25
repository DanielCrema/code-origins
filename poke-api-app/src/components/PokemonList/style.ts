import styled from "styled-components";

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1320px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const PokemonCard = styled.div`
  background-color: ${({ theme }) => theme.color['blue-800']};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 100px;
  }
  span {
    color: ${({ theme }) => theme.color.gray};
    font-size: 18px;
    margin-top: 10px;
  }
`