import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/NFTCollectible.json';
import { ethers } from 'ethers';
import { Box, Text } from '@chakra-ui/react'
import loading from './assets/loading-buffering.gif';

//0xd60b2d46aC9b58b4d69248c443589cFd2b0bafd0

const contractAddress = "0x03aBAa62EE6957f8938B6f4a405aa9B32dC94209";
const abi = contract.abi;


function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [test, setTest] = useState("");
  const [account_, setAccounts] = useState("");
  const [loading_, isLoading] = useState([]);


  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setAccounts(accounts[0]);
      setCurrentAccount(account);

    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;


    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);




    } catch (err) {
      console.log(err)
    }
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
        setTest("Initialize payment");


        console.log("Mining... please wait");
        isLoading(<span><img  className="loading" src={loading} alt="loading..." width="10px" /></span>);

        setTest("Mining... please wait");
        await nftTxn.wait();


        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        isLoading(<span></span>);
        setTest(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);



      } else {
        console.log("Ethereum object does not exist");
        setTest("Ethereum object does not exist");
      }

    } catch (err) {
      console.log(err);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>

    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
  <div className="overlay">
  <div className="section-background">

    <Box  display="relative" className="main-content" w='100%' h="100%" p={4} color='white' align="center">
<div className="spacer"></div>
      <h1 className="main-text">VAL NFT</h1>

      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
      <div className="spacer-2"></div>
      <div className="account-text">✅Account: {account_}</div>
      <div className="spacer-3"></div>
        <Text padding="20px 20px 20px 20px" className="test"><span>✅Works on any ETH Test Network: </span>{loading_}<div>{test}</div></Text>
      </Box>

    </div>
</div>
  )
}

export default App;
