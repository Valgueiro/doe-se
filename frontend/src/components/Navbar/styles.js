import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 2px -2px ${props => `${props.theme.colors.black}1A`}; /* transparency -> 10% — 1A */
`;

const Content = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  color: ${props => props.theme.colors.red};
  &:hover {
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterButton = styled(Button)`
  width: 150px;
`;

const LoginButton = styled(Button)`
  width: 150px;
  margin-right: 20px;
`;

export { Container, Content, Title, ButtonsWrapper, RegisterButton, LoginButton }