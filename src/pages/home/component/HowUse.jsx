/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeTitle from "../../../componants/HomeTitle";

const HowUse = ({ bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="how_use"
      className="mt-14 md:mt-28 py-10 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-10"
        ref={ref}
      >
        {/* title */}
        <HomeTitle
          title="من نحن"
          subtitle="
            احنا وكالة رواج للتسويق الإلكتروني , نقدم حلول تسويقية إبداعية منذ
            عام 2020, في منطقة عسير
          "
        />

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="flex flex-col items-center text-center gap-3 p-6 bg-[#E5E7EB] shadow-sm rounded-xl cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="p-5 bg-primary rounded-full">
              <img
                src="/idea.png"
                alt="مصدر إلهامنا"
                className="w-14"
                style={{
                  filter:
                    "invert(56%) sepia(48%) saturate(450%) hue-rotate(350deg) brightness(95%) contrast(90%)",
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3 text-primary">
                مصدر إلهامنا
              </h2>
              <p className="text-gray-600">
                مقولة صاحـــــب السمــــــو الملكــــــي الأمــير محمد بـــن
                ســـلمان بـــن عبـــد العزيز
              </p>
              <p className="text-main_text font-bold mt-4">
                ❞ همة السعوديين كجبل طويق ولا تنكسر إلا إذا أنهد الجبل وتساوي
                بالأرض. ❝
              </p>

              <div className="w-full h-[2px] bg-gradient-to-l from-gray-300 to-transparent mt-4"></div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center gap-3 p-6 bg-[#E5E7EB] shadow-sm rounded-xl cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="p-5 bg-primary rounded-full">
              <img
                src="/digital-transformation.png"
                alt="كيف جينا"
                className="w-14"
                style={{
                  filter:
                    "invert(56%) sepia(48%) saturate(450%) hue-rotate(350deg) brightness(95%) contrast(90%)",
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3 text-primary">كيف جينا</h2>
              <p className="text-gray-600">
                مع الثورة الرقمية لقينا أنفسنا وتخصصنا فيها لنخدم أصحاب المشاريع
                بطرق حديثة إبداعية ومبتكرة ونوسع مدي رواجكم
              </p>
              <div className="w-full h-[2px] bg-gradient-to-l from-gray-300 to-transparent mt-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowUse;
