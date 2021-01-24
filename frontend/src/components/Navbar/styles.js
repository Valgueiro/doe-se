import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 2px -2px ${props => `${props.theme.colors.black}1A`};
`;

const Content = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  color: ${props => props.theme.colors.red}
`;

export { Container, Content, Title }