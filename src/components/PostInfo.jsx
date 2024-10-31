// PostInfo.jsx
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { DeletePostClarification } from "../components/DeletePostClarification";
import { Avatar } from "./Avatar";

export const PostInfo = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxW="md" mx="auto" mb={7}>
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box width="40px" height="40px">
                <Avatar
                  name={data.User.avatar}
                  shouldHover={false}
                  shouldTap={false}
                />
              </Box>

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>

            <Flex alignItems="center">
              {format(data.createdAt, "dd/MM/yyyy")}
            </Flex>

            <Tooltip label="Delete Post" placement="right">
              <IconButton
                variant="ghost"
                colorScheme="red"
                aria-label="Delete post"
                icon={<MdDeleteForever />}
                fontSize="1.5rem"
                color="red.500"
                onClick={onOpen} // Open modal on click
                _hover={{
                  color: "red.600",
                  transition: "color 4.5s ease",
                  transitionDelay: "1.5s",
                }}
              />
            </Tooltip>
          </Flex>
        </CardHeader>

        <CardBody>
          <Text>{data.content}</Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>

      <DeletePostClarification
        isOpen={isOpen}
        onClose={onClose}
        postId={data.id}
      />
    </>
  );
};
