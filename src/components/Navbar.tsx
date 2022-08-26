import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Icon,
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { SunIcon } from '../assets/icons';

const navItems = ['About', 'Experience', 'Projects', 'Fun', 'Contact Me'];

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  console.log(navItems);

  return (
    <Box
      width="100%"
      height="100%"
      as="section"
      pb="12px"
      pr="20px"
    >
      <Flex
        pl="62px"
        pt="20px"
      >
        <>
          <Text
            as="button"
            mr="84px"
            fontSize="20px"
          >
            Byron Wang
          </Text>
          {isDesktop ? (
            navItems.map((item, index) => {
              return (
                <Text
                  pl="24px"
                  pr="24px"
                  as="button"
                  key={index}
                >
                  {item}
                </Text>
              );
            })
          ) : (
            <Icon
              cursor="pointer"
              alignSelf="center"
              ml="auto"
              as={BiMenuAltRight}
              boxSize={6}
              mr="10px"
            />
          )}
          <Icon
            ml={{ base: 'none', lg: 'auto' }}
            boxSize={6}
            cursor="pointer"
            alignSelf="center"
            as={SunIcon}
          />
        </>
      </Flex>
    </Box>
  );
};

export default Navbar;
