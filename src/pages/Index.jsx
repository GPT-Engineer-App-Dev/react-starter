import { Container, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </>
  );
};

export default Index;