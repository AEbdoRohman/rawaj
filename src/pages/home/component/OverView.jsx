import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../../componants/button/Button";

const OverView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      className=" bg-[#E5E7EB]  mt-4 md:mt-20 py-20 px-4 md:px-20"
    >
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 space-y-4 md:space-y-0 overflow-hidden"
        ref={ref}
      >
        {/* Text */}
        <motion.div
          className=" w-full md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-primary">
            رواج للتسويق الإلكتروني
          </h2>
          <p className="text-gray-700 text-lg mt-4">طريقك للرواج والنجاح</p>

          <div className="flex flex-col text-xl text-secondary_text uppercase font-semibold mt-4 pb-1">
            مصدر إلهامنا
            <span className="bg-primary inline-block h-1 w-10 ml-2 mt-2"></span>
            <p className="text-gray-700 text-lg mt-4">
              همة السعوديين كجبل طويق ولا تنكسر
              <br /> إلا إذا أنهد الجبل وتساوي بالأرض .{" "}
            </p>
          </div>

          <div className="mt-8">
            <Button
              buttonText="تواصل معنا"
              color="var(--primary)"
              hoverBg="var(--secondary)"
              hoverColor="white"
            />
          </div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="order-1 md:order-2 relative w-full md:w-1/2 overflow-hidden rounded-3xl bg-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          {/* Moving Image */}
          <img
            src="/hero.png"
            alt="alfaris"
            className="w-full h-full object-contain mb-8 md:mb-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OverView;
