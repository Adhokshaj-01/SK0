import React from "react";
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";  // Import keyframes from @emotion/react
import { GiElectric } from "react-icons/gi";

// Define the spinning animations
const spin1 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spin2 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;


const Loading = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(255, 255, 255, 0.8)"
      zIndex="9999"
    >
      <Box
        position="absolute"
        width="80px"
        height="80px"
        borderRadius="50%"
        border="3px solid transparent"
        borderTopColor="orange"
        filter="drop-shadow(0 5px 10px rgb(230, 109, 16))"
        animation={`${spin1} 1s linear infinite`}
      >
      
      <Box
        position="absolute"
        width="70px"
        height="70px"
        top="5px"
        left="5px"
        borderRadius="50%"
        border="3px solid transparent"
        borderTopColor="black"
        animation={`${spin2} 2s linear infinite`}
      />
      </Box>
      
      <GiElectric/>

      </Box>
  );
};

export default Loading;
