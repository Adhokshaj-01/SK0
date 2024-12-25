import React from "react";
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Center,
  Text,
  Fade,
} from "@chakra-ui/react";
import {
  FaBolt,
  FaRoad,
  FaLightbulb,
  FaBatteryFull,
  FaPlug,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
export default function Services() {
  // Service data array with dummy services and icons
  const { } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  // 
  const serviceData = [
    {
      name: "Supply, erection, testing & commissioning work of Distribution Lines ranging from 11Kv to 33Kv, substations works & U/G Cable laying works",
      icon: <FaBolt size="54px" />, // Represents electrical power and distribution systems
      color: "blue.500",
    },
    {
      name: "Supply, erection, and commissioning of HT and LT Cable at various Government and semi-government departments",
      icon: <FaPlug size="54px" />, // Represents cabling and electrical connections
      color: "purple.500",
    },
    {
      name: "Supply, erection and commissioning of DG Set, cable tray and other electrical requirements of plant (both External and Internal)",
      icon: <FaBatteryFull size="54px" />, // Represents power systems like DG sets
      color: "cyan.500",
    },
    {
      name: "Shifting of existing HT/LT Line & Distribution Transformer due to road widening of National Highway",
      icon: <FaRoad size="54px" />, // Represents road and infrastructure-related works
      color: "green.400",
    },
    {
      name: "Supply, erection, commissioning of street light",
      icon: <FaLightbulb size="54px" />, // Represents lighting and streetlights
      color: "orange.500",
    },
   
   
  ];

  // Scroll-in view detection for animations
  const { ref: titleRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      height={{ md: "fit-content", base: "fit-content", lg: "100dvh" }}
      bg="white"
      position="relative"
      borderTop="2px solid #d2d1d2"
      borderBottom={"2px solid #d2d3d3"}
    >
      <Center>
        <Box width={{ base: "100%", md: "80%" }} textAlign="center" p={10}>
            <Heading
              fontSize="2xl"
              textDecoration="underline"
              letterSpacing={2}
              color="orange.500"
              ref={titleRef}
              display={{ lg: "none", md: "flex", base: "flex" }}
              justifyContent={"center"}
            >
              SERVICES
            </Heading>


          
            <Text textAlign={"justify"} fontSize={"md"} my={4}>
              <Heading
                textDecoration="underline"
                letterSpacing={2}
                color="orange.500"
                justifyContent={"flex-start"}
                pb={8}
                display={{ lg: "flex", md: "none", base: "none" }}
                fontSize={"4xl"}
              >
                SERVICES
              </Heading>
              With over 28 years of expertise, we excel in Erection,
              Commissioning, Testing, LT/HT Installation, Internal
              Electrification, Cabling, and Paneling. Our capabilities extend to
              the shifting of electrical utilities for National Highways and
              MSRDC Roads, ensuring seamless integration and compliance. We also
              provide comprehensive services in Engineering, Substation Design,
              and Project Monitoring, catering to diverse industrial projects,
              including 33KV Substations. Our commitment to precision and
              efficiency makes us a trusted partner for all your electrical
              infrastructure needs.
            </Text>
       

          <Fade in={gridInView} delay={1}>
            <Box pr={2} pl={2}>
              <Grid
                templateColumns={{
                  lg: "repeat(3, 1fr)",
                  md: "repeat(2, 1fr)",
                  base: "repeat(2, 1fr)",
                }}
                gap={8}
                mt={{lg:10,base:7}}
                cursor={"pointer"}
                ref={gridRef}
                 alignItems="center"
                justifyItems="center"

              >
                {serviceData.map((service, index) => (
                  <GridItem
                    w="fit-content"
                    h="fit-content"
                    borderRadius="md"
                    bg={`${service.color.split(".")[0]}.50`}

                    _hover={{
                      // color: service.color,
                      boxShadow: "lg",
                      transform: "scale(1.05)",
                      bg: '#232323',
                      color:'white'
                    }}
                    boxShadow={"md"}
                    p={4}
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    transition="ease-in 0.2s"
                  >
                    <Box fontSize={"3xl"} color={service.color}>
                      {service.icon}
                    </Box>
                    <Text
                      mt={2}
                      // fontWeight="bold"
                      fontSize={{lg:'small',md:'small',base:'xx-small'}}
                      // color="gray.700"
                      maxHeight={{ base: "150px", md: "none" }} // Limit height on mobile/tablet
  overflow={{ base: "auto", md: "visible" }} 
  textAlign={'justify'}
                    >
                      {service.name}
                    </Text>
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
