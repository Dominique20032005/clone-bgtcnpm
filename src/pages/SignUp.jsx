import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import { FaRandom } from "react-icons/fa";
import { Avatar } from "../components/Avatar";
export function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const toast = useToast("");
  const [randomClick, setRandomClick] = useState(null);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(null);

  const avatarSeeds = useMemo(
    () =>
      Array(5)
        .fill(null)
        .map(() => {
          return faker.person.fullName();
        }),
    [randomClick]
  );

  const onSignUpBtnClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API}/auth/signup`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
          email,
          avatar: avatarSeeds[selectedAvatarIndex],
        }),
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
            placeholder="Select the avatar below!"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatarSeeds[selectedAvatarIndex]}
            disabled
          />

          <Button
            mt={5}
            leftIcon={<FaRandom />}
            colorScheme="teal"
            variant="solid"
            onClick={setRandomClick}
          >
            Random
          </Button>

          <HStack mt={5} spacing={3}>
            {avatarSeeds.map((avatar, index) => {
              return (
                <Avatar
                  key={index}
                  name={avatar}
                  selected={index === selectedAvatarIndex}
                  onClick={() => {
                    setSelectedAvatarIndex(index);
                  }}
                />
              );
            })}
          </HStack>
        </FormControl>
      </Box>

      <Button
        size="md"
        height="48px"
        width="full"
        border="2px"
        borderColor="green.500"
        mt={5}
        mb={6}
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
