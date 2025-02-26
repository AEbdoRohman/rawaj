import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-28 md:mt-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 mt-4 md:my-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex items-center justify-center gap-4 px-4 md:px-4 mb-28 rounded-lg"
          variants={containerVariants}
        >
          <motion.form className="w-full md:w-2/3" variants={itemVariants}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-medium mb-2">
                اسم الشركة
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="اسم الشركة"
                required
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-medium mb-2">
                الممثل عن الشركة
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="الممثل عن الشركة"
                required
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-medium mb-2">
                البريد الالكتروني
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="البريد الالكتروني"
                required
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-xl font-medium mb-2">
                رقم الجوال
              </label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                placeholder="رقم الجوال"
                required
                className="w-full  text-right p-3 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-medium mb-2">
                اختر نوع الحملة
              </label>
              <motion.select
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                required
                defaultValue={"نوع الحملة"}
              >
                <option value="نوع الحملة" disabled>
                  نوع الحملة
                </option>
                <option value="option1" className="bg-white">
                  مطاعم
                </option>
                <option value="option2">تجارة الكترونية</option>
                <option value="option3">تطبيقات</option>
                <option value="option3">عيادات</option>
                <option value="option3">غير ذلك</option>
              </motion.select>
            </div>

            <motion.div className="flex justify-center">
              {/* <Button buttonText={t("contact.submit")} /> */}
              <button className="text-lg md:text-2xl w-1/2 px-6 py-3 bg-main_text text-white rounded-md  hover:bg-main_text transition focus:outline-none">
                ارسال
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-4 px-4 rounded-lg"
          variants={containerVariants}
        >
          <motion.div className="mt-8" variants={itemVariants}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 bg-gray-200 rounded-xl">
              <div className="relative p-2 mx-4 mb-2 flex flex-col items-center rounded-md">
                <span className="absolute -top-8 p-6 mb-8 bg-main_text text-white rounded-full">
                  <FaPhoneAlt size={30} />
                </span>
                <a
                  href="https://wa.me/966544293033"
                  className="text-2xl text-main_text px-4 md:px-10 py-6 pt-16 rounded-lg "
                >
                  0544293033
                </a>
              </div>
              <div className="relative mb-2 flex flex-col items-center  p-2 rounded-md">
                <span className="absolute -top-8 p-6 mb-8 bg-main_text text-white rounded-full">
                  <FaEnvelope size={30} />
                </span>
                <a
                  href="mailto:rawahworld0@gmail.com"
                  className="text-2xl text-main_text px-4 md:px-10 py-4 pt-16 rounded-lg "
                >
                  Rawahworld0@gmail.com{" "}
                </a>
              </div>
              <div className="relative mb-2 flex flex-col items-center  p-2 rounded-md">
                <span className="absolute -top-8 p-6 mb-8 bg-main_text text-white rounded-full">
                  <FaMapMarkerAlt size={30} />
                </span>
                <p className="text-2xl text-main_text px-4 md:px-10 py-4 pt-16 rounded-lg ">
                  خميس مشيط _ حي الجامعيين
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
