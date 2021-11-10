import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import Loader from '../voxel-loader'

const LazyVoxelDog = dynamic(() => import('../voxel'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router, setLocale, locale }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Takuya's homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/nomu.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Yuuki Noumura - Homepage</title>
      </Head>

      <NavBar path={router.asPath} setLocale={setLocale} locale={locale} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {/* <Loader /> */}

        {children}

        {/* <Footer /> */}
      </Container>
    </Box>
  )
}

export default Main
