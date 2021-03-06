import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  // Heading,
  // Flex,
  // Menu,
  // MenuItem,
  // MenuList,
  // MenuButton,
  // IconButton,
  useColorModeValue
} from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import LocaleToggleButton from './locale-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import ZennIcon from './zenn-icon'

const LinkItem = ({ href, children, ...props }) => {
  const active = false
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={undefined}
        color={active ? '#202023' : inactiveColor}
        target="blank"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path, setLocale, locale } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="https://github.com/yuuki008"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, paddingLeft: 0 }}
            pl={2}
          >
            <IoLogoGithub size={30} />
          </LinkItem>
          <LinkItem
            href="https://zenn.dev/nomu"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4, padding: 0 }}
            pl={2}
          >
            <ZennIcon color={"default"} />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Stack spacing={4} direction="row" float="right">
            <ThemeToggleButton />
            <LocaleToggleButton setLocale={setLocale} locale={locale} />
          </Stack>

          {/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/yuuki008/"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box> */}
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
