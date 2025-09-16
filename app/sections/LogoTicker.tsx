"use client";

import quantumLogo from "@public/quantum.svg";
import acmeLogo from "@public/acme-corp.svg";
import echoValleyLogo from "@public/echo-valley.svg";
import pulseLogo from "@public/pulse.svg";
import outsideLogo from "@public/outside.svg";
import apexLogo from "@public/apex.svg";
import celestialLogo from "@public/celestial.svg";
import twiceLogo from "@public/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container mx-auto px-8">
        <h3 className="text-center text-xl text-white/50">
          Already chosen by these market leaders
        </h3>
        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image key={logo.name} src={logo.image} alt={logo.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
