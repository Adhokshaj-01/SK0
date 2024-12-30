import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Center,
  Avatar,
  Image,
  Divider,
} from "@chakra-ui/react";
import logo from "../utlis/logo.png";
import { IoMdMail } from "react-icons/io";
import Cimage from '../utlis/career.svg'
export default function Careers() {
  const sendMail = () => {
    const recipient = "skelectroeng@rediffmail.com"; 
    const subject = "Job Application/Inquire: [Your Name] "; 

    // Create the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    // Open the mailto link in the user's default mail client
    window.location.href = mailtoLink;
  };
  return (
    <Box
      height={{ md: "fit-content", base: "fit-content", lg: "100dvh" }}
      display="flex"
      flexDirection="column"
      p={3}
      borderTop={"1px solid black"}
    >
      {/* Heading for Base and Medium Sizes */}
      <Center display={{ lg: "none", md: "flex", base: "flex" }}>
        <Heading
          fontSize="2xl"
          textDecoration="underline"
          letterSpacing={2}
          p={4}
          color="orange.500"
        >
          CAREERS
        </Heading>
      </Center>

      <Container maxW="container.xl" p={4}>
        <Heading
          textDecoration="underline"
          letterSpacing={2}
          color="orange.500"
          justifyContent={"flex-start"}
          pb={8}
          display={{ lg: "flex", md: "none", base: "none" }}
          fontSize={"4xl"}
        >
          CAREERS
        </Heading>
        {/* Career Description */}
        <Text fontSize="lg" textAlign="justify" mb={8} color="gray.600">
          Join our team and take the next step in your career. We're always
          looking for talented individuals to help us innovate and grow. Explore
          our open positions below and apply today!
        </Text>

        {/* Job Card */}
        <Box
          p={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="0px 0px 2px 1px rgba(255,171,46,1)"
          // bg="black"
          background={'white'}
          zIndex={"109090909"}
          maxW={{ base: "100%", md: "90%", lg: "50%" }}
          // mx={{ base: "auto", md: "auto", lg: 0 }}
          mx={'auto'}
          mt={{base:0,md:25,lg:25}}
        >
          <Heading size="md" mb={2} textAlign={{ base: "center", lg: "left" }} display={'flex'} justifyContent={'space-between'}>
          <Avatar src={logo} size={'sm'} mx={{base:0,md:5,lg:5}}/>
            Kickstart Your Career with S.K. Electro Engineering & Company
          </Heading>
          <Divider border={'1px solid rgb(253, 215, 138)'} top={2} pos={'relative'}  />
          <Image 
  src={Cimage} 
  boxSize={{ base: '150px', md: '250px', lg: '270px' }} 
  mx="auto" 
  my={4} 
  display="block"
  alt="Img_Resume_"
/>
          <Text m={7} fontSize={{ base: "sm" , lg:'md',md:'md'  }} textAlign={{ base: "center", lg: "left" }}>
            Click the email button below to attach your resume and CV. Stay updated on
            new job openings and exciting opportunities by clicking for more details.
          </Text>
          <Button
            bg={'#121212'}
            color={'white'}
            _hover={{bg:'#121212'}}
            size="sm"
            width="full"
            variant={'solid'}
            p={2}
            onClick={sendMail}
            
          >
            Apply Now &nbsp; <IoMdMail />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
