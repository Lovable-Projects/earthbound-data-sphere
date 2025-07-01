import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Perssonify transformed our digital marketing approach completely. Their growth solutions delivered measurable results within just 3 months.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    text: "The strategic solutions team helped us optimize our processes and scale efficiently. Their expertise made all the difference.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Operations Manager",
  },
  {
    text: "Working with Perssonify was a game-changer. Their data-driven approach and execution speed exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Rodriguez",
    role: "CEO",
  },
  {
    text: "Their growth marketing strategies helped us acquire customers at scale while maintaining quality. Highly recommend their services.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Wilson",
    role: "Growth Manager",
  },
  {
    text: "The business consulting provided by Perssonify gave us clarity and direction. They truly understand what drives business growth.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lisa Thompson",
    role: "Founder",
  },
  {
    text: "From brand strategy to execution, Perssonify delivered comprehensive solutions that aligned perfectly with our business goals.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amanda Clark",
    role: "Brand Manager",
  },
  {
    text: "Their analytics and insights helped us make data-driven decisions that significantly improved our ROI and business performance.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Miller",
    role: "Analytics Director",
  },
  {
    text: "Perssonify's process optimization work streamlined our operations and reduced costs while improving quality. Exceptional results.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Rachel Davis",
    role: "Operations Director",
  },
  {
    text: "The team's expertise in market research provided us with insights that shaped our entire business strategy. Invaluable partnership.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Martinez",
    role: "Strategy Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-5 text-left text-primary">
            What our clients say
          </h2>
          <p className="text-base sm:text-lg mt-5 opacity-75 text-foreground">
            See what our customers have to say about working with us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
