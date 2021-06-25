import styled from "styled-components";
import Page from "../components/Containers/Page";
import DonataryCard from "../components/DonataryCard";
import { useEffect, useState } from "react";
import DonorService from '../services/api/donor'

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function Home() {
  const [requirements, setRequirements] = useState([]);
  // Get requirements from db
  useEffect(() => {
    async function fetchData(){
      const reqs = await DonorService.getDonors();
      setRequirements(reqs.data);
    }
    fetchData();
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
