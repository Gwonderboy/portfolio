import { Icon, Link } from "@chakra-ui/react";


const SocialIcon = ({ icon, href }: { icon: any; href: string }) => (
    <Link
      href={href}
      isExternal
      border="1px solid white"
      borderRadius="full"
      color={"white"}
      bg={"#0a0a0a"}
      p={5}
      transition="all 0.3s"
      _hover={{ bg: "white", color: "#0a0a0a" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={10}
    >
      <Icon as={icon} boxSize={5} />
    </Link>
  );

export default SocialIcon