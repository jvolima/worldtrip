import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  name: string;
  country: string;
  flag: string;
  image_url: string;
}

export function CityCard({ name, country, flag, image_url }: CityCardProps) {
  return (
    <Box 
      mx="auto"
      border="1px solid rgba(255, 186, 8, 0.5)" 
      boxSizing="border-box" 
      borderRadius="4px" 
      maxHeight={280}
      maxWidth={256}
      w="100%"
      bgColor="#ffffff"
    >
      <Box>
        <Image borderRadius="4px 4px 0px 0px" h="173px" w="100%" src={image_url} alt={`${name} image`} />
      </Box>
      <Flex maxWidth={256} w="100%" justify="space-between">
        <Flex direction="column" px="6" pt="1.125rem">
          <Heading fontSize="xl" lineHeight="6" fontWeight="600" color="gray.600">
            {name}
          </Heading>
          <Text mt="0.75rem" fontSize="md" lineHeight="base" color="gray.400" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Box p="2.375rem">
          <Image borderRadius="1000px" h="30px" w="30px" src={flag} alt={`${country} flag`} />
        </Box>
      </Flex>
    </Box>
  )
}