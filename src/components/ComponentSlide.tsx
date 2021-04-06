import Link from 'next/link';
import { Flex, Text } from '@chakra-ui/react';

interface ComponentSlideProps {
  backgroundImage: string;
  href: string;
  name: string;
  description: string;
}

export function ComponentSlide({ backgroundImage, href, name, description }: ComponentSlideProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      height="100%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${backgroundImage})`}
    >
      <Link href={href}>
        <a>
          <Text
            as="h2"
            align="center"
            fontWeight="700"
            fontSize={["1.5rem", "3rem"]}
            color="brand.50"
          >
            {name}
          </Text>

          <Text
            as="h3"
            align="center"
            fontWeight="700"
            fontSize={["0.875rem", "1.5rem"]}
            color="brand.75"
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}
