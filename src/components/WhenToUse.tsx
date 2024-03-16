"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { motion } from "framer-motion";

const WhenToUse = () => {
  return (
    <Container className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title title="When to use" />
        <p className="text-sm mt-5 tracking-wide leading-6">
          JSONPlaceholder is a free online REST API that you can use{" "}
          <span className="font-bold">whenever you need some fake data</span>.
          It can be in a README on GitHub, for a demo on CodeSandbox, in code
          examples on Stack Overflow, ...or simply to test things locally.
        </p>
      </motion.div>
    </Container>
  );
};

export default WhenToUse;
