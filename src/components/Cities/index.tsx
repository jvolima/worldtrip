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
    <Box maxWidth={1240} w="100%" mx="auto" mt="20">
      <Heading>
        Cidades + 100
      </Heading>

      <SimpleGrid minChildWidth={256} gap="2.875rem">
        {
          cities.map(city => (
            <CityCard 
              name={city.name} 
              flag={city.flag}
              country={city.country} 
              image_url={city.country}
              key={city.name} 
            />
          ))  
        }
      </SimpleGrid>
    </Box>
  )
}