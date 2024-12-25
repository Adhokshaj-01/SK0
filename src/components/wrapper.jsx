import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import Home from "./Home";
import About from "./About";
import Network from "./Network";
import Carrers from "./Carrers";
import Contact from "./Contact";
import Services from "./services";
import Gallery from "./Gallery";

export default function Wrapper() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const networkRef = useRef(null);
  const careersRef = useRef(null);
  const contactRef = useRef(null);
  const serviceref = useRef(null);
  const galleryRef = useRef(null);

  return (
    <Box position="relative" width="100%" height="100vh" zIndex="1000" bg={'white'}>
      {/* Background Layer */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        bgGradient="radial(orange 1px, transparent 1px)"
        backgroundSize="21px 21px"
        opacity="0.4"
        zIndex="0"
      ></Box>

      {/* Content Layer with refs passed to sections */}
      <Box position="relative" zIndex="1" overflow={'hidden'}>
        <Home aboutRef={aboutRef} networkRef={networkRef} careersRef={careersRef} contactRef={contactRef} serviceref={serviceref} galleryRef={galleryRef} />
        <Box ref={aboutRef}><About /></Box>
        <Box ref={serviceref}><Services /></Box>
        <Box ref={galleryRef}><Gallery/></Box>
        <Box ref={networkRef}><Network /></Box>
        <Box ref={careersRef}><Carrers /></Box>
        <Box ref={contactRef}><Contact /></Box>
      </Box>
    </Box>
  );
}
