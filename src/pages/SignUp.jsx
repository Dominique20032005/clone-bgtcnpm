import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const toast = useToast("");

  const onSignUpBtnClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API}/auth/signup`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userName, password, email, avatar }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      throw new Error("account already exits!");
    }

    console.log("data", data);
  };

  return (
    <Box pt={20} w={4.5 / 17} textAlign="center" mx="auto">
      <Heading as="h3" size="lg">
        SignUp
      </Heading>

      <Box textAlign="center" gap={10} mx="auto">
        <FormControl isRequired pb={5}>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="User name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </FormControl>

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

        <FormControl isRequired>
          <FormLabel>Avatar</FormLabel>
          <Input
            placeholder="Avatar"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
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
          toast.promise(onSignUpBtnClick(), {
            success: { title: "Promise resolved", description: "Looks great" },
            error: {
              title: "Promise rejected",
              description: error,
            },
            loading: { title: "Promise pending", description: "Please wait" },
          });
        }}
      >
        Submmit!
      </Button>
    </Box>
  );
}
