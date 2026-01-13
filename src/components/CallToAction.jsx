import { Zap } from "lucide-react";

const CallToAction = () => (
  <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
    <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-blue-50 p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
          Ready to Close Bigger Deals <br /> 
          & Build a <span className="text-blue-600 italic">7-Figure</span> Pipeline?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Get a free 20-minute strategy call. Walk away with clarity, not pressure. No fluff, just a roadmap.
        </p>
        <button className="px-12 py-6 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-200/50 flex items-center gap-3 group">
          Book Your Free Strategy Call
          <Zap className="group-hover:fill-current" size={20} />
        </button>
      </div>
    </div>
  </section>
);

export default CallToAction;