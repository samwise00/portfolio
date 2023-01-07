"use client";

import styles from "../styles";

const Hero = () => {
  return (
    <section className={`${styles.innerWidth} mx-auto`}>
      <div className="flex flex-col justify-start">
        <img src="/profilepic.jpeg" className="w-24 md:hidden rounded-full" />
        <div className="flex flex-row justify-between py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className={`${styles.heading}`}>Sam Sandoval</p>
              <p className={`${styles.headingSubtext}`}>
                Blockchain/Web3 Developer
              </p>
            </div>
            <p className={`${styles.paragraphText} pr-12`}>
              On an incredible journey building what's next. Contributing to
              web3, blockchain, and the decentralized future.
            </p>
          </div>
          <img
            src="/profilepic.jpeg"
            className="w-32 hidden md:block rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
