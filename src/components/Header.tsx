import { useRouter } from 'next/dist/client/router';
import { Flex, Image, IconButton } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

export function Header() {
  const router = useRouter();

  return (
    <Flex h={["3.125rem", "6.25rem"]} align="center" justify="center">
      {router.asPath !== '/' && (
        <IconButton
          as="a"
          href="/"
          aria-label="Voltar"
          icon={<FiChevronLeft />}
          fontSize={["16", "32"]}
          position="absolute"
          left={["16px", "100px", "140px"]}
        />
      )}
      <Image
        src="/images/logo.png"
        alt="worldtrip logo"
        width={["81px", "100px", "184px"]}
        height={["20px", "30px", "46px"]}
        mr={["10px", "20px"]}
        ml={["10px", "20px"]}
      />
    </Flex>
  )
}