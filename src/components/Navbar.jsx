import { Box, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Social Media Platform</Box>
        <Flex alignItems={"center"}>
          <NavLink to="/" exact>
            <Button variant="link" color="white" mr={4}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/about" exact>
            <Button variant="link" color="white" mr={4}>
              About
            </Button>
          </NavLink>
          <NavLink to="/contact" exact>
            <Button variant="link" color="white" mr={4}>
              Contact
            </Button>
          </NavLink>
          <NavLink to="/register" exact>
            <Button variant="link" color="white" mr={4}>
              Register
            </Button>
          </NavLink>
          <NavLink to="/login" exact>
            <Button variant="link" color="white">
              Login
            </Button>
          </NavLink>
          {loggedInUser && (
            <Button
              variant="link"
              color="white"
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;