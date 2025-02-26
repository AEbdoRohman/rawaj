/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeTitle = ({ title, subtitle }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full text-center">
      <motion.div
        className="w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl text-primary font-bold mb-1">{title} </h1>
        <span className="bg-main_text inline-block h-1 w-16"></span>
        <h3 className="text-gray-700 text-lg mt-4">{subtitle}</h3>
      </motion.div>
    </div>
  );
};

export default HomeTitle;
