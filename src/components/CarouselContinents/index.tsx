import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Continent {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

interface CarouselContinentProps {
  continents: Continent[];
}

export function CarouselContinent({ continents }: CarouselContinentProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation  
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              bgImage={continent.image_url} 
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              justify="center" 
              align="center" 
              flexDirection="column"
              h={["250px", "450px"]}
            >
              <Heading 
                fontSize={["2xl", "5xl"]}
                textAlign="center"
                color="gray.50" 
                lineHeight={["9", "4.5rem"]} fontWeight="bold"
              >
                {continent.name}
              </Heading>
              <Text 
                fontSize={["sm", "2xl"]} 
                textAlign="center" 
                color="gray.300" 
                lineHeight={["shorter", "9"]} 
                fontWeight="bold"
                maxWidth={[200, 300, 500]}
              >
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}