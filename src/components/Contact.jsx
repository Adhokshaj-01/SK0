import {
  Box,
  Button,
  Input,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  VStack,
  Image,
  HStack,
  Center,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../utlis/logo.png";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import Footer from "./Footer";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = () => {
    // handle email submit (e.g., send to backend, validate, etc.)
    alert(`Email submitted: ${email}`);
  };

  return (
    <Box
      height={{ md: "fit-content", base: "fit-content", lg: "100dvh" }}
      bg={"#121212"}
      color={"white"}
    >
      <Flex direction={"column"} h={"100%"} width={{ base: "100%", md: "50%" }}>
        <Text
          fontSize={"3xl"}
          p={10}
          letterSpacing={3}
          borderBottom={"1px solid gray"}
          w={"fit-content"}
        >
          CONTACT US
        </Text>

        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
          <VStack
            alignItems={"start"}
            fontSize={{ base: "md", md: "xl" }}
            color={"gray.400"}
            m={10}
            w={"fit-content"}
            pr={7}
          >
            <Text>Terms & Conditions </Text>
            <Text>Policy 1</Text>
            <Text>Policy 2</Text>
            <Text>Policy 3</Text>
            <Text>Policy 4</Text>
          </VStack>
          <VStack
            m={10}
            fontSize={{ base: "md", md: "xl" }}
            alignItems={"start"}
            color={"gray.400"}
          >
            <Text display={"flex"}>
              Address&nbsp;
              <CiLocationOn />
            </Text>
            <Text>10001, Grand Street</Text>
            <Text>Near Royal Garden , Mumbai</Text>
            <Text>Maharashtra , India , 100001</Text>
          </VStack>
        </Box>

        <HStack
          m={8}
          gap={7}
          fontWeight={'semibold'}
        >
          <Button
            display={"flex"}
            zIndex={"1"}
            variant={"link"}
            colorScheme="black"
          fontSize={{lg:'md',md:'md',base:'small'}}

          >
            {" "}
            <a href="phone:+91 1122334455" style={{ display: "flex" }}>
              <CiPhone /> &nbsp;+91 1122334455
            </a>
          </Button>
          <Button
            display={"flex"}
            zIndex={"1"}
            variant={"link"}
            colorScheme="black"
          fontSize={{lg:'md',md:'md',base:'small'}}

          >
            {" "}
            <a
              href="mailto:skelectroeng@rediffmail.com"
              style={{ display: "flex" }}
            >
              <CiMail /> &nbsp;skelectroeng@rediffmail.com
            </a>
          </Button>
        </HStack>
        
      </Flex>
      <Divider/>
     <Footer/>
    </Box>
  );
}