import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const rotateArr = (arr, index) => {
  const firstHalf = arr.slice(0, index);
  const secondHalf = arr.slice(index);
  return [...secondHalf, ...firstHalf];
};

const WUKONG_IMGS = Array(4)
  .fill(undefined)
  .map((_, index) => `monkey${index + 1}.jpg`);

export const ImgSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const handleLeftClick = () => {
    setCurrentImg((prev) => {
      if (prev != 0) {
        return prev - 1;
      }
      return prev - 1 + WUKONG_IMGS.length;
    });
  };

  const handleRightClick = () => {
    setCurrentImg((prev) => {
      if (prev === WUKONG_IMGS.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <Box position="relative" marginLeft="50px" overflow="hidden">
      {rotateArr(WUKONG_IMGS, currentImg).map((img, index) => {
        const zIndexReverse = WUKONG_IMGS.length - index;
        const isFirstImage = index === 0;
        const isLastThree = index > WUKONG_IMGS.length - 4; // Check if it's one of the last 3 images

        return (
          <Image
            key={index}
            src={`img/wukong/${img}`}
            position="absolute"
            boxShadow="lg"
            borderRadius="15px"
            transform={`rotate(${index * 8}deg)`}
            top={`${index * 10}px`}
            left={`${index * 40}px`}
            objectFit="cover"
            width="70%"
            height="265px"
            filter={isFirstImage ? "none" : "blur(2px)"}
            _hover={{
              transform: isFirstImage
                ? `rotate(0deg)`
                : `rotate(${index * 8}deg) scale(1.1)`,
              filter: isLastThree ? "none" : undefined, // Remove blur on hover for the last 3 images
            }}
            zIndex={zIndexReverse}
            transition="all 0.2s ease"
          />
        );
      })}
      <Box position="absolute" top="330px" width="100%" left="200px">
        <Flex id="icon" gap="5px">
          <IconButton
            onClick={handleLeftClick}
            isRound={true}
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleLeft size="25px" />}
          />
          <IconButton
            onClick={handleRightClick}
            isRound={true}
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<FaAngleRight size="25px" />}
          />
        </Flex>
      </Box>
    </Box>
  );
};
