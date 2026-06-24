"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAvatar() {
    return (
        <motion.div
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
            }}
            className="relative flex justify-center"
        >
            <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

            <div className="absolute w-[420px] h-[420px] border border-purple-500/50 rounded-full animate-pulse" />

            <Image
                src="/avatar.png"
                alt="Flex"
                width={400}
                height={400}
                className="relative z-10 rounded-full"
            />
        </motion.div>
    );
}