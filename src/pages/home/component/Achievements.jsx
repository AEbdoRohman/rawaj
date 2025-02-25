import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaBuilding, FaEye } from "react-icons/fa";

const Achievements = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .getElementById("achievements")
        .getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achievementsData = [
    {
      id: 1,
      icon: <FaUsers />,
      title: "مشروع",
      count: 100,
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: "وحدة سكنية",
      count: 500,
    },
    {
      id: 3,
      icon: <FaEye />,
      title: "وحدة تجارية",
      count: 300,
    },
    {
      id: 4,
      icon: <FaEye />,
      title: "مسطحات بناء  ",
      count: 200000,
    },
  ];

  return (
    <div id="achievements" className="px-8 py-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className={`text-center p-4 transition-all duration-500 border-gray-200 ${
              achievement.id !== achievementsData.length ? "md:border-r-2" : ""
            } ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-20"
            }`}
          >
            {/* {achievement.icon} */}
            <p className="text-5xl font-medium text-primary">
              <span className={`text-5xl font-bold mx-2`}>+</span>
              {inView && (
                <CountUp start={0} end={achievement.count} duration={5.5} />
              )}
            </p>

            <h2 className="text-2xl text-main_text font-bold mt-4 pt-4 border-t-2 w-1/2  mx-auto">
              {achievement.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
