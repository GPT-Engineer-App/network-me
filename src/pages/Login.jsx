import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading as="h1" mb={6}>Login</Heading>
      {error && <Text color="red.500" mb={4}>{error}</Text>}
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;