import { ChakraProvider } from '@chakra-ui/react'
// import { ChooseNoContextProvider } from '@/store/choose_id_context'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <ChooseNoContextProvider> */}
      <Component {...pageProps} />
      {/* </ChooseNoContextProvider> */}
    </ChakraProvider>
  )
}

export default MyApp
