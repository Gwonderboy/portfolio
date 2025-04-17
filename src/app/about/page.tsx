"use client";

import {
  Box,
  Text,
  VStack,
  Divider,
  SimpleGrid,
  Link,
  Icon,
  Button,
  HStack,
  Grid,
  GridItem,
  useColorModeValue,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMoneyCheckAlt, FaTools } from "react-icons/fa";
import { FaCloud, FaDatabase, FaXTwitter } from "react-icons/fa6";
import Navbar from "@/components/navbar";
import { GrTechnology } from "react-icons/gr";
import { MdHub, MdOutlineFileDownload } from "react-icons/md";
import SkillCategory from "@/components/SkillCategory";
import { HOME_ROUTE } from "@/constants/routes";
import Image from "next/image";
import SecondaryButton from "@/components/button/secondaryBtn";
import { useState } from "react";
import { educationData, experienceData } from "@/_data/backgroundData";
import React from "react";
import Footer from "@/components/Footer";

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactElement;
  label: string;
}) => (
  <Link
    href={href}
    isExternal
    display="flex"
    alignItems="center"
    gap={2}
    color="text"
    fontWeight="semibold"
    _hover={{ color: "primary" }}
  >
    <Icon boxSize={5} color="primary">
      {icon}
    </Icon>
    <Text>{label}</Text>
  </Link>
);

type EducationItem = {
  year: string;
  title: string;
  school: string;
  description: string;
};

