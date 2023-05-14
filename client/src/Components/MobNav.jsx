import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent="space-between" alignItems="center" backgroundColor='black' width='100vw'>
      <Button p="8px" color="white" bg="black" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px"/>
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton color='white' pt={['10px','10px']} mt={['0px',"50px"]}/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
                <Text>About Me</Text>
                <Text>Work Experience</Text>
                <Text>Education</Text>
                <Text>Testimonials</Text>
                <Text>Contact Me</Text>
            </Flex>
            {/* <Text mt="15px">MY ACCOUNT</Text> */}
            {/* <Flex direction="column">
                {/* <MobLogin name="Sign In" />  */}
                 {/* <MobLogin name="Register" /> */}
            {/* </Flex> */} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
        <Text  fontWeight="bold" color='white' pr='20px'>CryptoRhoittt</Text>
      </Box>
      {/* <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex> */}
    </Flex>
  );
};

export default MobNav;