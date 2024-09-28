import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import theme from "./theme";

const router = createRouter({ routeTree });
const rootElement = document.getElementById("root");
const extendedTheme = extendTheme(theme);

if (!rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={extendedTheme}>
        <ColorModeScript
          initialColorMode={extendedTheme.config.initialColorMode}
        />
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ChakraProvider>
    </React.StrictMode>
  );
}
