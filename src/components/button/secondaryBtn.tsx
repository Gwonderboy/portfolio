"use client";
import React from 'react';
import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface SecondaryButtonProps extends ButtonProps {
    title?: string;
    icon?: React.ReactElement;
    href?: string;
    onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, icon, href="#", onClick, ...props }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
          onClick(); // Use custom onClick if provided
        } else {
          router.push(href); // Default to routing
        }
      };

    return (
        <Button borderColor={"secondary"} borderWidth={2} px={"3rem"} py={"2rem"} _hover={{bg: "secondary"}} textColor={"white"} background={"transparent"} {...props} rightIcon={icon} onClick={handleClick}>
            <Text>{title}</Text>
        </Button>
    );
};

export default SecondaryButton;