
import { Box, Button, Text, Collapse, Flex, IconButton, Stack, useBreakpointValue, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import { FaGg, FaLock } from 'react-icons/fa'

const Navbar = ({ auth }: PageProps) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <FaGg size={25} className="mr-1 text-gray-800" />
                    {" "}
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontWeight={600}
                        color={useColorModeValue('gray.800', 'white')}>
                        MIKASA
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        {/* <DesktopNav /> */}
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    {!auth.user ? (
                        <Link href={route('login')}>
                            <Button
                                className='group'
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'black'}
                                bg={'white'}
                                border={"2px solid"}
                                borderColor={'white'}
                                _hover={{
                                    borderColor: 'black',
                                    border: '2px solid',
                                }}>
                                <FaLock />  <Text className="group-hover:block text-white group-hover:text-black">Login</Text>
                            </Button>
                        </Link>
                    ) : (
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            {/* <DesktopNav /> */}
                            <Link href={route('dashboard')}>
                                <Text>
                                    {auth.user.name}
                                </Text>
                            </Link>
                        </Flex>
                    )}
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                {/* <MobileNav /> */}
            </Collapse>
        </Box>
    );

}

export default Navbar