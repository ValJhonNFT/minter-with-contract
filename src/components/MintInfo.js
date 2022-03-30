
import {Box, Button, Flex, Image, Link, Spacer, Text} from '@chakra-ui/react';
import Facebook from "../assets/social-media-icons/facebook.png";


const MintInfo = () => {
  return (



<Flex bg='#117ACA'
    h="360px"
    w='100%'
    p={4}
    color='white'

   display="flex"
   left="0%"
  >
<Flex align="Left" w="100%" >
      <Link href="https://www.facebook.com/">
        <Image float="left" src={Facebook}  h="300px" margin="30px 0px 0px 60px"
         />
      </Link>

      <Flex flexDirection="column" marginLeft="40px">

      <Text

        marginTop="100px"
        textAlign="left"
        fontSize="35px"
        letterSpacing="-5.5%"
        fontFamily="Quicksand"
        textShadow="0 2px 2px #000000"
        color="white"
        h="1px"
      > The Vault Card</Text>

      <Text
        marginRight="50px"
        textAlign="left"
        fontSize="20px"
        letterSpacing="-5.5%"
        fontFamily="Quicksand"
        textShadow="0 2px 2px #000000"
        color="white"

      > WITH A LIMITED SUPPLY OF 10,000 NFTS, THE HEXGO WILL GIVE EXCLUSIVE ACCESS TO EVERYTHING IN THE DIGITAL SPACE.</Text>
</Flex>
</Flex>
</Flex>

  )

}
export default MintInfo
