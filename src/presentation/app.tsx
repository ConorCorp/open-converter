import { Container, Typography, Grid, Box } from "@mui/material";
import HomePageTitle from "/src/presentation/homePage/homePageTitle";
import Converter from "/src/presentation/homePage/converter";
import Benefits from "/src/presentation/homePage/benefits";

export default function App() {
  return (
    <Container>
      <HomePageTitle />
      <Converter />
      <Benefits />
    </Container>
  );
}
