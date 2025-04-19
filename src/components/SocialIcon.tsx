import { Icon, IconButton } from "@chakra-ui/react";

const SocialIcon = ({ icon, href }: { icon: any; href: string }) => (
  <IconButton
    as={"a"}
    href={href}
    aria-label="Icon"
    border="1px solid white"
    borderRadius="full"
    color={"white"}
    bg={"#0a0a0a"}
    px={{ base: 4, md: 8 }}
    py={{ base: 6, md: 10 }}
    transition="all 0.3s"
    _hover={{ bg: "white", color: "#0a0a0a" }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    zIndex={10}
  >
    <Icon as={icon} boxSize={5} />
  </IconButton>
);

export default SocialIcon;
