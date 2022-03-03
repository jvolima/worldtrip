import { Flex, Image, Text } from "@chakra-ui/react";

interface BenefitCardProps {
  title: string;
  image_url?: string;
}

export function BenefitCard({ title, image_url }: BenefitCardProps) {
  return (
    <Flex align="center" justify="center" direction="column">
      <Image src={image_url} alt={`${title} image`}/>
      <Text
        mt="6"
        fontWeight={600}
        fontSize="2xl"
        lineHeight="9"
        color="gray.600"
      >
        {title}
      </Text>
    </Flex>
  )
}