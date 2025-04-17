// components/Footer.tsx

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
import { GiSelfLove } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";
import Image from "next/image";

const Footer = () => {
  return (
    <Box bg="primary" color="white" py={10} px={{ base: 6, md: 20 }}>
      <VStack spacing={8} align="start">
        {/* Top section with logo & nav links */}
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

          <HStack spacing={10} mt={{ base: 6, md: 0 }}>
            <VStack align="start">
              <Text fontWeight="semibold" mb={2}>
                Navigation
              </Text>
              <Link href={ABOUT_ROUTE} color={"gray.500"} _hover={{ color: "accent1" }}>
                About
              </Link>
              <Link href={PROJECTS_ROUTE} color={"gray.500"} _hover={{ color: "accent1" }}>
                Projects
              </Link>
              <Link href={CONTACT_ROUTE} color={"gray.500"} _hover={{ color: "accent1" }}>
                Contact
              </Link>
            </VStack>

            <VStack align="start">
              <Text fontWeight="semibold" mb={2}>
                Connect
              </Text>
              <Link href="mailto:ebubecode.dev@gmail.com" color={"gray.500"}>Email</Link>
              <Link href="#" color={"gray.500"}>Newsletter</Link>
              <Link href="#" color={"gray.500"}>Blog</Link>
            </VStack>
          </HStack>
        </Flex>

        <Divider borderColor="gray.700" />

        {/* Bottom section with copyright & socials */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          w="full"
        >
          <Text fontSize="sm" color="gray.500" display={"flex"} gap={2} alignItems={"center"}>
            © {new Date().getFullYear()} Made with <GiSelfLove /> by <Text fontWeight={"bold"}>Victor Ebubechukwu</Text>. All rights reserved.
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