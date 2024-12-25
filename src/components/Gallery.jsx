import React from "react";
import GalleryPage from "./hooks/carousal";
import { Box, Center, Heading } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <Center>
      <Box
        height={{ base: "fit-content", md: "fit-content", lg: "100dvh" }}
        zIndex={"1005"}
        pos={"relative"}
        p={0}
        m={10}
        width={{ base: "100%", md: "70%" }}
      >
        <Heading
          textDecoration="underline"
          letterSpacing={2}
          color="orange.500"
          justifyContent={"center"}
          pb={8}
          display={{ lg: "flex", md: "none", base: "none" }}
          fontSize={"4xl"}
        >
          GALLERY
        </Heading>
        <Center display={{ lg: "none", md: "flex", base: "flex" }}>
          <Heading
            fontSize="2xl"
            textDecoration="underline"
            letterSpacing={2}
            p={4}
            color="orange.500"
          >
            {" "}
            GALLERY
          </Heading>
        </Center>

        <GalleryPage />
      </Box>
    </Center>
  );
}
