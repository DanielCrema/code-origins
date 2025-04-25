import styled from "styled-components";

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