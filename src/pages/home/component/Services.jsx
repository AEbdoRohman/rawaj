/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeTitle from "../../../componants/HomeTitle";

const Services = ({ bgColor }) => {
  const OurAdvantage = [
    {
      id: 1,
      icon: "/social.gif",
      value: "إدارة حسابات السوشيال ميديا",
      dec: `تحديد الأهداف
          تحليل الجمهور 
          كتابة المحتوى 
          تصوير صور 
          تصميم الصور 
          تصوير فيديو 
          مونتاج الفيديوهات
          النشر والرصد 
          متابعة الاداء
          ادارة التعليقات`,
    },
    {
      id: 3,
      icon: "/compition.gif",
      value: "إطلاق وإدارة الحملات الاعلانية الممولة",
      dec: `تحديد الهدف
          تحليل الجمهور
          كتابة المحتوى الاعلاني
          تصوير فيديو اعلاني
          مونتاج 
          اختبار مكان الظهور 
          تحديد الميزانية 
          تنفيذ الحملة
          متابعة الأداء
          الظهور الاول في محركات البحث`,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
          {OurAdvantage.map((value, index) => (
            <motion.div
              key={value.id}
              className="bg-[#E5E7EB] rounded-xl shadow-sm flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : index % 2 === 0 ? -50 : 50,
              }}
              transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }} // تحسين السلاسة
            >
              {/* icon */}
              <div className="w-full h-72 flex items-center justify-center">
                <img
                  src={value.icon}
                  alt={value.value}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* desc */}
              <div className="p-4">
                <h1 className="text-main_text text-xl md:text-2xl font-bold px-2">
                  {value.value}
                </h1>
                <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-4 text-gray-800">
                  {value.dec.split("\n").map((line, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * i,
                        ease: "easeOut",
                      }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
