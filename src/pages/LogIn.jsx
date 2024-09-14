import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useLocalStorage } from "react-use";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast("");
  // eslint-disable-next-line no-unused-vars
  const [_, setValue] = useLocalStorage("accessToken", "");

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate({
      to: "/",
    });
  };

  const onLogInBtnClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API}/auth/login`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password, email }),
      }
    );

    const data = await response.json();

    setValue(data.token);

    handleNavigation();

    console.log("data", data);
  };

  return (
    <Box pt={20} w={4.5 / 17} textAlign="center" mx="auto">
      <Heading as="h3" size="lg">
        LogIn
      </Heading>

      <Box textAlign="center" gap={10} mx="auto">
        <FormControl isRequired pb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>

        <FormControl isRequired pb={5}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormControl>
      </Box>

      <Button
        size="md"
        height="48px"
        width="full"
        border="2px"
        borderColor="green.500"
        mt={5}
        onClick={() => {
          toast.promise(onLogInBtnClick(), {
            success: {
              title: "Promise resolved",
              description: "Logged in successfully!",
            },
            error: {
              title: "Promise rejected",
            },
            loading: { title: "Promise pending", description: "Please wait" },
          });
        }}
      >
        LogIn!
      </Button>
    </Box>
  );
}