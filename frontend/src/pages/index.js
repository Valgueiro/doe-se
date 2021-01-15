import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const BoxTest = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <BoxTest>
      <Title>Testando styled components</Title>
      <Button variant="primary">Testando bootstrap</Button>
    </BoxTest>
  )
}
