"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Text, VStack } from "@chakra-ui/react";
import SecondaryButton from "../button/secondaryBtn";
import { MdOutlineFileDownload } from "react-icons/md";

const WelcomeMessage = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "EbubeCode_Resume.pdf";
    link.click();
  };

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      textAlign="left"
      width="600px"
    >
      <VStack
        align="flex-start"
        spacing={4}
        position="relative"
        zIndex={2}
      >
        <Box bg="white" w="10rem" h="0.5rem" />
        <Text fontSize="36px" fontWeight="bold" color="white">
          Hello! I&apos;m
        </Text>
        <Text fontSize="6xl" fontWeight="bold" color="white">
          Victor Ebubechukwu,
        </Text>
        <Text fontSize="2rem" fontWeight="bold" mb={4} color="white">
          Software Engineer (Frontend)
        </Text>
      </VStack>

      <Box position="relative" zIndex={2} color="accent1">
        <Typewriter
          words={[
            "With deep expertise in software architecture, design patterns, and microservices.",
            "Leveraging Agile and Scrum methodologies to deliver high-quality software solutions.",
            "Committed to quality in code reviews and best practices.",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Box>
      <SecondaryButton
        title="Get Resume"
        border={"accent1"}
        mt={8}
        onClick={handleDownload}
        icon={<MdOutlineFileDownload />}
      />
    </Box>
  );
};

export default WelcomeMessage;
