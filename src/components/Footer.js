import {Box, Button, Flex, Image, Link, Spacer, Text} from '@chakra-ui/react';
import Facebook from "../assets/social-media-icons/facebook.png";
import Twitter from "../assets/social-media-icons/twitter.png";
import Discord from "../assets/social-media-icons/discord.png";
import Alchemy from "../assets/alchemy-cert.png";


const Footer = () => {
  return (
    <Flex marginTop="100px" align="center" height="300px"  display="block" align="center">

      <div>
      <Button
        left="38%"
        position="relative"
        marginTop="50px"
        textAlign="center"
        className="button"
        backgroundColor="#117ACA"
        padding="10px"
        boxShadow="0px 2px 2px 1px #0F0F0F"
        color="white"
        fontSize="25px"
        cursor="pointer"
        fontFamily="inherit"
        align="center"

        onClick="">JOIN THE DISCORD SERVER
        </Button>
        </div>
        <div>



        <Flex justify="center" align="center" marginTop="20px" >

          <Link href="https://www.facebook.com/">
            <Image src={Facebook} boxSize="42px" margin="10px" />
          </Link>
          <Link href="https://www.twitter.com/" margin="10px">
            <Image src={Twitter} boxSize="42px"/>
          </Link>
          <Link href="https://www.discord.com/" margin="10px">
            <Image src={Discord} boxSize="42px"/>
          </Link>
          </Flex>
          </div>
          <div className="break">
          <Flex align="left"  height="80px" justify="space-between" margin="0px 100px 0px 100px">
        {/* Left Side - Social Media Icons */}


           <h1 className="copyright">VAL NFT<p className="copyright-below">© 2022 TESTING WEBSITE</p></h1>

            <h1 className="copyright"><Image src={Alchemy} w="300px" margin="10px" /></h1>
          </Flex>
          </div>

    </Flex>


  )

}
export default Footer
