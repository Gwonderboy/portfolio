"use client";

import PrimaryButton from "@/components/button/primaryBtn";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import SocialIcon from "@/components/SocialIcon";
import { HOME_ROUTE } from "@/constants/routes";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  useToast,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmailLink = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast({
        title: "Please fill out all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:vebubechukwu@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Clear form fields after sending the email
    setFormData({ name: "", email: "", message: "" });
    toast({
      title: "Message sent!",
      description: "Your email has been opened for sending.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
            Contact Me
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
              Contact
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
          w={{ base: "100%", md: "25%" }}
          display={"flex"}
          flexDir={"column"}
          gap={16}
        >
          <Box
            background={"primary"}
            w="full"
            px={{ base: 2, md: 4, lg: 8 }}
            py={{ base: 4, md: 8 }}
            display={"flex"}
            flexDir={"column"}
            gap={4}
          >
            <Box
              background={"background"}
              w="full"
              px={{ base: 2, md: 4, lg: 8 }}
              py={{ base: 4, md: 8 }}
              display={"flex"}
              flexDir={"column"}
              gap={3}
            >
              <Text fontWeight={"semibold"} fontSize={"md"}>
                Phone
              </Text>
              <Text fontSize={"md"} color={"accent1"}>
                +234 7060780114
              </Text>
            </Box>
            <Box
              background={"background"}
              w="full"
              px={{ base: 2, md: 4, lg: 8 }}
              py={{ base: 4, md: 8 }}
              display={"flex"}
              flexDir={"column"}
              gap={3}
            >
              <Text fontWeight={"semibold"} fontSize={"md"}>
                Email
              </Text>
              <Text fontSize={"md"} color={"accent1"}>
                ebubecode.dev@gmail.com
              </Text>
            </Box>
          </Box>
          <Box
            background={"primary"}
            w="full"
            px={{ base: 2, md: 4, lg: 8 }}
            py={{ base: 4, md: 8 }}
            display={"flex"}
            flexDir={"column"}
            gap={10}
          >
            <Text fontWeight={"semibold"} fontSize={"5xl"}>
              Follow Me
            </Text>

            <Flex gap={5}>
              {icons.map((item, index) => (
                <SocialIcon key={index} icon={item.icon} href={item.href} />
              ))}
            </Flex>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "70%" }}
          display={"flex"}
          flexDir={"column"}
          gap={10}
        >
          <VStack align={"flex-start"}>
            <Text color={"accent1"}>|| Get in Touch</Text>
            <Text fontSize="6xl" fontWeight="bold" color="white">
              If you have any porject or need help. Contact me
            </Text>
            <Text color="accent1">
              I&apos;d love to hear from you! Fill out the form below, and
              I&apos;ll get back to you as soon as possible.
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"} gap={6} mt={{ base: 4, md: 8 }}>
            <FormControl id="name">
              <FormLabel color="text">Name</FormLabel>
              <Input
                p={6}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                bg="transparent"
                color="text"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel color="text">Email</FormLabel>
              <Input
                p={6}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                bg="transparent"
                color="text"
              />
            </FormControl>

            <FormControl id="message">
              <FormLabel color="text">Message</FormLabel>
              <Textarea
                p={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                bg="transparent"
                color="text"
              />
            </FormControl>

            <PrimaryButton
              title={"Send Message"}
              onClick={handleEmailLink}
              mt={4}
            />
          </VStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/Gwonderboy",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/victor-ebubechukwu-04b681242",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/VEbubechukwu?t=zorvL54O8C0IOEHJ4b_0ig&s=09",
  },
];
