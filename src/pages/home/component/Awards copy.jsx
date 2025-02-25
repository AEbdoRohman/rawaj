/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Award Title 1",
      description:
        "This is a short description of the award. Its a brief overview of the achievement.",
      image: "/slider4.jpeg",
      link: "/awards",
    },
    {
      id: 2,
      title: "Award Title 2",
      description:
        "This is a short description of the award. Is a brief overview of the achievement.",
      image: "/slider2.jpeg",
      link: "/awards",
    },
    {
      id: 3,
      title: "Award Title 3",
      description:
        "This is a short description of the award. Its a brief overview of the achievement.",
      image: "/slider3.jpeg",
      link: "/awards",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-6">Awards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <AwardCard
            key={award.id}
            link={award.link}
            title={award.title}
            description={award.description}
            image={award.image}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

const AwardCard = ({ title, description, image, delay, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        translateY: inView ? 0 : 20,
      }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="overflow-hidden group rounded-t-lg cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="px-4 py-3 border-t border-gray-200">
        <Link
          to={`${link}`}
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default Awards;
