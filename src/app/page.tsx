"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Waves from "@/components/reactbits/Waves";
import SignaturePadPage from "./signature-pad/page";
import FontSignaturePage from "./font-signature/page";

export default function Home() {
  return (
    <>
      <section className="relative h-[100dvh] overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Waves
            lineColor="gray"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.01}
            waveSpeedY={0.01}
            waveAmpX={30}
            waveAmpY={20}
            friction={0.8}
            tension={0.01}
            xGap={12}
            yGap={36}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full"
        >
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold mb-4 text-gray-800">
            Create Your Signature
          </h1>
          <p className="text-gray-600 mb-10 sm:text-lg text-sm xl:w-[30%] md:w-[50%] sm:w-[75%] w-[75%] m-auto">
            Choose between drawing your own or generating a stylish signature
            using fonts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signature-pad">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 font-bold text-white md:text-sm text-xs"
              >
                Draw Signature
              </Button>
            </Link>
            <Link href="/font-signature">
              <Button
                size="lg"
                variant="outline"
                className="font-bold md:text-sm text-xs"
              >
                Type Signature
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <section
        id="draw"
        className="min-h-screen flex items-center justify-center"
      >
        <SignaturePadPage />
      </section>
      <section
        id="type"
        className="min-h-screen flex items-center justify-center"
      >
        <FontSignaturePage />
      </section>
    </>
  );
}
