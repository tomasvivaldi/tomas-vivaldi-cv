"use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ExperienceCard from "./ExperienceCard";
// import { ExperienceCardData } from "../data/ExperienceCardData";

// export default function WorkExperience() {
//   const [selectedId, setSelectedId] = useState(null);

//   const handleCardClick = (id) => {
//     setSelectedId(id);
//   };

//   const handleOverlayClick = () => {
//     setSelectedId(null);
//   };

//   return (
//     <div className="work-experience">
//       <h3 className="uppercase tracking-[20px] text-gray-400 text-xl">
//         Experience
//       </h3>
//       <div className="cards-container">
//         {ExperienceCardData.map((card) => (
//           <motion.div
//             key={card.index}
//             layoutId={card.index}
//             onClick={() => handleCardClick(card.index)}
//           >
//             <ExperienceCard {...card} />
//           </motion.div>
//         ))}
//       </div>
//       {selectedId !== null && (
//         <div className="overlay" onClick={handleOverlayClick}>
//           <motion.div
//             key="card"
//             className="card"
//             initial={{
//               opacity: 0,
//               top: "-20px",
//               left: "-20px",
//               right: "-20px",
//               bottom: "-20px",
//               borderRadius: "10px",
//             }}
//             animate={{
//               opacity: 1,
//               top: "0px",
//               left: "0px",
//               right: "0px",
//               bottom: "0px",
//               borderRadius: "0px",
//             }}
//             exit={{
//               opacity: 0,
//               top: "-20px",
//               left: "-20px",
//               right: "-20px",
//               bottom: "-20px",
//               borderRadius: "10px",
//             }}
//           >
//             <ExperienceCard {...ExperienceCardData[selectedId]} />
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ExperienceCardData } from "../data/ExperienceCardData";

export default function WorkExperience() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div
      className="h-[700px] relative overflow-hidden flex flex-col text-center
md:text-left  max-w-7xl md:px-10 justify-evenly
mx-auto items-center pt-6"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="uppercase tracking-[20px] text-gray-400 text-xl ">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden
       px-10 py-4 snap-x snap-mandatory scrollbar-thin
       scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50 "
      >
        {ExperienceCardData.map((el, index) => (
          <ExperienceCard
            key={index}
            img={el.img}
            title={el.title}
            subtitle={el.subtitle}
            startDate={el.startDate}
            endDate={el.endDate}
            techstack={el.techstack}
            summaries={el.summaries}
            jobDescription1={el.jobDescription1}
            jobDescription2={el.jobDescription2}
          />
        ))}

        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              key="overlay"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm flex items-center justify-center"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                key="card"
                initial={{
                  opacity: 0,
                  top: "-20px",
                  left: "-20px",
                  right: "-20px",
                  bottom: "-20px",
                  borderRadius: "10px",
                }}
                animate={{
                  opacity: 1,
                  top: "0px",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  borderRadius: "0px",
                }}
                exit={{
                  opacity: 0,
                  top: "-20px",
                  left: "-20px",
                  right: "-20px",
                  bottom: "-20px",
                  borderRadius: "10px",
                }}
                className="fixed z-50 p-10 bg-white w-full h-full overflow-auto"
              >
                <ExperienceCard
                  layoutId={selectedId}
                  onClick={() => setSelectedId(null)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
