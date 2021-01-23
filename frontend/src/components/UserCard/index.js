import { 
  Container, 
  Image, 
  Infos, 
  Name, 
  NameText, 
  Description, 
  DescriptionText } from './styles'

const UserCard = () => {
  return (
    <Container>
      <Image></Image>
      <Infos>
        <Name>
          <NameText>Renata Luz</NameText>
        </Name>
        <Description>
          <DescriptionText>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not.
          </DescriptionText>
        </Description>
      </Infos>
    </Container>
  )
}

export default UserCard