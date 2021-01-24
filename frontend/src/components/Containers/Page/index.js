import { Container, Content } from './styles'
import Navbar from '../../Navbar'

const Page = ({ children, noRegisterButton }) => {
  return (
    <Container>
      <Navbar noRegisterButton={noRegisterButton}/>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page