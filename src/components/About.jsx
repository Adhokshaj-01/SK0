import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img from "../utlis/hello.webp";
export default function About() {
  const headingControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  // Set up refs and inView observers for each animated element
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      headingControls.start({ opacity: 0, y: 20 });
    }
  }, [headingControls, headingInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start({
        opacity: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      textControls.start({ opacity: 1, opacity: 0 });
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    } else {
      imageControls.start({ opacity: 0, x: -20 });
    }
  }, [imageControls, imageInView]);

  return (
    <Box
      height={{ base: "fit-content", md: "fit-content", lg: "100dvh" }}
      bg={"white"}
      zIndex={"1005"}
      pos={"relative"}
      p={4}
      borderTop={"2px solid orange"}
    >
      <Center display={{ lg: "none", md: "flex", base: "flex" }}>
        <Heading
          fontSize="2xl"
          textDecoration="underline"
          letterSpacing={2}
          color="orange.500"
        >
          ABOUT US
        </Heading>
      </Center>

      <Box
        display={"flex"}
        flexDirection={{
          lg: "row",
          md: "column-reverse",
          base: "column-reverse",
        }}
        p={{ base: 5, md: 20 }}
        m={{ base: 2, md: 8 }}
        gap={5}
      >
        <Box flex={"50%"} justifyItems={"center"}>
          <Image
            src={img}
            boxSize={{ base: "fit-content", md: "fit-content" }}
            borderRadius={"md"}
            mr={{ base: 0, md: 4 }}
            mt={{ base: 7, md: 0 }}
          />
        </Box>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          style={{ flex: "50%" }}
        >
          <Box
            maxW={{ base: "100%", md: "100%" }}
            textAlign={"justify"}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"light"}
            m={{ base: 0, md: 4 }}
            letterSpacing={0}
          >
            <Heading
              textDecoration="underline"
              letterSpacing={2}
              color="orange.500"
              justifyContent={"flex-end"}
              p={8}
              display={{ lg: "flex", md: "none", base: "none" }}
              fontSize={"4xl"}
            >
              ABOUT US
            </Heading>
            {/* We are a trusted Government-approved Electrical Contractor,
            specializing in Erection, Commissioning, Testing, LT/HT
            Installation, Internal Electrification, Cabling, and Paneling. With
            expertise in delivering high-quality electrical solutions, we
            proudly serve clients in Nagpur and across multiple states. Our team
            of skilled professionals is dedicated to ensuring safe, efficient,
            and cost-effective solutions tailored to your needs. From industrial
            and commercial projects to residential installations, we bring
            precision and reliability to every task. With a commitment to
            excellence and timely project completion, we aim to be your go-to
            partner for all electrical contracting needs. */}
            Established on November 3, 1995, SK Group is a trusted,
            Government-approved Electrical Contractor with nearly three decades
            of expertise. We specialize in Erection, Commissioning, Testing,
            LT/HT Installation, Internal Electrification, Cabling, and
            Paneling, delivering tailored, high-quality electrical solutions to
            clients in Nagpur and across multiple states. Our team of highly
            skilled professionals is dedicated to providing safe, efficient, and
            cost-effective services. Whether for industrial, commercial, or
            residential projects, we combine precision, reliability, and a
            customer-centric approach to ensure superior results. At SK Group,
            we are committed to excellence and timely project execution, making
            us the preferred partner for all your electrical contracting needs.
            Trust us to power your projects with innovation, quality, and
            unmatched expertise.
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
