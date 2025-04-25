import styled from 'styled-components'

export const Header = styled.header`
  height: 172px;
  background-color: ${({ theme }) => theme.color['blue-800']};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoHeader = styled.img.attrs({
  alt: 'Logo Pokemon',
  src: '/assets/logo.svg',
})`
  width: 220px;
  height: 115px;
`