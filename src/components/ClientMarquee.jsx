import React from "react";
import { motion } from "framer-motion";

// Row 1 Clients
const ROW_1 = [
  { id: "1", name: "Virtual Armies" },
  { id: "2", name: "Agilis" },
  { id: "3", name: "The Founders Academy" },
  { id: "4", name: "IELBuzz" },
  { id: "5", name: "ChangeLab" },
  { id: "6", name: "Acuity Scheduling" },
];

// Row 2 Clients
const ROW_2 = [
  { id: "7", name: "SME Matters" },
  { id: "8", name: "SCO Space" },
  { id: "9", name: "Loomia" },
  { id: "10", name: "Lineslip" },
  { id: "11", name: "Elmington" },
  { id: "12", name: "Aether Dynamics" },
];

export const ClientMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-36">
      {/* Centered Header Section */}
      <div className="mx-auto flex w-[80vw] flex-col items-center justify-center space-y-4 text-center mb-14">
        {/* Pill Badge */}
        <span className="mb-4 flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1  text-xs font-medium text-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
          Partnership
        </span>

        {/* Title with Comfortaa font applied explicitly */}
        <h2 className="font-['Comfortaa'] text-3xl font-bold text-slate-900 md:text-5xl">
          Our Amazing Clients
        </h2>
      </div>

      {/* Marquee Wrapper with Left and Right Light Fade Mask */}
      <div className="relative flex w-[90%] mx-auto flex-col gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex flex-shrink-0 items-center justify-around gap-16 pr-16"
          >
            {[...ROW_1, ...ROW_1].map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="flex items-center justify-center px-6 py-3 transition-opacity duration-300 opacity-60 hover:opacity-100"
              >
                <span className="whitespace-nowrap text-2xl font-bold tracking-tighter text-slate-800 hover:text-slate-950">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left Marquee (Reverse Direction) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex flex-shrink-0 items-center justify-around gap-16 pr-16"
          >
            {[...ROW_2, ...ROW_2].map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="flex items-center justify-center px-6 py-3 transition-opacity duration-300 opacity-60 hover:opacity-100"
              >
                <span className="whitespace-nowrap text-2xl font-bold tracking-tighter text-slate-800 hover:text-slate-950">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
