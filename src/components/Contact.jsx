import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import Footer from "./Footer";
import { IoLocation, IoSend } from "react-icons/io5";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Message Sent ');
    // 
    formRef.current.reset();
  };
  return (
    <Container
      bg="#090909"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      zIndex={1006}
      pos={"relative"}
    >
      <ToastContainer
      theme="dark"
      />
      <Flex
        direction={{ base: "column", lg: "row" }}
        bg="#040404"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
        gap={4}
      >
        <Box flex={1} p={4}>
          <Text
            fontSize={"3xl"}
            p={10}
            letterSpacing={3}
            borderBottom={"1px solid orange"}
            w={"fit-content"}
          >
            CONTACT US
          </Text>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.400">
            Write us an email or message, and we will get back to you as soon as
            possible.
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack spacing={3} alignItems="flex-start">
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "1px solid rgb(235, 121, 28)" }}
                leftIcon={<MdPhone color="rgb(235, 121, 28)" size="20px" />}
              >
               <a href="phone:+91 9975564874">  +91-9975564874</a> 
              </Button>
              <Button
                size="md"
                height="48px"
                width="fit-content"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "1px solid rgb(235, 121, 28)" }}
                leftIcon={<MdEmail color="rgb(235, 121, 28)" size="20px" />}
              >
                <a href="mailto:skelectroeng@rediffmail.com"> skelectroeng@rediffmail.com</a>
              </Button>
              <Button
                size="md"
                height="48px"
                width="fit-content"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "none", bg: "none" }}
                leftIcon={
                  <IoLocation color="rgb(235, 121, 28)" size={"20px"} />
                }
                mt={2}
              >
                &nbsp;
                <VStack alignItems={"start"}>
                  <Text display={"flex"}></Text>
                  <Text>Plot No.104,</Text>
                  <Text>Zenda Sq. Abhyankar Nagar,</Text>
                  <Text> Nagpur, 440010</Text>
                </VStack>
              </Button>
            </VStack>
          </Box>
        </Box>

        <Box
          flex={1}
          bg="#151515"
          borderRadius="lg"
          p={8}
          color="gray"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <form
            // action="https://formsubmit.co/d9420589fcef5ed8c480bc2af112d388" // Replace with your FormSubmit endpoint
            // method="POST"
            ref={formRef} 
            style={{
              marginTop: "0",
              width: "100%",
              maxWidth: "500px",
            }}
            //
            onSubmit={handleSubmit}
          >
            <VStack spacing={5}>
              <FormControl id="name" isRequired>
                <Input
                  outline={"none"}
                  border={"none"}
                  borderRadius={"none"}
                  borderBottom={"1px solid rgb(89, 89, 89)"}
                  placeholder="Your Name"
                  size="md"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <Input
                  outline={"none"}
                  border={"none"}
                  borderRadius={"none"}
                  borderBottom={"1px solid rgb(89, 89, 89)"}
                  placeholder="Your Email"
                  size="md"
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <Textarea
                  outline={"none"}
                  border={"none"}
                  borderRadius={"none"}
                  borderBottom={"1px solid rgb(89, 89, 89)"}
                  placeholder="Your Message"
                  size="md"
                />
              </FormControl>
              <FormControl id="submit">
                <Button
                  variant="outline"
                  colorScheme="orange"
                  type="submit"
                  _hover={{ background: "transparent" }}
                >
                  Send Message&nbsp;
                  <IoSend />
                </Button>
              </FormControl>
            </VStack>
          </form>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}
