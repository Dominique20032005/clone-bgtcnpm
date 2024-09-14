import { Box } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box>
      <h3>Welcome Home!</h3>
    </Box>
  );
}
