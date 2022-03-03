import { Box, Flex, GridItem, Icon, Image, ListItem, SimpleGrid, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { BenefitCard } from "./benefitCard";
import { BenefitItem } from "./BenefitItem";

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
      <SimpleGrid justifyItems="center" flex="1" gap={["40px", "80px", "130px"]} minChildWidth={[136, 158]}>
        {
          isWideVersion === true ? cards.map(card => (
            <BenefitCard key={card.title} title={card.title} image_url={card.image_url}/>
          ))
          : 
          <>
            <GridItem>
              <BenefitItem title={cards[0].title}/>
            </GridItem>
            <GridItem>
              <BenefitItem title={cards[1].title}/>
            </GridItem>
            <GridItem>
              <BenefitItem title={cards[2].title}/>
            </GridItem>
            <GridItem>
              <BenefitItem title={cards[3].title}/>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <BenefitItem title={cards[4].title}/>
            </GridItem>
          </>
        }
      </SimpleGrid>
    </Box>
  )
}