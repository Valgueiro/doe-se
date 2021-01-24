import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: grey; */
`;

const LoadingSpinner = styled(Spinner)`
  width: 60px;
  height: 60px;
`;

const LoadingText = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  margin-top: 100px;
`;

export { Container, LoadingSpinner, LoadingText }