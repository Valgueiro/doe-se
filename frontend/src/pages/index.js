import styled from "styled-components";
import Page from "../components/Containers/Page";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button'
// import api from '../services/api/base'
import fire from "../config/firebase";

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function Home() {
  const [requirements, setRequirements] = useState([]);
  // Get requirements from db
  useEffect(() => {
    fire
      .firestore()
      .collection("requirements")
      .onSnapshot((snap) => {
        const requirements = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequirements(requirements);
      });
  }, []);

  return (
    <Page>
      <Content>
        {requirements.map((req) => (
          req.name
        ))}
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
  );
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
