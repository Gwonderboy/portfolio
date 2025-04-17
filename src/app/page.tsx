"use client";

import { allCategories, company, slides } from "@/_data";
import PrimaryButton from "@/components/button/primaryBtn";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ProfileSection from "@/components/ProfileSection";
import SkillCategory from "@/components/SkillCategory";
import WelcomeMessage from "@/components/welcomeText";
import { PROJECTS_ROUTE } from "@/constants/routes";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  MdHub,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const itemPerPage = 2;
  const totalItemPages = Math.ceil(slides.length / itemPerPage);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalItemPages);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalItemPages - 1 : prev - 1));
  };
  const totalPages = Math.ceil(allCategories.length / itemsPerPage);

  const slideWidth = 280 + 32;

  return (
    <Box>
      <Navbar />
      <Flex
        bg="pimary"
        minH="100vh"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 10 }}
        color="white"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <WelcomeMessage />
        <ProfileSection />
      </Flex>
      <Box
        as="section"
        background={"secondary"}
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        color="white"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          background={"background"}
          w={{ base: "100%", md: "80%" }}
          px={{ base: 6, md: 20, lg: 40 }}
          py={{ base: 5, md: 16 }}
          display={"flex"}
          flexDir={"column"}
          gap={10}
        >
          <Text color={"accent1"}>|| Special Skills</Text>
          <Text fontSize="6xl" fontWeight="bold" color="white">
            My Special Skill Field Here.
          </Text>
          <Box overflow="hidden" w="full">
            <Flex
              gap={8}
              transform={`translateX(-${
                currentPage * itemsPerPage * slideWidth
              }px)`}
              transition="transform 0.5s ease-in-out"
            >
              {allCategories.map((category, index) => (
                <SkillCategory
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                />
              ))}
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "20%" }} p={4}>
          <VStack justify="center" mt={6} gap={8}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <Box
                key={idx}
                w={3}
                h={3}
                borderRadius="full"
                bg={idx === currentPage ? "white" : "gray.500"}
                cursor="pointer"
                onClick={() => setCurrentPage(idx)}
                transition="background 0.3s"
              />
            ))}
          </VStack>
        </Box>
      </Box>
      <Box
        as="section"
        background={"primary"}
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        color="white"
        flexDir={{ base: "column" }}
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
        w={"full"}
        gap={10}
      >
        <Flex justifyContent={"space-between"} mb={10} w={"full"}>
          <VStack align={"flex-start"}>
            <Text color={"accent1"}>|| Awesome Portfolio</Text>
            <Text fontSize="6xl" fontWeight="bold" color="white">
              My Projects
            </Text>
          </VStack>
          <Flex gap={4}>
            <Button
              color={"accent1"}
              borderWidth={2}
              px={8}
              py={10}
              borderColor={"secondary"}
              background={"transparent"}
              _hover={{ bg: "secondary" }}
              onClick={prevSlide}
            >
              <MdKeyboardDoubleArrowLeft />
            </Button>
            <Button
              color={"accent1"}
              borderWidth={2}
              px={8}
              py={10}
              borderColor={"secondary"}
              background={"transparent"}
              _hover={{ bg: "secondary" }}
              onClick={nextSlide}
            >
              <MdKeyboardDoubleArrowRight />
            </Button>
          </Flex>
        </Flex>
        <Box overflow="hidden" w="full" mb={14}>
          <Carousel
            data={slides}
            currentPage={current}
            itemsPerPage={itemPerPage}
          />
        </Box>

        <PrimaryButton
          title="Browse Portfolio"
          icon={<FaArrowRight />}
          href={PROJECTS_ROUTE}
          position={"absolute"}
          bottom={4}
          right={10}
        />
      </Box>
      <Box
        as="section"
        background={"secondary"}
        // minH="100vh"
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        color="white"
        flexDir={{ base: "column" }}
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
        w={"full"}
        gap={10}
      >
        <VStack align={"flex-start"}>
          <Text color={"accent1"}>|| Favourite Clients</Text>
          <Text fontSize="6xl" fontWeight="bold" color="white">
            Work With Trusted Comapny.
          </Text>
        </VStack>

        <Flex gap={8} justifyContent={"space-between"}>
          {company.map((item, index) => (
            <VStack gap={4} borderWidth={1} p={8} w={"20rem"} h={"auto"} borderColor={"accent1"} key={index}>
              <Image src={item.image} width={200} height={100} alt={item.title} />
              <Text color={"accent1"} fontSize="xl" fontWeight="bold">
                {item.title}
              </Text>
            </VStack>
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
