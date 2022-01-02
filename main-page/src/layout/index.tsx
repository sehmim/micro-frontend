import styled, { ThemeProvider } from 'styled-components'
import { useAppSelector } from '../hooks/rtk'
import { Footer } from './Footer'
import { Header } from './Header'
import { CSSReset } from './styles'

const Wrapper = styled.div`  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  margin: auto;
  min-height: 65vh;
  max-width: 1170px;
  padding-top: 20px;

  color: ${props => props.theme.secondaryColor};
  background: ${props => props.theme.primaryColor};
`

type PropsType = {
  children: React.ReactNode
}

function Layout({ children }: PropsType) {
  const { theme } = useAppSelector((state) => state.UI)

  return (
    <>
      <CSSReset />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Wrapper>
      </ ThemeProvider>

    </>
  )
}

export default Layout
