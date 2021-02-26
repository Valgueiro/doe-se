import styled from "styled-components";
import Page from "../components/Containers/Page";
import DonataryCard from "../components/DonataryCard";
import { useEffect, useState } from "react";
import fire from "../config/firebase";

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function Home() {
  const [requirements, setRequirements] = useState([]);
  // Get requirements from db
  useEffect(() => {
    // clean up controller
    let isSubscribed = true;
    fire
      .firestore()
      .collection("requirements")
      .onSnapshot((snap) => {
        const requirements = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (isSubscribed) setRequirements(requirements);
      });
    // cancel subscription to useEffect
    return () => (isSubscribed = false)
  }, []);

  return (
    <Page>
      <Content>
        {requirements.map((req, index) => (
          <DonataryCard key={index} data={req} />
        ))}
      </Content>
    </Page>
  );
}
