import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";

const InfiniteCarousel = ({ images, setSliderRef }) => {
  // Dynamically determine the number of slides to show based on breakpoints
  const slidesToShow = useBreakpointValue({
    base: 1, // For mobile
    md: 2, // For tablets
    lg: 2, // For desktop
  });

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow || 1, // Fallback to 1 if undefined
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false, // Disable default arrows for custom ones
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <Box
      width="100%"
      position="relative"
      overflow="hidden"
      h={"fit-content"}
      mt={10} // Orange shadow
    >
      <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
        {images.map((src, index) => (
          <Box
            key={index}
            p={2}
            borderRadius="8px"
            transition="all 0.3s ease-in-out"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                // borderRadius: "8px",
              }}
              mt={{ base: 0, md: 5, lg: 10 }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const GalleryPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "100%", md: "104%" });
  const side = useBreakpointValue({ base: "20%", md: "40%" });

  return (
    <Flex direction="column" p={4} position="relative">
      <Text textAlign="left" mb={6}>
        Discover our gallery showcasing SK Group's expertise through vivid
        images of our electrical projects. From industrial setups to commercial
        and residential solutions, explore the precision, quality, and
        innovation we bring to every project.
      </Text>
      {/* Carousel centered below the message */}
      <InfiniteCarousel images={images} setSliderRef={setSlider} />
      <>
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="link"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <MdOutlineKeyboardArrowLeft size="40px" color="orange" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="link"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <MdOutlineKeyboardArrowRight size="40px" color="orange" />
        </IconButton>
      </>
    </Flex>
  );
};

export default GalleryPage;
