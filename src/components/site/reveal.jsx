"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 30, className }) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={reduce ? false : { opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function SplitHeading({ text, className = "", as: Component = "h1" }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <LazyMotion features={domAnimation} strict>
      <Component className={className}>
        {words.map((word, index) => (
          <span key={index} className="mr-[0.3em] inline-block overflow-hidden align-bottom">
            <m.span
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {word}
            </m.span>
          </span>
        ))}
      </Component>
    </LazyMotion>
  );
}
