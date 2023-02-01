import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { MintStaker } from '../components/MintStaker'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Staker NFT</title>
        <meta
          name="description"
          content="Staker NFT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Staker NFT
        </h1>

        <div>
        <Image src="/staker.svg" alt="Staker" width={100} height={100} />
        </div>

        <p className={styles.description}>
        Staker NFT mascot inspired by Proteus node. ERC4883 composable NFT. Mint in random colours, with Execution Layer & Consensus Layer client attributes.</p>

        <ConnectButton />

        <div>
        <div>
            <h2>Mint Staker NFT</h2>
            <MintStaker />
          
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
      <a href="https://opensea.io/collection/staker">🛍️ OpenSea</a>
      <a href="https://twitter.com/teampartypanda">🐦 Twitter</a>
      <a href="https://optimistic.etherscan.io/token/0xc3ddb818e61e1b66bee71fd5df7eb33fc729b1f0">🧭 Etherscan</a>
      <a href="https://github.com/TeamPartyPanda/staker-nft">🐱 GitHub</a>
      </footer>
    </div>
  );
};

export default Home;
