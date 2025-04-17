"use client";
import React from 'react';
import { Button, ButtonProps, Text } from '@chakra-ui/react';
import '../style.css';
import { useRouter } from 'next/navigation';

interface PrimaryButtonProps extends ButtonProps {
    title: string;
    icon?: React.ReactElement;
    href?: string;
    onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, icon, href="#", onClick, ...props }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
          onClick(); // Use custom onClick if provided
        } else {
          router.push(href); // Default to routing
        }
      };

    return (
        <Button className='primary_Btn' {...props} rightIcon={icon} onClick={handleClick}>
            <Text>{title}</Text>
        </Button>
    );
};

export default PrimaryButton;