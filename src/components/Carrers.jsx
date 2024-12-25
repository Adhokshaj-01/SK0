import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

export default function Careers() {
  const jobs = [
    {
      title: "Software Engineer",
      description:
        "We are looking for a highly skilled software engineer to join our team. You'll work on exciting projects and be a part of our growth.",
    },
    {
      title: "Product Manager",
      description:
        "As a Product Manager, you will be responsible for driving product development and ensuring a smooth user experience.",
    },
    {
      title: "UX/UI Designer",
      description:
        "We're looking for a creative and detail-oriented UX/UI Designer to help design intuitive and beautiful digital products.",
    },
  ];

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

        {/* Job Listings */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={8}
          maxW={{ base: "100%", md: "70%" }}
          zIndex={"109090"}
        >
          {/* Map through jobs array */}
          {jobs.map((job, index) => (
            <Box
              key={index}
              p={6}
              borderWidth={1}
              borderRadius="md"
              boxShadow="lg"
              bg="white"
              zIndex={"1000000"}
              w={"fit-content"}
            >
              <Heading size="md" mb={2}>
                {job.title}
              </Heading>
              <Text mb={4} fontSize={{ base: "small" }}>
                {job.description}
              </Text>
              <Button
                colorScheme="black"
                size="sm"
                width="full"
                variant={"outline"}
              >
                Apply Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
