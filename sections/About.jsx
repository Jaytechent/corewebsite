"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About COREAI" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">COREAI</span> is a new
        Project in the Artificial Intelligence Industry built on the CORE blockchain,where you can enjoy all the premium access to all automated and AI powered projects on the coreblockchain.{" "}
        <span className="font-extrabold text-white">
          {" "}
          Exploration of the AI opportunities in core Blockchain{" "}
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white"> VR </span> devices you can
        easily explore the world you want, turn your dreams into reality. Let's{" "}
        <span className="font-extrabold text-white">explore</span> and Enjoy COREAI
        of the core blockchain by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
