import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessText = styled.h1`
  color: ${props => props.theme.colors.green};
  font-size: 20px;
  font-weight: 700;
`;

const BackToHomeText = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  margin-top: 50px;
  text-decoration: underline;
  &:hover{
    cursor: pointer;
  }
`;

export { Container, SuccessText, BackToHomeText }