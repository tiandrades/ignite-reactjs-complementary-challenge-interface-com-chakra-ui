import { Flex, Image, Stack, Text } from '@chakra-ui/react';

interface CityProps {
  city: string;
  image: string;
  country: string;
  flag: string;
}

export function City({ city, country, image, flag }: CityProps) {
  return (
    <Flex direction="column" spacing="0" w="100%" overflow="hidden">
      <Image
        src={image}
        alt="London Image"
        height="173px"
      />
      <Flex
        p="18px 24px 25px 24px"
        align="center"
        justify="space-between"
        border="1px solid"
        borderColor="brand.100"
        borderTop="none"
        borderRadius="0 0 4px 4px"
      >
        <Stack align="flex-start" spacing="3">
          <Text as="h3" fontWeight="600" fontSize="1.25rem" fontFamily="Barlow">{city}</Text>
          <Text fontWeight="500" fontFamily="Barlow">{country}</Text>
        </Stack>
        <Image src={flag} alt={country} />
      </Flex>
    </Flex>
  )
}