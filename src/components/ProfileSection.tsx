"use client";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";



const ProfileSection = () => {
  const icons = [
    {
      icon: FaGithub,
      angleDeg: 120,
      href: "https://github.com/Gwonderboy",
    },
    {
      icon: FaLinkedin,
      angleDeg: 150,
      href: "https://linkedin.com/in/victor-ebubechukwu-04b681242",
    },
    {
      icon: FaXTwitter,
      angleDeg: 180,
      href: "https://x.com/VEbubechukwu?t=zorvL54O8C0IOEHJ4b_0ig&s=09",
    },
  ];

  return (
    <Box position="relative" mt={{ base: 12, md: 0 }}>
      {/* Profile Image */}
      <Image
        src="/images/pfi.png"
        alt="Profile"
        borderRadius="lg"
        w="50rem"
        zIndex={2}
        position="relative"
      />

      {/* Decorative Circle Lines */}
      <Box
        className="circle-lines"
        position="absolute"
        right="100px"
        top="175px"
        w="500px"
        h="500px"
        zIndex={0}
        pointerEvents="none"
      />

      {icons.map(({ icon, href, angleDeg }, index) => {
        const angleRad = (angleDeg * Math.PI) / 160;
        const radius = 300;

        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        return (
          <Box
            key={index}
            position="absolute"
            right={`calc(100px + 240px + ${x}px)`}
            top={`calc(180px + 260px - ${y}px)`}
            transform="translate(-50%, -50%)"
            zIndex={10}
          >
            <SocialIcon icon={icon} href={href} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProfileSection;
