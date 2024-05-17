import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to our social media platform! We aim to connect professionals
        from all around the world.
      </Text>
    </Box>
  );
};

export default About;