import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Welcome to Our Social Media Platform
      </Heading>
      <Text fontSize="lg" mb={4}>
        Connect with professionals from all around the world.
      </Text>
      <Button colorScheme="teal" size="lg">
        Get Started <FaPlus />
      </Button>
    </Box>
  );
};

export default Index;