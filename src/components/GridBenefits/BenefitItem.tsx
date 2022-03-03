import { Flex, Text, Image } from "@chakra-ui/react";

interface BenefitItem {
  title: string
}

export function BenefitItem({ title }: BenefitItem) {
  return (
    <Flex align="center">
        <Image src="/ellipse.svg" alt="elipse" />
        <Text fontSize="lg" fontWeight="500" lineHeight="short" color="gray.600" ml="3">
          {title}
        </Text>
    </Flex>
  )
}