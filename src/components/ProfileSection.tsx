"use client";
import React from "react";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";
import { icons } from "@/_data/socialIcons";

const ProfileSection = () => {
  const radius = useBreakpointValue({ base: 245, lg: 300 });
  const offsetX = useBreakpointValue({ base: 200, lg: 150, xl: 240 });
  const offsetY = useBreakpointValue({ base: 220, lg: 260, xl: 260 });
  const imageOffsetRight = useBreakpointValue({ base: "2%", lg: "100px" });
  const imageOffsetTop = useBreakpointValue({ base: "100px", xl: "180px" });
  const transform = "translate(-50%, -50%)";
  return (
    <Box position="relative" mt={{ base: 15, lg: 0 }}>
      {/* Profile Image */}
      <Image
        src="/images/pfi.png"
        alt="Profile"
        borderRadius="lg"
        w={{ base: "100%", md: "28rem", lg: "50rem" }}
        h="auto"
        zIndex={2}
        position="relative"
      />

      <Box
        className="circle-lines"
        position="absolute"
        display={{base: "none", xl: "flex"}}
        right={{ base: "-50%", lg: "100px" }}
        top={{ base: "35%", lg: "175px" }}
        w={{ base: "500px", lg: "500px" }}
        h={{ base: "500px", lg: "500px" }}
        zIndex={0}
        pointerEvents="none"
      />

      <Flex
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
        mt={"2rem"}
      >
        {icons.map(({ icon, href }, index) => {
          return (
              <SocialIcon key={index} icon={icon} href={href} />
          );
        })}
      </Flex>
      
      {icons.map(({ icon, href, angleDeg }, index) => {
         const angleRad = (angleDeg * Math.PI) / 160;
         const x = radius! * Math.cos(angleRad);
         const y = radius! * Math.sin(angleRad);
 
      
        
        return (
          <Box
          key={index}
          display={{ base: "none", md: "block" }}
          position="absolute"
          zIndex={10}
          right={`calc(${imageOffsetRight} + ${offsetX}px + ${x}px)`}
          top={`calc(${imageOffsetTop} + ${offsetY}px - ${y}px)`}
          transform={transform}
          >
            <SocialIcon icon={icon} href={href} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProfileSection;
