import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAsync } from "react-use";
import { AuthenticateOverlay } from "../components/AuthenticateOverlay";
import { DropZone } from "../components/DropZone";
import { PostInfo } from "../components/PostInfo";
import { useAuthStorage } from "../hooks/useAuthStorage";
import { usePostStorage } from "../hooks/usePostStorage";

export const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isLoggedIn } = useAuthStorage();
  const { create, posts, fetch } = usePostStorage();
  const filesRef = useRef();
  useAsync(fetch);

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Create your Post
      </Button>

      {!isLoggedIn() && (
        <AuthenticateOverlay isOpen={isOpen} onClose={onClose} />
      )}
      {isLoggedIn() && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Content</FormLabel>
                <Input ref={initialRef} placeholder="Give us what you think!" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>File</FormLabel>
                <DropZone filesRef={filesRef} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={create}>
                create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {posts.map((post, index) => {
        return <PostInfo key={index} data={post} />;
      })}
    </>
  );
};
