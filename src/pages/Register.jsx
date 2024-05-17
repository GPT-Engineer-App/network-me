import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !username || !password) {
      setError("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setError("User already exists.");
      return;
    }

    users.push({ email, username, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading as="h1" mb={6}>Register</Heading>
      {error && <Text color="red.500" mb={4}>{error}</Text>}
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleRegister}>Register</Button>
    </Box>
  );
};

export default Register;