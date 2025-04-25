import styled from 'styled-components'

export const Home = styled.main`
  background-color: ${({ theme }) => theme.color.black};
  min-height: 100vh;
  height: 100%;
  width: 100%;
`

export const SeparatorLine = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    #02efb3 0%,
    #12c9ef 41.1458%,
    #318bf6 100%
  );
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`
