/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeTitle from "../../../componants/HomeTitle";

const HowUse = ({ bgColor }) => {
  const OurValues = [
    {
      id: 1,
      icon: "/idea.png",
      title: "مصدر إلهامنا",
      value:
        "همة السعوديين كجبل طويق ولا تنكسر إلا إذا أنهد الجبل وتساوي بالأرض .",
    },
    {
      id: 2,
      icon: "/digital-transformation.png",
      title: "كيف جينا",
      value:
        "مع الثورة الرقمية لقينا أنفسنا وتخصصنا فيها لنخدم أصحاب المشاريع بطرق حديثةإبداعية ومبتكرة ونوسع مدي رواجكم",
    },
    {
      id: 3,
      icon: "/rocket.png",
      title: "قيمنا",
      value:
        "الابتكار في التسويق، الشفافية في التعامل، الجودة في التنفيذ، التطور المستمر، وبناء شراكات مستدامة.",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OurValues.map((value, index) => (
            <motion.div
              key={value.id}
              className="flex flex-col items-center text-center gap-3 p-6 bg-[#E5E7EB] shadow-sm rounded-xl cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : index % 2 === 0 ? -50 : 50,
              }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* icon */}
              <div className="p-5 bg-primary rounded-full">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-14"
                  style={{
                    filter:
                      "invert(56%) sepia(48%) saturate(450%) hue-rotate(350deg) brightness(95%) contrast(90%)",
                  }}
                />
              </div>

              {/* desc */}
              <div>
                <h2 className="text-3xl font-bold mb-3 text-primary">
                  {value.title}
                </h2>
                <p className="text-gray-600">{value.value}</p>
                <div className="w-full h-[2px] bg-gradient-to-l from-gray-300 to-transparent mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowUse;
