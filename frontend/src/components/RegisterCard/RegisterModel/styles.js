import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 0 0;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin: 0 0 25px 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export  { Container, Title, Content }