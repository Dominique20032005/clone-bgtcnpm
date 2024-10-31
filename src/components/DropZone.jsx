import {
  AspectRatio,
  Box,
  Container,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePostStorage } from "../hooks/usePostStorage";

export const DropZone = ({ filesRef }) => {
  const { filesToUpload, setFilesToUpload } = usePostStorage();
  return (
    <Container my="12">
      <AspectRatio width="100%">
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md",
          }}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Stack p="8" textAlign="center" spacing="1">
                  <Text fontWeight="medium">Drag and Drop or Click</Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              ref={filesRef}
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const fileNames = files.map((file) => file.name);
                setFilesToUpload(fileNames);
              }}
            />
          </Box>
        </Box>
      </AspectRatio>
      <Box mt="15px">
        <Text>
          File Name:{" "}
          <ul>
            {filesToUpload.map((fileName, index) => {
              return <li key={index}>{fileName}</li>;
            })}
          </ul>
        </Text>
      </Box>
    </Container>
  );
};
