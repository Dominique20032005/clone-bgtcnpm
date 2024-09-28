import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import {
  createRootRoute,
  Outlet,
  Link as RouterLink,
} from "@tanstack/react-router";
import { PiAirplayDuotone } from "react-icons/pi";
import { useLocalStorage } from "react-use";
import { Footer } from "../components/Footer";

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/post", name: "Post" },
];

const Navigator = () => {
  const [value, setAccessToken] = useLocalStorage("accessToken");
  return (
    <>
      <Flex>
        <Box p="4" bg="red.400">
          <PiAirplayDuotone />
        </Box>
        <Spacer />
        <Box p="4">
          {routes.map((route, i) => (
            <Link
              as={RouterLink}
              key={i}
              to={route.path}
              _activeLink={{
                boxShadow: "dark-lg",
                p: 6,
                rounded: "md",
              }}
              px={4}
            >
              {route.name}
            </Link>
          ))}
        </Box>

        <Spacer />
        {value == null && (
          <>
            <Box p="4">
              <Link
                as={RouterLink}
                to="/sign-up"
                _activeLink={{
                  boxShadow: "dark-lg",
                  p: 6,
                  rounded: "md",
                  bg: "white",
                }}
                px={4}
              >
                Sign Up
              </Link>
            </Box>

            <Box p="4">
              <Link
                as={RouterLink}
                to="/log-in"
                _activeLink={{
                  boxShadow: "dark-lg",
                  p: 6,
                  rounded: "md",
                  bg: "white",
                }}
                px={4}
              >
                Log In
              </Link>
            </Box>
          </>
        )}

        {value != null && (
          <Box p="4">
            <Link
              as={RouterLink}
              to="/log-out"
              _activeLink={{
                boxShadow: "dark-lg",
                p: 6,
                rounded: "md",
                bg: "white",
              }}
              px={4}
              onClick={() => setAccessToken(null)}
            >
              Log Out
            </Link>
          </Box>
        )}

        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>

      <Box minH="calc(70vh)">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export const Route = createRootRoute({
  component: Navigator,
});
