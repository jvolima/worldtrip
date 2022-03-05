import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerSlogan() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box bgImage={"url(/background.svg)"} bgSize="cover">
      <Flex maxWidth={1120} w="100%" mx="auto" align="center" justify="space-between">
        <Box my={["7", "20"]}px="4">
          <Text
            color="gray.50" 
            lineHeight={["1.875rem", "3.375rem"]} 
            maxWidth={426}
            fontWeight={500} 
            fontSize={["xl", "4xl"]}
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text 
            maxWidth={524} 
            mt="5" 
            fontSize={["sm", "xl"]} 
            lineHeight={["5", "7"]} 
            color="gray.300"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
        { isWideVersion && 
          <Image src="/airplane.svg" alt="Avião" transform={"rotate(3deg)"} mb="-7rem" />
        }
      </Flex>
    </Box>
  )
}