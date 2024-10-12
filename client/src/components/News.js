import React from "react";
import { motion } from "framer-motion";

const News = () => {
  const items = [
    {
      text: "Bishop Cotton Boys School Ranked No.1 in India",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJpc2hvcCUyMGNvdHRvbiUyMGJveXxlbnwwfHx8fDE2MzUwMjI4MDQ&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      text: "New Innovations in Education Technology",
      image: "https://th.bing.com/th/id/OIP.p1_3yqRT1y34Pfxd6kVOtQHaFj?rs=1&pid=ImgDetMain",
    },
    {
      text: "Global Education Trends for 2024",
      image: "https://th.bing.com/th/id/OIP.Myonb0l2IsRxlDK6LaCC5QHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
    },
    {
      text: "Top 10 Schools in the World",
      image: "https://th.bing.com/th/id/OIP.rEuiZehhsDGBB2yimpUnAAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      text: "Revolutionizing Online Learning",
      image: "https://th.bing.com/th/id/OIP.mtvgiMGovSjydeSQ-B-GLgHaFj?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="bg-green-900 py-20 overflow-hidden">
      <h2 className="text-white text-2xl font-bold text-center mb-5">
        News and Updates
      </h2>
      <div className="flex space-x-10 w-full relative"> {/* Adjusted space between cards */}
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[600px] h-[300px] bg-white rounded-lg shadow-lg overflow-hidden" // Set to 600px width and 300px height here
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 8, // Adjusted duration for a slower slide
              ease: "linear",
            }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-[300px] object-cover" // Set to 300px height here
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold p-2"> {/* Removed background classes */}
                {item.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
