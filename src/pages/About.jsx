import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
export const About = () => {
  return (
    <Box p={4} bg="gray.900" color="white" minH="100vh">
      <VStack spacing={4} align="center" textAlign="center">
        <Heading as="h1" size="xl" mt={6} mb="-15">
          Bạn biết về
        </Heading>
        <Heading as="h1" size="2xl" color="purple.400" mb="40px">
          Ban học tập chưa!
        </Heading>
        <Text fontSize="lg" maxW="700px" color="whiteAlpha.600">
          Được thành lập vào 02/11/2015, Ban học tập Đoàn khoa Công nghệ Phần
          mềm là nơi để chia sẻ kiến thức, là điểm đến cho các bạn sinh viên có
          thể tìm kiếm tài liệu cũng như trau dồi thêm kỹ năng cần thiết.
        </Text>
        <Text fontSize="lg" maxW="700px" color="whiteAlpha.600">
          Ban Học Tập luôn hi vọng sẽ giúp các sinh viên có cùng đam mê có thể
          gặp gỡ, giao lưu, trao đổi, chia sẻ với nhau để trau dồi những kỹ năng
          chuyên môn và có điều kiện phát triển bản thân, chia sẻ kinh nghiệm.
          Hãy cùng đồng hành cùng Ban học tập và hướng đến mục tiêu chung
          Sharing is Learning nhé.
        </Text>

        <HStack spacing={12} mt={12} wrap="wrap" justify="center">
          <Box textAlign="center">
            <Heading as="h2" size="lg" color="purple.400">
              44
            </Heading>
            <Text>Thành viên</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" color="purple.400">
              120+
            </Heading>
            <Text>Buổi training</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" color="purple.400">
              20.000+
            </Heading>
            <Text>Số lượt tham gia training</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" color="purple.400">
              19
            </Heading>
            <Text>Buổi seminar</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" color="purple.400">
              7.000+
            </Heading>
            <Text>Sinh viên tham dự training</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};
