import { Link as Text } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <span>Welcom to Type-Race</span>
    <span>This will be inline</span>
    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
