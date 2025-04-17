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
import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
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
        bg="primary"
        alignItems="center"
        justifyContent="center"
        px={{ base: 6, md: 10, lg: 20, xl: 40 }}
        py={{ base: 10, md: 20 }}
        color="white"
        position="relative"
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "3rem", lg: 0 }}
        textAlign={{ base: "center", md: "left" }}
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
          w={{ base: "100%", lg: "80%" }}
          px={{ base: 6, md: 10, lg: 20, xl: 40 }}
          py={{ base: 5, md: 16 }}
          display={"flex"}
          flexDir={"column"}
          gap={10}
        >
          <Text color={"accent1"}>|| Special Skills</Text>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight="bold"
          >
            My Special Skill Field Here.
          </Text>
          <Box overflowX="auto" w="full">
            <Flex
              gap={8}
              minW="max-content"
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
        <Box w={{ base: "100%", lg: "20%" }} display={{ base: "none", lg: "block" }} p={4}>
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
        px={{ base: 6, md: 10, lg: 20, xl: 40 }}
        py={{ base: 5, md: 16 }}
        w={"full"}
        gap={10}
      >
        <Flex justifyContent={"space-between"} mb={10} w={"full"}>
          <VStack align={"flex-start"}>
            <Text color={"accent1"}>|| Awesome Portfolio</Text>
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              fontWeight="bold"
            >
              My Projects
            </Text>
          </VStack>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "stretch", sm: "center" }}
          >
            <Button
              color={"accent1"}
              borderWidth={2}
              px={{base: 4, md: 8}}
              py={{base: 6, md: 10}}
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
              px={{base: 4, md: 8}}
              py={{base: 6, md: 10}}
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
          position={{ base: "static", md: "absolute" }}
          bottom={{ md: 4 }}
          right={{ md: 16 }}
          alignSelf={{ base: "center", md: "auto" }}
          mt={{ base: 4, md: 0 }}
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
        px={{ base: 6, md: 10, lg: 20, xl: 40 }}
        py={{ base: 5, md: 16 }}
        w={"full"}
        gap={10}
      >
        <VStack align={"flex-start"}>
          <Text color={"accent1"}>|| Favourite Clients</Text>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight="bold"
          >
            Work With Trusted Comapny.
          </Text>
        </VStack>

        <SimpleGrid minChildWidth="250px" spacing={8} w="full">
          {company.map((item, index) => (
            <VStack
              gap={4}
              borderWidth={1}
              p={8}
              w={"full"}
              h={"auto"}
              borderColor={"accent1"}
              key={index}
            >
              <Image
                src={item.image}
                width={200}
                height={100}
                alt={item.title}
              />
              <Text color={"accent1"} fontSize="xl" fontWeight="bold">
                {item.title}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}
