import React, { useState, useRef } from "react";
import { Play, Pause, Quote } from "lucide-react";

// --- TESTIMONIALS DATA (Exactly 4 items) ---
const TESTIMONIALS_DATA = [
  {
    id: "1",
    type: "quote",
    content: "Our conversion rates finally make sense now. Highly recommended.",
    author: "Alex Turner",
    role: "Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    type: "video",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    author: "James Mitchell",
    role: "CEO, Novara Fintech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    type: "quote",
    content: "Working with this agency transformed our online presence completely. Our leads increased by 3x.",
    author: "Sarah Jenkins",
    role: "Co-Founder, SaaSify",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "4",
    type: "video",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    author: "David Kim",
    role: "Product Lead, Apex AI",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

// --- SHARED AUTHOR FOOTER ---
const AuthorFooter = ({ avatar, author, role }) => (
  <div className="flex items-center gap-3.5 px-6 py-4">
    <img
      src={avatar}
      alt={author}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
    <div className="text-left">
      <h4 className="font-['Comfortaa'] text-sm font-bold text-slate-900">
        {author}
      </h4>
      <p className="text-xs text-slate-500">{role}</p>
    </div>
  </div>
);

// --- DAISYUI VIDEO CARD ---
const VideoTestimonialCard = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card w-full shrink-0 rounded-3xl border border-slate-200/80 bg-white shadow-sm select-none">
      {/* Top Figure matching screenshot's inset media box */}
      <figure className="relative px-3 pt-3">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-900">
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.poster}
            className="h-full w-full object-cover"
            onEnded={() => setIsPlaying(false)}
            playsInline
          />

          {/* Subtle gradient & center Play/Pause control */}
          <div className="pointer-events-none absolute inset-0 bg-black/15" />
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
        </div>
      </figure>

      {/* Bottom Author Bar */}
      <AuthorFooter avatar={item.avatar} author={item.author} role={item.role} />
    </div>
  );
};

// --- DAISYUI QUOTE CARD ---
const QuoteTestimonialCard = ({ item }) => {
  return (
    <div className="card w-full shrink-0 rounded-3xl border border-slate-200/80 bg-white shadow-sm">
      {/* Top Inset Grey Box matching screenshot */}
      <figure className="px-3 pt-3">
        <div className="flex h-64 w-full flex-col justify-start rounded-2xl bg-[#f4f4f5] p-6 text-left">
          <Quote size={26} className="mb-4 text-slate-400" />
          <p className="font-['Comfortaa'] text-base font-medium leading-relaxed text-slate-900">
            {item.content}
          </p>
        </div>
      </figure>

      {/* Bottom Author Bar */}
      <AuthorFooter avatar={item.avatar} author={item.author} role={item.role} />
    </div>
  );
};

// --- MAIN TESTIMONIALS SECTION ---
export const TestimonialsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f8] py-24 font-['Comfortaa']">
      {/* Header Container */}
      <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#536878]" />
          TESTIMONIALS
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-medium tracking-tight text-[#111111] sm:text-5xl md:text-[56px] md:leading-[1.15]">
          Don’t just <span className="font-normal text-[#9e9e9e]">take</span>
          <br />
          our word
        </h2>
      </div>

      {/* Static 4-Column Grid Container */}
      <div className="mx-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS_DATA.map((item) =>
            item.type === "video" ? (
              <VideoTestimonialCard key={item.id} item={item} />
            ) : (
              <QuoteTestimonialCard key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;