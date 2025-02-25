/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Button from "../../../componants/button/Button";
import ArrowButton from "../../../componants/button/ArrowButton";

const OverViewFingerprint = ({ toAbout }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const navigate = useNavigate();

  return (
    <section className="container mx-auto mt-4 md:mt-20 py-8 px-4 md:px-8">
      {toAbout && (
        <motion.div
          className="flex flex-col md:flex-row  items-center justify-between mb-8"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: inView ? 1 : 0,
            translateY: inView ? 0 : 20,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div>
            <p className="flex flex-col text-xl text-secondary_text font-semibold">
              عن الشركة
              <span className="bg-primary inline-block h-1 w-10 ml-2 mt-2"></span>
            </p>
          </div>

          <Button
            buttonText="عن الشركة"
            color="var(--primary)"
            hoverBg="var(--secondary)"
            hoverColor="white"
            onClick={() => navigate("/about")}
          />
        </motion.div>
      )}

      <div
        className="flex flex-col md:flex-row items-center justify-between gap-16 space-y-4 md:space-y-0 overflow-hidden"
        ref={ref}
      >
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 px-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl  font-bold mx-auto md:mx-0 text-secondary mb-4">
            عن بصمة الشاهين للتطوير العقاري
          </h2>
          <p className="text-gray-800 text-lg mt-4">
            تعمل شركة احمد سعد الشاهين للتطوير والاستثمار العقاري بمفهوم مستقبلي
            شامل يساهم في تغيير المشهد الاسكاني في المملكة بشكل كبير من خلال
            تقديم خدمات اسكانية والمساهمة في بيئات حضرية حديثة ومتناغمة، بشكل
            يحقق الرفاه والاستقرار لك عملائنا الذين نعدهم جوهر إلهامنا وأساس
            نجاحنا.{" "}
          </p>
          {toAbout && (
            <ArrowButton
              color="var(--color)"
              hoverBg="var(--bg-secondary)"
              hoverColor="var(--primary-color)"
              onClick={() => navigate("/awards")}
            />
          )}
          <div className="w-full md:w-10/12 h-[2px] mb-4 bg-gradient-to-l from-gray-300 to-transparent my-4"></div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-3xl bg-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          {/* Moving Image */}
          <motion.img
            src="/CurvedBillboard.jpg"
            alt="Example"
            className="absolute w-[120%] h-full  max-w-none"
            initial={{ x: "10%" }}
            animate={{
              x: ["10%", "0%", "10%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OverViewFingerprint;
