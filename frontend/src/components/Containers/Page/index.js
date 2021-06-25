import { Container, Content } from './styles'
import Navbar from '../../Navbar'
import Head from 'next/head'

const Page = ({ children, noRegisterButton }) => {
  return (
    <Container>
      <Head>
        <title>Doe-se :)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar noRegisterButton={noRegisterButton}/>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page
