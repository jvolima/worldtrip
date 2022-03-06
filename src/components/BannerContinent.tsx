import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

interface BannerContinentProps {
  name: string;
  bannerContent: string;
}

export function BannerContinent({ name, bannerContent }: BannerContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  
  return (
    <Box 
      bgImage={bannerContent}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={["150px", "500px"]}
    >
      {
        isWideVersion === false ?
        <Flex align="center" height="100%" justify="center">
          <Heading
            textAlign="center"
            fontSize="1.75rem"
            lineHeight="2.625rem"
            color="gray.50"
          >
            {name}
          </Heading>
        </Flex>
        : 
        <Heading
          ml={["auto", "8.6rem"]}
          pt="23rem"
          fontSize={["5xl"]}
          lineHeight={["4.5rem"]}
          color="gray.50"
        >
          {name}
        </Heading>
      }   
    </Box>
  )
}