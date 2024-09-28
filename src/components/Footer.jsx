import {
  Box,
  Grid,
  GridItem,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";

export const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const { _, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("whiteAlpha.900", "gray.900");
  return (
    <Grid
      h="150px"
      templateRows="1fr"
      templateColumns="repeat(6, 1fr)"
      bg={bg}
      p={6}
      color="gray.300"
      gap={4}
    >
      <GridItem colSpan={3}>
        <Box>
          {/* Logo */}
          <Box mb={2}>
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              style={{ width: "50px" }}
            />
          </Box>
          <Text fontSize="sm">
            Được thành lập vào 02/11/2015, Ban học tập Đoàn khoa Công nghệ Phần
            mềm là nơi để chia sẻ kiến thức, là điểm đến cho các bạn sinh viên
            có thể tìm kiếm tài liệu cũng như trau dồi thêm kỹ năng cần thiết.
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Truy cập nhanh
        </Text>
        <Box>
          <Box>
            <Link
              as={RouterLink}
              to="/"
              color="gray.400"
              display="block"
              mb={1}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/about"
              color="gray.400"
              display="block"
              mb={1}
            >
              About
            </Link>
            <Link
              as={RouterLink}
              to="/post"
              color="gray.400"
              display="block"
              mb={1}
            >
              Post
            </Link>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Liên hệ
        </Text>
        <Box>
          <Link
            href="https://fb.com/bhtcnpm"
            color="gray.400"
            display="block"
            mb={1}
          >
            fb.com/bhtcnpm
          </Link>
          <Link
            href="mailto:admin@bhtcnpm.com"
            color="gray.400"
            display="block"
          >
            admin@bhtcnpm.com
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Tuỳ chỉnh
        </Text>
        <Switch colorScheme="teal" size="lg" onChange={toggleColorMode} />
      </GridItem>
    </Grid>
  );
};
