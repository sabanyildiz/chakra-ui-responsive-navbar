// Mobile responsive navbar with hamburger menu and logo.

import { Box, Container, Flex, HStack, VStack, Text, Image, Show, Hide, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../logo192.png';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Input } from "@chakra-ui/react"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();


    return (
        <>
            <Container maxW={'100vw'} bg="blue.500" h="5vh" >

                <Hide below='md'>
                    <Box color={'white'}>
                        <HStack
                            spacing="24px"
                        >
                            <Image
                                boxSize="35px"
                                src={logo} alt="logo" />
                            <Text>
                                <Text p="2" bg="blue.500" color="white" >
                                    Home
                                </Text>
                            </Text>
                            <Text
                                as={'button'}
                                p="2" bg="blue.500" color="white" >
                                About
                            </Text>
                        </HStack>
                    </Box>
                </Hide>
                <Show below='md'>
                    <HStack
                        justify="space-between"

                    >
                        <Image
                            boxSize="35px"
                            src={logo} alt="logo" />

                        <HamburgerIcon
                            as="button"
                            ref={btnRef}
                            onClick={onOpen}

                            w={6} h={6} color="white" />
                    </HStack>

                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        colorScheme='facebook'
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader
                                bg='blue.600'
                            >
                                <Image
                                    boxSize="35px"
                                    src={logo} alt="logo" />
                            </DrawerHeader>

                            <DrawerBody
                                bg={'blue.500'}
                            >
                                <VStack
                                    spacing="14px"
                                >
                                    <Box as="button" p="2" color="white" w={'full'} >
                                        Home
                                    </Box>
                                    <Box as="button" p="2" color="white" w={'full'} 
                                    >
                                        About
                                    </Box>
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter
                            bg={'blue.400'}
                            >
                                <Text>
                                    Footer Text
                                </Text>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                </Show>
            </Container>
        </>
    )

}

export default Navbar;



