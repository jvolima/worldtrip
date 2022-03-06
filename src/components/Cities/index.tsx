import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface City {
  name: string;
  country: string;
  flag: string;
  image_url: string;
}

interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Box maxWidth={1240} w="100%" mx="auto" mt={["8", "20"]}>
      <Heading 
        fontSize={["2xl", "4xl"]} 
        px="4" 
        lineHeight={["2.25rem", "3.375rem"]} 
        color="gray.600" 
        fontWeight="500"
      >
        Cidades + 100
      </Heading>

      <SimpleGrid my="10" minChildWidth={256} gap="2.875rem">
        { 
          cities.map(city => (
            <CityCard 
              name={city.name} 
              flag={city.flag}
              country={city.country} 
              image_url={city.image_url}
              key={city.name} 
            />
          ))  
        }
      </SimpleGrid>
    </Box>
  )
}