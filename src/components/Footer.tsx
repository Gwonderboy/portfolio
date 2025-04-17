import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import Image from "next/image";
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";

const Footer = () => {
  const linkStyles = {
    color: "gray.500",
    _hover: { color: "accent1" },
  };

  return (
    <Box bg="primary" color="white" py={10} px={{ base: 6, md: 20 }}>
      <VStack spacing={8} align="start">
        {/* Top Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          w="full"
        >
          <Box>
            <Image
              src="/images/logo-light.png"
              width={200}
              height={60}
              alt="logo"
            />
            <Text fontSize="sm" color="accent1" mt={2}>
              Bringing ideas to life with clean code and creative design.
            </Text>
          </Box>

          <HStack spacing={10} mt={{ base: 6, md: 0 }} align="start">
            <VStack align="start">
              <Text fontWeight="semibold" mb={2}>Navigation</Text>
              <Link href={ABOUT_ROUTE} {...linkStyles}>About</Link>
              <Link href={PROJECTS_ROUTE} {...linkStyles}>Projects</Link>
              <Link href={CONTACT_ROUTE} {...linkStyles}>Contact</Link>
            </VStack>

            <VStack align="start">
              <Text fontWeight="semibold" mb={2}>Connect</Text>
              <Link href="mailto:ebubecode.dev@gmail.com" {...linkStyles}>Email</Link>
              <Link href="#" {...linkStyles}>Newsletter</Link>
              <Link href="#" {...linkStyles}>Blog</Link>
            </VStack>
          </HStack>
        </Flex>

        <Divider borderColor="gray.700" />

        {/* Bottom Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          w="full"
        >
          <Text
            fontSize="sm"
            color="gray.500"
            display="flex"
            flexDir={{ base: "column", sm: "row" }}
            gap={{ base: 1, md: 2 }}
            alignItems="center"
          >
            © {new Date().getFullYear()} Made with <GiSelfLove /> by{" "}
            <Text as="span" fontWeight="bold">
              Victor Ebubechukwu
            </Text>
            . All rights reserved.
          </Text>

          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
            <IconButton
              as="a"
              href="https://github.com/Gwonderboy"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="white"
              _hover={{ color: "accent1" }}
            />
            <IconButton
              as="a"
              href="https://linkedin.com/in/victor-ebubechukwu-04b681242"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              _hover={{ color: "accent1" }}
            />
            <IconButton
              as="a"
              href="https://x.com/VEbubechukwu?t=zorvL54O8C0IOEHJ4b_0ig&s=09"
              aria-label="X"
              icon={<FaXTwitter />}
              variant="ghost"
              color="white"
              _hover={{ color: "accent1" }}
            />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
