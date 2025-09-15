"use client";

import Button from "../components/Button";
import designExample1Image from "@public/design-example-1.png";
import designExample2Image from "@public/design-example-2.png";
import cursorYouImage from "@public/cursor-you.svg";
import Image from "next/image";
import Pointer from "../components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="overflow-x-clip py-24"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="relative container mx-auto px-8">
        {/* Left Design Example */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute top-16 -left-32 hidden xl:block"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidden xl:block"
        >
          <Pointer name="Arthur" />
        </motion.div>
        {/* Right Design Example */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -top-16 -right-64 hidden xl:block"
        >
          <Image
            src={designExample2Image}
            alt="Design example 2"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute -top-4 right-80 hidden xl:block"
        >
          <Pointer name="Crystal" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-pink-400 bg-gradient-to-r from-purple-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium tracking-tight md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design tools shouldn&apos;t slow you down. Layers combine powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
