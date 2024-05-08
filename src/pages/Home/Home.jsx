import { Container } from "../../components/Layout/Layout.styled";
import { GetStared, HomeInner, SpanTitle, SupTitle, Text, Title } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <HomeInner>
        <SupTitle>Good Thing Travel</SupTitle>
        <Title>
          Experience <SpanTitle>The World</SpanTitle> As Your Home
        </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            fuga sit nesciunt maiores quasi vitae aliquam nihil repellat,
            libero, praesentium doloribus aperiam, rem impedit suscipit
            assumenda aliquid aspernatur cupiditate! Illum!
          </Text>
          <GetStared to="/catalog">Get Stared</GetStared>
      </HomeInner>
    </Container>
  );
};

export default Home;
