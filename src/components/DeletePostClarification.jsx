import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast,
} from "@chakra-ui/react";
import React from "react";
import { usePostStorage } from "../hooks/usePostStorage";

export const DeletePostClarification = ({ isOpen, onClose, postId }) => {
  const { deletePost } = usePostStorage();
  const toast = useToast("");
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>Are you sure you want to delete this post?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>This action cannot be undone. Please confirm your choice.</p>
          <Button
            colorScheme="red"
            mt={4}
            onClick={() => {
              onClose();
              toast.promise(deletePost(postId), {
                success: {
                  title: "Promise resolved",
                  description: "Deleted successfully!",
                },
                error: {
                  title: "Promise rejected",
                },
                loading: {
                  title: "Promise pending",
                  description: "Please wait",
                },
              });
            }}
          >
            Confirm Delete
          </Button>
          <Button variant="ghost" mt={4} ml={2} onClick={onClose}>
            Cancel
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
