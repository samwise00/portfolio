"use client";

import styles from "../styles";

import { useAccount, useConnect, useNetwork, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { useState, useEffect } from "react";

const GuestBook = () => {
  const [mounted, setMounted] = useState(false);
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  console.log(chain);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="md:max-w-[650px] w-screen pt-6 px-6 mx-auto">
      {isConnected && chain.id != 1 && (
        <p
          className={`${styles.disclaimerText} flex justify-end items-end py-2`}
        >
          ...what if I{" "}
          <span
            onClick={() => switchNetwork(1)}
            className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer"
          >
            &nbsp;switched to Ethereum Network?
          </span>
          ?
        </p>
      )}
      {!isConnected && (
        <p
          className={`${styles.disclaimerText} flex justify-end items-end py-2`}
        >
          ...what if I{" "}
          <span
            onClick={() => connect()}
            className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer"
          >
            &nbsp;connected my wallet
          </span>
          ?
        </p>
      )}
      {isConnected && chain.id == 1 && <p>Welcome to the Blog!</p>}
    </section>
  );
};

export default GuestBook;
