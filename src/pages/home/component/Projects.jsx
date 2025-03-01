import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomeTitle from "../../../componants/HomeTitle";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Button from "../../../componants/button/Button";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  const certificates = [
    {
      id: 1,
      image: "/Project/10.png",
      title: "Project 1",
    },
    { id: 2, image: "/Project/12.png", title: "Project 2" },
    { id: 3, image: "/Project/13.png", title: "Project 3" },
    { id: 4, image: "/Project/14.png", title: "Project 4" },
  ];

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const nextImage = () => {
    setDirection(1);
    setSelectedIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mb-8 md:mt-16">
      <HomeTitle title="مشاريعنا" />
      <div className="container mx-auto my-10 px-4">
        <div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openImage(index)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-10">
            <Button
              buttonText="عرض المزيد"
              path="/projects"
              color="var(--primary)"
              hoverBg="var(--secondary)"
              hoverColor="white"
            />
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <div className="w-8/12">
                <motion.img
                  key={certificates[selectedIndex].image}
                  src={certificates[selectedIndex].image}
                  alt="Selected"
                  className="w-full object-contain rounded-lg"
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              {/* زر الإغلاق */}
              <button
                className="absolute top-5 right-5 text-white text-2xl bg-gray-900 px-3 py-2 rounded-full"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>

              {/* previous and next buttons */}
              <button
                className="absolute left-3 md:left-5 text-white text-xl md:text-4xl bg-gray-900 p-2 md:p-3 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <MdKeyboardDoubleArrowLeft />
              </button>

              <button
                className="absolute right-3 md:right-5 text-white text-xl md:text-4xl bg-gray-900 p-2 md:p-3 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
