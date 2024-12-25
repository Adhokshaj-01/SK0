import React from "react";
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Center,
  Text,
  Fade,
  Image,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import EagleImg from '../Network/1.webp';
import GReImg from '../Network/2.png';
import HGImg from '../Network/3.jpg';
import RPIGmg from '../Network/5.jpg';
import RRImg from '../Network/4.jpeg';

export default function Network() {
  const iconData = [
    { name: "HTML", icon: EagleImg, color: "red.400" },
    { name: "React", icon: RPIGmg, color: "cyan.300" },
    { name: "JavaScript", icon: HGImg, color: "yellow.400" },
    { name: "CSS", icon: GReImg, color: "blue.300" },
    { name: "Firebase", icon: RRImg, color: "orange.400" },
    
  ];

  // Hook for detecting scroll-in view for the title
  const { } = useInView({
    triggerOnce: true, // Trigger once when the element enters the viewport
    threshold: 0.2, // Trigger when 20% of the element is in the viewport
  });

  // Hook for detecting scroll-in view for the grid
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true, // Trigger once when the element enters the viewport
    threshold: 0.2, // Trigger when 20% of the grid is in the viewport
  });

  return (
    <Box
      height={{ base: "fit-content", md: "fit-content", lg: "100dvh" }}
      bg="white"
      position="relative"
    borderTop={"1px solid"}

    >
      <Center>
        <Box
          width={{ base: "100%", md: "70%" }}
          textAlign="center"
          p={4}
          m={10}
          zIndex={"1000002"}
        >
          {/* Heading for small and medium screens */}
          <Center display={{ lg: "none", md: "flex", base: "flex" }}>
            <Heading
              fontSize="2xl"
              textDecoration="underline"
              letterSpacing={2}
              color="orange.500"
            >
              NETWORK
            </Heading>
          </Center>

          {/* Heading for large screens */}
          <Heading
            textDecoration="underline"
            letterSpacing={2}
            color="orange.500"
            justifyContent={"flex-end"}
            p={8}
            display={{ lg: "flex", md: "none", base: "none" }}
            fontSize={"4xl"}
          >
            NETWORK
          </Heading>

          {/* Subtitle */}
          <Text textAlign={'justify'} fontSize={"md"} my={4}>
            {/* Our Trusted Partners */}
            We work with esteemed partners to deliver reliable and innovative electrical solutions. Together, we ensure safety, efficiency, and excellence in every project, serving Nagpur and beyond with precision and professionalism.
          </Text>

          {/* Fade-in Grid */}
          <Fade in={gridInView} delay={1}>
            <Box pr={0} pl={0}>
              <Grid
                templateColumns={{
                  lg: "repeat(3, 1fr)",
                  md: "repeat(2, 1fr)",
                  base: "repeat(2, 1fr)",
                }}
                gap={4}
                mt={7}
                cursor={"pointer"}
                ref={gridRef}
                zIndex={"1004"}
              >
                {iconData.map((item, index) => (
                  <GridItem
                    key={index}
                    w="100%"
                    _hover={{ boxShadow: "md" }}
                    m={4}
                    bg={"transparent"}
                    transition={'ease-in 0.3s'}
                  >
                    <Box
                      boxSize={{ base: "150px", md: "200px" }}
                      m={"auto"}
                      mt={3}
                      justifyContent={"center"}
                      alignContent={"center"}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        borderRadius={"50%"}
                      />
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>
      </Center>
    </Box>
  );
}
