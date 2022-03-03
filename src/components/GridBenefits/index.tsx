import { Box, Flex, Icon, Image, ListItem, SimpleGrid, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { BenefitCard } from "./benefitCard";

interface CardData {
  title: string;
  image_url: string;
}

export function GridBenefits() {
  const cards: CardData[] = [
    {
      title: "vida noturna",
      image_url: "/cocktail.svg"
    },
    {
      title: "praia",
      image_url: "/surf.svg"
    },
    {
      title: "moderno",
      image_url: "/building.svg"
    },
    {
      title: "clássico",
      image_url: "/museum.svg"
    },
    {
      title: "e mais...",
      image_url: "/earth.svg"
    }
  ]

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box maxWidth={1360} mx="auto" mt={["9", "28"]}>
      <SimpleGrid flex="1" gap={["80px", "130px"]} minChildWidth={[136, 158]}>
        {
          isWideVersion === true ? cards.map(card => (
            <BenefitCard key={card.title} title={card.title} image_url={card.image_url}/>
          ))
          : cards.map(card => (
            <Flex align="center" justify="center" key={card.title}>
              <Image src="/ellipse.svg" alt="elipse" />
              <Text fontSize="lg" fontWeight="500" lineHeight="short" color="gray.600" ml="3">
                {card.title}
              </Text>
            </Flex>
          ))
        }
      </SimpleGrid>
    </Box>
  )
}