type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  description: string[];
};

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education"
  );

  const isEducationItem = (
    item: EducationItem | ExperienceItem
  ): item is EducationItem => {
    return (item as EducationItem).title !== undefined;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "EbubeCode_Resume.pdf";
    link.click();
  };

  const lineColor = useColorModeValue("gray.300", "gray.600");
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
            About Me
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
              About
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box
        as="section"
        background={"background"}
        display={"flex"}
        alignItems="center"
        justifyContent="space-between"
        color="white"
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          bg={"primary"}
          w={{ base: "100%", md: "40%" }}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          p={{ base: 2, md: 4, lg: 6 }}
          gap={16}
        >
          <div className="w-full max-w-md mx-auto border-2 border-white overflow-hidden rounded-md">
            <Image
              src="/images/profile.jpg"
              alt="Profile pic"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover object-top"
            />
          </div>
          <SecondaryButton
            title="Get Resume"
            border={"accent1"}
            mt={8}
            w={{ base: "full", lg: "50%" }}
            onClick={handleDownload}
            icon={<MdOutlineFileDownload />}
          />
        </Box>
        <VStack
          align="start"
          spacing={4}
          mb={8}
          w={{ base: "100%", md: "55%" }}
        >
          <Text fontSize="6xl" fontWeight="bold" color="white">
            I&apos;m Victor
          </Text>
          <Text fontSize="2rem" fontWeight="bold" mb={4} color="gray.500">
            Software Engineer (Frontend)
          </Text>
          <Text fontSize="lg" color={"gray.500"}>
            Experienced Software Engineer with expertise in software
            architecture, design patterns, and microservices. I am committed to
            building high-quality software solutions that ensure efficiency,
            scalability, and excellent user experiences.
          </Text>
        </VStack>
      </Box>
      <Box
        as="section"
        background={"primary"}
        alignItems="center"
        justifyContent="center"
        color="white"
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
      >
        <HStack spacing={6} mb={16} w={"full"}>
          <Box
            w={"full"}
            color={"white"}
            borderColor={"secondary"}
            borderWidth={2}
            px={"3rem"}
            py={"2rem"}
            cursor={"pointer"}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={"semibold"}
            _hover={{ bg: "secondary" }}
            bg={activeTab === "education" ? "secondary" : "transparent"}
            onClick={() => setActiveTab("education")}
          >
            Education
          </Box>
          <Box
            w={"full"}
            color={"white"}
            borderColor={"secondary"}
            borderWidth={2}
            px={"3rem"}
            py={"2rem"}
            cursor={"pointer"}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={"semibold"}
            _hover={{ bg: "secondary" }}
            bg={activeTab === "experience" ? "secondary" : "transparent"}
            onClick={() => setActiveTab("experience")}
          >
            Work Experience
          </Box>
        </HStack>

        <Grid
          templateColumns={{ base: "1fr", md: "200px 1fr" }}
          gap={6}
          position="relative"
        >
          <GridItem
            colSpan={2}
            position="absolute"
            top={0}
            bottom={0}
            left={{ base: "0", md: "200px" }}
            zIndex={0}
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 6,
              width: "2px",
              bg: "background",
              transform: "translateX(-1px)", // to center perfectly
            }}
          />

          {(activeTab === "education" ? educationData : experienceData).map(
            (item, index) => (
              <React.Fragment key={index}>
                {/* Year */}
                <GridItem zIndex={1}>
                  <Text color="gray.400" fontSize="sm" textAlign="right">
                    {item.year}
                  </Text>
                </GridItem>

                {/* Content */}
                <GridItem position="relative" pl={6} zIndex={1}>
                  {/* Dot */}
                  <Box
                    position="absolute"
                    left={0}
                    top="6px"
                    transform="translateX(-50%)"
                    h={7}
                    w={1}
                    bg={lineColor}
                    // borderRadius="full"
                  />

                  {/* Title */}
                  <Text fontSize="xl" fontWeight="bold">
                    {isEducationItem(item) ? item.title : item.role}
                  </Text>

                  {/* School / Company */}
                  <Text fontWeight="medium" mt={1}>
                    {isEducationItem(item) ? item.school : item.company}
                  </Text>

                  {/* Description */}
                  {Array.isArray(item.description) ? (
                    <UnorderedList
                      color="gray.400"
                      fontSize="sm"
                      mt={2}
                      pl={4}
                      spacing={2}
                    >
                      {item.description.map((point, i) => (
                        <ListItem key={i}>{point}</ListItem>
                      ))}
                    </UnorderedList>
                  ) : (
                    <Text color="gray.400" fontSize="sm" mt={2}>
                      {item.description}
                    </Text>
                  )}
                </GridItem>
              </React.Fragment>
            )
          )}
        </Grid>
      </Box>

      {/* Education and Work Experience Section */}
      <Box
        as="section"
        background={"secondary"}
        alignItems="center"
        justifyContent="center"
        color="white"
        display={"flex"}
        flexDir={"column"}
        gap={10}
        px={{ base: 6, md: 20, lg: 40 }}
        py={{ base: 5, md: 16 }}
      >
        <VStack align={"flex-start"}>
          <Text color={"accent1"}>|| Special Skills</Text>
          <Text fontSize="6xl" fontWeight="bold" color="white">
            Technical Expertise
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} color={"#f1f1f1"}>
          <SkillCategory
            icon={GrTechnology}
            title="Technologies"
            skills={["TypeScript", "JavaScript", "Python"]}
          />

          <SkillCategory
            icon={MdHub}
            title="Frameworks"
            skills={["React", "NodeJS", "NextJS", "Web3", "Redux"]}
          />

          <SkillCategory
            icon={FaTools}
            title="APIs & Tools"
            skills={["Postman", "Swagger", "Github", "Gitlab", "Docker"]}
          />

          <SkillCategory
            icon={FaDatabase}
            title="Databases"
            skills={["MySQL", "PostgreSQL", "MongoDB"]}
          />

          <SkillCategory
            icon={FaCloud}
            title="Cloud"
            skills={["AWS", "Azure", "Google Cloud"]}
          />

          <SkillCategory
            icon={FaMoneyCheckAlt}
            title="Payment Integration"
            skills={["Paystack"]}
          />
        </SimpleGrid>

        {/* Methodologies Section */}
        <Box my={8}>
          <Text fontSize={"1.5rem"} fontWeight={"bold"} mb={4}>
            Methodologies
          </Text>
          <Text color="accent1">
            I follow Agile and Scrum methodologies to ensure efficient project
            execution and clear communication across cross-functional teams. My
            commitment to best practices and thorough code reviews helps me
            consistently deliver quality software solutions.
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
