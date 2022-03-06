import { Box, Image } from "@chakra-ui/react";

interface CityCardProps {
  name: string;
  country: string;
  flag: string;
  image_url: string;
}

export function CityCard({ name, country, flag, image_url }: CityCardProps) {
  return (
    <Box h="279px">
      <Box h="173px">
        <Image src={image_url} alt={`${name} image`} />
      </Box>
    </Box>
  )
}