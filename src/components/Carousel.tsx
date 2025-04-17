import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Data {
  title: string;
  description: string;
  image: string;
}

interface CarouselProps {
  data: Data[];
  currentPage: number;
  itemsPerPage: number;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  currentPage,
  itemsPerPage,
}) => {
  const start = currentPage * itemsPerPage;
  const visibleSlides = data.slice(start, start + itemsPerPage);

  return (
    <HStack
      spacing={8}
      w="full"
      justify="center"
      transition="all 0.4s ease-in-out"
      flexWrap="wrap"
    >
      {visibleSlides.map((slide, index) => (
        <VStack key={index} w={{ base: "100%", sm: "80%", md: "45%" }}>
          <Box
            position="relative"
            height="350px"
            width="100%"
            backgroundImage={`url("/images/darkbg.jpg")`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              maxH="80%"
              maxW="80%"
              objectFit="contain"
              position="absolute"
              bottom={0}
              zIndex={2}
            />
          </Box>

          <VStack spacing={2} textAlign="center" px={4}>
            <Text fontSize="xl" fontWeight="bold">
              {slide.title}
            </Text>
            <Text fontSize="sm" maxW="90%">
              {slide.description}
            </Text>
          </VStack>
        </VStack>
      ))}
    </HStack>
  );
};

export default Carousel;
