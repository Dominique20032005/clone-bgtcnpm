import { Grid, GridItem, Box, Text, Link, Switch } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Grid
      h="150px"
      templateRows="1fr"
      templateColumns="repeat(6, 1fr)"
      bg="gray.900"
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
            <Link href="#" color="gray.400" display="block" mb={1}>
              Home
            </Link>
            <Link href="#" color="gray.400" display="block" mb={1}>
              About
            </Link>
            <Link href="#" color="gray.400" display="block" mb={1}>
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
        <Switch colorScheme="teal" size="lg" />
      </GridItem>
    </Grid>
  );
};
