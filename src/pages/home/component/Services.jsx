/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeTitle from "../../../componants/HomeTitle";

const Services = ({ bgColor }) => {
  const OurAdvantage = [
    { id: 1, icon: "/1.png", value: "إدارة حسابات السوشيال ميديا" },
    { id: 2, icon: "/2.png", value: "صناعة الأحداث" },
    { id: 3, icon: "/3.png", value: "إطلاق وإدارة الحملات الاعلانية الممولة" },
    { id: 4, icon: "/4.png", value: "إدارة المؤثرين" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="services"
      className="mt-8 md:mt-16 py-10 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-10"
        ref={ref}
      >
        {/* title */}
        <HomeTitle title="خدماتنا" />

        {/* cards container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {OurAdvantage.map((value) => (
            <motion.div
              key={value.id}
              className="bg-[#E5E7EB] rounded-xl cursor-pointer transition-all flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* icon */}
              <div className="w-full flex items-center justify-center">
                <img
                  src={value.icon}
                  alt={value.value}
                  className="w-full object-contain"
                />
              </div>

              {/* desc */}
              <h1 className="text-gray-600 text-xl px-2 leading-relaxed min-h-[80px] flex items-center">
                {value.value}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
