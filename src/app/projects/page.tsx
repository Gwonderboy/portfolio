import { projects } from "@/_data/projectData";
import SecondaryButton from "@/components/button/secondaryBtn";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { HOME_ROUTE } from "@/constants/routes";
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <Box>
      <Navbar />
      <Box
        pos={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        mx="auto"
        overflow={"hidden"}
        p={20}
      >
        <Box
          className="quater-circle-lines"
          position="absolute"
          right="0"
          bottom="0"
          transform="translate(50%, 50%)"
          w={{ base: "250px", md: "400px", xl: "500px" }}
          h={{ base: "250px", md: "400px", xl: "500px" }}
          zIndex={0}
          pointerEvents="none"
        />
        <VStack spacing={4} align="center" mb={8}>
          <Text
            fontSize={{ base: "3xl", md: "5xl", xl: "75px" }}
            fontWeight={"bold"}
          >
            My Portfolio
          </Text>
          <Box
            borderRadius={"full"}
            px={"3rem"}
            py={"2rem"}
            display={"flex"}
            gap={2}
            bg={"background"}
          >
            <Link href={HOME_ROUTE} color={"gray.500"}>
              Home
            </Link>{" "}
            ||{" "}
            <Link href="#" color={"accent1"}>
              Projects
            </Link>
          </Box>
        </VStack>
      </Box>

      <Box
        as="section"
        background={"background"}
        alignItems="center"
        justifyContent="center"
        color="white"
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
        display={"flex"}
        flexDir={{ base: "column" }}
        gap={10}
      >
        <VStack align={"flex-start"}>
          <Text color={"accent1"}>|| Awesome Portfolio</Text>
          <Text fontSize="6xl" fontWeight="bold" color="white">
            My Projects
          </Text>
          <Text fontSize="lg" color="#f1f1f1">
            A showcase of some of the notable projects I&apos;ve worked on,
            featuring web applications, software solutions, and platforms across
            various industries.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w={"full"}>
          {projects.map((item, index) => (
            <VStack key={index} w={"full"}>
              <Box
                position="relative"
                height="500px"
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
                  src={item.image}
                  alt={item.title}
                  maxH="90%"
                  maxW="80%"
                  objectFit="contain"
                  position="absolute"
                  bottom={0}
                  zIndex={2}
                />
              </Box>

              <VStack spacing={2} textAlign="center" px={4}>
                <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontSize="sm" maxW="90%">
                  {item.description}
                </Text>
                <Link href={item.liveLink}>
                  <SecondaryButton
                    title="Live Demo"
                    border={"accent1"}
                    icon={<FaExternalLinkAlt />}
                  />
                </Link>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}
