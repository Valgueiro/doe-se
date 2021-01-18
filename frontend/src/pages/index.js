import { useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import api from '../services/api/base'

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
  useEffect(() => {
    async function testeApi () {
      try {
        const response = await api.get('/');
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }

    testeApi()
  },[])

  return (
    <BoxTest>
      <Title>Testando styled components</Title>
      <Button variant="primary">Testando bootstrap</Button>
    </BoxTest>
  )
}
