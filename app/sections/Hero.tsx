import Button from "../components/Button";
import designExample1Image from "@public/design-example-1.png";
import designExample2Image from "@public/design-example-2.png";
import Image from "next/image";
import Pointer from "../components/Pointer";

export default function Hero() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="relative container mx-auto">
        <div className="absolute top-16 -left-32 hidden xl:block">
          <Image src={designExample1Image} alt="Design example 1" />
        </div>
        <div className="absolute -top-16 -right-64 hidden xl:block">
          <Image src={designExample2Image} alt="Design example 2" />
        </div>
        <div className="absolute top-96 left-56 hidden xl:block">
          <Pointer name="Arthur" />
        </div>
        <div className="absolute -top-4 right-80 hidden xl:block">
          <Pointer name="Crystal" color="red" />
        </div>
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
            className="bg-transparent px-4 md:flex-1"
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
