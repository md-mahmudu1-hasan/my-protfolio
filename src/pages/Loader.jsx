import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1 animate-pulse">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-bold">
            Loading
          </p>
          <div className="h-0.5 w-12 bg-primary/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary w-full -translate-x-full animate-[shimmer_1s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
