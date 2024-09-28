import { Box, Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { ImgSlider } from "../components/ImgSlider";

export const Home = () => {
  return (
    <Grid templateRows="1fr" templateColumns="repeat(2, 1fr)" p={6} gap={4}>
      <Grid colSpan={1} gap={35}>
        <Box>
          <Heading as="h2" size="2xl" lineHeight={1.5}>
            Ban Học Tập
          </Heading>
          <Heading as="h2" size="2xl" lineHeight={1.5}>
            Đoàn Khoa Học Công Nghệ Phần Mềm
          </Heading>
        </Box>

        <Box width="90%">
          <Text>
            Được thành lập vào 02/11/2015, Ban học tập Đoàn khoa Công nghệ Phần
            mềm là nơi để chia sẻ kiến thức, là điểm đến cho các bạn sinh viên
            có thể tìm kiếm tài liệu cũng như trau dồi thêm kỹ năng cần thiết.
          </Text>
        </Box>

        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="teal"
              variant="solid"
              as={RouterLink}
              to="/about"
            >
              About
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              as={RouterLink}
              to="/post"
            >
              Post
            </Button>
          </Stack>
        </Box>
      </Grid>
      <ImgSlider />
    </Grid>
  );
};
