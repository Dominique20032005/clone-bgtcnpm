import { Avatar, Box, Flex, Link, Spacer } from "@chakra-ui/react";
import {
  createRootRoute,
  Outlet,
  Link as RouterLink,
} from "@tanstack/react-router";
import { PiAirplayDuotone } from "react-icons/pi";
import { Avatar as MyAvatar } from "../components/Avatar";
import { Footer } from "../components/Footer";
import { useAuthStorage } from "../hooks/useAuthStorage";
const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/post", name: "Post" },
];

const Navigator = () => {
  const { setAccessToken, isLoggedIn, decode } = useAuthStorage();
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
        {!isLoggedIn() && (
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

        {isLoggedIn() && (
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
              onClick={() => setAccessToken(null)}
            >
              Log Out
            </Link>
          </Box>
        )}

        {!isLoggedIn() && <Avatar src="https://bit.ly/broken-link" />}
        {isLoggedIn() && (
          <Box width="55px" height="55px">
            <MyAvatar
              showTooltip={false}
              borderRadius={10}
              shouldHover={false}
              shouldTap={false}
              name={decode().avatar}
            />
          </Box>
        )}
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
