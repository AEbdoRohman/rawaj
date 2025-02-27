/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeTitle from "../../../componants/HomeTitle";

const Services = ({ bgColor }) => {
  const OurAdvantage = [
    {
      id: 1,
      icon: "/1.png",
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
      icon: "/3.png",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start"
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
              <div className="w-80 h-80 flex items-center justify-center">
                <img
                  src={value.icon}
                  alt={value.value}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* text-gray-600 text-xl px-2 leading-relaxed min-h-[80px] flex items-center */}
              {/* desc */}
              <div className="p-4">
                <h1 className="text-main_text text-xl md:text-2xl font-bold px-2 ">
                  {value.value}
                </h1>
                <p className="grid grid-cols-2 gap-x-16 gap-y-4 mt-4 text-gray-800">
                  {value.dec.split("\n").map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
