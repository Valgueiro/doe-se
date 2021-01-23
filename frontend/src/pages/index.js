import styled from 'styled-components'
import Page from '../components/Containers/Page'
import UserCard from '../components/UserCard'
// import { useEffect } from 'react'
// import Button from 'react-bootstrap/Button'
// import api from '../services/api/base'

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Page>
      <Content>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Content>
    </Page>
  )
}

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

//   useEffect(() => {
//     async function testeApi () {
//       try {
//         const response = await api.get('/');
//         console.log(response);
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     testeApi()
//   },[])
