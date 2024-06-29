"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { testimonialsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { AnimatedPinCard } from "./testimonials";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonial");

  return (
    <section
      id="testimonial"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 "
    >
      <SectionHeading>Top Testimonials</SectionHeading>
      <ul className="grid md:grid-cols- gap-6 relative">
        {testimonialsData.map((testimonial, index) => (
          <motion.li
            className="w-full sticky top-24"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <AnimatedPinCard
              title={testimonial.title}
              link={testimonial.link}
              description={testimonial.description}
              image={testimonial.image}
              index={index + 1}
              company={testimonial.company}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
