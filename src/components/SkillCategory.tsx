"use client";

import { Box, Icon, VStack, Text, Flex } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface SkillCategoryProps {
  icon?: any;
  title: string;
  skills: string[];
}

const SkillCategory = ({ icon, title, skills }: SkillCategoryProps) => (
  <Box minW={{ base: "15rem", md: "20rem" }} bg={"primary"} p={{ base: 6, sm: 8, md: 10, lg: 20 }} display={"flex"} flexDir={"column"} gap={{ base: 6, md: 10 }}>
    {icon && <Icon as={icon} boxSize={"3.5rem"} color="white" mb={2} />}

    <Text fontSize="lg" fontWeight="600" mb={2}>
      {title}
    </Text>

    <VStack align="start" spacing={4}>
      {skills.map((skill, index) => (
        <Flex key={index} gap={4} align={"center"}>
          <MdKeyboardDoubleArrowRight />
          <Text fontSize="sm" color="accent1">
            {skill}
          </Text>
        </Flex>
      ))}
    </VStack>
  </Box>
);

export default SkillCategory;
