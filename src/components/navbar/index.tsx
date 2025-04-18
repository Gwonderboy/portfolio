"use client";

import Image from "next/image";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import menuItems from "@/_data/menuItems";
import "./style.css";
import { usePathname, useRouter } from "next/navigation";
import SecondaryButton from "../button/secondaryBtn";
import { CONTACT_ROUTE, HOME_ROUTE } from "@/constants/routes";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const NavLink = ({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname(); // Get the current route path
  const isActive = pathname === href;
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{ textDecoration: "none" }}
      href={href}
      className="nav_links"
      fontSize={{base: "1rem", lg: "1.25rem"}}
      color={isActive ? "inherit" : "accent1"}
      fontWeight={isActive ? "bold" : "normal"}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Box className="px-[1rem] md:px-3rem lg:px-[10rem] py-[1.5rem] md:py-[3rem]">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: "1rem", md: "2rem" }}
      >
        <Link href={HOME_ROUTE}>
          <Image
            src="/images/logo-light.png"
            width={200}
            height={60}
            alt="logo"
          />
        </Link>

        <HStack alignItems="center" className="flex" gap={20} justifyContent={"space-between"}>
          <HStack as="nav" gap={{base: 4, lg: 7}} display={{ base: "none", md: "flex" }}>
            {menuItems.map((link) => (
              <NavLink key={link.name} href={link.url}>
                {link.name}
              </NavLink>
            ))}
          <SecondaryButton
            title="Hire Me"
            border={"accent1"}
            onClick={() => router.push(CONTACT_ROUTE)}
            icon={<MdKeyboardDoubleArrowRight />}
          />
          </HStack>
          <IconButton
            size="md"
            icon={isOpen ? <IoMdClose /> : <TiThMenu />}
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={onToggle}
            transition="all 0.3s ease-in-out"
            fontSize={"1.5rem"}
            justifyItems={"center"}
            alignItems={"center"}
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            _hover={{
              transform: isOpen ? "rotate(180deg) scale(1.1)" : "rotate(0deg) scale(1.1)"
            }}
          />
        </HStack>
      </Flex>

      {isOpen && (
        <Box
          py={4}
          display={{ md: "none" }}
          textAlign={"center"}
          bg="secondary"
        >
          <Stack as="nav" spacing={4}>
            {menuItems.map((link) => (
              <NavLink key={link.name} href={link.url}>
                {link.name}
              </NavLink>
            ))}
            <SecondaryButton
              title="Hire Me"
              border={"accent1"}
              onClick={() => router.push(CONTACT_ROUTE)}
              icon={<MdKeyboardDoubleArrowRight />}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
