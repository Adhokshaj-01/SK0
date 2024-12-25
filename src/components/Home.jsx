import { Box, CloseButton, Heading, HStack, Icon, IconButton, Image, StatDownArrow, Text, VStack } from "@chakra-ui/react";
import logo from "../utlis/logo.png";
import { Typewriter } from "react-simple-typewriter";
import { CiMenuFries } from "react-icons/ci";
import { MouseParallax } from "react-just-parallax";
import { useState } from "react";
import { GiElectricalCrescent } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
export default function Home({ aboutRef, networkRef, careersRef, contactRef,serviceref , galleryRef }) {
  
  const [height , setHeight] = useState('0');
  const [opacity, setOpacity] = useState('0');
  const [padding , setPadding] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Track menu state
  const menubtn = () => {
    if (isOpen) {
      // Close the menu
      setOpacity('0');
      setPadding(0);
      setHeight('0');
    } else {
      setOpacity('1');
      setHeight('fit-content');
      setPadding(2)
    }
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      // Setright("-100%");
      setIsOpen(!isOpen);
      setOpacity('0');
      setPadding(0);
      setHeight('0');
    }
  };

  return (
    <Box h={"100vh"} w={"100%"}  overflow={"hidden"}>

      {/* Navigation */}
      <Box display={'flex'} alignItems="center" m={{lg:12,md:12,base:8}} position="relative" justifyContent={'space-between'} >
        <Image src={logo} p={3} boxSize={"100px"} boxShadow={"inset 1px 1px 2px 1px #f7c088"} borderRadius={"50%"} />
        <HStack display={{base:'none',md:'flex'}} gap={5} textAlign={"center"} textTransform={"capitalize"}  fontSize={"md"} color={"orange.500"} >
          <Text onClick={() => scrollToSection(aboutRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            ABOUT
          </Text>
          <Text onClick={() => scrollToSection(serviceref)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            SERVICES
          </Text>
          <Text onClick={() => scrollToSection(galleryRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
          GALLERY
          </Text>
          <Text onClick={() => scrollToSection(networkRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            NETWORK
          </Text>
          <Text onClick={() => scrollToSection(careersRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            CAREERS
          </Text>
          <Text onClick={() => scrollToSection(contactRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            CONTACT
          </Text>
          {/* <CloseButton onClick={menubtn1} position={"absolute"} right={5} color={"orange.400"} /> */}
        </HStack>
        <IconButton
        icon={<CiMenuFries />}
        variant={"ghost"}
        colorScheme="orange"
        fontSize={"2xl"}
        onClick={menubtn}
        display={{ base: 'flex', md: 'none' }}
      />
        <Box
         width={'100%'}
         
         display={{ base: 'flex', md: 'none' }}
         h={height}
         pos={'absolute'}
         bg={'white'}
         zIndex={'11'}
         top={28}
         right={0}
         justifyContent={'center'}
         overflow={'hidden'}
         transition={'ease-in-out 0.4s'}
         opacity={opacity}
         borderTop={'1px solid orange'}
         borderBottom={'1px solid orange'}
         p={padding}
      >
        <VStack gap={5} textAlign={"center"} textTransform={"capitalize"} fontSize={"md"} color={"orange.500"}
         transition={'ease-in-out 1s'}

        
        >
          <Text onClick={() => scrollToSection(aboutRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            ABOUT
          </Text>
          <Text onClick={() => scrollToSection(serviceref)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            SERVICES
          </Text>
          <Text onClick={() => scrollToSection(galleryRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
          GALLERY
          </Text>
          <Text onClick={() => scrollToSection(networkRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            NETWORK
          </Text>
          <Text onClick={() => scrollToSection(careersRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            CAREERS
          </Text>
          <Text onClick={() => scrollToSection(contactRef)} cursor="pointer" _hover={{ textDecoration: "underline" }}>
            CONTACT
          </Text>
        </VStack>
      </Box>
      </Box>
     
      {/* Hero Section Content */}
      <Box p={{lg:14,md:12,base:8}} pos={"relative"} zIndex={"10"} /* Ensures text appears in front of the circle */>
        <Heading fontSize={{ base: "3xl", md: "3xl" }} textColor={"blackAlpha.800"} textAlign={{base:'center',md:'left'}}>
          Welcome To
        </Heading>
        <Heading textColor={"orange.400"} fontSize={{ base: "2xl", md: "4xl" }} textAlign={{base:'center',md:'left'}}>
          <Typewriter words={["S.K ELECTRO ENGINEERING & COMPANY"]} cursor={true} cursorBlinking={true} cursorColor="gray" />
        </Heading>
        <Text
          maxW={{ base: "100%", md: "50%" }}
          textAlign={'justify'}
          mt={{ base: 5, md: 10 }}
          ml={{ base: "0", md: "5" }}
          fontSize={{ base: "xl", md: "xl" }}
          bg={"transparent"}
          fontWeight={'thin'}
        >
          We are a trusted Government-approved Electrical Contractor,
            specializing in Erection, Commissioning, Testing, LT/HT
            Installation, Internal Electrification, Cabling, and Paneling....<br/>
            <span  onClick={() => scrollToSection(aboutRef)} style={{cursor:'pointer' , color:'black', fontWeight:'bold'}}>&nbsp;more <StatDownArrow/> </span>
            </Text>
      </Box>

      {/* Circle Parallax Effect */}
      <Box
        position={"fixed"}
        h={"300px"}
        w={"300px"}
        // border={"3px solid orange"}
        opacity={0.5}
        left={"65%"}
        bottom={"15%"}
        borderRadius={"50%"}
        // zIndex={"1"} /* Ensures circle is behind the text 
      >
       
        <Icon 
         position={"absolute"}
         h={"250px"}
         w={"250px"}
       
         left={"40%"}
         borderRadius={"50%"}
      
        >      
        <GiElectricalCrescent color="orange"/>
      </Icon>
      </Box>
      
    </Box>
  );
}
