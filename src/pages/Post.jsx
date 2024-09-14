import { Button } from "@chakra-ui/react";
import { useLocalStorage } from "react-use";

export const Post = () => {
  const [accessToken] = useLocalStorage("accessToken");
  const onSignUpBtnClick = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API}/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ content: "tessdfdfstest" }),
    });

    const data = await response.json();

    console.log("data", data);
  };

  return (
    <Button
      size="md"
      height="48px"
      width="full"
      border="2px"
      borderColor="green.500"
      mt={5}
      onClick={() => {
        onSignUpBtnClick();
      }}
    >
      Submmit!
    </Button>
  );
};
