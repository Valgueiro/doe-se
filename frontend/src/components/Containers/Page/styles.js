import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.pageBackground};
`;

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  overflow-y: auto;
`;

export { Container, Content }